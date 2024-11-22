(() => {
  // src/overture2osm.json
  var overture2osm_default = {
    forest: {
      osm_tags: {
        landuse: "forest"
      },
      icon: "maki-park-alt1",
      pretty_name: "Forest"
    },
    stadium_arena: {
      osm_tags: {
        leisure: "stadium"
      },
      icon: "maki-pitch",
      pretty_name: "Stadium Arena"
    },
    farm: {
      osm_tags: {
        landuse: "farm"
      },
      icon: "maki-farm",
      pretty_name: "Farm"
    },
    professional_services: {
      osm_tags: {
        office: "professional_services"
      },
      icon: "temaki-briefcase",
      pretty_name: "Professional Services"
    },
    baptist_church: {
      osm_tags: {
        amenity: "place_of_worship",
        religion: "baptist"
      },
      icon: "maki-place-of-worship",
      pretty_name: "Baptist Church"
    },
    health_insurance_office: {
      osm_tags: {
        office: "insurance",
        insurance: "health"
      },
      icon: "temaki-briefcase_shield",
      pretty_name: "Health Insurance Office"
    },
    government_services: {
      osm_tags: {
        office: "government"
      },
      icon: "temaki-town_hall",
      pretty_name: "Government Services"
    },
    architect: {
      osm_tags: {
        office: "architect"
      },
      icon: "fas-drafting-compass",
      pretty_name: "Architect"
    },
    beverage_store: {
      osm_tags: {
        shop: "beverages"
      },
      icon: "temaki-bottles",
      pretty_name: "Beverage Store"
    },
    patisserie_cake_shop: {
      osm_tags: {
        shop: "pastry",
        cuisine: "cake"
      },
      icon: "maki-bakery",
      pretty_name: "Patisserie Cake Shop"
    },
    park: {
      osm_tags: {
        leisure: "park"
      },
      icon: "temaki-tree_and_bench",
      pretty_name: "Park"
    },
    print_media: {
      osm_tags: {
        office: "newspaper"
      },
      icon: "fas-newspaper",
      pretty_name: "Print Media"
    },
    spas: {
      osm_tags: {
        shop: "beauty",
        beauty: "spa"
      },
      icon: "temaki-spa",
      pretty_name: "Spas"
    },
    passport_and_visa_services: {
      osm_tags: {
        office: "passport_and_visa_services"
      },
      icon: "temaki-town_hall",
      pretty_name: "Passport and Visa Services"
    },
    restaurant: {
      osm_tags: {
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "Restaurant"
    },
    dentist: {
      osm_tags: {
        amenity: "dentist"
      },
      icon: "maki-dentist",
      pretty_name: "Dentist"
    },
    sports_club_and_league: {
      osm_tags: {
        leisure: "sports_club"
      },
      icon: "maki-pitch",
      pretty_name: "Sports Club and League"
    },
    thai_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "thai"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Thai Restaurant"
    },
    clothing_store: {
      osm_tags: {
        shop: "clothes"
      },
      icon: "fas-tshirt",
      pretty_name: "Clothing Store"
    },
    insurance_agency: {
      osm_tags: {
        office: "insurance"
      },
      icon: "temaki-briefcase_shield",
      pretty_name: "Insurance Agency"
    },
    barber: {
      osm_tags: {
        shop: "hairdresser"
      },
      icon: "temaki-beauty_salon",
      pretty_name: "Barber"
    },
    bar: {
      osm_tags: {
        amenity: "bar"
      },
      icon: "maki-bar",
      pretty_name: "Bar"
    },
    agriculture: {
      osm_tags: {
        landuse: "farmland"
      },
      icon: "fas-tractor",
      pretty_name: "Agriculture"
    },
    accommodation: {
      osm_tags: {
        amenity: "hotel"
      },
      icon: "maki-lodging",
      pretty_name: "Accommodation"
    },
    event_planning: {
      osm_tags: {
        office: "event_planning"
      },
      icon: "fas-users",
      pretty_name: "Event Planning"
    },
    non_governmental_association: {
      osm_tags: {
        amenity: "community_centre"
      },
      icon: "maki-town-hall",
      pretty_name: "Non Governmental Association"
    },
    elementary_school: {
      osm_tags: {
        amenity: "school",
        education: "primary"
      },
      icon: "temaki-school",
      pretty_name: "Elementary School"
    },
    landmark_and_historical_building: {
      osm_tags: {
        historic: "yes"
      },
      icon: "temaki-ruins",
      pretty_name: "Landmark and Historical Building"
    },
    gym: {
      osm_tags: {
        leisure: "sports_centre"
      },
      icon: "maki-pitch",
      pretty_name: "Gym"
    },
    pilates_studio: {
      osm_tags: {
        amenity: "gym",
        sport: "pilates"
      },
      icon: "maki-pitch",
      pretty_name: "Pilates Studio"
    },
    hotel: {
      osm_tags: {
        tourism: "hotel"
      },
      icon: "fas-concierge-bell",
      pretty_name: "Hotel"
    },
    advertising_agency: {
      osm_tags: {
        office: "advertising_agency"
      },
      icon: "maki-suitcase",
      pretty_name: "Advertising Agency"
    },
    educational_research_institute: {
      osm_tags: {
        amenity: "school",
        research_institute: "yes"
      },
      icon: "temaki-school",
      pretty_name: "Educational Research Institute"
    },
    furniture_store: {
      osm_tags: {
        shop: "furniture"
      },
      icon: "fas-couch",
      pretty_name: "Furniture Store"
    },
    car_dealer: {
      osm_tags: {
        shop: "car"
      },
      icon: "maki-car",
      pretty_name: "Car Dealer"
    },
    asian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "asian"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Asian Restaurant"
    },
    contractor: {
      osm_tags: {
        craft: "builder"
      },
      icon: "temaki-tools",
      pretty_name: "Contractor"
    },
    beauty_salon: {
      osm_tags: {
        shop: "beauty"
      },
      icon: "temaki-lipstick",
      pretty_name: "Beauty Salon"
    },
    gas_station: {
      osm_tags: {
        amenity: "fuel"
      },
      icon: "maki-fuel",
      pretty_name: "Gas Station"
    },
    art_gallery: {
      osm_tags: {
        tourism: "artwork"
      },
      icon: "temaki-statue",
      pretty_name: "Art Gallery"
    },
    topic_concert_venue: {
      osm_tags: {
        amenity: "theatre"
      },
      icon: "maki-theatre",
      pretty_name: "Topic Concert Venue"
    },
    beauty_and_spa: {
      osm_tags: {
        shop: "beauty",
        leisure: "spa"
      },
      icon: "temaki-beauty_salon",
      pretty_name: "Beauty and Spa"
    },
    industrial_company: {
      osm_tags: {
        office: "industrial_company"
      },
      icon: "maki-suitcase",
      pretty_name: "Industrial Company"
    },
    tapas_bar: {
      osm_tags: {
        amenity: "bar",
        cuisine: "spanish;tapas"
      },
      icon: "maki-restaurant",
      pretty_name: "Tapas Bar"
    },
    auto_glass_service: {
      osm_tags: {
        shop: "car_repair",
        car_repair: "auto_glass"
      },
      icon: "maki-car-repair",
      pretty_name: "Auto Glass Service"
    },
    river: {
      osm_tags: {
        waterway: "river"
      },
      icon: "iD-waterway-river",
      pretty_name: "River"
    },
    shopping: {
      osm_tags: {
        shop: "yes"
      },
      icon: "maki-shop",
      pretty_name: "Shopping"
    },
    tattoo_and_piercing: {
      osm_tags: {
        shop: "tattoo"
      },
      icon: "temaki-tattoo_machine",
      pretty_name: "Tattoo and Piercing"
    },
    coffee_shop: {
      osm_tags: {
        amenity: "cafe",
        cuisine: "coffee_shop"
      },
      icon: "temaki-hot_drink_cup",
      pretty_name: "Coffee Shop"
    },
    religious_organization: {
      osm_tags: {
        office: "religious_organization"
      },
      icon: "maki-place-of-worship",
      pretty_name: "Religious Organization"
    },
    movie_television_studio: {
      osm_tags: {
        office: "company",
        studio: "video;television"
      },
      icon: "maki-suitcase",
      pretty_name: "Movie & Television Studio"
    },
    cafe: {
      osm_tags: {
        amenity: "cafe"
      },
      icon: "temaki-hot_drink_cup",
      pretty_name: "Cafe"
    },
    bank_credit_union: {
      osm_tags: {
        amenity: "bank"
      },
      icon: "maki-bank",
      pretty_name: "Bank Credit Union"
    },
    school: {
      osm_tags: {
        amenity: "school"
      },
      icon: "temaki-school",
      pretty_name: "School"
    },
    automotive_repair: {
      osm_tags: {
        shop: "car_repair"
      },
      icon: "maki-car-repair",
      pretty_name: "Automotive Repair"
    },
    prenatal_perinatal_care: {
      osm_tags: {
        healthcare: "prenatal_perinatal_care"
      },
      icon: "maki-doctor",
      pretty_name: "Prenatal & Perinatal Care"
    },
    web_designer: {
      osm_tags: {
        craft: "web_designer"
      },
      icon: "maki-suitcase",
      pretty_name: "Web Designer"
    },
    hobby_shop: {
      osm_tags: {
        shop: "hobby"
      },
      icon: "maki-shop",
      pretty_name: "Hobby Shop"
    },
    church_cathedral: {
      osm_tags: {
        amenity: "place_of_worship",
        religion: "christian",
        building: "cathedral"
      },
      icon: "fas-church",
      pretty_name: "Church Cathedral"
    },
    mosque: {
      osm_tags: {
        amenity: "place_of_worship",
        religion: "muslim"
      },
      icon: "maki-religious-muslim",
      pretty_name: "Mosque"
    },
    food_stand: {
      osm_tags: {
        amenity: "fast_food"
      },
      icon: "maki-fast-food",
      pretty_name: "Food Stand"
    },
    active_life: {
      osm_tags: {
        leisure: "sports_centre"
      },
      icon: "maki-pitch",
      pretty_name: "Active Life"
    },
    home_developer: {
      osm_tags: {
        office: "home_developer"
      },
      icon: "temaki-real_estate_agency",
      pretty_name: "Home Developer"
    },
    hospital: {
      osm_tags: {
        amenity: "hospital"
      },
      icon: "maki-hospital",
      pretty_name: "Hospital"
    },
    family_practice: {
      osm_tags: {
        amenity: "clinic",
        healthcare: "clinic",
        "healthcare:speciality": "family_practice"
      },
      icon: "maki-doctor",
      pretty_name: "Family Practice"
    },
    bicycle_shop: {
      osm_tags: {
        shop: "bicycle"
      },
      icon: "maki-bicycle",
      pretty_name: "Bicycle Shop"
    },
    mexican_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "mexican"
      },
      icon: "fas-pepper-hot",
      pretty_name: "Mexican Restaurant"
    },
    iron_and_steel_industry: {
      osm_tags: {
        man_made: "works",
        product: "steel_products;iron"
      },
      icon: "maki-industry",
      pretty_name: "Iron and Steel Industry"
    },
    cosmetic_dentist: {
      osm_tags: {
        amenity: "dentist",
        healthcare: "dentist",
        "healthcare:speciality": "cosmetic_dentistry"
      },
      icon: "maki-dentist",
      pretty_name: "Cosmetic Dentist"
    },
    charity_organization: {
      osm_tags: {
        office: "charity"
      },
      icon: "maki-suitcase",
      pretty_name: "Charity Organization"
    },
    community_services_non_profits: {
      osm_tags: {
        amenity: "social_facility"
      },
      icon: "temaki-social_facility",
      pretty_name: "Community Services Non Profits"
    },
    jewelry_store: {
      osm_tags: {
        shop: "jewelry"
      },
      icon: "maki-jewelry-store",
      pretty_name: "Jewelry Store"
    },
    real_estate: {
      osm_tags: {
        office: "real_estate_agent"
      },
      icon: "maki-suitcase",
      pretty_name: "Real Estate"
    },
    graphic_designer: {
      osm_tags: {
        craft: "graphic_designer"
      },
      icon: "maki-art-gallery",
      pretty_name: "Graphic Designer"
    },
    public_service_and_government: {
      osm_tags: {
        office: "government"
      },
      icon: "temaki-town_hall",
      pretty_name: "Public Service and Government"
    },
    automotive: {
      osm_tags: {
        shop: "car_repair"
      },
      icon: "maki-car-repair",
      pretty_name: "Automotive"
    },
    lawyer: {
      osm_tags: {
        office: "lawyer"
      },
      icon: "fas-suitcase",
      pretty_name: "Lawyer"
    },
    town_hall: {
      osm_tags: {
        amenity: "townhall"
      },
      icon: "temaki-capitol",
      pretty_name: "Town Hall"
    },
    trophy_shop: {
      osm_tags: {
        shop: "trophy"
      },
      icon: "fas-trophy",
      pretty_name: "Trophy Shop"
    },
    campus_building: {
      osm_tags: {
        office: "educational_institution"
      },
      icon: "maki-college",
      pretty_name: "Campus Building"
    },
    golf_course: {
      osm_tags: {
        leisure: "golf_course"
      },
      icon: "maki-golf",
      pretty_name: "Golf Course"
    },
    jet_skis_rental: {
      osm_tags: {
        amenity: "jet_ski_rental"
      },
      icon: "temaki-boat_rental",
      pretty_name: "Jet Skis Rental"
    },
    agricultural_service: {
      osm_tags: {
        office: "agricultural_service"
      },
      icon: "maki-farm",
      pretty_name: "Agricultural Service"
    },
    windows_installation: {
      osm_tags: {
        craft: "windows_installation"
      },
      icon: "temaki-window",
      pretty_name: "Windows Installation"
    },
    police_department: {
      osm_tags: {
        amenity: "police"
      },
      icon: "temaki-police_officer",
      pretty_name: "Police Department"
    },
    printing_services: {
      osm_tags: {
        shop: "printing"
      },
      icon: "fas-print",
      pretty_name: "Printing Services"
    },
    college_university: {
      osm_tags: {
        amenity: "university"
      },
      icon: "maki-college",
      pretty_name: "College University"
    },
    real_estate_agent: {
      osm_tags: {
        office: "real_estate"
      },
      icon: "temaki-real_estate_agency",
      pretty_name: "Real Estate Agent"
    },
    japanese_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "japanese"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Japanese Restaurant"
    },
    hardware_store: {
      osm_tags: {
        shop: "hardware"
      },
      icon: "temaki-tools",
      pretty_name: "Hardware Store"
    },
    electronics: {
      osm_tags: {
        shop: "electronics"
      },
      icon: "fas-plug",
      pretty_name: "Electronics"
    },
    grocery_store: {
      osm_tags: {
        shop: "supermarket"
      },
      icon: "maki-grocery",
      pretty_name: "Grocery Store"
    },
    italian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "italian"
      },
      icon: "maki-restaurant",
      pretty_name: "Italian Restaurant"
    },
    geological_services: {
      osm_tags: {
        office: "geological_service"
      },
      icon: "temaki-pick_hammer",
      pretty_name: "Geological Services"
    },
    currency_exchange: {
      osm_tags: {
        amenity: "bureau_de_change"
      },
      icon: "temaki-money_hand",
      pretty_name: "Currency Exchange"
    },
    bridge: {
      osm_tags: {
        man_made: "bridge"
      },
      icon: "maki-bridge",
      pretty_name: "Bridge"
    },
    property_management: {
      osm_tags: {
        office: "property_management"
      },
      icon: "maki-suitcase",
      pretty_name: "Property Management"
    },
    cosmetic_and_beauty_supplies: {
      osm_tags: {
        shop: "cosmetics"
      },
      icon: "temaki-lipstick",
      pretty_name: "Cosmetic and Beauty Supplies"
    },
    eat_and_drink: {
      osm_tags: {
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "Eat and Drink"
    },
    arts_and_entertainment: {
      osm_tags: {
        amenity: "arts_centre"
      },
      icon: "maki-theatre",
      pretty_name: "Arts and Entertainment"
    },
    youth_organizations: {
      osm_tags: {
        amenity: "community_centre",
        community_centre: "youth_centre"
      },
      icon: "maki-town-hall",
      pretty_name: "Youth Organizations"
    },
    financial_service: {
      osm_tags: {
        office: "financial"
      },
      icon: "maki-bank",
      pretty_name: "Financial Service"
    },
    pizza_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "pizza"
      },
      icon: "maki-restaurant-pizza",
      pretty_name: "Pizza Restaurant"
    },
    convenience_store: {
      osm_tags: {
        shop: "convenience"
      },
      icon: "fas-shopping-basket",
      pretty_name: "Convenience Store"
    },
    education: {
      osm_tags: {
        office: "educational_institution"
      },
      icon: "temaki-school",
      pretty_name: "Education"
    },
    freight_and_cargo_service: {
      osm_tags: {
        office: "logistics"
      },
      icon: "temaki-freight_car",
      pretty_name: "Freight and Cargo Service"
    },
    auto_detailing: {
      osm_tags: {
        shop: "car_wash",
        "service:vehicle:detailing": "yes"
      },
      icon: "temaki-car_wash",
      pretty_name: "Auto Detailing"
    },
    pet_store: {
      osm_tags: {
        shop: "pet"
      },
      icon: "fas-cat",
      pretty_name: "Pet Store"
    },
    martial_arts_club: {
      osm_tags: {
        amenity: "dojo",
        club: "martial_arts"
      },
      icon: "maki-pitch",
      pretty_name: "Martial Arts Club"
    },
    political_organization: {
      osm_tags: {
        office: "political_organization"
      },
      icon: "maki-town-hall",
      pretty_name: "Political Organization"
    },
    home_improvement_store: {
      osm_tags: {
        shop: "doityourself"
      },
      icon: "temaki-tools",
      pretty_name: "Home Improvement Store"
    },
    cajun_creole_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "cajun_creole"
      },
      icon: "maki-restaurant",
      pretty_name: "Cajun Creole Restaurant"
    },
    hvac_services: {
      osm_tags: {
        craft: "hvac"
      },
      icon: "temaki-tools",
      pretty_name: "Hvac Services"
    },
    swimming_pool: {
      osm_tags: {
        leisure: "swimming_pool"
      },
      icon: "fas-swimming-pool",
      pretty_name: "Swimming Pool"
    },
    central_government_office: {
      osm_tags: {
        office: "government"
      },
      icon: "temaki-town_hall",
      pretty_name: "Central Government Office"
    },
    wholesale_store: {
      osm_tags: {
        shop: "wholesale"
      },
      icon: "maki-warehouse",
      pretty_name: "Wholesale Store"
    },
    hindu_temple: {
      osm_tags: {
        amenity: "place_of_worship",
        religion: "hindu"
      },
      icon: "temaki-hinduism",
      pretty_name: "Hindu Temple"
    },
    chinese_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "chinese"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Chinese Restaurant"
    },
    shopping_center: {
      osm_tags: {
        shop: "mall"
      },
      icon: "fas-shopping-basket",
      pretty_name: "Shopping Center"
    },
    race_track: {
      osm_tags: {
        leisure: "track"
      },
      icon: "temaki-racetrack_oval",
      pretty_name: "Race Track"
    },
    "women's_clothing_store": {
      osm_tags: {
        shop: "clothes"
      },
      icon: "fas-tshirt",
      pretty_name: "Women'S Clothing Store"
    },
    glass_and_mirror_sales_service: {
      osm_tags: {
        shop: "glaziery"
      },
      icon: "temaki-window",
      pretty_name: "Glass and Mirror Sales Service"
    },
    music_venue: {
      osm_tags: {
        amenity: "theatre"
      },
      icon: "maki-theatre",
      pretty_name: "Music Venue"
    },
    community_center: {
      osm_tags: {
        amenity: "community_centre"
      },
      icon: "maki-town-hall",
      pretty_name: "Community Center"
    },
    commercial_industrial: {
      osm_tags: {
        man_made: "works"
      },
      icon: "maki-industry",
      pretty_name: "Commercial Industrial"
    },
    industrial_equipment: {
      osm_tags: {
        shop: "industrial_equipment"
      },
      icon: "fas-tools",
      pretty_name: "Industrial Equipment"
    },
    sports_wear: {
      osm_tags: {
        shop: "clothes",
        clothes: "sports_wear"
      },
      icon: "fas-tshirt",
      pretty_name: "Sports Wear"
    },
    thrift_store: {
      osm_tags: {
        shop: "second_hand"
      },
      icon: "maki-shop",
      pretty_name: "Thrift Store"
    },
    sports_and_recreation_venue: {
      osm_tags: {
        leisure: "sports_centre"
      },
      icon: "maki-pitch",
      pretty_name: "Sports and Recreation Venue"
    },
    test_preparation: {
      osm_tags: {
        amenity: "prep_school"
      },
      icon: "temaki-school",
      pretty_name: "Test Preparation"
    },
    lake: {
      osm_tags: {
        natural: "water",
        water: "lake"
      },
      icon: "maki-water",
      pretty_name: "Lake"
    },
    diner: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "diner"
      },
      icon: "maki-restaurant",
      pretty_name: "Diner"
    },
    post_office: {
      osm_tags: {
        amenity: "post_office"
      },
      icon: "maki-post",
      pretty_name: "Post Office"
    },
    beach_resort: {
      osm_tags: {
        leisure: "beach_resort"
      },
      icon: "fas-umbrella-beach",
      pretty_name: "Beach Resort"
    },
    landscaping: {
      osm_tags: {
        craft: "landscaping"
      },
      icon: "temaki-lawn",
      pretty_name: "Landscaping"
    },
    medical_service_organizations: {
      osm_tags: {
        office: "medical_service_organization"
      },
      icon: "maki-hospital",
      pretty_name: "Medical Service Organizations"
    },
    lebanese_restaurant: {
      osm_tags: {
        cuisine: "lebanese",
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "Lebanese Restaurant"
    },
    home_service: {
      osm_tags: {
        office: "home_service"
      },
      icon: "maki-home",
      pretty_name: "Home Service"
    },
    event_photography: {
      osm_tags: {
        craft: "photographer",
        "photographer:speciality": "event_photography"
      },
      icon: "fas-camera-retro",
      pretty_name: "Event Photography"
    },
    automotive_parts_and_accessories: {
      osm_tags: {
        shop: "car_parts"
      },
      icon: "fas-car-battery",
      pretty_name: "Automotive Parts and Accessories"
    },
    attractions_and_activities: {
      osm_tags: {
        tourism: "attraction"
      },
      icon: "maki-star",
      pretty_name: "Attractions and Activities"
    },
    travel: {
      osm_tags: {
        shop: "travel_agency"
      },
      icon: "fas-suitcase",
      pretty_name: "Travel"
    },
    music_school: {
      osm_tags: {
        amenity: "music_school"
      },
      icon: "fas-music",
      pretty_name: "Music School"
    },
    fast_food_restaurant: {
      osm_tags: {
        amenity: "fast_food"
      },
      icon: "maki-fast-food",
      pretty_name: "Fast Food Restaurant"
    },
    pub: {
      osm_tags: {
        amenity: "pub"
      },
      icon: "maki-beer",
      pretty_name: "Pub"
    },
    hiking_trail: {
      osm_tags: {
        highway: "trailhead"
      },
      icon: "temaki-pedestrian",
      pretty_name: "Hiking Trail"
    },
    cafetaria: {
      osm_tags: {
        amenity: "fast_food",
        fast_food: "cafeteria"
      },
      icon: "maki-restaurant",
      pretty_name: "Cafeteria"
    },
    yoga_studio: {
      osm_tags: {
        leisure: "fitness_centre",
        sport: "yoga"
      },
      icon: "maki-pitch",
      pretty_name: "Yoga Studio"
    },
    natural_hot_springs: {
      osm_tags: {
        natural: "hot_spring"
      },
      icon: "maki-hot-spring",
      pretty_name: "Natural Hot Springs"
    },
    mediterranean_restaurant: {
      osm_tags: {
        cuisine: "mediterranean",
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "Mediterranean Restaurant"
    },
    theatre: {
      osm_tags: {
        amenity: "theatre"
      },
      icon: "maki-theatre",
      pretty_name: "Theatre"
    },
    psychologist: {
      osm_tags: {
        healthcare: "psychotherapist"
      },
      icon: "maki-doctor",
      pretty_name: "Psychologist"
    },
    butcher_shop: {
      osm_tags: {
        shop: "butcher"
      },
      icon: "temaki-cleaver",
      pretty_name: "Butcher Shop"
    },
    pet_groomer: {
      osm_tags: {
        shop: "pet_grooming"
      },
      icon: "temaki-pet_grooming",
      pretty_name: "Pet Groomer"
    },
    farmers_market: {
      osm_tags: {
        amenity: "marketplace",
        shop: "farm"
      },
      icon: "fas-apple-alt",
      pretty_name: "Farmers Market"
    },
    mobile_phone_store: {
      osm_tags: {
        shop: "mobile_phone"
      },
      icon: "fas-mobile-alt",
      pretty_name: "Mobile Phone Store"
    },
    zoo: {
      osm_tags: {
        tourism: "zoo"
      },
      icon: "temaki-zoo",
      pretty_name: "Zoo"
    },
    food: {
      osm_tags: {
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "Food"
    },
    fair: {
      osm_tags: {
        leisure: "festival_grounds"
      },
      icon: "maki-amusement-park",
      pretty_name: "Fair"
    },
    software_development: {
      osm_tags: {
        office: "software_development"
      },
      icon: "fas-laptop",
      pretty_name: "Software Development"
    },
    tv_mounting: {
      osm_tags: {
        craft: "television_mounting"
      },
      icon: "temaki-billboard",
      pretty_name: "TV Mounting"
    },
    delicatessen: {
      osm_tags: {
        shop: "deli"
      },
      icon: "temaki-meat",
      pretty_name: "Delicatessen"
    },
    fruits_and_vegetables: {
      osm_tags: {
        shop: "greengrocer"
      },
      icon: "fas-carrot",
      pretty_name: "Fruits and Vegetables"
    },
    high_school: {
      osm_tags: {
        amenity: "school",
        "school:type": "high"
      },
      icon: "temaki-school",
      pretty_name: "High School"
    },
    gastropub: {
      osm_tags: {
        amenity: "pub",
        cuisine: "gastropub"
      },
      icon: "maki-beer",
      pretty_name: "Gastropub"
    },
    mortgage_broker: {
      osm_tags: {
        office: "mortgage_broker"
      },
      icon: "maki-suitcase",
      pretty_name: "Mortgage Broker"
    },
    amateur_sports_team: {
      osm_tags: {
        office: "sports_league"
      },
      icon: "maki-basketball",
      pretty_name: "Amateur Sports Team"
    },
    outdoor_gear: {
      osm_tags: {
        shop: "outdoor"
      },
      icon: "temaki-compass",
      pretty_name: "Outdoor Gear"
    },
    buffet_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "buffet"
      },
      icon: "maki-restaurant",
      pretty_name: "Buffet Restaurant"
    },
    telecommunications_company: {
      osm_tags: {
        office: "telecommunication"
      },
      icon: "maki-telephone",
      pretty_name: "Telecommunications Company"
    },
    real_estate_service: {
      osm_tags: {
        office: "real_estate"
      },
      icon: "temaki-briefcase",
      pretty_name: "Real Estate Service"
    },
    cannabis_clinic: {
      osm_tags: {
        amenity: "clinic",
        healthcare: "clinic",
        "healthcare:speciality": "cannabis"
      },
      icon: "fas-cannabis",
      pretty_name: "Cannabis Clinic"
    },
    sandwich_shop: {
      osm_tags: {
        amenity: "fast_food",
        cuisine: "sandwich"
      },
      icon: "temaki-sandwich",
      pretty_name: "Sandwich Shop"
    },
    buddhist_temple: {
      osm_tags: {
        amenity: "place_of_worship",
        religion: "buddhist"
      },
      icon: "maki-religious-buddhist",
      pretty_name: "Buddhist Temple"
    },
    burger_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "burger"
      },
      icon: "maki-fast-food",
      pretty_name: "Burger Restaurant"
    },
    eyewear_and_optician: {
      osm_tags: {
        shop: "optician"
      },
      icon: "maki-optician",
      pretty_name: "Eyewear and Optician"
    },
    transportation: {
      osm_tags: {
        office: "transportation"
      },
      icon: "temaki-bus",
      pretty_name: "Transportation"
    },
    auction_house: {
      osm_tags: {
        shop: "auction_house"
      },
      icon: "maki-shop",
      pretty_name: "Auction House"
    },
    environmental_conservation_organization: {
      osm_tags: {
        office: "ngo",
        ngo: "environmental"
      },
      icon: "fas-suitcase",
      pretty_name: "Environmental Conservation Organization"
    },
    educational_services: {
      osm_tags: {
        office: "educational_services"
      },
      icon: "temaki-school",
      pretty_name: "Educational Services"
    },
    nursery_and_gardening: {
      osm_tags: {
        shop: "garden_centre"
      },
      icon: "maki-garden-centre",
      pretty_name: "Nursery and Gardening"
    },
    karaoke: {
      osm_tags: {
        amenity: "karaoke_box"
      },
      icon: "maki-karaoke",
      pretty_name: "Karaoke"
    },
    museum: {
      osm_tags: {
        tourism: "museum"
      },
      icon: "temaki-museum",
      pretty_name: "Museum"
    },
    catholic_church: {
      osm_tags: {
        amenity: "place_of_worship",
        religion: "catholic"
      },
      icon: "maki-place-of-worship",
      pretty_name: "Catholic Church"
    },
    health_and_medical: {
      osm_tags: {
        amenity: "clinic"
      },
      icon: "maki-hospital",
      pretty_name: "Health and Medical"
    },
    bed_and_breakfast: {
      osm_tags: {
        tourism: "guest_house",
        guest_house: "bed_and_breakfast"
      },
      icon: "maki-lodging",
      pretty_name: "Bed and Breakfast"
    },
    animal_shelter: {
      osm_tags: {
        amenity: "animal_shelter"
      },
      icon: "maki-veterinary",
      pretty_name: "Animal Shelter"
    },
    tire_dealer_and_repair: {
      osm_tags: {
        shop: "tires"
      },
      icon: "temaki-tire",
      pretty_name: "Tire Dealer and Repair"
    },
    train_station: {
      osm_tags: {
        public_transport: "station",
        train: "yes"
      },
      icon: "temaki-train",
      pretty_name: "Train Station"
    },
    obstetrician_and_gynecologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "obstetrics_gynecology"
      },
      icon: "maki-doctor",
      pretty_name: "Obstetrician and Gynecologist"
    },
    department_store: {
      osm_tags: {
        shop: "department_store"
      },
      icon: "maki-shop",
      pretty_name: "Department Store"
    },
    winery: {
      osm_tags: {
        craft: "winery"
      },
      icon: "maki-alcohol-shop",
      pretty_name: "Winery"
    },
    steakhouse: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "steak_house"
      },
      icon: "maki-restaurant",
      pretty_name: "Steakhouse"
    },
    machine_shop: {
      osm_tags: {
        industrial: "machine_shop"
      },
      icon: "fas-tools",
      pretty_name: "Machine Shop"
    },
    pharmacy: {
      osm_tags: {
        amenity: "pharmacy"
      },
      icon: "maki-pharmacy",
      pretty_name: "Pharmacy"
    },
    music_and_dvd_store: {
      osm_tags: {
        shop: "music;video"
      },
      icon: "fas-compact-disc",
      pretty_name: "Music and DVD Store"
    },
    parking: {
      osm_tags: {
        amenity: "parking"
      },
      icon: "temaki-car_structure",
      pretty_name: "Parking"
    },
    architectural_designer: {
      osm_tags: {
        office: "architect"
      },
      icon: "fas-drafting-compass",
      pretty_name: "Architectural Designer"
    },
    hunting_and_fishing_supplies: {
      osm_tags: {
        shop: "hunting;fishing"
      },
      icon: "temaki-archery",
      pretty_name: "Hunting and Fishing Supplies"
    },
    trusts: {
      osm_tags: {
        office: "trust"
      },
      icon: "maki-bank",
      pretty_name: "Trusts"
    },
    topic_publisher: {
      osm_tags: {
        office: "publisher"
      },
      icon: "fas-book",
      pretty_name: "Topic Publisher"
    },
    physical_therapy: {
      osm_tags: {
        healthcare: "physiotherapy"
      },
      icon: "maki-doctor",
      pretty_name: "Physical Therapy"
    },
    auto_company: {
      osm_tags: {
        shop: "car"
      },
      icon: "maki-car",
      pretty_name: "Auto Company"
    },
    middle_school: {
      osm_tags: {
        amenity: "school",
        school_level: "middle"
      },
      icon: "temaki-school",
      pretty_name: "Middle School"
    },
    korean_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "korean"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Korean Restaurant"
    },
    cinema: {
      osm_tags: {
        amenity: "cinema"
      },
      icon: "maki-cinema",
      pretty_name: "Cinema"
    },
    counseling_and_mental_health: {
      osm_tags: {
        healthcare: "counselling"
      },
      icon: "temaki-social_facility",
      pretty_name: "Counseling and Mental Health"
    },
    car_rental_agency: {
      osm_tags: {
        amenity: "car_rental"
      },
      icon: "maki-car-rental",
      pretty_name: "Car Rental Agency"
    },
    swimwear_store: {
      osm_tags: {
        shop: "clothes",
        clothes: "swimwear"
      },
      icon: "fas-swimmer",
      pretty_name: "Swimwear Store"
    },
    automotive_dealer: {
      osm_tags: {
        shop: "car"
      },
      icon: "maki-car",
      pretty_name: "Automotive Dealer"
    },
    sushi_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "sushi"
      },
      icon: "temaki-temaki",
      pretty_name: "Sushi Restaurant"
    },
    construction_services: {
      osm_tags: {
        office: "construction_company"
      },
      icon: "temaki-tools",
      pretty_name: "Construction Services"
    },
    brewery: {
      osm_tags: {
        craft: "brewery"
      },
      icon: "temaki-storage_fermenter",
      pretty_name: "Brewery"
    },
    betting_center: {
      osm_tags: {
        amenity: "gambling"
      },
      icon: "fas-coins",
      pretty_name: "Betting Center"
    },
    musical_instrument_store: {
      osm_tags: {
        shop: "musical_instrument"
      },
      icon: "fas-guitar",
      pretty_name: "Musical Instrument Store"
    },
    seafood_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "seafood"
      },
      icon: "maki-restaurant-seafood",
      pretty_name: "Seafood Restaurant"
    },
    cabin: {
      osm_tags: {
        tourism: "alpine_hut"
      },
      icon: "temaki-cabin",
      pretty_name: "Cabin"
    },
    toy_store: {
      osm_tags: {
        shop: "toys"
      },
      icon: "fas-rocket",
      pretty_name: "Toy Store"
    },
    rental_service: {
      osm_tags: {
        office: "rental_service"
      },
      icon: "fas-suitcase",
      pretty_name: "Rental Service"
    },
    professional_sports_team: {
      osm_tags: {
        office: "sports_league"
      },
      icon: "maki-pitch",
      pretty_name: "Professional Sports Team"
    },
    food_beverage_service_distribution: {
      osm_tags: {
        shop: "beverages",
        industrial: "distributor"
      },
      icon: "temaki-bottles",
      pretty_name: "Food Beverage Service Distribution"
    },
    public_and_government_association: {
      osm_tags: {
        office: "government"
      },
      icon: "maki-town-hall",
      pretty_name: "Public and Government Association"
    },
    amusement_park: {
      osm_tags: {
        tourism: "amusement_park"
      },
      icon: "maki-amusement-park",
      pretty_name: "Amusement Park"
    },
    flowers_and_gifts_shop: {
      osm_tags: {
        shop: "florist;gift"
      },
      icon: "maki-florist",
      pretty_name: "Flowers and Gifts Shop"
    },
    mountain: {
      osm_tags: {
        natural: "peak"
      },
      icon: "maki-mountain",
      pretty_name: "Mountain"
    },
    audiologist: {
      osm_tags: {
        healthcare: "audiologist"
      },
      icon: "maki-doctor",
      pretty_name: "Audiologist"
    },
    nursing_school: {
      osm_tags: {
        amenity: "nursing_school"
      },
      icon: "maki-college",
      pretty_name: "Nursing School"
    },
    vocational_and_technical_school: {
      osm_tags: {
        amenity: "trade_school"
      },
      icon: "temaki-school",
      pretty_name: "Vocational and Technical School"
    },
    engineering_services: {
      osm_tags: {
        office: "engineering"
      },
      icon: "maki-suitcase",
      pretty_name: "Engineering Services"
    },
    alcohol_and_drug_treatment_centers: {
      osm_tags: {
        amenity: "clinic",
        healthcare: "clinic",
        "healthcare:speciality": "substance_abuse"
      },
      icon: "maki-hospital",
      pretty_name: "Alcohol and Drug Treatment Centers"
    },
    dance_club: {
      osm_tags: {
        leisure: "dance"
      },
      icon: "fas-music",
      pretty_name: "Dance Club"
    },
    "men's_clothing_store": {
      osm_tags: {
        shop: "clothes",
        clothes: "men"
      },
      icon: "fas-tshirt",
      pretty_name: "Men'S Clothing Store"
    },
    bakery: {
      osm_tags: {
        shop: "bakery"
      },
      icon: "maki-bakery",
      pretty_name: "Bakery"
    },
    campground: {
      osm_tags: {
        tourism: "camp_site"
      },
      icon: "maki-campsite",
      pretty_name: "Campground"
    },
    barbecue_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "barbecue"
      },
      icon: "maki-restaurant-bbq",
      pretty_name: "Barbecue Restaurant"
    },
    naturopathic_holistic: {
      osm_tags: {
        healthcare: "alternative",
        "healthcare:speciality": "naturopathy"
      },
      icon: "maki-doctor",
      pretty_name: "Naturopathic Holistic"
    },
    library: {
      osm_tags: {
        amenity: "library"
      },
      icon: "maki-library",
      pretty_name: "Library"
    },
    atms: {
      osm_tags: {
        amenity: "atm"
      },
      icon: "maki-bank",
      pretty_name: "ATMs"
    },
    storage_facility: {
      osm_tags: {
        shop: "storage_rental"
      },
      icon: "temaki-storage_rental",
      pretty_name: "Storage Facility"
    },
    tours: {
      osm_tags: {
        office: "guide"
      },
      icon: "temaki-binoculars",
      pretty_name: "Tours"
    },
    commercial_real_estate: {
      osm_tags: {
        office: "real_estate"
      },
      icon: "maki-suitcase",
      pretty_name: "Commercial Real Estate"
    },
    retirement_home: {
      osm_tags: {
        amenity: "social_facility",
        social_facility: "assisted_living",
        "social_facility:for": "senior_citizen"
      },
      icon: "maki-home",
      pretty_name: "Retirement Home"
    },
    lounge: {
      osm_tags: {
        amenity: "bar"
      },
      icon: "maki-bar",
      pretty_name: "Lounge"
    },
    fire_department: {
      osm_tags: {
        amenity: "fire_station"
      },
      icon: "maki-fire-station",
      pretty_name: "Fire Department"
    },
    chiropractor: {
      osm_tags: {
        healthcare: "alternative",
        "healthcare:speciality": "chiropractic"
      },
      icon: "maki-doctor",
      pretty_name: "Chiropractor"
    },
    business_manufacturing_and_supply: {
      osm_tags: {
        man_made: "works",
        product: "business_supply"
      },
      icon: "maki-warehouse",
      pretty_name: "Business Manufacturing and Supply"
    },
    ski_resort: {
      osm_tags: {
        leisure: "ski_resort"
      },
      icon: "fas-skiing",
      pretty_name: "Ski Resort"
    },
    information_technology_company: {
      osm_tags: {
        office: "it"
      },
      icon: "fas-laptop",
      pretty_name: "Information Technology Company"
    },
    bus_station: {
      osm_tags: {
        amenity: "bus_station",
        bus: "yes",
        public_transport: "station"
      },
      icon: "temaki-bus",
      pretty_name: "Bus Station"
    },
    shoe_store: {
      osm_tags: {
        shop: "shoes"
      },
      icon: "maki-shoe",
      pretty_name: "Shoe Store"
    },
    superstore: {
      osm_tags: {
        shop: "department_store"
      },
      icon: "fas-shopping-basket",
      pretty_name: "Superstore"
    },
    airport: {
      osm_tags: {
        aeroway: "aerodrome"
      },
      icon: "temaki-airport",
      pretty_name: "Airport"
    },
    ice_cream_shop: {
      osm_tags: {
        amenity: "ice_cream"
      },
      icon: "fas-ice-cream",
      pretty_name: "Ice Cream Shop"
    },
    specialty_school: {
      osm_tags: {
        amenity: "school",
        education: "speciality"
      },
      icon: "temaki-school",
      pretty_name: "speciality School"
    },
    b2b_textiles: {
      osm_tags: {
        shop: "fabric"
      },
      icon: "fas-tape",
      pretty_name: "B2B Textiles"
    },
    horse_riding: {
      osm_tags: {
        leisure: "horse_riding"
      },
      icon: "maki-horse-riding",
      pretty_name: "Horse Riding"
    },
    travel_company: {
      osm_tags: {
        shop: "travel_agency"
      },
      icon: "fas-suitcase",
      pretty_name: "Travel Company"
    },
    computer_store: {
      osm_tags: {
        shop: "computer"
      },
      icon: "fas-laptop",
      pretty_name: "Computer Store"
    },
    liquor_store: {
      osm_tags: {
        shop: "alcohol"
      },
      icon: "fas-wine-bottle",
      pretty_name: "Liquor Store"
    },
    public_plaza: {
      osm_tags: {
        place: "square."
      },
      icon: "temaki-pedestrian",
      pretty_name: "Public Plaza"
    },
    marketing_agency: {
      osm_tags: {
        office: "marketing_agency"
      },
      icon: "maki-suitcase",
      pretty_name: "Marketing Agency"
    },
    fish_and_chips_restaurant: {
      osm_tags: {
        cuisine: "fish_and_chips",
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "Fish and Chips Restaurant"
    },
    metal_supplier: {
      osm_tags: {
        shop: "metal"
      },
      icon: "fas-tools",
      pretty_name: "Metal Supplier"
    },
    home_health_care: {
      osm_tags: {
        amenity: "clinic",
        "healthcare:speciality": "outpatient"
      },
      icon: "maki-hospital",
      pretty_name: "Home Health Care"
    },
    national_park: {
      osm_tags: {
        leisure: "nature_reserve"
      },
      icon: "maki-park",
      pretty_name: "National Park"
    },
    public_utility_company: {
      osm_tags: {
        office: "utility"
      },
      icon: "temaki-power",
      pretty_name: "Public Utility Company"
    },
    indian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "indian"
      },
      icon: "maki-restaurant",
      pretty_name: "Indian Restaurant"
    },
    auto_customization: {
      osm_tags: {
        shop: "car_parts"
      },
      icon: "maki-car-repair",
      pretty_name: "Auto Customization"
    },
    public_school: {
      osm_tags: {
        amenity: "school"
      },
      icon: "temaki-school",
      pretty_name: "Public School"
    },
    pool_cleaning: {
      osm_tags: {
        craft: "pool_cleaning"
      },
      icon: "fas-swimming-pool",
      pretty_name: "Pool Cleaning"
    },
    lingerie_store: {
      osm_tags: {
        clothes: "underwear",
        shop: "clothes"
      },
      icon: "temaki-bikini",
      pretty_name: "Lingerie Store"
    },
    desserts: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "dessert"
      },
      icon: "maki-restaurant",
      pretty_name: "Desserts"
    },
    chicken_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "chicken"
      },
      icon: "maki-restaurant",
      pretty_name: "Chicken Restaurant"
    },
    laboratory_testing: {
      osm_tags: {
        healthcare: "laboratory"
      },
      icon: "fas-vial",
      pretty_name: "Laboratory Testing"
    },
    bottled_water_company: {
      osm_tags: {
        office: "bottled_water_company"
      },
      icon: "temaki-water_bottle",
      pretty_name: "Bottled Water Company"
    },
    life_coach: {
      osm_tags: {
        office: "life_coach"
      },
      icon: "fas-suitcase",
      pretty_name: "Life Coach"
    },
    veterinarian: {
      osm_tags: {
        amenity: "veterinary"
      },
      icon: "temaki-veterinary_care",
      pretty_name: "Veterinarian"
    },
    doctor: {
      osm_tags: {
        amenity: "doctors"
      },
      icon: "maki-doctor",
      pretty_name: "Doctor"
    },
    antique_store: {
      osm_tags: {
        shop: "antiques"
      },
      icon: "temaki-furniture",
      pretty_name: "Antique Store"
    },
    diagnostic_services: {
      osm_tags: {
        amenity: "clinic",
        "healthcare:speciality": "diagnostic_services"
      },
      icon: "maki-hospital",
      pretty_name: "Diagnostic Services"
    },
    pet_services: {
      osm_tags: {
        office: "pet_services"
      },
      icon: "maki-dog-park",
      pretty_name: "Pet Services"
    },
    beach: {
      osm_tags: {
        natural: "beach"
      },
      icon: "temaki-beach",
      pretty_name: "Beach"
    },
    limo_services: {
      osm_tags: {
        office: "limo_services"
      },
      icon: "fas-taxi",
      pretty_name: "Limo Services"
    },
    tanning_salon: {
      osm_tags: {
        shop: "beauty",
        beauty: "tanning"
      },
      icon: "temaki-tanning",
      pretty_name: "Tanning Salon"
    },
    indonesian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "indonesian"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Indonesian Restaurant"
    },
    holiday_rental_home: {
      osm_tags: {
        tourism: "apartment"
      },
      icon: "maki-lodging",
      pretty_name: "Holiday Rental Home"
    },
    health_food_store: {
      osm_tags: {
        shop: "health_food"
      },
      icon: "maki-shop",
      pretty_name: "Health Food Store"
    },
    "children's_clothing_store": {
      osm_tags: {
        shop: "clothes",
        clothes: "children"
      },
      icon: "fas-tshirt",
      pretty_name: "Children'S Clothing Store"
    },
    preschool: {
      osm_tags: {
        amenity: "kindergarten"
      },
      icon: "temaki-school",
      pretty_name: "Preschool"
    },
    comedy_club: {
      osm_tags: {
        amenity: "theatre"
      },
      icon: "maki-theatre",
      pretty_name: "Comedy Club"
    },
    motorcycle_dealer: {
      osm_tags: {
        shop: "motorcycle"
      },
      icon: "fas-motorcycle",
      pretty_name: "Motorcycle Dealer"
    },
    office_equipment: {
      osm_tags: {
        shop: "stationery"
      },
      icon: "fas-paperclip",
      pretty_name: "Office Equipment"
    },
    retail: {
      osm_tags: {
        shop: "yes"
      },
      icon: "maki-shop",
      pretty_name: "Retail"
    },
    home_inspector: {
      osm_tags: {
        office: "home_inspector"
      },
      icon: "maki-home",
      pretty_name: "Home Inspector"
    },
    gardener: {
      osm_tags: {
        shop: "garden_centre"
      },
      icon: "maki-garden-centre",
      pretty_name: "Gardener"
    },
    squash_court: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "squash"
      },
      icon: "maki-pitch",
      pretty_name: "Squash Court"
    },
    home_cleaning: {
      osm_tags: {
        craft: "cleaning"
      },
      icon: "temaki-vacuum",
      pretty_name: "Home Cleaning"
    },
    tutoring_center: {
      osm_tags: {
        amenity: "prep_school"
      },
      icon: "maki-school",
      pretty_name: "Tutoring Center"
    },
    home_and_garden: {
      osm_tags: {
        shop: "houseware;garden"
      },
      icon: "fas-blender",
      pretty_name: "Home and Garden"
    },
    funeral_services_and_cemeteries: {
      osm_tags: {
        shop: "funeral_directors"
      },
      icon: "maki-cemetery",
      pretty_name: "Funeral Services and Cemeteries"
    },
    carpenter: {
      osm_tags: {
        craft: "carpenter"
      },
      icon: "fas-hammer",
      pretty_name: "Carpenter"
    },
    appliance_store: {
      osm_tags: {
        shop: "appliance"
      },
      icon: "temaki-laundry",
      pretty_name: "Appliance Store"
    },
    urban_farm: {
      osm_tags: {
        landuse: "farmland"
      },
      icon: "fas-tractor",
      pretty_name: "Urban Farm"
    },
    blood_and_plasma_donation_center: {
      osm_tags: {
        healthcare: "blood_donation"
      },
      icon: "maki-blood-bank",
      pretty_name: "Blood and Plasma Donation Center"
    },
    carpet_store: {
      osm_tags: {
        shop: "carpet"
      },
      icon: "fas-tape",
      pretty_name: "Carpet Store"
    },
    smoothie_juice_bar: {
      osm_tags: {
        amenity: "cafe",
        cuisine: "smoothies"
      },
      icon: "temaki-hot_drink_cup",
      pretty_name: "Smoothie Juice Bar"
    },
    it_service_and_computer_repair: {
      osm_tags: {
        shop: "computer"
      },
      icon: "fas-laptop",
      pretty_name: "IT Service and Computer Repair"
    },
    mattress_store: {
      osm_tags: {
        shop: "bed"
      },
      icon: "maki-lodging",
      pretty_name: "Mattress Store"
    },
    immigration_law: {
      osm_tags: {
        office: "lawyer",
        lawyer: "immigration"
      },
      icon: "fas-balance-scale",
      pretty_name: "Immigration Law"
    },
    fashion_accessories_store: {
      osm_tags: {
        shop: "fashion_accessories"
      },
      icon: "temaki-fashion_accessories",
      pretty_name: "Fashion Accessories Store"
    },
    batting_cage: {
      osm_tags: {
        leisure: "pitch",
        sport: "baseball"
      },
      icon: "maki-baseball",
      pretty_name: "Batting Cage"
    },
    home_goods_store: {
      osm_tags: {
        shop: "home_goods"
      },
      icon: "temaki-furniture",
      pretty_name: "Home Goods Store"
    },
    pediatric_dentist: {
      osm_tags: {
        amenity: "dentist",
        "dentist.speciality": "pediatric"
      },
      icon: "maki-dentist",
      pretty_name: "Pediatric Dentist"
    },
    pest_control_service: {
      osm_tags: {
        shop: "pest_control"
      },
      icon: "maki-marker-stroked",
      pretty_name: "Pest Control Service"
    },
    dance_school: {
      osm_tags: {
        "dance:teaching": "yes",
        leisure: "dance"
      },
      icon: "fas-music",
      pretty_name: "Dance School"
    },
    b2b_electronic_equipment: {
      osm_tags: {
        shop: "electronics"
      },
      icon: "fas-plug",
      pretty_name: "B2B Electronic Equipment"
    },
    fishmonger: {
      osm_tags: {
        shop: "fishmonger"
      },
      icon: "temaki-fish_cleaning",
      pretty_name: "Fishmonger"
    },
    social_service_organizations: {
      osm_tags: {
        amenity: "social_facility"
      },
      icon: "temaki-social_facility",
      pretty_name: "Social Service Organizations"
    },
    rock_climbing_spot: {
      osm_tags: {
        leisure: "rock_climbing"
      },
      icon: "temaki-abseiling",
      pretty_name: "Rock Climbing Spot"
    },
    plastic_surgeon: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "plastic_surgery"
      },
      icon: "maki-doctor",
      pretty_name: "Plastic Surgeon"
    },
    argentine_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "argentinian"
      },
      icon: "maki-restaurant",
      pretty_name: "Argentine Restaurant"
    },
    wine_bar: {
      osm_tags: {
        amenity: "bar",
        bar: "wine"
      },
      icon: "maki-bar",
      pretty_name: "Wine Bar"
    },
    real_estate_investment: {
      osm_tags: {
        office: "real_estate"
      },
      icon: "fas-suitcase",
      pretty_name: "Real Estate Investment"
    },
    painting: {
      osm_tags: {
        tourism: "artwork"
      },
      icon: "maki-art-gallery",
      pretty_name: "Painting"
    },
    broadcasting_media_production: {
      osm_tags: {
        office: "broadcasting"
      },
      icon: "temaki-antenna",
      pretty_name: "Broadcasting Media Production"
    },
    cocktail_bar: {
      osm_tags: {
        amenity: "bar",
        "drink:cocktail": "yes"
      },
      icon: "maki-bar",
      pretty_name: "Cocktail Bar"
    },
    firework_retailer: {
      osm_tags: {
        shop: "pyrotechnics"
      },
      icon: "temaki-rocket_firework",
      pretty_name: "Firework Retailer"
    },
    armed_forces_branch: {
      osm_tags: {
        military: "office"
      },
      icon: "temaki-military",
      pretty_name: "Armed Forces Branch"
    },
    breakfast_and_brunch_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "breakfast_and_brunch"
      },
      icon: "maki-restaurant",
      pretty_name: "Breakfast and Brunch Restaurant"
    },
    linen: {
      osm_tags: {
        shop: "bedding"
      },
      icon: "maki-lodging",
      pretty_name: "Linen"
    },
    livestock_breeder: {
      osm_tags: {
        amenity: "animal_breeding"
      },
      icon: "maki-slaughterhouse",
      pretty_name: "Livestock Breeder"
    },
    plastic_manufacturer: {
      osm_tags: {
        man_made: "works",
        product: "plastic"
      },
      icon: "maki-industry",
      pretty_name: "Plastic Manufacturer"
    },
    french_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "french"
      },
      icon: "maki-restaurant",
      pretty_name: "French Restaurant"
    },
    airport_lounge: {
      osm_tags: {
        amenity: "lounge"
      },
      icon: "fas-couch",
      pretty_name: "Airport Lounge"
    },
    brazilian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "brazilian"
      },
      icon: "maki-restaurant",
      pretty_name: "Brazilian Restaurant"
    },
    evangelical_church: {
      osm_tags: {
        amenity: "place_of_worship",
        religion: "christian",
        denomination: "evangelical"
      },
      icon: "maki-religious-christian",
      pretty_name: "Evangelical Church"
    },
    tea_room: {
      osm_tags: {
        amenity: "cafe",
        cuisine: "tea"
      },
      icon: "maki-teahouse",
      pretty_name: "Tea Room"
    },
    lottery_ticket: {
      osm_tags: {
        shop: "lottery"
      },
      icon: "fas-ticket-alt",
      pretty_name: "Lottery Ticket"
    },
    airport_terminal: {
      osm_tags: {
        aeroway: "terminal"
      },
      icon: "maki-airport",
      pretty_name: "Airport Terminal"
    },
    bar_and_grill_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "bar_and_grill"
      },
      icon: "maki-restaurant",
      pretty_name: "Bar and Grill Restaurant"
    },
    day_care_preschool: {
      osm_tags: {
        amenity: "childcare"
      },
      icon: "fas-child",
      pretty_name: "Day Care Preschool"
    },
    family_counselor: {
      osm_tags: {
        amenity: "social_facility",
        "social_facility:for": "family"
      },
      icon: "temaki-social_facility",
      pretty_name: "Family Counselor"
    },
    nutritionist: {
      osm_tags: {
        healthcare: "nutritionist"
      },
      icon: "fas-leaf",
      pretty_name: "Nutritionist"
    },
    bolivian_restaurant: {
      osm_tags: {
        cuisine: "bolivian",
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "Bolivian Restaurant"
    },
    land_surveying: {
      osm_tags: {
        office: "surveyor"
      },
      icon: "fas-vest",
      pretty_name: "Land Surveying"
    },
    furniture_assembly: {
      osm_tags: {
        craft: "furniture_assembly"
      },
      icon: "temaki-furniture",
      pretty_name: "Furniture Assembly"
    },
    flea_market: {
      osm_tags: {
        amenity: "marketplace"
      },
      icon: "fas-shopping-basket",
      pretty_name: "Flea Market"
    },
    plumbing: {
      osm_tags: {
        craft: "plumber"
      },
      icon: "fas-tools",
      pretty_name: "Plumbing"
    },
    skate_park: {
      osm_tags: {
        leisure: "pitch",
        sport: "skateboard"
      },
      icon: "maki-skateboard",
      pretty_name: "Skate Park"
    },
    party_supply: {
      osm_tags: {
        shop: "party"
      },
      icon: "temaki-balloon",
      pretty_name: "Party Supply"
    },
    motorcycle_repair: {
      osm_tags: {
        shop: "motorcycle_repair"
      },
      icon: "temaki-motorcycle_repair",
      pretty_name: "Motorcycle Repair"
    },
    legal_services: {
      osm_tags: {
        office: "lawyer"
      },
      icon: "fas-suitcase",
      pretty_name: "Legal Services"
    },
    hostel: {
      osm_tags: {
        tourism: "hostel"
      },
      icon: "temaki-bunk_beds",
      pretty_name: "Hostel"
    },
    supermarket: {
      osm_tags: {
        shop: "supermarket"
      },
      icon: "maki-grocery",
      pretty_name: "Supermarket"
    },
    luggage_store: {
      osm_tags: {
        shop: "luggage"
      },
      icon: "fas-suitcase-rolling",
      pretty_name: "Luggage Store"
    },
    carpet_cleaning: {
      osm_tags: {
        shop: "carpet_cleaning"
      },
      icon: "temaki-vacuum",
      pretty_name: "Carpet Cleaning"
    },
    organic_grocery_store: {
      osm_tags: {
        shop: "supermarket",
        organic: "only"
      },
      icon: "maki-grocery",
      pretty_name: "Organic Grocery Store"
    },
    vegetarian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        "diet:vegetarian": "yes"
      },
      icon: "maki-restaurant",
      pretty_name: "Vegetarian Restaurant"
    },
    surgical_center: {
      osm_tags: {
        amenity: "hospital",
        "healthcare:speciality": "surgery"
      },
      icon: "maki-hospital",
      pretty_name: "Surgical Center"
    },
    fashion: {
      osm_tags: {
        shop: "clothes"
      },
      icon: "fas-tshirt",
      pretty_name: "Fashion"
    },
    bubble_tea: {
      osm_tags: {
        amenity: "cafe",
        cuisine: "bubble_tea"
      },
      icon: "temaki-hot_drink_cup",
      pretty_name: "Bubble Tea"
    },
    screen_printing_t_shirt_printing: {
      osm_tags: {
        shop: "clothing",
        clothing: "screen_printing"
      },
      icon: "fas-tshirt",
      pretty_name: "Screen Printing T Shirt Printing"
    },
    fondue_restaurant: {
      osm_tags: {
        cuisine: "fondue",
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "Fondue Restaurant"
    },
    wedding_planning: {
      osm_tags: {
        office: "wedding_planner"
      },
      icon: "fas-suitcase",
      pretty_name: "Wedding Planning"
    },
    history_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "history"
      },
      icon: "temaki-museum",
      pretty_name: "History Museum"
    },
    skin_care: {
      osm_tags: {
        shop: "cosmetics"
      },
      icon: "temaki-lipstick",
      pretty_name: "Skin Care"
    },
    labor_union: {
      osm_tags: {
        office: "labor_union"
      },
      icon: "temaki-tools",
      pretty_name: "Labor Union"
    },
    disability_services_and_support_organization: {
      osm_tags: {
        amenity: "social_facility",
        "social_facility:for": "disabled"
      },
      icon: "maki-wheelchair",
      pretty_name: "Disability Services and Support Organization"
    },
    food_truck: {
      osm_tags: {
        amenity: "food_court",
        street_vendor: "yes"
      },
      icon: "temaki-camper_trailer",
      pretty_name: "Food Truck"
    },
    beer_bar: {
      osm_tags: {
        amenity: "bar",
        drink: "beer"
      },
      icon: "maki-bar",
      pretty_name: "Beer Bar"
    },
    interior_design: {
      osm_tags: {
        shop: "interior_decoration"
      },
      icon: "maki-shop",
      pretty_name: "Interior Design"
    },
    laundromat: {
      osm_tags: {
        amenity: "laundry",
        self_service: "yes"
      },
      icon: "temaki-laundry",
      pretty_name: "Laundromat"
    },
    cultural_center: {
      osm_tags: {
        amenity: "arts_centre"
      },
      icon: "maki-theatre",
      pretty_name: "Cultural Center"
    },
    sporting_goods: {
      osm_tags: {
        shop: "sports"
      },
      icon: "fas-futbol",
      pretty_name: "Sporting Goods"
    },
    solar_installation: {
      osm_tags: {
        "generator:method": "photovoltaic",
        "generator:output:electricity": "yes",
        "generator:source": "solar",
        "generator:type": "solar_photovoltaic_panel",
        power: "generator"
      },
      icon: "fas-solar-panel",
      pretty_name: "Solar Installation"
    },
    driving_school: {
      osm_tags: {
        amenity: "driving_school"
      },
      icon: "maki-car",
      pretty_name: "Driving School"
    },
    metal_fabricator: {
      osm_tags: {
        craft: "metalworking"
      },
      icon: "fas-hammer",
      pretty_name: "Metal Fabricator"
    },
    plastic_fabrication_company: {
      osm_tags: {
        man_made: "works",
        product: "plastic"
      },
      icon: "fas-suitcase",
      pretty_name: "Plastic Fabrication Company"
    },
    lodge: {
      osm_tags: {
        tourism: "lodge"
      },
      icon: "maki-lodging",
      pretty_name: "Lodge"
    },
    pop_up_shop: {
      osm_tags: {
        shop: "yes"
      },
      icon: "maki-shop",
      pretty_name: "Pop Up Shop"
    },
    canal: {
      osm_tags: {
        waterway: "canal"
      },
      icon: "iD-waterway-canal",
      pretty_name: "Canal"
    },
    animal_rescue_service: {
      osm_tags: {
        amenity: "animal_shelter"
      },
      icon: "maki-veterinary",
      pretty_name: "Animal Rescue Service"
    },
    arts_and_crafts: {
      osm_tags: {
        shop: "craft"
      },
      icon: "fas-cut",
      pretty_name: "Arts and Crafts"
    },
    art_restoration: {
      osm_tags: {
        craft: "art_restoration"
      },
      icon: "maki-art-gallery",
      pretty_name: "Art Restoration"
    },
    logging_services: {
      osm_tags: {
        office: "logging_service"
      },
      icon: "maki-park",
      pretty_name: "Logging Services"
    },
    monument: {
      osm_tags: {
        historic: "monument"
      },
      icon: "maki-monument",
      pretty_name: "Monument"
    },
    caterer: {
      osm_tags: {
        amenity: "cafe"
      },
      icon: "temaki-hot_drink_cup",
      pretty_name: "Caterer"
    },
    tennis_court: {
      osm_tags: {
        leisure: "pitch",
        sport: "tennis"
      },
      icon: "maki-tennis",
      pretty_name: "Tennis Court"
    },
    countertop_installation: {
      osm_tags: {
        shop: "kitchen",
        craft: "countertop_installation"
      },
      icon: "temaki-kitchen_sink",
      pretty_name: "Countertop Installation"
    },
    bookstore: {
      osm_tags: {
        shop: "books"
      },
      icon: "fas-book",
      pretty_name: "Bookstore"
    },
    dog_trainer: {
      osm_tags: {
        amenity: "animal_training",
        animal_training: "dog"
      },
      icon: "maki-dog-park",
      pretty_name: "Dog Trainer"
    },
    energy_company: {
      osm_tags: {
        office: "energy_supplier"
      },
      icon: "temaki-briefcase_bolt",
      pretty_name: "Energy Company"
    },
    bridal_shop: {
      osm_tags: {
        shop: "clothes",
        clothes: "wedding"
      },
      icon: "temaki-gown",
      pretty_name: "Bridal Shop"
    },
    pediatrician: {
      osm_tags: {
        amenity: "doctors",
        medical_speciality: "pediatric"
      },
      icon: "maki-doctor",
      pretty_name: "Pediatrician"
    },
    soul_food: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "soul_food"
      },
      icon: "maki-restaurant",
      pretty_name: "Soul Food"
    },
    boutique: {
      osm_tags: {
        shop: "boutique"
      },
      icon: "maki-shop",
      pretty_name: "Boutique"
    },
    private_school: {
      osm_tags: {
        amenity: "school",
        "school:type": "private"
      },
      icon: "temaki-school",
      pretty_name: "Private School"
    },
    jewelry_and_watches_manufacturer: {
      osm_tags: {
        craft: "manufacturer",
        product: "jewelry;watches"
      },
      icon: "maki-jewelry-store",
      pretty_name: "Jewelry and Watches Manufacturer"
    },
    car_stereo_store: {
      osm_tags: {
        shop: "car_parts",
        car_parts: "stereo"
      },
      icon: "fas-car-battery",
      pretty_name: "Car Stereo Store"
    },
    eye_care_clinic: {
      osm_tags: {
        amenity: "clinic",
        healthcare: "optometrist"
      },
      icon: "fas-eye",
      pretty_name: "Eye Care Clinic"
    },
    boxing_class: {
      osm_tags: {
        craft: "sports_instructor",
        sport: "boxing"
      },
      icon: "maki-pitch",
      pretty_name: "Boxing Class"
    },
    key_and_locksmith: {
      osm_tags: {
        shop: "locksmith"
      },
      icon: "fas-key",
      pretty_name: "Key and Locksmith"
    },
    food_delivery_service: {
      osm_tags: {
        office: "food_delivery"
      },
      icon: "maki-car",
      pretty_name: "Food Delivery Service"
    },
    ski_and_snowboard_school: {
      osm_tags: {
        craft: "sports_instructor",
        sport: "skiing;snowboarding"
      },
      icon: "fas-skiing",
      pretty_name: "Ski and Snowboard School"
    },
    american_restaurant: {
      osm_tags: {
        cuisine: "american",
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "American Restaurant"
    },
    music_production: {
      osm_tags: {
        craft: "music_production"
      },
      icon: "fas-music",
      pretty_name: "Music Production"
    },
    palace: {
      osm_tags: {
        historic: "castle",
        castle_type: "palace"
      },
      icon: "fas-crown",
      pretty_name: "Palace"
    },
    courthouse: {
      osm_tags: {
        amenity: "courthouse"
      },
      icon: "fas-gavel",
      pretty_name: "Courthouse"
    },
    computer_hardware_company: {
      osm_tags: {
        office: "computer_hardware_company"
      },
      icon: "fas-laptop",
      pretty_name: "Computer Hardware Company"
    },
    dog_park: {
      osm_tags: {
        leisure: "dog_park"
      },
      icon: "maki-dog-park",
      pretty_name: "Dog Park"
    },
    shoe_repair: {
      osm_tags: {
        shop: "shoe_repair"
      },
      icon: "temaki-hammer_shoe",
      pretty_name: "Shoe Repair"
    },
    financial_advising: {
      osm_tags: {
        office: "financial_adviser"
      },
      icon: "temaki-money_hand",
      pretty_name: "Financial Advising"
    },
    vietnamese_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "vietnamese"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Vietnamese Restaurant"
    },
    recycling_center: {
      osm_tags: {
        amenity: "recycling"
      },
      icon: "maki-recycling",
      pretty_name: "Recycling Center"
    },
    pet_breeder: {
      osm_tags: {
        amenity: "animal_breeding"
      },
      icon: "fas-cat",
      pretty_name: "Pet Breeder"
    },
    castle: {
      osm_tags: {
        historic: "castle"
      },
      icon: "roentgen-fort",
      pretty_name: "Castle"
    },
    european_restaurant: {
      osm_tags: {
        cuisine: "european",
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "European Restaurant"
    },
    optometrist: {
      osm_tags: {
        healthcare: "optometrist"
      },
      icon: "fas-eye",
      pretty_name: "Optometrist"
    },
    orthodontist: {
      osm_tags: {
        healthcare: "dentist",
        "healthcare:speciality": "orthodontics"
      },
      icon: "fas-teeth",
      pretty_name: "Orthodontist"
    },
    language_school: {
      osm_tags: {
        amenity: "language_school"
      },
      icon: "temaki-school",
      pretty_name: "Language School"
    },
    commercial_vehicle_dealer: {
      osm_tags: {
        shop: "car"
      },
      icon: "maki-car",
      pretty_name: "Commercial Vehicle Dealer"
    },
    german_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "german"
      },
      icon: "maki-restaurant-bbq",
      pretty_name: "German Restaurant"
    },
    art_school: {
      osm_tags: {
        amenity: "school",
        art_school: "yes"
      },
      icon: "temaki-school",
      pretty_name: "Art School"
    },
    credit_union: {
      osm_tags: {
        amenity: "bank",
        atm: "yes"
      },
      icon: "maki-bank",
      pretty_name: "Credit Union"
    },
    jazz_and_blues: {
      osm_tags: {
        amenity: "nightclub",
        live_music: "yes",
        music_genre: "jazz_and_blues"
      },
      icon: "fas-cocktail",
      pretty_name: "Jazz and Blues"
    },
    marina: {
      osm_tags: {
        leisure: "marina"
      },
      icon: "temaki-sailboat",
      pretty_name: "Marina"
    },
    scuba_diving_center: {
      osm_tags: {
        amenity: "dive_centre"
      },
      icon: "temaki-scuba_diving",
      pretty_name: "Scuba Diving Center"
    },
    travel_services: {
      osm_tags: {
        shop: "travel_agency"
      },
      icon: "fas-suitcase",
      pretty_name: "Travel Services"
    },
    credit_and_debt_counseling: {
      osm_tags: {
        amenity: "social_facility",
        "social_facility:for": "debt_counseling"
      },
      icon: "maki-wheelchair",
      pretty_name: "Credit and Debt Counseling"
    },
    cottage: {
      osm_tags: {
        tourism: "chalet"
      },
      icon: "temaki-cabin",
      pretty_name: "Cottage"
    },
    noodles_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "noodles"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Noodles Restaurant"
    },
    hair_salon: {
      osm_tags: {
        shop: "hairdresser"
      },
      icon: "temaki-beauty_salon",
      pretty_name: "Hair Salon"
    },
    public_relations: {
      osm_tags: {
        office: "public_relations"
      },
      icon: "maki-suitcase",
      pretty_name: "Public Relations"
    },
    religious_school: {
      osm_tags: {
        amenity: "school",
        religion: "*"
      },
      icon: "temaki-school",
      pretty_name: "Religious School"
    },
    appliance_repair_service: {
      osm_tags: {
        shop: "appliance_repair"
      },
      icon: "temaki-laundry",
      pretty_name: "Appliance Repair Service"
    },
    salad_bar: {
      osm_tags: {
        amenity: "cafe",
        cuisine: "salad"
      },
      icon: "fas-leaf",
      pretty_name: "Salad Bar"
    },
    automation_services: {
      osm_tags: {
        office: "automation_services"
      },
      icon: "fas-suitcase",
      pretty_name: "Automation Services"
    },
    lighting_store: {
      osm_tags: {
        shop: "lighting"
      },
      icon: "temaki-desk_lamp",
      pretty_name: "Lighting Store"
    },
    osteopathic_physician: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "osteopathic_physician"
      },
      icon: "maki-doctor",
      pretty_name: "Osteopathic Physician"
    },
    fitness_trainer: {
      osm_tags: {
        leisure: "fitness_centre"
      },
      icon: "fas-dumbbell",
      pretty_name: "Fitness Trainer"
    },
    service_apartments: {
      osm_tags: {
        tourism: "apartment"
      },
      icon: "maki-lodging",
      pretty_name: "Service Apartments"
    },
    bowling_alley: {
      osm_tags: {
        leisure: "bowling_alley"
      },
      icon: "temaki-bowling",
      pretty_name: "Bowling Alley"
    },
    latin_american_restaurant: {
      osm_tags: {
        cuisine: "latin_american",
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "Latin American Restaurant"
    },
    fountain: {
      osm_tags: {
        amenity: "fountain"
      },
      icon: "temaki-fountain",
      pretty_name: "Fountain"
    },
    soccer_field: {
      osm_tags: {
        leisure: "pitch",
        sport: "soccer"
      },
      icon: "maki-soccer",
      pretty_name: "Soccer Field"
    },
    escrow_services: {
      osm_tags: {
        office: "escrow"
      },
      icon: "maki-suitcase",
      pretty_name: "Escrow Services"
    },
    gift_shop: {
      osm_tags: {
        shop: "gift"
      },
      icon: "maki-gift",
      pretty_name: "Gift Shop"
    },
    appraisal_services: {
      osm_tags: {
        office: "appraiser"
      },
      icon: "maki-suitcase",
      pretty_name: "Appraisal Services"
    },
    resort: {
      osm_tags: {
        leisure: "resort"
      },
      icon: "maki-lodging",
      pretty_name: "Resort"
    },
    candy_store: {
      osm_tags: {
        shop: "confectionery"
      },
      icon: "maki-confectionery",
      pretty_name: "Candy Store"
    },
    biotechnology_company: {
      osm_tags: {
        office: "biotechnology_company"
      },
      icon: "fas-suitcase",
      pretty_name: "Biotechnology Company"
    },
    gelato: {
      osm_tags: {
        amenity: "ice_cream",
        cuisine: "gelato"
      },
      icon: "fas-ice-cream",
      pretty_name: "Gelato"
    },
    internet_cafe: {
      osm_tags: {
        amenity: "internet_cafe"
      },
      icon: "temaki-antenna",
      pretty_name: "Internet Cafe"
    },
    garbage_collection_service: {
      osm_tags: {
        amenity: "waste_disposal"
      },
      icon: "fas-dumpster",
      pretty_name: "Garbage Collection Service"
    },
    casino: {
      osm_tags: {
        amenity: "casino"
      },
      icon: "maki-casino",
      pretty_name: "Casino"
    },
    sewing_and_alterations: {
      osm_tags: {
        shop: "tailor "
      },
      icon: "temaki-needle_and_spool",
      pretty_name: "Sewing and Alterations"
    },
    psychic: {
      osm_tags: {
        shop: "psychic"
      },
      icon: "temaki-psychic",
      pretty_name: "Psychic"
    },
    internet_service_provider: {
      osm_tags: {
        shop: "internet_service_provider"
      },
      icon: "temaki-antenna",
      pretty_name: "Internet Service Provider"
    },
    media_news_company: {
      osm_tags: {
        office: "newspaper"
      },
      icon: "fas-newspaper",
      pretty_name: "Media News Company"
    },
    medical_research_and_development: {
      osm_tags: {
        office: "research"
      },
      icon: "fas-flask",
      pretty_name: "Medical Research and Development"
    },
    fire_protection_service: {
      osm_tags: {
        emergency: "fire_hydrant"
      },
      icon: "temaki-fire_hydrant",
      pretty_name: "Fire Protection Service"
    },
    roofing: {
      osm_tags: {
        building: "roof"
      },
      icon: "maki-shelter",
      pretty_name: "Roofing"
    },
    car_window_tinting: {
      osm_tags: {
        shop: "car_repair",
        car_repair: "window_tinting"
      },
      icon: "maki-car-repair",
      pretty_name: "Car Window Tinting"
    },
    psychotherapist: {
      osm_tags: {
        healthcare: "psychotherapist"
      },
      icon: "maki-hospital",
      pretty_name: "Psychotherapist"
    },
    fertility: {
      osm_tags: {
        amenity: "clinic",
        healthcare: "fertility_clinic"
      },
      icon: "maki-doctor",
      pretty_name: "Fertility"
    },
    donuts: {
      osm_tags: {
        amenity: "cafe",
        cuisine: "donut"
      },
      icon: "temaki-hot_drink_cup",
      pretty_name: "Donuts"
    },
    photography_store_and_services: {
      osm_tags: {
        shop: "photo"
      },
      icon: "fas-camera-retro",
      pretty_name: "Photography Store and Services"
    },
    filipino_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "filipino"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Filipino Restaurant"
    },
    agricultural_cooperatives: {
      osm_tags: {
        amenity: "marketplace",
        shop: "cooperative"
      },
      icon: "maki-shop",
      pretty_name: "Agricultural Cooperatives"
    },
    texmex_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "mexican"
      },
      icon: "fas-pepper-hot",
      pretty_name: "TexMex Restaurant"
    },
    rv_park: {
      osm_tags: {
        tourism: "caravan_site"
      },
      icon: "temaki-camper_trailer",
      pretty_name: "Rv Park"
    },
    orthopedist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "orthopedics"
      },
      icon: "maki-doctor",
      pretty_name: "Orthopedist"
    },
    structural_engineer: {
      osm_tags: {
        office: "structural_engineer"
      },
      icon: "fas-suitcase",
      pretty_name: "Structural Engineer"
    },
    pancake_house: {
      osm_tags: {
        amenity: "cafe",
        cuisine: "pancake"
      },
      icon: "temaki-hot_drink_cup",
      pretty_name: "Pancake House"
    },
    dairy_farm: {
      osm_tags: {
        landuse: "agricultural",
        farm: "livestock"
      },
      icon: "maki-farm",
      pretty_name: "Dairy Farm"
    },
    taxi_service: {
      osm_tags: {
        amenity: "taxi"
      },
      icon: "fas-taxi",
      pretty_name: "Taxi Service"
    },
    souvenir_shop: {
      osm_tags: {
        shop: "gift"
      },
      icon: "maki-gift",
      pretty_name: "Souvenir Shop"
    },
    tobacco_shop: {
      osm_tags: {
        shop: "tobacco"
      },
      icon: "temaki-pipe",
      pretty_name: "Tobacco Shop"
    },
    law_enforcement: {
      osm_tags: {
        amenity: "police"
      },
      icon: "temaki-police_officer",
      pretty_name: "Law Enforcement"
    },
    vitamins_and_supplements: {
      osm_tags: {
        shop: "health_food"
      },
      icon: "maki-shop",
      pretty_name: "Vitamins and Supplements"
    },
    bagel_shop: {
      osm_tags: {
        amenity: "cafe",
        cuisine: "bagel"
      },
      icon: "temaki-hot_drink_cup",
      pretty_name: "Bagel Shop"
    },
    cheese_shop: {
      osm_tags: {
        shop: "cheese"
      },
      icon: "fas-cheese",
      pretty_name: "Cheese Shop"
    },
    environmental_conservation_and_ecological_organizations: {
      osm_tags: {
        office: "ngo",
        ngo: "environmental_conservation_and_ecological_organizations"
      },
      icon: "fas-suitcase",
      pretty_name: "Environmental Conservation and Ecological Organizations"
    },
    b2b_science_and_technology: {
      osm_tags: {
        office: "technology"
      },
      icon: "maki-suitcase",
      pretty_name: "B2B Science and Technology"
    },
    amateur_sports_league: {
      osm_tags: {
        office: "sports_league"
      },
      icon: "maki-pitch",
      pretty_name: "Amateur Sports League"
    },
    movers: {
      osm_tags: {
        office: "moving_company"
      },
      icon: "fas-people-carry",
      pretty_name: "Movers"
    },
    lighthouse: {
      osm_tags: {
        historic: "memorial"
      },
      icon: "temaki-plaque",
      pretty_name: "Lighthouse"
    },
    audio_visual_equipment_store: {
      osm_tags: {
        shop: "electronics"
      },
      icon: "fas-plug",
      pretty_name: "Audio Visual Equipment Store"
    },
    electric_utility_provider: {
      osm_tags: {
        office: "energy_supplier"
      },
      icon: "temaki-briefcase_bolt",
      pretty_name: "Electric Utility Provider"
    },
    chemical_plant: {
      osm_tags: {
        man_made: "works",
        works: "chemical_plant"
      },
      icon: "maki-industry",
      pretty_name: "Chemical Plant"
    },
    emissions_inspection: {
      osm_tags: {
        amenity: "vehicle_inspection"
      },
      icon: "maki-car",
      pretty_name: "Emissions Inspection"
    },
    self_storage_facility: {
      osm_tags: {
        shop: "storage_rental"
      },
      icon: "temaki_storage_rental",
      pretty_name: "Self Storage Facility"
    },
    motorcycle_manufacturer: {
      osm_tags: {
        man_made: "works",
        product: "motorcycle"
      },
      icon: "temaki-motorcycle_repair",
      pretty_name: "Motorcycle Manufacturer"
    },
    installment_loans: {
      osm_tags: {
        shop: "money_lender"
      },
      icon: "temaki-money_hand",
      pretty_name: "Installment Loans"
    },
    masonry_concrete: {
      osm_tags: {
        craft: "concrete_masonry"
      },
      icon: "temaki-brick_trowel",
      pretty_name: "Masonry Concrete"
    },
    dry_cleaning: {
      osm_tags: {
        shop: "dry_cleaning"
      },
      icon: "temaki-clothes_hanger",
      pretty_name: "Dry Cleaning"
    },
    real_estate_law: {
      osm_tags: {
        office: "lawyer",
        lawyer: "real_estate"
      },
      icon: "fas-balance-scale",
      pretty_name: "Real Estate Law"
    },
    trailer_rentals: {
      osm_tags: {
        amenity: "trailer_rental"
      },
      icon: "temaki-camper_trailer",
      pretty_name: "Trailer Rentals"
    },
    fishing_charter: {
      osm_tags: {
        office: "guide",
        guide: "fishing "
      },
      icon: "fas-fish",
      pretty_name: "Fishing Charter"
    },
    accountant: {
      osm_tags: {
        office: "accountant"
      },
      icon: "temaki-accounting",
      pretty_name: "Accountant"
    },
    radio_station: {
      osm_tags: {
        amenity: "studio",
        studio: "radio"
      },
      icon: "fas-microphone",
      pretty_name: "Radio Station"
    },
    pet_boarding: {
      osm_tags: {
        amenity: "animal_boarding"
      },
      icon: "maki-veterinary",
      pretty_name: "Pet Boarding"
    },
    chocolatier: {
      osm_tags: {
        shop: "chocolate"
      },
      icon: "maki-confectionery",
      pretty_name: "Chocolatier"
    },
    truck_rentals: {
      osm_tags: {
        amenity: "car_rental",
        car_rental: "truck"
      },
      icon: "maki-car-rental",
      pretty_name: "Truck Rentals"
    },
    fabric_store: {
      osm_tags: {
        shop: "fabric"
      },
      icon: "fas-tape",
      pretty_name: "Fabric Store"
    },
    employment_agencies: {
      osm_tags: {
        office: "employment_agency"
      },
      icon: "fas-suitcase",
      pretty_name: "Employment Agencies"
    },
    persian_iranian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "persian"
      },
      icon: "maki-restaurant",
      pretty_name: "Persian Restaurant"
    },
    comic_books_store: {
      osm_tags: {
        shop: "books",
        books: "comic"
      },
      icon: "fas-book",
      pretty_name: "Comic Books Store"
    },
    planetarium: {
      osm_tags: {
        amenity: "planetarium"
      },
      icon: "maki-globe",
      pretty_name: "Planetarium"
    },
    prosthodontist: {
      osm_tags: {
        healthcare: "dentist",
        amenity: "dentist",
        "healthcare:speciality": "prosthodontics"
      },
      icon: "maki-teeth",
      pretty_name: "Prosthodontist"
    },
    pentecostal_church: {
      osm_tags: {
        amenity: "place_of_worship",
        religion: "christian",
        denomination: "pentecostal"
      },
      icon: "maki-religious-christian",
      pretty_name: "Pentecostal Church"
    },
    lumber_store: {
      osm_tags: {
        shop: "lumber"
      },
      icon: "maki-logging",
      pretty_name: "Lumber Store"
    },
    building_supply_store: {
      osm_tags: {
        shop: "doityourself"
      },
      icon: "temaki-tools",
      pretty_name: "Building Supply Store"
    },
    towing_service: {
      osm_tags: {
        shop: "car_repair",
        service: "towing"
      },
      icon: "maki-car-repair",
      pretty_name: "Towing Service"
    },
    food_consultant: {
      osm_tags: {
        office: "consulting",
        consulting: "food"
      },
      icon: "maki-suitcase",
      pretty_name: "Food Consultant"
    },
    surgical_appliances_and_supplies: {
      osm_tags: {
        shop: "surgical_supply"
      },
      icon: "maki-doctor",
      pretty_name: "Surgical Appliances and Supplies"
    },
    paintball: {
      osm_tags: {
        leisure: "pitch",
        sport: "paintball"
      },
      icon: "fas-crosshairs",
      pretty_name: "Paintball"
    },
    playground: {
      osm_tags: {
        leisure: "playground"
      },
      icon: "maki-playground",
      pretty_name: "Playground"
    },
    soup_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "soup"
      },
      icon: "maki-restaurant",
      pretty_name: "Soup Restaurant"
    },
    synagogue: {
      osm_tags: {
        amenity: "place_of_worship",
        religion: "jewish"
      },
      icon: "maki-religious-jewish",
      pretty_name: "Jewish Synagogue"
    },
    damage_restoration: {
      osm_tags: {
        craft: "damage_restoration"
      },
      icon: "temaki-tools",
      pretty_name: "Damage Restoration"
    },
    sign_making: {
      osm_tags: {
        craft: "sign_maker"
      },
      icon: "temaki-billboard",
      pretty_name: "Sign Making"
    },
    spanish_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "spanish"
      },
      icon: "maki-restaurant",
      pretty_name: "Spanish Restaurant"
    },
    convents_and_monasteries: {
      osm_tags: {
        amenity: "monastery"
      },
      icon: "maki-place-of-worship",
      pretty_name: "Convents and Monasteries"
    },
    beer_garden: {
      osm_tags: {
        amenity: "biergarten"
      },
      icon: "maki-beer",
      pretty_name: "Beer Garden"
    },
    mountain_bike_trails: {
      osm_tags: {
        highway: "trailhead",
        type: "mountain_bike"
      },
      icon: "maki-bicycle",
      pretty_name: "Mountain Bike Trails"
    },
    dim_sum_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "dim_sum"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Dim Sum Restaurant"
    },
    turkish_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "turkish"
      },
      icon: "maki-restaurant",
      pretty_name: "Turkish Restaurant"
    },
    social_media_agency: {
      osm_tags: {
        office: "social_media"
      },
      icon: "maki-suitcase",
      pretty_name: "Social Media Agency"
    },
    bike_repair_maintenance: {
      osm_tags: {
        shop: "bicycle_repair"
      },
      icon: "temaki-bicycle_repair",
      pretty_name: "Bike Repair Maintenance"
    },
    health_food_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        "diet:health_food": "yes"
      },
      icon: "maki-restaurant",
      pretty_name: "Health Food Restaurant"
    },
    investing: {
      osm_tags: {
        office: "investment"
      },
      icon: "maki-bank",
      pretty_name: "Investing"
    },
    equestrian_facility: {
      osm_tags: {
        leisure: "horse_riding"
      },
      icon: "maki-horse-riding",
      pretty_name: "Equestrian Facility"
    },
    tennis_stadium: {
      osm_tags: {
        leisure: "stadium",
        sport: "tennis"
      },
      icon: "maki-tennis",
      pretty_name: "Tennis Stadium"
    },
    discount_store: {
      osm_tags: {
        shop: "discount"
      },
      icon: "maki-shop",
      pretty_name: "Discount Store"
    },
    ferry_boat_company: {
      osm_tags: {
        office: "ferry_boat_company"
      },
      icon: "temaki-ferry",
      pretty_name: "Ferry Boat Company"
    },
    wildlife_sanctuary: {
      osm_tags: {
        leisure: "nature_reserve"
      },
      icon: "maki-park",
      pretty_name: "Wildlife Sanctuary"
    },
    maternity_centers: {
      osm_tags: {
        amenity: "clinic",
        healthcare: "doctor",
        "healthcare:speciality": "obstetrics"
      },
      icon: "maki-hospital",
      pretty_name: "Maternity Centers"
    },
    "children's_museum": {
      osm_tags: {
        tourism: "museum",
        museum: "children"
      },
      icon: "temaki-museum",
      pretty_name: "Children'S Museum"
    },
    used_vintage_and_consignment: {
      osm_tags: {
        shop: "second_hand"
      },
      icon: "maki-shop",
      pretty_name: "Used Vintage and Consignment"
    },
    hair_removal: {
      osm_tags: {
        shop: "beauty",
        beauty: "hair_removal"
      },
      icon: "temaki-beauty_salon",
      pretty_name: "Hair Removal"
    },
    health_department: {
      osm_tags: {
        office: "government",
        government: "health_department"
      },
      icon: "maki-hospital",
      pretty_name: "Health Department"
    },
    anglican_church: {
      osm_tags: {
        amenity: "place_of_worship",
        religion: "christian",
        denomination: "anglican"
      },
      icon: "maki-religious-christian",
      pretty_name: "Anglican Church"
    },
    adult_entertainment: {
      osm_tags: {
        amenity: "stripclub"
      },
      icon: "roentgen-pole_dancer",
      pretty_name: "Adult Entertainment"
    },
    mission: {
      osm_tags: {
        amenity: "place_of_worship",
        type: "mission"
      },
      icon: "maki-place-of-worship",
      pretty_name: "Mission"
    },
    escape_rooms: {
      osm_tags: {
        leisure: "escape_game"
      },
      icon: "fas-puzzle-piece",
      pretty_name: "Escape Rooms"
    },
    pool_billiards: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "pool;billiards"
      },
      icon: "maki-marker-stroked",
      pretty_name: "Pool Billiards"
    },
    boat_service_and_repair: {
      osm_tags: {
        shop: "boat_repair"
      },
      icon: "temaki-boat_repair",
      pretty_name: "Boat Service and Repair"
    },
    speech_therapist: {
      osm_tags: {
        healthcare: "speech_therapist"
      },
      icon: "fas-comment",
      pretty_name: "Speech Therapist"
    },
    ip_and_internet_law: {
      osm_tags: {
        amenity: "public_building",
        public_building: "lawyer",
        office: "lawyer"
      },
      icon: "fas-balance-scale",
      pretty_name: "Ip and Internet Law"
    },
    weight_loss_center: {
      osm_tags: {
        amenity: "clinic",
        healthcare: "weight_loss"
      },
      icon: "maki-hospital",
      pretty_name: "Weight Loss Center"
    },
    wood_and_pulp: {
      osm_tags: {
        manmade: "works",
        product: "wood_and_pulp"
      },
      icon: "maki-industry",
      pretty_name: "Wood and Pulp"
    },
    electrician: {
      osm_tags: {
        craft: "electrician"
      },
      icon: "temaki-power",
      pretty_name: "Electrician"
    },
    commercial_refrigeration: {
      osm_tags: {
        shop: "appliance",
        product: "commercial_refrigeration"
      },
      icon: "temaki-laundry",
      pretty_name: "Commercial Refrigeration"
    },
    horseback_riding_service: {
      osm_tags: {
        leisure: "horse_riding"
      },
      icon: "maki-horse-riding",
      pretty_name: "Horseback Riding Service"
    },
    theme_restaurant: {
      osm_tags: {
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "Theme Restaurant"
    },
    janitorial_services: {
      osm_tags: {
        craft: "cleaning"
      },
      icon: "temaki-vacuum",
      pretty_name: "Janitorial Services"
    },
    shooting_range: {
      osm_tags: {
        leisure: "pitch",
        sport: "shooting"
      },
      icon: "fas-crosshairs",
      pretty_name: "Shooting Range"
    },
    automotive_services_and_repair: {
      osm_tags: {
        shop: "car_repair"
      },
      icon: "maki-car-repair",
      pretty_name: "Automotive Services and Repair"
    },
    fishing_club: {
      osm_tags: {
        club: "fishing"
      },
      icon: "fas-fish",
      pretty_name: "Fishing Club"
    },
    canoe_and_kayak_hire_service: {
      osm_tags: {
        amenity: "boat_rental",
        kayak_rental: "yes",
        canoe_rental: "yes"
      },
      icon: "temaki-boat_rental",
      pretty_name: "Canoe and Kayak Hire Service"
    },
    waterfall: {
      osm_tags: {
        waterway: "waterfall"
      },
      icon: "maki-waterfall",
      pretty_name: "Waterfall"
    },
    gymnastics_center: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "gymnastics"
      },
      icon: "maki-pitch",
      pretty_name: "Gymnastics Center"
    },
    truck_dealer: {
      osm_tags: {
        shop: "truck"
      },
      icon: "maki-car",
      pretty_name: "Truck Dealer"
    },
    boat_rental_and_training: {
      osm_tags: {
        amenity: "boat_rental"
      },
      icon: "temaki-boat_rental",
      pretty_name: "Boat Rental and Training"
    },
    middle_eastern_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "middle_eastern"
      },
      icon: "maki-restaurant",
      pretty_name: "Middle Eastern Restaurant"
    },
    russian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "russian"
      },
      icon: "maki-restaurant",
      pretty_name: "Russian Restaurant"
    },
    clothing_company: {
      osm_tags: {
        office: "clothing_company"
      },
      icon: "fas-tshirt",
      pretty_name: "Clothing Company"
    },
    notary_public: {
      osm_tags: {
        office: "notary"
      },
      icon: "temaki-town_hall",
      pretty_name: "Notary Public"
    },
    rodeo: {
      osm_tags: {
        leisure: "pitch",
        sport: "rodeo"
      },
      icon: "maki-pitch",
      pretty_name: "Rodeo"
    },
    media_news_website: {
      osm_tags: {
        office: "news_agency"
      },
      icon: "fas-newspaper",
      pretty_name: "Media News Website"
    },
    railroad_freight: {
      osm_tags: {
        office: "logistics"
      },
      icon: "temaki-train_bullet",
      pretty_name: "Railroad Freight"
    },
    brokers: {
      osm_tags: {
        office: "broker"
      },
      icon: "maki-suitcase",
      pretty_name: "Brokers"
    },
    arcade: {
      osm_tags: {
        leisure: "amusement_arcade"
      },
      icon: "maki-gaming",
      pretty_name: "Arcade"
    },
    teeth_whitening: {
      osm_tags: {
        amenity: "dentist",
        healthcare: "dentist",
        "healthcare:speciality": "teeth_whitening"
      },
      icon: "maki-dentist",
      pretty_name: "Teeth Whitening"
    },
    business_advertising: {
      osm_tags: {
        office: "advertising_agency"
      },
      icon: "fas-suitcase",
      pretty_name: "Business Advertising"
    },
    home_security: {
      osm_tags: {
        shop: "security"
      },
      icon: "temaki-briefcase_shield",
      pretty_name: "Home Security"
    },
    distillery: {
      osm_tags: {
        craft: "distillery"
      },
      icon: "temaki-storage_fermenter",
      pretty_name: "Distillery"
    },
    garage_door_service: {
      osm_tags: {
        shop: "repair",
        repair: "garage_door"
      },
      icon: "fas-warehouse",
      pretty_name: "Garage Door Service"
    },
    water_supplier: {
      osm_tags: {
        office: "water_utility"
      },
      icon: "maki-suitcase",
      pretty_name: "Water Supplier"
    },
    elevator_service: {
      osm_tags: {
        shop: "repair",
        repair: "elevator"
      },
      icon: "temaki-tools",
      pretty_name: "Elevator Service"
    },
    aquarium: {
      osm_tags: {
        tourism: "aquarium"
      },
      icon: "maki-aquarium",
      pretty_name: "Aquarium"
    },
    kosher_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "kosher"
      },
      icon: "maki-restaurant",
      pretty_name: "Kosher Restaurant"
    },
    taiwanese_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "taiwanese"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Taiwanese Restaurant"
    },
    eastern_european_restaurant: {
      osm_tags: {
        cuisine: "eastern_european",
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "Eastern European Restaurant"
    },
    truck_repair: {
      osm_tags: {
        shop: "truck_repair"
      },
      icon: "maki-car-repair",
      pretty_name: "Truck Repair"
    },
    badminton_court: {
      osm_tags: {
        leisure: "pitch",
        sport: "badminton"
      },
      icon: "maki-tennis",
      pretty_name: "Badminton Court"
    },
    fireplace_service: {
      osm_tags: {
        shop: "fireplace"
      },
      icon: "temaki-fireplace",
      pretty_name: "Fireplace Service"
    },
    basketball_court: {
      osm_tags: {
        leisure: "pitch",
        sport: "basketball"
      },
      icon: "maki-basketball",
      pretty_name: "Basketball Court"
    },
    ambulance_and_ems_services: {
      osm_tags: {
        emergency: "ambulance_station"
      },
      icon: "fas-ambulance",
      pretty_name: "Ambulance and EMS Services"
    },
    television_service_providers: {
      osm_tags: {
        office: "telecommunication"
      },
      icon: "fas-video",
      pretty_name: "Television Service Providers"
    },
    personal_injury_law: {
      osm_tags: {
        office: "lawyer",
        laywer: "personal_injury"
      },
      icon: "fas-suitcase",
      pretty_name: "Personal Injury Law"
    },
    airline: {
      osm_tags: {
        office: "airline"
      },
      icon: "maki-airport",
      pretty_name: "Airline"
    },
    auto_manufacturers_and_distributors: {
      osm_tags: {
        man_made: "works",
        product: "car"
      },
      icon: "maki-car",
      pretty_name: "Auto Manufacturers and Distributors"
    },
    pawn_shop: {
      osm_tags: {
        shop: "pawnbroker"
      },
      icon: "temaki-money_hand",
      pretty_name: "Pawn Shop"
    },
    internal_medicine: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "internal_medicine"
      },
      icon: "maki-hospital",
      pretty_name: "Internal Medicine"
    },
    night_market: {
      osm_tags: {
        amenity: "marketplace"
      },
      icon: "fas-shopping-basket",
      pretty_name: "Night Market"
    },
    ukrainian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "ukrainian"
      },
      icon: "maki-restaurant",
      pretty_name: "Ukrainian Restaurant"
    },
    packing_supply: {
      osm_tags: {
        shop: "packing_supply"
      },
      icon: "fas-box-open",
      pretty_name: "Packing Supply"
    },
    african_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "african"
      },
      icon: "maki-restaurant",
      pretty_name: "African Restaurant"
    },
    cooking_school: {
      osm_tags: {
        amenity: "trade_school",
        training: "cooking"
      },
      icon: "maki-restaurant",
      pretty_name: "Cooking School"
    },
    greek_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "greek"
      },
      icon: "maki-restaurant",
      pretty_name: "Greek Restaurant"
    },
    book_magazine_distribution: {
      osm_tags: {
        shop: "books"
      },
      icon: "fas-book",
      pretty_name: "Book Magazine Distribution"
    },
    makeup_artist: {
      osm_tags: {
        amenity: "beauty_salon",
        beauty: "makeup_artist"
      },
      icon: "temaki-lipstick",
      pretty_name: "Makeup Artist"
    },
    computer_coaching: {
      osm_tags: {
        office: "computer_coaching"
      },
      icon: "fas-laptop",
      pretty_name: "Computer Coaching"
    },
    embassy: {
      osm_tags: {
        office: "diplomatic",
        diplomatic: "embassy"
      },
      icon: "temaki-embassy",
      pretty_name: "Embassy"
    },
    metal_plating_service: {
      osm_tags: {
        craft: "metal_plating"
      },
      icon: "temaki-tools",
      pretty_name: "Metal Plating Service"
    },
    neurologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "neurology"
      },
      icon: "maki-doctor",
      pretty_name: "Neurologist"
    },
    business_to_business_services: {
      osm_tags: {
        office: "business_to_business_services"
      },
      icon: "fas-suitcase",
      pretty_name: "Business To Business Services"
    },
    dermatologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "dermatology"
      },
      icon: "maki-doctor",
      pretty_name: "Dermatologist"
    },
    burmese_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "burmese"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Burmese Restaurant"
    },
    acupuncture: {
      osm_tags: {
        healthcare: "alternative",
        "healthcare:speciality": "acupuncture"
      },
      icon: "maki-spa",
      pretty_name: "Acupuncture"
    },
    basketball_stadium: {
      osm_tags: {
        leisure: "stadium",
        sport: "basketball"
      },
      icon: "maki-basketball",
      pretty_name: "Basketball Stadium"
    },
    mobile_home_dealer: {
      osm_tags: {
        shop: "caravan"
      },
      icon: "temaki-camper_trailer",
      pretty_name: "Mobile Home Dealer"
    },
    comfort_food_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "comfort_food"
      },
      icon: "maki-restaurant",
      pretty_name: "Comfort Food Restaurant"
    },
    halal_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "halal"
      },
      icon: "maki-restaurant",
      pretty_name: "Halal Restaurant"
    },
    appliance_manufacturer: {
      osm_tags: {
        man_made: "works"
      },
      icon: "maki-industry",
      pretty_name: "Appliance Manufacturer"
    },
    soccer_stadium: {
      osm_tags: {
        leisure: "stadium",
        sport: "football"
      },
      icon: "maki-soccer",
      pretty_name: "Soccer Stadium"
    },
    recreational_vehicle_dealer: {
      osm_tags: {
        shop: "recreational_vehicle"
      },
      icon: "temaki-camper_trailer",
      pretty_name: "Recreational Vehicle Dealer"
    },
    hookah_bar: {
      osm_tags: {
        amenity: "hookah_lounge"
      },
      icon: "fas-smoking",
      pretty_name: "Hookah Bar"
    },
    e_cigarette_store: {
      osm_tags: {
        shop: "electronic_cigarettes"
      },
      icon: "fas-smoking",
      pretty_name: "E-Cigarette Store"
    },
    gay_bar: {
      osm_tags: {
        amenity: "bar",
        lgbtq: "primary"
      },
      icon: "maki-bar",
      pretty_name: "Gay Bar"
    },
    motorsports_store: {
      osm_tags: {
        shop: "motorcycle"
      },
      icon: "fas-motorcycle",
      pretty_name: "Motorsports Store"
    },
    wheel_and_rim_repair: {
      osm_tags: {
        shop: "car_repair",
        "service:vehicle:wheels": "yes"
      },
      icon: "maki-car-repair",
      pretty_name: "Wheel and Rim Repair"
    },
    botanical_garden: {
      osm_tags: {
        leisure: "garden",
        "garden:type": "botanical"
      },
      icon: "maki-garden",
      pretty_name: "Botanical Garden"
    },
    bike_rentals: {
      osm_tags: {
        amenity: "bicycle_rental"
      },
      icon: "temaki-bicycle_rental",
      pretty_name: "Bike Rentals"
    },
    podiatrist: {
      osm_tags: {
        healthcare: "podiatrist"
      },
      icon: "maki-doctor",
      pretty_name: "Podiatrist"
    },
    frozen_yoghurt_shop: {
      osm_tags: {
        amenity: "ice_cream"
      },
      icon: "fas-ice-cream",
      pretty_name: "Frozen Yoghurt Shop"
    },
    banks: {
      osm_tags: {
        amenity: "bank"
      },
      icon: "maki-bank",
      pretty_name: "Banks"
    },
    criminal_defense_law: {
      osm_tags: {
        office: "lawyer",
        lawyer: "criminal_defense"
      },
      icon: "fas-balance-scale",
      pretty_name: "Criminal Defense Law"
    },
    plastic_company: {
      osm_tags: {
        office: "plastic_company"
      },
      icon: "maki-industry",
      pretty_name: "Plastic Company"
    },
    motorcycle_rentals: {
      osm_tags: {
        amenity: "motorcycle_rental"
      },
      icon: "temaki-motorcycle_rental",
      pretty_name: "Motorcycle Rentals"
    },
    private_association: {
      osm_tags: {
        office: "association"
      },
      icon: "temaki-social_facility",
      pretty_name: "Private Association"
    },
    bartending_school: {
      osm_tags: {
        amenity: "school",
        education: "bartending"
      },
      icon: "temaki-school",
      pretty_name: "Bartending School"
    },
    theatrical_productions: {
      osm_tags: {
        amenity: "theatre"
      },
      icon: "maki-theatre",
      pretty_name: "Theatrical Productions"
    },
    educational_supply_store: {
      osm_tags: {
        shop: "stationery"
      },
      icon: "fas-paperclip",
      pretty_name: "Educational Supply Store"
    },
    horse_trainer: {
      osm_tags: {
        amenity: "animal_training",
        animal_training: "horse"
      },
      icon: "maki-horse-riding",
      pretty_name: "Horse Trainer"
    },
    surfing: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "surfing"
      },
      icon: "temaki-beach",
      pretty_name: "Surfing"
    },
    astrologer: {
      osm_tags: {
        shop: "psychic",
        psychic: "astrologer"
      },
      icon: "temaki-psychic",
      pretty_name: "Astrologer"
    },
    pier: {
      osm_tags: {
        man_made: "pier"
      },
      icon: "temaki-pier_fixed",
      pretty_name: "Pier"
    },
    occupational_therapy: {
      osm_tags: {
        healthcare: "occupational_therapist",
        "healthcare:speciality": "orthodonticslist"
      },
      icon: "maki-doctor",
      pretty_name: "Occupational Therapy"
    },
    baseball_field: {
      osm_tags: {
        leisure: "pitch",
        sport: "baseball"
      },
      icon: "maki-baseball",
      pretty_name: "Baseball Field"
    },
    glass_manufacturer: {
      osm_tags: {
        man_made: "works",
        product: "glass"
      },
      icon: "temaki-window",
      pretty_name: "Glass Manufacturer"
    },
    business: {
      osm_tags: {
        amenity: "office"
      },
      icon: "fas-suitcase",
      pretty_name: "Business"
    },
    atv_rentals_and_tours: {
      osm_tags: {
        shop: "rental",
        rental: "atvs",
        office: "guide",
        guide: "atv_tours"
      },
      icon: "temaki-binoculars",
      pretty_name: "ATV Rentals and Tours"
    },
    medical_school: {
      osm_tags: {
        amenity: "university",
        education: "medicine"
      },
      icon: "maki-college",
      pretty_name: "Medical School"
    },
    art_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "art"
      },
      icon: "maki-art-gallery",
      pretty_name: "Art Museum"
    },
    observatory: {
      osm_tags: {
        man_made: "observatory"
      },
      icon: "temaki-telescope",
      pretty_name: "Observatory"
    },
    island: {
      osm_tags: {
        place: "island"
      },
      icon: "temaki-island_trees_building",
      pretty_name: "Island"
    },
    hot_dog_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "hot_dog"
      },
      icon: "fas-hotdog",
      pretty_name: "Hot Dog Restaurant"
    },
    boat_dealer: {
      osm_tags: {
        shop: "boat"
      },
      icon: "temaki-boat",
      pretty_name: "Boat Dealer"
    },
    moroccan_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "moroccan"
      },
      icon: "maki-restaurant",
      pretty_name: "Moroccan Restaurant"
    },
    ski_and_snowboard_shop: {
      osm_tags: {
        shop: "sports",
        sport: "skiing;snowboarding"
      },
      icon: "fas-skiing",
      pretty_name: "Ski and Snowboard Shop"
    },
    gun_and_ammo: {
      osm_tags: {
        shop: "gun"
      },
      icon: "fas-crosshairs",
      pretty_name: "Gun and Ammo"
    },
    pet_adoption: {
      osm_tags: {
        amenity: "animal_shelter"
      },
      icon: "maki-veterinary",
      pretty_name: "Pet Adoption"
    },
    newspaper_and_magazines_store: {
      osm_tags: {
        shop: "newsagent"
      },
      icon: "fas-newspaper",
      pretty_name: "Newspaper and Magazines Store"
    },
    onsen: {
      osm_tags: {
        amenity: "public_bath",
        "bath:type": "onsen"
      },
      icon: "fas-hot-tub-person",
      pretty_name: "Onsen"
    },
    nature_reserve: {
      osm_tags: {
        leisure: "nature_reserve"
      },
      icon: "maki-park",
      pretty_name: "Nature Reserve"
    },
    irish_pub: {
      osm_tags: {
        amenity: "pub",
        theme: "irish"
      },
      icon: "maki-beer",
      pretty_name: "Irish Pub"
    },
    opera_and_ballet: {
      osm_tags: {
        amenity: "theatre",
        "theatre:type": "ballet"
      },
      icon: "maki-theatre",
      pretty_name: "Opera and Ballet"
    },
    nail_salon: {
      osm_tags: {
        shop: "beauty",
        beauty: "nails"
      },
      icon: "temaki-polished_nail",
      pretty_name: "Nail Salon"
    },
    uniform_store: {
      osm_tags: {
        shop: "clothes",
        clothes: "workwear"
      },
      icon: "fas-tshirt",
      pretty_name: "Uniform Store"
    },
    gutter_service: {
      osm_tags: {
        craft: "gutter_cleaning"
      },
      icon: "fas-tools",
      pretty_name: "Gutter Service"
    },
    flight_school: {
      osm_tags: {
        amenity: "flight_school"
      },
      icon: "maki-airport",
      pretty_name: "Flight School"
    },
    aquatic_pet_store: {
      osm_tags: {
        shop: "pet",
        pet: "fish"
      },
      icon: "fas-fish",
      pretty_name: "Aquatic Pet Store"
    },
    water_treatment_equipment_and_services: {
      osm_tags: {
        shop: "trade",
        trade: "water_treatment"
      },
      icon: "maki-water",
      pretty_name: "Water Treatment Equipment and Services"
    },
    divorce_and_family_law: {
      osm_tags: {
        office: "lawyer",
        lawyer: "divorce;family_law"
      },
      icon: "fas-balance-scale",
      pretty_name: "Divorce and Family Law"
    },
    jail_and_prison: {
      osm_tags: {
        amenity: "prison"
      },
      icon: "maki-prison",
      pretty_name: "Jail and Prison"
    },
    ice_skating_rink: {
      osm_tags: {
        leisure: "ice_rink"
      },
      icon: "fas-skating",
      pretty_name: "Ice Skating Rink"
    },
    costume_store: {
      osm_tags: {
        shop: "clothes",
        clothes: "costume"
      },
      icon: "maki-theatre",
      pretty_name: "Costume Store"
    },
    ear_nose_and_throat: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "ear_nose_and_throat"
      },
      icon: "maki-doctor",
      pretty_name: "Ear Nose and Throat"
    },
    writing_service: {
      osm_tags: {
        office: "writing_service"
      },
      icon: "maki-suitcase",
      pretty_name: "Writing Service"
    },
    tiki_bar: {
      osm_tags: {
        amenity: "bar",
        cuisine: "tiki"
      },
      icon: "maki-bar",
      pretty_name: "Tiki Bar"
    },
    south_african_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "south_african"
      },
      icon: "maki-restaurant",
      pretty_name: "South African Restaurant"
    },
    roller_skating_rink: {
      osm_tags: {
        leisure: "pitch",
        sport: "roller_skating"
      },
      icon: "fas-skating",
      pretty_name: "Roller Skating Rink"
    },
    wig_store: {
      osm_tags: {
        shop: "wigs"
      },
      icon: "maki-shop",
      pretty_name: "Wig Store"
    },
    nurse_practitioner: {
      osm_tags: {
        healthcare: "nurse_practitioner"
      },
      icon: "maki-doctor",
      pretty_name: "Nurse Practitioner"
    },
    patio_covers: {
      osm_tags: {
        shop: "garden_furniture"
      },
      icon: "maki-shelter",
      pretty_name: "Patio Covers"
    },
    local_and_state_government_offices: {
      osm_tags: {
        office: "government"
      },
      icon: "temaki-town_hall",
      pretty_name: "Local and State Government Offices"
    },
    historical_tours: {
      osm_tags: {
        office: "guide",
        guide: "historical"
      },
      icon: "temaki-museum",
      pretty_name: "Historical Tours"
    },
    auditorium: {
      osm_tags: {
        amenity: "conference_centre",
        room: "auditorium"
      },
      icon: "fas-users",
      pretty_name: "Auditorium"
    },
    business_management_services: {
      osm_tags: {
        office: "business_management"
      },
      icon: "maki-suitcase",
      pretty_name: "Business Management Services"
    },
    hockey_field: {
      osm_tags: {
        leisure: "pitch",
        sport: "field_hockey"
      },
      icon: "temaki-field_hockey",
      pretty_name: "Hockey Field"
    },
    laser_tag: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "laser_tag"
      },
      icon: "fas-crosshairs",
      pretty_name: "Laser Tag"
    },
    emergency_room: {
      osm_tags: {
        emergency: "emergency_ward_entrance",
        entrance: "yes"
      },
      icon: "fas-ambulance",
      pretty_name: "Emergency Room"
    },
    malaysian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "malaysian"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Malaysian Restaurant"
    },
    arabian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "arab"
      },
      icon: "maki-restaurant",
      pretty_name: "Arabian Restaurant"
    },
    paving_contractor: {
      osm_tags: {
        craft: "paving"
      },
      icon: "temaki-brick_trowel",
      pretty_name: "Paving Contractor"
    },
    laser_hair_removal: {
      osm_tags: {
        shop: "beauty",
        "beauty:salon:waxing": "laser_hair_removal"
      },
      icon: "temaki-beauty_salon",
      pretty_name: "Laser Hair Removal"
    },
    reflexology: {
      osm_tags: {
        healthcare: "alternative",
        "healthcare:speciality": "reflexology"
      },
      icon: "temaki-spa",
      pretty_name: "Reflexology"
    },
    b2b_jewelers: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "jewelry"
      },
      icon: "maki-jewelry-store",
      pretty_name: "B2B Jewelers"
    },
    image_consultant: {
      osm_tags: {
        office: "consulting",
        consulting: "image"
      },
      icon: "temaki-briefcase",
      pretty_name: "Image Consultant"
    },
    personal_chef: {
      osm_tags: {
        craft: "personal_chef"
      },
      icon: "temaki-cleaver",
      pretty_name: "Personal Chef"
    },
    career_counseling: {
      osm_tags: {
        office: "career_counseling"
      },
      icon: "fas-suitcase",
      pretty_name: "Career Counseling"
    },
    private_investigation: {
      osm_tags: {
        office: "private_investigator"
      },
      icon: "fas-user-secret",
      pretty_name: "Private Investigation"
    },
    political_party_office: {
      osm_tags: {
        office: "political_party"
      },
      icon: "maki-town-hall",
      pretty_name: "Political Party Office"
    },
    granite_supplier: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "granite"
      },
      icon: "temaki-boulder2",
      pretty_name: "Granite Supplier"
    },
    bankruptcy_law: {
      osm_tags: {
        office: "lawyer",
        lawyer: "bankruptcy"
      },
      icon: "fas-balance-scale",
      pretty_name: "Bankruptcy Law"
    },
    boat_parts_and_accessories: {
      osm_tags: {
        shop: "boat"
      },
      icon: "temaki-boat",
      pretty_name: "Boat Parts and Accessories"
    },
    disc_golf_course: {
      osm_tags: {
        leisure: "disc_golf_course"
      },
      icon: "temaki-disc_golf_basket",
      pretty_name: "Disc Golf Course"
    },
    excavation_service: {
      osm_tags: {
        craft: "excavation"
      },
      icon: "temaki-pick_hammer",
      pretty_name: "Excavation Service"
    },
    housing_authorities: {
      osm_tags: {
        social_facility: "government",
        government: "housing_authority"
      },
      icon: "maki-town-hall",
      pretty_name: "Housing Authorities"
    },
    poultry_farm: {
      osm_tags: {
        landuse: "farm",
        amenity: "animal_breeding",
        animal_breeding: "chicken"
      },
      icon: "maki-farm",
      pretty_name: "Poultry Farm"
    },
    handyman: {
      osm_tags: {
        shop: "repair"
      },
      icon: "fas-tools",
      pretty_name: "Handyman"
    },
    hotel_supply_service: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "hotel_supplies"
      },
      icon: "fas-warehouse",
      pretty_name: "Hotel Supply Service"
    },
    cupcake_shop: {
      osm_tags: {
        shop: "pastry",
        cuisine: "cupcake"
      },
      icon: "maki-bakery",
      pretty_name: "Cupcake Shop"
    },
    prosthetics: {
      osm_tags: {
        shop: "medical_supply",
        product: "prosthetics"
      },
      icon: "fas-crutch",
      pretty_name: "Prosthetics"
    },
    contract_law: {
      osm_tags: {
        office: "lawyer",
        lawyer: "contracts"
      },
      icon: "fas-balance-scale",
      pretty_name: "Contract Law"
    },
    mass_media: {
      osm_tags: {
        office: "mass_media"
      },
      icon: "fas-video",
      pretty_name: "Mass Media"
    },
    sandblasting_service: {
      osm_tags: {
        craft: "sandblasting"
      },
      icon: "fas-tools",
      pretty_name: "Sandblasting Service"
    },
    shaved_ice_shop: {
      osm_tags: {
        shop: "shaved_ice"
      },
      icon: "fas-ice-cream",
      pretty_name: "Shaved Ice Shop"
    },
    sake_bar: {
      osm_tags: {
        amenity: "bar",
        cuisine: "sake"
      },
      icon: "maki-bar",
      pretty_name: "Sake Bar"
    },
    pakistani_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "pakistani"
      },
      icon: "maki-restaurant",
      pretty_name: "Pakistani Restaurant"
    },
    restaurant_equipment_and_supply: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "restaurant_equipment"
      },
      icon: "maki-restaurant",
      pretty_name: "Restaurant Equipment and Supply"
    },
    rv_rentals: {
      osm_tags: {
        amenity: "rv_rental"
      },
      icon: "temaki-camper_trailer",
      pretty_name: "RV Rentals"
    },
    polish_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "polish"
      },
      icon: "maki-restaurant",
      pretty_name: "Polish Restaurant"
    },
    aromatherapy: {
      osm_tags: {
        healthcare: "alternative",
        "healthcare:speciality": "aromatherapy"
      },
      icon: "fas-spa",
      pretty_name: "Aromatherapy"
    },
    hospice: {
      osm_tags: {
        healthcare: "hospice"
      },
      icon: "fas-procedures",
      pretty_name: "Hospice"
    },
    video_game_store: {
      osm_tags: {
        shop: "video_games"
      },
      icon: "maki-gaming",
      pretty_name: "Video Game Store"
    },
    vending_machine_supplier: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "vending_machine"
      },
      icon: "temaki-vending_machine",
      pretty_name: "Vending Machine Supplier"
    },
    pet_sitting: {
      osm_tags: {
        amenity: "animal_boarding"
      },
      icon: "fas-cat",
      pretty_name: "Pet Sitting"
    },
    health_spa: {
      osm_tags: {
        leisure: "spa"
      },
      icon: "temaki-spa",
      pretty_name: "Health Spa"
    },
    swimming_instructor: {
      osm_tags: {
        craft: "sports_instructor",
        sport: "swimming "
      },
      icon: "fas-swimmer",
      pretty_name: "Swimming Instructor"
    },
    doner_kebab: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "doner_kebab"
      },
      icon: "maki-restaurant",
      pretty_name: "Doner Kebab"
    },
    collection_agencies: {
      osm_tags: {
        office: "collection_agency"
      },
      icon: "temaki-briefcase",
      pretty_name: "Collection Agencies"
    },
    wholesale_grocer: {
      osm_tags: {
        shop: "wholesale;supermarket"
      },
      icon: "maki-warehouse",
      pretty_name: "Wholesale Grocer"
    },
    surgeon: {
      osm_tags: {
        amenity: "doctors",
        healthcare: "doctor",
        "healthcare:speciality": "surgery"
      },
      icon: "maki-doctor",
      pretty_name: "Surgeon"
    },
    petting_zoo: {
      osm_tags: {
        tourism: "zoo",
        zoo: "petting_zoo"
      },
      icon: "fas-horse",
      pretty_name: "Petting Zoo"
    },
    performing_arts: {
      osm_tags: {
        amenity: "theatre"
      },
      icon: "maki-theatre",
      pretty_name: "Performing Arts"
    },
    gastroenterologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "gastroenterology"
      },
      icon: "maki-doctor",
      pretty_name: "Gastroenterologist"
    },
    fort: {
      osm_tags: {
        historic: "fort"
      },
      icon: "maki-castle",
      pretty_name: "Fort"
    },
    energy_equipment_and_solution: {
      osm_tags: {
        office: "energy_equipment_and_solution"
      },
      icon: "temaki-power",
      pretty_name: "Energy Equipment and Solution"
    },
    hungarian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "hungarian"
      },
      icon: "maki-restaurant",
      pretty_name: "Hungarian Restaurant"
    },
    poke: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "poke"
      },
      icon: "maki-restaurant",
      pretty_name: "Poke"
    },
    general_dentistry: {
      osm_tags: {
        amenity: "dentist"
      },
      icon: "maki-dentist",
      pretty_name: "Dentist"
    },
    southern_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "southern"
      },
      icon: "maki-restaurant",
      pretty_name: "Southern Restaurant"
    },
    fencing_club: {
      osm_tags: {
        sport: "fencing"
      },
      icon: "maki-pitch",
      pretty_name: "Fencing Club"
    },
    go_kart_club: {
      osm_tags: {
        leisure: "sports_centre"
      },
      icon: "maki-pitch",
      pretty_name: "Go Kart Club"
    },
    water_park: {
      osm_tags: {
        leisure: "water_park"
      },
      icon: "fas-swimmer",
      pretty_name: "Water Park"
    },
    shipping_center: {
      osm_tags: {
        amenity: "post_office"
      },
      icon: "maki-post",
      pretty_name: "Shipping Center"
    },
    well_drilling: {
      osm_tags: {
        man_made: "water_well"
      },
      icon: "temaki-well_pump_manual",
      pretty_name: "Well Drilling"
    },
    crisis_intervention_services: {
      osm_tags: {
        amenity: "social_facility",
        social_facility: "crisis_intervention_services"
      },
      icon: "temaki-social_facility",
      pretty_name: "Crisis Intervention Services"
    },
    restaurant_wholesale: {
      osm_tags: {
        shop: "wholesale"
      },
      icon: "maki-warehouse",
      pretty_name: "Restaurant Wholesale"
    },
    meditation_center: {
      osm_tags: {
        amenity: "place_of_worship",
        religion: "buddhist"
      },
      icon: "maki-place-of-worship",
      pretty_name: "Meditation Center"
    },
    "women's_health_clinic": {
      osm_tags: {
        amenity: "clinic",
        healthcare: "clinic",
        "healthcare:speciality": "women"
      },
      icon: "maki-hospital",
      pretty_name: "Women's Health Clinic"
    },
    salvadoran_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "el_salvador"
      },
      icon: "maki-restaurant",
      pretty_name: "Salvadoran Restaurant"
    },
    translating_and_interpreting_services: {
      osm_tags: {
        office: "translator"
      },
      icon: "maki-suitcase",
      pretty_name: "Translating and Interpreting Services"
    },
    educational_camp: {
      osm_tags: {
        tourism: "camp_site",
        education: "yes"
      },
      icon: "maki-campsite",
      pretty_name: "Educational Camp"
    },
    occupational_safety: {
      osm_tags: {
        amenity: "social_facility",
        social_facility: "occupational_safety"
      },
      icon: "maki-wheelchair",
      pretty_name: "Occupational Safety"
    },
    circus: {
      osm_tags: {
        amenity: "theatre",
        "theatre:genre": "circus"
      },
      icon: "maki-theatre",
      pretty_name: "Circus"
    },
    internet_marketing_service: {
      osm_tags: {
        office: "marketing"
      },
      icon: "maki-suitcase",
      pretty_name: "Internet Marketing Service"
    },
    mobile_home_park: {
      osm_tags: {
        landuse: "residential",
        residential: "trailer_park"
      },
      icon: "temaki-camper_trailer",
      pretty_name: "Mobile Home Park"
    },
    merchandising_service: {
      osm_tags: {
        office: "merchandising"
      },
      icon: "temaki-briefcase",
      pretty_name: "Merchandising Service"
    },
    septic_services: {
      osm_tags: {
        amenity: "waste_disposal"
      },
      icon: "fas-dumpster",
      pretty_name: "Septic Services"
    },
    hawaiian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "hawaiian"
      },
      icon: "maki-restaurant",
      pretty_name: "Hawaiian Restaurant"
    },
    australian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "australian"
      },
      icon: "maki-restaurant",
      pretty_name: "Australian Restaurant"
    },
    outlet_store: {
      osm_tags: {
        shop: "outlet"
      },
      icon: "maki-shop",
      pretty_name: "Outlet Store"
    },
    fence_and_gate_sales_service: {
      osm_tags: {
        shop: "trade",
        trade: "fencing"
      },
      icon: "maki-shop",
      pretty_name: "Fence and Gate Sales Service"
    },
    hat_shop: {
      osm_tags: {
        shop: "clothes",
        clothes: "hat"
      },
      icon: "fas-tshirt",
      pretty_name: "Hat Shop"
    },
    automotive_consultant: {
      osm_tags: {
        office: "automotive_consultant"
      },
      icon: "maki-car",
      pretty_name: "Automotive Consultant"
    },
    airlines: {
      osm_tags: {
        office: "airline"
      },
      icon: "maki-airport",
      pretty_name: "Airlines"
    },
    school_sports_team: {
      osm_tags: {
        leisure: "sports_centre"
      },
      icon: "maki-pitch",
      pretty_name: "School Sports Team"
    },
    diving_center: {
      osm_tags: {
        amenity: "dive_centre"
      },
      icon: "temaki-scuba_diving",
      pretty_name: "Diving Center"
    },
    boat_tours: {
      osm_tags: {
        office: "guide",
        guide: "boat_tours"
      },
      icon: "temaki-sailboat",
      pretty_name: "Boat Tours"
    },
    peruvian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "peruvian"
      },
      icon: "maki-restaurant",
      pretty_name: "Peruvian Restaurant"
    },
    aircraft_dealer: {
      osm_tags: {
        office: "aircraft_dealer"
      },
      icon: "maki-airport",
      pretty_name: "Aircraft Dealer"
    },
    cambodian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "cambodian"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Cambodian Restaurant"
    },
    modern_art_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "modern_art"
      },
      icon: "maki-art-gallery",
      pretty_name: "Modern Art Museum"
    },
    sports_and_fitness_instruction: {
      osm_tags: {
        craft: "sports_instructor"
      },
      icon: "maki-pitch",
      pretty_name: "Sports and Fitness Instruction"
    },
    tobacco_company: {
      osm_tags: {
        shop: "tobacco"
      },
      icon: "temaki-pipe",
      pretty_name: "Tobacco Company"
    },
    sculpture_statue: {
      osm_tags: {
        tourism: "artwork",
        artwork_type: "statue"
      },
      icon: "temaki-statue",
      pretty_name: "Sculpture Statue"
    },
    football_stadium: {
      osm_tags: {
        leisure: "stadium",
        sport: "soccer"
      },
      icon: "maki-soccer",
      pretty_name: "Football Stadium"
    },
    caribbean_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "caribbean"
      },
      icon: "maki-restaurant",
      pretty_name: "Caribbean Restaurant"
    },
    adoption_services: {
      osm_tags: {
        office: "social_facility",
        social_facility: "adoption_services"
      },
      icon: "temaki-social_facility",
      pretty_name: "Adoption Services"
    },
    environmental_and_ecological_services_for_businesses: {
      osm_tags: {
        office: "environmental_services"
      },
      icon: "temaki-briefcase",
      pretty_name: "Environmental and Ecological Services For Businesses"
    },
    automobile_leasing: {
      osm_tags: {
        amenity: "car_rental"
      },
      icon: "maki-car-rental",
      pretty_name: "Automobile Leasing"
    },
    hotel_bar: {
      osm_tags: {
        amenity: "bar"
      },
      icon: "maki-bar",
      pretty_name: "Hotel Bar"
    },
    portuguese_restaurant: {
      osm_tags: {
        cuisine: "portuguese",
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "Portuguese Restaurant"
    },
    used_car_dealer: {
      osm_tags: {
        shop: "car"
      },
      icon: "maki-car",
      pretty_name: "Used Car Dealer"
    },
    trailer_dealer: {
      osm_tags: {
        shop: "trailer"
      },
      icon: "temaki-camper_trailer",
      pretty_name: "Trailer Dealer"
    },
    episcopal_church: {
      osm_tags: {
        amenity: "place_of_worship",
        denomination: "episcopal"
      },
      icon: "maki-place-of-worship",
      pretty_name: "Episcopal Church"
    },
    live_and_raw_food_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "raw_food"
      },
      icon: "maki-restaurant",
      pretty_name: "Live and Raw Food Restaurant"
    },
    tree_services: {
      osm_tags: {
        craft: "arborist"
      },
      icon: "maki-park",
      pretty_name: "Tree Services"
    },
    golf_cart_dealer: {
      osm_tags: {
        shop: "golf_cart"
      },
      icon: "maki-shop",
      pretty_name: "Golf Cart Dealer"
    },
    dui_law: {
      osm_tags: {
        amenity: "police",
        enforcement: "dui"
      },
      icon: "temaki-police_officer",
      pretty_name: "Dui Law"
    },
    pharmaceutical_companies: {
      osm_tags: {
        office: "pharmaceutical_company"
      },
      icon: "temaki-briefcase",
      pretty_name: "Pharmaceutical Companies"
    },
    bail_bonds_service: {
      osm_tags: {
        office: "bail_bond_agent"
      },
      icon: "maki-bank",
      pretty_name: "Bail Bonds Service"
    },
    massage: {
      osm_tags: {
        shop: "massage"
      },
      icon: "temaki-spa",
      pretty_name: "Massage"
    },
    british_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "british"
      },
      icon: "maki-restaurant",
      pretty_name: "British Restaurant"
    },
    skate_shop: {
      osm_tags: {
        shop: "sports",
        sport: "skating"
      },
      icon: "fas-futbol",
      pretty_name: "Skate Shop"
    },
    glass_blowing: {
      osm_tags: {
        craft: "glass_blowing"
      },
      icon: "maki-art-gallery",
      pretty_name: "Glass Blowing"
    },
    sky_diving: {
      osm_tags: {
        craft: "sports_instructor",
        sport: "skydiving"
      },
      icon: "maki-pitch",
      pretty_name: "Sky Diving"
    },
    sikh_temple: {
      osm_tags: {
        amenity: "place_of_worship",
        religion: "sikh"
      },
      icon: "temaki-sikhism",
      pretty_name: "Sikh Temple"
    },
    quay: {
      osm_tags: {
        man_made: "quay"
      },
      icon: "temaki-sailboat",
      pretty_name: "Quay"
    },
    marketing_consultant: {
      osm_tags: {
        office: "marketing_consultant"
      },
      icon: "temaki-briefcase",
      pretty_name: "Marketing Consultant"
    },
    driving_range: {
      osm_tags: {
        golf: "driving_range"
      },
      icon: "maki-golf",
      pretty_name: "Driving Range"
    },
    inn: {
      osm_tags: {
        tourism: "hotel"
      },
      icon: "fas-concierge-bell",
      pretty_name: "Inn"
    },
    beauty_product_supplier: {
      osm_tags: {
        shop: "beauty_supply"
      },
      icon: "temaki-beauty_salon",
      pretty_name: "Beauty Product Supplier"
    },
    scandinavian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "scandinavian"
      },
      icon: "maki-restaurant",
      pretty_name: "Scandinavian Restaurant"
    },
    professional_sports_league: {
      osm_tags: {
        office: "sports",
        sport: "professional_sports"
      },
      icon: "maki-pitch",
      pretty_name: "Professional Sports League"
    },
    urologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "urology"
      },
      icon: "maki-doctor",
      pretty_name: "Urologist"
    },
    record_label: {
      osm_tags: {
        office: "record_label"
      },
      icon: "fas-compact-disc",
      pretty_name: "Record Label"
    },
    speakeasy: {
      osm_tags: {
        amenity: "bar"
      },
      icon: "maki-bar",
      pretty_name: "Speakeasy"
    },
    mining: {
      osm_tags: {
        landuse: "industrial",
        industrial: "mine"
      },
      icon: "temaki-pick_hammer",
      pretty_name: "Mining"
    },
    abuse_and_addiction_treatment: {
      osm_tags: {
        healthcare: "counselling",
        "healthcare:counselling": "addiction"
      },
      icon: "temaki-social_facility",
      pretty_name: "Abuse and Addiction Treatment"
    },
    trinidadian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "trinidadian"
      },
      icon: "maki-restaurant",
      pretty_name: "Trinidadian Restaurant"
    },
    hockey_arena: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "hockey"
      },
      icon: "maki-pitch",
      pretty_name: "Hockey Arena"
    },
    archery_range: {
      osm_tags: {
        leisure: "pitch",
        sport: "archery"
      },
      icon: "temaki-archery",
      pretty_name: "Archery Range"
    },
    powder_coating_service: {
      osm_tags: {
        craft: "powder_coating"
      },
      icon: "fas-paint-roller",
      pretty_name: "Powder Coating Service"
    },
    genealogists: {
      osm_tags: {
        office: "genealogist"
      },
      icon: "maki-suitcase",
      pretty_name: "Genealogists"
    },
    bingo_hall: {
      osm_tags: {
        leisure: "bing_hall"
      },
      icon: "fas-dice",
      pretty_name: "Bingo Hall"
    },
    hair_replacement: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "hair"
      },
      icon: "maki-doctor",
      pretty_name: "Hair Replacement"
    },
    cosmetology_school: {
      osm_tags: {
        amenity: "school",
        education: "cosmetology"
      },
      icon: "temaki-school",
      pretty_name: "Cosmetology School"
    },
    horse_boarding: {
      osm_tags: {
        amenity: "animal_boarding",
        animal_boarding: "horse"
      },
      icon: "maki-horse-riding",
      pretty_name: "Horse Boarding"
    },
    panamanian_restaurant: {
      osm_tags: {
        cuisine: "panamanian",
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "Panamanian Restaurant"
    },
    pets: {
      osm_tags: {
        shop: "pet"
      },
      icon: "fas-cat",
      pretty_name: "Pets"
    },
    massage_therapy: {
      osm_tags: {
        shop: "massage"
      },
      icon: "temaki-spa",
      pretty_name: "Massage Therapy"
    },
    mattress_manufacturing: {
      osm_tags: {
        man_made: "works",
        product: "mattress"
      },
      icon: "maki-industry",
      pretty_name: "Mattress Manufacturing"
    },
    himalayan_nepalese_restaurant: {
      osm_tags: {
        cuisine: "nepalese",
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "Himalayan Nepalese Restaurant"
    },
    choir: {
      osm_tags: {
        amenity: "community_centre",
        club: "choir"
      },
      icon: "maki-town-hall",
      pretty_name: "Choir"
    },
    wills_trusts_and_probate: {
      osm_tags: {
        office: "lawyer",
        lawyer: "wills_trusts_and_probate"
      },
      icon: "temaki-briefcase",
      pretty_name: "Wills Trusts and Probate"
    },
    cave: {
      osm_tags: {
        natural: "cave"
      },
      icon: "triangle",
      pretty_name: "Cave"
    },
    senior_citizen_services: {
      osm_tags: {
        amenity: "social_facility",
        "social_facility:for": "senior_citizen"
      },
      icon: "temaki-social_facility",
      pretty_name: "Senior Citizen Services"
    },
    basque_restaurant: {
      osm_tags: {
        cuisine: "basque",
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "Basque Restaurant"
    },
    heliports: {
      osm_tags: {
        aeroway: "helipad"
      },
      icon: "maki-heliport",
      pretty_name: "Heliports"
    },
    ethiopian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "ethiopian"
      },
      icon: "maki-restaurant",
      pretty_name: "Ethiopian Restaurant"
    },
    home_staging: {
      osm_tags: {
        office: "home_staging"
      },
      icon: "maki-home",
      pretty_name: "Home Staging"
    },
    cycling_classes: {
      osm_tags: {
        craft: "sports_instructor",
        sport: "cycling",
        "cycling:class": "yes"
      },
      icon: "fas-biking",
      pretty_name: "Cycling Classes"
    },
    radiologist: {
      osm_tags: {
        healthcare: "radiologist"
      },
      icon: "maki-doctor",
      pretty_name: "Radiologist"
    },
    pulmonologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "pulmonology"
      },
      icon: "maki-doctor",
      pretty_name: "Pulmonologist"
    },
    bulgarian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "bulgarian"
      },
      icon: "maki-restaurant",
      pretty_name: "Bulgarian Restaurant"
    },
    bags_luggage_company: {
      osm_tags: {
        shop: "bag",
        bag_type: "luggage"
      },
      icon: "fas-suitcase-rolling",
      pretty_name: "Bags Luggage Company"
    },
    weather_station: {
      osm_tags: {
        man_made: "monitoring_station",
        "monitoring:weather": "yes"
      },
      icon: "temaki-antenna",
      pretty_name: "Weather Station"
    },
    whiskey_bar: {
      osm_tags: {
        amenity: "bar",
        bar: "whiskey"
      },
      icon: "maki-bar",
      pretty_name: "Whiskey Bar"
    },
    telemarketing_services: {
      osm_tags: {
        office: "telemarketing"
      },
      icon: "maki-suitcase",
      pretty_name: "Telemarketing Services"
    },
    jehovahs_witness_kingdom_hall: {
      osm_tags: {
        amenity: "place_of_worship",
        religion: "jehovahs_witness"
      },
      icon: "maki-place-of-worship",
      pretty_name: "Jehovahs Witness Kingdom Hall"
    },
    scuba_diving_instruction: {
      osm_tags: {
        craft: "sports_instructor",
        sport: "scuba_diving"
      },
      icon: "temaki-scuba_diving",
      pretty_name: "Scuba Diving Instruction"
    },
    rheumatologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "rheumatology"
      },
      icon: "maki-doctor",
      pretty_name: "Rheumatologist"
    },
    tiling: {
      osm_tags: {
        craft: "tiling"
      },
      icon: "temaki-brick_trowel",
      pretty_name: "Tiling"
    },
    game_publisher: {
      osm_tags: {
        shop: "games"
      },
      icon: "fas-dice",
      pretty_name: "Game Publisher"
    },
    medical_center: {
      osm_tags: {
        amenity: "clinic"
      },
      icon: "maki-hospital",
      pretty_name: "Medical Center"
    },
    b2b_apparel: {
      osm_tags: {
        shop: "clothes",
        clothes: "b2b_apparel"
      },
      icon: "fas-tshirt",
      pretty_name: "B2B Apparel"
    },
    first_aid_class: {
      osm_tags: {
        amenity: "training",
        training: "first_aid"
      },
      icon: "maki-hospital",
      pretty_name: "First Aid Class"
    },
    laser_eye_surgery_lasik: {
      osm_tags: {
        healthcare: "surgery",
        "healthcare:speciality": "ophthalmology",
        "ophthalmology:laser_surgery": "yes"
      },
      icon: "maki-doctor",
      pretty_name: "Laser Eye Surgery Lasik"
    },
    cuban_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "cuban"
      },
      icon: "maki-restaurant",
      pretty_name: "Cuban Restaurant"
    },
    copywriting_service: {
      osm_tags: {
        craft: "copywriting"
      },
      icon: "maki-suitcase",
      pretty_name: "Copywriting Service"
    },
    community_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "community"
      },
      icon: "temaki-museum",
      pretty_name: "Community Museum"
    },
    taxidermist: {
      osm_tags: {
        craft: "taxidermy"
      },
      icon: "maki-zoo",
      pretty_name: "Taxidermist"
    },
    employment_law: {
      osm_tags: {
        office: "lawyer",
        laywer: "employment"
      },
      icon: "fas-balance-scale",
      pretty_name: "Employment Law"
    },
    department_of_motor_vehicles: {
      osm_tags: {
        office: "government",
        government: "transportation"
      },
      icon: "fas-car",
      pretty_name: "Department of Motor Vehicles"
    },
    bus_tours: {
      osm_tags: {
        office: "guide",
        guide: "bus_tours"
      },
      icon: "temaki-bus",
      pretty_name: "Bus Tours"
    },
    belgian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "belgian"
      },
      icon: "maki-restaurant",
      pretty_name: "Belgian Restaurant"
    },
    shredding_services: {
      osm_tags: {
        office: "shredding_services"
      },
      icon: "maki-suitcase",
      pretty_name: "Shredding Services"
    },
    boot_camp: {
      osm_tags: {
        amenity: "fitness_centre"
      },
      icon: "fas-dumbbell",
      pretty_name: "Boot Camp"
    },
    kids_recreation_and_party: {
      osm_tags: {
        shop: "party"
      },
      icon: "temaki-balloon",
      pretty_name: "Kids Recreation and Party"
    },
    surf_shop: {
      osm_tags: {
        shop: "sport",
        sport: "surfing"
      },
      icon: "temaki-beach",
      pretty_name: "Surf Shop"
    },
    hair_supply_stores: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "hair_supply"
      },
      icon: "temaki-beauty_salon",
      pretty_name: "Hair Supply Stores"
    },
    fish_farm: {
      osm_tags: {
        landuse: "aquaculture"
      },
      icon: "maki-aquarium",
      pretty_name: "Fish Farm"
    },
    science_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "science"
      },
      icon: "temaki-museum",
      pretty_name: "Science Museum"
    },
    salsa_club: {
      osm_tags: {
        amenity: "nightclub",
        music_genre: "salsa"
      },
      icon: "fas-cocktail",
      pretty_name: "Salsa Club"
    },
    czech_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "czech"
      },
      icon: "maki-restaurant",
      pretty_name: "Czech Restaurant"
    },
    neuropathologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "neuropathology"
      },
      icon: "maki-doctor",
      pretty_name: "Neuropathologist"
    },
    endodontist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "endodontics"
      },
      icon: "maki-doctor",
      pretty_name: "Endodontist"
    },
    catalan_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "catalan"
      },
      icon: "maki-restaurant",
      pretty_name: "Catalan Restaurant"
    },
    oil_change_station: {
      osm_tags: {
        amenity: "fuel",
        service: "oil_change"
      },
      icon: "maki-fuel",
      pretty_name: "Oil Change Station"
    },
    nephrologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "nephrology"
      },
      icon: "maki-doctor",
      pretty_name: "Nephrologist"
    },
    baseball_stadium: {
      osm_tags: {
        leisure: "stadium",
        sport: "baseball"
      },
      icon: "maki-baseball",
      pretty_name: "Baseball Stadium"
    },
    sightseeing_tour_agency: {
      osm_tags: {
        office: "guide",
        guide: "sightseeing"
      },
      icon: "temaki-binoculars",
      pretty_name: "Sightseeing Tour Agency"
    },
    cardiologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "cardiology"
      },
      icon: "maki-doctor",
      pretty_name: "Cardiologist"
    },
    cricket_ground: {
      osm_tags: {
        leisure: "pitch",
        sport: "cricket"
      },
      icon: "maki-cricket",
      pretty_name: "Cricket Ground"
    },
    traffic_school: {
      osm_tags: {
        amenity: "driving_school"
      },
      icon: "maki-car",
      pretty_name: "Traffic School"
    },
    sugaring: {
      osm_tags: {
        shop: "beauty_salon",
        beauty_salon: "sugaring"
      },
      icon: "temaki-beauty_salon",
      pretty_name: "Sugaring"
    },
    indo_chinese_restaurant: {
      osm_tags: {
        cuisine: "indo_chinese",
        amenity: "restaurant"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Indo Chinese Restaurant"
    },
    child_protection_service: {
      osm_tags: {
        amenity: "social_facility",
        social_facility: "child_protection"
      },
      icon: "fas-child-reaching",
      pretty_name: "Child Protection Service"
    },
    oncologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "oncology"
      },
      icon: "maki-doctor",
      pretty_name: "Oncologist"
    },
    automotive_storage_facility: {
      osm_tags: {
        amenity: "parking",
        parking: "long_term"
      },
      icon: "temaki-car_structure",
      pretty_name: "Automotive Storage Facility"
    },
    golf_instructor: {
      osm_tags: {
        craft: "sports_instructor",
        sport: "golf"
      },
      icon: "maki-golf",
      pretty_name: "Golf Instructor"
    },
    inventory_control_service: {
      osm_tags: {
        office: "inventory_control"
      },
      icon: "fas-suitcase",
      pretty_name: "Inventory Control Service"
    },
    home_theater_systems_stores: {
      osm_tags: {
        shop: "electronics"
      },
      icon: "fas-video",
      pretty_name: "Home Theater Systems Stores"
    },
    rugby_pitch: {
      osm_tags: {
        leisure: "pitch",
        sport: "rugby"
      },
      icon: "maki-pitch",
      pretty_name: "Rugby Pitch"
    },
    sex_therapist: {
      osm_tags: {
        office: "therapist",
        "healthcare:speciality": "sex_therapist"
      },
      icon: "fas-suitcase",
      pretty_name: "Sex Therapist"
    },
    drive_in_theater: {
      osm_tags: {
        amenity: "cinema",
        drive_in: "yes"
      },
      icon: "maki-cinema",
      pretty_name: "Drive-In Theater"
    },
    auto_body_shop: {
      osm_tags: {
        shop: "car_repair"
      },
      icon: "maki-car-repair",
      pretty_name: "Auto Body Shop"
    },
    dialysis_clinic: {
      osm_tags: {
        amenity: "clinic",
        healthcare: "dialysis"
      },
      icon: "maki-hospital",
      pretty_name: "Dialysis Clinic"
    },
    miniature_golf_course: {
      osm_tags: {
        leisure: "golf_course",
        golf: "miniature"
      },
      icon: "maki-golf",
      pretty_name: "Miniature Golf Course"
    },
    bartender: {
      osm_tags: {
        amenity: "trade_school",
        trade: "bartending"
      },
      icon: "temaki-bottles",
      pretty_name: "Bartender"
    },
    anesthesiologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "anesthesiology"
      },
      icon: "maki-doctor",
      pretty_name: "Anesthesiologist"
    },
    medical_spa: {
      osm_tags: {
        leisure: "spa",
        "spa:speciality": "medical"
      },
      icon: "temaki-spa",
      pretty_name: "Medical Spa"
    },
    car_wash: {
      osm_tags: {
        amenity: "car_wash"
      },
      icon: "temaki-car_wash",
      pretty_name: "Car Wash"
    },
    secretarial_services: {
      osm_tags: {
        office: "secretarial"
      },
      icon: "maki-suitcase",
      pretty_name: "Secretarial Services"
    },
    civilization_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "history"
      },
      icon: "temaki-museum",
      pretty_name: "Civilization Museum"
    },
    homeless_shelter: {
      osm_tags: {
        amenity: "social_facility",
        social_facility: "shelter",
        "social_facility:for": "homeless"
      },
      icon: "temaki-bunk_beds",
      pretty_name: "Homeless Shelter"
    },
    marriage_or_relationship_counselor: {
      osm_tags: {
        office: "marriage_counselor"
      },
      icon: "maki-suitcase",
      pretty_name: "Marriage or Relationship Counselor"
    },
    media_agency: {
      osm_tags: {
        office: "media_agency"
      },
      icon: "maki-suitcase",
      pretty_name: "Media Agency"
    },
    personal_assistant: {
      osm_tags: {
        office: "personal_assistant"
      },
      icon: "maki-suitcase",
      pretty_name: "Personal Assistant"
    },
    gerontologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "gerontology"
      },
      icon: "maki-doctor",
      pretty_name: "Gerontologist"
    },
    motel: {
      osm_tags: {
        tourism: "motel"
      },
      icon: "maki-lodging",
      pretty_name: "Motel"
    },
    water_heater_installation_repair: {
      osm_tags: {
        shop: "appliance;repair",
        appliance: "water_heater",
        repair: "water_heater"
      },
      icon: "maki-water",
      pretty_name: "Water Heater Installation Repair"
    },
    egyptian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "egyptian"
      },
      icon: "maki-restaurant",
      pretty_name: "Egyptian Restaurant"
    },
    specialty_grocery_store: {
      osm_tags: {
        shop: "supermarket"
      },
      icon: "maki-grocery",
      pretty_name: "Speciality Grocery Store"
    },
    kiteboarding: {
      osm_tags: {
        leisure: "kiteboarding"
      },
      icon: "temaki-sailboat",
      pretty_name: "Kiteboarding"
    },
    recreation_vehicle_repair: {
      osm_tags: {
        shop: "repair",
        repair: "rv"
      },
      icon: "maki-car-repair",
      pretty_name: "Recreation Vehicle Repair"
    },
    meat_wholesaler: {
      osm_tags: {
        shop: "butcher"
      },
      icon: "temaki-cleaver",
      pretty_name: "Meat Wholesaler"
    },
    chimney_sweep: {
      osm_tags: {
        craft: "chimney_sweeping"
      },
      icon: "maki-industry",
      pretty_name: "Chimney Sweep"
    },
    vehicle_shipping: {
      osm_tags: {
        office: "logistics",
        service: "vehicle_shipping"
      },
      icon: "fas-car",
      pretty_name: "Vehicle Shipping"
    },
    general_litigation: {
      osm_tags: {
        office: "lawyer",
        lawyer: "litigation"
      },
      icon: "fas-balance-scale",
      pretty_name: "General Litigation"
    },
    halfway_house: {
      osm_tags: {
        amenity: "social_facility",
        social_facility: "group_home"
      },
      icon: "temaki-social_facility",
      pretty_name: "Halfway House"
    },
    colombian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "colombian"
      },
      icon: "maki-restaurant",
      pretty_name: "Colombian Restaurant"
    },
    waxing: {
      osm_tags: {
        shop: "beauty",
        beauty: "waxing"
      },
      icon: "temaki-lipstick",
      pretty_name: "Waxing"
    },
    allergist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "allergist"
      },
      icon: "maki-doctor",
      pretty_name: "Allergist"
    },
    party_and_event_planning: {
      osm_tags: {
        office: "party_and_event_planning"
      },
      icon: "fas-users",
      pretty_name: "Party and Event Planning"
    },
    haunted_house: {
      osm_tags: {
        attraction: "haunted_house"
      },
      icon: "maki-home",
      pretty_name: "Haunted House"
    },
    dog_walkers: {
      osm_tags: {
        office: "dog_walking"
      },
      icon: "maki-dog-park",
      pretty_name: "Dog Walkers"
    },
    day_spa: {
      osm_tags: {
        leisure: "spa"
      },
      icon: "temaki-spa",
      pretty_name: "Day Spa"
    },
    snorkeling: {
      osm_tags: {
        leisure: "snorkeling"
      },
      icon: "fas-swimmer",
      pretty_name: "Snorkeling"
    },
    dj_service: {
      osm_tags: {
        craft: "dj"
      },
      icon: "fas-compact-disc",
      pretty_name: "DJ Service"
    },
    hong_kong_style_cafe: {
      osm_tags: {
        amenity: "cafe",
        cuisine: "hong_kong_style"
      },
      icon: "temaki-hot_drink_cup",
      pretty_name: "Hong Kong Style Cafe"
    },
    mongolian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "mongolian"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Mongolian Restaurant"
    },
    hot_air_balloons_tour: {
      osm_tags: {
        office: "guide",
        guide: "hot_air_balloon"
      },
      icon: "temaki-balloon",
      pretty_name: "Hot Air Balloons Tour"
    },
    emergency_roadside_service: {
      osm_tags: {
        office: "roadside_assistance",
        emergency: "yes"
      },
      icon: "maki-emergency-phone",
      pretty_name: "Emergency Roadside Service"
    },
    afghan_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "afghan"
      },
      icon: "maki-restaurant",
      pretty_name: "Afghan Restaurant"
    },
    bank_equipment_service: {
      osm_tags: {
        shop: "repair",
        repair: "bank_equipment"
      },
      icon: "maki-suitcase",
      pretty_name: "Bank Equipment Service"
    },
    atv_recreation_park: {
      osm_tags: {
        leisure: "atv_park"
      },
      icon: "fas-motorcycle",
      pretty_name: "ATV Recreation Park"
    },
    custom_clothing: {
      osm_tags: {
        shop: "clothes",
        clothes: "custom"
      },
      icon: "fas-tshirt",
      pretty_name: "Custom Clothing"
    },
    oral_surgeon: {
      osm_tags: {
        healthcare: "surgeon",
        "healthcare:speciality": "oral_surgery"
      },
      icon: "maki-doctor",
      pretty_name: "Oral Surgeon"
    },
    asian_fusion_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "asian_fusion"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Asian Fusion Restaurant"
    },
    abortion_clinic: {
      osm_tags: {
        amenity: "clinic",
        healthcare: "clinic",
        "healthcare:speciality": "abortion"
      },
      icon: "maki-hospital",
      pretty_name: "Abortion Clinic"
    },
    austrian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "austrian"
      },
      icon: "maki-restaurant-bbq",
      pretty_name: "Austrian Restaurant"
    },
    videographer: {
      osm_tags: {
        craft: "videographer"
      },
      icon: "fas-video",
      pretty_name: "Videographer"
    },
    medical_law: {
      osm_tags: {
        office: "lawyer",
        lawyer: "medical"
      },
      icon: "fas-balance-scale",
      pretty_name: "Medical Law"
    },
    design_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "design"
      },
      icon: "temaki-museum",
      pretty_name: "Design Museum"
    },
    track_stadium: {
      osm_tags: {
        leisure: "stadium;track",
        sport: "running"
      },
      icon: "maki-pitch",
      pretty_name: "Track Stadium"
    },
    polynesian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "polynesian"
      },
      icon: "maki-restaurant",
      pretty_name: "Polynesian Restaurant"
    },
    sports_psychologist: {
      osm_tags: {
        healthcare: "psychotherapist",
        "healthcare:speciality": "sports_psychology"
      },
      icon: "maki-pitch",
      pretty_name: "Sports Psychologist"
    },
    process_servers: {
      osm_tags: {
        office: "process_server"
      },
      icon: "maki-suitcase",
      pretty_name: "Process Servers"
    },
    rugby_stadium: {
      osm_tags: {
        leisure: "stadium",
        sport: "rugby"
      },
      icon: "maki-pitch",
      pretty_name: "Rugby Stadium"
    },
    archery_shop: {
      osm_tags: {
        shop: "sporting_goods",
        sport: "archery"
      },
      icon: "temaki-archery",
      pretty_name: "Archery Shop"
    },
    house_sitting: {
      osm_tags: {
        office: "house_sitting"
      },
      icon: "maki-suitcase",
      pretty_name: "House Sitting"
    },
    georgian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "georgian"
      },
      icon: "maki-restaurant",
      pretty_name: "Georgian Restaurant"
    },
    swiss_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "swiss"
      },
      icon: "maki-restaurant",
      pretty_name: "Swiss Restaurant"
    },
    aircraft_repair: {
      osm_tags: {
        shop: "repair",
        repair: "aircraft"
      },
      icon: "temaki-airport",
      pretty_name: "Aircraft Repair"
    },
    chilean_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "chilean"
      },
      icon: "maki-restaurant",
      pretty_name: "Chilean Restaurant"
    },
    nanny_services: {
      osm_tags: {
        amenity: "childcare",
        craft: "nanny"
      },
      icon: "fas-child-reaching",
      pretty_name: "Nanny Services"
    },
    endocrinologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "endocrinology"
      },
      icon: "maki-doctor",
      pretty_name: "Endocrinologist"
    },
    volleyball_court: {
      osm_tags: {
        leisure: "pitch",
        sport: "volleyball"
      },
      icon: "maki-volleyball",
      pretty_name: "Volleyball Court"
    },
    periodontist: {
      osm_tags: {
        healthcare: "dentist",
        amenity: "dentist",
        "healthcare:speciality": "periodontics"
      },
      icon: "maki-teeth",
      pretty_name: "Periodontist"
    },
    esports_team: {
      osm_tags: {
        office: "sports_league",
        sport: "e_sports"
      },
      icon: "maki-gaming",
      pretty_name: "E-sports Team"
    },
    public_toilet: {
      osm_tags: {
        amenity: "toilets",
        access: "yes"
      },
      icon: "temaki-latrine",
      pretty_name: "Public Toilet"
    },
    esports_league: {
      osm_tags: {
        office: "sports_league",
        sport: "e_sports"
      },
      icon: "maki-gaming",
      pretty_name: "E-sports League"
    },
    airport_shuttles: {
      osm_tags: {
        office: "transportation",
        transportation: "airport_shuttle"
      },
      icon: "temaki-bus",
      pretty_name: "Airport Shuttles"
    },
    jamaican_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "jamaican"
      },
      icon: "maki-restaurant",
      pretty_name: "Jamaican Restaurant"
    },
    tax_law: {
      osm_tags: {
        office: "lawyer",
        lawyer: "tax"
      },
      icon: "fas-balance-scale",
      pretty_name: "Tax Law"
    },
    reptile_shop: {
      osm_tags: {
        shop: "pet",
        pet: "pet_reptile"
      },
      icon: "maki-shop",
      pretty_name: "Reptile Shop"
    },
    massage_school: {
      osm_tags: {
        amenity: "trade_school",
        trade: "massage"
      },
      icon: "temaki-spa",
      pretty_name: "Massage School"
    },
    social_media_company: {
      osm_tags: {
        office: "social_media_company"
      },
      icon: "fas-users",
      pretty_name: "Social Media Company"
    },
    sri_lankan_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "sri_lankan"
      },
      icon: "maki-restaurant",
      pretty_name: "Sri Lankan Restaurant"
    },
    junkyard: {
      osm_tags: {
        industrial: "scrap_yard"
      },
      icon: "temaki-junk_car",
      pretty_name: "Junkyard"
    },
    archaeological_services: {
      osm_tags: {
        office: "archaeology"
      },
      icon: "temaki-ruins",
      pretty_name: "Archaeological Services"
    },
    automobile_registration_service: {
      osm_tags: {
        office: "vehicle_registration_service"
      },
      icon: "fas-car",
      pretty_name: "Automobile Registration Service"
    },
    racquetball_court: {
      osm_tags: {
        leisure: "pitch",
        sport: "racquetball"
      },
      icon: "maki-tennis",
      pretty_name: "Racquetball Court"
    },
    duty_free_shop: {
      osm_tags: {
        shop: "duty_free"
      },
      icon: "maki-shop",
      pretty_name: "Duty Free Shop"
    },
    balloon_ports: {
      osm_tags: {
        aeroway: "aerodrome",
        aerodrome: "balloon_port"
      },
      icon: "temaki-balloon",
      pretty_name: "Balloon Ports"
    },
    computer_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "computer"
      },
      icon: "temaki-museum",
      pretty_name: "Computer Museum"
    },
    avionics_shop: {
      osm_tags: {
        shop: "avionics"
      },
      icon: "maki-airport",
      pretty_name: "Avionics Shop"
    },
    automotive_wheel_polishing_service: {
      osm_tags: {
        shop: "car_wash"
      },
      icon: "temaki-car_wash",
      pretty_name: "Automotive Wheel Polishing Service"
    },
    maternity_wear: {
      osm_tags: {
        shop: "clothes",
        clothes: "maternity"
      },
      icon: "fas-tshirt",
      pretty_name: "Maternity Wear"
    },
    nigerian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "nigerian"
      },
      icon: "maki-restaurant",
      pretty_name: "Nigerian Restaurant"
    },
    tatar_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "tatar"
      },
      icon: "maki-restaurant",
      pretty_name: "Tatar Restaurant"
    },
    slovakian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "slovak"
      },
      icon: "maki-restaurant",
      pretty_name: "Slovakian Restaurant"
    },
    theaters_and_performance_venues: {
      osm_tags: {
        amenity: "theatre"
      },
      icon: "maki-theatre",
      pretty_name: "Theaters and Performance Venues"
    },
    psychiatrist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "psychiatry"
      },
      icon: "maki-doctor",
      pretty_name: "Psychiatrist"
    },
    bangladeshi_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "bangladeshi"
      },
      icon: "maki-restaurant",
      pretty_name: "Bangladeshi Restaurant"
    },
    taco_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "mexican"
      },
      icon: "fas-pepper-hot",
      pretty_name: "Taco Restaurant"
    },
    flyboarding_center: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "flyboarding"
      },
      icon: "temaki-beach",
      pretty_name: "Flyboarding Center"
    },
    hair_extensions: {
      osm_tags: {
        shop: "hairdresser;beauty",
        beauty: "hair_extensions"
      },
      icon: "temaki-beauty_salon",
      pretty_name: "Hair Extensions"
    },
    aviation_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "aviation"
      },
      icon: "temaki-museum",
      pretty_name: "Aviation Museum"
    },
    sports_bar: {
      osm_tags: {
        amenity: "bar"
      },
      icon: "maki-bar",
      pretty_name: "Sports Bar"
    },
    food_tours: {
      osm_tags: {
        office: "guide",
        guide: "food_tours"
      },
      icon: "fas-pepper-hot",
      pretty_name: "Food Tours"
    },
    champagne_bar: {
      osm_tags: {
        amenity: "bar",
        "drink:alcohol": "champagne"
      },
      icon: "maki-bar",
      pretty_name: "Champagne Bar"
    },
    auto_restoration_services: {
      osm_tags: {
        shop: "car_repair",
        craft: "car_restoration"
      },
      icon: "fas-car",
      pretty_name: "Auto Restoration Services"
    },
    canadian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "canadian"
      },
      icon: "maki-restaurant",
      pretty_name: "Canadian Restaurant"
    },
    romanian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "romanian"
      },
      icon: "maki-restaurant",
      pretty_name: "Romanian Restaurant"
    },
    honduran_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "honduran"
      },
      icon: "maki-restaurant",
      pretty_name: "Honduran Restaurant"
    },
    sports_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "sports"
      },
      icon: "temaki-museum",
      pretty_name: "Sports Museum"
    },
    puerto_rican_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "puerto_rican"
      },
      icon: "maki-restaurant",
      pretty_name: "Puerto Rican Restaurant"
    },
    azerbaijani_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "azerbaijani"
      },
      icon: "maki-restaurant",
      pretty_name: "Azerbaijani Restaurant"
    },
    costume_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "costume"
      },
      icon: "temaki-museum",
      pretty_name: "Costume Museum"
    },
    molecular_gastronomy_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "molecular_gastronomy"
      },
      icon: "maki-restaurant",
      pretty_name: "Molecular Gastronomy Restaurant"
    },
    singaporean_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "singaporean"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Singaporean Restaurant"
    },
    logging_contractor: {
      osm_tags: {
        craft: "logger"
      },
      icon: "maki-logging",
      pretty_name: "Logging Contractor"
    },
    gluten_free_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        "diet:gluten_free": "yes"
      },
      icon: "maki-restaurant",
      pretty_name: "Gluten Free Restaurant"
    },
    photographer: {
      osm_tags: {
        craft: "photographer"
      },
      icon: "fas-camera-retro",
      pretty_name: "Photographer"
    },
    ride_sharing: {
      osm_tags: {
        amenity: "car_sharing"
      },
      icon: "temaki-sign_and_car",
      pretty_name: "Ride Sharing"
    },
    architectural_tours: {
      osm_tags: {
        office: "guide",
        guide: "architecture"
      },
      icon: "temaki-ruins",
      pretty_name: "Architectural Tours"
    },
    desert: {
      osm_tags: {
        natural: "desert"
      },
      icon: "temaki-sandbox",
      pretty_name: "Desert"
    },
    irish_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "irish"
      },
      icon: "maki-restaurant",
      pretty_name: "Irish Restaurant"
    },
    venezuelan_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "venezuelan"
      },
      icon: "maki-restaurant",
      pretty_name: "Venezuelan Restaurant"
    },
    tai_chi_studio: {
      osm_tags: {
        leisure: "fitness_centre",
        "fitness_centre:type": "tai_chi"
      },
      icon: "maki-pitch",
      pretty_name: "Tai Chi Studio"
    },
    school_sports_league: {
      osm_tags: {
        office: "sports_league"
      },
      icon: "maki-suitcase",
      pretty_name: "School Sports League"
    },
    medical_supply: {
      osm_tags: {
        shop: "medical_supply"
      },
      icon: "fas-crutch",
      pretty_name: "Medical Supply"
    },
    dive_bar: {
      osm_tags: {
        amenity: "bar"
      },
      icon: "maki-bar",
      pretty_name: "Dive Bar"
    },
    haitian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "haitian"
      },
      icon: "maki-restaurant",
      pretty_name: "Haitian Restaurant"
    },
    uzbek_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "uzbek"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Uzbek Restaurant"
    },
    asian_art_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "art",
        artwork_type: "asian"
      },
      icon: "temaki-museum",
      pretty_name: "Asian Art Museum"
    },
    dominican_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "dominican"
      },
      icon: "maki-restaurant",
      pretty_name: "Dominican Restaurant"
    },
    food_banks: {
      osm_tags: {
        amenity: "food_bank"
      },
      icon: "maki-warehouse",
      pretty_name: "Food Banks"
    },
    seaplane_bases: {
      osm_tags: {
        aeroway: "seaplane_base"
      },
      icon: "temaki-airport",
      pretty_name: "Seaplane Bases"
    },
    decorative_arts_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "art",
        arts_type: "decorative"
      },
      icon: "temaki-museum",
      pretty_name: "Decorative Arts Museum"
    },
    contemporary_art_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "art",
        artwork_type: "contemporary"
      },
      icon: "temaki-museum",
      pretty_name: "Contemporary Art Museum"
    },
    israeli_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "israeli"
      },
      icon: "maki-restaurant",
      pretty_name: "Israeli Restaurant"
    },
    photography_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "photography"
      },
      icon: "temaki-museum",
      pretty_name: "Photography Museum"
    },
    syrian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "syrian"
      },
      icon: "maki-restaurant",
      pretty_name: "Syrian Restaurant"
    },
    paddleboarding_center: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "paddleboarding"
      },
      icon: "maki-pitch",
      pretty_name: "Paddleboarding Center"
    },
    magician: {
      osm_tags: {
        craft: "magician"
      },
      icon: "maki-star",
      pretty_name: "Magician"
    },
    academic_bookstore: {
      osm_tags: {
        shop: "books"
      },
      icon: "fas-book",
      pretty_name: "Academic Bookstore"
    },
    media_critic: {
      osm_tags: {
        office: "media_critic"
      },
      icon: "maki-suitcase",
      pretty_name: "Media Critic"
    },
    proctologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "proctology"
      },
      icon: "maki-doctor",
      pretty_name: "Proctologist"
    },
    ecuadorian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "ecuadorian"
      },
      icon: "maki-restaurant",
      pretty_name: "Ecuadorian Restaurant"
    },
    animation_studio: {
      osm_tags: {
        amenity: "studio",
        studio: "animation"
      },
      icon: "fas-video",
      pretty_name: "Animation Studio"
    },
    iberian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "iberian"
      },
      icon: "maki-restaurant",
      pretty_name: "Iberian Restaurant"
    },
    entertainment_law: {
      osm_tags: {
        office: "lawyer",
        lawyer: "entertainment"
      },
      icon: "fas-balance-scale",
      pretty_name: "Entertainment Law"
    },
    guatemalan_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "guatemalan"
      },
      icon: "maki-restaurant",
      pretty_name: "Guatemalan Restaurant"
    },
    hang_gliding_center: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "hang_gliding"
      },
      icon: "temaki-airport",
      pretty_name: "Hang Gliding Center"
    },
    nicaraguan_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "nicaraguan"
      },
      icon: "maki-restaurant",
      pretty_name: "Nicaraguan Restaurant"
    },
    armenian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "armenian"
      },
      icon: "maki-restaurant",
      pretty_name: "Armenian Restaurant"
    },
    media_restoration_service: {
      osm_tags: {
        office: "media_restoration"
      },
      icon: "maki-suitcase",
      pretty_name: "Media Restoration Service"
    },
    cartooning_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "cartooning"
      },
      icon: "temaki-museum",
      pretty_name: "Cartooning Museum"
    },
    textile_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "textile"
      },
      icon: "temaki-museum",
      pretty_name: "Textile Museum"
    },
    senegalese_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "senegalese"
      },
      icon: "maki-restaurant",
      pretty_name: "Senegalese Restaurant"
    },
    threading_service: {
      osm_tags: {
        office: "threading_service"
      },
      icon: "temaki-needle_and_spool",
      pretty_name: "Threading Service"
    },
    costa_rican_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "costa_rican"
      },
      icon: "maki-restaurant",
      pretty_name: "Costa Rican Restaurant"
    },
    kurdish_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "kurdish"
      },
      icon: "maki-restaurant",
      pretty_name: "Kurdish Restaurant"
    },
    paraguayan_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "paraguayan"
      },
      icon: "maki-restaurant",
      pretty_name: "Paraguayan Restaurant"
    },
    belarusian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "belarusian"
      },
      icon: "maki-restaurant",
      pretty_name: "Belarusian Restaurant"
    },
    uruguayan_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "uruguayan"
      },
      icon: "maki-restaurant",
      pretty_name: "Uruguayan Restaurant"
    },
    scottish_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "scottish"
      },
      icon: "maki-restaurant",
      pretty_name: "Scottish Restaurant"
    },
    belizean_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "belizean"
      },
      icon: "maki-restaurant",
      pretty_name: "Belizean Restaurant"
    },
    aircraft_manufacturer: {
      osm_tags: {
        man_made: "works",
        product: "aircraft"
      },
      icon: "maki-airport",
      pretty_name: "Aircraft Manufacturer"
    },
    video_game_critic: {
      osm_tags: {
        office: "video_game_critic"
      },
      icon: "maki-gaming",
      pretty_name: "Video Game Critic"
    },
    movie_critic: {
      osm_tags: {
        office: "movie_critic"
      },
      icon: "fas-video",
      pretty_name: "Movie Critic"
    },
    music_critic: {
      osm_tags: {
        office: "music_critic"
      },
      icon: "fas-music",
      pretty_name: "Music Critic"
    },
    designer_clothing: {
      osm_tags: {
        shop: "boutique"
      },
      icon: "maki-shop",
      pretty_name: "Designer Clothing"
    },
    woodworking_supply_store: {
      osm_tags: {
        shop: "woodworking_supply"
      },
      icon: "maki-logging",
      pretty_name: "Woodworking Supply Store"
    },
    b2b_oil_and_gas_extraction_and_services: {
      osm_tags: {
        office: "oil_and_gas_extraction"
      },
      icon: "temaki-oil_well",
      pretty_name: "B2B Oil and Gas Extraction and Services"
    },
    pipeline_transportation: {
      osm_tags: {
        office: "transportation",
        transportation: "pipeline"
      },
      icon: "iD-pipeline-line",
      pretty_name: "Pipeline Transportation"
    },
    builders: {
      osm_tags: {
        craft: "builder"
      },
      icon: "temaki-tools",
      pretty_name: "Builders"
    },
    natural_gas_supplier: {
      osm_tags: {
        amenity: "fuel",
        "fuel:natural_gas": "yes"
      },
      icon: "maki-fuel",
      pretty_name: "Natural Gas Supplier"
    },
    wine_wholesaler: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "wine"
      },
      icon: "fas-wine-bottle",
      pretty_name: "Wine Wholesaler"
    },
    b2b_hardware: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "computer"
      },
      icon: "fas-laptop",
      pretty_name: "B2B Hardware"
    },
    brake_service_and_repair: {
      osm_tags: {
        shop: "car_repair"
      },
      icon: "maki-car-repair",
      pretty_name: "Brake Service and Repair"
    },
    corporate_office: {
      osm_tags: {
        office: "company"
      },
      icon: "maki-suitcase",
      pretty_name: "Corporate Office"
    },
    building_contractor: {
      osm_tags: {
        craft: "builder"
      },
      icon: "temaki-tools",
      pretty_name: "Building Contractor"
    },
    tile_store: {
      osm_tags: {
        shop: "tiles"
      },
      icon: "temaki-tiling",
      pretty_name: "Tile Store"
    },
    horse_equipment_shop: {
      osm_tags: {
        shop: "equestrian"
      },
      icon: "maki-horse-riding",
      pretty_name: "Horse Equipment Shop"
    },
    music_production_services: {
      osm_tags: {
        office: "music_production"
      },
      icon: "fas-compact-disc",
      pretty_name: "Music Production Services"
    },
    fabric_wholesaler: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "fabric"
      },
      icon: "maki-warehouse",
      pretty_name: "Fabric Wholesaler"
    },
    tax_services: {
      osm_tags: {
        office: "tax_advisor"
      },
      icon: "maki-suitcase",
      pretty_name: "Tax Services"
    },
    bedding_and_bath_stores: {
      osm_tags: {
        shop: "bed"
      },
      icon: "maki-lodging",
      pretty_name: "Bedding and Bath Stores"
    },
    commissioned_artist: {
      osm_tags: {
        craft: "artist"
      },
      icon: "maki-art-gallery",
      pretty_name: "Commissioned Artist"
    },
    ev_charging_station: {
      osm_tags: {
        amenity: "charging_station"
      },
      icon: "fas-charging-station",
      pretty_name: "Ev Charging Station"
    },
    hot_tubs_and_pools: {
      osm_tags: {
        shop: "swimming_pool;hot_tub"
      },
      icon: "fas-swimmer",
      pretty_name: "Hot Tubs and Pools"
    },
    paper_mill: {
      osm_tags: {
        industrial: "paper_mill"
      },
      icon: "maki-industry",
      pretty_name: "Paper Mill"
    },
    environmental_testing: {
      osm_tags: {
        amenity: "laboratory",
        laboratory: "environmental_testing"
      },
      icon: "fas-vial",
      pretty_name: "Environmental Testing"
    },
    boat_charter: {
      osm_tags: {
        office: "boat_charter"
      },
      icon: "temaki-boat_rental",
      pretty_name: "Boat Charter"
    },
    cement_supplier: {
      osm_tags: {
        office: "wholesale",
        wholesale: "cement"
      },
      icon: "temaki-tools",
      pretty_name: "Cement Supplier"
    },
    adult_store: {
      osm_tags: {
        shop: "erotic"
      },
      icon: "maki-shop",
      pretty_name: "Adult Store"
    },
    aircraft_parts_and_supplies: {
      osm_tags: {
        shop: "aviation"
      },
      icon: "maki-airport",
      pretty_name: "Aircraft Parts and Supplies"
    },
    vacation_rental_agents: {
      osm_tags: {
        office: "travel_agent"
      },
      icon: "maki-suitcase",
      pretty_name: "Vacation Rental Agents"
    },
    b2b_equipment_maintenance_and_repair: {
      osm_tags: {
        shop: "repair"
      },
      icon: "fas-tools",
      pretty_name: "B2B Equipment Maintenance and Repair"
    },
    e_commerce_service: {
      osm_tags: {
        office: "e_commerce"
      },
      icon: "fas-laptop",
      pretty_name: "E-Commerce Service"
    },
    safety_equipment: {
      osm_tags: {
        shop: "safety_equipment"
      },
      icon: "fas-helmet-safety",
      pretty_name: "Safety Equipment"
    },
    orthotics: {
      osm_tags: {
        shop: "medical_supply",
        product: "orthotics"
      },
      icon: "fas-crutch",
      pretty_name: "Orthotics"
    },
    health_coach: {
      osm_tags: {
        office: "health_coach"
      },
      icon: "maki-pitch",
      pretty_name: "Health Coach"
    },
    grilling_equipment: {
      osm_tags: {
        shop: "bbq_equipment"
      },
      icon: "maki-bbq",
      pretty_name: "Grilling Equipment"
    },
    printing_equipment_and_supply: {
      osm_tags: {
        shop: "copyshop"
      },
      icon: "fas-print",
      pretty_name: "Printing Equipment and Supply"
    },
    car_inspector: {
      osm_tags: {
        shop: "car_repair"
      },
      icon: "maki-car-repair",
      pretty_name: "Car Inspector"
    },
    registry_office: {
      osm_tags: {
        amenity: "register_office"
      },
      icon: "fas-suitcase",
      pretty_name: "Registry Office"
    },
    tattoo: {
      osm_tags: {
        shop: "tattoo"
      },
      icon: "temaki-tattoo_machine",
      pretty_name: "Tattoo"
    },
    adult_education: {
      osm_tags: {
        amenity: "training"
      },
      icon: "maki-school",
      pretty_name: "Adult Education"
    },
    mechanical_engineers: {
      osm_tags: {
        office: "mechanical_engineering"
      },
      icon: "maki-suitcase",
      pretty_name: "Mechanical Engineers"
    },
    web_hosting_service: {
      osm_tags: {
        office: "it"
      },
      icon: "maki-suitcase",
      pretty_name: "Web Hosting Service"
    },
    volunteer_association: {
      osm_tags: {
        amenity: "social_facility",
        social_facility: "outreach"
      },
      icon: "maki-wheelchair",
      pretty_name: "Volunteer Association"
    },
    film_festivals_and_organizations: {
      osm_tags: {
        amenity: "community_centre"
      },
      icon: "maki-town-hall",
      pretty_name: "Film Festivals and Organizations"
    },
    furniture_wholesalers: {
      osm_tags: {
        shop: "furniture"
      },
      icon: "fas-couch",
      pretty_name: "Furniture Wholesalers"
    },
    stucco_services: {
      osm_tags: {
        craft: "plasterer"
      },
      icon: "temaki-brick_trowel",
      pretty_name: "Stucco Services"
    },
    international_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "international"
      },
      icon: "maki-restaurant",
      pretty_name: "International Restaurant"
    },
    cooking_classes: {
      osm_tags: {
        amenity: "trade_school",
        trade: "cooking"
      },
      icon: "maki-restaurant",
      pretty_name: "Cooking Classes"
    },
    office_cleaning: {
      osm_tags: {
        office: "cleaning"
      },
      icon: "maki-suitcase",
      pretty_name: "Office Cleaning"
    },
    pool_and_billiards: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "pool;billiards"
      },
      icon: "maki-marker-stroked",
      pretty_name: "Pool and Billiards"
    },
    window_washing: {
      osm_tags: {
        craft: "window_cleaning"
      },
      icon: "temaki-window",
      pretty_name: "Window Washing"
    },
    herbal_shop: {
      osm_tags: {
        shop: "herbalist"
      },
      icon: "fas-leaf",
      pretty_name: "Herbal Shop"
    },
    addiction_rehabilitation_center: {
      osm_tags: {
        healthcare: "rehabilitation",
        "healthcare:speciality": "addiction"
      },
      icon: "temaki-social_facility",
      pretty_name: "Addiction Rehabilitation Center"
    },
    windshield_installation_and_repair: {
      osm_tags: {
        shop: "car_repair"
      },
      icon: "maki-car-repair",
      pretty_name: "Windshield Installation and Repair"
    },
    transmission_repair: {
      osm_tags: {
        shop: "car_repair",
        car_repair: "transmission"
      },
      icon: "maki-car-repair",
      pretty_name: "Transmission Repair"
    },
    grout_service: {
      osm_tags: {
        craft: "tiler"
      },
      icon: "temaki-brick_trowel",
      pretty_name: "Grout Service"
    },
    state_museum: {
      osm_tags: {
        tourism: "museum"
      },
      icon: "temaki-museum",
      pretty_name: "State Museum"
    },
    wedding_chapel: {
      osm_tags: {
        amenity: "wedding_chapel"
      },
      icon: "maki-place-of-worship",
      pretty_name: "Wedding Chapel"
    },
    urgent_care_clinic: {
      osm_tags: {
        amenity: "clinic",
        healthcare: "clinic",
        emergency: "yes"
      },
      icon: "maki-doctor",
      pretty_name: "Urgent Care Clinic"
    },
    horse_racing_track: {
      osm_tags: {
        leisure: "track",
        sport: "horse_racing"
      },
      icon: "maki-racetrack-horse",
      pretty_name: "Horse Racing Track"
    },
    medical_transportation: {
      osm_tags: {
        office: "transportation",
        transportation: "medical"
      },
      icon: "fas-ambulance",
      pretty_name: "Medical Transportation"
    },
    party_bus_rental: {
      osm_tags: {
        shop: "rental",
        rental: "party_bus"
      },
      icon: "temaki-bus",
      pretty_name: "Party Bus Rental"
    },
    barre_classes: {
      osm_tags: {
        leisure: "fitness_centre",
        "fitness_centre:type": "barre"
      },
      icon: "fas-dumbbell",
      pretty_name: "Barre Classes"
    },
    wine_tasting_room: {
      osm_tags: {
        craft: "winery",
        amenity: "bar"
      },
      icon: "fas-wine-bottle",
      pretty_name: "Wine Tasting Room"
    },
    billing_services: {
      osm_tags: {
        office: "billing_services"
      },
      icon: "maki-suitcase",
      pretty_name: "Billing Services"
    },
    photo_booth_rental: {
      osm_tags: {
        shop: "rental",
        rental: "photo_booth"
      },
      icon: "fas-person-booth",
      pretty_name: "Photo Booth Rental"
    },
    mountain_bike_parks: {
      osm_tags: {
        leisure: "track",
        sport: "mountain_biking"
      },
      icon: "temaki-racetrack_oval",
      pretty_name: "Mountain Bike Parks"
    },
    hematology: {
      osm_tags: {
        healthcare: "laboratory",
        "healthcare:speciality": "hematology"
      },
      icon: "fas-vial",
      pretty_name: "Hematology"
    },
    wildlife_hunting_range: {
      osm_tags: {
        leisure: "nature_reserve",
        hunting: "yes"
      },
      icon: "fas-crosshairs",
      pretty_name: "Wildlife Hunting Range"
    },
    health_retreats: {
      osm_tags: {
        leisure: "spa"
      },
      icon: "fas-spa",
      pretty_name: "Health Retreats"
    },
    bagel_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "bagel"
      },
      icon: "maki-restaurant",
      pretty_name: "Bagel Restaurant"
    },
    bike_tours: {
      osm_tags: {
        office: "guide",
        guide: "bicycle_tours"
      },
      icon: "maki-bicycle",
      pretty_name: "Bike Tours"
    },
    estate_liquidation: {
      osm_tags: {
        office: "estate_liquidation"
      },
      icon: "maki-shop",
      pretty_name: "Estate Liquidation"
    },
    cheesesteak_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "cheesesteak"
      },
      icon: "maki-restaurant",
      pretty_name: "Cheesesteak Restaurant"
    },
    cardiovascular_and_thoracic_surgeon: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "cardiovascular_and_thoracic_surgery"
      },
      icon: "maki-doctor",
      pretty_name: "Cardiovascular and Thoracic Surgeon"
    },
    college_counseling: {
      osm_tags: {
        office: "educational_institution",
        education: "college_counseling"
      },
      icon: "maki-school",
      pretty_name: "College Counseling"
    },
    montessori_school: {
      osm_tags: {
        amenity: "school",
        "school:preschool": "yes",
        "operator:type": "montessori"
      },
      icon: "temaki-school",
      pretty_name: "Montessori School"
    },
    surfing_school: {
      osm_tags: {
        craft: "sports_instructor",
        sport: "surfing"
      },
      icon: "temaki-beach",
      pretty_name: "Surfing School"
    },
    blow_dry_blow_out_service: {
      osm_tags: {
        shop: "beauty",
        beauty: "hairdresser"
      },
      icon: "temaki-beauty_salon",
      pretty_name: "Blow Dry Blow Out Service"
    },
    coffee_roastery: {
      osm_tags: {
        shop: "coffee"
      },
      icon: "temaki-coffee",
      pretty_name: "Coffee Roastery"
    },
    veterans_organization: {
      osm_tags: {
        office: "social_facility",
        "social_facility:for": "veterans"
      },
      icon: "temaki-military",
      pretty_name: "Veterans Organization"
    },
    childrens_hospital: {
      osm_tags: {
        healthcare: "hospital",
        "healthcare:speciality": "paediatrics"
      },
      icon: "maki-hospital",
      pretty_name: "Childrens Hospital"
    },
    acoustical_consultant: {
      osm_tags: {
        office: "acoustical_consultant"
      },
      icon: "temaki-briefcase",
      pretty_name: "Acoustical Consultant"
    },
    party_character: {
      osm_tags: {
        craft: "actor",
        actor: "party_character"
      },
      icon: "maki-theatre",
      pretty_name: "Party Character"
    },
    holding_companies: {
      osm_tags: {
        office: "holding"
      },
      icon: "maki-suitcase",
      pretty_name: "Holding Companies"
    },
    exhaust_and_muffler_repair: {
      osm_tags: {
        shop: "car_repair"
      },
      icon: "maki-car-repair",
      pretty_name: "Exhaust and Muffler Repair"
    },
    cigar_bar: {
      osm_tags: {
        amenity: "bar",
        smoking: "cigar"
      },
      icon: "maki-bar",
      pretty_name: "Cigar Bar"
    },
    foundation_repair: {
      osm_tags: {
        craft: "foundation_repair"
      },
      icon: "fas-tools",
      pretty_name: "Foundation Repair"
    },
    railway_service: {
      osm_tags: {
        office: "railway_service"
      },
      icon: "temaki-train",
      pretty_name: "Railway Service"
    },
    dentistry_schools: {
      osm_tags: {
        amenity: "dentist",
        education: "school"
      },
      icon: "maki-dentist",
      pretty_name: "Dentistry Schools"
    },
    csa_farm: {
      osm_tags: {
        landuse: "farm"
      },
      icon: "maki-farm",
      pretty_name: "Csa Farm"
    },
    pet_cemetery_and_crematorium_services: {
      osm_tags: {
        amenity: "crematorium",
        landuse: "cemetery"
      },
      icon: "maki-cemetery",
      pretty_name: "Pet Cemetery and Crematorium Services"
    },
    pet_waste_removal: {
      osm_tags: {
        amenity: "waste_disposal"
      },
      icon: "fas-dumpster",
      pretty_name: "Pet Waste Removal"
    },
    music_festivals_and_organizations: {
      osm_tags: {
        amenity: "events_venue"
      },
      icon: "fas-users",
      pretty_name: "Music Festivals and Organizations"
    },
    pumpkin_patch: {
      osm_tags: {
        landuse: "orchard"
      },
      icon: "maki-park",
      pretty_name: "Pumpkin Patch"
    },
    fitness_equipment_wholesaler: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "fitness_equipment"
      },
      icon: "fas-dumbbell",
      pretty_name: "Fitness Equipment Wholesaler"
    },
    clock_repair_service: {
      osm_tags: {
        shop: "repair",
        repair: "clock"
      },
      icon: "maki-watch",
      pretty_name: "Clock Repair Service"
    },
    kiteboarding_instruction: {
      osm_tags: {
        craft: "sports_instructor",
        sport: "kiteboarding"
      },
      icon: "temaki-sailboat",
      pretty_name: "Kiteboarding Instruction"
    },
    cardio_classes: {
      osm_tags: {
        leisure: "fitness_centre",
        "fitness_centre:type": "cardio"
      },
      icon: "maki-pitch",
      pretty_name: "Cardio Classes"
    },
    paternity_tests_and_services: {
      osm_tags: {
        healthcare: "laboratory",
        "healthcare:speciality": "paternity_testing"
      },
      icon: "fas-vial",
      pretty_name: "Paternity Tests and Services"
    },
    coach_bus: {
      osm_tags: {
        amenity: "bus_station"
      },
      icon: "temaki-bus",
      pretty_name: "Coach Bus"
    },
    paddleboard_rental: {
      osm_tags: {
        shop: "rental",
        rental: "paddleboard",
        sport: "paddleboarding"
      },
      icon: "temaki-beach",
      pretty_name: "Paddleboard Rental"
    },
    greengrocer: {
      osm_tags: {
        shop: "greengrocer"
      },
      icon: "fas-carrot",
      pretty_name: "Greengrocer"
    },
    architecture: {
      osm_tags: {
        office: "architect"
      },
      icon: "fas-drafting-compass",
      pretty_name: "Architecture"
    },
    temple: {
      osm_tags: {
        amenity: "place_of_worship"
      },
      icon: "maki-place-of-worship",
      pretty_name: "Temple"
    },
    piano_store: {
      osm_tags: {
        shop: "musical_instrument",
        musical_instrument: "piano"
      },
      icon: "fas-music",
      pretty_name: "Piano Store"
    },
    virtual_reality_center: {
      osm_tags: {
        leisure: "amusement_arcade"
      },
      icon: "maki-gaming",
      pretty_name: "Virtual Reality Center"
    },
    fur_clothing: {
      osm_tags: {
        shop: "clothes",
        clothes: "fur"
      },
      icon: "fas-tshirt",
      pretty_name: "Fur Clothing"
    },
    used_bookstore: {
      osm_tags: {
        shop: "books",
        second_hand: "yes"
      },
      icon: "fas-book",
      pretty_name: "Used Bookstore"
    },
    business_banking_service: {
      osm_tags: {
        amenity: "bank"
      },
      icon: "maki-bank",
      pretty_name: "Business Banking Service"
    },
    pen_store: {
      osm_tags: {
        shop: "stationery"
      },
      icon: "fas-paperclip",
      pretty_name: "Pen Store"
    },
    kitchen_incubator: {
      osm_tags: {
        shop: "appliance"
      },
      icon: "temaki-laundry",
      pretty_name: "Kitchen Incubator"
    },
    organ_and_tissue_donor_service: {
      osm_tags: {
        healthcare: "organ_and_tissue_donor_service"
      },
      icon: "maki-doctor",
      pretty_name: "Organ and Tissue Donor Service"
    },
    trail: {
      osm_tags: {
        highway: "path"
      },
      icon: "fas-shoe-prints",
      pretty_name: "Trail"
    },
    bike_sharing: {
      osm_tags: {
        amenity: "bicycle_rental",
        bicycle_rental: "docking_station"
      },
      icon: "temaki-bicycle_rental",
      pretty_name: "Bike Sharing"
    },
    mohel: {
      osm_tags: {
        office: "mohel",
        religion: "jewish"
      },
      icon: "maki-religious-jewish",
      pretty_name: "Mohel"
    },
    ceremonial_clothing: {
      osm_tags: {
        shop: "clothes",
        clothes: "ceremonial"
      },
      icon: "fas-tshirt",
      pretty_name: "Ceremonial Clothing"
    },
    milk_bar: {
      osm_tags: {
        shop: "dairy"
      },
      icon: "fas-cheese",
      pretty_name: "Milk Bar"
    },
    civil_examinations_academy: {
      osm_tags: {
        office: "educational_institution",
        education: "civil_examinations"
      },
      icon: "maki-school",
      pretty_name: "Civil Examinations Academy"
    },
    country_dance_hall: {
      osm_tags: {
        leisure: "dance",
        music_genre: "country"
      },
      icon: "fas-music",
      pretty_name: "Country Dance Hall"
    },
    atelier: {
      osm_tags: {
        tourism: "gallery"
      },
      icon: "maki-art-gallery",
      pretty_name: "Atelier"
    },
    community_gardens: {
      osm_tags: {
        leisure: "garden",
        "garden:type": "community"
      },
      icon: "maki-garden",
      pretty_name: "Community Gardens"
    },
    lime_professionals: {
      osm_tags: {
        office: "lime_professionals"
      },
      icon: "maki-suitcase",
      pretty_name: "Lime Professionals"
    },
    ziplining_center: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "ziplining"
      },
      icon: "maki-pitch",
      pretty_name: "Ziplining Center"
    },
    leather_products_manufacturer: {
      osm_tags: {
        man_made: "works",
        product: "leather"
      },
      icon: "temaki-handbag",
      pretty_name: "Leather Products Manufacturer"
    },
    piadina_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "piadina"
      },
      icon: "maki-restaurant",
      pretty_name: "Piadina Restaurant"
    },
    b2b_farms: {
      osm_tags: {
        landuse: "farm"
      },
      icon: "maki-farm",
      pretty_name: "B2B Farms"
    },
    bocce_ball_court: {
      osm_tags: {
        leisure: "pitch",
        sport: "bocce"
      },
      icon: "maki-pitch",
      pretty_name: "Bocce Ball Court"
    },
    farrier_services: {
      osm_tags: {
        craft: "farrier"
      },
      icon: "maki-horse-riding",
      pretty_name: "Farrier Services"
    },
    rest_stop: {
      osm_tags: {
        highway: "rest_area"
      },
      icon: "maki-highway-rest-area",
      pretty_name: "Rest Stop"
    },
    calligraphy: {
      osm_tags: {
        craft: "calligraphy"
      },
      icon: "maki-shop",
      pretty_name: "Calligraphy"
    },
    motorsport_vehicle_repair: {
      osm_tags: {
        shop: "car_repair",
        "repair:vehicle": "motorsport"
      },
      icon: "maki-car-repair",
      pretty_name: "Motorsport Vehicle Repair"
    },
    public_phones: {
      osm_tags: {
        amenity: "telephone"
      },
      icon: "fas-phone-alt",
      pretty_name: "Public Phones"
    },
    flyboarding_rental: {
      osm_tags: {
        shop: "rental",
        rental: "flyboard",
        sport: "flyboarding"
      },
      icon: "temaki-beach",
      pretty_name: "Flyboarding Rental"
    },
    waldorf_school: {
      osm_tags: {
        amenity: "school",
        "operator:type": "waldorf"
      },
      icon: "temaki-school",
      pretty_name: "Waldorf School"
    },
    shoe_shining_service: {
      osm_tags: {
        shop: "shoe_repair",
        craft: "shoe_shining"
      },
      icon: "temaki-hammer_shoe",
      pretty_name: "Shoe Shining Service"
    },
    boating_places: {
      osm_tags: {
        leisure: "marina"
      },
      icon: "temaki-sailboat",
      pretty_name: "Boating Places"
    },
    wild_game_meats_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "wild_game"
      },
      icon: "maki-restaurant",
      pretty_name: "Wild Game Meats Restaurant"
    },
    holiday_market: {
      osm_tags: {
        amenity: "marketplace",
        seasonal: "christmas"
      },
      icon: "maki-star",
      pretty_name: "Holiday Market"
    },
    oriental_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "oriental"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Oriental Restaurant"
    },
    tent_house_supplier: {
      osm_tags: {
        shop: "outdoor"
      },
      icon: "temaki-compass",
      pretty_name: "Tent House Supplier"
    },
    geologic_formation: {
      osm_tags: {
        natural: "geological_formation"
      },
      icon: "temaki-boulder2",
      pretty_name: "Geologic Formation"
    },
    surf_lifesaving_club: {
      osm_tags: {
        emergency: "lifeguard",
        club: "sport",
        sport: "surfing"
      },
      icon: "temaki-beach",
      pretty_name: "Surf Lifesaving Club"
    },
    russian_grocery_store: {
      osm_tags: {
        shop: "supermarket",
        cuisine: "russian"
      },
      icon: "maki-grocery",
      pretty_name: "Russian Grocery Store"
    },
    money_transfer_services: {
      osm_tags: {
        amenity: "bureau_de_change"
      },
      icon: "temaki-money_hand",
      pretty_name: "Money Transfer Services"
    },
    machine_and_tool_rentals: {
      osm_tags: {
        shop: "rental",
        rental: "machine_and_tool"
      },
      icon: "fas-dolly",
      pretty_name: "Machine and Tool Rentals"
    },
    security_systems: {
      osm_tags: {
        shop: "security"
      },
      icon: "temaki-briefcase_shield",
      pretty_name: "Security Systems"
    },
    furniture_manufacturers: {
      osm_tags: {
        man_made: "works",
        product: "furniture"
      },
      icon: "maki-industry",
      pretty_name: "Furniture Manufacturers"
    },
    oil_refiners: {
      osm_tags: {
        man_made: "refinery",
        refinery: "oil"
      },
      icon: "temaki-oil_well",
      pretty_name: "Oil Refiners"
    },
    florist: {
      osm_tags: {
        shop: "florist"
      },
      icon: "maki-florist",
      pretty_name: "Florist"
    },
    venue_and_event_space: {
      osm_tags: {
        amenity: "events_venue"
      },
      icon: "fas-users",
      pretty_name: "Venue and Event Space"
    },
    cemeteries: {
      osm_tags: {
        landuse: "cemetery"
      },
      icon: "maki-cemetery",
      pretty_name: "Cemeteries"
    },
    adventure_sports_center: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "adventure"
      },
      icon: "maki-pitch",
      pretty_name: "Adventure Sports Center"
    },
    ranch: {
      osm_tags: {
        landuse: "farmland"
      },
      icon: "fas-tractor",
      pretty_name: "Ranch"
    },
    altering_and_remodeling_contractor: {
      osm_tags: {
        craft: "builder"
      },
      icon: "fas-tools",
      pretty_name: "Altering and Remodeling Contractor"
    },
    brewing_supply_store: {
      osm_tags: {
        shop: "brewing_supplies"
      },
      icon: "temaki-storage_fermenter",
      pretty_name: "Brewing Supply Store"
    },
    knife_sharpening: {
      osm_tags: {
        craft: "knife_sharpening"
      },
      icon: "temaki-cleaver",
      pretty_name: "Knife Sharpening"
    },
    textile_mill: {
      osm_tags: {
        man_made: "works",
        product: "textile"
      },
      icon: "maki-industry",
      pretty_name: "Textile Mill"
    },
    customs_broker: {
      osm_tags: {
        office: "customs_broker"
      },
      icon: "maki-suitcase",
      pretty_name: "Customs Broker"
    },
    human_resource_services: {
      osm_tags: {
        office: "human_resources"
      },
      icon: "maki-suitcase",
      pretty_name: "Human Resource Services"
    },
    kitchen_remodeling: {
      osm_tags: {
        shop: "kitchen"
      },
      icon: "temaki-kitchen_sink",
      pretty_name: "Kitchen Remodeling"
    },
    door_sales_service: {
      osm_tags: {
        shop: "doors"
      },
      icon: "fas-door-open",
      pretty_name: "Door Sales Service"
    },
    construction_management: {
      osm_tags: {
        office: "construction_management"
      },
      icon: "maki-suitcase",
      pretty_name: "Construction Management"
    },
    window_supplier: {
      osm_tags: {
        shop: "windows"
      },
      icon: "temaki-window",
      pretty_name: "Window Supplier"
    },
    wholesaler: {
      osm_tags: {
        shop: "wholesale"
      },
      icon: "maki-warehouse",
      pretty_name: "Wholesaler"
    },
    international_business_and_trade_services: {
      osm_tags: {
        office: "international_business_and_trade_services"
      },
      icon: "maki-suitcase",
      pretty_name: "International Business and Trade Services"
    },
    toll_stations: {
      osm_tags: {
        barrier: "toll_booth"
      },
      icon: "maki-roadblock",
      pretty_name: "Toll Stations"
    },
    public_transportation: {
      osm_tags: {
        public_transport: "station"
      },
      icon: "temaki-bus",
      pretty_name: "Public Transportation"
    },
    auto_electrical_repair: {
      osm_tags: {
        shop: "car_repair"
      },
      icon: "maki-car-repair",
      pretty_name: "Auto Electrical Repair"
    },
    agricultural_production: {
      osm_tags: {
        made_made: "works",
        product: "agricultural"
      },
      icon: "fas-tractor",
      pretty_name: "Agricultural Production"
    },
    farming_equipment_store: {
      osm_tags: {
        shop: "agrarian"
      },
      icon: "fas-tractor",
      pretty_name: "Farming Equipment Store"
    },
    business_schools: {
      osm_tags: {
        amenity: "college",
        education: "business"
      },
      icon: "maki-college",
      pretty_name: "Business Schools"
    },
    kitchen_and_bath: {
      osm_tags: {
        shop: "kitchen"
      },
      icon: "temaki-kitchen_sink",
      pretty_name: "Kitchen and Bath"
    },
    international_grocery_store: {
      osm_tags: {
        shop: "supermarket",
        cuisine: "international"
      },
      icon: "maki-grocery",
      pretty_name: "International Grocery Store"
    },
    livestock_dealers: {
      osm_tags: {
        office: "livestock_dealer"
      },
      icon: "maki-slaughterhouse",
      pretty_name: "Livestock Dealers"
    },
    aluminum_supplier: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "aluminum"
      },
      icon: "fas-warehouse",
      pretty_name: "Aluminum Supplier"
    },
    piano_services: {
      osm_tags: {
        shop: "musical_instrument",
        musical_instrument: "piano"
      },
      icon: "fas-music",
      pretty_name: "Piano Services"
    },
    cleaning_services: {
      osm_tags: {
        craft: "cleaning"
      },
      icon: "temaki-vacuum",
      pretty_name: "Cleaning Services"
    },
    laundry_services: {
      osm_tags: {
        shop: "laundry"
      },
      icon: "temaki-laundry",
      pretty_name: "Laundry Services"
    },
    recording_and_rehearsal_studio: {
      osm_tags: {
        amenity: "studio",
        studio: "music"
      },
      icon: "fas-microphone",
      pretty_name: "Recording and Rehearsal Studio"
    },
    video_film_production: {
      osm_tags: {
        office: "video_production"
      },
      icon: "fas-video",
      pretty_name: "Video Film Production"
    },
    publicity_service: {
      osm_tags: {
        office: "publicity"
      },
      icon: "maki-suitcase",
      pretty_name: "Publicity Service"
    },
    b2b_autos_and_vehicles: {
      osm_tags: {
        shop: "car"
      },
      icon: "fas-car",
      pretty_name: "B2B Autos and Vehicles"
    },
    waterproofing: {
      osm_tags: {
        craft: "waterproofing"
      },
      icon: "maki-water",
      pretty_name: "Waterproofing"
    },
    commercial_printer: {
      osm_tags: {
        shop: "copyshop"
      },
      icon: "fas-print",
      pretty_name: "Commercial Printer"
    },
    power_plants_and_power_plant_service: {
      osm_tags: {
        power: "plant"
      },
      icon: "temaki-wind_turbine",
      pretty_name: "Power Plants and Power Plant Service"
    },
    foster_care_services: {
      osm_tags: {
        amenity: "social_facility",
        social_facility: "foster_care"
      },
      icon: "fas-child-reaching",
      pretty_name: "Foster Care Services"
    },
    wallpaper_store: {
      osm_tags: {
        shop: "wallpaper"
      },
      icon: "maki-shop",
      pretty_name: "Wallpaper Store"
    },
    data_recovery: {
      osm_tags: {
        office: "data_recovery"
      },
      icon: "fas-laptop",
      pretty_name: "Data Recovery"
    },
    ceiling_service: {
      osm_tags: {
        craft: "ceiling_service"
      },
      icon: "fas-tools",
      pretty_name: "Ceiling Service"
    },
    furniture_repair: {
      osm_tags: {
        shop: "repair",
        repair: "furniture"
      },
      icon: "fas-couch",
      pretty_name: "Furniture Repair"
    },
    hydraulic_equipment_supplier: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "hydraulic_equipment"
      },
      icon: "fas-warehouse",
      pretty_name: "Hydraulic Equipment Supplier"
    },
    pipe_supplier: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "pipes"
      },
      icon: "temaki-tools",
      pretty_name: "Pipe Supplier"
    },
    video_and_video_game_rentals: {
      osm_tags: {
        shop: "rental",
        rental: "video_games"
      },
      icon: "maki-gaming",
      pretty_name: "Video and Video Game Rentals"
    },
    clothing_rental: {
      osm_tags: {
        shop: "rental",
        rental: "clothing"
      },
      icon: "fas-tshirt",
      pretty_name: "Clothing Rental"
    },
    formal_wear_store: {
      osm_tags: {
        shop: "clothes",
        clothes: "formal_wear"
      },
      icon: "fas-tshirt",
      pretty_name: "Formal Wear Store"
    },
    b2b_forklift_dealers: {
      osm_tags: {
        shop: "forklift"
      },
      icon: "maki-warehouse",
      pretty_name: "B2B Forklift Dealers"
    },
    corporate_entertainment_services: {
      osm_tags: {
        office: "corporate_entertainment"
      },
      icon: "maki-suitcase",
      pretty_name: "Corporate Entertainment Services"
    },
    awning_supplier: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "awning"
      },
      icon: "fas-warehouse",
      pretty_name: "Awning Supplier"
    },
    seafood_market: {
      osm_tags: {
        amenity: "marketplace",
        cuisine: "seafood"
      },
      icon: "temaki-fish_cleaning",
      pretty_name: "Seafood Market"
    },
    private_tutor: {
      osm_tags: {
        office: "private_tutor"
      },
      icon: "maki-school",
      pretty_name: "Private Tutor"
    },
    permanent_makeup: {
      osm_tags: {
        shop: "beauty",
        beauty: "permanent_makeup"
      },
      icon: "temaki-lipstick",
      pretty_name: "Permanent Makeup"
    },
    research_institute: {
      osm_tags: {
        amenity: "research_institute"
      },
      icon: "fas-flask",
      pretty_name: "Research Institute"
    },
    tire_repair_shop: {
      osm_tags: {
        shop: "tyres"
      },
      icon: "temaki-tire",
      pretty_name: "Tire Repair Shop"
    },
    after_school_program: {
      osm_tags: {
        amenity: "childcare"
      },
      icon: "fas-child",
      pretty_name: "After School Program"
    },
    executive_search_consultants: {
      osm_tags: {
        office: "consulting",
        consulting: "executive_search"
      },
      icon: "maki-suitcase",
      pretty_name: "Executive Search Consultants"
    },
    grain_elevators: {
      osm_tags: {
        industrial: "grain_elevator"
      },
      icon: "temaki-silo",
      pretty_name: "Grain Elevators"
    },
    propane_supplier: {
      osm_tags: {
        shop: "fuel",
        "fuel:propane": "yes"
      },
      icon: "temaki-propane_tank",
      pretty_name: "Propane Supplier"
    },
    rental_kiosks: {
      osm_tags: {
        amenity: "vending_machine",
        vending: "movie"
      },
      icon: "fas-store",
      pretty_name: "Rental Kiosks"
    },
    kids_hair_salon: {
      osm_tags: {
        shop: "hairdresser",
        hairdresser: "kids"
      },
      icon: "temaki-beauty_salon",
      pretty_name: "Kids Hair Salon"
    },
    guitar_store: {
      osm_tags: {
        shop: "musical_instrument",
        musical_instrument: "guitar"
      },
      icon: "fas-guitar",
      pretty_name: "Guitar Store"
    },
    crops_production: {
      osm_tags: {
        landuse: "farmland"
      },
      icon: "fas-tractor",
      pretty_name: "Crops Production"
    },
    business_financing: {
      osm_tags: {
        office: "fbusiness_financing"
      },
      icon: "maki-suitcase",
      pretty_name: "Business Financing"
    },
    roadside_assistance: {
      osm_tags: {
        office: "roadside_assistance"
      },
      icon: "temaki-tire",
      pretty_name: "Roadside Assistance"
    },
    insulation_installation: {
      osm_tags: {
        craft: "insulation"
      },
      icon: "temaki-tools",
      pretty_name: "Insulation Installation"
    },
    ceiling_and_roofing_repair_and_service: {
      osm_tags: {
        craft: "roofer"
      },
      icon: "fas-hammer",
      pretty_name: "Ceiling and Roofing Repair and Service"
    },
    recreational_vehicle_parts_and_accessories: {
      osm_tags: {
        shop: "car_parts",
        car_parts: "recreational_vehicle"
      },
      icon: "fas-car-battery",
      pretty_name: "Recreational Vehicle Parts and Accessories"
    },
    water_purification_services: {
      osm_tags: {
        craft: "water_purification"
      },
      icon: "temaki-well_pump_manual",
      pretty_name: "Water Purification Services"
    },
    spray_tanning: {
      osm_tags: {
        shop: "beauty",
        beauty: "tanning"
      },
      icon: "temaki-tanning",
      pretty_name: "Spray Tanning"
    },
    town_car_service: {
      osm_tags: {
        amenity: "taxi",
        taxi: "town_car"
      },
      icon: "fas-taxi",
      pretty_name: "Town Car Service"
    },
    asian_grocery_store: {
      osm_tags: {
        shop: "convenience",
        cuisine: "asian"
      },
      icon: "fas-shopping-basket",
      pretty_name: "Asian Grocery Store"
    },
    surfboard_rental: {
      osm_tags: {
        shop: "sport",
        sport: "surfing",
        "surfing:rental": "yes"
      },
      icon: "temaki-beach",
      pretty_name: "Surfboard Rental"
    },
    sleep_specialist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "sleep_specialist"
      },
      icon: "maki-doctor",
      pretty_name: "Sleep Specialist"
    },
    homeowner_association: {
      osm_tags: {
        office: "association",
        association: "homeowners"
      },
      icon: "maki-suitcase",
      pretty_name: "Homeowner Association"
    },
    car_buyer: {
      osm_tags: {
        shop: "car"
      },
      icon: "maki-car",
      pretty_name: "Car Buyer"
    },
    ultrasound_imaging_center: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "medical_imaging"
      },
      icon: "maki-doctor",
      pretty_name: "Ultrasound Imaging Center"
    },
    officiating_services: {
      osm_tags: {
        office: "officiating_services"
      },
      icon: "maki-suitcase",
      pretty_name: "Officiating Services"
    },
    retaining_wall_supplier: {
      osm_tags: {
        shop: "wholesale",
        wholsale: "retaining_wall"
      },
      icon: "temaki-tools",
      pretty_name: "Retaining Wall Supplier"
    },
    brazilian_jiu_jitsu_club: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "brazilian_jiu_jitsu"
      },
      icon: "maki-pitch",
      pretty_name: "Brazilian Jiu Jitsu Club"
    },
    alcohol_and_drug_treatment_center: {
      osm_tags: {
        healthcare: "addiction"
      },
      icon: "maki-doctor",
      pretty_name: "Alcohol and Drug Treatment Center"
    },
    plastic_injection_molding_workshop: {
      osm_tags: {
        craft: "plastic_injection_molding"
      },
      icon: "maki-industry",
      pretty_name: "Plastic Injection Molding Workshop"
    },
    trucks_and_industrial_vehicles: {
      osm_tags: {
        shop: "truck"
      },
      icon: "temaki-bulldozer",
      pretty_name: "Trucks and Industrial Vehicles"
    },
    audio_visual_production_and_design: {
      osm_tags: {
        office: "audio_video_production"
      },
      icon: "maki-suitcase",
      pretty_name: "Audio Visual Production and Design"
    },
    national_security_services: {
      osm_tags: {
        office: "government",
        government: "national_security"
      },
      icon: "temaki-town_hall",
      pretty_name: "National Security Services"
    },
    mediator: {
      osm_tags: {
        office: "lawyer",
        lawyer: "mediator"
      },
      icon: "fas-balance-scale",
      pretty_name: "Mediator"
    },
    acai_bowls: {
      osm_tags: {
        amenity: "cafe",
        cuisine: "acai_bowls"
      },
      icon: "temaki-hot_drink_cup",
      pretty_name: "Acai Bowls"
    },
    undersea_hyperbaric_medicine: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "undersea_hyperbaric_medicine"
      },
      icon: "maki-doctor",
      pretty_name: "Undersea Hyperbaric Medicine"
    },
    bird_shop: {
      osm_tags: {
        shop: "pet",
        pet: "bird"
      },
      icon: "fas-dove",
      pretty_name: "Bird Shop"
    },
    environmental_abatement_services: {
      osm_tags: {
        office: "environmental_services"
      },
      icon: "maki-suitcase",
      pretty_name: "Environmental Abatement Services"
    },
    henna_artist: {
      osm_tags: {
        shop: "beauty;tattoo",
        beauty: "henna"
      },
      icon: "temaki-beauty_salon",
      pretty_name: "Henna Artist"
    },
    generator_installation_repair: {
      osm_tags: {
        shop: "repair",
        repair: "generator"
      },
      icon: "temaki-power",
      pretty_name: "Generator Installation Repair"
    },
    high_gliding_center: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "hang_gliding"
      },
      icon: "maki-pitch",
      pretty_name: "High Gliding Center"
    },
    mountain_huts: {
      osm_tags: {
        tourism: "alpine_hut"
      },
      icon: "temaki-cabin",
      pretty_name: "Mountain Huts"
    },
    festival: {
      osm_tags: {
        amenity: "festival_grounds"
      },
      icon: "maki-amusement-park",
      pretty_name: "Festival"
    },
    ticket_sales: {
      osm_tags: {
        shop: "ticket"
      },
      icon: "fas-ticket-alt",
      pretty_name: "Ticket Sales"
    },
    walking_tours: {
      osm_tags: {
        office: "guide",
        guide: "walking_tour"
      },
      icon: "temaki-pedestrian",
      pretty_name: "Walking Tours"
    },
    immunodermatologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "immunodermatology"
      },
      icon: "maki-doctor",
      pretty_name: "Immunodermatologist"
    },
    pediatric_nephrology: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "pediatric_nephrology"
      },
      icon: "maki-doctor",
      pretty_name: "Pediatric Nephrology"
    },
    golf_cart_rental: {
      osm_tags: {
        amenity: "golf_cart_rental"
      },
      icon: "maki-golf",
      pretty_name: "Golf Cart Rental"
    },
    boudoir_photography: {
      osm_tags: {
        craft: "photographer",
        shop: "photo_studio",
        "photographer:speciality": "boudoir"
      },
      icon: "fas-camera-retro",
      pretty_name: "Boudoir Photography"
    },
    pediatric_gastroenterology: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "pediatric_gastroenterology"
      },
      icon: "maki-doctor",
      pretty_name: "Pediatric Gastroenterology"
    },
    japanese_grocery_store: {
      osm_tags: {
        shop: "supermarket",
        cuisine: "japanese"
      },
      icon: "maki-grocery",
      pretty_name: "Japanese Grocery Store"
    },
    cryotherapy: {
      osm_tags: {
        healthcare: "cryotherapy"
      },
      icon: "maki-doctor",
      pretty_name: "Cryotherapy"
    },
    low_income_housing: {
      osm_tags: {
        amenity: "social_facility",
        social_facility: "low_income_housing"
      },
      icon: "maki-building",
      pretty_name: "Low Income Housing"
    },
    farm_insurance: {
      osm_tags: {
        office: "insurance",
        insurance: "farm"
      },
      icon: "temaki-briefcase_shield",
      pretty_name: "Farm Insurance"
    },
    jewelry_repair_service: {
      osm_tags: {
        shop: "jewelry",
        "service:repair": "yes"
      },
      icon: "maki-jewelry-store",
      pretty_name: "Jewelry Repair Service"
    },
    watch_repair_service: {
      osm_tags: {
        shop: "watch",
        "service:repair": "yes"
      },
      icon: "maki-watch",
      pretty_name: "Watch Repair Service"
    },
    feng_shui: {
      osm_tags: {
        craft: "feng_shui"
      },
      icon: "maki-spa",
      pretty_name: "Feng Shui"
    },
    public_bath_houses: {
      osm_tags: {
        amenity: "public_bath"
      },
      icon: "maki-hot-spring",
      pretty_name: "Public Bath Houses"
    },
    sailing_club: {
      osm_tags: {
        club: "sailing"
      },
      icon: "temaki-sailboat",
      pretty_name: "Sailing Club"
    },
    erotic_massage: {
      osm_tags: {
        shop: "erotic;massage"
      },
      icon: "temaki-spa",
      pretty_name: "Erotic Massage"
    },
    floral_designer: {
      osm_tags: {
        shop: "florist"
      },
      icon: "maki-florist",
      pretty_name: "Floral Designer"
    },
    coffee_and_tea_supplies: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "coffee_and_tea_supplies"
      },
      icon: "temaki-coffee",
      pretty_name: "Coffee and Tea Supplies"
    },
    parasailing_ride_service: {
      osm_tags: {
        craft: "sports_instructor",
        sport: "parasailing"
      },
      icon: "temaki-sailboat",
      pretty_name: "Parasailing Ride Service"
    },
    lactation_services: {
      osm_tags: {
        healthcare: "lactation_counselor"
      },
      icon: "maki-doctor",
      pretty_name: "Lactation Services"
    },
    state_park: {
      osm_tags: {
        leisure: "park",
        boundary: "protected_area"
      },
      icon: "temaki-tree_and_bench",
      pretty_name: "State Park"
    },
    waffle_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "waffle"
      },
      icon: "maki-restaurant",
      pretty_name: "Waffle Restaurant"
    },
    beer_tours: {
      osm_tags: {
        tourism: "attraction",
        attraction: "brewery"
      },
      icon: "maki-star",
      pretty_name: "Beer Tours"
    },
    diy_auto_shop: {
      osm_tags: {
        shop: "car_repair"
      },
      icon: "maki-car-repair",
      pretty_name: "Diy Auto Shop"
    },
    doula: {
      osm_tags: {
        healthcare: "doula"
      },
      icon: "maki-doctor",
      pretty_name: "Doula"
    },
    table_tennis_club: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "table_tennis"
      },
      icon: "fas-table-tennis",
      pretty_name: "Table Tennis Club"
    },
    paddle_tennis_club: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "paddle_tennis"
      },
      icon: "maki-pitch",
      pretty_name: "Paddle Tennis Club"
    },
    rest_areas: {
      osm_tags: {
        highway: "rest_area"
      },
      icon: "maki-car",
      pretty_name: "Rest Areas"
    },
    transport_interchange: {
      osm_tags: {
        public_transport: "stop_area"
      },
      icon: "temaki-light_rail",
      pretty_name: "Transport Interchange"
    },
    bulk_billing: {
      osm_tags: {
        healthcare: "billing"
      },
      icon: "maki-doctor",
      pretty_name: "Bulk Billing"
    },
    visa_agent: {
      osm_tags: {
        office: "visa"
      },
      icon: "maki-suitcase",
      pretty_name: "Visa Agent"
    },
    department_of_social_service: {
      osm_tags: {
        office: "social_facility"
      },
      icon: "maki-suitcase",
      pretty_name: "Department Of Social Service"
    },
    rice_mill: {
      osm_tags: {
        landuse: "industrial",
        industrial: "rice_mill"
      },
      icon: "maki-industry",
      pretty_name: "Rice Mill"
    },
    weather_forecast_services: {
      osm_tags: {
        office: "weather_forecasting"
      },
      icon: "maki-suitcase",
      pretty_name: "Weather Forecast Services"
    },
    weaving_mill: {
      osm_tags: {
        craft: "weaving_mill"
      },
      icon: "temaki-needle_and_spool",
      pretty_name: "Weaving Mill"
    },
    haute_cuisine_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "haute_cuisine"
      },
      icon: "maki-restaurant",
      pretty_name: "Haute Cuisine Restaurant"
    },
    ski_area: {
      osm_tags: {
        landuse: "winter_sports"
      },
      icon: "fas-skiing",
      pretty_name: "Ski Area"
    },
    army_and_navy_store: {
      osm_tags: {
        shop: "military_surplus"
      },
      icon: "temaki-military",
      pretty_name: "Army and Navy Store"
    },
    gents_tailor: {
      osm_tags: {
        shop: "tailor"
      },
      icon: "temaki-needle_and_spool",
      pretty_name: "Gents Tailor"
    },
    beach_bar: {
      osm_tags: {
        amenity: "bar",
        bar: "beach_bar"
      },
      icon: "fas-umbrella-beach",
      pretty_name: "Beach Bar"
    },
    thread_supplier: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "thread"
      },
      icon: "temaki-needle_and_spool",
      pretty_name: "Thread Supplier"
    },
    medical_cannabis_referral: {
      osm_tags: {
        healthcare: "medical_cannabis_referral"
      },
      icon: "fas-cannabis",
      pretty_name: "Medical Cannabis Referral"
    },
    office_of_vital_records: {
      osm_tags: {
        office: "government",
        government: "register_office"
      },
      icon: "temaki-town_hall",
      pretty_name: "Office Of Vital Records"
    },
    market_stall: {
      osm_tags: {
        shop: "kiosk"
      },
      icon: "fas-store",
      pretty_name: "Market Stall"
    },
    kombucha: {
      osm_tags: {
        shop: "beverages",
        produce: "kombucha"
      },
      icon: "fas-wine-bottle",
      pretty_name: "Kombucha"
    },
    oxygen_bar: {
      osm_tags: {
        amenity: "oxygen_bar"
      },
      icon: "temaki-propane_tank",
      pretty_name: "Oxygen Bar"
    },
    danish_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "danish"
      },
      icon: "maki-restaurant",
      pretty_name: "Danish Restaurant"
    },
    serbo_croation_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "serbo_croatian"
      },
      icon: "maki-restaurant",
      pretty_name: "Serbo Croation Restaurant"
    },
    rotisserie_chicken_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "rotisserie_chicken"
      },
      icon: "fas-drumstick-bite",
      pretty_name: "Rotisserie Chicken Restaurant"
    },
    seal_and_hanko_dealers: {
      osm_tags: {
        shop: "gift",
        product: "seal;hanko"
      },
      icon: "iD-icon-point",
      pretty_name: "Seal and Hanko Dealers"
    },
    sommelier_service: {
      osm_tags: {
        craft: "sommelier"
      },
      icon: "fas-wine-bottle",
      pretty_name: "Sommelier Service"
    },
    water_taxi: {
      osm_tags: {
        amenity: "water_taxi"
      },
      icon: "temaki-boat",
      pretty_name: "Water Taxi"
    },
    courier_and_delivery_services: {
      osm_tags: {
        office: "courier"
      },
      icon: "maki-post",
      pretty_name: "Courier and Delivery Services"
    },
    bus_service: {
      osm_tags: {
        office: "bus_service"
      },
      icon: "temaki-bus",
      pretty_name: "Bus Service"
    },
    telephone_services: {
      osm_tags: {
        office: "telecommunication"
      },
      icon: "maki-telephone",
      pretty_name: "Telephone Services"
    },
    christmas_trees: {
      osm_tags: {
        landuse: "plant_nursery",
        plant: "christmas_trees",
        produce: "christmas_trees"
      },
      icon: "roentgen-needleleaved_tree",
      pretty_name: "Christmas Trees"
    },
    distribution_services: {
      osm_tags: {
        office: "distributor"
      },
      icon: "maki-suitcase",
      pretty_name: "Distribution Services"
    },
    kitchen_supply_store: {
      osm_tags: {
        shop: "kitchen"
      },
      icon: "temaki-kitchen_sink",
      pretty_name: "Kitchen Supply Store"
    },
    travel_agents: {
      osm_tags: {
        shop: "travel_agency"
      },
      icon: "fas-suitcase",
      pretty_name: "Travel Agents"
    },
    public_health_clinic: {
      osm_tags: {
        amenity: "clinic"
      },
      icon: "maki-hospital",
      pretty_name: "Public Health Clinic"
    },
    window_treatment_store: {
      osm_tags: {
        craft: "window_treatment"
      },
      icon: "temaki-window",
      pretty_name: "Window Treatment Store"
    },
    organization: {
      osm_tags: {
        office: "association"
      },
      icon: "maki-suitcase",
      pretty_name: "Organization"
    },
    orthopedic_shoe_store: {
      osm_tags: {
        shop: "shoes",
        shoes: "orthopedic"
      },
      icon: "maki-shoe",
      pretty_name: "Orthopedic Shoe Store"
    },
    perfume_store: {
      osm_tags: {
        shop: "perfumery"
      },
      icon: "temaki-perfume",
      pretty_name: "Perfume Store"
    },
    water_softening_equipment_supplier: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "water_softening_equipment"
      },
      icon: "maki-water",
      pretty_name: "Water Softening Equipment Supplier"
    },
    pie_shop: {
      osm_tags: {
        shop: "pastry",
        cuisine: "pie"
      },
      icon: "maki-bakery",
      pretty_name: "Pie Shop"
    },
    gold_buyer: {
      osm_tags: {
        shop: "gold_buyer"
      },
      icon: "maki-jewelry-store",
      pretty_name: "Gold Buyer"
    },
    b2b_machinery_and_tools: {
      osm_tags: {
        shop: "trade",
        trade: "machinery"
      },
      icon: "temaki-tools",
      pretty_name: "B2B Machinery and Tools"
    },
    aggregate_supplier: {
      osm_tags: {
        shop: "trade",
        trade: "stonemason"
      },
      icon: "temaki-pick_hammer",
      pretty_name: "Aggregate Supplier"
    },
    korean_grocery_store: {
      osm_tags: {
        shop: "supermarket",
        cuisine: "korean"
      },
      icon: "maki-grocery",
      pretty_name: "Korean Grocery Store"
    },
    welding_supply_store: {
      osm_tags: {
        shop: "trade",
        trade: "welding"
      },
      icon: "fas-tools",
      pretty_name: "Welding Supply Store"
    },
    consultant_and_general_service: {
      osm_tags: {
        office: "consulting"
      },
      icon: "maki-suitcase",
      pretty_name: "Consultant and General Service"
    },
    frozen_foods: {
      osm_tags: {
        shop: "frozen_food"
      },
      icon: "far-snowflake",
      pretty_name: "Frozen Foods"
    },
    framing_store: {
      osm_tags: {
        shop: "frame"
      },
      icon: "fas-vector-square",
      pretty_name: "Framing Store"
    },
    lawn_service: {
      osm_tags: {
        craft: "lawn_service"
      },
      icon: "temaki-lawn",
      pretty_name: "Lawn Service"
    },
    alternative_medicine: {
      osm_tags: {
        healthcare: "alternative"
      },
      icon: "fas-spa",
      pretty_name: "Alternative Medicine"
    },
    civil_engineers: {
      osm_tags: {
        office: "civil_engineer"
      },
      icon: "maki-suitcase",
      pretty_name: "Civil Engineers"
    },
    motorsport_vehicle_dealer: {
      osm_tags: {
        shop: "car",
        car: "motorsport"
      },
      icon: "maki-car",
      pretty_name: "Motorsport Vehicle Dealer"
    },
    scrap_metals: {
      osm_tags: {
        industrial: "scrap_yard",
        landuse: "industrial"
      },
      icon: "temaki-junk_car",
      pretty_name: "Scrap Metals"
    },
    check_cashing_payday_loans: {
      osm_tags: {
        shop: "money_lender"
      },
      icon: "temaki-money_hand",
      pretty_name: "Check Cashing Payday Loans"
    },
    rug_store: {
      osm_tags: {
        shop: "carpet"
      },
      icon: "fas-tape",
      pretty_name: "Rug Store"
    },
    health_consultant: {
      osm_tags: {
        office: "healthcare"
      },
      icon: "maki-suitcase",
      pretty_name: "Health Consultant"
    },
    iron_and_steel_store: {
      osm_tags: {
        shop: "metal",
        product: "iron_and_steel"
      },
      icon: "fas-tools",
      pretty_name: "Iron and Steel Store"
    },
    talent_agency: {
      osm_tags: {
        office: "talent_agency"
      },
      icon: "maki-suitcase",
      pretty_name: "Talent Agency"
    },
    infectious_disease_specialist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "infectious_diseases"
      },
      icon: "maki-doctor",
      pretty_name: "Infectious Disease Specialist"
    },
    pathologist: {
      osm_tags: {
        healthcare: "pathologist"
      },
      icon: "maki-doctor",
      pretty_name: "Pathologist"
    },
    craft_shop: {
      osm_tags: {
        shop: "craft"
      },
      icon: "fas-cut",
      pretty_name: "Craft Shop"
    },
    handbag_stores: {
      osm_tags: {
        shop: "bag"
      },
      icon: "fas-suitcase-rolling",
      pretty_name: "Handbag Stores"
    },
    temp_agency: {
      osm_tags: {
        office: "employment_agency"
      },
      icon: "maki-suitcase",
      pretty_name: "Temp Agency"
    },
    airsoft_fields: {
      osm_tags: {
        leisure: "pitch",
        sport: "airsoft"
      },
      icon: "maki-pitch",
      pretty_name: "Airsoft Fields"
    },
    eyelash_service: {
      osm_tags: {
        shop: "beauty",
        beauty: "eyelash"
      },
      icon: "temaki-beauty_salon",
      pretty_name: "Eyelash Service"
    },
    child_psychiatrist: {
      osm_tags: {
        healthcare: "psychiatrist",
        "healthcare:speciality": "child_psychiatry"
      },
      icon: "maki-doctor",
      pretty_name: "Child Psychiatrist"
    },
    bus_ticket_agency: {
      osm_tags: {
        shop: "ticket",
        ticket: "bus"
      },
      icon: "temaki-bus",
      pretty_name: "Bus Ticket Agency"
    },
    yoga_instructor: {
      osm_tags: {
        craft: "sports_instructor",
        sport: "yoga"
      },
      icon: "maki-pitch",
      pretty_name: "Yoga Instructor"
    },
    rehabilitation_center: {
      osm_tags: {
        healthcare: "rehabilitation"
      },
      icon: "maki-doctor",
      pretty_name: "Rehabilitation Center"
    },
    pain_management: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "pain_management"
      },
      icon: "maki-doctor",
      pretty_name: "Pain Management"
    },
    boxing_gym: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "boxing"
      },
      icon: "maki-pitch",
      pretty_name: "Boxing Gym"
    },
    b2b_storage_and_warehouses: {
      osm_tags: {
        shop: "storage_rental"
      },
      icon: "fas-warehouse",
      pretty_name: "B2B Storage and Warehouses"
    },
    b2b_scientific_equipment: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "scientific_equipment"
      },
      icon: "fas-warehouse",
      pretty_name: "B2B Scientific Equipment"
    },
    gay_and_lesbian_services_organization: {
      osm_tags: {
        office: "gay_and_lesbian_services"
      },
      icon: "fas-suitcase",
      pretty_name: "Gay and Lesbian Services Organization"
    },
    irrigation_companies: {
      osm_tags: {
        office: "irrigation"
      },
      icon: "maki-water",
      pretty_name: "Irrigation Companies"
    },
    disability_law: {
      osm_tags: {
        office: "lawyer",
        lawyer: "disability"
      },
      icon: "fas-balance-scale",
      pretty_name: "Disability Law"
    },
    religious_destination: {
      osm_tags: {
        tourism: "attraction",
        amenity: "place_of_worship"
      },
      icon: "maki-star",
      pretty_name: "Religious Destination"
    },
    threads_and_yarns_wholesaler: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "thread;yarn"
      },
      icon: "maki-warehouse",
      pretty_name: "Threads and Yarns Wholesaler"
    },
    engraving: {
      osm_tags: {
        craft: "engraver"
      },
      icon: "maki-cemetery",
      pretty_name: "Engraving"
    },
    general_festivals: {
      osm_tags: {
        amenity: "festival_grounds"
      },
      icon: "maki-amusement-park",
      pretty_name: "General Festivals"
    },
    team_building_activity: {
      osm_tags: {
        office: "team_building"
      },
      icon: "fas-suitcase",
      pretty_name: "Team Building Activity"
    },
    cpr_classes: {
      osm_tags: {
        amenity: "training",
        training: "cpr"
      },
      icon: "maki-hospital",
      pretty_name: "Cpr Classes"
    },
    pediatric_endocrinology: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "pediatric_endocrinology"
      },
      icon: "maki-doctor",
      pretty_name: "Pediatric Endocrinology"
    },
    car_sharing: {
      osm_tags: {
        amenity: "car_sharing"
      },
      icon: "temaki-sign_and_car",
      pretty_name: "Car Sharing"
    },
    herb_and_spice_shop: {
      osm_tags: {
        shop: "herbalist"
      },
      icon: "fas-leaf",
      pretty_name: "Herb and Spice Shop"
    },
    luggage_storage: {
      osm_tags: {
        amenity: "luggage_locker"
      },
      icon: "temaki-suitcase_key",
      pretty_name: "Luggage Storage"
    },
    scooter_rental: {
      osm_tags: {
        amenity: "scooter_rental"
      },
      icon: "fas-motorcycle",
      pretty_name: "Scooter Rental"
    },
    environmental_renewable_natural_resource: {
      osm_tags: {
        office: "renewable_energy_consultant"
      },
      icon: "temaki-wind_turbine",
      pretty_name: "Environmental Renewable Natural Resource"
    },
    oil_and_gas_field_equipment_and_services: {
      osm_tags: {
        shop: "trade",
        trade: "oil_and_gas_equipment"
      },
      icon: "temaki-oil_well",
      pretty_name: "Oil and Gas Field Equipment and Services"
    },
    rock_climbing_gym: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "climbing"
      },
      icon: "temaki-abseiling",
      pretty_name: "Rock Climbing Gym"
    },
    vehicle_wrap: {
      osm_tags: {
        shop: "car",
        "service:vehicle:wrapping": "yes"
      },
      icon: "fas-car",
      pretty_name: "Vehicle Wrap"
    },
    transcription_services: {
      osm_tags: {
        office: "transcription_services"
      },
      icon: "maki-suitcase",
      pretty_name: "Transcription Services"
    },
    reiki: {
      osm_tags: {
        healthcare: "reiki"
      },
      icon: "maki-doctor",
      pretty_name: "Reiki"
    },
    diamond_dealer: {
      osm_tags: {
        shop: "jewelry"
      },
      icon: "maki-jewelry-store",
      pretty_name: "Diamond Dealer"
    },
    olive_oil: {
      osm_tags: {
        shop: "deli"
      },
      icon: "temaki-meat",
      pretty_name: "Olive Oil"
    },
    public_adjuster: {
      osm_tags: {
        office: "insurance"
      },
      icon: "temaki-briefcase_shield",
      pretty_name: "Public Adjuster"
    },
    beach_equipment_rentals: {
      osm_tags: {
        shop: "rental",
        rental: "beach_equipment"
      },
      icon: "fas-dolly",
      pretty_name: "Beach Equipment Rentals"
    },
    fraternal_organization: {
      osm_tags: {
        amenity: "social_facility"
      },
      icon: "maki-wheelchair",
      pretty_name: "Fraternal Organization"
    },
    editorial_services: {
      osm_tags: {
        office: "editorial"
      },
      icon: "maki-suitcase",
      pretty_name: "Editorial Services"
    },
    forestry_service: {
      osm_tags: {
        amenity: "forestry_service"
      },
      icon: "roentgen-needleleaved_tree",
      pretty_name: "Forestry Service"
    },
    debt_relief_services: {
      osm_tags: {
        office: "financial_advisor"
      },
      icon: "maki-suitcase",
      pretty_name: "Debt Relief Services"
    },
    medical_sciences_schools: {
      osm_tags: {
        amenity: "school",
        school: "medical_sciences"
      },
      icon: "temaki-school",
      pretty_name: "Medical Sciences Schools"
    },
    vascular_medicine: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "vascular_medicine"
      },
      icon: "maki-doctor",
      pretty_name: "Vascular Medicine"
    },
    hybrid_car_repair: {
      osm_tags: {
        shop: "car_repair",
        car_repair: "hybrid"
      },
      icon: "maki-car-repair",
      pretty_name: "Hybrid Car Repair"
    },
    boat_builder: {
      osm_tags: {
        craft: "boatbuilder"
      },
      icon: "temaki-boat_repair",
      pretty_name: "Boat Builder"
    },
    science_schools: {
      osm_tags: {
        amenity: "school",
        "school:education_type": "science"
      },
      icon: "temaki-school",
      pretty_name: "Science Schools"
    },
    food_court: {
      osm_tags: {
        amenity: "food_court"
      },
      icon: "maki-restaurant",
      pretty_name: "Food Court"
    },
    muay_thai_club: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "muay_thai"
      },
      icon: "maki-pitch",
      pretty_name: "Muay Thai Club"
    },
    do_it_yourself_store: {
      osm_tags: {
        shop: "doityourself"
      },
      icon: "temaki-tools",
      pretty_name: "Do It Yourself Store"
    },
    aquarium_services: {
      osm_tags: {
        office: "aquarium_services"
      },
      icon: "maki-aquarium",
      pretty_name: "Aquarium Services"
    },
    colonics: {
      osm_tags: {
        healthcare: "colon_hydrotherapy"
      },
      icon: "maki-doctor",
      pretty_name: "Colonics"
    },
    clown: {
      osm_tags: {
        craft: "actor",
        actor: "clown"
      },
      icon: "maki-theatre",
      pretty_name: "Clown"
    },
    float_spa: {
      osm_tags: {
        leisure: "spa",
        "spa:speciality": "float"
      },
      icon: "fas-swimming-pool",
      pretty_name: "Float Spa"
    },
    vocal_coach: {
      osm_tags: {
        office: "educational_institution"
      },
      icon: "maki-school",
      pretty_name: "Vocal Coach"
    },
    preventive_medicine: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "preventive_medicine"
      },
      icon: "maki-doctor",
      pretty_name: "Preventive Medicine"
    },
    pediatric_neurology: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "pediatric_neurology"
      },
      icon: "maki-doctor",
      pretty_name: "Pediatric Neurology"
    },
    tools_wholesaler: {
      osm_tags: {
        shop: "wholesale"
      },
      icon: "maki-warehouse",
      pretty_name: "Tools Wholesaler"
    },
    hearing_aid_provider: {
      osm_tags: {
        shop: "hearing_aids"
      },
      icon: "temaki-hearing_aid",
      pretty_name: "Hearing Aid Provider"
    },
    halotherapy: {
      osm_tags: {
        healthcare: "alternative_medicine"
      },
      icon: "maki-doctor",
      pretty_name: "Halotherapy"
    },
    spring_supplier: {
      osm_tags: {
        shop: "trade",
        product: "springs"
      },
      icon: "temaki-tools",
      pretty_name: "Spring Supplier"
    },
    sauna: {
      osm_tags: {
        leisure: "sauna"
      },
      icon: "fas-thermometer-three-quarters",
      pretty_name: "Sauna"
    },
    self_catering_accommodation: {
      osm_tags: {
        tourism: "apartment"
      },
      icon: "maki-lodging",
      pretty_name: "Self Catering Accommodation"
    },
    imported_food: {
      osm_tags: {
        shop: "food"
      },
      icon: "temaki-meat",
      pretty_name: "Imported Food"
    },
    b2b_dairies: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "dairy"
      },
      icon: "fas-cheese",
      pretty_name: "B2B Dairies"
    },
    lingerie_wholesaler: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "lingerie"
      },
      icon: "temaki-bikini",
      pretty_name: "Lingerie Wholesaler"
    },
    art_tours: {
      osm_tags: {
        office: "guide",
        guide: "art_tours"
      },
      icon: "maki-art-gallery",
      pretty_name: "Art Tours"
    },
    fmcg_wholesaler: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "fast_moving_consumer_goods"
      },
      icon: "maki-warehouse",
      pretty_name: "FMCG Wholesaler"
    },
    childbirth_education: {
      osm_tags: {
        office: "educational_institution",
        education: "childbirth_education"
      },
      icon: "fas-child-reaching",
      pretty_name: "Childbirth Education"
    },
    outdoor_movies: {
      osm_tags: {
        amenity: "cinema",
        "cinema:open_air": "yes"
      },
      icon: "maki-cinema",
      pretty_name: "Outdoor Movies"
    },
    tower: {
      osm_tags: {
        man_made: "tower"
      },
      icon: "fas-vihara",
      pretty_name: "Tower"
    },
    typing_services: {
      osm_tags: {
        office: "typing_services"
      },
      icon: "fas-print",
      pretty_name: "Typing Services"
    },
    dental_hygienist: {
      osm_tags: {
        healthcare: "dental_hygienist"
      },
      icon: "maki-dentist",
      pretty_name: "Dental Hygienist"
    },
    bookmakers: {
      osm_tags: {
        shop: "bookmaker"
      },
      icon: "maki-library",
      pretty_name: "Bookmakers"
    },
    foot_care: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "podiatry"
      },
      icon: "maki-hospital",
      pretty_name: "Foot Care"
    },
    pediatric_infectious_disease: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "pediatric_infectious_disease"
      },
      icon: "maki-doctor",
      pretty_name: "Pediatric Infectious Disease"
    },
    military_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "military"
      },
      icon: "temaki-military",
      pretty_name: "Military Museum"
    },
    pension: {
      osm_tags: {
        tourism: "guest_house"
      },
      icon: "maki-lodging",
      pretty_name: "Pension"
    },
    water_store: {
      osm_tags: {
        shop: "water"
      },
      icon: "temaki-water_bottle",
      pretty_name: "Water Store"
    },
    lookout: {
      osm_tags: {
        tourism: "viewpoint"
      },
      icon: "temaki-spotting_scope",
      pretty_name: "Lookout"
    },
    kofta_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "kofta"
      },
      icon: "maki-restaurant",
      pretty_name: "Kofta Restaurant"
    },
    spices_wholesaler: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "spices"
      },
      icon: "maki-warehouse",
      pretty_name: "Spices Wholesaler"
    },
    rice_shop: {
      osm_tags: {
        shop: "rice"
      },
      icon: "fas-shopping-basket",
      pretty_name: "Rice Shop"
    },
    ironworkers: {
      osm_tags: {
        craft: "ironworker"
      },
      icon: "temaki-tools",
      pretty_name: "Ironworkers"
    },
    spine_surgeon: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "spinal_surgery"
      },
      icon: "maki-doctor",
      pretty_name: "Spine Surgeon"
    },
    misting_system_services: {
      osm_tags: {
        office: "irrigation"
      },
      icon: "maki-water",
      pretty_name: "Misting System Services"
    },
    nudist_clubs: {
      osm_tags: {
        club: "nudism"
      },
      icon: "maki-pitch",
      pretty_name: "Nudist Clubs"
    },
    mystic: {
      osm_tags: {
        shop: "psychic",
        psychic: "mystic"
      },
      icon: "temaki-psychic",
      pretty_name: "Mystic"
    },
    wok_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "wok"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Wok Restaurant"
    },
    agriturismo: {
      osm_tags: {
        tourism: "guest_house",
        guest_house: "agriturismo"
      },
      icon: "maki-lodging",
      pretty_name: "Agriturismo"
    },
    potato_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "potato"
      },
      icon: "maki-restaurant",
      pretty_name: "Potato Restaurant"
    },
    suicide_prevention_services: {
      osm_tags: {
        healthcare: "counselling",
        "healthcare:speciality": "suicide_prevention"
      },
      icon: "fas-comments",
      pretty_name: "Suicide Prevention Services"
    },
    snorkeling_equipment_rental: {
      osm_tags: {
        shop: "sports"
      },
      icon: "fas-futbol",
      pretty_name: "Snorkeling Equipment Rental"
    },
    bubble_soccer_field: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "bubble_soccer"
      },
      icon: "maki-pitch",
      pretty_name: "Bubble Soccer Field"
    },
    auto_parts_and_supply_store: {
      osm_tags: {
        shop: "car_parts"
      },
      icon: "fas-car-battery",
      pretty_name: "Auto Parts and Supply Store"
    },
    b2b_cleaning_and_waste_management: {
      osm_tags: {
        office: "cleaning"
      },
      icon: "maki-suitcase",
      pretty_name: "B2B Cleaning and Waste Management"
    },
    security_services: {
      osm_tags: {
        office: "security"
      },
      icon: "temaki-briefcase_shield",
      pretty_name: "Security Services"
    },
    paint_store: {
      osm_tags: {
        shop: "paint"
      },
      icon: "fas-paint-roller",
      pretty_name: "Paint Store"
    },
    beer_wine_and_spirits: {
      osm_tags: {
        shop: "alcohol"
      },
      icon: "fas-wine-bottle",
      pretty_name: "Beer Wine and Spirits"
    },
    truck_dealer_for_businesses: {
      osm_tags: {
        shop: "truck"
      },
      icon: "fas-car",
      pretty_name: "Truck Dealer For Businesses"
    },
    blacksmiths: {
      osm_tags: {
        craft: "blacksmith"
      },
      icon: "temaki-anvil_and_hammer",
      pretty_name: "Blacksmiths"
    },
    engine_repair_service: {
      osm_tags: {
        shop: "car_repair"
      },
      icon: "maki-car-repair",
      pretty_name: "Engine Repair Service"
    },
    business_office_supplies_and_stationery: {
      osm_tags: {
        shop: "stationery"
      },
      icon: "fas-paperclip",
      pretty_name: "Business Office Supplies and Stationery"
    },
    assisted_living_facility: {
      osm_tags: {
        amenity: "social_facility",
        social_facility: "assisted_living"
      },
      icon: "maki-home",
      pretty_name: "Assisted Living Facility"
    },
    apartments: {
      osm_tags: {
        building: "apartments"
      },
      icon: "maki-building",
      pretty_name: "Apartments"
    },
    midwife: {
      osm_tags: {
        healthcare: "midwife"
      },
      icon: "fas-baby",
      pretty_name: "Midwife"
    },
    siding: {
      osm_tags: {
        craft: "siding_installer"
      },
      icon: "temaki-tools",
      pretty_name: "Siding"
    },
    pizza_delivery_service: {
      osm_tags: {
        amenity: "fast_food",
        cuisine: "pizza"
      },
      icon: "maki-restaurant-pizza",
      pretty_name: "Pizza Delivery Service"
    },
    auto_security: {
      osm_tags: {
        shop: "car;security"
      },
      icon: "fas-car",
      pretty_name: "Auto Security"
    },
    b2b_rubber_and_plastics: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "rubber_and_plastics"
      },
      icon: "fas-warehouse",
      pretty_name: "B2B Rubber and Plastics"
    },
    masonry_contractors: {
      osm_tags: {
        craft: "stonemason"
      },
      icon: "temaki-brick_trowel",
      pretty_name: "Masonry Contractors"
    },
    grain_production: {
      osm_tags: {
        landuse: "farmland"
      },
      icon: "fas-tractor",
      pretty_name: "Grain Production"
    },
    electronics_repair_shop: {
      osm_tags: {
        craft: "electronics_repair"
      },
      icon: "fas-plug",
      pretty_name: "Electronics Repair Shop"
    },
    musician: {
      osm_tags: {
        office: "musician"
      },
      icon: "maki-suitcase",
      pretty_name: "Musician"
    },
    laboratory: {
      osm_tags: {
        amenity: "laboratory"
      },
      icon: "fas-vial",
      pretty_name: "Laboratory"
    },
    cremation_services: {
      osm_tags: {
        amenity: "crematorium"
      },
      icon: "maki-cemetery",
      pretty_name: "Cremation Services"
    },
    outdoor_furniture_store: {
      osm_tags: {
        shop: "outdoor",
        product: "furniture"
      },
      icon: "temaki-compass",
      pretty_name: "Outdoor Furniture Store"
    },
    auto_upholstery: {
      osm_tags: {
        shop: "car_parts",
        "service:vehicle:upholstery": "yes"
      },
      icon: "fas-car",
      pretty_name: "Auto Upholstery"
    },
    traditional_clothing: {
      osm_tags: {
        shop: "clothes"
      },
      icon: "fas-tshirt",
      pretty_name: "Traditional Clothing"
    },
    oil_and_gas: {
      osm_tags: {
        power: "generator",
        "generator:source": "gas"
      },
      icon: "fas-solar-panel",
      pretty_name: "Oil and Gas"
    },
    ice_cream_and_frozen_yoghurt: {
      osm_tags: {
        amenity: "ice_cream"
      },
      icon: "fas-ice-cream",
      pretty_name: "Ice Cream and Frozen Yoghurt"
    },
    plus_size_clothing: {
      osm_tags: {
        shop: "clothes",
        clothes: "plus_size"
      },
      icon: "fas-tshirt",
      pretty_name: "Plus Size Clothing"
    },
    pasta_shop: {
      osm_tags: {
        shop: "pasta"
      },
      icon: "fas-shopping-basket",
      pretty_name: "Pasta Shop"
    },
    junk_removal_and_hauling: {
      osm_tags: {
        amenity: "waste_disposal"
      },
      icon: "fas-dumpster",
      pretty_name: "Junk Removal and Hauling"
    },
    motorcycle_gear: {
      osm_tags: {
        shop: "motorcycle"
      },
      icon: "fas-motorcycle",
      pretty_name: "Motorcycle Gear"
    },
    drinking_water_dispenser: {
      osm_tags: {
        amenity: "drinking_water"
      },
      icon: "maki-drinking-water",
      pretty_name: "Drinking Water Dispenser"
    },
    mobile_phone_accessories: {
      osm_tags: {
        shop: "mobile_phone"
      },
      icon: "fas-mobile-alt",
      pretty_name: "Mobile Phone Accessories"
    },
    flooring_store: {
      osm_tags: {
        shop: "flooring"
      },
      icon: "temaki-tools",
      pretty_name: "Flooring Store"
    },
    sports_school: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "school"
      },
      icon: "maki-pitch",
      pretty_name: "Sports School"
    },
    business_law: {
      osm_tags: {
        office: "lawyer",
        lawyer: "business"
      },
      icon: "fas-balance-scale",
      pretty_name: "Business Law"
    },
    soccer_club: {
      osm_tags: {
        leisure: "sports_club",
        sport: "soccer"
      },
      icon: "maki-soccer",
      pretty_name: "Soccer Club"
    },
    exporters: {
      osm_tags: {
        office: "export"
      },
      icon: "maki-suitcase",
      pretty_name: "Exporters"
    },
    car_stereo_installation: {
      osm_tags: {
        shop: "car_parts"
      },
      icon: "fas-car-battery",
      pretty_name: "Car Stereo Installation"
    },
    demolition_service: {
      osm_tags: {
        office: "demolition"
      },
      icon: "maki-suitcase",
      pretty_name: "Demolition Service"
    },
    energy_management_and_conservation_consultants: {
      osm_tags: {
        office: "energy_consultant"
      },
      icon: "maki-suitcase",
      pretty_name: "Energy Management and Conservation Consultants"
    },
    chinese_martial_arts_club: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "martial_arts"
      },
      icon: "maki-pitch",
      pretty_name: "Chinese Martial Arts Club"
    },
    translation_services: {
      osm_tags: {
        office: "translator"
      },
      icon: "maki-suitcase",
      pretty_name: "Translation Services"
    },
    radio_and_television_commercials: {
      osm_tags: {
        office: "advertising_agency"
      },
      icon: "maki-suitcase",
      pretty_name: "Radio and Television Commercials"
    },
    stone_and_masonry: {
      osm_tags: {
        craft: "stonemason"
      },
      icon: "temaki-brick_trowel",
      pretty_name: "Stone and Masonry"
    },
    blueprinters: {
      osm_tags: {
        office: "architect"
      },
      icon: "maki-building",
      pretty_name: "Blueprinters"
    },
    mobility_equipment_services: {
      osm_tags: {
        shop: "medical_supply",
        product: "mobility_equipment"
      },
      icon: "fas-crutch",
      pretty_name: "Mobility Equipment Services"
    },
    shades_and_blinds: {
      osm_tags: {
        shop: "window_blind"
      },
      icon: "temaki-window",
      pretty_name: "Shades and Blinds"
    },
    sports_medicine: {
      osm_tags: {
        healthcare: "sports_medicine"
      },
      icon: "maki-doctor",
      pretty_name: "Sports Medicine"
    },
    business_signage: {
      osm_tags: {
        craft: "signmaker"
      },
      icon: "temaki-billboard",
      pretty_name: "Business Signage"
    },
    hydraulic_repair_service: {
      osm_tags: {
        shop: "repair",
        repair: "hydraulic"
      },
      icon: "fas-tools",
      pretty_name: "Hydraulic Repair Service"
    },
    shoe_factory: {
      osm_tags: {
        man_made: "works",
        product: "shoes"
      },
      icon: "maki-industry",
      pretty_name: "Shoe Factory"
    },
    meat_shop: {
      osm_tags: {
        shop: "butcher"
      },
      icon: "temaki-cleaver",
      pretty_name: "Meat Shop"
    },
    airline_ticket_agency: {
      osm_tags: {
        office: "travel_agent"
      },
      icon: "maki-airport",
      pretty_name: "Airline Ticket Agency"
    },
    visitor_center: {
      osm_tags: {
        tourism: "information",
        information: "office"
      },
      icon: "maki-embassy",
      pretty_name: "Visitor Center"
    },
    school_district_offices: {
      osm_tags: {
        office: "educational_institution"
      },
      icon: "maki-school",
      pretty_name: "School District Offices"
    },
    b2b_energy_mining: {
      osm_tags: {
        office: "energy_supplier"
      },
      icon: "temaki-briefcase_bolt",
      pretty_name: "B2B Energy Mining"
    },
    greenhouses: {
      osm_tags: {
        landuse: "greenhouse_horticulture"
      },
      icon: "maki-garden",
      pretty_name: "Greenhouses"
    },
    food_safety_training: {
      osm_tags: {
        amenity: "training",
        training: "food_safety"
      },
      icon: "maki-school",
      pretty_name: "Food Safety Training"
    },
    country_club: {
      osm_tags: {
        social: "club",
        leisure: "golf_course"
      },
      icon: "maki-golf",
      pretty_name: "Country Club"
    },
    physician_assistant: {
      osm_tags: {
        healthcare: "physician_assistant"
      },
      icon: "maki-doctor",
      pretty_name: "Physician Assistant"
    },
    car_auction: {
      osm_tags: {
        shop: "auction_house",
        auction_house: "car"
      },
      icon: "fas-car",
      pretty_name: "Car Auction"
    },
    pan_asian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "pan_asian"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Pan Asian Restaurant"
    },
    street_vendor: {
      osm_tags: {
        shop: "street_vendor"
      },
      icon: "fas-store",
      pretty_name: "Street Vendor"
    },
    chicken_wings_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "chicken"
      },
      icon: "fas-drumstick-bite",
      pretty_name: "Chicken Wings Restaurant"
    },
    "3d_printing_service": {
      osm_tags: {
        shop: "3d_printing"
      },
      icon: "fas-cube",
      pretty_name: "3D Printing Service"
    },
    supernatural_reading: {
      osm_tags: {
        shop: "psychic"
      },
      icon: "temaki-psychic",
      pretty_name: "Supernatural Reading"
    },
    pool_hall: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "pool"
      },
      icon: "maki-marker-stroked",
      pretty_name: "Pool Hall"
    },
    emergency_medicine: {
      osm_tags: {
        amenity: "doctors",
        healthcare: "doctor",
        emergency: "yes"
      },
      icon: "maki-doctor",
      pretty_name: "Emergency Medicine"
    },
    chambers_of_commerce: {
      osm_tags: {
        office: "chamber_of_commerce"
      },
      icon: "maki-suitcase",
      pretty_name: "Chambers Of Commerce"
    },
    inspection_services: {
      osm_tags: {
        office: "inspection_services"
      },
      icon: "maki-suitcase",
      pretty_name: "Inspection Services"
    },
    dietitian: {
      osm_tags: {
        healthcare: "dietician"
      },
      icon: "maki-doctor",
      pretty_name: "Dietitian"
    },
    real_estate_photography: {
      osm_tags: {
        craft: "photographer",
        "photographer:speciality": "real_estate"
      },
      icon: "maki-suitcase",
      pretty_name: "Real Estate Photography"
    },
    wildlife_control: {
      osm_tags: {
        office: "wildlife_control"
      },
      icon: "maki-suitcase",
      pretty_name: "Wildlife Control"
    },
    ferry_service: {
      osm_tags: {
        amenity: "ferry_terminal"
      },
      icon: "temaki-ferry",
      pretty_name: "Ferry Service"
    },
    strip_club: {
      osm_tags: {
        amenity: "stripclub"
      },
      icon: "roentgen-pole_dancer",
      pretty_name: "Strip Club"
    },
    bounce_house_rental: {
      osm_tags: {
        shop: "rental",
        rental: "bounce_house"
      },
      icon: "fas-crown",
      pretty_name: "Bounce House Rental"
    },
    tattoo_removal: {
      osm_tags: {
        shop: "beauty;tattoo",
        beauty: "tattoo_removal"
      },
      icon: "temaki-tattoo_machine",
      pretty_name: "Tattoo Removal"
    },
    behavior_analyst: {
      osm_tags: {
        office: "therapist",
        therapist: "behavioral"
      },
      icon: "maki-suitcase",
      pretty_name: "Behavior Analyst"
    },
    air_duct_cleaning_service: {
      osm_tags: {
        craft: "cleaning",
        cleaning: "air_duct"
      },
      icon: "fas-tools",
      pretty_name: "Air Duct Cleaning Service"
    },
    qi_gong_studio: {
      osm_tags: {
        leisure: "fitness_centre",
        "fitness_centre:type": "qi_gong"
      },
      icon: "maki-pitch",
      pretty_name: "Qi Gong Studio"
    },
    photography_classes: {
      osm_tags: {
        amenity: "training",
        training: "photography"
      },
      icon: "fas-camera-retro",
      pretty_name: "Photography Classes"
    },
    geriatric_psychiatry: {
      osm_tags: {
        healthcare: "psychiatrist",
        "healthcare:speciality": "geriatric_psychiatry"
      },
      icon: "maki-doctor",
      pretty_name: "Geriatric Psychiatry"
    },
    skating_rink: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "skating"
      },
      icon: "maki-pitch",
      pretty_name: "Skating Rink"
    },
    metal_materials_and_experts: {
      osm_tags: {
        shop: "metal"
      },
      icon: "fas-tools",
      pretty_name: "Metal Materials and Experts"
    },
    face_painting: {
      osm_tags: {
        shop: "beauty",
        beauty: "face_painting"
      },
      icon: "temaki-beauty_salon",
      pretty_name: "Face Painting"
    },
    food_and_beverage_consultant: {
      osm_tags: {
        office: "food_and_beverage_consultant"
      },
      icon: "maki-suitcase",
      pretty_name: "Food and Beverage Consultant"
    },
    self_defense_classes: {
      osm_tags: {
        craft: "sports_instructor",
        sport: "self_defense"
      },
      icon: "maki-pitch",
      pretty_name: "Self Defense Classes"
    },
    sport_equipment_rentals: {
      osm_tags: {
        shop: "rental",
        rental: "sports_equipment"
      },
      icon: "fas-futbol",
      pretty_name: "Sport Equipment Rentals"
    },
    indoor_landscaping: {
      osm_tags: {
        shop: "garden_centre"
      },
      icon: "maki-garden-centre",
      pretty_name: "Indoor Landscaping"
    },
    aerial_tours: {
      osm_tags: {
        office: "guide",
        guide: "aerial_tours"
      },
      icon: "temaki-airport",
      pretty_name: "Aerial Tours"
    },
    wind_energy: {
      osm_tags: {
        power: "generator",
        "generator:source": "wind"
      },
      icon: "fas-solar-panel",
      pretty_name: "Wind Energy"
    },
    unemployment_office: {
      osm_tags: {
        office: "government",
        government: "unemployment"
      },
      icon: "maki-suitcase",
      pretty_name: "Unemployment Office"
    },
    esthetician: {
      osm_tags: {
        shop: "beauty"
      },
      icon: "temaki-beauty_salon",
      pretty_name: "Esthetician"
    },
    pediatric_radiology: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "paediatric_radiology"
      },
      icon: "maki-doctor",
      pretty_name: "Pediatric doctor"
    },
    tubing_provider: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "tubing"
      },
      icon: "fas-warehouse",
      pretty_name: "Tubing Provider"
    },
    shaved_snow_shop: {
      osm_tags: {
        shop: "shaved_ice"
      },
      icon: "fas-ice-cream",
      pretty_name: "Shaved Snow Shop"
    },
    box_lunch_supplier: {
      osm_tags: {
        shop: "caterer"
      },
      icon: "temaki-catering",
      pretty_name: "Box Lunch Supplier"
    },
    street_art: {
      osm_tags: {
        tourism: "artwork",
        artwork_type: "street_art"
      },
      icon: "temaki-statue",
      pretty_name: "Street Art"
    },
    musical_band_orchestras_and_symphonies: {
      osm_tags: {
        amenity: "theatre",
        "theatre:type": "concert_hall"
      },
      icon: "fas-music",
      pretty_name: "Musical Band Orchestras and Symphonies"
    },
    dui_school: {
      osm_tags: {
        amenity: "driving_school"
      },
      icon: "maki-car",
      pretty_name: "DUI School"
    },
    traditional_chinese_medicine: {
      osm_tags: {
        healthcare: "alternative",
        "healthcare:speciality": "traditional_chinese_medicine"
      },
      icon: "maki-spa",
      pretty_name: "Traditional Chinese Medicine"
    },
    tea_wholesaler: {
      osm_tags: {
        shop: "tea"
      },
      icon: "maki-teahouse",
      pretty_name: "Tea Wholesaler"
    },
    instrumentation_engineers: {
      osm_tags: {
        office: "einstrumentation_engineering"
      },
      icon: "maki-suitcase",
      pretty_name: "Instrumentation Engineers"
    },
    props: {
      osm_tags: {
        shop: "party"
      },
      icon: "temaki-balloon",
      pretty_name: "Props"
    },
    football_club: {
      osm_tags: {
        club: "sport",
        sport: "football"
      },
      icon: "maki-soccer",
      pretty_name: "Football Club"
    },
    aerial_fitness_center: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "aerial_fitness"
      },
      icon: "maki-pitch",
      pretty_name: "Aerial Fitness Center"
    },
    trampoline_park: {
      osm_tags: {
        leisure: "trampoline_park"
      },
      icon: "fas-chevron-circle-up",
      pretty_name: "Trampoline Park"
    },
    sperm_clinic: {
      osm_tags: {
        healthcare: "sperm_bank"
      },
      icon: "maki-doctor",
      pretty_name: "Sperm Clinic"
    },
    psychoanalyst: {
      osm_tags: {
        healthcare: "psychotherapist"
      },
      icon: "maki-hospital",
      pretty_name: "Psychoanalyst"
    },
    wine_tasting_classes: {
      osm_tags: {
        office: "guide",
        guide: "wine_tasting"
      },
      icon: "fas-wine-bottle",
      pretty_name: "Wine Tasting Classes"
    },
    immigration_assistance_services: {
      osm_tags: {
        office: "government",
        government: "immigration"
      },
      icon: "temaki-town_hall",
      pretty_name: "Immigration Assistance Services"
    },
    flower_markets: {
      osm_tags: {
        shop: "florist"
      },
      icon: "maki-florist",
      pretty_name: "Flower Markets"
    },
    housing_cooperative: {
      osm_tags: {
        office: "housing_cooperative"
      },
      icon: "maki-building",
      pretty_name: "Housing Cooperative"
    },
    fortune_telling_service: {
      osm_tags: {
        shop: "psychic",
        psychic: "fortune_teller"
      },
      icon: "temaki-psychic",
      pretty_name: "Fortune Telling Service"
    },
    dumpling_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "dumpling"
      },
      icon: "maki-restaurant",
      pretty_name: "Dumpling Restaurant"
    },
    shinto_shrines: {
      osm_tags: {
        amenity: "place_of_worship",
        religion: "shinto"
      },
      icon: "temaki-shinto",
      pretty_name: "Shinto Shrines"
    },
    futsal_field: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "futsal"
      },
      icon: "maki-soccer",
      pretty_name: "Futsal Field"
    },
    solar_panel_cleaning: {
      osm_tags: {
        craft: "cleaning",
        cleaning: "solar_panel"
      },
      icon: "fas-solar-panel",
      pretty_name: "Solar Panel Cleaning"
    },
    childproofing: {
      osm_tags: {
        shop: "baby_goods"
      },
      icon: "fas-baby-carriage",
      pretty_name: "Childproofing"
    },
    challenge_courses_center: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "obstacle_course"
      },
      icon: "maki-pitch",
      pretty_name: "Challenge Courses Center"
    },
    makerspace: {
      osm_tags: {
        leisure: "hackerspace"
      },
      icon: "fas-code",
      pretty_name: "Makerspace"
    },
    ryokan: {
      osm_tags: {
        tourism: "hotel",
        hotel: "ryokan"
      },
      icon: "maki-lodging",
      pretty_name: "Ryokan"
    },
    cannabis_tour: {
      osm_tags: {
        office: "guide",
        guide: "cannabis_tour"
      },
      icon: "fas-cannabis",
      pretty_name: "Cannabis Tour"
    },
    tasting_classes: {
      osm_tags: {
        office: "guide",
        guide: "tasting_classes"
      },
      icon: "maki-restaurant",
      pretty_name: "Tasting Classes"
    },
    party_bike_rental: {
      osm_tags: {
        amenity: "bicycle_rental",
        bicycle_rental: "party_bike"
      },
      icon: "temaki-bicycle_rental",
      pretty_name: "Party Bike Rental"
    },
    silent_disco: {
      osm_tags: {
        leisure: "silent_disco"
      },
      icon: "fas-music",
      pretty_name: "Silent Disco"
    },
    back_shop: {
      osm_tags: {
        shop: "bakery"
      },
      icon: "maki-bakery",
      pretty_name: "Back Shop"
    },
    curry_sausage_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "curry_sausage"
      },
      icon: "maki-restaurant-bbq",
      pretty_name: "Curry Sausage Restaurant"
    },
    beach_volleyball_club: {
      osm_tags: {
        club: "sport",
        sport: "beachvolleyball"
      },
      icon: "maki-volleyball",
      pretty_name: "Beach Volleyball Club"
    },
    pop_up_restaurant: {
      osm_tags: {
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "Pop Up Restaurant"
    },
    warehouses: {
      osm_tags: {
        building: "warehouse"
      },
      icon: "fas-warehouse",
      pretty_name: "Warehouses"
    },
    poultry_farming: {
      osm_tags: {
        landuse: "animal_keeping",
        animal_keeping: "chicken"
      },
      icon: "maki-farm",
      pretty_name: "Poultry Farming"
    },
    iron_work: {
      osm_tags: {
        craft: "metal_construction"
      },
      icon: "temaki-tools",
      pretty_name: "Iron Work"
    },
    coal_and_coke: {
      osm_tags: {
        shop: "fuel",
        fuel: "coal"
      },
      icon: "temaki-propane_tank",
      pretty_name: "Coal and Coke"
    },
    farm_equipment_and_supply: {
      osm_tags: {
        shop: "agrarian"
      },
      icon: "fas-tractor",
      pretty_name: "Farm Equipment and Supply"
    },
    watch_store: {
      osm_tags: {
        shop: "watch"
      },
      icon: "maki-watch",
      pretty_name: "Watch Store"
    },
    appellate_practice_lawyers: {
      osm_tags: {
        office: "lawyer",
        lawyer: "appellate"
      },
      icon: "fas-balance-scale",
      pretty_name: "Appellate Practice Lawyers"
    },
    flooring_contractors: {
      osm_tags: {
        craft: "floorer"
      },
      icon: "temaki-brick_trowel",
      pretty_name: "Flooring Contractors"
    },
    emergency_pet_hospital: {
      osm_tags: {
        amenity: "veterinary",
        emergency: "yes"
      },
      icon: "maki-veterinary",
      pretty_name: "Emergency Pet Hospital"
    },
    emergency_service: {
      osm_tags: {
        emergency: "disaster_response "
      },
      icon: "fas-ambulance",
      pretty_name: "Emergency Service"
    },
    hvac_supplier: {
      osm_tags: {
        shop: "trade",
        trade: "hvac"
      },
      icon: "temaki-tools",
      pretty_name: "HVAC Supplier"
    },
    lawn_mower_repair_service: {
      osm_tags: {
        shop: "repair",
        repair: "lawn_mower"
      },
      icon: "fas-tools",
      pretty_name: "Lawn Mower Repair Service"
    },
    child_care_and_day_care: {
      osm_tags: {
        amenity: "childcare"
      },
      icon: "fas-child",
      pretty_name: "Child Care and Day Care"
    },
    beverage_supplier: {
      osm_tags: {
        shop: "beverages"
      },
      icon: "temaki-bottles",
      pretty_name: "Beverage Supplier"
    },
    steel_fabricators: {
      osm_tags: {
        man_made: "works",
        product: "steel"
      },
      icon: "maki-industry",
      pretty_name: "Steel Fabricators"
    },
    saw_mill: {
      osm_tags: {
        craft: "sawmill"
      },
      icon: "maki-logging",
      pretty_name: "Saw Mill"
    },
    welders: {
      osm_tags: {
        craft: "welding"
      },
      icon: "temaki-tools",
      pretty_name: "Welders"
    },
    home_automation: {
      osm_tags: {
        shop: "home_automation"
      },
      icon: "maki-shop",
      pretty_name: "Home Automation"
    },
    dairy_stores: {
      osm_tags: {
        shop: "dairy"
      },
      icon: "fas-cheese",
      pretty_name: "Dairy Stores"
    },
    domestic_business_and_trade_organizations: {
      osm_tags: {
        office: "trade_union"
      },
      icon: "maki-suitcase",
      pretty_name: "Domestic Business and Trade Organizations"
    },
    condominium: {
      osm_tags: {
        building: "apartments"
      },
      icon: "maki-residential-community",
      pretty_name: "Condominium"
    },
    hospital_equipment_and_supplies: {
      osm_tags: {
        shop: "medical_supply"
      },
      icon: "fas-crutch",
      pretty_name: "Hospital Equipment and Supplies"
    },
    fingerprinting_service: {
      osm_tags: {
        office: "fingerprinting_service"
      },
      icon: "maki-suitcase",
      pretty_name: "Fingerprinting Service"
    },
    fitness_exercise_equipment: {
      osm_tags: {
        shop: "sports"
      },
      icon: "fas-dumbbell",
      pretty_name: "Fitness Exercise Equipment"
    },
    drugstore: {
      osm_tags: {
        shop: "chemist"
      },
      icon: "fas-shopping-basket",
      pretty_name: "Drugstore"
    },
    health_and_wellness_club: {
      osm_tags: {
        leisure: "fitness_centre"
      },
      icon: "fas-dumbbell",
      pretty_name: "Health and Wellness Club"
    },
    manufacturers_agents_and_representatives: {
      osm_tags: {
        office: "manufacturer"
      },
      icon: "maki-suitcase",
      pretty_name: "Manufacturers Agents and Representatives"
    },
    social_club: {
      osm_tags: {
        amenity: "social_club"
      },
      icon: "temaki-social_facility",
      pretty_name: "Social Club"
    },
    bathroom_remodeling: {
      osm_tags: {
        craft: "bathroom_remodeling"
      },
      icon: "fas-bath",
      pretty_name: "Bathroom Remodeling"
    },
    eyebrow_service: {
      osm_tags: {
        shop: "beauty",
        beauty: "eyebrows"
      },
      icon: "temaki-lipstick",
      pretty_name: "Eyebrow Service"
    },
    bookbinding: {
      osm_tags: {
        craft: "bookbinder"
      },
      icon: "maki-library",
      pretty_name: "Bookbinding"
    },
    paralegal_services: {
      osm_tags: {
        office: "paralegal"
      },
      icon: "maki-suitcase",
      pretty_name: "Paralegal Services"
    },
    farm_equipment_repair_service: {
      osm_tags: {
        shop: "repair",
        repair: "farm_equipment"
      },
      icon: "fas-tractor",
      pretty_name: "Farm Equipment Repair Service"
    },
    piercing: {
      osm_tags: {
        shop: "beauty",
        beauty: "piercing"
      },
      icon: "temaki-tanning",
      pretty_name: "Piercing"
    },
    knitting_supply: {
      osm_tags: {
        shop: "knitting"
      },
      icon: "temaki-needle_and_spool",
      pretty_name: "Knitting Supply"
    },
    laboratory_equipment_supplier: {
      osm_tags: {
        shop: "medical_supply"
      },
      icon: "fas-vial",
      pretty_name: "Laboratory Equipment Supplier"
    },
    religious_items: {
      osm_tags: {
        shop: "religious"
      },
      icon: "maki-place-of-worship",
      pretty_name: "Religious Items"
    },
    taxi_rank: {
      osm_tags: {
        amenity: "taxi"
      },
      icon: "fas-taxi",
      pretty_name: "Taxi Rank"
    },
    holiday_decor: {
      osm_tags: {
        shop: "interior_decoration",
        interior_decoration: "holiday"
      },
      icon: "maki-star",
      pretty_name: "Holiday Decor"
    },
    federal_government_offices: {
      osm_tags: {
        office: "government"
      },
      icon: "temaki-town_hall",
      pretty_name: "Federal Government Offices"
    },
    kiosk: {
      osm_tags: {
        shop: "kiosk"
      },
      icon: "fas-store",
      pretty_name: "Kiosk"
    },
    wellness_program: {
      osm_tags: {
        leisure: "fitness_centre"
      },
      icon: "fas-dumbbell",
      pretty_name: "Wellness Program"
    },
    b2b_agriculture_and_food: {
      osm_tags: {
        shop: "agrarian"
      },
      icon: "fas-tractor",
      pretty_name: "B2B Agriculture and Food"
    },
    optical_wholesaler: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "optical"
      },
      icon: "maki-optician",
      pretty_name: "Optical Wholesaler"
    },
    falafel_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "falafel"
      },
      icon: "maki-restaurant",
      pretty_name: "Falafel Restaurant"
    },
    fastener_supplier: {
      osm_tags: {
        shop: "trade",
        trade: "construction"
      },
      icon: "fas-tools",
      pretty_name: "Fastener Supplier"
    },
    direct_mail_advertising: {
      osm_tags: {
        office: "advertising"
      },
      icon: "maki-suitcase",
      pretty_name: "Direct Mail Advertising"
    },
    industrial_spares_and_products_wholesaler: {
      osm_tags: {
        shop: "wholesale"
      },
      icon: "maki-warehouse",
      pretty_name: "Industrial Spares and Products Wholesaler"
    },
    cotton_mill: {
      osm_tags: {
        man_made: "works",
        product: "cotton"
      },
      icon: "maki-watermill",
      pretty_name: "Cotton Mill"
    },
    laser_cutting_service_provider: {
      osm_tags: {
        craft: "laser_cutting"
      },
      icon: "maki-logging",
      pretty_name: "Laser Cutting Service Provider"
    },
    pet_hospice: {
      osm_tags: {
        amenity: "veterinary"
      },
      icon: "temaki-veterinary_care",
      pretty_name: "Pet Hospice"
    },
    carpet_installation: {
      osm_tags: {
        craft: "carpet_installation"
      },
      icon: "temaki-tools",
      pretty_name: "Carpet Installation"
    },
    gemstone_and_mineral: {
      osm_tags: {
        shop: "collector",
        collector: "minerals"
      },
      icon: "temaki-boulder2",
      pretty_name: "Gemstone and Mineral"
    },
    furniture_reupholstery: {
      osm_tags: {
        craft: "upholsterer"
      },
      icon: "temaki-tools",
      pretty_name: "Furniture Reupholstery"
    },
    water_delivery: {
      osm_tags: {
        amenity: "water_point"
      },
      icon: "maki-drinking-water",
      pretty_name: "Water Delivery"
    },
    tenant_and_eviction_law: {
      osm_tags: {
        office: "lawyer"
      },
      icon: "fas-balance-scale",
      pretty_name: "Tenant and Eviction Law"
    },
    valet_service: {
      osm_tags: {
        amenity: "parking",
        parking: "valet"
      },
      icon: "fas-car",
      pretty_name: "Valet Service"
    },
    lighting_fixture_manufacturers: {
      osm_tags: {
        man_made: "works",
        product: "lighting_fixture"
      },
      icon: "temaki-desk_lamp",
      pretty_name: "Lighting Fixture Manufacturers"
    },
    windsurfing_center: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "windsurfing"
      },
      icon: "maki-pitch",
      pretty_name: "Windsurfing Center"
    },
    deck_and_railing_sales_service: {
      osm_tags: {
        office: "deck_and_railing_sales"
      },
      icon: "temaki-railing",
      pretty_name: "Deck and Railing Sales Service"
    },
    court_reporter: {
      osm_tags: {
        office: "court_reporter"
      },
      icon: "maki-suitcase",
      pretty_name: "Court Reporter"
    },
    boxing_club: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "boxing"
      },
      icon: "maki-pitch",
      pretty_name: "Boxing Club"
    },
    mailbox_center: {
      osm_tags: {
        amenity: "post_office"
      },
      icon: "maki-post",
      pretty_name: "Mailbox Center"
    },
    macarons: {
      osm_tags: {
        shop: "pastry",
        cuisine: "macarons"
      },
      icon: "maki-bakery",
      pretty_name: "Macarons"
    },
    family_service_center: {
      osm_tags: {
        amenity: "social_facility",
        social_facility: "family_service_center"
      },
      icon: "fas-users",
      pretty_name: "Family Service Center"
    },
    electrical_wholesaler: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "eletrical"
      },
      icon: "maki-warehouse",
      pretty_name: "Electrical Wholesaler"
    },
    pediatric_pulmonology: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "pediatric_pulmonology"
      },
      icon: "maki-doctor",
      pretty_name: "Pediatric Pulmonology"
    },
    boat_storage_facility: {
      osm_tags: {
        amenity: "boat_storage"
      },
      icon: "temaki-boat_dry_dock",
      pretty_name: "Boat Storage Facility"
    },
    military_surplus_store: {
      osm_tags: {
        shop: "military_surplus"
      },
      icon: "temaki-military",
      pretty_name: "Military Surplus Store"
    },
    rock_climbing_instructor: {
      osm_tags: {
        craft: "sports_instructor",
        sport: "rock_climbing"
      },
      icon: "temaki-abseiling",
      pretty_name: "Rock Climbing Instructor"
    },
    parenting_classes: {
      osm_tags: {
        amenity: "community_centre",
        community_centre: "parenting_classes"
      },
      icon: "maki-town-hall",
      pretty_name: "Parenting Classes"
    },
    iv_hydration: {
      osm_tags: {
        healthcare: "iv_hydration"
      },
      icon: "maki-doctor",
      pretty_name: "Iv Hydration"
    },
    canyon: {
      osm_tags: {
        natural: "valley"
      },
      icon: "temaki-valley",
      pretty_name: "Canyon"
    },
    podiatry: {
      osm_tags: {
        healthcare: "podiatrist"
      },
      icon: "maki-hospital",
      pretty_name: "Podiatry"
    },
    donation_center: {
      osm_tags: {
        amenity: "charity"
      },
      icon: "temaki-money_hand",
      pretty_name: "Donation Center"
    },
    chimney_service: {
      osm_tags: {
        craft: "chimney_sweeper"
      },
      icon: "temaki-chimney",
      pretty_name: "Chimney Service"
    },
    acne_treatment: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "dermatology"
      },
      icon: "maki-doctor",
      pretty_name: "Acne Treatment"
    },
    oil_and_gas_exploration_and_development: {
      osm_tags: {
        landuse: "industrial",
        industrial: "oil_and_gas"
      },
      icon: "maki-industry",
      pretty_name: "Oil and Gas Exploration and Development"
    },
    dinner_theater: {
      osm_tags: {
        amenity: "theatre",
        "theatre:genre": "dinner_theater"
      },
      icon: "maki-theatre",
      pretty_name: "Dinner Theater"
    },
    package_locker: {
      osm_tags: {
        amenity: "parcel_locker"
      },
      icon: "temaki-vending_lockers",
      pretty_name: "Package Locker"
    },
    drone_store: {
      osm_tags: {
        shop: "drone"
      },
      icon: "maki-shop",
      pretty_name: "Drone Store"
    },
    private_equity_firm: {
      osm_tags: {
        office: "financial"
      },
      icon: "maki-suitcase",
      pretty_name: "Private Equity Firm"
    },
    laotian_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "laotian"
      },
      icon: "maki-restaurant-noodle",
      pretty_name: "Laotian Restaurant"
    },
    geneticist: {
      osm_tags: {
        office: "geneticist"
      },
      icon: "maki-suitcase",
      pretty_name: "Geneticist"
    },
    flatbread_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "flatbread"
      },
      icon: "maki-restaurant",
      pretty_name: "Flatbread Restaurant"
    },
    indoor_golf_center: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "golf"
      },
      icon: "maki-pitch",
      pretty_name: "Indoor Golf Center"
    },
    studio_taping: {
      osm_tags: {
        amenity: "studio"
      },
      icon: "fas-microphone",
      pretty_name: "Studio Taping"
    },
    phlebologist: {
      osm_tags: {
        office: "doctor",
        "healthcare:speciality": "phlebology"
      },
      icon: "maki-suitcase",
      pretty_name: "Phlebologist"
    },
    footwear_wholesaler: {
      osm_tags: {
        shop: "shoes"
      },
      icon: "maki-shoe",
      pretty_name: "Footwear Wholesaler"
    },
    bathroom_fixture_stores: {
      osm_tags: {
        shop: "bathroom_furnishing"
      },
      icon: "fas-bath",
      pretty_name: "Bathroom Fixture Stores"
    },
    closet_remodeling: {
      osm_tags: {
        craft: "carpenter"
      },
      icon: "fas-hammer",
      pretty_name: "Closet Remodeling"
    },
    exhibition_and_trade_center: {
      osm_tags: {
        amenity: "arts_centre"
      },
      icon: "maki-theatre",
      pretty_name: "Exhibition and Trade Center"
    },
    kosher_grocery_store: {
      osm_tags: {
        shop: "supermarket",
        "diet:kosher": "yes"
      },
      icon: "maki-grocery",
      pretty_name: "Kosher Grocery Store"
    },
    jewish_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "jewish"
      },
      icon: "maki-restaurant",
      pretty_name: "Jewish Restaurant"
    },
    gravel_professionals: {
      osm_tags: {
        office: "company"
      },
      icon: "maki-suitcase",
      pretty_name: "Gravel Professionals"
    },
    cheese_tasting_classes: {
      osm_tags: {
        tourism: "attraction",
        attraction: "cheese_tasting_classes"
      },
      icon: "maki-star",
      pretty_name: "Cheese Tasting Classes"
    },
    logging_equipment_and_supplies: {
      osm_tags: {
        shop: "trade",
        trade: "logging"
      },
      icon: "maki-logging",
      pretty_name: "Logging Equipment and Supplies"
    },
    pig_farm: {
      osm_tags: {
        landuse: "farm",
        amenity: "animal_breeding",
        animal_breeding: "pig"
      },
      icon: "maki-farm",
      pretty_name: "Pig Farm"
    },
    free_diving_center: {
      osm_tags: {
        amenity: "dive_centre"
      },
      icon: "temaki-scuba_diving",
      pretty_name: "Free Diving Center"
    },
    pet_insurance: {
      osm_tags: {
        office: "insurance",
        insurance: "pet"
      },
      icon: "temaki-briefcase_shield",
      pretty_name: "Pet Insurance"
    },
    scout_hall: {
      osm_tags: {
        amenity: "social_facility",
        "social_facility:for": "scouts"
      },
      icon: "temaki-social_facility",
      pretty_name: "Scout Hall"
    },
    chamber_of_handicraft: {
      osm_tags: {
        office: "labor_union"
      },
      icon: "fas-tools",
      pretty_name: "Chamber Of Handicraft"
    },
    poutinerie_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "poutine"
      },
      icon: "maki-restaurant",
      pretty_name: "Poutinerie Restaurant"
    },
    sand_dune: {
      osm_tags: {
        natural: "sand"
      },
      icon: "temaki-sandbox",
      pretty_name: "Sand Dune"
    },
    toxicologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "toxicology"
      },
      icon: "maki-doctor",
      pretty_name: "Toxicologist"
    },
    bar_crawl: {
      osm_tags: {
        office: "guide",
        guide: "bar_crawl"
      },
      icon: "maki-beer",
      pretty_name: "Bar Crawl"
    },
    art_space_rental: {
      osm_tags: {
        amenity: "studio",
        studio: "art"
      },
      icon: "maki-art-gallery",
      pretty_name: "Art Space Rental"
    },
    gunsmith: {
      osm_tags: {
        craft: "gunsmith"
      },
      icon: "fas-tools",
      pretty_name: "Gunsmith"
    },
    scavenger_hunts_provider: {
      osm_tags: {
        leisure: "scavenger_hunt"
      },
      icon: "fas-puzzle-piece",
      pretty_name: "Scavenger Hunts Provider"
    },
    neurotologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "neurotology"
      },
      icon: "maki-doctor",
      pretty_name: "Neurotologist"
    },
    saree_shop: {
      osm_tags: {
        shop: "clothes",
        clothes: "saree"
      },
      icon: "fas-tshirt",
      pretty_name: "Saree Shop"
    },
    ems_training: {
      osm_tags: {
        amenity: "training",
        training: "emergency_medical_services"
      },
      icon: "fas-ambulance",
      pretty_name: "EMS Training"
    },
    cannabis_collective: {
      osm_tags: {
        shop: "cannabis"
      },
      icon: "fas-cannabis",
      pretty_name: "Cannabis Collective"
    },
    vermouth_bar: {
      osm_tags: {
        amenity: "bar"
      },
      icon: "maki-bar",
      pretty_name: "Vermouth Bar"
    },
    paddleboarding_lessons: {
      osm_tags: {
        craft: "sports_instructor",
        sport: "paddleboarding"
      },
      icon: "temaki-boat",
      pretty_name: "Paddleboarding Lessons"
    },
    backpacking_area: {
      osm_tags: {
        highway: "trailhead"
      },
      icon: "maki-campsite",
      pretty_name: "Backpacking Area"
    },
    trivia_host: {
      osm_tags: {
        craft: "trivia_host"
      },
      icon: "fas-users",
      pretty_name: "Trivia Host"
    },
    climbing_class: {
      osm_tags: {
        craft: "sports_instructor",
        sport: "climbing"
      },
      icon: "temaki-abseiling",
      pretty_name: "Climbing Class"
    },
    shopping_passage: {
      osm_tags: {
        shop: "mall"
      },
      icon: "maki-shop",
      pretty_name: "Shopping Passage"
    },
    home_decor: {
      osm_tags: {
        shop: "interior_decoration"
      },
      icon: "maki-shop",
      pretty_name: "Home Decor"
    },
    hearing_aids: {
      osm_tags: {
        shop: "hearing_aids"
      },
      icon: "temaki-hearing_aid",
      pretty_name: "Hearing Aids"
    },
    crane_services: {
      osm_tags: {
        office: "crane_services"
      },
      icon: "maki-industry",
      pretty_name: "Crane Services"
    },
    leather_goods: {
      osm_tags: {
        shop: "leather"
      },
      icon: "temaki-handbag",
      pretty_name: "Leather Goods"
    },
    diagnostic_imaging: {
      osm_tags: {
        amenity: "doctors",
        healthcare: "doctor",
        "healthcare:speciality": "radiology"
      },
      icon: "maki-doctor",
      pretty_name: "Diagnostic Imaging"
    },
    occupational_medicine: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "occupational_medicine"
      },
      icon: "maki-doctor",
      pretty_name: "Occupational Medicine"
    },
    business_to_business: {
      osm_tags: {
        office: "business_to_business_services"
      },
      icon: "maki-suitcase",
      pretty_name: "Business To Business"
    },
    hair_stylist: {
      osm_tags: {
        shop: "hairdresser"
      },
      icon: "temaki-beauty_salon",
      pretty_name: "Hair Stylist"
    },
    home_window_tinting: {
      osm_tags: {
        craft: "window_tinter"
      },
      icon: "temaki-window",
      pretty_name: "Home Window Tinting"
    },
    handicraft_shop: {
      osm_tags: {
        shop: "craft"
      },
      icon: "fas-cut",
      pretty_name: "Handicraft Shop"
    },
    sunglasses_store: {
      osm_tags: {
        shop: "optician"
      },
      icon: "maki-optician",
      pretty_name: "Sunglasses Store"
    },
    fertilizer_store: {
      osm_tags: {
        shop: "agrarian"
      },
      icon: "fas-tractor",
      pretty_name: "Fertilizer Store"
    },
    electrical_supply_store: {
      osm_tags: {
        shop: "electronics"
      },
      icon: "fas-plug",
      pretty_name: "Electrical Supply Store"
    },
    books_mags_music_and_video: {
      osm_tags: {
        shop: "books"
      },
      icon: "fas-book",
      pretty_name: "Books Mags Music and Video"
    },
    b2b_truck_equipment_parts_and_accessories: {
      osm_tags: {
        shop: "truck_parts"
      },
      icon: "fas-car",
      pretty_name: "B2B Truck Equipment Parts and Accessories"
    },
    party_equipment_rental: {
      osm_tags: {
        shop: "party"
      },
      icon: "temaki-balloon",
      pretty_name: "Party Equipment Rental"
    },
    business_equipment_and_supply: {
      osm_tags: {
        shop: "stationery"
      },
      icon: "fas-paperclip",
      pretty_name: "Business Equipment and Supply"
    },
    business_brokers: {
      osm_tags: {
        office: "business_broker"
      },
      icon: "maki-suitcase",
      pretty_name: "Business Brokers"
    },
    motor_freight_trucking: {
      osm_tags: {
        office: "logistics"
      },
      icon: "maki-industry",
      pretty_name: "Motor Freight Trucking"
    },
    vinyl_record_store: {
      osm_tags: {
        shop: "music"
      },
      icon: "fas-compact-disc",
      pretty_name: "Vinyl Record Store"
    },
    online_shop: {
      osm_tags: {
        shop: "e_commerce"
      },
      icon: "fas-laptop",
      pretty_name: "Online Shop"
    },
    cannabis_dispensary: {
      osm_tags: {
        shop: "cannabis"
      },
      icon: "fas-cannabis",
      pretty_name: "Cannabis Dispensary"
    },
    bookkeeper: {
      osm_tags: {
        office: "accountant"
      },
      icon: "temaki-accounting",
      pretty_name: "Bookkeeper"
    },
    seafood_wholesaler: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "seafood"
      },
      icon: "temaki-fish_cleaning",
      pretty_name: "Seafood Wholesaler"
    },
    bearing_supplier: {
      osm_tags: {
        shop: "bearing"
      },
      icon: "fas-tools",
      pretty_name: "Bearing Supplier"
    },
    refinishing_services: {
      osm_tags: {
        craft: "refinishing"
      },
      icon: "temaki-furniture",
      pretty_name: "Refinishing Services"
    },
    session_photography: {
      osm_tags: {
        service: "photography"
      },
      icon: "fas-camera-retro",
      pretty_name: "Session Photography"
    },
    empanadas: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "empanadas"
      },
      icon: "maki-restaurant",
      pretty_name: "Empanadas"
    },
    agricultural_seed_store: {
      osm_tags: {
        shop: "agrarian"
      },
      icon: "temaki-grass",
      pretty_name: "Agricultural Seed Store"
    },
    dumpster_rentals: {
      osm_tags: {
        shop: "rental",
        rental: "dumpster"
      },
      icon: "fas-dumpster",
      pretty_name: "Dumpster Rentals"
    },
    japanese_confectionery_shop: {
      osm_tags: {
        shop: "confectionery",
        cuisine: "japanese"
      },
      icon: "maki-confectionery",
      pretty_name: "Japanese Confectionery Shop"
    },
    dance_wear: {
      osm_tags: {
        shop: "clothing",
        clothing: "dance_wear"
      },
      icon: "fas-tshirt",
      pretty_name: "Dance Wear"
    },
    agriculture_association: {
      osm_tags: {
        office: "association",
        association: "agricultural"
      },
      icon: "maki-farm",
      pretty_name: "Agriculture Association"
    },
    honey_farm_shop: {
      osm_tags: {
        shop: "farm",
        product: "honey"
      },
      icon: "fas-apple-alt",
      pretty_name: "Honey Farm Shop"
    },
    firewood: {
      osm_tags: {
        shop: "fuel",
        "fuel:firewood": "yes"
      },
      icon: "temaki-campfire",
      pretty_name: "Firewood"
    },
    specialty_foods: {
      osm_tags: {
        shop: "deli"
      },
      icon: "temaki-meat",
      pretty_name: "Speciality Foods"
    },
    b2b_food_products: {
      osm_tags: {
        shop: "wholesale",
        wolesale: "food"
      },
      icon: "maki-warehouse",
      pretty_name: "B2B Food Products"
    },
    livestock_feed_and_supply_store: {
      osm_tags: {
        shop: "agrarian"
      },
      icon: "fas-tractor",
      pretty_name: "Livestock Feed and Supply Store"
    },
    landscape_architect: {
      osm_tags: {
        office: "landscape_architect"
      },
      icon: "maki-suitcase",
      pretty_name: "Landscape Architect"
    },
    mortuary_services: {
      osm_tags: {
        amenity: "mortuary"
      },
      icon: "maki-cemetery",
      pretty_name: "Mortuary Services"
    },
    produce_wholesaler: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "produce"
      },
      icon: "maki-warehouse",
      pretty_name: "Produce Wholesaler"
    },
    food_and_beverage_exporter: {
      osm_tags: {
        office: "exporter"
      },
      icon: "maki-suitcase",
      pretty_name: "Food and Beverage Exporter"
    },
    drywall_services: {
      osm_tags: {
        craft: "drywall_installer"
      },
      icon: "temaki-brick_trowel",
      pretty_name: "Drywall Services"
    },
    b2b_tires: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "tyres"
      },
      icon: "temaki-tire",
      pretty_name: "B2B Tires"
    },
    criminal_deense_law: {
      osm_tags: {
        office: "lawyer",
        lawyer: "criminal_defense"
      },
      icon: "fas-balance-scale",
      pretty_name: "Criminal Defense Law"
    },
    t_shirt_store: {
      osm_tags: {
        shop: "clothes",
        clothes: "custom_t_shirts"
      },
      icon: "fas-tshirt",
      pretty_name: "T-Shirt Store"
    },
    importer_and_exporter: {
      osm_tags: {
        office: "importer_and_exporter"
      },
      icon: "maki-suitcase",
      pretty_name: "Importer and Exporter"
    },
    mortgage_lender: {
      osm_tags: {
        office: "mortgage_lender"
      },
      icon: "maki-suitcase",
      pretty_name: "Mortgage Lender"
    },
    musical_instrument_services: {
      osm_tags: {
        shop: "musical_instrument"
      },
      icon: "fas-guitar",
      pretty_name: "Musical Instrument Services"
    },
    whale_watching_tours: {
      osm_tags: {
        office: "guide",
        guide: "whale_watching"
      },
      icon: "temaki-boat",
      pretty_name: "Whale Watching Tours"
    },
    stock_and_bond_brokers: {
      osm_tags: {
        office: "stock_broker"
      },
      icon: "maki-suitcase",
      pretty_name: "Stock and Bond Brokers"
    },
    hypnosis_hypnotherapy: {
      osm_tags: {
        healthcare: "alternative",
        "healthcare:speciality": "hypnosis"
      },
      icon: "maki-spa",
      pretty_name: "Hypnosis Hypnotherapy"
    },
    pressure_washing: {
      osm_tags: {
        amenity: "car_wash"
      },
      icon: "temaki-car_wash",
      pretty_name: "Pressure Washing"
    },
    scooter_dealers: {
      osm_tags: {
        shop: "motorcycle"
      },
      icon: "fas-motorcycle",
      pretty_name: "Scooter Dealers"
    },
    b2b_medical_support_services: {
      osm_tags: {
        office: "medical_support_services"
      },
      icon: "maki-suitcase",
      pretty_name: "B2B Medical Support Services"
    },
    skilled_nursing: {
      osm_tags: {
        healthcare: "nurse"
      },
      icon: "maki-doctor",
      pretty_name: "Skilled Nursing"
    },
    tower_communication_service: {
      osm_tags: {
        office: "telecommunication"
      },
      icon: "temaki-mast_communication",
      pretty_name: "Tower Communication Service"
    },
    hair_loss_center: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "trichology"
      },
      icon: "maki-doctor",
      pretty_name: "Hair Loss Center"
    },
    outdoor_advertising: {
      osm_tags: {
        office: "outdoor_advertising"
      },
      icon: "temaki-billboard",
      pretty_name: "Outdoor Advertising"
    },
    b2b_sporting_and_recreation_goods: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "sporting_goods"
      },
      icon: "fas-futbol",
      pretty_name: "B2B Sporting and Recreation Goods"
    },
    candle_store: {
      osm_tags: {
        shop: "candles"
      },
      icon: "fas-burn",
      pretty_name: "Candle Store"
    },
    social_security_services: {
      osm_tags: {
        office: "government",
        government: "social_security"
      },
      icon: "temaki-town_hall",
      pretty_name: "Social Security Services"
    },
    flour_mill: {
      osm_tags: {
        craft: "grinding_mill"
      },
      icon: "maki-bakery",
      pretty_name: "Flour Mill"
    },
    matchmaker: {
      osm_tags: {
        office: "matchmaking"
      },
      icon: "maki-suitcase",
      pretty_name: "Matchmaker"
    },
    lighting_fixtures_and_equipment: {
      osm_tags: {
        shop: "lighting"
      },
      icon: "temaki-desk_lamp",
      pretty_name: "Lighting Fixtures and Equipment"
    },
    utility_service: {
      osm_tags: {
        office: "utility"
      },
      icon: "fas-suitcase",
      pretty_name: "Utility Service"
    },
    endoscopist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "endoscopy"
      },
      icon: "maki-doctor",
      pretty_name: "Endoscopist"
    },
    golf_equipment: {
      osm_tags: {
        shop: "sports",
        sport: "golf"
      },
      icon: "maki-golf",
      pretty_name: "Golf Equipment"
    },
    rv_storage_facility: {
      osm_tags: {
        amenity: "rv_storage"
      },
      icon: "temaki-camper_trailer",
      pretty_name: "RV Storage Facility"
    },
    auto_loan_provider: {
      osm_tags: {
        office: "money_lender"
      },
      icon: "maki-suitcase",
      pretty_name: "Auto Loan Provider"
    },
    estate_planning_law: {
      osm_tags: {
        office: "lawyer",
        lawyer: "estate_planning"
      },
      icon: "fas-balance-scale",
      pretty_name: "Estate Planning Law"
    },
    social_welfare_center: {
      osm_tags: {
        amenity: "social_facility",
        social_facility: "welfare"
      },
      icon: "temaki-social_facility",
      pretty_name: "Social Welfare Center"
    },
    dive_shop: {
      osm_tags: {
        shop: "scuba_diving"
      },
      icon: "temaki-scuba_diving",
      pretty_name: "Dive Shop"
    },
    lawn_mower_store: {
      osm_tags: {
        shop: "garden_machinery"
      },
      icon: "temaki-grass",
      pretty_name: "Lawn Mower Store"
    },
    custom_cakes_shop: {
      osm_tags: {
        shop: "pastry",
        cuisine: "custom_cakes"
      },
      icon: "maki-bakery",
      pretty_name: "Custom Cakes Shop"
    },
    home_network_installation: {
      osm_tags: {
        craft: "home_network_installation"
      },
      icon: "fas-satellite-dish",
      pretty_name: "Home Network Installation"
    },
    pet_training: {
      osm_tags: {
        amenity: "animal_training"
      },
      icon: "maki-dog-park",
      pretty_name: "Pet Training"
    },
    payroll_services: {
      osm_tags: {
        office: "payroll_services"
      },
      icon: "maki-suitcase",
      pretty_name: "Payroll Services"
    },
    product_design: {
      osm_tags: {
        office: "product_design"
      },
      icon: "maki-suitcase",
      pretty_name: "Product Design"
    },
    climbing_service: {
      osm_tags: {
        office: "climbing_service"
      },
      icon: "temaki-abseiling",
      pretty_name: "Climbing Service"
    },
    pick_your_own_farm: {
      osm_tags: {
        tourism: "attraction",
        produce: "pick_your_own"
      },
      icon: "maki-star",
      pretty_name: "Pick Your Own Farm"
    },
    skyscraper: {
      osm_tags: {
        building: "yes"
      },
      icon: "maki-building",
      pretty_name: "Skyscraper"
    },
    hepatologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "hepatology"
      },
      icon: "maki-doctor",
      pretty_name: "Hepatologist"
    },
    kickboxing_club: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "kickboxing"
      },
      icon: "maki-pitch",
      pretty_name: "Kickboxing Club"
    },
    firearm_training: {
      osm_tags: {
        amenity: "training",
        training: "firearm"
      },
      icon: "fas-crosshairs",
      pretty_name: "Firearm Training"
    },
    home_energy_auditor: {
      osm_tags: {
        office: "home_energy_auditor"
      },
      icon: "temaki-briefcase_bolt",
      pretty_name: "Home Energy Auditor"
    },
    tabletop_games: {
      osm_tags: {
        shop: "games"
      },
      icon: "fas-dice",
      pretty_name: "Tabletop Games"
    },
    trade_fair: {
      osm_tags: {
        amenity: "events_venue"
      },
      icon: "fas-users",
      pretty_name: "Trade Fair"
    },
    road_structures_and_services: {
      osm_tags: {
        office: "road_structures_and_services"
      },
      icon: "temaki-briefcase",
      pretty_name: "Road Structures and Services"
    },
    paint_and_sip: {
      osm_tags: {
        leisure: "paint_and_sip"
      },
      icon: "maki-art-gallery",
      pretty_name: "Paint and Sip"
    },
    eatertainment: {
      osm_tags: {
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "Eatertainment"
    },
    osteopath: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "osteopathy"
      },
      icon: "maki-doctor",
      pretty_name: "Osteopath"
    },
    certification_agency: {
      osm_tags: {
        office: "certification"
      },
      icon: "maki-suitcase",
      pretty_name: "Certification Agency"
    },
    smokehouse: {
      osm_tags: {
        shop: "butcher"
      },
      icon: "temaki-cleaver",
      pretty_name: "Smokehouse"
    },
    background_check_services: {
      osm_tags: {
        office: "background_check_services"
      },
      icon: "maki-suitcase",
      pretty_name: "Background Check Services"
    },
    plaza: {
      osm_tags: {
        place: "square"
      },
      icon: "temaki-pedestrian",
      pretty_name: "Plaza"
    },
    jewelry_manufacturer: {
      osm_tags: {
        man_made: "works",
        product: "jewelry"
      },
      icon: "maki-jewelry-store",
      pretty_name: "Jewelry Manufacturer"
    },
    gymnastics_club: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "gymnastics"
      },
      icon: "maki-pitch",
      pretty_name: "Gymnastics Club"
    },
    denim_wear_store: {
      osm_tags: {
        shop: "clothes",
        clothes: "denim"
      },
      icon: "fas-tshirt",
      pretty_name: "Denim Wear Store"
    },
    traffic_ticketing_law: {
      osm_tags: {
        office: "government"
      },
      icon: "temaki-town_hall",
      pretty_name: "Traffic Ticketing Law"
    },
    orchards_production: {
      osm_tags: {
        landuse: "orchard"
      },
      icon: "maki-park",
      pretty_name: "Orchards Production"
    },
    cheerleading: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "cheerleading"
      },
      icon: "maki-pitch",
      pretty_name: "Cheerleading"
    },
    holiday_park: {
      osm_tags: {
        tourism: "theme_park"
      },
      icon: "maki-amusement-park",
      pretty_name: "Holiday Park"
    },
    memory_care: {
      osm_tags: {
        healthcare: "nursing_home"
      },
      icon: "maki-doctor",
      pretty_name: "Memory Care"
    },
    agricultural_engineering_service: {
      osm_tags: {
        office: "agricultural_engineer"
      },
      icon: "maki-suitcase",
      pretty_name: "Agricultural Engineering Service"
    },
    ruin: {
      osm_tags: {
        historic: "ruins"
      },
      icon: "temaki-ruins",
      pretty_name: "Ruin"
    },
    animal_assisted_therapy: {
      osm_tags: {
        healthcare: "alternative",
        "healthcare:speciality": "animal_assisted_therapy"
      },
      icon: "maki-hospital",
      pretty_name: "Animal Assisted Therapy"
    },
    architecture_schools: {
      osm_tags: {
        amenity: "college"
      },
      icon: "maki-college",
      pretty_name: "Architecture Schools"
    },
    bike_parking: {
      osm_tags: {
        amenity: "bicycle_parking"
      },
      icon: "temaki-bicycle_shed",
      pretty_name: "Bike Parking"
    },
    hot_springs: {
      osm_tags: {
        natural: "hot_spring"
      },
      icon: "maki-hot-spring",
      pretty_name: "Hot Springs"
    },
    gliderports: {
      osm_tags: {
        aeroway: "gliderport"
      },
      icon: "maki-triangle-stroked",
      pretty_name: "Gliderports"
    },
    hydro_jetting: {
      osm_tags: {
        craft: "hydro_jetting"
      },
      icon: "fas-tools",
      pretty_name: "Hydro Jetting"
    },
    volleyball_club: {
      osm_tags: {
        club: "sport",
        sport: "volleyball"
      },
      icon: "maki-volleyball",
      pretty_name: "Volleyball Club"
    },
    private_establishments_and_corporates: {
      osm_tags: {
        office: "company"
      },
      icon: "maki-suitcase",
      pretty_name: "Private Establishments and Corporates"
    },
    domestic_airports: {
      osm_tags: {
        aeroway: "aerodrome",
        aerodrome: "domestic"
      },
      icon: "temaki-airport",
      pretty_name: "Domestic Airports"
    },
    veterinary_schools: {
      osm_tags: {
        amenity: "veterinary_school"
      },
      icon: "maki-veterinary",
      pretty_name: "Veterinary Schools"
    },
    psychomotor_therapist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "psychomotor_therapy"
      },
      icon: "maki-hospital",
      pretty_name: "Psychomotor Therapist"
    },
    mobile_clinic: {
      osm_tags: {
        amenity: "clinic"
      },
      icon: "fas-ambulance",
      pretty_name: "Mobile Clinic"
    },
    striptease_dancer: {
      osm_tags: {
        amenity: "stripclub"
      },
      icon: "roentgen-pole_dancer",
      pretty_name: "Striptease Dancer"
    },
    sugar_shack: {
      osm_tags: {
        shop: "confectionery"
      },
      icon: "maki-confectionery",
      pretty_name: "Sugar Shack"
    },
    playground_equipment_supplier: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "playground_equipment"
      },
      icon: "maki-playground",
      pretty_name: "Playground Equipment Supplier"
    },
    canteen: {
      osm_tags: {
        amenity: "food_court"
      },
      icon: "maki-restaurant",
      pretty_name: "Canteen"
    },
    rv_and_boat_storage_facility: {
      osm_tags: {
        amenity: "boat_storage;rv_storage"
      },
      icon: "fas-warehouse",
      pretty_name: "RV and Boat Storage Facility"
    },
    ultralight_airports: {
      osm_tags: {
        aeroway: "aerodrome",
        aerodrome: "ultralight"
      },
      icon: "temaki-airport",
      pretty_name: "Ultralight Airports"
    },
    pediatric_cardiology: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "paediatric_cardiology"
      },
      icon: "maki-doctor",
      pretty_name: "Pediatric Cardiology"
    },
    tire_shop: {
      osm_tags: {
        shop: "tyres"
      },
      icon: "temaki-tire",
      pretty_name: "Tire Shop"
    },
    life_insurance: {
      osm_tags: {
        office: "insurance",
        insurance: "lift"
      },
      icon: "temaki-briefcase_shield",
      pretty_name: "Life Insurance"
    },
    animal_hospital: {
      osm_tags: {
        amenity: "veterinary"
      },
      icon: "temaki-veterinary_care",
      pretty_name: "Animal Hospital"
    },
    battery_store: {
      osm_tags: {
        shop: "battery"
      },
      icon: "temaki-power",
      pretty_name: "Battery Store"
    },
    guest_house: {
      osm_tags: {
        tourism: "guest_house"
      },
      icon: "maki-lodging",
      pretty_name: "Guest House"
    },
    farming_services: {
      osm_tags: {
        office: "farming_services"
      },
      icon: "maki-farm",
      pretty_name: "Farming Services"
    },
    walk_in_clinic: {
      osm_tags: {
        amenity: "clinic"
      },
      icon: "maki-hospital",
      pretty_name: "Walk In Clinic"
    },
    aesthetician: {
      osm_tags: {
        shop: "beauty"
      },
      icon: "temaki-lipstick",
      pretty_name: "Aesthetician"
    },
    rental_services: {
      osm_tags: {
        office: "rental_service"
      },
      icon: "fas-dolly",
      pretty_name: "Rental Services"
    },
    art_supply_store: {
      osm_tags: {
        shop: "craft"
      },
      icon: "maki-shop",
      pretty_name: "Art Supply Store"
    },
    clinical_laboratories: {
      osm_tags: {
        healthcare: "laboratory"
      },
      icon: "fas-vial",
      pretty_name: "Clinical Laboratories"
    },
    rafting_kayaking_area: {
      osm_tags: {
        tourism: "attraction",
        sport: "kayak"
      },
      icon: "temaki-boat",
      pretty_name: "Rafting and Kayaking Area"
    },
    ice_supplier: {
      osm_tags: {
        shop: "ice"
      },
      icon: "far-snowflake",
      pretty_name: "Ice Supplier"
    },
    baby_gear_and_furniture: {
      osm_tags: {
        shop: "baby_goods"
      },
      icon: "fas-baby-carriage",
      pretty_name: "Baby Gear and Furniture"
    },
    civic_center: {
      osm_tags: {
        amenity: "community_centre"
      },
      icon: "maki-town-hall",
      pretty_name: "Civic Center"
    },
    pediatric_anesthesiology: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "anesthesiology"
      },
      icon: "maki-doctor",
      pretty_name: "Pediatric Anesthesiology"
    },
    importers: {
      osm_tags: {
        office: "importer"
      },
      icon: "maki-suitcase",
      pretty_name: "Importers"
    },
    customized_merchandise: {
      osm_tags: {
        shop: "gift"
      },
      icon: "maki-gift",
      pretty_name: "Customized Merchandise"
    },
    trains: {
      osm_tags: {
        railway: "station"
      },
      icon: "temaki-train",
      pretty_name: "Trains"
    },
    pool_and_hot_tub_services: {
      osm_tags: {
        shop: "swimming_pool"
      },
      icon: "fas-swimmer",
      pretty_name: "Pool and Hot Tub Services"
    },
    university_housing: {
      osm_tags: {
        building: "dormitory"
      },
      icon: "maki-building",
      pretty_name: "University Housing"
    },
    health_market: {
      osm_tags: {
        shop: "health_food"
      },
      icon: "maki-shop",
      pretty_name: "Health Market"
    },
    cleaning_products_supplier: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "cleaning_products"
      },
      icon: "temaki-vacuum",
      pretty_name: "Cleaning Products Supplier"
    },
    psychic_medium: {
      osm_tags: {
        shop: "psychic"
      },
      icon: "temaki-psychic",
      pretty_name: "Psychic Medium"
    },
    freight_forwarding_agency: {
      osm_tags: {
        office: "logistics"
      },
      icon: "maki-suitcase",
      pretty_name: "Freight Forwarding Agency"
    },
    computer_wholesaler: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "computers"
      },
      icon: "fas-laptop",
      pretty_name: "Computer Wholesaler"
    },
    auto_insurance: {
      osm_tags: {
        office: "insurance",
        insurance: "car"
      },
      icon: "temaki-briefcase_shield",
      pretty_name: "Auto Insurance"
    },
    abrasives_supplier: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "abrasives"
      },
      icon: "maki-shop",
      pretty_name: "Abrasives Supplier"
    },
    cabinet_sales_service: {
      osm_tags: {
        shop: "kitchen"
      },
      icon: "temaki-kitchen_sink",
      pretty_name: "Cabinet Sales Service"
    },
    business_storage_and_transportation: {
      osm_tags: {
        office: "logistics"
      },
      icon: "maki-industry",
      pretty_name: "Business Storage and Transportation"
    },
    social_security_law: {
      osm_tags: {
        office: "lawyer",
        lawyer: "social_security"
      },
      icon: "fas-balance-scale",
      pretty_name: "Social Security Law"
    },
    television_station: {
      osm_tags: {
        amenity: "studio",
        studio: "television"
      },
      icon: "fas-video",
      pretty_name: "Television Station"
    },
    custom_t_shirt_store: {
      osm_tags: {
        shop: "clothes",
        clothes: "custom_t_shirts"
      },
      icon: "fas-tshirt",
      pretty_name: "Custom T-Shirt Store"
    },
    boat_parts_and_supply_store: {
      osm_tags: {
        shop: "boat"
      },
      icon: "temaki-boat",
      pretty_name: "Boat Parts and Supply Store"
    },
    packing_services: {
      osm_tags: {
        office: "packing_services"
      },
      icon: "fas-box-open",
      pretty_name: "Packing Services"
    },
    it_consultant: {
      osm_tags: {
        office: "it"
      },
      icon: "maki-suitcase",
      pretty_name: "IT Consultant"
    },
    cancer_treatment_center: {
      osm_tags: {
        amenity: "clinic",
        healthcare: "clinic",
        "healthcare:speciality": "oncology"
      },
      icon: "maki-hospital",
      pretty_name: "Cancer Treatment Center"
    },
    safe_store: {
      osm_tags: {
        shop: "storage"
      },
      icon: "fas-warehouse",
      pretty_name: "Safe Store"
    },
    business_consulting: {
      osm_tags: {
        office: "consulting"
      },
      icon: "maki-suitcase",
      pretty_name: "Business Consulting"
    },
    engineering_schools: {
      osm_tags: {
        amenity: "college"
      },
      icon: "maki-college",
      pretty_name: "Engineering Schools"
    },
    stone_supplier: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "stone"
      },
      icon: "temaki-boulder2",
      pretty_name: "Stone Supplier"
    },
    newspaper_advertising: {
      osm_tags: {
        office: "advertising_agency"
      },
      icon: "maki-suitcase",
      pretty_name: "Newspaper Advertising"
    },
    event_technology_service: {
      osm_tags: {
        office: "it"
      },
      icon: "maki-suitcase",
      pretty_name: "Event Technology Service"
    },
    shared_office_space: {
      osm_tags: {
        amenity: "coworking_space"
      },
      icon: "maki-commercial",
      pretty_name: "Shared Office Space"
    },
    homeopathic_medicine: {
      osm_tags: {
        shop: "health_food"
      },
      icon: "maki-shop",
      pretty_name: "Homeopathic Medicine"
    },
    cosmetic_surgeon: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "cosmetic_surgery"
      },
      icon: "maki-doctor",
      pretty_name: "Cosmetic Surgeon"
    },
    community_health_center: {
      osm_tags: {
        amenity: "clinic"
      },
      icon: "maki-hospital",
      pretty_name: "Community Health Center"
    },
    bazaars: {
      osm_tags: {
        amenity: "marketplace"
      },
      icon: "fas-shopping-basket",
      pretty_name: "Bazaars"
    },
    shipping_collection_services: {
      osm_tags: {
        amenity: "post_office"
      },
      icon: "maki-post",
      pretty_name: "Shipping Collection Services"
    },
    interlock_system: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "interlock_system"
      },
      icon: "maki-shop",
      pretty_name: "Interlock System"
    },
    bus_rentals: {
      osm_tags: {
        amenity: "bus_rental"
      },
      icon: "temaki-bus",
      pretty_name: "Bus Rentals"
    },
    mills: {
      osm_tags: {
        landuse: "industrial",
        industrial: "grinding_mill"
      },
      icon: "maki-watermill",
      pretty_name: "Mills"
    },
    dental_laboratories: {
      osm_tags: {
        healthcare: "laboratory",
        "healthcare:speciality": "dental"
      },
      icon: "fas-vial",
      pretty_name: "Dental Laboratories"
    },
    drama_school: {
      osm_tags: {
        amenity: "trade_school",
        trade: "acting"
      },
      icon: "maki-theatre",
      pretty_name: "Drama School"
    },
    fire_and_water_damage_restoration: {
      osm_tags: {
        craft: "damage_restoration"
      },
      icon: "fas-tools",
      pretty_name: "Fire and Water Damage Restoration"
    },
    truck_gas_station: {
      osm_tags: {
        amenity: "fuel",
        "fuel:diesel": "yes",
        "fuel:HGV": "yes"
      },
      icon: "maki-fuel",
      pretty_name: "Truck Gas Station"
    },
    golf_club: {
      osm_tags: {
        leisure: "golf_course"
      },
      icon: "maki-golf",
      pretty_name: "Golf Club"
    },
    otologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "otolology"
      },
      icon: "maki-doctor",
      pretty_name: "Otologist"
    },
    karate_club: {
      osm_tags: {
        amenity: "dojo",
        sport: "karate"
      },
      icon: "maki-pitch",
      pretty_name: "Karate Club"
    },
    country_house: {
      osm_tags: {
        tourism: "alpine_hut"
      },
      icon: "temaki-cabin",
      pretty_name: "Country House"
    },
    geriatric_medicine: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "geriatric_medicine"
      },
      icon: "maki-doctor",
      pretty_name: "Geriatric Medicine"
    },
    hospitalist: {
      osm_tags: {
        amenity: "hospital"
      },
      icon: "maki-hospital",
      pretty_name: "Hospitalist"
    },
    backflow_services: {
      osm_tags: {
        craft: "plumber",
        "plumber:speciality": "backflow_services"
      },
      icon: "temaki-plumber",
      pretty_name: "Backflow Services"
    },
    immigration_and_naturalization: {
      osm_tags: {
        office: "government",
        government: "immigration"
      },
      icon: "temaki-town_hall",
      pretty_name: "Immigration and Naturalization"
    },
    skylight_installation: {
      osm_tags: {
        craft: "glaziery"
      },
      icon: "temaki-window",
      pretty_name: "Skylight Installation"
    },
    bathtub_and_sink_repairs: {
      osm_tags: {
        craft: "plumber"
      },
      icon: "temaki-plumber",
      pretty_name: "Bathtub and Sink Repairs"
    },
    public_restrooms: {
      osm_tags: {
        amenity: "toilets"
      },
      icon: "temaki-latrine",
      pretty_name: "Public Restrooms"
    },
    pretzels: {
      osm_tags: {
        shop: "bakery",
        cuisine: "pretzel"
      },
      icon: "maki-bakery",
      pretty_name: "Pretzels"
    },
    fidelity_and_surety_bonds: {
      osm_tags: {
        office: "insurance"
      },
      icon: "temaki-briefcase_shield",
      pretty_name: "Fidelity and Surety Bonds"
    },
    artificial_turf: {
      osm_tags: {
        landuse: "grass"
      },
      icon: "temaki-lawn",
      pretty_name: "Artificial Turf"
    },
    spiritual_shop: {
      osm_tags: {
        shop: "religion"
      },
      icon: "maki-shop",
      pretty_name: "Spiritual Shop"
    },
    retina_specialist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "ophthalmology"
      },
      icon: "maki-doctor",
      pretty_name: "Retina Specialist"
    },
    road_contractor: {
      osm_tags: {
        office: "road_construction"
      },
      icon: "maki-suitcase",
      pretty_name: "Road Contractor"
    },
    duplication_services: {
      osm_tags: {
        shop: "copyshop"
      },
      icon: "fas-print",
      pretty_name: "Duplication Services"
    },
    bistro: {
      osm_tags: {
        amenity: "cafe"
      },
      icon: "temaki-hot_drink_cup",
      pretty_name: "Bistro"
    },
    lice_treatment: {
      osm_tags: {
        amenity: "clinic"
      },
      icon: "maki-hospital",
      pretty_name: "Lice Treatment"
    },
    paint_your_own_pottery: {
      osm_tags: {
        shop: "craft"
      },
      icon: "fas-cut",
      pretty_name: "Paint Your Own Pottery"
    },
    indoor_playcenter: {
      osm_tags: {
        leisure: "playground",
        indoor: "yes"
      },
      icon: "maki-playground",
      pretty_name: "Indoor Playcenter"
    },
    tui_na: {
      osm_tags: {
        healthcare: "alternative",
        "healthcare:speciality": "tui_na"
      },
      icon: "maki-spa",
      pretty_name: "Tui Na"
    },
    racing_experience: {
      osm_tags: {
        leisure: "track"
      },
      icon: "temaki-racetrack_oval",
      pretty_name: "Racing Experience"
    },
    diy_foods_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "doityourself"
      },
      icon: "maki-restaurant",
      pretty_name: "Diy Foods Restaurant"
    },
    charter_school: {
      osm_tags: {
        amenity: "school",
        "school:type": "charter"
      },
      icon: "temaki-school",
      pretty_name: "Charter School"
    },
    speech_training: {
      osm_tags: {
        healthcare: "speech_therapist"
      },
      icon: "fas-comment",
      pretty_name: "Speech Training"
    },
    manufacturing_and_industrial_consultant: {
      osm_tags: {
        office: "consulting",
        consulting: "manufacturing_and_industrial"
      },
      icon: "maki-suitcase",
      pretty_name: "Manufacturing and Industrial Consultant"
    },
    hazardous_waste_disposal: {
      osm_tags: {
        amenity: "waste_disposal",
        waste: "hazardous_waste"
      },
      icon: "fas-dumpster",
      pretty_name: "Hazardous Waste Disposal"
    },
    wallpaper_installers: {
      osm_tags: {
        craft: "wallpapering"
      },
      icon: "temaki-brick_trowel",
      pretty_name: "Wallpaper Installers"
    },
    sailing_area: {
      osm_tags: {
        leisure: "marina"
      },
      icon: "temaki-sailboat",
      pretty_name: "Sailing Area"
    },
    exterior_design: {
      osm_tags: {
        craft: "exterior_design"
      },
      icon: "maki-home",
      pretty_name: "Exterior Design"
    },
    tanning_bed: {
      osm_tags: {
        leisure: "tanning_salon"
      },
      icon: "temaki-tanning",
      pretty_name: "Tanning Bed"
    },
    drive_thru_bar: {
      osm_tags: {
        amenity: "bar",
        drive_through: "yes"
      },
      icon: "maki-bar",
      pretty_name: "Drive Thru Bar"
    },
    pet_photography: {
      osm_tags: {
        shop: "photo"
      },
      icon: "fas-camera-retro",
      pretty_name: "Pet Photography"
    },
    fish_farms_and_hatcheries: {
      osm_tags: {
        landuse: "aquaculture"
      },
      icon: "maki-aquarium",
      pretty_name: "Fish Farms and Hatcheries"
    },
    student_union: {
      osm_tags: {
        office: "student_union"
      },
      icon: "maki-college",
      pretty_name: "Student Union"
    },
    display_home_center: {
      osm_tags: {
        shop: "interior_decoration"
      },
      icon: "maki-home",
      pretty_name: "Display Home Center"
    },
    attraction_farm: {
      osm_tags: {
        tourism: "attraction",
        attraction: "farm"
      },
      icon: "maki-star",
      pretty_name: "Attraction Farm"
    },
    snow_removal_service: {
      osm_tags: {
        office: "snow_removal"
      },
      icon: "far-snowflake",
      pretty_name: "Snow Removal Service"
    },
    restaurant_management: {
      osm_tags: {
        office: "restaurant_management"
      },
      icon: "maki-suitcase",
      pretty_name: "Restaurant Management"
    },
    circus_school: {
      osm_tags: {
        amenity: "training",
        training: "circus"
      },
      icon: "maki-amusement-park",
      pretty_name: "Circus School"
    },
    concierge_medicine: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "concierge_medicine"
      },
      icon: "maki-doctor",
      pretty_name: "Concierge Medicine"
    },
    beach_volleyball_court: {
      osm_tags: {
        leisure: "pitch",
        sport: "beachvolleyball"
      },
      icon: "maki-volleyball",
      pretty_name: "Beach Volleyball Court"
    },
    body_contouring: {
      osm_tags: {
        shop: "beauty",
        beauty: "contouring"
      },
      icon: "temaki-beauty_salon",
      pretty_name: "Body Contouring"
    },
    metal_detector_services: {
      osm_tags: {
        office: "metal_detector_services"
      },
      icon: "fas-suitcase",
      pretty_name: "Metal Detector Services"
    },
    environmental_medicine: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "environmental_medicine"
      },
      icon: "maki-doctor",
      pretty_name: "Environmental Medicine"
    },
    b2b_farming: {
      osm_tags: {
        landuse: "farmland"
      },
      icon: "fas-tractor",
      pretty_name: "B2B Farming"
    },
    orchard: {
      osm_tags: {
        landuse: "orchard"
      },
      icon: "maki-park",
      pretty_name: "Orchard"
    },
    holistic_animal_care: {
      osm_tags: {
        amenity: "veterinary",
        veterinary: "alternative"
      },
      icon: "maki-hospital",
      pretty_name: "Holistic Animal Care"
    },
    caricature: {
      osm_tags: {
        shop: "art",
        artwork_type: "caricature"
      },
      icon: "maki-shop",
      pretty_name: "Caricature"
    },
    warehouse_rental_services_and_yards: {
      osm_tags: {
        shop: "storage_rental"
      },
      icon: "temaki-storage_rental",
      pretty_name: "Warehouse Rental Services and Yards"
    },
    antenna_service: {
      osm_tags: {
        shop: "repair",
        repair: "antenna"
      },
      icon: "temaki-antenna",
      pretty_name: "Antenna Service"
    },
    bicycle_path: {
      osm_tags: {
        highway: "cycleway"
      },
      icon: "fas-biking",
      pretty_name: "Bicycle Path"
    },
    houseboat: {
      osm_tags: {
        building: "houseboat"
      },
      icon: "temaki-houseboat",
      pretty_name: "Houseboat"
    },
    cable_car_service: {
      osm_tags: {
        shop: "repair",
        repair: "aerialway"
      },
      icon: "#temaki-gondola_lift",
      pretty_name: "Cable Car Service"
    },
    stress_management_services: {
      osm_tags: {
        healthcare: "therapist",
        "healthcare:speciality": "stress_management"
      },
      icon: "maki-doctor",
      pretty_name: "Stress Management Services"
    },
    turnery: {
      osm_tags: {
        craft: "carpenter"
      },
      icon: "maki-logging",
      pretty_name: "Turnery"
    },
    supper_club: {
      osm_tags: {
        amenity: "restaurant"
      },
      icon: "maki-restaurant",
      pretty_name: "Supper Club"
    },
    axe_throwing: {
      osm_tags: {
        leisure: "sports_centre",
        sport: "axe_throwing"
      },
      icon: "maki-pitch",
      pretty_name: "Axe Throwing"
    },
    concept_shop: {
      osm_tags: {
        shop: "department_store"
      },
      icon: "maki-shop",
      pretty_name: "Concept Shop"
    },
    bicycle_sharing_location: {
      osm_tags: {
        amenity: "bicycle_rental",
        bicycle_rental: "docking_station"
      },
      icon: "temaki-bicycle_rental",
      pretty_name: "Bicycle Sharing Location"
    },
    pedicab_service: {
      osm_tags: {
        amenity: "taxi",
        taxi: "pedicab"
      },
      icon: "fas-taxi",
      pretty_name: "Pedicab Service"
    },
    major_airports: {
      osm_tags: {
        aeroway: "aerodrome",
        aerodrome: "international"
      },
      icon: "temaki-airport",
      pretty_name: "Major Airport"
    },
    fuel_dock: {
      osm_tags: {
        "seamark:small_craft_facility:category": "fuel_station",
        "seamark:type": "small_craft_facility",
        waterway: "fuel"
      },
      icon: "maki-fuel",
      pretty_name: "Fuel Dock"
    },
    fish_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "seafood"
      },
      icon: "maki-restaurant-seafood",
      pretty_name: "Fish Restaurant"
    },
    national_museum: {
      osm_tags: {
        tourism: "museum",
        museum: "national"
      },
      icon: "temaki-museum",
      pretty_name: "National Museum"
    },
    friterie: {
      osm_tags: {
        amenity: "fast_food",
        cuisine: "friterie"
      },
      icon: "fas-drumstick-bite",
      pretty_name: "Friterie"
    },
    club_crawl: {
      osm_tags: {
        office: "guide",
        guide: "club_crawl",
        amenity: "nightclub"
      },
      icon: "fas-cocktail",
      pretty_name: "Club Crawl"
    },
    american_football_field: {
      osm_tags: {
        leisure: "pitch",
        sport: "american_football"
      },
      icon: "maki-american-football",
      pretty_name: "American Football Field"
    },
    motorcycle_parking: {
      osm_tags: {
        amenity: "motorcycle_parking"
      },
      icon: "fas-motorcycle",
      pretty_name: "Motorcycle Parking"
    },
    snuggle_service: {
      osm_tags: {
        amenity: "love_hotel"
      },
      icon: "maki-heart",
      pretty_name: "Snuggle Service"
    },
    pharmaceutical_products_wholesaler: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "pharmaceuticals"
      },
      icon: "maki-warehouse",
      pretty_name: "Pharmaceutical Products Wholesaler"
    },
    electronic_parts_supplier: {
      osm_tags: {
        shop: "electronics"
      },
      icon: "fas-plug",
      pretty_name: "Electronic Parts Supplier"
    },
    public_market: {
      osm_tags: {
        amenity: "marketplace"
      },
      icon: "maki-shop",
      pretty_name: "Public Market"
    },
    cards_and_stationery_store: {
      osm_tags: {
        shop: "stationery"
      },
      icon: "fas-paperclip",
      pretty_name: "Cards and Stationery Store"
    },
    audiovisual_equipment_rental: {
      osm_tags: {
        shop: "rental",
        rental: "av_equipment"
      },
      icon: "fas-video",
      pretty_name: "Audiovisual Equipment Rental"
    },
    marble_and_granite_professionals: {
      osm_tags: {
        craft: "stonemason"
      },
      icon: "temaki-brick_trowel",
      pretty_name: "Marble and Granite Professionals"
    },
    car_broker: {
      osm_tags: {
        shop: "car"
      },
      icon: "maki-car",
      pretty_name: "Car Broker"
    },
    coworking_space: {
      osm_tags: {
        amenity: "coworking_space"
      },
      icon: "fas-laptop",
      pretty_name: "Coworking Space"
    },
    telecommunications: {
      osm_tags: {
        office: "telecommunication"
      },
      icon: "maki-telephone",
      pretty_name: "Telecommunications"
    },
    park_and_rides: {
      osm_tags: {
        amenity: "parking",
        park_ride: "yes"
      },
      icon: "temaki-sign_and_car",
      pretty_name: "Park and Rides"
    },
    business_records_storage_and_management: {
      osm_tags: {
        office: "document_storage"
      },
      icon: "maki-suitcase",
      pretty_name: "Business Records Storage and Management"
    },
    metals: {
      osm_tags: {
        industrial: "scrap_yard",
        landuse: "industrial"
      },
      icon: "temaki-junk_car",
      pretty_name: "Metals"
    },
    ethical_grocery: {
      osm_tags: {
        shop: "supermarket"
      },
      icon: "maki-grocery",
      pretty_name: "Ethical Grocery"
    },
    dental_supply_store: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "dental_supply"
      },
      icon: "maki-dentist",
      pretty_name: "Dental Supply Store"
    },
    embroidery_and_crochet: {
      osm_tags: {
        shop: "sewing"
      },
      icon: "temaki-needle_and_spool",
      pretty_name: "Embroidery and Crochet"
    },
    quarries: {
      osm_tags: {
        landuse: "quarry"
      },
      icon: "temaki-pick_hammer",
      pretty_name: "Quarries"
    },
    ophthalmologist: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "ophthalmology"
      },
      icon: "fas-eye",
      pretty_name: "Ophthalmologist"
    },
    mobile_phone_repair: {
      osm_tags: {
        shop: "repair",
        repair: "mobile_phone"
      },
      icon: "fas-mobile-alt",
      pretty_name: "Mobile Phone Repair"
    },
    it_support_snd_service: {
      osm_tags: {
        service: "it_support"
      },
      icon: "fas-laptop",
      pretty_name: "IT Support and Service"
    },
    b2b_tractor_dealers: {
      osm_tags: {
        shop: "tractor"
      },
      icon: "fas-tractor",
      pretty_name: "B2B Tractor Dealers"
    },
    electricity_supplier: {
      osm_tags: {
        office: "energy_supplier"
      },
      icon: "temaki-briefcase_bolt",
      pretty_name: "Electricity Supplier"
    },
    personal_care_service: {
      osm_tags: {
        shop: "beauty"
      },
      icon: "temaki-beauty_salon",
      pretty_name: "Personal Care Service"
    },
    social_and_human_services: {
      osm_tags: {
        amenity: "social_facility"
      },
      icon: "temaki-social_facility",
      pretty_name: "Social and Human Services"
    },
    b2b_furniture_and_housewares: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "furniture"
      },
      icon: "fas-couch",
      pretty_name: "B2B Furniture and Housewares"
    },
    rowing_club: {
      osm_tags: {
        club: "sport",
        sport: "rowing"
      },
      icon: "temaki-boat",
      pretty_name: "Rowing Club"
    },
    washer_and_dryer_repair_service: {
      osm_tags: {
        shop: "repair",
        repair: "washer_and_dryer"
      },
      icon: "temaki-laundry",
      pretty_name: "Washer and Dryer Repair Service"
    },
    tableware_supplier: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "tableware"
      },
      icon: "maki-restaurant",
      pretty_name: "Tableware Supplier"
    },
    patent_law: {
      osm_tags: {
        office: "lawyer",
        lawyer: "patent_law"
      },
      icon: "fas-balance-scale",
      pretty_name: "Patent Law"
    },
    apartment_agent: {
      osm_tags: {
        office: "property_management"
      },
      icon: "temaki-real_estate_agency",
      pretty_name: "Apartment Agent"
    },
    corporate_gift_supplier: {
      osm_tags: {
        shop: "wholesale",
        wholsale: "gift"
      },
      icon: "maki-gift",
      pretty_name: "Corporate Gift Supplier"
    },
    tabac: {
      osm_tags: {
        shop: "tobacco"
      },
      icon: "temaki-pipe",
      pretty_name: "Tabac"
    },
    promotional_products_and_services: {
      osm_tags: {
        office: "promotional"
      },
      icon: "fas-suitcase",
      pretty_name: "Promotional Products and Services"
    },
    mobile_home_repair: {
      osm_tags: {
        shop: "repair",
        repair: "mobile_home"
      },
      icon: "temaki-tools",
      pretty_name: "Mobile Home Repair"
    },
    digitizing_services: {
      osm_tags: {
        office: "digitizing_services"
      },
      icon: "fas-print",
      pretty_name: "Digitizing Services"
    },
    board_of_education_offices: {
      osm_tags: {
        office: "educational_institution"
      },
      icon: "maki-school",
      pretty_name: "Board Of Education Offices"
    },
    art_restoration_service: {
      osm_tags: {
        craft: "art_restoration"
      },
      icon: "maki-art-gallery",
      pretty_name: "Art Restoration Service"
    },
    forklift_dealer: {
      osm_tags: {
        shop: "forklift"
      },
      icon: "temaki-bulldozer",
      pretty_name: "Forklift Dealer"
    },
    home_organization: {
      osm_tags: {
        shop: "houseware"
      },
      icon: "fas-blender",
      pretty_name: "Home Organization"
    },
    civil_rights_lawyers: {
      osm_tags: {
        office: "lawyer",
        lawyer: "civil_rights"
      },
      icon: "fas-balance-scale",
      pretty_name: "Civil Rights Lawyers"
    },
    industrial_cleaning_services: {
      osm_tags: {
        craft: "cleaning"
      },
      icon: "temaki-vacuum",
      pretty_name: "Industrial Cleaning Services"
    },
    scale_supplier: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "scale"
      },
      icon: "fas-balance-scale",
      pretty_name: "Scale Supplier"
    },
    irrigation: {
      osm_tags: {
        office: "irrigation"
      },
      icon: "maki-water",
      pretty_name: "Irrigation"
    },
    mexican_grocery_store: {
      osm_tags: {
        shop: "convenience",
        cuisine: "mexican"
      },
      icon: "fas-shopping-basket",
      pretty_name: "Mexican Grocery Store"
    },
    furniture_rental_service: {
      osm_tags: {
        shop: "rental",
        rental: "furniture"
      },
      icon: "fas-couch",
      pretty_name: "Furniture Rental Service"
    },
    furniture_accessory_store: {
      osm_tags: {
        shop: "furniture"
      },
      icon: "fas-couch",
      pretty_name: "Furniture Accessory Store"
    },
    scientific_laboratories: {
      osm_tags: {
        amenity: "laboratory"
      },
      icon: "fas-vial",
      pretty_name: "Scientific Laboratories"
    },
    metro_station: {
      osm_tags: {
        public_transport: "station",
        railway: "station",
        station: "subway",
        subway: "yes"
      },
      icon: "temaki-subway",
      pretty_name: "Metro Station"
    },
    memorial_park: {
      osm_tags: {
        leisure: "park",
        historic: "memorial"
      },
      icon: "temaki-tree_and_bench",
      pretty_name: "Memorial Park"
    },
    sand_and_gravel_supplier: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "sand_and_gravel"
      },
      icon: "temaki-pick_hammer",
      pretty_name: "Sand and Gravel Supplier"
    },
    workers_compensation_law: {
      osm_tags: {
        office: "lawyer",
        lawyer: "social_security"
      },
      icon: "fas-balance-scale",
      pretty_name: "Workers Compensation Law"
    },
    wine_tours: {
      osm_tags: {
        office: "guide",
        guide: "wine"
      },
      icon: "fas-wine-bottle",
      pretty_name: "Wine Tours"
    },
    hydroponic_gardening: {
      osm_tags: {
        shop: "garden_centre",
        product: "hydroponics"
      },
      icon: "maki-garden",
      pretty_name: "Hydroponic Gardening"
    },
    pediatric_orthopedic_surgery: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "pediatric_orthopedic_surgery"
      },
      icon: "maki-doctor",
      pretty_name: "Pediatric Orthopedic Surgery"
    },
    private_jet_charters: {
      osm_tags: {
        office: "aeroplane_charter"
      },
      icon: "maki-airport",
      pretty_name: "Private Jet Charters"
    },
    home_and_rental_insurance: {
      osm_tags: {
        office: "insurance",
        insurance: "home"
      },
      icon: "temaki-briefcase_shield",
      pretty_name: "Home and Rental Insurance"
    },
    plasterer: {
      osm_tags: {
        craft: "plasterer"
      },
      icon: "temaki-brick_trowel",
      pretty_name: "Plasterer"
    },
    cidery: {
      osm_tags: {
        craft: "cidery"
      },
      icon: "temaki-storage_fermenter",
      pretty_name: "Cidery"
    },
    ayurveda: {
      osm_tags: {
        healthcare: "alternative",
        "healthcare:speciality": "ayurveda"
      },
      icon: "maki-spa",
      pretty_name: "Ayurveda"
    },
    vegan_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        "diet:vegan": "only",
        cuisine: "vegan"
      },
      icon: "maki-restaurant",
      pretty_name: "Vegan Restaurant"
    },
    elder_care_planning: {
      osm_tags: {
        office: "elder_care_planning"
      },
      icon: "maki-suitcase",
      pretty_name: "Elder Care Planning"
    },
    holiday_decorating: {
      osm_tags: {
        shop: "interior_decoration",
        interior_decoration: "holiday"
      },
      icon: "maki-star",
      pretty_name: "Holiday Decorating"
    },
    pediatric_oncology: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "pediatric_oncology"
      },
      icon: "maki-doctor",
      pretty_name: "Pediatric Oncology"
    },
    indian_grocery_store: {
      osm_tags: {
        shop: "supermarket",
        cuisine: "indian"
      },
      icon: "maki-grocery",
      pretty_name: "Indian Grocery Store"
    },
    packaging_contractors_and_service: {
      osm_tags: {
        office: "packaging_contractor"
      },
      icon: "fas-box-open",
      pretty_name: "Packaging Contractors and Service"
    },
    taekwondo_club: {
      osm_tags: {
        club: "sport",
        sport: "taekwondo"
      },
      icon: "maki-pitch",
      pretty_name: "Taekwondo Club"
    },
    law_schools: {
      osm_tags: {
        amenity: "university",
        education: "law"
      },
      icon: "temaki-school",
      pretty_name: "Law Schools"
    },
    shutters: {
      osm_tags: {
        shop: "shutter"
      },
      icon: "temaki-window",
      pretty_name: "Shutters"
    },
    trailer_repair: {
      osm_tags: {
        shop: "repair",
        repair: "trailer"
      },
      icon: "temaki-camper_trailer",
      pretty_name: "Trailer Repair"
    },
    balloon_services: {
      osm_tags: {
        shop: "party"
      },
      icon: "temaki-balloon",
      pretty_name: "Balloon Services"
    },
    mobile_dent_repair: {
      osm_tags: {
        shop: "car_repair"
      },
      icon: "maki-car-repair",
      pretty_name: "Mobile Dent Repair"
    },
    pharmacy_schools: {
      osm_tags: {
        amenity: "college",
        education: "pharmacy"
      },
      icon: "maki-college",
      pretty_name: "Pharmacy Schools"
    },
    coin_dealers: {
      osm_tags: {
        shop: "collector",
        collector: "coins"
      },
      icon: "fas-coins",
      pretty_name: "Coin Dealers"
    },
    personal_shopper: {
      osm_tags: {
        office: "personal_shopper"
      },
      icon: "fas-shopping-basket",
      pretty_name: "Personal Shopper"
    },
    brasserie: {
      osm_tags: {
        amenity: "restaurant,pub",
        cuisine: "french"
      },
      icon: "maki-restaurant",
      pretty_name: "Brasserie"
    },
    tax_office: {
      osm_tags: {
        amenity: "tax_advisor"
      },
      icon: "fas-suitcase",
      pretty_name: "Tax Office"
    },
    casting_molding_and_machining: {
      osm_tags: {
        craft: "metal_casting"
      },
      icon: "temaki-tools",
      pretty_name: "Casting Molding and Machining"
    },
    cosmetic_products_manufacturer: {
      osm_tags: {
        man_made: "works",
        product: "cosmetics"
      },
      icon: "temaki-lipstick",
      pretty_name: "Cosmetic Products Manufacturer"
    },
    hydrotherapy: {
      osm_tags: {
        healthcare: "alternative_medicine",
        "healthcare:speciality": "hydrotherapy"
      },
      icon: "maki-water",
      pretty_name: "Hydrotherapy"
    },
    animal_physical_therapy: {
      osm_tags: {
        amenity: "veterinary",
        veterinary: "physiotherapist"
      },
      icon: "temaki-veterinary_care",
      pretty_name: "Animal Physical Therapy"
    },
    pediatric_surgery: {
      osm_tags: {
        healthcare: "doctor",
        "healthcare:speciality": "pediatric_surgery"
      },
      icon: "maki-doctor",
      pretty_name: "Pediatric Surgery"
    },
    popcorn_shop: {
      osm_tags: {
        shop: "confectionery",
        cuisine: "popcorn"
      },
      icon: "maki-confectionery",
      pretty_name: "Popcorn Shop"
    },
    indian_sweets_shop: {
      osm_tags: {
        shop: "confectionery",
        cuisine: "indian"
      },
      icon: "maki-confectionery",
      pretty_name: "Indian Sweets Shop"
    },
    forestry_consultants: {
      osm_tags: {
        office: "forestry"
      },
      icon: "maki-suitcase",
      pretty_name: "Forestry Consultants"
    },
    wholesale_florist: {
      osm_tags: {
        shop: "wholesale",
        wholesale: "flowers"
      },
      icon: "maki-florist",
      pretty_name: "Wholesale Florist"
    },
    go_kart_track: {
      osm_tags: {
        highway: "raceway",
        sport: "karting"
      },
      icon: "temaki-racetrack_oval",
      pretty_name: "Karting Racetrack"
    },
    juvenile_detention_center: {
      osm_tags: {
        amenity: "prison;social_facility",
        social_facility: "juvenile_detention_centre"
      },
      icon: "maki-prison",
      pretty_name: "Juvenile Detention Center"
    },
    karaoke_rental: {
      osm_tags: {
        shop: "rental",
        rental: "karaoke"
      },
      icon: "maki-karaoke",
      pretty_name: "Karaoke Rental"
    },
    apiaries_and_beekeepers: {
      osm_tags: {
        craft: "beekeeper"
      },
      icon: "maki-farm",
      pretty_name: "Apiaries and Beekeepers"
    },
    sheet_metal: {
      osm_tags: {
        shop: "metal"
      },
      icon: "fas-tools",
      pretty_name: "Sheet Metal"
    },
    hockey_equipment: {
      osm_tags: {
        shop: "sports",
        sport: "hockey"
      },
      icon: "temaki-field_hockey",
      pretty_name: "Hockey Equipment"
    },
    game_truck_rental: {
      osm_tags: {
        shop: "rental",
        rental: "game_truck"
      },
      icon: "maki-gaming",
      pretty_name: "Game Truck Rental"
    },
    meat_restaurant: {
      osm_tags: {
        amenity: "restaurant",
        cuisine: "meat"
      },
      icon: "maki-restaurant-bbq",
      pretty_name: "Meat Restaurant"
    },
    goldsmith: {
      osm_tags: {
        craft: "goldsmith"
      },
      icon: "maki-jewelry-store",
      pretty_name: "Goldsmith"
    },
    truck_repair_and_services_for_businesses: {
      osm_tags: {
        shop: "truck_repair"
      },
      icon: "maki-car-repair",
      pretty_name: "Truck Repair and Services For Businesses"
    },
    piano_bar: {
      osm_tags: {
        amenity: "bar",
        live_music: "yes",
        music_genre: "piano"
      },
      icon: "maki-bar",
      pretty_name: "Piano Bar"
    },
    railway_ticket_agent: {
      osm_tags: {
        shop: "ticket",
        ticket: "railway"
      },
      icon: "temaki-train_bullet",
      pretty_name: "Railway Ticket Agent"
    },
    cabaret: {
      osm_tags: {
        amenity: "theatre",
        "theatre:genre": "cabaret"
      },
      icon: "fas-music",
      pretty_name: "Cabaret"
    },
    pet_transportation: {
      osm_tags: {
        office: "pet_transportation"
      },
      icon: "maki-veterinary",
      pretty_name: "Pet Transportation"
    },
    sledding_rental: {
      osm_tags: {
        shop: "rental",
        rental: "sledding"
      },
      icon: "temaki-sledding",
      pretty_name: "Sledding Rental"
    },
    stocking: {
      osm_tags: {
        shop: "sewing"
      },
      icon: "temaki-needle_and_spool",
      pretty_name: "Stocking"
    },
    chimney_cake_shop: {
      osm_tags: {
        shop: "pastry",
        cuisine: "chimney_cake"
      },
      icon: "maki-bakery",
      pretty_name: "Chimney Cake Shop"
    },
    children_hall: {
      osm_tags: {
        amenity: "childcare"
      },
      icon: "fas-child-reaching",
      pretty_name: "Children Hall"
    },
    light_rail_and_subway_stations: {
      osm_tags: {
        public_transport: "station",
        railway: "station"
      },
      icon: "temaki-light_rail",
      pretty_name: "Light Rail and Subway Stations"
    },
    lawn_bowling_club: {
      osm_tags: {
        club: "sport",
        sport: "lawn_bowling"
      },
      icon: "maki-pitch",
      pretty_name: "Lawn Bowling Club"
    },
    electrical_consultant: {
      osm_tags: {
        craft: "electrician"
      },
      icon: "fas-tools",
      pretty_name: "Electrical Consultant"
    },
    marching_band: {
      osm_tags: {
        leisure: "bandstand"
      },
      icon: "fas-music",
      pretty_name: "Marching Band"
    },
    builder: {
      osm_tags: {
        craft: "builder"
      },
      icon: "fas-tools",
      pretty_name: "Builder"
    }
  };

  // src/fetchAddresses.js
  async function getNominatimAddress(lat, lon) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=geocodejson`;
    const response = await fetch(url, {
      headers: {
        // as per https://nominatim.org/release-docs/latest/api/Reverse/
        // The API respects Accept-Language headers, and will send localized data for the user's language
        // To standardize this, we're overriding the header, so we get the address as it appears at the location
        "Accept-Language": "*"
      }
    });
    const data = await response.json();
    if (data.error) return {};
    const geocoding = data.features[0].properties.geocoding;
    const address = {};
    if (geocoding.housenumber) address["addr:housenumber"] = geocoding.housenumber;
    if (geocoding.street) address["addr:street"] = geocoding.street;
    if (geocoding.postcode) address["addr:postcode"] = geocoding.postcode;
    if (geocoding.city) address["addr:city"] = geocoding.city;
    if (geocoding.country) address["addr:country"] = geocoding.country;
    return address;
  }

  // src/overture2osm.js
  function getOSMCategoryTags(overtureCategory) {
    if (overture2osm_default[overtureCategory] === void 0) {
      console.warn(`Category ${overtureCategory} not found in dictionary!`);
      return null;
    }
    return overture2osm_default[overtureCategory].osm_tags;
  }
  async function overtureToOSMData(feature, processAddress) {
    const props = feature.properties;
    let osm_tags = {};
    const primary_category = props?.categories?.primary;
    if (primary_category && primary_category !== "structure_and_geography") {
      Object.assign(osm_tags, getOSMCategoryTags(primary_category));
    } else {
      console.warn(`No primary category in feature with ID ${feature.id}`);
    }
    if (props?.names?.primary) {
      osm_tags.name = props.names.primary;
    } else {
      console.warn(`No primary name in feature with ID ${feature.id}`);
    }
    if (props?.brand?.names?.primary) {
      osm_tags.brand = props.brand.names.primary;
    }
    if (props?.phones) osm_tags["contact:phone"] = props.phones.join(";");
    if (props?.websites) osm_tags["contact:website"] = props.websites.join(";");
    if (props?.emails) osm_tags["contact:email"] = props.emails.join(";");
    if (props?.socials) {
      for (const url of props.socials) {
        const website_name = url.split(".")[1];
        osm_tags[`contact:${website_name}`] = url;
      }
    }
    if (props?.sources) {
      for (const source of props.sources) {
        if (source.record_id) osm_tags.source = `Overture/${source.dataset}/${source.record_id}`;
        else osm_tags.source = `Overture/${source.dataset}`;
      }
    }
    if (processAddress) {
      const lat = feature.geometry.coordinates[1];
      const lon = feature.geometry.coordinates[0];
      Object.assign(osm_tags, await getNominatimAddress(lat, lon));
      if (props?.addresses?.[0]) osm_tags["addr:full"] = props.addresses[0].freeform;
    }
    return osm_tags;
  }
})();