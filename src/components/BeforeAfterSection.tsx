import { useState, useRef } from "react";
import { motion } from "framer-motion";
import beforeImg from "@/assets/before-survey.jpg";
import afterImg from "@/assets/after-survey.jpg";

const BeforeAfterSection = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <section className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="label-tag border-primary/30 text-primary bg-primary/5 mb-6">Transformation</span>
          <h2 className="heading-lg font-heading mb-4 text-foreground">See the Difference</h2>
          <p className="body-lg max-w-2xl mx-auto">
            From raw aerial capture to actionable survey data — drag to compare
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          ref={containerRef}
          className="relative rounded-3xl overflow-hidden border border-border/50 shadow-xl aspect-video cursor-col-resize select-none"
          onMouseMove={(e) => handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
          <img src={afterImg} alt="After drone survey processing" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
            <img
              src={beforeImg}
              alt="Before drone survey"
              className="w-full h-full object-cover"
              style={{ width: containerRef.current?.offsetWidth || "100%" }}
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
          <div className="absolute top-0 bottom-0 w-0.5 bg-primary z-10" style={{ left: `${sliderPos}%` }}>
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <ArrowsIcon />
            </div>
          </div>
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-foreground/80 text-[10px] font-bold text-white uppercase tracking-wider z-20">Before</div>
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary text-[10px] font-bold text-white uppercase tracking-wider z-20">After</div>
        </motion.div>
      </div>
    </section>
  );
};

const ArrowsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary-foreground">
    <path d="M4 8L1 8M1 8L3 6M1 8L3 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 8L15 8M15 8L13 6M15 8L13 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default BeforeAfterSection;
