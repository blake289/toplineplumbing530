export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": "Topline Plumbing",
    "image": "https://toplineplumbing530.com/images/logo-wide.svg",
    "@id": "",
    "url": "https://toplineplumbing530.com",
    "telephone": "(530) 768-9446",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Redding",
      "addressRegion": "CA",
      "postalCode": "96001",
      "addressCountry": "US"
    },
    "description": "Premium plumbing services including water heater repair, emergency plumbing, and drain cleaning."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
