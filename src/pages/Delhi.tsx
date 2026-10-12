import LocationPage from "@/components/LocationPage";
import { Crown, Shield, Star, MapPin } from "lucide-react";
import { useEffect } from "react";

const DelhiPage = () => {
  useEffect(() => {
    // Add Canonical Tag
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = 'https://skywheelzs.in/luxury-drone-services-delhi-ncr';
    document.head.appendChild(canonicalLink);

    // Service Schema
    const serviceSchema = document.createElement("script");
    serviceSchema.type = "application/ld+json";
    serviceSchema.id = "delhi-service-schema";
    serviceSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Luxury Drone Services Delhi NCR",
      "description": "Premium DGCA-certified drone photography and cinematography for luxury weddings, high-end corporate events, premium real estate, and luxury brands across Delhi NCR. White-glove service with Hollywood-style production.",
      "provider": {
        "@id": "https://skywheelzs.in/#business"
      },
      "areaServed": ["Delhi", "Delhi NCR", "Noida", "Gurgaon", "Greater Noida", "Connaught Place", "Greater Kailash", "Aerocity"],
      "serviceType": [
        "Luxury Wedding Cinematography",
        "Premium Real Estate Photography",
        "Luxury Brand Aerial Shoots",
        "High-End Event Coverage",
        "Corporate Premium Video"
      ],
      "offers": {
        "@type": "Offer",
        "price": "10000",
        "priceCurrency": "INR",
        "description": "Starting price for luxury drone services in Delhi NCR"
      }
    });
    document.head.appendChild(serviceSchema);

    // FAQ Schema
    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.id = "delhi-faq-schema";
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide luxury drone services in Delhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We specialize in high-end luxury aerial photography and cinematography for luxury brands, premium weddings, and exclusive events across Delhi NCR. Our white-glove service includes personal project managers and Hollywood-style post-production."
          }
        },
        {
          "@type": "Question",
          "name": "What is the cost of premium drone photography in Delhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Luxury packages start from ₹25,000+ for high-end shoots with premium cinematic editing, color grading, and professional deliverables. Full-scale wedding coverage and luxury brand shoots start from ₹50,000+. Custom premium packages available."
          }
        },
        {
          "@type": "Question",
          "name": "Can you handle drone shoots near Delhi airports?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we have extensive experience with controlled airspace operations. We coordinate with AAI (Airports Authority of India) and IGI Airport authority for shoots near IGI and domestic airports with proper NOCs and safety clearances."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you respond to Delhi booking requests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer priority booking for Delhi clients with same-day availability for most locations within NCR. For luxury events and destination weddings, we recommend 2-3 months advance booking for personalized planning."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide drone services for luxury weddings in Delhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We cover luxury weddings across Delhi including five-star hotel venues, heritage properties, farmhouses, and destination wedding locations. Our cinematography creates wedding films worthy of international film festivals."
          }
        },
        {
          "@type": "Question",
          "name": "What makes your Delhi drone services premium?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use enterprise-grade cinema drones, provide dedicated personal project managers, offer Hollywood-style color grading and post-production, include professional editing with matching music, and ensure white-glove service from consultation to final delivery."
          }
        }
      ]
    });
    document.head.appendChild(faqSchema);

    return () => {
      const serviceScript = document.getElementById("delhi-service-schema");
      if (serviceScript?.parentNode) {
        serviceScript.parentNode.removeChild(serviceScript);
      }
      const faqScript = document.getElementById("delhi-faq-schema");
      if (faqScript?.parentNode) {
        faqScript.parentNode.removeChild(faqScript);
      }
      // Clean up canonical link
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink?.parentNode) {
        canonicalLink.parentNode.removeChild(canonicalLink);
      }
    };
  }, []);

  const areas = [
    { name: "Connaught Place", desc: "Central business district" },
    { name: "Karol Bagh", desc: "Commercial and shopping areas" },
    { name: "Lajpat Nagar", desc: "Residential and event venues" },
    { name: "Greater Kailash", desc: "Luxury residential photography" },
    { name: "Aerocity", desc: "Business and aviation shoots" },
    { name: "Delhi Cantonment", desc: "Heritage and institutional areas" },
  ];

  const highlights = [
    { icon: Crown, title: "Luxury Focus", desc: "High-end clientele specialization" },
    { icon: Star, title: "Premium Service", desc: "White-glove aerial photography" },
    { icon: Shield, title: "DGCA Certified", desc: "Delhi NCR licensed operations" },
  ];

  const faqData = [
    { q: "Do you provide luxury drone services in Delhi?", a: "Yes! We specialize in high-end aerial photography for luxury brands, events, and premium real estate in Delhi NCR." },
    { q: "What is the cost of premium drone photography in Delhi?", a: "Luxury packages start from ₹25,000+ for high-end shoots with cinematic editing and premium deliverables." },
    { q: "Can you handle drone shoots near Delhi airports?", a: "Yes, we have experience with controlled airspace operations and coordinate with AAI for shoots near IGI and domestic airports." },
    { q: "How quickly can you respond to Delhi booking requests?", a: "We offer priority booking for Delhi clients with same-day availability for most locations within NCR." },
    { q: "Do you provide drone services for Delhi weddings?", a: "Absolutely! We cover luxury wedding venues across Delhi including five-star hotels and heritage sites." },
    { q: "What makes your Delhi drone services premium?", a: "We use enterprise-grade equipment, provide personal project managers, and deliver Hollywood-style post-production." },
  ];

  return (
    <LocationPage
      city="Delhi NCR"
      heroTitle={<> Aerial Drone Services in{" "}
        <span className="text-[#0284C7]">
          Delhi
        </span></>}
      heroSubtitle="Premium aerial photography and cinematography for luxury brands, high-end events, and premium real estate across Delhi NCR."
      areas={areas}
      highlights={highlights}
      faqData={faqData}
      metaTitle="Aerial Drone Services in Delhi | Drone Survey & Inspection Experts | SkyWheelzs"
      metaDesc="Premium drone photography and videography for luxury events, real estate, and brands across Delhi NCR."
    />
  );
};

export default DelhiPage;