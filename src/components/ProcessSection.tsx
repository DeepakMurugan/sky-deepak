import ScrollReveal from "@/components/ScrollReveal";
import { ClipboardList, Plane, BarChart3, Send } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Drone project consultation",
    desc: "We confirm the service, project location, preferred date and deliverables for your Telangana or Andhra Pradesh brief.",
  },
  {
    icon: Plane,
    step: "02",
    title: "Flight planning & deployment",
    desc: "We review site conditions and applicable permissions, then match the crew and drone platform to the approved mission.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Capture & post-production",
    desc: "We complete the agreed aerial photography, survey capture, inspection imagery or cinematic production.",
  },
  {
    icon: Send,
    step: "04",
    title: "Organized project delivery",
    desc: "Receive the agreed photos, video or project documentation in the format and timeline confirmed for your scope.",
  },
];

const ProcessSection = () => (
  <section className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">

    {/* 🔵 Soft Blue Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0284C7]/5 via-transparent to-[#0284C7]/10" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      {/* 🔥 Heading */}
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-4 py-1 text-xs rounded-full border border-[#0284C7]/30 text-[#0284C7] bg-[#0284C7]/10 mb-4">
            Our drone service process
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3">
            A clear process for{" "}
            <span className="text-[#0284C7]">
              professional drone services
            </span>
          </h2>

          <p className="text-black/60 text-sm sm:text-base">
            From the first brief to final delivery, we keep Hyderabad-area drone projects clearly scoped and coordinated.
          </p>
        </div>
      </ScrollReveal>

      {/* 🚀 Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

        {steps.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.08}>
            <div className="group relative p-5 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-black/10 hover:border-[#0284C7]/40 hover:shadow-lg hover:shadow-[#0284C7]/10 transition duration-500 h-full">

              {/* Step Number */}
              <span className="absolute top-3 right-4 text-5xl font-bold text-[#0284C7]/10">
                {s.step}
              </span>

              <div className="relative z-10">

                {/* Icon */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0284C7]/10 flex items-center justify-center mb-4 group-hover:bg-[#0284C7]/20 transition">
                  <s.icon className="w-5 h-5 text-[#0284C7]" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-base sm:text-lg text-black mb-2 group-hover:text-[#0284C7] transition">
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