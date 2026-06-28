export type CitySlug =
  | 'redding'
  | 'anderson'
  | 'shasta-lake'
  | 'palo-cedro'
  | 'bella-vista'
  | 'red-bluff';

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
};

export function getCityProfile(slug: CitySlug): CityProfile {
  return cityProfiles[slug];
}
