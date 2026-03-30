export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PlumbingService"],
    "name": "Topline Plumbing",
    "image": {
      "@type": "ImageObject",
      "url": "https://toplineplumbingco.com/images/logo.webp"
    },
    "logo": {
      "@type": "ImageObject",
      "url": "https://toplineplumbingco.com/images/logo.webp"
    },
    "@id": "https://toplineplumbingco.com",
    "url": "https://toplineplumbingco.com",
    "telephone": "(530) 768-9446",
    "email": "Toplineplumbingredding@gmail.com",
    "priceRange": "$$",
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
      { "@type": "City", "name": "Redding" },
      { "@type": "City", "name": "Shasta Lake" },
      { "@type": "City", "name": "Anderson" },
      { "@type": "City", "name": "Palo Cedro" },
      { "@type": "City", "name": "Bella Vista" },
      { "@type": "City", "name": "Red Bluff" },
      { "@type": "City", "name": "Chico" },
      { "@type": "City", "name": "Oroville" },
      { "@type": "City", "name": "Yuba City" },
      { "@type": "City", "name": "Marysville" },
      { "@type": "City", "name": "Paradise" },
      { "@type": "City", "name": "Auburn" },
      { "@type": "City", "name": "Grass Valley" },
      { "@type": "City", "name": "Truckee" },
      { "@type": "City", "name": "South Lake Tahoe" }
    ],
    "description": "Topline Plumbing provides fast, reliable plumbing services in Redding, CA and surrounding areas. We offer emergency plumbing, water heater repair, drain cleaning, and more — with upfront pricing and same-day service available.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "53",
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
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Plumbing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Heater Repair & Replacement" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drain Cleaning" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Leak Detection & Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pipe Repair & Replacement" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tankless Water Heater Installation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sewer Line Repair & Replacement" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gas Line Repair & Installation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Repiping Services" } }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
