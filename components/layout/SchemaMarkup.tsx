export default function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Plumber", "LocalBusiness"],
    "@id": "https://toplineplumbingco.com/#business",
    "name": "Topline Plumbing",
    "alternateName": "Topline Plumbing 530",
    "description": "Licensed, bonded & insured plumber in Redding, CA serving the entire 530 area code. Emergency plumbing, water heater repair, drain cleaning, leak detection, repiping, gas line services, and more — with upfront pricing and same-day service available during business hours. Family-owned since 1998.",
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
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "California Contractor License #596557",
      "recognizedBy": {
        "@type": "GovernmentOrganization",
        "name": "California Contractors State License Board",
        "url": "https://www.cslb.ca.gov/"
      }
    },
    "identifier": {
      "@type": "PropertyValue",
      "propertyID": "CSLB License",
      "value": "596557"
    },
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
      "https://www.instagram.com/toplineplumbing/",
      "https://www.google.com/maps?cid=353211204535522869"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "7",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:00",
        "closes": "16:30"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Plumbing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "minPrice": "150",
            "maxPrice": "1500"
          },
          "availability": "https://schema.org/InStock",
          "areaServed": "Redding, CA",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Plumbing",
            "description": "Emergency plumbing response in Redding, CA during business hours (Mon–Fri 8:00a–4:30p). Burst pipes, flooding, gas leaks, sewer backups. Same-day response with upfront pricing.",
            "url": "https://toplineplumbingco.com/services/emergency",
            "serviceType": "Emergency Plumbing"
          }
        },
        {
          "@type": "Offer",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "minPrice": "1200",
            "maxPrice": "3500"
          },
          "availability": "https://schema.org/InStock",
          "areaServed": "Redding, CA",
          "itemOffered": {
            "@type": "Service",
            "name": "Water Heater Repair & Replacement",
            "description": "Water heater repair and replacement for all makes and models. Same-day service available in Redding and surrounding areas. Typical replacement cost $1,200–$3,500 installed.",
            "url": "https://toplineplumbingco.com/services/water-heater-repair",
            "serviceType": "Water Heater Installation"
          }
        },
        {
          "@type": "Offer",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "minPrice": "3000",
            "maxPrice": "6500"
          },
          "availability": "https://schema.org/InStock",
          "areaServed": "Redding, CA",
          "itemOffered": {
            "@type": "Service",
            "name": "Tankless Water Heater Installation",
            "description": "Tankless water heater installation and conversion. Rinnai, Navien, Noritz, and all major brands. Energy-efficient endless hot water. Typical installed cost $3,000–$6,500.",
            "url": "https://toplineplumbingco.com/services/tankless",
            "serviceType": "Tankless Water Heater Installation"
          }
        },
        {
          "@type": "Offer",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "minPrice": "130",
            "maxPrice": "800"
          },
          "availability": "https://schema.org/InStock",
          "areaServed": "Redding, CA",
          "itemOffered": {
            "@type": "Service",
            "name": "Drain Cleaning",
            "description": "Professional drain cleaning and clog removal. Power auger, hydrojetting, and camera inspection available. Starting at $130 for standard drain clearing.",
            "url": "https://toplineplumbingco.com/services/drain-cleaning",
            "serviceType": "Drain Cleaning"
          }
        },
        {
          "@type": "Offer",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "minPrice": "400",
            "maxPrice": "25000"
          },
          "availability": "https://schema.org/InStock",
          "areaServed": "Redding, CA",
          "itemOffered": {
            "@type": "Service",
            "name": "Sewer Line Repair & Replacement",
            "description": "Sewer line repair, replacement, and camera inspection. Trenchless options available. Serving Redding and Northern CA.",
            "url": "https://toplineplumbingco.com/services/sewer-line",
            "serviceType": "Sewer Repair"
          }
        },
        {
          "@type": "Offer",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "minPrice": "150",
            "maxPrice": "2000"
          },
          "availability": "https://schema.org/InStock",
          "areaServed": "Redding, CA",
          "itemOffered": {
            "@type": "Service",
            "name": "Leak Detection & Repair",
            "description": "Electronic and slab leak detection. Non-invasive methods to find and fix hidden leaks fast.",
            "url": "https://toplineplumbingco.com/services/leak-detection",
            "serviceType": "Leak Detection"
          }
        },
        {
          "@type": "Offer",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "minPrice": "4000",
            "maxPrice": "15000"
          },
          "availability": "https://schema.org/InStock",
          "areaServed": "Redding, CA",
          "itemOffered": {
            "@type": "Service",
            "name": "Repiping Services",
            "description": "Whole-home repiping with PEX and copper. Upgrade aging galvanized or polybutylene pipes. Typical cost $4,000–$15,000 depending on home size and pipe material.",
            "url": "https://toplineplumbingco.com/services/repiping-services",
            "serviceType": "Repiping"
          }
        },
        {
          "@type": "Offer",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "minPrice": "250",
            "maxPrice": "2000"
          },
          "availability": "https://schema.org/InStock",
          "areaServed": "Redding, CA",
          "itemOffered": {
            "@type": "Service",
            "name": "Gas Line Repair & Installation",
            "description": "Gas line repair, installation, and leak detection. Licensed gas plumber serving Redding and surrounding areas.",
            "url": "https://toplineplumbingco.com/services/gas-line",
            "serviceType": "Gas Line Service"
          }
        },
        {
          "@type": "Offer",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "minPrice": "150",
            "maxPrice": "1500"
          },
          "availability": "https://schema.org/InStock",
          "areaServed": "Redding, CA",
          "itemOffered": {
            "@type": "Service",
            "name": "Fixture Installation",
            "description": "Professional installation of sinks, toilets, faucets, showers, and garbage disposals. Kitchen and bathroom upgrades.",
            "url": "https://toplineplumbingco.com/services/fixture-installs",
            "serviceType": "Fixture Installation"
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

  const founderSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://toplineplumbingco.com/#joe-torculas",
    "name": "Joe Torculas",
    "jobTitle": "Founder & Master Plumber",
    "worksFor": {
      "@id": "https://toplineplumbingco.com/#business"
    },
    "alumniOf": "State of California — Licensed Plumbing Contractor",
    "knowsAbout": [
      "Residential Plumbing",
      "Commercial Plumbing",
      "Emergency Plumbing Response",
      "Water Heater Installation and Repair",
      "Tankless Water Heater Systems",
      "Drain Cleaning and Hydrojetting",
      "Sewer Line Repair and Replacement",
      "Gas Line Installation and Repair",
      "Leak Detection",
      "Whole-Home Repiping (PEX and Copper)",
      "Fixture Installation",
      "California Plumbing Code",
      "Redding CA Area Plumbing"
    ],
    "description": "Joe Torculas founded Topline Plumbing in 1998 and has been serving Redding, California and the entire 530 area code ever since. A licensed California plumbing contractor, Joe has personally overseen more than 3,000 plumbing jobs — water heater installs, whole-home repipes, and emergency plumbing responses across Shasta County and Northern California.",
    "url": "https://toplineplumbingco.com/about",
    "image": "https://toplineplumbingco.com/images/joe-paulette.webp",
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Plumber",
      "occupationLocation": {
        "@type": "City",
        "name": "Redding, CA"
      },
      "skills": "Emergency plumbing, water heater repair and replacement, tankless water heater installation, drain cleaning, hydrojetting, sewer line repair, leak detection, repiping, gas line service, fixture installation"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />
    </>
  );
}
