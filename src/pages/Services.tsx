import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import LeadFormSection from "@/components/LeadFormSection";
import FinalCTA from "@/components/FinalCTA";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

import PricingSection from "@/components/PricingSection";



const ServicesPage = () => {
  useEffect(() => {
    document.title = "Professional Drone Services | Aerial Photography, Videography & Inspection | SkyWheelzs";
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', 'Professional aerial photography & drone videography for real estate, weddings, industrial inspection & live streaming. DGCA certified, 4K footage, same-day booking nationwide. From ₹8,000');
    }
    window.scrollTo(0, 0);

    // Add structured data for services
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "services-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Professional Drone Services",
      "description": "Aerial photography, videography, inspection, and mapping services with DGCA certified pilots",
      "provider": {
        "@type": "Organization",
        "name": "Skywheelzs"
      },
      "serviceType": [
        "Aerial Photography",
        "Drone Videography",
        "Live Streaming",
        "Real Estate Drone Shoots",
        "Industrial Inspection",
        "Drone Mapping & Survey"
      ],
      "areaServed": "India"
    });
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("services-schema");
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection
        title={<>Professional{" "}
          <span className="text-[#007BE7]">
            Drone Services
          </span></>}
        subtitle="Comprehensive aerial solutions including photography, videography, live streaming, real estate shoots, industrial inspection, and professional mapping services across India"
      />
      <ServicesSection />
            <PricingSection />

      <LeadFormSection />
      <FinalCTA />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;