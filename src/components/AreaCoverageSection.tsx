import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const AreaCoverageSection = ({ city, areas, highlights }) => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0284C7]/5 via-transparent to-[#0284C7]/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🔥 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs rounded-full border border-[#0284C7]/30 text-[#0284C7] bg-[#0284C7]/10 mb-5">
            Service Areas
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            Drone Services Across{" "}
            <span className="text-[#0284C7]">{city}</span>
          </h2>

          <p className="text-black/70 text-sm sm:text-base max-w-2xl mx-auto">
            We provide comprehensive drone services throughout {city} and surrounding areas,
            ensuring fast response times and professional service delivery.
          </p>
        </motion.div>

        {/* AREAS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex items-center gap-4 p-4 sm:p-6 rounded-2xl border border-black/10 hover:border-[#0284C7]/30 hover:bg-[#0284C7]/5 transition duration-300"
            >
              <MapPin className="w-6 h-6 text-[#0284C7] group-hover:scale-110 transition" />
              <div>
                <h3 className="font-semibold text-black mb-1">{area.name}</h3>
                <p className="text-black/60 text-sm">{area.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-6 sm:p-8 lg:p-10"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 text-center">
            Why Choose Our {city} Drone Services?
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-[#0284C7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-black mb-2">{highlight.title}</h4>
                <p className="text-black/60 text-sm">{highlight.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AreaCoverageSection;