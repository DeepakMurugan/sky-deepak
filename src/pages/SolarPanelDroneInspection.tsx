import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import ProjectsSection from "@/components/ProjectsSection";
import LeadFormSection from "@/components/LeadFormSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import PricingSection from "@/components/PricingSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServicePageHero from "@/components/ServicePageHero";
import FaqSection, { type FaqItem } from "@/components/FaqSection";

const solarFaqs: FaqItem[] = [
  { q: "What does a solar drone inspection include?", a: "We can plan visual and thermal aerial capture based on your site, asset coverage and inspection goals. The scope and deliverables are agreed before the visit." },
  { q: "Which locations do you cover?", a: "SkyDigiLens serves solar projects across Telangana and Andhra Pradesh, including Hyderabad. Share your site location to confirm availability and travel requirements." },
  { q: "Can you inspect a site near an airport or restricted airspace?", a: "Some locations require Digital Sky permissions or NOC documentation. We help assess applicable requirements, and flights proceed only when required approvals are in place." },
  { q: "How do I get an inspection quote?", a: "Send the project location, approximate site size, inspection goals and preferred dates. We will scope the crew, capture plan and deliverables for a project-specific quote." },
];

const SolarPanelDroneInspection = () => {
  useEffect(() => {
    document.title = "Solar Panel Drone Inspection Telangana | SkyDigiLens";

    // Meta Description & Keywords
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = 'Thermal and visual drone inspections for solar installations across Telangana and Andhra Pradesh, with site-specific flight planning and permission checks.';

    let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'solar panel drone inspection Telangana, thermal solar inspection Andhra Pradesh, drone services Hyderabad, SkyDigiLens';

    // Open Graph
    let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (!ogTitle) { ogTitle = document.createElement('meta'); ogTitle.setAttribute('property', 'og:title'); document.head.appendChild(ogTitle); }
    ogTitle.content = 'Solar Panel Drone Inspection | SkyDigiLens';

    let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (!ogDesc) { ogDesc = document.createElement('meta'); ogDesc.setAttribute('property', 'og:description'); document.head.appendChild(ogDesc); }
    ogDesc.content = metaDesc.content;

    // Canonical
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = `${window.location.origin}/solar-panel-drone-inspection`;
    document.head.appendChild(canonicalLink);

    // Service schema (lightweight)
    const serviceSchema = document.createElement('script');
    serviceSchema.type = 'application/ld+json';
    serviceSchema.id = 'solar-service-schema';
    serviceSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Solar Panel Drone Inspection",
      description: metaDesc.content,
      provider: { "@id": `${window.location.origin}/#business` },
      serviceType: ["Thermal Inspection","Aerial Photography","Hot-spot Mapping"]
    });
    document.head.appendChild(serviceSchema);

    return () => {
      // cleanup
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical?.parentNode) canonical.parentNode.removeChild(canonical);
      const schema = document.getElementById('solar-service-schema');
      if (schema?.parentNode) schema.parentNode.removeChild(schema);
      const ogt = document.querySelector('meta[property="og:title"]'); if (ogt?.parentNode) ogt.parentNode.removeChild(ogt);
      const ogd = document.querySelector('meta[property="og:description"]'); if (ogd?.parentNode) ogd.parentNode.removeChild(ogd);
      // leave description/keywords in place if you prefer; remove them for strict cleanup
      if (metaDesc?.parentNode) metaDesc.parentNode.removeChild(metaDesc);
      if (metaKeywords?.parentNode) metaKeywords.parentNode.removeChild(metaKeywords);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <ServicePageHero
        eyebrow="Solar asset intelligence"
        title={<>See more across every <span className="text-sky-300">solar array.</span></>}
        description="Thermal and visual drone inspections for solar installations across Telangana and Andhra Pradesh. We scope the capture around your site, inspection goals and applicable flight permissions."
        primaryLabel="Plan a solar inspection"
      />

      {/* Capabilities */}
      <section id="service-details" className="bg-slate-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold mb-4">Industrial-Grade Aerial Intelligence for Renewable Energy</h2>
            <p className="text-black/70">Choose a focused visual or thermal inspection plan, with the site, desired outputs and operating requirements agreed before deployment.</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl">
              <h3 className="font-semibold text-lg">Marketing & Advertising</h3>
              <p className="text-sm text-black/70 mt-2">Aerial visual coverage of the site for presentations, documentation and promotional use.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl">
              <h3 className="font-semibold text-lg">Asset Monitoring</h3>
              <p className="text-sm text-black/70 mt-2">Thermal and visual inspection options to document solar assets against the agreed inspection brief.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl">
              <h3 className="font-semibold text-lg">Compliance & Reporting</h3>
              <p className="text-sm text-black/70 mt-2">Licensed pilots, site planning and applicable flight permission checks before deployment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery / Showcase */}
      <VideoShowcaseSection />

      {/* Projects / Case Studies */}
      {/* Pricing & CTA */}
      <PricingSection />
      <TestimonialsSection />
      <FaqSection faqData={solarFaqs} />
      <FinalCTA />

      {/* Lead Form (shared component) */}
      <LeadFormSection />

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default SolarPanelDroneInspection;
