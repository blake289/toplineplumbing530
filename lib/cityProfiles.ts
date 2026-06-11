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
      "Sacramento River and Shasta Lake supply means moderate hardness — sediment buildup in older water heaters is a common cause of premature failure.",
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
      "Anderson sits just south of Redding on I-5 — a 10-minute drive from our base. The town has a wide mix: older single-family homes near downtown, newer subdivisions off Riverside Ave, manufactured-home communities, and rural parcels stretching out toward Happy Valley and Cottonwood. Plumbing here ranges from city water to private wells, depending on where you are.",
    localRealities: [
      "Properties closer to Cottonwood Creek and rural Anderson are often on well water and septic — pressure tanks, well pumps, and water-softener systems are part of the picture.",
      "Manufactured and mobile homes have their own plumbing standards — supply lines, P-traps, and water heater closets need to be handled with the right materials.",
      "Sacramento River corridor means many properties have outbuildings or irrigation systems that need backflow protection.",
    ],
    commonCalls: [
      'Well pump and pressure tank service',
      'Manufactured home water heater swap-outs',
      'Sewer line and septic transition issues',
      'Outdoor hose bib and irrigation repairs',
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
      "Palo Cedro is the unincorporated community just east of Redding — large-lot residential, horse properties, and small ranches. Most homes here are on private wells and septic systems rather than city utilities, which changes the plumbing landscape significantly. We treat these jobs differently than in-town work.",
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
      "Bella Vista is rural Shasta County — large parcels, ranchettes, and homes spread out across the foothills east of Redding. Wells, septic, and outbuildings are the norm rather than the exception. Plumbing problems out here often involve longer service lines, more outdoor exposure, and well-system components most in-town plumbers don't touch as often.",
    localRealities: [
      "Long well-to-house service runs mean a leak can be 50+ feet from the house — detection takes more than a stethoscope to the slab.",
      "Cold snaps in the foothills hit harder than in town — exposed pipes, hose bibs, and pump houses need freeze protection.",
      "Many properties have a mix of original 1970s–1980s plumbing and additions/remodels, which creates compatibility issues between pipe materials.",
    ],
    commonCalls: [
      'Underground service-line leak detection',
      'Frozen pump-house repairs in winter',
      'Well-system pressure problems',
      'Mixed-material (galvanized to PEX) transitions',
    ],
  },

  'red-bluff': {
    slug: 'red-bluff',
    waterProvider: 'City of Red Bluff (municipal wells)',
    name: 'Red Bluff',
    county: 'Tehama County',
    distanceFromRedding: '30 minutes south on I-5',
    intro:
      "Red Bluff is the Tehama County seat, about 30 miles south of Redding on I-5. The historic downtown dates to the 1850s — meaning some of the oldest housing stock we service. Outside the historic core, you have a mix of mid-century residential and ranches stretching west toward the coast range and east into the Sacramento Valley floor.",
    localRealities: [
      "Historic downtown homes (pre-1920) frequently have a layered plumbing history: original cast iron drains, galvanized supply, partial copper retrofits, and modern fixtures all in the same house. Every repair has to account for what's behind the wall.",
      "Summers in Red Bluff are some of the hottest in California — water heater flue and venting issues, plus outdoor PVC failures, peak in July and August.",
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
