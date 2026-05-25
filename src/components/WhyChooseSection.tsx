import { motion } from "framer-motion";
import { Shield, Cpu, Zap, Target, Clock, BarChart3 } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "DGCA Certified Drone Services",
    desc: "Government-approved drone operations across Chennai, Bangalore, and all over India.",
  },
  {
    icon: Cpu,
    title: "Advanced DJI Drones",
    desc: "We use the latest DJI drones for high-quality aerial photos, videos, and accurate data.",
  },
  {
    icon: Zap,
    title: "Fast Project Delivery",
    desc: "Quick turnaround time with same-day or 48-hour delivery for most drone projects.",
  },
  {
    icon: Target,
    title: "High Accuracy Results",
    desc: "Survey-grade accuracy using RTK/PPK technology for mapping and inspections.",
  },
  {
    icon: Clock,
    title: "Reliable Support",
    desc: "Dedicated team support from planning to final delivery for every project.",
  },
  {
    icon: BarChart3,
    title: "Actionable Reports",
    desc: "We provide processed data, reports, and insights — not just raw drone footage.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">

      {/* 🔵 Soft Blue Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#007BE7]/5 via-transparent to-[#007BE7]/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs rounded-full border border-[#007BE7]/30 text-[#007BE7] bg-[#007BE7]/10 mb-4">
            Why Choose Us
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            Professional Drone Services in{" "}
            <span className="text-[#007BE7]">
              Chennai, Bangalore & India
            </span>
          </h2>

          <p className="text-black/60 text-sm sm:text-base">
            We deliver high-quality drone photography, mapping, and inspection services with precision, speed, and reliability.
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
              className="group p-5 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-black/10 hover:border-[#007BE7]/40 hover:shadow-lg hover:shadow-[#007BE7]/10 transition duration-500"
            >

              {/* Icon */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#007BE7]/10 flex items-center justify-center mb-4 group-hover:bg-[#007BE7]/20 transition">
                <item.icon className="w-5 h-5 text-[#007BE7]" />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-base sm:text-lg text-black mb-2 group-hover:text-[#007BE7] transition">
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