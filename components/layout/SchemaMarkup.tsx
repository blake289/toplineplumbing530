export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": "Topline Plumbing",
    "image": "https://toplineplumbingco.com/images/logo-wide.svg",
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
      { "@type": "City", "name": "Bella Vista" }
    ],
    "description": "Topline Plumbing provides fast, reliable plumbing services in Redding, CA and surrounding areas. We offer emergency plumbing, water heater repair, drain cleaning, and more — with upfront pricing and same-day service available.",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday","Sunday"],
        "opens": "00:00",
        "closes": "23:59",
        "description": "Emergency service only"
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
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pipe Repair & Replacement" } }
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
