import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    name: "Quick Drone Shoot 🚁",
    price: "₹8,000",
    desc: "Fast & professional aerial coverage for small needs",
    bestFor: "Real Estate | Small Events | Quick Projects",
    features: [
      "Up to 1–2 hours shoot",
      "4K drone footage",
      "Property / location coverage",
      "Basic edited clips",
      "24–48 hr delivery",
    ],
    popular: false,
  },
  {
    name: "Events & Wedding Shoot 💍",
    price: "₹15,000",
    desc: "Complete cinematic drone coverage for weddings & events",
    bestFor: "Weddings | College Events | Functions",
    features: [
      "Full event aerial coverage",
      "Cinematic 4K drone shots",
      "Entry + crowd + highlight coverage",
      "Edited highlight video",
      "Multiple angles & locations",
      "Fast delivery for reels",
    ],
    popular: true,
  },
  {
    name: "Pro Shoot & Live Streaming 🎬",
    price: "₹20,000+",
    desc: "High-end drone production with live streaming & branding",
    bestFor: "Brands | Real Estate | Corporate | Live Events",
    features: [
      "Cinematic commercial drone shoot",
      "Advanced editing + color grading",
      "Live streaming (YouTube / LED)",
      "Multi-angle drone coverage",
      "Dedicated drone operator",
      "Priority delivery",
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
    className={`group relative rounded-3xl overflow-hidden p-6 sm:p-8 transition duration-300 cursor-pointer ${
      plan.popular
        ? "bg-[#007BE7] text-white border-2 border-[#007BE7] scale-105 shadow-2xl"
        : "bg-white text-black border border-black/10 hover:shadow-xl hover:scale-105"
    }`}
  >
    {plan.popular && (
      <div className="absolute top-4 right-4 px-3 py-1 bg-white text-[#007BE7] text-xs font-semibold rounded-full">
        Most Popular 🔥
      </div>
    )}

    {/* HEADER */}
    <div className="mb-6">
      <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
      <div className="text-3xl sm:text-4xl font-bold mb-2">{plan.price}</div>

      <p className="text-xs text-[#007BE7] font-semibold mb-2">
        Best for: {plan.bestFor}
      </p>

      <p className={`text-sm ${plan.popular ? "text-white/80" : "text-black/60"}`}>
        {plan.desc}
      </p>
    </div>

    {/* FEATURES */}
    <ul className="space-y-3 mb-6">
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3">
          <Check
            className={`w-5 h-5 ${
              plan.popular ? "text-white" : "text-[#007BE7]"
            }`}
          />
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>

    {/* URGENCY */}
    <p className="text-xs text-red-500 mb-4">
      ⚡ Limited bookings available this week
    </p>

    {/* CTA */}
    <Link to="/contact-us">
      <button
        className={`w-full py-3 px-6 rounded-full font-semibold transition duration-300 ${
          plan.popular
            ? "bg-white text-[#007BE7] hover:bg-gray-100"
            : "bg-[#007BE7] text-white hover:bg-[#005fcc]"
        }`}
      >
        Book Now 🚀
      </button>
    </Link>
  </motion.div>
);

const PricingSection = () => {
  return (
    <section  id="our-work" className="relative py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#007BE7]/5 via-transparent to-[#007BE7]/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs rounded-full border border-[#007BE7]/30 text-[#007BE7] bg-[#007BE7]/10 mb-5">
            Transparent Pricing
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black mb-4">
            Drone Service Packages
          </h2>

          <p className="text-black/70 text-MD sm:text-base max-w-2xl mx-auto">
            Choose the perfect drone service for your needs - weddings, Real estate shoots, corporate
            events, and business shoots. High-quality aerial visuals with DGCA certified pilots.
          </p>

          {/* TRUST LINE */}
          <p className="text-green-600 text-sm font-medium mt-3">
            ✔ DGCA Certified Pilots | 500+ Successful Shoots
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
          <p className="text-black/60 text-md mb-4">
            Need a custom drone shoot? Contact us for a personalized quote.
          </p>

          <Link
            to="/contact-us"
            className="inline-block px-6 sm:px-8 py-3 bg-[#007BE7] text-white rounded-full font-medium hover:bg-[#005fcc] transition duration-300"
          >
            Get Custom Quote 🚀
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;