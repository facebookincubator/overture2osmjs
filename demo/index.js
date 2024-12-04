/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import sample_locations from "../sampleData/1500_random_places.geojson" with { type: "json" };
import { overtureToOSMData } from '../src/overture2osm';

import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/github.css';
hljs.registerLanguage('json', json);

const map = new maplibregl.Map({
  container: 'map', // container id
  //style: 'https://demotiles.maplibre.org/style.json', // style URL
  //style: 'https://raw.githubusercontent.com/go2garret/maps/main/src/assets/json/openStreetMap.json',
  style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=HTcVOiEYvpYBd83GexmO',
  center: [0, 0], // starting position [lng, lat]
  zoom: 1 // starting zoom
});

console.log(sample_locations);
map.on('load', () => {
  map.addSource('places', {
    type: 'geojson',
    data: sample_locations,
    cluster: true,
    clusterMaxZoom: 14, // Max zoom to cluster points on
    clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
  });

  map.addLayer({
    id: 'clusters',
    type: 'circle',
    source: 'places',
    filter: ['has', 'point_count'],
    paint: {
      // Use step expressions (https:maplibre.org/maplibre-style-spec/#expressions-step)
      // with three steps to implement three types of circles:
      //   * Blue, 20px circles when point count is less than 100
      //   * Yellow, 30px circles when point count is between 100 and 750
      //   * Pink, 40px circles when point count is greater than or equal to 750
      'circle-color': [
        'step',
        ['get', 'point_count'],
        '#51bbd6',
        100,
        '#f1f075',
        750,
        '#f28cb1'
      ],
      'circle-radius': [
        'step',
        ['get', 'point_count'],
        20,
        100,
        30,
        750,
        40
      ]
    }
  });

  map.addLayer({
    id: 'cluster-count',
    type: 'symbol',
    source: 'places',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 12
    }
  });

  map.addLayer({
    id: 'unclustered-point',
    type: 'circle',
    source: 'places',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-color': '#d6689d',
      'circle-radius': 10,
      'circle-stroke-width': 1,
      'circle-stroke-color': '#fff'
    }
  });

  // inspect a cluster on click
  map.on('click', 'clusters', async (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ['clusters']
    });
    const clusterId = features[0].properties.cluster_id;
    const zoom = await map.getSource('places').getClusterExpansionZoom(clusterId);
    map.easeTo({
      center: features[0].geometry.coordinates,
      zoom
    });
  });

  // When a click event occurs on a feature in
  // the unclustered-point layer, open a popup at
  // the location of the feature, with
  // description HTML from its properties.
  map.on('click', 'unclustered-point', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const props = e.features[0].properties;
    // This is gross, but maplibre stringifies objects and arrays for some reason
    const objProps = {};
    if (props.categories) objProps.categories = JSON.parse(props.categories);
    objProps.confidence = props.confidence;
    if (props.websites) objProps.websites = JSON.parse(props.websites);
    if (props.emails) objProps.emails = JSON.parse(props.emails);
    if (props.socials) objProps.socials = JSON.parse(props.socials);
    if (props.phones) objProps.phones = JSON.parse(props.phones);
    if (props.names) objProps.names = JSON.parse(props.names);
    if (props.brand) objProps.brand = JSON.parse(props.brand);
    if (props.addresses) objProps.addresses = JSON.parse(props.addresses);

    const feature = {
      id: e.features[0].id,
      type: "feature",
      geometry: e.features[0].geometry,
      properties: objProps,
    };
    overtureToOSMData(feature, true).then((osmTags) => {

      const propJson = hljs.highlight(JSON.stringify(objProps, null, 4), {language: 'json'}).value;
      const osmJson = hljs.highlight(JSON.stringify(osmTags, null, 4), {language: 'json'}).value;

      const html = `
<h2>Name: ${objProps.names.primary}</h2>
<div class="codeParent">
<div class="codeWrapper"><h3>Overture Properties:</h3><pre><code>${propJson}</code></pre></div>
<div class="codeWrapper"><h3>Converted OSM Tags:</h3><pre><code>${osmJson}</code></pre></div>
</div>
`;

      new maplibregl.Popup()
        .setLngLat(coordinates)
        .setHTML(html)
        .addTo(map);
    });
  });

  map.on('mouseenter', 'clusters', () => {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseleave', 'clusters', () => {
    map.getCanvas().style.cursor = '';
  });
});
