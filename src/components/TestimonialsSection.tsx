import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, MapPin, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Project Director, L&T Construction",
    location: "Chennai",
    text: "Skywheelzs helped us track construction progress faster and more clearly. We saved time and improved decision-making with their drone data.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "VP Operations, Prestige Group",
    location: "Bangalore",
    text: "High-quality aerial data and professional service. We now use their drone services for all our real estate projects.",
    rating: 5,
  },
  {
    name: "Vikram Menon",
    role: "Plant Manager, NTPC",
    location: "Chennai",
    text: "Their drone inspections helped us detect issues early. Very reliable and highly professional team.",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    role: "Event Planner",
    location: "Bangalore",
    text: "Amazing drone coverage for our event. The visuals were cinematic and truly unforgettable.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">

      {/* 🔵 Soft Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#007BE7]/5 via-transparent to-[#007BE7]/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-4 py-1 text-xs rounded-full border border-[#007BE7]/30 text-[#007BE7] bg-[#007BE7]/10 mb-4">
            Testimonials
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
            What Our Clients Say
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
              className="relative text-center p-6 sm:p-8 lg:p-10 rounded-2xl bg-white/70 backdrop-blur-xl border border-black/10 shadow-md hover:shadow-[#007BE7]/10 transition duration-500"
            >

              {/* Quote Icon */}
              <Quote className="w-7 h-7 text-[#007BE7]/20 mx-auto mb-4" />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#007BE7] text-[#007BE7]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-base sm:text-lg text-black/80 leading-relaxed mb-6 max-w-2xl mx-auto">
                "{testimonials[current].text}"
              </p>

              {/* User */}
              <div>
                <p className="font-semibold text-black">
                  {testimonials[current].name}
                </p>

                <p className="text-sm text-black/50">
                  {testimonials[current].role}
                </p>

                <p className="text-xs text-[#007BE7] mt-1 flex items-center justify-center gap-1">
                  <MapPin size={11} /> {testimonials[current].location}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* 🎯 Controls */}
          <div className="flex justify-center items-center gap-3 mt-6 sm:mt-8">

            <button
              onClick={prev}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#007BE7]/10 transition"
            >
              <ChevronLeft size={18} className="text-black" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-[#007BE7] w-6" : "bg-black/20 w-2"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#007BE7]/10 transition"
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