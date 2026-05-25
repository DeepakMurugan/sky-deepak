import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroVideo from "@/assets/hero.mp4";

const HeroSection = ({ title, subtitle, video = heroVideo }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 " />

        {/* Smooth gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/1 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 text-white border border-white px-4 py-1 rounded-full text-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007BE7] animate-pulse" />
            DGCA Certified · Pan India
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          {title || <>Professional Drone Services in{" "}
          <span className="text-[#007BE7]">
            Chennai & Bangalore
          </span></>}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white text-base sm:text-lg max-w-2xl mx-auto mb-10"
        >
          {subtitle || <>Cinematic Aerial Photography, Live Drone Streaming & Advanced Survey Solutions

          Certified Drone Pilots | Latest DJI Technology | Affordable Packages</>}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.skywheelzs.in/contact-us"
            className="bg-[#007BE7] hover:bg-blue-600 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 transition"
          >
            Get Instant Quote
            <ArrowRight size={18} />
          </a>

          {/* <a
            href="#works"
            className="border border-white/30 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-white/10 transition"
          >
            <Play size={18} />
            View Our Work
          </a> */}
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;