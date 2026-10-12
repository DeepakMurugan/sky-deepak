import { motion } from "framer-motion";
import { Shield, Cpu, Zap, Target, Clock, BarChart3 } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Licensed pilots & responsible operations",
    desc: "DGCA-licensed pilots for event operations, with site-aware planning and flight requirements checked before each mission.",
  },
  {
    icon: Cpu,
    title: "A fleet for varied missions",
    desc: "DJI Matrice 4E, Mavic 4 Pro, Air 3S, Avata 360, custom FPV with GoPros and Sony FX3A camera coverage.",
  },
  {
    icon: Zap,
    title: "Clear project coordination",
    desc: "We align the crew, site plan and deliverables with your project schedule before confirming the flight.",
  },
  {
    icon: Target,
    title: "Purpose-built aerial capture",
    desc: "Capture plans tailored to drone survey, solar inspection, tower progress monitoring and cinematic production briefs.",
  },
  {
    icon: Clock,
    title: "Compliance-aware planning",
    desc: "We review airspace constraints and coordinate required permissions and NOCs when needed.",
  },
  {
    icon: BarChart3,
    title: "Agreed deliverables",
    desc: "Confirm outputs up front, from aerial photos and edited video to visual inspection and progress documentation.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">

      {/* 🔵 Soft Blue Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0284C7]/5 via-transparent to-[#0284C7]/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs rounded-full border border-[#0284C7]/30 text-[#0284C7] bg-[#0284C7]/10 mb-4">
            Why Choose Us
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            Aerial Services Built Around{" "}
            <span className="text-[#0284C7]">
              Your Mission
            </span>
          </h2>

          <p className="text-black/60 text-sm sm:text-base">
            Licensed pilots, considered planning and production-ready results for projects across Hyderabad, Telangana and Andhra Pradesh.
          </p>
        </motion.div>

        {/* 🚀 Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-5 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-black/10 hover:border-[#0284C7]/40 hover:shadow-lg hover:shadow-[#0284C7]/10 transition duration-500"
            >

              {/* Icon */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0284C7]/10 flex items-center justify-center mb-4 group-hover:bg-[#0284C7]/20 transition">
                <item.icon className="w-5 h-5 text-[#0284C7]" />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-base sm:text-lg text-black mb-2 group-hover:text-[#0284C7] transition">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-black/60 leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;