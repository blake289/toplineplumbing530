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
