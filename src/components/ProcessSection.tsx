import ScrollReveal from "@/components/ScrollReveal";
import { ClipboardList, Plane, BarChart3, Send } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Project Consultation",
    desc: "We understand your requirements and plan the best drone solution for your project in Chennai, Bangalore & across India.",
  },
  {
    icon: Plane,
    step: "02",
    title: "Drone Deployment",
    desc: "Our DGCA-certified pilots capture high-quality aerial data using advanced DJI drones.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Data Processing",
    desc: "We convert drone data into maps, videos, reports, and insights for your business.",
  },
  {
    icon: Send,
    step: "04",
    title: "Fast Delivery",
    desc: "Get your final drone outputs within 24–48 hours with full support from our team.",
  },
];

const ProcessSection = () => (
  <section className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">

    {/* 🔵 Soft Blue Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#007BE7]/5 via-transparent to-[#007BE7]/10" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      {/* 🔥 Heading */}
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-4 py-1 text-xs rounded-full border border-[#007BE7]/30 text-[#007BE7] bg-[#007BE7]/10 mb-4">
            How We Works
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3">
            Simple Process for{" "}
            <span className="text-[#007BE7]">
              Professional Drone Services
            </span>
          </h2>

          <p className="text-black/60 text-sm sm:text-base">
            From planning to delivery — we make drone services simple, fast, and reliable.
          </p>
        </div>
      </ScrollReveal>

      {/* 🚀 Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

        {steps.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.08}>
            <div className="group relative p-5 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-black/10 hover:border-[#007BE7]/40 hover:shadow-lg hover:shadow-[#007BE7]/10 transition duration-500 h-full">

              {/* Step Number */}
              <span className="absolute top-3 right-4 text-5xl font-bold text-[#007BE7]/10">
                {s.step}
              </span>

              <div className="relative z-10">

                {/* Icon */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#007BE7]/10 flex items-center justify-center mb-4 group-hover:bg-[#007BE7]/20 transition">
                  <s.icon className="w-5 h-5 text-[#007BE7]" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-base sm:text-lg text-black mb-2 group-hover:text-[#007BE7] transition">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-black/60 leading-relaxed">
                  {s.desc}
                </p>

              </div>
            </div>
          </ScrollReveal>
        ))}

      </div>

    </div>
  </section>
);

export default ProcessSection;