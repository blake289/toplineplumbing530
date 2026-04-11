export default function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Plumber", "LocalBusiness"],
    "@id": "https://toplineplumbingco.com/#business",
    "name": "Topline Plumbing",
    "alternateName": "Topline Plumbing 530",
    "description": "Licensed, bonded & insured plumber in Redding, CA serving the entire 530 area code. 24/7 emergency plumbing, water heater repair, drain cleaning, leak detection, repiping, gas line services, and more — with upfront pricing and same-day service available. Family-owned since 1998.",
    "url": "https://toplineplumbingco.com",
    "telephone": "(530) 704-6989",
    "email": "Toplineplumbingredding@gmail.com",
    "image": {
      "@type": "ImageObject",
      "url": "https://toplineplumbingco.com/images/logo.png"
    },
    "logo": {
      "@type": "ImageObject",
      "url": "https://toplineplumbingco.com/images/logo.png"
    },
    "founder": {
      "@type": "Person",
      "name": "Joe Torculas"
    },
    "foundingDate": "1998",
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Debit Card, Check",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Redding",
      "addressRegion": "CA",
      "postalCode": "96001",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.5865,
      "longitude": -122.3917
    },
    "areaServed": [
      { "@type": "City", "name": "Redding", "sameAs": "https://en.wikipedia.org/wiki/Redding,_California" },
      { "@type": "City", "name": "Shasta Lake", "sameAs": "https://en.wikipedia.org/wiki/Shasta_Lake,_California" },
      { "@type": "City", "name": "Anderson", "sameAs": "https://en.wikipedia.org/wiki/Anderson,_California" },
      { "@type": "City", "name": "Palo Cedro" },
      { "@type": "City", "name": "Bella Vista" },
      { "@type": "City", "name": "Red Bluff", "sameAs": "https://en.wikipedia.org/wiki/Red_Bluff,_California" },
      { "@type": "City", "name": "Chico", "sameAs": "https://en.wikipedia.org/wiki/Chico,_California" },
      { "@type": "City", "name": "Oroville", "sameAs": "https://en.wikipedia.org/wiki/Oroville,_California" },
      { "@type": "City", "name": "Yuba City", "sameAs": "https://en.wikipedia.org/wiki/Yuba_City,_California" },
      { "@type": "City", "name": "Marysville", "sameAs": "https://en.wikipedia.org/wiki/Marysville,_California" },
      { "@type": "City", "name": "Paradise", "sameAs": "https://en.wikipedia.org/wiki/Paradise,_California" },
      { "@type": "City", "name": "Auburn", "sameAs": "https://en.wikipedia.org/wiki/Auburn,_California" },
      { "@type": "City", "name": "Grass Valley", "sameAs": "https://en.wikipedia.org/wiki/Grass_Valley,_California" },
      { "@type": "City", "name": "Truckee", "sameAs": "https://en.wikipedia.org/wiki/Truckee,_California" },
      { "@type": "City", "name": "South Lake Tahoe", "sameAs": "https://en.wikipedia.org/wiki/South_Lake_Tahoe,_California" },
      { "@type": "PostalCodeSpecification", "postalCode": "96001", "addressCountry": "US" },
      { "@type": "PostalCodeSpecification", "postalCode": "96002", "addressCountry": "US" },
      { "@type": "PostalCodeSpecification", "postalCode": "96003", "addressCountry": "US" },
      { "@type": "PostalCodeSpecification", "postalCode": "96007", "addressCountry": "US" },
      { "@type": "PostalCodeSpecification", "postalCode": "96019", "addressCountry": "US" },
      { "@type": "PostalCodeSpecification", "postalCode": "96073", "addressCountry": "US" },
      { "@type": "PostalCodeSpecification", "postalCode": "96049", "addressCountry": "US" },
      { "@type": "PostalCodeSpecification", "postalCode": "96080", "addressCountry": "US" },
      { "@type": "PostalCodeSpecification", "postalCode": "95926", "addressCountry": "US" },
      { "@type": "PostalCodeSpecification", "postalCode": "95928", "addressCountry": "US" },
      { "@type": "PostalCodeSpecification", "postalCode": "95966", "addressCountry": "US" },
      { "@type": "PostalCodeSpecification", "postalCode": "95969", "addressCountry": "US" },
      { "@type": "PostalCodeSpecification", "postalCode": "95901", "addressCountry": "US" },
      { "@type": "PostalCodeSpecification", "postalCode": "95991", "addressCountry": "US" },
      { "@type": "PostalCodeSpecification", "postalCode": "95945", "addressCountry": "US" },
      { "@type": "PostalCodeSpecification", "postalCode": "95603", "addressCountry": "US" },
      { "@type": "PostalCodeSpecification", "postalCode": "96161", "addressCountry": "US" },
      { "@type": "PostalCodeSpecification", "postalCode": "96150", "addressCountry": "US" }
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61551944100731",
      "https://www.instagram.com/toplineplumbing/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "1",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Plumbing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Plumbing",
            "description": "24/7 emergency plumbing response in Redding, CA. Burst pipes, flooding, gas leaks, sewer backups. Immediate dispatch.",
            "url": "https://toplineplumbingco.com/services/emergency"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Water Heater Repair & Replacement",
            "description": "Water heater repair and replacement for all makes and models. Same-day service available in Redding and surrounding areas.",
            "url": "https://toplineplumbingco.com/services/water-heater-repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tankless Water Heater Installation",
            "description": "Tankless water heater installation and conversion. Rinnai, Navien, and all major brands. Energy-efficient endless hot water.",
            "url": "https://toplineplumbingco.com/services/tankless"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Drain Cleaning",
            "description": "Professional drain cleaning and clog removal. Power auger, hydrojetting, and camera inspection available.",
            "url": "https://toplineplumbingco.com/services/drain-cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sewer Line Repair & Replacement",
            "description": "Sewer line repair, replacement, and camera inspection. Trenchless options available. Serving Redding and Northern CA.",
            "url": "https://toplineplumbingco.com/services/sewer-line"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Leak Detection & Repair",
            "description": "Electronic and slab leak detection. Non-invasive methods to find and fix hidden leaks fast.",
            "url": "https://toplineplumbingco.com/services/leak-detection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Repiping Services",
            "description": "Whole-home repiping with PEX and copper. Upgrade aging galvanized or polybutylene pipes.",
            "url": "https://toplineplumbingco.com/services/repiping-services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gas Line Repair & Installation",
            "description": "Gas line repair, installation, and leak detection. Licensed gas plumber serving Redding and surrounding areas.",
            "url": "https://toplineplumbingco.com/services/gas-line"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fixture Installation",
            "description": "Professional installation of sinks, toilets, faucets, showers, and garbage disposals. Kitchen and bathroom upgrades.",
            "url": "https://toplineplumbingco.com/services/fixture-installs"
          }
        }
      ]
    },
    "knowsAbout": [
      "Plumbing",
      "Emergency Plumbing",
      "Water Heater Repair",
      "Tankless Water Heaters",
      "Drain Cleaning",
      "Sewer Line Repair",
      "Leak Detection",
      "Repiping",
      "Gas Line Services",
      "Residential Plumbing",
      "Commercial Plumbing"
    ]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Topline Plumbing",
    "url": "https://toplineplumbingco.com",
    "publisher": {
      "@id": "https://toplineplumbingco.com/#business"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
