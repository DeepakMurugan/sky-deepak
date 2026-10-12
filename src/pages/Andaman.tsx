import LocationPage from "@/components/LocationPage";
import { Sun, Shield, Camera, MapPin } from "lucide-react";
import { useEffect } from "react";

const AndamanPage = () => {
  useEffect(() => {
    // Add Canonical Tag
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = 'https://skywheelzs.in/beach-wedding-drone-services-andaman';
    document.head.appendChild(canonicalLink);

    // Service Schema
    const serviceSchema = document.createElement("script");
    serviceSchema.type = "application/ld+json";
    serviceSchema.id = "andaman-service-schema";
    serviceSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Beach Wedding Drone Services Andaman Islands",
      "description": "Luxury aerial photography and cinematography for destination beach weddings across Andaman & Nicobar Islands. DGCA-certified, all permissions included, 4K cinematic production, specialist in tropical island weddings.",
      "provider": {
        "@id": "https://skywheelzs.in/#business"
      },
      "areaServed": ["Andaman", "Nicobar", "Port Blair", "Havelock Island", "Neil Island", "Diglipur", "Baratang", "Rangat"],
      "serviceType": [
        "Beach Wedding Cinematography",
        "Destination Wedding Photography",
        "Aerial Island Photography",
        "Live HD Streaming",
        "Paradise Wedding Films"
      ],
      "offers": {
        "@type": "Offer",
        "price": "25000",
        "priceCurrency": "INR",
        "description": "Starting price for destination wedding drone services in Andaman Islands"
      }
    });
    document.head.appendChild(serviceSchema);

    // FAQ Schema
    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.id = "andaman-faq-schema";
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide drone services for Andaman beach weddings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We specialize in luxury beach wedding drone photography and cinematography across all major Andaman islands including Havelock Island, Neil Island, Port Blair, and Diglipur. We capture cinematic aerial shots of your paradise wedding."
          }
        },
        {
          "@type": "Question",
          "name": "What permissions are needed for drone flights in Andaman?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We handle all required permissions including DGCA clearance, Coastal Regulation Zone (CRZ) approvals, forest department permissions, and local authority clearances. All permissions are included in our package for hassle-free wedding coverage."
          }
        },
        {
          "@type": "Question",
          "name": "How much does drone photography cost for Andaman weddings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Premium destination wedding packages start from ₹45,000+ for Andaman beach weddings. This includes travel arrangements, all government permissions, 4K aerial videography, professional editing, and cinematic post-production."
          }
        },
        {
          "@type": "Question",
          "name": "Can you travel to remote Andaman islands?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we cover all inhabited Andaman islands including Havelock, Neil, Diglipur, Baratang, and Rangat. We arrange travel coordination and maintain our equipment for tropical island conditions and challenging weather."
          }
        },
        {
          "@type": "Question",
          "name": "How far in advance should I book for Andaman wedding drone services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend booking 3-6 months in advance during peak season (October-May). Early booking ensures sufficient time for permission processing, travel arrangements, and personalized wedding cinematography planning."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide live streaming for Andaman events?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer HD and 4K live streaming services for weddings and events across Andaman and Nicobar Islands. We manage connectivity challenges and provide professional live broadcast production."
          }
        }
      ]
    });
    document.head.appendChild(faqSchema);

    return () => {
      const serviceScript = document.getElementById("andaman-service-schema");
      if (serviceScript?.parentNode) {
        serviceScript.parentNode.removeChild(serviceScript);
      }
      const faqScript = document.getElementById("andaman-faq-schema");
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
    { name: "Port Blair", desc: "Capital city and main wedding venues" },
    { name: "Havelock Island", desc: "Beach wedding paradise" },
    { name: "Neil Island", desc: "Secluded beach ceremonies" },
    { name: "Diglipur", desc: "Northern island destinations" },
    { name: "Baratang", desc: "Mangrove and wildlife areas" },
    { name: "Rangat", desc: "Middle Andaman wedding spots" },
  ];

  const highlights = [
    { icon: Sun, title: "Paradise Settings", desc: "Stunning beach and island backdrops" },
    { icon: Camera, title: "Premium Quality", desc: "Luxury aerial cinematography" },
    { icon: Shield, title: "Full Compliance", desc: "All necessary permissions included" },
  ];

  const faqData = [
    {
      q: "Do you provide drone services for Andaman beach weddings?",
      a: "Yes! We specialize in beach wedding drone photography across all major Andaman islands including Havelock and Neil.",
    },
    {
      q: "What permissions are needed for drone flights in Andaman?",
      a: "We handle all permissions including DGCA clearance, forest department approvals, and local authority permissions.",
    },
    {
      q: "How much does drone photography cost for Andaman weddings?",
      a: "Premium destination packages start from ₹25,000+ for Andaman beach weddings, including all travel and permissions.",
    },
    {
      q: "Can you travel to remote Andaman islands?",
      a: "Yes, we cover all inhabited islands including Havelock, Neil, Diglipur, and Baratang for wedding photography.",
    },
    {
      q: "How far in advance should I book for Andaman wedding?",
      a: "Book 3-6 months in advance during peak season. We require time for permissions and travel arrangements.",
    },
    {
      q: "Do you provide live streaming for Andaman events?",
      a: "Yes, we offer HD live streaming services for weddings and events across Andaman and Nicobar Islands.",
    },
  ];

  return (
    <LocationPage
      city="Andaman & Nicobar"

      canonicalUrl="https://skywheelzs.in/beach-wedding-drone-services-andaman"

      heroTitle={
        <>
        Beach Wedding Drone Services in {" "}
          <span className="text-[#0284C7]">
          Andaman & Nicobar Islands
          </span>
        </>
      }

      heroSubtitle="Luxury aerial photography for beach weddings and destination ceremonies in the Andaman Islands. Paradise captured from the sky."

      areas={areas}
      highlights={highlights}
      faqData={faqData}

      metaTitle="Drone Mapping & Survey in Port Blair | SkyWheelzs"

      metaDesc="Aerial drone services in Port Blair for travel, real estate, surveys, and inspections."
    />
  );
};

export default AndamanPage;