import LocationPage from "@/components/LocationPage";
import { Clock, Shield, Star, MapPin } from "lucide-react";
import { useEffect } from "react";

const BangalorePage = () => {
  useEffect(() => {
    // Add Canonical Tag
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = 'https://skywheelzs.in/drone-services-in-bangalore-skywheelzs';
    document.head.appendChild(canonicalLink);

    // Service Schema
    const serviceSchema = document.createElement("script");
    serviceSchema.type = "application/ld+json";
    serviceSchema.id = "bangalore-service-schema";
    serviceSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Professional Drone Services in Bangalore",
      "description": "DGCA-certified drone photography and videography for tech companies, real estate, weddings, and corporate events across Bangalore. Whitefield, Indiranagar, Electronic City specialist.",
      "provider": {
        "@id": "https://skywheelzs.in/#business"
      },
      "areaServed": ["Bangalore", "Whitefield", "Indiranagar", "Electronic City", "Koramangala", "HSR Layout", "Jayanagar", "Bangalore Rural"],
      "serviceType": [
        "Aerial Photography for Tech Companies",
        "Real Estate Drone Photography",
        "Wedding Drone Videography",
        "Corporate Event Photography",
        "Startup Brand Videography"
      ],
      "offers": {
        "@type": "Offer",
        "price": "8000",
        "priceCurrency": "INR",
        "description": "Starting price for professional drone services in Bangalore"
      }
    });
    document.head.appendChild(serviceSchema);

    // FAQ Schema
    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.id = "bangalore-faq-schema";
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide drone services for tech companies in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We specialize in aerial photography and videography for tech companies, startups, and IT parks across Bangalore's tech corridor including Whitefield, Electronic City, and surrounding areas. We provide corporate branding videos, office walk-throughs, and campus photography."
          }
        },
        {
          "@type": "Question",
          "name": "What is the cost of drone photography in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional drone services in Bangalore start from ₹8,000 for basic aerial shoots. Premium cinematic packages with editing and color grading begin at ₹15,000+. Tech company specialized shoots start from ₹12,000. Custom quotes available based on project scope."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you deliver drone footage in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 24-hour express delivery for urgent projects in Bangalore. Standard delivery is within 48 hours. Rush/same-day editing available for emergency bookings. Complex cinematic projects: 3-5 business days with advanced post-production."
          }
        },
        {
          "@type": "Question",
          "name": "Are your drone operations legal in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all our drone operations are DGCA-certified with proper permissions for commercial flights in Bangalore. We maintain full compliance with Indian aviation regulations and local airport restrictions in coordination with Bangalore Airport Authority."
          }
        },
        {
          "@type": "Question",
          "name": "What areas of Bangalore do you cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide comprehensive coverage across all major Bangalore areas including Whitefield, Indiranagar, Electronic City, Koramangala, HSR Layout, Jayanagar, Marathahalli, Bellandur, and surrounding IT parks and residential communities."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer real estate drone photography in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We provide stunning aerial photography for property listings across Bangalore, helping real estate agents and builders showcase properties from unique angles. Package includes 4K photos, video walkthrough, and drone reel editing."
          }
        }
      ]
    });
    document.head.appendChild(faqSchema);

    return () => {
      const serviceScript = document.getElementById("bangalore-service-schema");
      if (serviceScript?.parentNode) {
        serviceScript.parentNode.removeChild(serviceScript);
      }
      const faqScript = document.getElementById("bangalore-faq-schema");
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
    { name: "Whitefield", desc: "Tech parks and modern developments" },
    { name: "Indiranagar", desc: "Residential and lifestyle shoots" },
    { name: "Electronic City", desc: "IT corridor and corporate photography" },
    { name: "Koramangala", desc: "Commercial and event photography" },
    { name: "HSR Layout", desc: "Residential communities and weddings" },
    { name: "Jayanagar", desc: "Heritage areas and cultural events" },
  ];

  const highlights = [
    { icon: Star, title: "Tech-Focused", desc: "Specialized in tech and startup shoots" },
    { icon: Shield, title: "DGCA Certified", desc: "Fully licensed drone operations" },
    { icon: Clock, title: "Quick Delivery", desc: "24-hour turnaround for urgent projects" },
  ];

  const faqData = [
    { q: "Do you provide drone services for tech companies in Bangalore?", a: "Yes! We specialize in aerial photography for tech companies, startups, and IT parks across Bangalore's tech corridor." },
    { q: "What is the cost of drone photography in Bangalore?", a: "Starting from ₹8,000 for basic shoots. Premium cinematic packages start from ₹15,000 with advanced editing." },
    { q: "How quickly can you deliver drone footage in Bangalore?", a: "We offer 24-hour express delivery for urgent projects. Standard delivery is within 48 hours." },
    { q: "Are your drone operations legal in Bangalore?", a: "Yes, all our operations are DGCA certified with proper permissions for commercial drone flights in Bangalore." },
    { q: "What areas do you cover in Bangalore?", a: "We cover Whitefield, Indiranagar, Electronic City, Koramangala, HSR Layout, Jayanagar, and all major Bangalore areas." },
    { q: "Do you offer real estate drone photography in Bangalore?", a: "Absolutely! We provide stunning aerial photography for property listings, helping real estate agents sell faster." },
  ];

  return (
    <LocationPage
      city="Bangalore"
      heroTitle={<>Professional Drone Services in{" "}
        <span className="text-[#0284C7]">
          Bangalore
        </span></>}
      heroSubtitle="Cinematic aerial photography for tech companies, real estate, and events. Specialized coverage across Whitefield, Indiranagar & Electronic City."
      areas={areas}
      highlights={highlights}
      faqData={faqData}
      metaTitle="Drone Services in Bangalore | DGCA Certified Experts | SkyWheelzs"
      metaDesc="DGCA-certified drone services in Bangalore for inspections, mapping, surveys, and construction monitoring."
    />
  );
};

export default BangalorePage;