import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, ScanLine } from "lucide-react";

const serviceHighlights = [
  {
    name: "Construction progress",
    role: "Residential towers · Telangana",
    location: "Telangana",
    text: "Repeatable aerial progress documentation for residential towers and construction sites, with capture plans aligned to project milestones.",
  },
  {
    name: "Solar inspection",
    role: "Thermal & visual capture",
    location: "Andhra Pradesh",
    text: "Thermal and visual aerial inspection options for solar installations, planned around the asset and the inspection brief.",
  },
  {
    name: "Commercial flight planning",
    role: "Digital Sky & NOC coordination",
    location: "Hyderabad",
    text: "Location-aware planning and coordination support for Digital Sky permissions and NOC documentation when required.",
  },
  {
    name: "Events & cinematography",
    role: "Weddings · events · productions",
    location: "Hyderabad",
    text: "Cinematic aerial production for weddings, live events and Telugu folk-song projects, subject to site permissions and flight conditions.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % serviceHighlights.length);
  const prev = () => setCurrent((p) => (p - 1 + serviceHighlights.length) % serviceHighlights.length);

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">

      {/* 🔵 Soft Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0284C7]/5 via-transparent to-[#0284C7]/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-4 py-1 text-xs rounded-full border border-[#0284C7]/30 text-[#0284C7] bg-[#0284C7]/10 mb-4">
            Aerial service highlights
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
            Mission scopes shaped around your brief
          </h2>
        </motion.div>

        {/* 💬 Card */}
        <div className="relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.4 }}
              className="relative text-center p-6 sm:p-8 lg:p-10 rounded-2xl bg-white/70 backdrop-blur-xl border border-black/10 shadow-md hover:shadow-[#0284C7]/10 transition duration-500"
            >

              <ScanLine className="mx-auto mb-4 h-7 w-7 text-[#0284C7]/60" />

              {/* Text */}
              <p className="text-base sm:text-lg text-black/80 leading-relaxed mb-6 max-w-2xl mx-auto">
                {serviceHighlights[current].text}
              </p>

              {/* User */}
              <div>
                <p className="font-semibold text-black">
                  {serviceHighlights[current].name}
                </p>

                <p className="text-sm text-black/50">
                  {serviceHighlights[current].role}
                </p>

                <p className="text-xs text-[#0284C7] mt-1 flex items-center justify-center gap-1">
                  <MapPin size={11} /> {serviceHighlights[current].location}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* 🎯 Controls */}
          <div className="flex justify-center items-center gap-3 mt-6 sm:mt-8">

            <button
              onClick={prev}
              type="button"
              aria-label="Previous aerial service highlight"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#0284C7]/10 transition"
            >
              <ChevronLeft size={18} className="text-black" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {serviceHighlights.map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => setCurrent(i)}
                  type="button"
                  aria-label={`Show ${item.name} service highlight`}
                  aria-current={i === current ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-[#0284C7] w-6" : "bg-black/20 w-2"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              type="button"
              aria-label="Next aerial service highlight"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#0284C7]/10 transition"
            >
              <ChevronRight size={18} className="text-black" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;