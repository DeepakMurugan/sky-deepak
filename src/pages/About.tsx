import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Camera,
  Compass,
  Eye,
  FileCheck2,
  MapPin,
  MapPinned,
  ShieldCheck,
  Sun,
  Target,
  Workflow,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import FinalCTA from "@/components/FinalCTA";
import heroImage from "@/assets/hero-drone.jpg";

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Pilots & compliance",
    description:
      "DGCA-licensed pilots, careful site assessment and support coordinating applicable flight permissions and NOCs.",
  },
  {
    icon: Workflow,
    title: "Purposeful capture",
    description:
      "Survey, construction monitoring, solar inspection and creative flight plans shaped around the project brief.",
  },
  {
    icon: Camera,
    title: "Aerial & ground production",
    description:
      "DJI and custom FPV aircraft, GoPro cameras and a Sony FX3A for a complementary ground-level perspective.",
  },
];

const serviceHighlights = [
  {
    icon: BadgeCheck,
    title: "Expert drone pilots",
    description:
      "DGCA-licensed and certified pilots for planned event and commercial drone operations, with safety and site requirements considered before take-off.",
  },
  {
    icon: Building2,
    title: "Construction monitoring",
    description:
      "Comprehensive aerial progress documentation for residential towers, helping project teams review visible milestones over time.",
  },
  {
    icon: Sun,
    title: "Solar panel inspection",
    description:
      "Professional thermal and visual aerial inspection options for solar installations across Telangana and Andhra Pradesh.",
  },
  {
    icon: Camera,
    title: "Aerial event photography",
    description:
      "High-quality aerial photography and cinematic coverage for weddings, celebrations and events across Hyderabad.",
  },
];

const missionPrinciples = [
  {
    icon: Compass,
    label: "Plan",
    title: "Understand the mission",
    description:
      "Start with the project goal, site, audience and practical constraints—not a one-size-fits-all flight.",
  },
  {
    icon: ShieldCheck,
    label: "Prepare",
    title: "Put safety and permissions first",
    description:
      "Review the location and coordinate applicable permissions before confirming a commercial flight.",
  },
  {
    icon: Camera,
    label: "Deliver",
    title: "Make every frame useful",
    description:
      "Choose the aircraft and capture approach to suit the story, inspection or progress record you need.",
  },
];

const aircraft = [
  "DJI Matrice 4E",
  "DJI Mavic 4 Pro",
  "DJI Air 3S",
  "DJI Avata 360",
  "Custom FPV with GoPros",
  "Sony FX3A Camera",
];

const AboutPage = () => {
  useEffect(() => {
    document.title = "About SkyDigiLens | Hyderabad Drone Services";
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      "content",
      "Meet SkyDigiLens, Hyderabad drone specialists for residential tower progress monitoring, solar panel inspection, drone survey and aerial event photography across Telangana and Andhra Pradesh.",
    );
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    let ownsCanonical = false;
    const previousCanonicalHref = canonical?.href;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
      ownsCanonical = true;
    }
    canonical.href = `${window.location.origin}/about-us`;
    return () => {
      if (ownsCanonical) canonical?.remove();
      else if (canonical && previousCanonicalHref) canonical.href = previousCanonicalHref;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-slate-950 pt-24 text-white">
          <img
            src={heroImage}
            alt="Professional drone prepared for an aerial mission"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-300/10 px-4 py-2 text-sm text-sky-100">
              <MapPin size={15} /> Hyderabad · Telangana · Andhra Pradesh
            </span>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Aerial expertise,{" "}
              <span className="text-sky-300">planned for the real world.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              SkyDigiLens brings together professional pilots, capable aircraft
              and a clear operational plan for construction monitoring, solar
              inspection, event photography and other commercial aerial work.
            </p>
          </motion.div>
        </section>

        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <span className="label-tag border-primary/30 bg-primary/5 text-primary">
                  Who we are
                </span>
                <h2 className="heading-lg mt-5 text-foreground">
                  One aerial partner for data, progress and storytelling.
                </h2>
              </div>
              <div className="space-y-5 text-lg leading-8 text-muted-foreground">
                <p>
                  From residential tower progress tracking and solar panel
                  inspections to property showcases, weddings and live event
                  coverage, we match the aircraft, crew and capture plan to the
                  work at hand.
                </p>
                <p>
                  We work across Hyderabad, Warangal, Vijayawada, Nizamabad and
                  other locations in Telangana and Andhra Pradesh. Before a
                  commercial flight, we review the site and help coordinate
                  applicable Digital Sky permissions and NOC documentation.
                  Flights are subject to current regulations and the relevant
                  authority approvals.
                </p>
              </div>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {capabilities.map(({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="glass-card p-7"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="leading-7 text-muted-foreground">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mb-12 max-w-3xl text-center"
            >
              <span className="mb-5 inline-flex rounded-full border border-primary/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                What we do
              </span>
              <h2 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                Aerial services shaped around{" "}
                <span className="text-primary">your mission.</span>
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                From infrastructure progress to event storytelling, our crew
                plans each flight around the location, intended outcome and
                applicable operating requirements.
              </p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {serviceHighlights.map(({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.07 }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-7"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.2),_transparent_55%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                <FileCheck2 size={15} /> Flight planning & compliance
              </span>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Commercial drone approvals in{" "}
                <span className="text-blue-300">Hyderabad.</span>
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-white/70">
                Airspace near Rajiv Gandhi International Airport (RGIA), Begumpet
                Airport and military installations can be restricted. We review
                the exact flight location and help coordinate applicable Digital
                Sky permissions and NOC documentation before a commercial
                operation.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55">
                Requirements vary by location and operation. Flights are
                confirmed only when permitted under current regulations and
                after any required approvals are granted.
              </p>
              <a
                href="/contact-us"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                Check requirements for your site
                <ArrowRight size={17} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/15 text-blue-300">
                <MapPinned size={22} />
              </div>
              <h3 className="text-xl font-semibold">Service coverage</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Based in Hyderabad, serving projects across Telangana and
                Andhra Pradesh.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Hyderabad", "Warangal", "Vijayawada", "Nizamabad"].map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-sm text-white/80"
                  >
                    {city}
                  </span>
                ))}
                <span className="rounded-full border border-blue-300/20 bg-blue-300/10 px-3.5 py-2 text-sm text-blue-100">
                  Telangana · Andhra Pradesh
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_45%,_rgba(14,165,233,0.17),_transparent_40%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mb-14 max-w-3xl text-center"
            >
              <span className="mb-5 inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                Vision · Mission · Method
              </span>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Technology is only as good as{" "}
                <span className="text-sky-300">the mission behind it.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/60">
                We believe aerial work should make complex places easier to
                understand—whether that means tracking a build, inspecting a
                solar asset or telling a story from above.
              </p>
            </motion.div>

            <div className="grid gap-5 lg:grid-cols-3">
              {missionPrinciples.map(({ icon: Icon, label, title, description }, index) => (
                <motion.article
                  key={label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.045] p-7 transition hover:-translate-y-1 hover:border-sky-300/30 hover:bg-white/[0.07] sm:p-8"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-300/10 text-sky-300">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/35">
                      {label} · 0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-white/60">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                <Eye size={14} /> The right perspective
              </span>
              <h2 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                One mission.{" "}
                <span className="text-sky-600">The right platform.</span>
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                A survey, a solar inspection and a cinematic event are different
                jobs. We select the aircraft and capture approach to fit your
                project instead of forcing every request into the same setup.
              </p>
              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-sky-100 bg-white p-5">
                <Target className="mt-0.5 shrink-0 text-sky-600" size={20} />
                <p className="text-sm leading-6 text-slate-600">
                  From Hyderabad to Warangal, Vijayawada and Nizamabad, we plan
                  for local site conditions and confirm applicable permissions
                  before a commercial flight.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 sm:p-9"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                    SkyDigiLens fleet
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-slate-950 sm:text-2xl">
                    Built for varied aerial work
                  </h3>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 sm:flex">
                  <Camera size={22} />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {aircraft.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    <span className="h-2 w-2 rounded-full bg-sky-500" />
                    {item}
                  </motion.div>
                ))}
              </div>
              <a
                href="/contact-us"
                className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-sky-700"
              >
                Plan a mission <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <FinalCTA />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
