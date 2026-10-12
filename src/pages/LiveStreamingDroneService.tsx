import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Play, Zap, Shield, Globe, Users, Award } from "lucide-react";
import LeadFormSection from "@/components/LeadFormSection";
import FinalCTA from "@/components/FinalCTA";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import PricingSection from "@/components/PricingSection";
import ServicePageHero from "@/components/ServicePageHero";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection, { type FaqItem } from "@/components/FaqSection";

const liveStreamingFaqs: FaqItem[] = [
  { q: "Can a drone provide a live aerial feed at our event?", a: "We plan live aerial coverage around your event brief, venue, connectivity and production setup. The available feed and output depend on the site assessment and technical requirements." },
  { q: "Which events can you cover?", a: "Live aerial coverage can be planned for suitable events and productions, including weddings, outdoor events and corporate functions, subject to site conditions and permissions." },
  { q: "Do you provide the full streaming setup?", a: "The crew and broadcast workflow are scoped to your venue, platform, connectivity and production needs. Share these details so we can confirm the appropriate setup." },
  { q: "Can you fly at any venue in Hyderabad?", a: "No. Venue location, airspace, event rules and required permissions affect whether a drone can operate. We assess these requirements before confirming a flight." },
  { q: "How can I get a quote for live coverage?", a: "Send the venue location, event date and schedule, preferred platform, expected coverage and production requirements for a tailored quote." },
];

const LiveStreamingDroneService = () => {
  useEffect(() => {
    document.title = "Live Drone Streaming Hyderabad | SkyDigiLens";
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', 'Plan live drone streaming for suitable events and productions in Hyderabad and across Telangana and Andhra Pradesh. Venue and airspace permissions apply.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
    const livestreamKeywords = 'live drone streaming, drone live broadcast, event drone streaming, aerial livestream india, drone video streaming, conference drone coverage';
    if (metaKeywords) {
      metaKeywords.content = livestreamKeywords;
    } else {
      const keywordsTag = document.createElement('meta');
      keywordsTag.name = 'keywords';
      keywordsTag.content = livestreamKeywords;
      document.head.appendChild(keywordsTag);
    }
    
    // Add Canonical Tag
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = `${window.location.origin}/live-streaming-drone-service`;
    document.head.appendChild(canonicalLink);
    
    window.scrollTo(0, 0);

    // Service Schema
    const serviceSchema = document.createElement("script");
    serviceSchema.type = "application/ld+json";
    serviceSchema.id = "livestream-service-schema";
    serviceSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Live Drone Streaming Services",
      "description": "Live drone streaming for events and productions across Telangana and Andhra Pradesh, scoped around the venue, connectivity and production requirements.",
      "provider": {
        "@id": `${window.location.origin}/#business`
      },
      "areaServed": ["Hyderabad", "Warangal", "Vijayawada", "Nizamabad", "Telangana", "Andhra Pradesh"],
      "serviceType": [
        "Event Live Streaming",
        "Conference Coverage",
        "Aerial Event Coverage"
      ]
    });
    document.head.appendChild(serviceSchema);

    // FAQ Schema
    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.id = "livestream-faq-schema";
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": liveStreamingFaqs.map(({ q, a }) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": { "@type": "Answer", "text": a }
      }))
    });
    document.head.appendChild(faqSchema);

    return () => {
      const serviceScript = document.getElementById("livestream-service-schema");
      if (serviceScript?.parentNode) {
        serviceScript.parentNode.removeChild(serviceScript);
      }
      const faqScript = document.getElementById("livestream-faq-schema");
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

  const features = [
    { icon: Play, title: "Aerial live perspective", desc: "Bring an aerial camera angle into the event’s planned video production" },
    { icon: Zap, title: "Venue-led setup", desc: "Plan the setup around site conditions, connectivity and production requirements" },
    { icon: Globe, title: "Platform coordination", desc: "Confirm the intended stream destination and signal handoff during pre-production" },
    { icon: Users, title: "Crew coordination", desc: "Align flight operation and streaming requirements with the event team" },
    { icon: Shield, title: "Flight-aware planning", desc: "Review of site conditions and applicable flight permissions before the event" },
    { icon: Award, title: "Production coordination", desc: "Streaming and crew requirements scoped with your event production team" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <ServicePageHero
        eyebrow="Live aerial coverage"
        title={<>Bring the live moment into a <span className="text-sky-300">new frame.</span></>}
        description="Add a dynamic aerial perspective to events, productions and broadcasts across Hyderabad and the region. Streaming format and technical setup are scoped to your venue, connectivity and production needs."
        primaryLabel="Plan live coverage"
      />

      {/* Features Grid */}
      <section id="service-details" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black mb-4 leading-tight">
Why choose SkyDigiLens for live drone coverage?</h2>
            <p className="text-black/70 text-sm sm:text-base">
              A venue-led production plan that coordinates aerial operations, connectivity and the event team.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-950/5 sm:p-8"
              >
                <feature.icon className="w-10 h-10 text-[#0284C7] mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-black/60 text-sm sm:text-base">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black mb-4 leading-tight">
Drone Live Streaming for Events & Productions in Hyderabad</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Conferences & seminars", desc: "Include planned aerial perspectives in event coverage when the venue and flight permissions allow." },
              { title: "Music events & productions", desc: "Coordinate aerial shots with stage schedules, production teams and approved flight areas." },
              { title: "Outdoor sports events", desc: "Discuss aerial coverage for suitable outdoor events, subject to safety planning and applicable permissions." },
              { title: "Corporate events", desc: "Add an aerial camera perspective to launches and brand events when site conditions permit." },
              { title: "Weddings & celebrations", desc: "Plan live aerial coverage for celebrations around the venue layout, schedule and guest experience." },
              { title: "Property presentations", desc: "Explore live aerial property views as part of a broader production and connectivity plan." },
            ].map((usecase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white border border-black/10 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-black mb-2">
                  {usecase.title}
                </h3>
                <p className="text-black/60 text-sm">
                  {usecase.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black mb-4 leading-tight">
              Live Drone Streaming: Production Planning
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-6 bg-gradient-to-br from-[#0284C7]/10 to-transparent rounded-2xl border border-[#0284C7]/20">
                <h3 className="text-lg font-bold text-black mb-2">Venue & airspace review</h3>
                <ul className="space-y-2 text-sm text-black/70">
                  <li>✓ Check the event location and operating conditions</li>
                  <li>✓ Review applicable flight permissions and venue rules</li>
                  <li>✓ Plan aerial shots around the event schedule</li>
                  <li>✓ Confirm the flight scope before booking</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#0284C7]/10 to-transparent rounded-2xl border border-[#0284C7]/20">
                <h3 className="text-lg font-bold text-black mb-2">Streaming requirements</h3>
                <ul className="space-y-2 text-sm text-black/70">
                  <li>✓ Discuss your target platform and feed requirements</li>
                  <li>✓ Assess venue connectivity during pre-production</li>
                  <li>✓ Coordinate the signal handoff with your production crew</li>
                  <li>✓ Confirm feasible output after the site review</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-6 bg-gradient-to-br from-[#0284C7]/10 to-transparent rounded-2xl border border-[#0284C7]/20">
                <h3 className="text-lg font-bold text-black mb-2">Event coordination</h3>
                <ul className="space-y-2 text-sm text-black/70">
                  <li>✓ Confirm the event date and run of show</li>
                  <li>✓ Coordinate with venue and event production teams</li>
                  <li>✓ Agree roles for camera operation and stream management</li>
                  <li>✓ Plan backup options with your production team</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#0284C7]/10 to-transparent rounded-2xl border border-[#0284C7]/20">
                <h3 className="text-lg font-bold text-black mb-2">Aerial capture planning</h3>
                <ul className="space-y-2 text-sm text-black/70">
                  <li>✓ Match aircraft and camera approach to the brief</li>
                  <li>✓ Identify safe launch, landing and operating areas</li>
                  <li>✓ Plan suitable movements and camera angles</li>
                  <li>✓ Keep operations subject to site and airspace approval</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <PricingSection />
      <TestimonialsSection />
      <FaqSection faqData={liveStreamingFaqs} />
      <LeadFormSection />
      <FinalCTA />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default LiveStreamingDroneService;
