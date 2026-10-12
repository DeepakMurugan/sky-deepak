// Schema generation utilities for SEO structured data

export const addSchema = (schemaData: Record<string, any>, schemaId: string = "main-schema") => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = schemaId;
  script.textContent = JSON.stringify(schemaData);
  document.head.appendChild(script);

  return () => {
    const existingScript = document.getElementById(schemaId);
    if (existingScript?.parentNode) {
      existingScript.parentNode.removeChild(existingScript);
    }
  };
};

export const createServiceSchema = (
  serviceName: string,
  description: string,
  areaServed: string | string[],
  price: string = "8000",
  serviceType: string[] = []
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@id": `${window.location.origin}/#business`
  },
  "areaServed": Array.isArray(areaServed) ? areaServed : { "@type": "City", "name": areaServed },
  "offers": {
    "@type": "Offer",
    "price": price,
    "priceCurrency": "INR",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": price,
      "priceCurrency": "INR",
      "description": `Starting price for ${serviceName}`
    }
  },
  ...(serviceType.length > 0 && { "serviceType": serviceType })
});

export const createFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const createLocalBusinessSchema = (
  city: string,
  areas: string[],
  description: string
) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SkyDigiLens",
  "description": description,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": city,
    "addressRegion": "Telangana",
    "addressCountry": "IN"
  },
  "areaServed": areas,
  "openingHours": "Mo-Su 08:00-20:00",
  "priceRange": "₹8,000+"
});
