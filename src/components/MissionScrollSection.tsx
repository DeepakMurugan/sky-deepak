import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ClipboardCheck, Crosshair, ScanLine } from "lucide-react";
import missionImage from "@/assets/hero-drone.jpg";

const missionSteps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Start with the brief",
    description:
      "We align on the location, objective, timing and deliverables before choosing a flight plan.",
  },
  {
    number: "02",
    icon: ScanLine,
    title: "Plan for the airspace",
    description:
      "We review site conditions and help identify the permissions or NOCs that may apply.",
  },
  {
    number: "03",
    icon: Crosshair,
    title: "Capture with intention",
    description:
      "A qualified crew and purpose-selected equipment turn the plan into useful aerial data or imagery.",
  },
];

const MissionScrollSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 65%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001,
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [22, -22]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(14,165,233,0.18),_transparent_45%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <span className="mb-5 inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            From brief to flight
          </span>
          <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            A smoother mission starts{" "}
            <span className="text-sky-300">before take-off.</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/65">
            Every project has a different site, goal and set of constraints.
            Our process keeps the plan clear from the first conversation to the
            final capture.
          </p>
          <motion.div
            style={{ y: imageY }}
            className="relative mt-9 hidden overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-sky-950/30 sm:block"
          >
            <img
              src={missionImage}
              alt="Drone prepared for a planned aerial mission"
              loading="lazy"
              className="h-64 w-full object-cover opacity-80 lg:h-72"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3">
              <span className="text-sm font-medium text-white/90">
                Hyderabad · Telangana · Andhra Pradesh
              </span>
              <span className="rounded-full border border-white/20 bg-slate-950/50 px-3 py-1 text-xs text-sky-200 backdrop-blur">
                Flight ready
              </span>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute bottom-8 left-5 top-8 w-px bg-white/10 sm:left-6" />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute bottom-8 left-5 top-8 w-px origin-top bg-gradient-to-b from-sky-300 to-blue-500 sm:left-6"
          />
          <div className="space-y-5">
            {missionSteps.map(({ number, icon: Icon, title, description }, index) => (
              <motion.article
                key={number}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative ml-12 rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur transition hover:border-sky-300/30 hover:bg-white/[0.07] sm:ml-14 sm:p-8"
              >
                <span className="absolute -left-[3.15rem] top-7 flex h-10 w-10 items-center justify-center rounded-full border border-sky-300/30 bg-slate-950 text-xs font-bold text-sky-200 sm:-left-[3.65rem] sm:h-12 sm:w-12">
                  {number}
                </span>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-300/10 text-sky-300">
                  <Icon size={21} />
                </div>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-white/60">{description}</p>
              </motion.article>
            ))}
          </div>
          <a
            href="/contact-us"
            className="group ml-12 mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white transition hover:bg-sky-400 sm:ml-14"
          >
            Start planning <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MissionScrollSection;
