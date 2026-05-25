import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Phone } from "lucide-react";

const FinalCTA = () => (
  <section className="section-padding relative overflow-hidden bg-foreground">
    <div className="max-w-3xl mx-auto relative z-10 text-center">
      <ScrollReveal>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/60 text-xs font-heading font-semibold tracking-widest uppercase border border-white/10 mb-8">
          ⚡ Limited slots available this week
        </span>
        <h2 className="heading-lg font-heading mb-6 text-white">
          Ready to See Your Project{" "}
          <span className="gradient-text">From Above?</span>
        </h2>
        <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
          Join 500+ businesses across Chennai & Bangalore that trust Skywheelzs for precision aerial intelligence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/contact-us" className="btn-primary-blue inline-flex items-center gap-2 text-base">
            Get Free Consultation <ArrowRight size={18} />
          </a>
          {/* <a href="tel:+919360744915" className="inline-flex items-center gap-2 text-base font-semibold text-white/70 hover:text-white transition-colors px-8 py-4">
            <Phone size={18} />
            Book a Free Call
          </a> */}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;
