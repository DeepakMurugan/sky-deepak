import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import LeadFormSection from "@/components/LeadFormSection";
import FinalCTA from "@/components/FinalCTA";
import PricingSection from "@/components/PricingSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServicePageHero from "@/components/ServicePageHero";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection, { type FaqItem } from "@/components/FaqSection";

const constructionFaqs: FaqItem[] = [
  { q: "What does construction progress monitoring provide?", a: "We capture planned aerial views that help teams document visible site conditions and compare progress at agreed project milestones. Deliverables are scoped to the project brief." },
  { q: "Can you set up recurring site visits?", a: "Yes. We can agree a repeat capture schedule around milestones, site access and operational requirements." },
  { q: "Do you cover residential tower projects?", a: "Yes. Construction progress documentation for residential towers and other developments is part of our service offering across Hyderabad, Telangana and Andhra Pradesh." },
  { q: "How are flight permissions handled?", a: "We review the project location and applicable airspace requirements during planning. Any required permissions or NOCs must be in place before a flight can proceed." },
  { q: "What details should I include when requesting a quote?", a: "Please share the site location, project type, desired visit frequency, timeline and intended use of the imagery. We will use these details to prepare a suitable scope." },
];

const DroneConstructionMonitoring = () => {
  useEffect(() => {
    document.title = "Drone Construction Monitoring Hyderabad | SkyDigiLens";

    // Meta description & keywords
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) { metaDesc = document.createElement('meta'); metaDesc.name = 'description'; document.head.appendChild(metaDesc); }
    metaDesc.content = 'Aerial construction progress monitoring for residential towers and project sites in Hyderabad, Telangana and Andhra Pradesh. Request a tailored capture plan.';

    let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
    if (!metaKeywords) { metaKeywords = document.createElement('meta'); metaKeywords.name = 'keywords'; document.head.appendChild(metaKeywords); }
    metaKeywords.content = 'construction drone monitoring Hyderabad, residential tower progress tracking, Telangana drone survey, SkyDigiLens';

    // OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (!ogTitle) { ogTitle = document.createElement('meta'); ogTitle.setAttribute('property', 'og:title'); document.head.appendChild(ogTitle); }
    ogTitle.content = 'Drone Construction Monitoring | SkyDigiLens';

    let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (!ogDesc) { ogDesc = document.createElement('meta'); ogDesc.setAttribute('property', 'og:description'); document.head.appendChild(ogDesc); }
    ogDesc.content = metaDesc.content;

    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = `${window.location.origin}/drone-construction-monitoring`;
    document.head.appendChild(canonicalLink);

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.id = 'construction-service-schema';
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Drone Construction Monitoring",
      description: metaDesc.content,
      provider: { "@id": `${window.location.origin}/#business` }
    });
    document.head.appendChild(schema);

    return () => {
      const canonical = document.querySelector('link[rel="canonical"]'); if (canonical?.parentNode) canonical.parentNode.removeChild(canonical);
      const sch = document.getElementById('construction-service-schema'); if (sch?.parentNode) sch.parentNode.removeChild(sch);
      const ogt = document.querySelector('meta[property="og:title"]'); if (ogt?.parentNode) ogt.parentNode.removeChild(ogt);
      const ogd = document.querySelector('meta[property="og:description"]'); if (ogd?.parentNode) ogd.parentNode.removeChild(ogd);
      if (metaDesc?.parentNode) metaDesc.parentNode.removeChild(metaDesc);
      if (metaKeywords?.parentNode) metaKeywords.parentNode.removeChild(metaKeywords);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <ServicePageHero
        eyebrow="Construction & site intelligence"
        title={<>Progress you can see. <span className="text-sky-300">Milestone by milestone.</span></>}
        description="Planned aerial progress tracking for residential towers and construction sites, with repeatable capture schedules and visual records aligned to your project milestones."
        primaryLabel="Plan a site assessment"
      />

      {/* Capabilities */}
      <section id="service-details" className="bg-slate-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold mb-4">Precision Site Progress Tracking & Real Estate Drone Shoots</h2>
            <p className="text-black/70">Choose a recurring or one-time capture plan that gives your team a clear visual record of site conditions and construction progress.</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl">
              <h3 className="font-semibold text-lg">Timeline Monitoring</h3>
              <p className="text-sm text-black/70 mt-2">Agree a repeat capture schedule to compare visual progress at project milestones.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl">
              <h3 className="font-semibold text-lg">Marketing & Sales Assets</h3>
              <p className="text-sm text-black/70 mt-2">Aerial visuals for project updates, stakeholder presentations and marketing materials.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl">
              <h3 className="font-semibold text-lg">Engineering Insights</h3>
              <p className="text-sm text-black/70 mt-2">Organized site imagery and agreed progress deliverables to support project reviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery / Showcase */}
      <VideoShowcaseSection />

      {/* Pricing & CTA */}
      <PricingSection />
      <TestimonialsSection />
      <FaqSection faqData={constructionFaqs} />
      <FinalCTA />

      {/* Lead Form (shared component) */}
      <LeadFormSection />

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default DroneConstructionMonitoring;
