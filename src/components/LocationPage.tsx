import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import PricingSection from "@/components/PricingSection";
import AreaCoverageSection from "@/components/AreaCoverageSection";
import EquipmentSection from "@/components/EquipmentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import FinalCTA from "@/components/FinalCTA";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Clock, Shield, Star, MapPin } from "lucide-react";

const LocationPage = ({
  city,
  heroTitle,
  heroSubtitle,
  heroVideo,
  areas,
  highlights,
  faqData,
  metaTitle,
  metaDesc,
  structuredData,
  extraSection,
}) => {
  // Update document title and meta description for SEO
  React.useEffect(() => {
    document.title = metaTitle;
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', metaDesc);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
    const locationKeywords = `drone services in ${city.toLowerCase()}, ${city} drone photography, ${city} drone videography, ${city} drone inspection, DGCA certified drone services, skywheelzs`;
    if (metaKeywords) {
      metaKeywords.content = locationKeywords;
    } else {
      const keywordsTag = document.createElement('meta');
      keywordsTag.name = 'keywords';
      keywordsTag.content = locationKeywords;
      document.head.appendChild(keywordsTag);
    }

    window.scrollTo(0, 0);

    const scripts = (structuredData || []).map((data, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `ldjson-${index}`;
      script.text = JSON.stringify(data);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      scripts.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [metaTitle, metaDesc, structuredData]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        video={heroVideo}
      />
      <TrustSection />
      <ServicesSection />
      <VideoShowcaseSection />
      <EquipmentSection />
      <PricingSection />
      <AreaCoverageSection
        city={city}
        areas={areas}
        highlights={highlights}
      />
      {extraSection}
      <TestimonialsSection />
      <FaqSection faqData={faqData} />
      <FinalCTA />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default LocationPage;