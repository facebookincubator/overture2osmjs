import osm_tag_dict from "./overture2osm.json" with { type: "json" };

/**
 * Looks up OSM tags corresponding to Overture category from embedded dictionary
 *
 * @param {string} overtureCategory - The name of the category.
 *
 * @returns {?object} An object where key/value pairs correspond to OSM tag key/values,
 * or null if the category isn't found in the embedded dictionary.
 *
 * Both the keys and values are strings, including namespaced keys and semicolon-separated values.
 */
function getOSMCategoryTags (overtureCategory) {
  if (osm_tag_dict[overtureCategory] === undefined) {
    console.warn(`Category ${overtureCategory} not found in dictionary!`);
    return null;
  }
  return osm_tag_dict[overtureCategory].osm_tags;
}

/**
 * Converts an Overture Place-type geojson object to OSM tags.
 *
 * @param {object} feature - An Overture Place-type object.
 * See https://docs.overturemaps.org/schema/reference/places/place/
 *
 * @returns {object} An object containing key/value pairs corresponding to OSM tags.
 * Both the key and the value are strings.
 */
function overtureToOSMData (feature) {
  const props = feature.properties;
  let osm_tags = {};

  // either null or the primary category
  // optional chaining operator (the ?.) is supported in post-2020 browsers. what versions are we targeting?
  const primary_category = props?.categories?.primary;

  // we need to skip the category of 'structure_and_geography' because it is too vague to convert without context
  if (primary_category && primary_category !== "structure_and_geography") {
    Object.assign(osm_tags, getOSMCategoryTags(primary_category));
  } else {
    console.warn(`No primary category in feature with ID ${props.id}`);
  }

  if (props?.names?.primary) {
    osm_tags.name = props.names.primary;
  } else {
    console.warn(`No primary name in feature with ID ${props.id}`);
  }

  if (props?.brand?.names?.primary) {
    osm_tags.brand = props.brand.names.primary;
  }

  if (props?.phones) osm_tags['contact:phone'] = props.phones.join(';');
  if (props?.websites) osm_tags['contact:website'] = props.websites.join(';');
  if (props?.emails) osm_tags['contact:email'] = props.emails.join(';');

  if (props?.socials) {
    for (const url of props.socials) {
      // assumes no subdomains or weird urls, and no duplicate links
      const website_name = url.split('.')[1];
      osm_tags[`contact:${website_name}`] = url;
    }
  }

  if (props?.sources) {
    for (const source of props.sources) {
      if (source.record_id) osm_tags.source = `Overture/${source.dataset}/${source.record_id}`;
      else osm_tags.source = `Overture/${source.dataset}`;
    }
  }

  return osm_tags;
}

export {getOSMCategoryTags, overtureToOSMData};
