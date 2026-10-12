import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Camera, TrendingUp, Clock, MapPin, Zap, Award } from "lucide-react";
import LeadFormSection from "@/components/LeadFormSection";
import FinalCTA from "@/components/FinalCTA";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import PricingSection from "@/components/PricingSection";
import ServicePageHero from "@/components/ServicePageHero";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection, { type FaqItem } from "@/components/FaqSection";

const realEstateFaqs: FaqItem[] = [
  { q: "What properties can you photograph from the air?", a: "We plan aerial photography and video for suitable residential, commercial and development properties, based on the site and intended use of the content." },
  { q: "Can you capture both photos and video?", a: "Yes. The shoot can be scoped for still photography, aerial video or a combination, with the shot list and deliverables agreed in advance." },
  { q: "Do you cover properties outside Hyderabad?", a: "We serve Hyderabad and projects across Telangana and Andhra Pradesh, including Warangal, Vijayawada and Nizamabad. Share the exact location to confirm availability." },
  { q: "Are permissions needed for a property shoot?", a: "Requirements depend on the location and airspace. We review applicable flight rules and permissions during planning; required approvals must be granted before flying." },
  { q: "How do I request a property shoot quote?", a: "Share the property location, type, preferred date, desired photos or video and how the content will be used. We will recommend a suitable scope and quote." },
];

const RealEstateDroneService = () => {
  useEffect(() => {
    document.title = "Real Estate Drone Photography Hyderabad | SkyDigiLens";
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', 'Real estate drone photography and aerial video for residential towers, plots and commercial properties in Hyderabad, Telangana and Andhra Pradesh.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
    const realestateKeywords = 'real estate drone photography Hyderabad, property aerial videography Telangana, drone property shoots Andhra Pradesh, SkyDigiLens';
    if (metaKeywords) {
      metaKeywords.content = realestateKeywords;
    } else {
      const keywordsTag = document.createElement('meta');
      keywordsTag.name = 'keywords';
      keywordsTag.content = realestateKeywords;
      document.head.appendChild(keywordsTag);
    }
    
    // Add Canonical Tag
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = `${window.location.origin}/real-estate-drone-service`;
    document.head.appendChild(canonicalLink);
    
    window.scrollTo(0, 0);

    // Service Schema
    const serviceSchema = document.createElement("script");
    serviceSchema.type = "application/ld+json";
    serviceSchema.id = "realestate-service-schema";
    serviceSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Real Estate Drone Photography & Videography",
      "description": "Professional aerial photography and videography for real estate properties across Telangana and Andhra Pradesh, with DGCA-licensed pilots and flight planning.",
      "provider": {
        "@id": `${window.location.origin}/#business`
      },
      "areaServed": ["Hyderabad", "Warangal", "Vijayawada", "Nizamabad", "Telangana", "Andhra Pradesh"],
      "serviceType": [
        "Real Estate Photography",
        "Property Aerial Video",
        "Virtual Property Tours",
        "Drone Floor Plans",
        "Construction Progress Monitoring"
      ],
    });
    document.head.appendChild(serviceSchema);

    // FAQ Schema
    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.id = "realestate-faq-schema";
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can real estate drone photography help sell properties faster?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aerial property photography and video provide a clear view of the site, its scale and surrounding context for marketing and project presentations."
          }
        },
        {
          "@type": "Question",
          "name": "What is the cost for real estate drone photography?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Project pricing depends on location, site conditions, crew, flight approvals and deliverables. Contact SkyDigiLens for a project-specific quote."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to receive drone property photos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Delivery timelines are confirmed based on project scope and the agreed editing and media deliverables."
          }
        },
        {
          "@type": "Question",
          "name": "Can you provide 360-degree drone property tours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aerial video and still photo outputs can be scoped to your property presentation requirements. Contact SkyDigiLens to discuss the formats available for your project."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide aerial floor plans and mapping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aerial surveys and mapping can be discussed as a separate project scope. Confirm the required measurements, accuracy and output format with the team before booking."
          }
        },
        {
          "@type": "Question",
          "name": "Which real estate platforms do drone photos work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our drone photography works with all major platforms: Magicbricks, OLX, 99acres, PropTiger, Housing.com, Zillow, and personal property websites. High-quality aerial images are SEO-friendly and boost listing visibility."
          }
        }
      ]
    });
    document.head.appendChild(faqSchema);

    return () => {
      const serviceScript = document.getElementById("realestate-service-schema");
      if (serviceScript?.parentNode) {
        serviceScript.parentNode.removeChild(serviceScript);
      }
      const faqScript = document.getElementById("realestate-faq-schema");
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
    { icon: Camera, title: "Aerial property photography", desc: "Professional aerial images that show a property’s layout, scale and relationship to its surroundings." },
    { icon: TrendingUp, title: "Property context", desc: "Show the site, its scale, access and surroundings from an aerial perspective" },
    { icon: Clock, title: "Scope-led delivery", desc: "Agree the capture schedule and edited photo or video deliverables in advance" },
    { icon: MapPin, title: "Location Context", desc: "Show neighborhood, proximity to roads, schools, and amenities that buyers care about" },
    { icon: Zap, title: "Marketing-ready media", desc: "Create visual assets suited to your website, presentation and selected listing channels" },
    { icon: Award, title: "Professional crew", desc: "DGCA-licensed pilots and equipment selected for the location and brief" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <ServicePageHero
        eyebrow="Property & real estate"
        title={<>Show the property. <span className="text-sky-300">Reveal its setting.</span></>}
        description="Polished aerial photography and video for residential towers, land and commercial properties across Hyderabad and the region. Capture the property, its scale and the surrounding context in one visual story."
        primaryLabel="Plan a property shoot"
      />

      {/* Key Benefits */}
      <section id="service-details" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black mb-4 leading-tight">
              Why Real Estate Professionals Choose Drone Photography

            </h2>
            <p className="text-black/70 text-sm sm:text-base">
              Present property scale, access and surroundings with planned drone photography and aerial video.
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
                <feature.icon className="mb-4 h-10 w-10 text-sky-600" />
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

      {/* Property Types */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black mb-4 leading-tight">
Real Estate Drone Photography for Different Property Types
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Residential Apartments", desc: "Multi-story buildings, gated communities, and apartment complexes with aerial context" },
              { title: "Luxury Villas & Bungalows", desc: "High-end properties showcasing landscaping, pools, and neighborhood premium locations" },
              { title: "Commercial Properties", desc: "Office complexes, retail spaces, and industrial units with accessibility context" },
              { title: "Land & Agricultural", desc: "Plot sizes, boundary measurements, and area context for land parcels" },
              { title: "Resort & Hospitality", desc: "Hotels, resorts, and vacation properties with pool and facility perspectives" },
              { title: "Development Projects", desc: "Construction monitoring, progress documentation, and project marketing videos" },
            ].map((property, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-950/5"
              >
                <h3 className="text-lg font-bold text-black mb-2">
                  {property.title}
                </h3>
                <p className="text-black/60 text-sm">
                  {property.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      {/* <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black mb-4 leading-tight">
              Our Real Estate Packages
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Starter Package",
                price: "₹5,000",
                features: [
                  "15-20 aerial photos",
                  "Basic editing",
                  "24-hour delivery",
                  "High-resolution files",
                  "Platform-ready formats"
                ]
              },
              {
                name: "Professional Package",
                price: "₹10,000",
                features: [
                  "20+ 4K photos",
                  "5-minute drone video",
                  "Professional editing",
                  "Drone floor plan",
                  "Same-day booking available",
                  "All listing platform formats"
                ],
                popular: true
              },
              {
                name: "Premium Package",
                price: "₹20,000+",
                features: [
                  "Complete 4K video tour",
                  "50+ professional photos",
                  "360-degree tour",
                  "Orthomosaic mapping",
                  "3D virtual walkthrough",
                  "Construction progress docs"
                ]
              }
            ].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 sm:p-8 rounded-2xl border ${
                  pkg.popular
                    ? "bg-gradient-to-br from-[#0284C7]/10 to-transparent border-[#0284C7]/50 ring-2 ring-[#0284C7]/30"
                    : "bg-white border-black/10"
                }`}
              >
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                  {pkg.name}
                </h3>
                <div className="text-2xl sm:text-3xl font-bold text-[#0284C7] mb-6">
                  {pkg.price}
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <span className="text-[#0284C7] mt-1">✓</span>
                      <span className="text-black/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 px-4 py-2 bg-[#0284C7] text-white rounded-lg font-medium hover:bg-[#005fcc] transition">
                  Get Quote
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Listing Platform Benefits */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black mb-4 leading-tight">
Optimized for Real Estate Listings & Property Portals
            </h2>
            <p className="text-black/70 text-sm sm:text-base">
              Our drone photos are formatted and optimized for all major Indian property listing websites
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Magicbricks", "99acres", "Housing.com", "OLX", "PropTiger", "Sulekha", "IndiaProperty", "LocalOye"].map((platform, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg bg-white border border-black/10 text-center"
              >
                <p className="text-sm font-semibold text-black">{platform}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />
      <TestimonialsSection />
      <FaqSection faqData={realEstateFaqs} />
      <LeadFormSection />
      <FinalCTA />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default RealEstateDroneService;
