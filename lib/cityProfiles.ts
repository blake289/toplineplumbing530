export type CitySlug =
  | 'redding'
  | 'anderson'
  | 'shasta-lake'
  | 'palo-cedro'
  | 'bella-vista'
  | 'red-bluff'
  | 'chico'
  | 'paradise'
  | 'oroville'
  | 'yuba-city'
  | 'marysville'
  | 'auburn'
  | 'grass-valley'
  | 'truckee'
  | 'south-lake-tahoe';

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

  chico: {
    slug: 'chico',
    waterProvider: 'California Water Service (Cal Water)',
    name: 'Chico',
    county: 'Butte County',
    distanceFromRedding: '75 minutes south on Highway 99',
    intro:
      "Chico is the largest city we serve outside of Redding — Butte County's commercial hub and home to Chico State. That brings a unique housing mix: dense student rentals around the university, older Avenues neighborhoods with mature housing stock, and newer subdivisions on the north and east sides. Each segment has different plumbing patterns.",
    localRealities: [
      "Student rental density means high-turnover homes with deferred maintenance — disposals, toilets, and water heaters that have been pushed past their useful life.",
      "The Avenues (pre-1950 homes near downtown) often have original cast iron drains and galvanized supply still in service — repipes and drain replacements are common.",
      "Big Chico Creek and Sycamore Pool corridor properties have specific drainage and sump pump considerations.",
    ],
    commonCalls: [
      'Rental-property water heater and drain emergencies',
      'Repipes in Avenues-era homes',
      'Garbage disposal and toilet replacements',
      'Sewer line camera inspections for older mains',
    ],
  },

  paradise: {
    slug: 'paradise',
    waterProvider: 'Paradise Irrigation District',
    name: 'Paradise',
    county: 'Butte County',
    distanceFromRedding: '90 minutes south, Sierra foothills',
    intro:
      "Paradise is a town in the middle of one of the largest single-family-home rebuilds in California history. After the 2018 Camp Fire, most of the original housing stock was lost, and what's coming back is almost entirely new construction — different plumbing materials, different code standards, and different challenges than working in pre-fire homes. We work both with rebuild homeowners and with the longtime residents whose homes survived.",
    localRealities: [
      "New-construction rebuilds use modern PEX supply, ABS drains, and updated water heater venting — these systems are forgiving but still need correct commissioning and pressure-balancing.",
      "Surviving older homes are mixed in with rebuilds — original materials, sometimes heat-affected from nearby fires, deserve careful inspection before assuming they're sound.",
      "Sierra foothills elevation (~1,700 ft) means cold winters and the occasional freeze — exposed and crawlspace plumbing needs insulation.",
    ],
    commonCalls: [
      'New-construction punch-list and warranty plumbing',
      'Water heater and tankless installs in rebuilds',
      'Freeze damage repairs on exposed pipes',
      'Pressure-balancing and water-quality issues on new builds',
    ],
  },

  oroville: {
    slug: 'oroville',
    waterProvider: 'California Water Service (Cal Water)',
    name: 'Oroville',
    county: 'Butte County',
    distanceFromRedding: '100 minutes south',
    intro:
      "Oroville sits at the base of Lake Oroville and the Feather River. The town has a deep historical layer (Gold Rush–era buildings downtown), broad mid-century residential neighborhoods, and a lake-recreation economy that brings vacation and second-home properties into the mix. Plumbing here depends heavily on which Oroville you're in.",
    localRealities: [
      "Historic downtown and older neighborhoods have aging cast iron drains and galvanized supply lines that are at end of service life.",
      "Lake-adjacent and seasonal homes get hit by the standard vacation-property problems: undetected leaks, frozen hose bibs, water heater failures while owners are away.",
      "Feather River and creek-adjacent properties have moisture and drainage considerations that affect crawlspaces and underground supply lines.",
    ],
    commonCalls: [
      'Galvanized repipe in older Oroville homes',
      'Lakefront and vacation-property leak repairs',
      'Sewer-line replacements in historic neighborhoods',
      'Sump pump and crawlspace moisture issues',
    ],
  },

  'yuba-city': {
    slug: 'yuba-city',
    waterProvider: 'City of Yuba City',
    name: 'Yuba City',
    county: 'Sutter County',
    distanceFromRedding: '2 hours south on Highway 99',
    intro:
      "Yuba City is the Sutter County seat — a Sacramento Valley agricultural hub with a mix of older established neighborhoods, newer subdivision growth on the west and south sides, and surrounding ag land. The plumbing patterns here reflect that mix: city utilities in town, irrigation and well systems on the agricultural edges.",
    localRealities: [
      "Sacramento Valley summers (105°F+) put heavy load on water heaters, irrigation systems, and outdoor plumbing — failures cluster in July through September.",
      "Newer subdivisions use PEX and modern fixtures; older central-Yuba-City homes still have copper or galvanized.",
      "Ag and orchard-adjacent properties often have irrigation tie-ins and backflow assemblies that need annual service.",
    ],
    commonCalls: [
      'Heat-related water heater failures',
      'Backflow preventer testing and repair',
      'Irrigation and outdoor plumbing issues',
      'Subdivision warranty and punch-list plumbing',
    ],
  },

  marysville: {
    slug: 'marysville',
    waterProvider: 'California Water Service (Cal Water)',
    name: 'Marysville',
    county: 'Yuba County',
    distanceFromRedding: '2 hours south',
    intro:
      "Marysville sits across the Yuba River from Yuba City and is one of the oldest continuously occupied cities in California — founded during the Gold Rush in 1850. Most of the original housing stock and downtown buildings are 100+ years old, with the additional wrinkle that Marysville sits inside a levee system in a historic floodplain. Both factors shape every plumbing job in town.",
    localRealities: [
      "Historic homes (pre-1900) often have a stack of plumbing eras layered on top of each other: original cast iron, galvanized retrofits, partial copper, and modern fixtures.",
      "Floodplain location means crawlspaces and basements have moisture and drainage considerations — sump pumps and proper venting matter more than in dry-ground towns.",
      "Older sewer mains and lateral connections can have collapses or root intrusion — camera inspection before major work is often worth it.",
    ],
    commonCalls: [
      'Historic-home repipe sections',
      'Sewer lateral camera inspections',
      'Sump pump installs and repairs',
      'Cast iron drain line replacements',
    ],
  },

  auburn: {
    slug: 'auburn',
    waterProvider: 'Placer County Water Agency (PCWA)',
    name: 'Auburn',
    county: 'Placer County',
    distanceFromRedding: '3 hours southeast via I-5 / I-80',
    intro:
      "Auburn is the Placer County seat in the Sierra foothills — Old Town Auburn has Gold Rush–era buildings, while the surrounding neighborhoods range from mid-century suburban to newer custom homes on the foothill slopes. Elevation (~1,200 ft) and the I-80 corridor location mean Auburn sees more freeze cycles than the Valley floor.",
    localRealities: [
      "Foothill freeze cycles — Auburn drops below freezing more nights per year than Redding or Sacramento. Crawlspace and exposed pipes need real insulation.",
      "Hillside homes have unique pressure and drainage considerations — gravity drains, lift stations, and slope-related slab settling all come into play.",
      "Old Town and the historic core have aging infrastructure (drains, mains) that need careful diagnosis before repair.",
    ],
    commonCalls: [
      'Freeze-damaged pipe repairs in winter',
      'Hillside-home pressure and drainage issues',
      'Historic Auburn drain and supply repairs',
      'Crawlspace plumbing insulation upgrades',
    ],
  },

  'grass-valley': {
    slug: 'grass-valley',
    waterProvider: 'City of Grass Valley or Nevada Irrigation District, depending on the parcel',
    name: 'Grass Valley',
    county: 'Nevada County',
    distanceFromRedding: '3 hours southeast',
    intro:
      "Grass Valley is Nevada County's Gold Country town — historic downtown core, mid-century neighborhoods, and a strong base of older custom homes scattered through the surrounding foothills. Elevation (~2,400 ft) puts Grass Valley firmly in freeze territory in winter, and the housing stock leans older than the Valley floor.",
    localRealities: [
      "Winter freeze is a serious factor — burst pipes, frozen hose bibs, and supply-line failures spike December through February.",
      "Historic downtown homes have layered plumbing systems with original cast iron, galvanized, and various retrofit eras.",
      "Many properties have private wells, septic systems, and propane water heaters rather than city utilities and natural gas.",
    ],
    commonCalls: [
      'Burst pipe and freeze repairs',
      'Galvanized-to-copper repipes',
      'Well system and pressure tank service',
      'Propane water heater replacements',
    ],
  },

  truckee: {
    slug: 'truckee',
    waterProvider: 'Truckee Donner Public Utility District',
    name: 'Truckee',
    county: 'Nevada County',
    distanceFromRedding: '4 hours east via I-5 / I-80',
    intro:
      "Truckee is a mountain town at roughly 5,800 feet — winter is the dominant force in every plumbing decision here. Most homes are second homes, vacation rentals, or full-time residences built for severe-winter conditions: heated crawlspaces, insulated supply lines, freeze-proof hose bibs, and snow-load drainage considerations. Truckee plumbing is not Valley plumbing.",
    localRealities: [
      "Burst pipes are the dominant winter call — vacation properties left unheated, supply-line freezes in unheated crawlspaces, and snow-melt damage all show up between November and April.",
      "Heat-tape, recirculating systems, and insulated supply runs are routine here, not exotic — they're how mountain plumbing stays functional.",
      "Vacation-rental turnover means high fixture wear and a need for fast response when something fails between guest stays.",
    ],
    commonCalls: [
      'Frozen and burst supply line repairs',
      'Vacation-rental emergency response',
      'Heat-tape and freeze-protection installs',
      'Water heater replacement in mountain homes',
    ],
  },

  'south-lake-tahoe': {
    slug: 'south-lake-tahoe',
    waterProvider: 'South Tahoe Public Utility District',
    name: 'South Lake Tahoe',
    county: 'El Dorado County',
    distanceFromRedding: '4.5 hours east',
    intro:
      "South Lake Tahoe sits at roughly 6,200 feet on the south shore — the highest-elevation town we serve, and the one where mountain conditions hit plumbing hardest. The housing mix is dominated by vacation rentals, second homes, and full-time residences sized for snow, freeze, and high-altitude considerations. Every job we do here factors in elevation and winter exposure.",
    localRealities: [
      "Severe winter freeze + frequent vacancy = the perfect setup for catastrophic burst-pipe failures. Heat tape, freeze-proof exterior bibs, and insulated supply runs are essentials, not upgrades.",
      "High elevation affects water heater combustion (gas units) and pressure tank behavior — replacements need to be sized and calibrated for altitude.",
      "Snow-melt and roof drainage put load on crawlspace and underground systems that Valley homes never deal with.",
    ],
    commonCalls: [
      'Catastrophic freeze and burst-pipe repairs',
      'High-altitude water heater installs',
      'Vacation-rental emergency plumbing',
      'Crawlspace insulation and freeze protection',
    ],
  },
};

export function getCityProfile(slug: CitySlug): CityProfile {
  return cityProfiles[slug];
}
