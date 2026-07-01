export type CitySlug =
  | 'redding'
  | 'anderson'
  | 'shasta-lake'
  | 'palo-cedro'
  | 'bella-vista'
  | 'red-bluff'
  | 'millville'
  | 'cottonwood'
  | 'lake-california'
  | 'igo'
  | 'happy-valley';

export interface CityProfile {
  slug: CitySlug;
  name: string;
  county: string;
  distanceFromRedding: string;
  intro: string;
  localRealities: string[];
  commonCalls: string[];
  waterProvider: string;
}

export const cityProfiles: Record<CitySlug, CityProfile> = {
  redding: {
    slug: 'redding',
    waterProvider: 'City of Redding Water Utility',
    name: 'Redding',
    county: 'Shasta County',
    distanceFromRedding: 'Headquarters',
    intro:
      "Redding is home base. We've worked on plumbing systems in nearly every neighborhood — Enterprise, East Redding, Mary Lake, the Garden Tract, Quartz Hill, and out toward Shasta Dam. The city's housing stock is mixed: post-war mid-century homes with galvanized supply lines, '80s and '90s tract homes with copper, and newer PEX builds out by Stillwater. Each one has its own plumbing personality.",
    localRealities: [
      "The City of Redding classifies its water as soft (drawn ~77% from Sacramento River and Whiskeytown surface water, ~23% from groundwater that runs moderately harder) — but sediment buildup is still a common cause of premature water heater failure in older homes.",
      "Summer heat (110°F+ stretches) accelerates wear on outdoor PVC supply lines and irrigation backflow assemblies.",
      "Older Redding homes (pre-1980) often have galvanized steel supply pipes that are reaching end of life — corrosion, pinhole leaks, and pressure loss are the giveaways.",
    ],
    commonCalls: [
      'Water heater replacement (sediment failure)',
      'Slab leaks in older Enterprise / East Redding tract homes',
      'Drain cleaning — kitchen and main line',
      'Repipe estimates for 1960s–1970s galvanized homes',
    ],
  },

  anderson: {
    slug: 'anderson',
    waterProvider: 'City of Anderson (municipal wells)',
    name: 'Anderson',
    county: 'Shasta County',
    distanceFromRedding: '10 minutes south on I-5',
    intro:
      "Anderson sits just south of Redding on I-5, a 10-minute drive from our base, so we run service here every week. The town has a wide mix: older single-family homes near downtown, newer subdivisions off Riverside Ave, manufactured-home communities, and rural parcels stretching out toward Happy Valley and Cottonwood. Plumbing here ranges from city water to private wells depending on where you are, and that one detail changes how we approach almost every job. A water heater in a 1960s downtown bungalow gets handled differently than one in a manufactured home off Deschutes Road or a well-fed house out toward Cottonwood Creek.",
    localRealities: [
      "Anderson runs on municipal groundwater wells, which tends to carry more mineral content than surface water. That hardness is one of the most common reasons we see water heaters scale up and fail early, and why tankless units in this area benefit from periodic descaling.",
      "Properties closer to Cottonwood Creek and rural Anderson are often on well water and septic, so pressure tanks, well pumps, and water-softener systems are part of the picture, not just the fixtures inside the house.",
      "Manufactured and mobile homes have their own plumbing standards. Supply lines, P-traps, and water heater closets need to be handled with the right materials, and a standard tank swap is rarely a true swap.",
      "The Sacramento River corridor means many properties have outbuildings or irrigation systems that need backflow protection.",
    ],
    commonCalls: [
      'Water heater repair and replacement (hard-water sediment failure)',
      'Tankless water heater installation and descaling',
      'Well pump and pressure tank service',
      'Manufactured home water heater swap-outs',
      'Sewer line repair and septic transition issues',
      'Drain cleaning, kitchen and main line',
    ],
  },

  'shasta-lake': {
    slug: 'shasta-lake',
    waterProvider: 'City of Shasta Lake municipal water',
    name: 'Shasta Lake',
    county: 'Shasta County',
    distanceFromRedding: '10 minutes north on I-5',
    intro:
      "Shasta Lake (the city) is just north of Redding, anchored by Shasta Dam and the lake recreation economy. We see two distinct types of homes here: longtime residential properties for the dam and powerhouse workforce, and seasonal cabins or rentals on the lake side. Each has different plumbing needs — and different urgency when something goes wrong.",
    localRealities: [
      "Lake-side properties often sit unoccupied for stretches, so when something fails (water heater leak, slab leak, frozen hose bib in winter), the damage can compound before anyone notices.",
      "Older housing near the original townsite (Project City, Central Valley) has aging supply lines and water heaters that are due for replacement.",
      "Some rural properties on Lakehead-adjacent land run on wells — pressure systems and pump issues come up.",
    ],
    commonCalls: [
      'Vacation-rental water heater failures',
      'Frozen or burst hose bibs in winter',
      'Slab leak detection in 1970s–1980s homes',
      'Drain backups in seasonal cabins',
    ],
  },

  'palo-cedro': {
    slug: 'palo-cedro',
    waterProvider: 'Bella Vista Water District or a private well, depending on location',
    name: 'Palo Cedro',
    county: 'Shasta County',
    distanceFromRedding: '15 minutes east on Highway 44',
    intro:
      "Palo Cedro is the unincorporated community just east of Redding — large-lot residential, horse properties, and small ranches. Many homes here are on private wells and septic systems rather than city utilities, which changes the plumbing landscape significantly. We treat these jobs differently than in-town work.",
    localRealities: [
      "Private wells mean homeowners are responsible for their own water quality, pressure, and storage — pressure tank issues, sediment, and well-pump failures all show up as 'no water' or 'low pressure' calls.",
      "Septic-connected homes need careful drain handling: harsh chemical cleaners and grease can damage the system. We use mechanical augering, not caustics.",
      "Outdoor plumbing — barns, livestock waterers, irrigation — adds complexity that suburban Redding jobs don't have.",
    ],
    commonCalls: [
      'Well pump and pressure tank replacements',
      'Septic-safe drain cleaning',
      'Water softener and filtration installs',
      'Yard hydrant and outbuilding plumbing',
    ],
  },

  'bella-vista': {
    slug: 'bella-vista',
    waterProvider: 'Bella Vista Water District',
    name: 'Bella Vista',
    county: 'Shasta County',
    distanceFromRedding: '15 minutes northeast',
    intro:
      "Bella Vista is rural Shasta County, about 15 minutes northeast of our Redding shop: large parcels, ranchettes, and homes spread out across the foothills. Wells, septic, and outbuildings are common out here, and most homes draw from the Bella Vista Water District or a private well. Plumbing problems in Bella Vista often involve longer service lines, more outdoor exposure, and well-system components that most in-town plumbers don't touch as often. When a pipe bursts or a sewer line backs up on a property like this, the run from the meter to the house can be long, so finding the actual failure point is half the job.",
    localRealities: [
      "Long well-to-house and meter-to-house service runs mean a leak or a burst line can be 50 or more feet from the house, so detection takes more than a stethoscope on a slab. We trace the line to the real failure point before we dig.",
      "Cold snaps in the foothills hit harder than in town. Exposed pipes, hose bibs, and pump houses are the first things to freeze and burst here, which is why we see a wave of burst-pipe calls after the first hard freeze.",
      "Sewer and septic lines on large lots run long and often cross tree roots and uneven ground, so a slow or backed-up drain out here is frequently a main-line or sewer-line problem, not just a clogged fixture.",
      "Many properties have a mix of decades-old original plumbing and later additions or remodels, which creates compatibility issues between galvanized, copper, and PEX that show up as leaks at the transitions.",
    ],
    commonCalls: [
      'Burst pipe repair after winter freezes',
      'Sewer line repair and main-line backups on large lots',
      'Underground service-line leak detection',
      'Well-system pressure problems and pump-house repairs',
      'Water heater repair and replacement',
      'Mixed-material (galvanized to PEX) transition leaks',
    ],
  },

  'red-bluff': {
    slug: 'red-bluff',
    waterProvider: 'City of Red Bluff (municipal wells)',
    name: 'Red Bluff',
    county: 'Tehama County',
    distanceFromRedding: '30 minutes south on I-5',
    intro:
      "Red Bluff is the Tehama County seat, about 30 miles south of Redding on I-5. The historic downtown dates to the 1850s — meaning some of the oldest housing stock we service. Outside the historic core, you have a mix of mid-century residential and ranches stretching west toward the coast range and east toward the Cascade foothills.",
    localRealities: [
      "Historic downtown homes (pre-1920) frequently have a layered plumbing history: original cast iron drains, galvanized supply, partial copper retrofits, and modern fixtures all in the same house. Every repair has to account for what's behind the wall.",
      "Summers in Red Bluff are some of the hottest in California — the summer heat is hard on water heater flue and venting and on outdoor PVC supply lines.",
      "Ranch properties west of town run on wells and septic, with longer service lines and more outdoor plumbing exposure.",
    ],
    commonCalls: [
      'Cast iron drain replacements in historic homes',
      'Galvanized-to-copper repipe sections',
      'Water heater flue and venting issues',
      'Outdoor and ranch plumbing repairs',
    ],
  },

  millville: {
    slug: 'millville',
    waterProvider: 'Private well or local water service, depending on location',
    name: 'Millville',
    county: 'Shasta County',
    distanceFromRedding: 'About 20 minutes east of Redding',
    intro:
      "Millville is a small rural community in eastern Shasta County, out past Palo Cedro toward the foothills. It's large-parcel country — ranches, ranchettes, and spread-out homes rather than tract subdivisions. A lot of properties here run on private wells and septic systems, with longer service lines and outbuildings, so the plumbing looks different than it does in town and most in-town plumbers don't work on it as often.",
    localRealities: [
      "Many Millville properties are on private wells, so 'no water' or 'low pressure' calls often trace back to a pressure tank, well line, or pump rather than anything inside the house.",
      "Septic-connected homes need careful drain handling. Harsh chemical cleaners can damage the system, so we clear lines mechanically rather than with caustics.",
      "Foothill cold snaps freeze exposed pipes, hose bibs, and pump houses before town does, which is when we see a wave of burst-line calls.",
      "Longer meter-to-house and well-to-house service runs mean a leak can be well away from the house, so we trace the line to the real failure point before digging.",
    ],
    commonCalls: [
      'Well pressure tank and service-line problems',
      'Septic-safe drain cleaning',
      'Burst pipe repair after winter freezes',
      'Water heater repair and replacement',
      'Yard hydrant and outbuilding plumbing',
    ],
  },

  cottonwood: {
    slug: 'cottonwood',
    waterProvider: 'Private well or local water service, depending on location',
    name: 'Cottonwood',
    county: 'Shasta County',
    distanceFromRedding: 'About 20 minutes south on I-5',
    intro:
      "Cottonwood sits at the south end of Shasta County near the Tehama County line and Cottonwood Creek, just south of Anderson on I-5. It's a mix: a small town center plus a lot of surrounding ranches and rural parcels. Closer in, homes are on local water service; out toward the creek and the county line, many are on wells and septic. That one detail changes how we approach almost every job here.",
    localRealities: [
      "Rural Cottonwood parcels are commonly on well water and septic, so pressure tanks, well pumps, and septic-safe drain work are part of the picture, not just the fixtures inside.",
      "Summers at the south end of the valley run hot, which is hard on water heater venting and on outdoor PVC supply and irrigation lines.",
      "Properties near Cottonwood Creek and the county line often have long sewer or main-line runs, so a recurring backup is frequently a main-line problem rather than a single clogged fixture.",
      "Older homes and later additions sometimes mix galvanized, copper, and PEX, and leaks tend to show up where those materials transition.",
    ],
    commonCalls: [
      'Well pump and pressure tank service',
      'Septic-safe drain cleaning',
      'Sewer line and main-line backups on rural lots',
      'Water heater repair and replacement',
      'Outdoor, irrigation, and outbuilding plumbing',
    ],
  },

  'lake-california': {
    slug: 'lake-california',
    waterProvider: 'Community water system or private well, depending on the property',
    name: 'Lake California',
    county: 'Tehama County',
    distanceFromRedding: 'About 25 minutes south, east of Cottonwood',
    intro:
      "Lake California is a residential community in Tehama County, on the east side of the Sacramento River near Cottonwood and south of Redding. It's a planned subdivision of single-family homes rather than ranch country, with lots ranging from established older builds to newer construction. We serve it the same way we serve the rest of the south end, with same-day scheduling during business hours and upfront pricing.",
    localRealities: [
      "Home ages across the community vary, so we see a mix of pipe materials. Leaks often turn up where older galvanized or copper meets newer PEX.",
      "Tehama County summers are some of the hottest in the state, which is hard on water heater flue and venting and on outdoor supply lines.",
      "Properties along the river corridor and the rural edges of the community sometimes add irrigation and outdoor plumbing that a standard in-town home doesn't have.",
    ],
    commonCalls: [
      'Water heater repair and replacement',
      'Drain cleaning, kitchen and main line',
      'Leak detection and repair',
      'Repipe sections at material transitions',
      'Fixture installation and replacement',
    ],
  },

  igo: {
    slug: 'igo',
    waterProvider: 'Private well or local water service, depending on location',
    name: 'Igo',
    county: 'Shasta County',
    distanceFromRedding: 'About 25 minutes southwest of Redding',
    intro:
      "Igo is a small rural community in western Shasta County, out toward the coast range southwest of Redding. This is large-parcel, foothill country, and most homes are on private wells and septic rather than city utilities. The plumbing out here centers on well systems, long service lines, and outdoor work, which is exactly the kind of rural job a lot of in-town plumbers would rather not drive out for. We do.",
    localRealities: [
      "Most Igo properties are on private wells, so 'no water' and 'low pressure' calls usually trace back to a pressure tank, well line, or pump rather than anything inside the house.",
      "Septic-connected homes need septic-safe drain work. We clear lines mechanically instead of with caustic chemicals that can harm the system.",
      "Foothill freezes hit exposed pipes, hose bibs, and pump houses before town does, which is when burst-line calls spike.",
      "Long well-to-house and meter-to-house runs mean a leak can be far from the building, so we trace the line to the real failure point before digging.",
    ],
    commonCalls: [
      'Well pressure tank and service-line problems',
      'Septic-safe drain cleaning',
      'Burst pipe repair after winter freezes',
      'Water heater repair and replacement',
      'Yard hydrant and outbuilding plumbing',
    ],
  },

  'happy-valley': {
    slug: 'happy-valley',
    waterProvider: 'Private well or local water service, depending on location',
    name: 'Happy Valley',
    county: 'Shasta County',
    distanceFromRedding: 'About 20 minutes south of Redding',
    intro:
      "Happy Valley is rural Shasta County south of Redding, between Anderson and Olinda. It's spread-out, large-lot living, with ranchettes and rural homes rather than subdivisions, and a lot of properties run on private wells and septic. We serve the area regularly, and the jobs here lean toward well systems, sewer and septic lines, and the outdoor plumbing that comes with rural parcels.",
    localRealities: [
      "Many Happy Valley homes are on well water and septic, so pressure tanks, well pumps, and septic-safe drain handling are part of the work, not just the fixtures inside.",
      "Large lots mean long sewer and main-line runs, so a recurring backup is often a main-line problem rather than a single clogged fixture.",
      "Cold snaps freeze exposed lines, hose bibs, and pump houses on rural parcels, which drives a wave of burst-pipe calls after the first hard freeze.",
      "Service lines from the meter or well to the house can run long, so leak detection means tracing the line to the actual break.",
    ],
    commonCalls: [
      'Well pump and pressure tank service',
      'Septic-safe drain cleaning',
      'Sewer line and main-line backups on large lots',
      'Burst pipe repair after winter freezes',
      'Water heater repair and replacement',
    ],
  },
};

export function getCityProfile(slug: CitySlug): CityProfile {
  return cityProfiles[slug];
}
