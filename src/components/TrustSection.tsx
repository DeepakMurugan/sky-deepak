import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Shield } from "lucide-react";
// import "..index.css";
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo1.png";
import logo3 from "@/assets/logo1.png";
import logo4 from "@/assets/logo1.png";




const clientLogos = [
  logo1,
  logo2,
  logo3,
  logo4,
   logo1,
  logo2,
  logo3,
  logo4,
   logo1,
  logo2,
  logo3,
  logo4,
];

function AnimatedCounter({ value, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(value / 100);

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [inView, value]);

  return <span>{count}{suffix}</span>;
}

const TrustSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
<section
  className="relative py-16 sm:py-20 lg:py-24 bg-white text-black overflow-hidden"
  ref={ref}
>
  {/* 🔵 Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#007BE7]/5 via-transparent to-[#007BE7]/10" />

  {/* Top Divider */}
  <div className="absolute top-0 left-0 w-full h-px bg-black/10" />

  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* 🔥 Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="text-center mb-12 sm:mb-16"
    >
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
        Trusted by Businesses Across{" "}
        <span className="text-[#007BE7]">
          Chennai & Bangalore
        </span>
      </h2>

      <p className="text-black/60 text-sm sm:text-base lg:text-lg max-w-xl sm:max-w-2xl mx-auto">
        Delivering 500+ successful drone projects with certified pilots,
        advanced DJI equipment, and reliable service across India.
      </p>
    </motion.div>

    {/* 📊 Counters */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
      {[
        { value: 500, suffix: "+", label: "Projects" },
        { value: 25, suffix: "+", label: "Pilots" },
        { value: 15, suffix: "+", label: "Cities" },
        { value: 200, suffix: "+", label: "Clients" },
      ].map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.1 }}
          className="text-center p-3 sm:p-4 rounded-xl hover:bg-[#007BE7]/5 transition hover:scale-105"
        >
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#007BE7]">
            <AnimatedCounter value={item.value} suffix={item.suffix} inView={inView} />
          </div>
          <div className="text-black/50 text-[10px] sm:text-xs mt-1 uppercase tracking-wide">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>

    {/* 🛡 Badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      className="flex justify-center mb-8 sm:mb-10 px-4"
    >
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-3 
        px-4 sm:px-6 py-2 sm:py-3 
        rounded-full border border-[#007BE7]/20 bg-[#007BE7]/5 
        backdrop-blur-md hover:scale-105 transition text-center"
      >
        <Shield className="w-4 h-4 text-[#007BE7]" />

        <span className="font-semibold text-black text-sm sm:text-base">
          DGCA Certified
        </span>

        <span className="text-black/50 text-xs sm:text-sm">
          • Govt Approved
        </span>
      </div>
    </motion.div>

    {/* ✅ Trust Line */}
    <p className="text-center text-black/50 text-xs sm:text-sm mb-10 sm:mb-12 px-4 leading-relaxed">
      ✔ Trusted by Construction & Real Estate Companies <br className="sm:hidden"/>
      ✔ Fast Turnaround · High Accuracy · Professional Service
    </p>

   {/* 🏢 LOGO IMAGES SCROLL */}
<div className="overflow-hidden w-full">
  <p className="text-center text-[10px] sm:text-xs text-black/40 mb-4 sm:mb-6 uppercase tracking-[0.2em]">
    Trusted by Industry Leaders
  </p>

  <div className="relative w-full overflow-hidden">
    <div className="flex w-max animate-marquee items-center">

     
    {/* First set */}
{clientLogos.map((logo, i) => (
  <div key={`first-${i}`} className="mx-6 sm:mx-10 lg:mx-14 flex-shrink-0">
    <img
      src={logo}
      alt="client logo"
      className="h-10 sm:h-14 lg:h-15 xl:h-20 w-auto object-contain 
      opacity-60 grayscale hover:opacity-100 hover:grayscale-0 
      transition duration-300"
    />
  </div>
))}

{/* Duplicate set */}
{clientLogos.map((logo, i) => (
  <div key={`second-${i}`} className="mx-6 sm:mx-10 lg:mx-14 flex-shrink-0">
    <img
      src={logo}
      alt="client logo"
      className="h-10 sm:h-14 lg:h-15 xl:h-20 w-auto object-contain 
      opacity-60 grayscale hover:opacity-100 hover:grayscale-0 
      transition duration-300"
    />
  </div>
))}

    </div>
  </div>
</div>

  </div>
</section>
  );
};

export default TrustSection;