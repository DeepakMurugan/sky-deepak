import { motion } from "framer-motion";
import teamPhoto from "@/assets/siva-Skywheelzs.jpeg";
import droneTech from "@/assets/drone-tech.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 sm:py-18 lg:py-18 bg-white overflow-hidden">
      
      {/* Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#007BE7]/5 via-transparent to-[#007BE7]/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 text-xs sm:text-sm rounded-full border border-[#007BE7]/30 text-[#007BE7] bg-[#007BE7]/5 mb-6">
              Professional Drone Services in India
            </span>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 leading-tight text-black">
              Drone Services in{" "}
              <span className="text-[#007BE7]">
                Chennai & Bangalore
              </span>
            </h2>

            {/* Paragraphs */}
            <p className="text-base sm:text-lg mb-5 text-black">
              I’m <strong>Siva</strong>, founder of Skywheelzs and a DGCA-certified professional drone pilot in India. 
              We specialize in aerial photography, videography, and drone survey services for businesses across Chennai, 
              Bangalore, and Tamil Nadu.
            </p>

            <p className="text-black text-base sm:text-lg leading-relaxed mb-5">
              Using advanced DJI drones and enterprise-grade technology, we deliver high-quality aerial cinematography, 
              land surveys, industrial inspections, and live HD drone streaming solutions tailored for modern businesses.
            </p>

            <p className="text-black text-base sm:text-lg leading-relaxed mb-8">
              With over <strong>500+ successful drone projects</strong>, we are trusted by construction, real estate, and 
              industrial clients across India. Our focus is on precision, safety, and delivering measurable results.
            </p>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#007BE7]/5 border border-[#007BE7]/10">
                <div className="text-xl sm:text-2xl font-bold text-[#007BE7] mb-1">2018</div>
                <div className="text-xs sm:text-sm text-black/60">Founded in India</div>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#007BE7]/5 border border-[#007BE7]/10">
                <div className="text-xl sm:text-2xl font-bold text-[#007BE7] mb-1">500+</div>
                <div className="text-xs sm:text-sm text-black/60">Drone Projects Delivered</div>
              </div>
            </div> */}

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={teamPhoto}
                alt="Professional drone team in Chennai using DJI drones"
                className="w-full h-auto object-cover"
              />
            </div>



          </motion.div>

        </div>

        {/* 🔥 VALUES SECTION */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "High Precision Drone Surveys",
              desc: "Accurate aerial mapping and land surveys using RTK/PPK technology for construction and industrial projects.",
            },
            {
              title: "Certified & Safe Operations",
              desc: "DGCA-certified drone pilots ensuring safe, compliant, and professional drone operations across India.",
            },
            {
              title: "Advanced Drone Technology",
              desc: "Using latest DJI drones for aerial photography, videography, inspections, and live HD streaming.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-[#007BE7]/5 border border-[#007BE7]/10 hover:bg-[#007BE7]/10 transition duration-300"
            >
              <div className="text-4xl sm:text-5xl font-bold text-[#007BE7]/10 absolute top-4 right-6">
                0{i + 1}
              </div>

              <h3 className="font-semibold text-base sm:text-lg mb-3 text-black">
                {item.title}
              </h3>

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

export default AboutSection;