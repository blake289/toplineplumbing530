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
  responseTime: string;
  distanceNote: string;
  uniqueQ: { question: string; answer: string };
}

const CITY_META: Record<string, CityMeta> = {
  redding: {
    name: "Redding",
    county: "Shasta County",
    responseTime: "30–60 minutes",
    distanceNote: "Redding is our home base — we serve the entire city directly from our Redding location.",
    uniqueQ: {
      question: "What zip codes in Redding does Topline Plumbing serve?",
      answer: "We serve all Redding zip codes including 96001, 96002, 96003, and 96049, covering downtown, west Redding, east Redding, and surrounding neighborhoods like Enterprise and Bonnyview.",
    },
  },
  "shasta-lake": {
    name: "Shasta Lake",
    county: "Shasta County",
    responseTime: "30–60 minutes",
    distanceNote: "Shasta Lake is just 10 miles north of our Redding base, so dispatch is fast.",
    uniqueQ: {
      question: "Do you handle well water and pump issues in Shasta Lake?",
      answer: "Yes. Many Shasta Lake homes are on well systems. We service well-fed plumbing, pressure tanks, and water lines from the well to the house, and coordinate with well/pump specialists when a pump replacement is needed.",
    },
  },
  anderson: {
    name: "Anderson",
    county: "Shasta County",
    responseTime: "30–60 minutes",
    distanceNote: "Anderson is 10 miles south of Redding on I-5, so we typically arrive within an hour.",
    uniqueQ: {
      question: "Do you service rural properties outside Anderson city limits?",
      answer: "Yes. We service properties throughout the Anderson area including Happy Valley, Cottonwood, and surrounding rural Shasta County addresses. Septic-connected homes welcome.",
    },
  },
  "palo-cedro": {
    name: "Palo Cedro",
    county: "Shasta County",
    responseTime: "30–60 minutes",
    distanceNote: "Palo Cedro is roughly 15 minutes east of Redding — we cover it daily.",
    uniqueQ: {
      question: "Can you handle whole-home repipes on rural Palo Cedro properties?",
      answer: "Yes. We handle full PEX and copper repipes on rural Palo Cedro homes, including properties with crawlspace access, slab-on-grade construction, and well-fed systems.",
    },
  },
  "bella-vista": {
    name: "Bella Vista",
    county: "Shasta County",
    responseTime: "30–60 minutes",
    distanceNote: "Bella Vista is about 15 miles northeast of Redding — we serve it daily.",
    uniqueQ: {
      question: "Do you service homes on private wells in Bella Vista?",
      answer: "Yes. Most Bella Vista homes are on well systems, and we handle pressure tank issues, well-line repairs, and full plumbing service for well-fed homes. We coordinate with well/pump techs when needed.",
    },
  },
  "red-bluff": {
    name: "Red Bluff",
    county: "Tehama County",
    responseTime: "45–75 minutes",
    distanceNote: "Red Bluff is 30 miles south of Redding on I-5 — typical arrival is under an hour.",
    uniqueQ: {
      question: "Do you handle older home plumbing in Red Bluff's historic district?",
      answer: "Yes. Red Bluff has many older homes with galvanized or cast iron plumbing. We handle repipes, sewer line replacements, and modernization for historic homes throughout Red Bluff and Tehama County.",
    },
  },
  chico: {
    name: "Chico",
    county: "Butte County",
    responseTime: "60–90 minutes",
    distanceNote: "Chico is roughly 75 miles south of Redding. We dispatch from Redding and typically arrive within 90 minutes.",
    uniqueQ: {
      question: "Do you service rental properties and student housing in Chico?",
      answer: "Yes. We work with Chico landlords, property managers, and student rentals near Chico State. We can coordinate with tenants directly and provide written invoices for owner records.",
    },
  },
  oroville: {
    name: "Oroville",
    county: "Butte County",
    responseTime: "75–105 minutes",
    distanceNote: "Oroville is roughly 90 miles south of Redding. We schedule advance appointments and dispatch quickly for emergencies.",
    uniqueQ: {
      question: "Do you handle plumbing for foothill and lake-area homes in Oroville?",
      answer: "Yes. We service homes throughout Oroville including foothill properties, lakeside homes near Lake Oroville, and rural Butte County addresses with well or septic systems.",
    },
  },
  "yuba-city": {
    name: "Yuba City",
    county: "Sutter County",
    responseTime: "90–120 minutes",
    distanceNote: "Yuba City is about 110 miles south of Redding. We schedule service in advance and dispatch for emergencies.",
    uniqueQ: {
      question: "Do you serve agricultural properties and farms near Yuba City?",
      answer: "Yes. We handle plumbing for ag properties, farmhouses, and rural Sutter County homes including well-system service, irrigation tie-ins, and full home repipes.",
    },
  },
  marysville: {
    name: "Marysville",
    county: "Yuba County",
    responseTime: "90–120 minutes",
    distanceNote: "Marysville is about 110 miles south of Redding. We schedule service in advance and dispatch for emergencies.",
    uniqueQ: {
      question: "Do you handle older home plumbing in Marysville's historic core?",
      answer: "Yes. Marysville has many homes built before 1950 with galvanized supply lines and cast iron drains. We handle repipes, sewer replacements, and modernization for older Marysville properties.",
    },
  },
  paradise: {
    name: "Paradise",
    county: "Butte County",
    responseTime: "75–105 minutes",
    distanceNote: "Paradise is roughly 90 miles south of Redding. We dispatch from Redding and serve rebuild and existing homes.",
    uniqueQ: {
      question: "Do you handle plumbing for Camp Fire rebuild homes in Paradise?",
      answer: "Yes. We work on rebuild homes throughout Paradise, including new-construction rough-in, water service connections, and full plumbing systems for rebuilds following the 2018 Camp Fire.",
    },
  },
  auburn: {
    name: "Auburn",
    county: "Placer County",
    responseTime: "By appointment",
    distanceNote: "Auburn is in Placer County. We schedule service appointments in advance for Auburn-area projects.",
    uniqueQ: {
      question: "Do you service foothill homes around Auburn?",
      answer: "Yes. We handle plumbing for Auburn-area foothill homes including properties on well systems, slab leak detection, and whole-home repipes for older homes throughout Placer County.",
    },
  },
  "grass-valley": {
    name: "Grass Valley",
    county: "Nevada County",
    responseTime: "By appointment",
    distanceNote: "Grass Valley is in Nevada County. We schedule service appointments in advance for the area.",
    uniqueQ: {
      question: "Do you handle freeze-damaged pipes and winter plumbing in Grass Valley?",
      answer: "Yes. Grass Valley sees freezing winter temps and we handle burst pipes, frozen line thawing, exterior pipe insulation, and freeze-prevention upgrades for foothill homes.",
    },
  },
  truckee: {
    name: "Truckee",
    county: "Nevada County",
    responseTime: "By appointment",
    distanceNote: "Truckee is in the Sierra. We schedule service appointments in advance and travel for larger projects.",
    uniqueQ: {
      question: "Do you handle frozen pipes and winterization for Truckee homes and cabins?",
      answer: "Yes. Truckee sees extreme winter temperatures. We handle frozen pipe repair, full home winterization, vacation home shutdowns, and freeze-damage rebuilds for cabins and full-time residences.",
    },
  },
  "south-lake-tahoe": {
    name: "South Lake Tahoe",
    county: "El Dorado County",
    responseTime: "By appointment",
    distanceNote: "South Lake Tahoe is in El Dorado County. We schedule service appointments in advance and travel for larger projects.",
    uniqueQ: {
      question: "Do you winterize vacation rentals and cabins in South Lake Tahoe?",
      answer: "Yes. We handle winterization for South Lake Tahoe vacation rentals, cabins, and second homes — draining lines, blowing out plumbing, and freeze-proofing systems before owners leave for the season.",
    },
  },
};

export function getCityFaqs(slug: string): CityFaq[] {
  const meta = CITY_META[slug];
  if (!meta) return [];

  const { name, responseTime, distanceNote, uniqueQ } = meta;

  return [
    {
      question: `What are Topline Plumbing's hours for emergency service in ${name}, CA?`,
      answer: `Topline Plumbing 530 handles emergency plumbing in ${name} during business hours: Monday through Friday, 8:00a to 4:30p. For active emergencies outside our hours, shut off your main water valve and call 911 if there's a safety issue (gas leak, major flood). Text (530) 704-6989 and we'll respond first thing the next business day.`,
    },
    {
      question: `How fast can a plumber get to ${name}?`,
      answer: `During business hours (Mon–Fri 8:00a–4:30p), typical on-site response for ${name} emergencies is ${responseTime}. ${distanceNote} For non-emergency service, we usually offer same-day or next-business-day appointments.`,
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
  ];
}
