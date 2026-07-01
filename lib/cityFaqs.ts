/**
 * City-specific FAQs for AI/LLM citation and local SEO.
 * Rendered as JSON-LD FAQPage schema on each /areas/[city] page.
 *
 * Each city has 6 questions covering: business hours, response time,
 * pricing, licensing, services, and a city-specific question.
 */

export interface CityFaq {
  question: string;
  answer: string;
}

interface CityMeta {
  name: string;
  county: string;
  distanceNote: string;
  uniqueQ: { question: string; answer: string };
  extraFaqs?: CityFaq[];
}

const CITY_META: Record<string, CityMeta> = {
  redding: {
    name: "Redding",
    county: "Shasta County",
    distanceNote: "Redding is our home base — we serve the entire city directly from our Redding location.",
    uniqueQ: {
      question: "What zip codes in Redding does Topline Plumbing serve?",
      answer: "We serve all Redding zip codes including 96001, 96002, 96003, and 96049, covering downtown, west Redding, east Redding, and surrounding neighborhoods like Enterprise and Bonnyview.",
    },
  },
  "shasta-lake": {
    name: "Shasta Lake",
    county: "Shasta County",
    distanceNote: "Shasta Lake is just 10 miles north of our Redding base, so dispatch is fast.",
    uniqueQ: {
      question: "Do you handle well water and pump issues in Shasta Lake?",
      answer: "Yes. Many Shasta Lake homes are on well systems. We service well-fed plumbing, pressure tanks, and water lines from the well to the house, and coordinate with well/pump specialists when a pump replacement is needed.",
    },
  },
  anderson: {
    name: "Anderson",
    county: "Shasta County",
    distanceNote: "Anderson is 10 miles south of Redding on I-5, so we serve it same-day during business hours.",
    uniqueQ: {
      question: "Do you service rural properties outside Anderson city limits?",
      answer: "Yes. We service properties throughout the Anderson area including Happy Valley, Cottonwood, and surrounding rural addresses. Septic-connected homes welcome.",
    },
    extraFaqs: [
      {
        question: "Do you do water heater repair in Anderson, CA?",
        answer: "Yes. Water heater repair is one of our most common Anderson calls. We diagnose no-hot-water, leaking tanks, pilot and thermostat faults, and noisy units, and we carry common parts so many repairs can be done same day during business hours. When a tank is past saving, we offer same-day replacement with upfront pricing.",
      },
      {
        question: "Can you install a tankless water heater in Anderson, CA?",
        answer: "Yes. We install tankless water heaters throughout Anderson and the surrounding area. Anderson's municipal well water tends to run harder, so we size the unit correctly and recommend periodic descaling to protect it from mineral scale. You get endless hot water, lower standby energy use, and a professional installation with warranty.",
      },
      {
        question: "Why do water heaters fail early in Anderson?",
        answer: "Anderson draws its water from municipal groundwater wells, which carries more mineral content than surface water. That hardness leaves sediment and scale inside the tank, which is one of the most common reasons water heaters in the Anderson area fail before their expected lifespan. Periodic flushing and descaling extends the life of both tank and tankless units.",
      },
    ],
  },
  "palo-cedro": {
    name: "Palo Cedro",
    county: "Shasta County",
    distanceNote: "Palo Cedro is roughly 15 minutes east of Redding — we cover it daily.",
    uniqueQ: {
      question: "Can you handle whole-home repipes on rural Palo Cedro properties?",
      answer: "Yes. We handle full PEX and copper repipes on rural Palo Cedro homes, including properties with crawlspace access, slab-on-grade construction, and well-fed systems.",
    },
  },
  "bella-vista": {
    name: "Bella Vista",
    county: "Shasta County",
    distanceNote: "Bella Vista is about 15 minutes northeast of Redding — we serve it daily.",
    uniqueQ: {
      question: "Do you service homes on private wells in Bella Vista?",
      answer: "Yes. Many Bella Vista homes are on well systems, and we handle pressure tank issues, well-line repairs, and full plumbing service for well-fed homes. We coordinate with well/pump techs when needed.",
    },
    extraFaqs: [
      {
        question: "Do you do burst pipe repair in Bella Vista, CA?",
        answer: "Yes. Burst pipes are a common Bella Vista call, especially after the first hard freeze of the season, since exposed pipes, hose bibs, and pump houses in the foothills freeze before they do in town. During business hours (Mon-Fri 8:00a-4:30p) we respond same day, locate the break, and repair it with upfront pricing. For after-hours bursts, shut off your main water valve and text (530) 704-6989 and we'll respond first thing the next business day.",
      },
      {
        question: "Can you repair a sewer line in Bella Vista, CA?",
        answer: "Yes. We handle sewer line repair on Bella Vista's larger lots, where lines run long and often cross tree roots and uneven ground. A slow or backed-up drain out here is frequently a main-line or sewer-line problem rather than a single clogged fixture, so we diagnose the actual cause before quoting the repair, always with upfront pricing.",
      },
      {
        question: "Why do pipes freeze and burst more often in Bella Vista?",
        answer: "Bella Vista sits in the foothills northeast of Redding, and cold snaps hit harder up here than they do in town. Exposed supply lines, outdoor hose bibs, and pump houses on rural properties are the first things to freeze, and water expands as it freezes, which is what cracks the pipe. Insulating exposed lines and protecting pump houses before winter prevents most of these failures.",
      },
    ],
  },
  "red-bluff": {
    name: "Red Bluff",
    county: "Tehama County",
    distanceNote: "Red Bluff is 30 miles south of Redding on I-5 — we serve it same-day during business hours.",
    uniqueQ: {
      question: "Do you handle older home plumbing in Red Bluff's historic district?",
      answer: "Yes. Red Bluff has many older homes with galvanized or cast iron plumbing. We handle repipes, sewer line replacements, and modernization for historic homes throughout Red Bluff and Tehama County.",
    },
  },
  millville: {
    name: "Millville",
    county: "Shasta County",
    distanceNote: "Millville is about 20 minutes east of Redding past Palo Cedro — we serve it during business hours.",
    uniqueQ: {
      question: "Do you service homes on private wells and septic in Millville?",
      answer: "Yes. Many Millville properties are on private wells and septic. We handle pressure tank issues, well-line and service-line repairs, and septic-safe drain cleaning (mechanical augering, not caustic chemicals), and we coordinate with well/pump techs when a pump replacement is needed.",
    },
  },
  cottonwood: {
    name: "Cottonwood",
    county: "Shasta County",
    distanceNote: "Cottonwood is about 20 minutes south of Redding on I-5, just past Anderson — we serve it same-day during business hours.",
    uniqueQ: {
      question: "Do you service rural Cottonwood properties on wells and septic?",
      answer: "Yes. We service both the Cottonwood town center and the surrounding rural parcels toward the creek and the county line, including homes on private wells and septic. Pressure tanks, well lines, septic-safe drain cleaning, and long main-line runs are all routine work for us out here.",
    },
  },
  "lake-california": {
    name: "Lake California",
    county: "Tehama County",
    distanceNote: "Lake California is about 25 minutes south of Redding, east of Cottonwood — we serve it during business hours.",
    uniqueQ: {
      question: "Do you serve the Lake California community in Tehama County?",
      answer: "Yes. We serve Lake California with the full range of residential plumbing — water heater repair and replacement, drain cleaning, leak detection, repiping, and fixture work. Same-day scheduling during business hours (Mon-Fri 8:00a-4:30p) with upfront pricing.",
    },
  },
  igo: {
    name: "Igo",
    county: "Shasta County",
    distanceNote: "Igo is about 25 minutes southwest of Redding toward the coast range — we serve it during business hours.",
    uniqueQ: {
      question: "Do you drive out to rural Igo properties on wells?",
      answer: "Yes. Igo is rural, large-parcel country and most homes are on private wells and septic. We handle pressure tanks, well-line and service-line repairs, septic-safe drain cleaning, and the outdoor plumbing that comes with rural properties, and we coordinate with well/pump techs when needed.",
    },
  },
  "happy-valley": {
    name: "Happy Valley",
    county: "Shasta County",
    distanceNote: "Happy Valley is about 20 minutes south of Redding between Anderson and Olinda — we serve it during business hours.",
    uniqueQ: {
      question: "Do you service homes on wells and septic in Happy Valley?",
      answer: "Yes. Many Happy Valley homes are on private wells and septic on large lots. We handle pressure tank and well-line issues, septic-safe drain cleaning, and long sewer and main-line runs, and we coordinate with well/pump specialists when a pump replacement is needed.",
    },
  },
};

export function getCityFaqs(slug: string): CityFaq[] {
  const meta = CITY_META[slug];
  if (!meta) return [];

  const { name, distanceNote, uniqueQ, extraFaqs } = meta;

  return [
    {
      question: `What are Topline Plumbing's hours for emergency service in ${name}, CA?`,
      answer: `Topline Plumbing 530 handles emergency plumbing in ${name} during business hours: Monday through Friday, 8:00a to 4:30p. For active emergencies outside our hours, shut off your main water valve and call 911 if there's a safety issue (gas leak, major flood). Text (530) 704-6989 and we'll respond first thing the next business day.`,
    },
    {
      question: `How fast can a plumber get to ${name}?`,
      answer: `During business hours (Mon–Fri 8:00a–4:30p), we typically respond the same day for ${name} emergencies. ${distanceNote} For non-emergency service, we usually offer same-day or next-business-day appointments.`,
    },
    {
      question: `How much does a plumber cost in ${name}, CA?`,
      answer: `Topline Plumbing offers upfront pricing in ${name} — you'll know the full cost before any work begins. Diagnostic calls start affordably, and most common repairs (drain clearing, faucet replacement, water heater service) fall within standard plumbing rates for the 530 area. Emergency work during our business hours is billed at our standard rate — no urgency upcharge.`,
    },
    {
      question: `Are you a licensed plumber serving ${name}?`,
      answer: `Yes. Topline Plumbing 530 is a fully licensed, bonded, and insured California plumbing contractor (CSLB #596557). We are authorized to perform residential and commercial plumbing work throughout ${name} and the entire 530 area code.`,
    },
    {
      question: `What plumbing services do you offer in ${name}?`,
      answer: `We offer the full range of plumbing services in ${name}: emergency plumbing (during business hours), drain cleaning and hydrojetting, water heater repair and replacement, tankless water heater installation, sewer line repair, leak detection, whole-home repiping, gas line service, and fixture installation. Both residential and commercial.`,
    },
    uniqueQ,
    ...(extraFaqs ?? []),
  ];
}
