import { motion } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";

const CommercialApprovalsSection = () => (
  <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,163,255,0.2),_transparent_55%)]" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
          <ShieldCheck size={15} /> Flight planning & compliance support
        </span>
        <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Commercial drone approvals in{" "}
          <span className="text-sky-300">Hyderabad</span>
        </h2>
        <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Airport, military and other controlled airspace can affect where a commercial drone may fly. We help plan the operation, check applicable airspace requirements and coordinate Digital Sky permissions and NOC documentation when required.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55">
          Every flight remains subject to current regulations, airspace status and approval by the relevant authorities. Share your project location and date so we can assess the requirements before booking.
        </p>
        <a
          href="/contact-us"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
        >
          Discuss a compliant flight <ArrowRight size={18} />
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur sm:p-9"
      >
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-300">
          <MapPin size={23} />
        </div>
        <h3 className="mb-3 text-xl font-semibold">A clear path from brief to flight</h3>
        <ul className="space-y-4 text-sm leading-6 text-white/70">
          <li><strong className="text-white">01 · Location check</strong><br />Review the site and intended operation against applicable airspace requirements.</li>
          <li><strong className="text-white">02 · Documentation</strong><br />Identify the permissions and NOCs that may be required and help coordinate the paperwork.</li>
          <li><strong className="text-white">03 · Flight readiness</strong><br />Confirm the flight plan only after the relevant approvals and operational checks are in place.</li>
        </ul>
      </motion.div>
    </div>
  </section>
);

export default CommercialApprovalsSection;
