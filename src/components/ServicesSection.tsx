import { motion } from "framer-motion";

// ✅ Import service images (replace with your real images)
import eventImg from "@/assets/services/a2.jpg";
import liveImg from "@/assets/services/aa3.jpg";
import realestateImg from "@/assets/services/aa1.jpg";
import promoImg from "@/assets/services/p1.jpg";
import inspectionImg from "@/assets/services/i2.jpg";
import surveyImg from "@/assets/services/r1.jpg";

// ✅ Services Data (SEO + Conversion Optimized)
const services = [
  {
    title: "Aerial Event Photography & Videography",
    desc: "Capture weddings, festivals, and corporate events with cinematic drone shots and 4K aerial videos across Chennai, Bangalore & Tamil Nadu.",
    img: eventImg,
  },
  {
    title: "Drone Live Streaming (HD)",
    desc: "Stream events live from the sky with HD drone streaming for YouTube, Facebook, and large displays across India.",
    img: liveImg,
  },
  {
    title: "Real Estate Drone Shoot",
    desc: "Showcase properties with stunning aerial visuals that attract buyers faster in Chennai, Bangalore, and across India.",
    img: realestateImg,
  },
  {
    title: "Promotional & Cinematic Shoots",
    desc: "Create high-impact brand videos, ads, and campaigns with cinematic drone visuals that captivate audiences.",
    img: promoImg,
  },
  {
    title: "Industrial & Infrastructure Inspection",
    desc: "Inspect rooftops, solar panels, and infrastructure safely with high-resolution drone technology.",
    img: inspectionImg,
  },
  {
    title: "Drone Mapping & Land Survey",
    desc: "Accurate drone mapping and land surveys for construction, agriculture, and infrastructure projects in Tamil Nadu.",
    img: surveyImg,
  },
];

// ✅ Premium Service Card
const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative rounded-3xl overflow-hidden cursor-pointer"
  >
    {/* IMAGE */}
    <div className="relative h-[260px] sm:h-[300px] lg:h-[340px] overflow-hidden">
      <img
        src={service.img}
        alt={service.title}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/1 group-hover:bg-black/10 transition duration-300" />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* CONTENT */}
      <div className="absolute bottom-0 p-4 sm:p-6">
        <h3 className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-2">
          {service.title}
        </h3>

        <p className="text-white/80 text-xs sm:text-sm mb-4 leading-relaxed">
          {service.desc}
        </p>

        {/* <a
          href="/#contact"
          className="text-[#007BE7] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition"
        >
          Know More →
        </a> */}
      </div>
    </div>

    {/* BORDER GLOW */}
    <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-[#007BE7]/40 transition duration-300" />
  </motion.div>
);

// ✅ Main Section
const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 lg:py-20 bg-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#007BE7]/10 via-transparent to-[#007BE7]/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs rounded-full border border-[#007BE7]/30 text-[#007BE7] bg-[#007BE7]/10 mb-5">
            Our Professional Drone Solutions
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            Drone Services in{" "}
            <span className="text-[#007BE7]">
              Chennai, Bangalore & India
            </span>
          </h2>

          <p className="text-black/70 text-sm sm:text-base max-w-2xl mx-auto">
            We provide high-quality drone services for events, real estate, industrial inspection, and aerial cinematography across India.
          </p>
        </motion.div>

        {/* 🏢 SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* 🚀 CTA */}
        <div className="text-center mt-12 sm:mt-14">
          <a
            href="#contact"
            className="inline-block px-6 sm:px-8 py-3 bg-[#007BE7] text-white rounded-full font-medium hover:bg-[#005fcc] transition duration-300"
          >
            Get Free Drone Service Quote
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;