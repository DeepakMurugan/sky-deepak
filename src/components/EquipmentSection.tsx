import { motion } from "framer-motion";

import matice4e from "@/assets/e1.jpeg";
import mavic4pro from "@/assets/e2.jpeg";
import mavic3pro from "@/assets/e3.jpeg";
import air3 from "@/assets/e4.jpeg";
import remote from "@/assets/e5.jpeg";
import air2s from "@/assets/e6.jpeg";

const equipment = [
  {
    img: matice4e,
    title: "DJI Matrice 4E",
    desc: "Advanced enterprise drone for high-precision mapping, inspections, and large-scale data collection across India.",
  },
  {
    img: mavic4pro,
    title: "DJI Mavic 4 Pro",
    desc: "Powerful cinematic drone for aerial videography, mapping, and live streaming with next-gen DJI tech.",
  },
  {
    img: mavic3pro,
    title: "DJI Mavic 3 Pro",
    desc: "Triple-camera flagship delivering stunning 5.1K video, zoom capabilities, and creative aerial shots in Chennai.",
  },
  {
    img: air3,
    title: "DJI Air 3 / 3S",
    desc: "Dual-camera drone for cinematic aerials, mapping, and live events with precision and safety.",
  },
  {
    img: remote,
    title: "Latest DJI Controllers",
    desc: "Crystal-clear live view, ultra-responsive controls, and seamless flight operations for professional missions.",
  },
  {
    img: air2s,
    title: "DJI Air 2S",
    desc: "1-inch sensor drone capturing 5.4K video and high-quality aerial photography across Tamil Nadu & Bangalore.",
  },
];

const EquipmentSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">

      {/* 🔵 Blue Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#007BE7]/10 via-transparent to-[#007BE7]/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-xs rounded-full border border-[#007BE7]/30 text-[#007BE7] bg-[#007BE7]/10 mb-4">
            Our Technology
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4">
            Our Professional{" "}
            <span className="text-[#007BE7]">
              Drone Equipment
            </span>
          </h2>

          <p className="text-white/60 text-sm sm:text-base">
            Powered by advanced DJI drones and cutting-edge technology for precision, safety, and cinematic excellence across Chennai, Bangalore & India.
          </p>
        </motion.div>

        {/* 🚀 Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {equipment.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#007BE7]/40 transition duration-500"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[180px] sm:h-[200px] lg:h-[220px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">

                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#007BE7] transition">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-[#007BE7]/10 via-transparent to-transparent transition duration-500" />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default EquipmentSection;