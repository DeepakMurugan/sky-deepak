import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    name: "Visual Capture",
    price: "Custom quote",
    desc: "A focused aerial shoot scoped around your brief",
    bestFor: "Property | Events | Brand content",
    features: [
      "Project and location review",
      "Aircraft selected for the brief",
      "Agreed capture coverage",
      "Defined footage and photo outputs",
    ],
    popular: false,
  },
  {
    name: "Aerial Production",
    price: "Custom quote",
    desc: "Coordinated aerial coverage for productions and events",
    bestFor: "Weddings | Live events | Film",
    features: [
      "Pre-production flight planning",
      "Aerial capture for agreed scenes",
      "Event or production coverage",
      "Optional live-streaming scope",
      "Crew and equipment matched to location",
    ],
    popular: true,
  },
  {
    name: "Survey & Inspection",
    price: "Custom quote",
    desc: "Aerial data capture planned for operational requirements",
    bestFor: "Construction | Solar | Utilities",
    features: [
      "Site and airspace assessment",
      "Repeatable progress capture options",
      "Visual or thermal solar inspection scope",
      "Utility asset documentation",
      "Permission coordination when required",
    ],
    popular: false,
  },
];

const PricingCard = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`group relative rounded-3xl border p-6 shadow-sm transition duration-300 ${
      plan.popular
        ? "border-sky-400 bg-slate-950 text-white shadow-xl shadow-sky-950/15 lg:-translate-y-2"
        : "border-slate-200 bg-white text-slate-950 hover:-translate-y-1 hover:shadow-xl"
    }`}
  >
    {plan.popular && (
      <div className="absolute right-4 top-4 rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs font-semibold text-sky-200">
        Most requested
      </div>
    )}

    {/* HEADER */}
    <div className="mb-6">
      <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
      <div className={`mb-2 text-2xl font-bold sm:text-3xl ${plan.popular ? "text-sky-200" : "text-sky-700"}`}>{plan.price}</div>

      <p className={`mb-2 text-xs font-semibold ${plan.popular ? "text-sky-200" : "text-sky-700"}`}>
        Best for: {plan.bestFor}
      </p>

      <p className={`text-sm ${plan.popular ? "text-white/70" : "text-slate-600"}`}>
        {plan.desc}
      </p>
    </div>

    {/* FEATURES */}
    <ul className="space-y-3 mb-6">
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3">
          <Check
            className={`w-5 h-5 ${
              plan.popular ? "text-white" : "text-[#0284C7]"
            }`}
          />
          <span className="text-sm leading-6">{feature}</span>
        </li>
      ))}
    </ul>

    <Link to="/contact-us">
      <span
        className={`mt-auto block w-full rounded-xl px-6 py-3 text-center font-semibold transition duration-300 ${
          plan.popular
            ? "bg-sky-400 text-slate-950 hover:bg-sky-300"
            : "bg-slate-950 text-white hover:bg-sky-700"
        }`}
      >
        Discuss this scope
      </span>
    </Link>
  </motion.div>
);

const PricingSection = () => {
  return (
    <section id="our-work" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0284C7]/5 via-transparent to-[#0284C7]/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="mb-5 inline-block rounded-full border border-sky-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-700">
            Flexible project scopes
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black mb-4">
            Mission Scopes & Quotes
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Every project is different. We tailor the crew, flight plan and deliverables to the site, purpose and any required permissions. </p>

          {/* TRUST LINE */}
          <p className="mt-3 text-sm font-medium text-sky-700">
            Licensed pilots · Site and flight requirements reviewed before booking
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={i} plan={plan} index={i} />
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="mb-4 text-slate-600">
            Every aerial brief is different. Let’s scope yours.
          </p>

          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-sky-700 sm:px-8"
          >
            Request a project quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;