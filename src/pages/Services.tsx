import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import LeadFormSection from "@/components/LeadFormSection";
import FinalCTA from "@/components/FinalCTA";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

import PricingSection from "@/components/PricingSection";
import CommercialApprovalsSection from "@/components/CommercialApprovalsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";



const ServicesPage = () => {
  useEffect(() => {
    document.title = "Drone Services Hyderabad & Telangana | SkyDigiLens";
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', 'Explore drone survey, solar inspection, residential tower monitoring, event photography and flight-planning support in Hyderabad and across Telangana and Andhra Pradesh.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
    const servicesKeywords = 'drone services Hyderabad, Telangana drone survey, Andhra Pradesh solar inspection, construction monitoring, drone wedding photography, commercial drone approvals';
    if (metaKeywords) {
      metaKeywords.content = servicesKeywords;
    } else {
      const keywordsTag = document.createElement('meta');
      keywordsTag.name = 'keywords';
      keywordsTag.content = servicesKeywords;
      document.head.appendChild(keywordsTag);
    }

    // Add Canonical Tag
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = `${window.location.origin}/services`;
    document.head.appendChild(canonicalLink);

    window.scrollTo(0, 0);

    // Add main service schema
    const serviceSchema = document.createElement("script");
    serviceSchema.type = "application/ld+json";
    serviceSchema.id = "services-schema";
    serviceSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Professional Drone Services in Telangana and Andhra Pradesh",
      "description": "Drone services include professional survey, solar panel inspection, construction monitoring, real estate and event cinematography, live streaming and flight approval coordination in Telangana and Andhra Pradesh.",
      "provider": {
        "@id": `${window.location.origin}/#business`
      },
      "serviceType": [
        "Aerial Photography",
        "Wedding Drone Videography",
        "Real Estate Drone Shoots",
        "Industrial Drone Inspection",
        "Drone Mapping & Survey",
        "Live HD Streaming",
        "Corporate Aerial Video"
      ],
      "areaServed": ["Hyderabad", "Warangal", "Vijayawada", "Nizamabad", "Telangana", "Andhra Pradesh"]
    });
    document.head.appendChild(serviceSchema);

    // Add FAQ schema
    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.id = "services-faq-schema";
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What drone services does SkyDigiLens provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SkyDigiLens provides professional drone surveys, solar panel inspections, construction progress monitoring, real estate and event photography, weddings, live streaming, utility inspection and commercial flight approval coordination across Telangana and Andhra Pradesh."
          }
        },
        {
          "@type": "Question",
          "name": "Are SkyDigiLens drone pilots DGCA licensed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SkyDigiLens provides DGCA-licensed pilots. Flights are subject to airspace availability, current regulations and any permissions or NOCs required from relevant authorities."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get a drone services quote?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Quotes are prepared around the project location, service, duration, crew and deliverables. Contact SkyDigiLens with your brief for a project-specific estimate."
          }
        },
        {
          "@type": "Question",
          "name": "Can you fly drones near airports or restricted areas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some locations require Digital Sky permissions and NOC documentation. SkyDigiLens can help assess applicable requirements and coordinate compliance; a flight may proceed only when required approvals are granted."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does SkyDigiLens serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SkyDigiLens serves Hyderabad, Warangal, Nizamabad, Vijayawada and projects across Telangana and Andhra Pradesh. Contact the team with your location to confirm availability."
          }
        },
      ]
    });
    document.head.appendChild(faqSchema);

    return () => {
      const existingScript = document.getElementById("services-schema");
      if (existingScript?.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
      const existingFaq = document.getElementById("services-faq-schema");
      if (existingFaq?.parentNode) {
        existingFaq.parentNode.removeChild(existingFaq);
      }
      // Clean up canonical link
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink?.parentNode) {
        canonicalLink.parentNode.removeChild(canonicalLink);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection
        title={<>Professional{" "}
          <span className="text-[#0284C7]">
            Drone Services
          </span></>}
        subtitle="Professional aerial surveys, solar inspections, construction progress tracking, real estate shoots, weddings, live streaming and commercial flight-planning support across Telangana and Andhra Pradesh."
      />
      <ServicesSection />
      <CommercialApprovalsSection />
      <PricingSection />

      <TestimonialsSection />
      <FaqSection />
      <LeadFormSection />
      <FinalCTA />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;