import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  faqData?: FaqItem[];
}

const FaqSection = ({ faqData }: FaqSectionProps) => {
  const faqs = faqData || [
    { q: "Which areas do you serve?", a: "SkyDigiLens serves Hyderabad, Warangal, Nizamabad and projects across Telangana and Andhra Pradesh, including Vijayawada. Contact us with your site location to discuss availability." },
    { q: "Are your drone pilots licensed?", a: "We provide DGCA-licensed and certified pilots for commercial drone operations. Flight plans and operations are subject to applicable regulations, airspace conditions and required approvals." },
    { q: "What equipment do you use?", a: "Our listed equipment includes DJI Matrice 4E, DJI Mavic 4 Pro, DJI Air 3S, DJI Avata 360, custom FPV drones with GoPros and a Sony FX3A camera." },
    { q: "Can you help with commercial drone approvals in Hyderabad?", a: "Yes. We help assess the site, identify applicable Digital Sky permissions and NOC documentation, and coordinate compliance steps. Flights proceed only when required approvals are in place." },
    { q: "Do you inspect solar panels?", a: "We provide thermal and visual drone inspections for solar installations across Telangana and Andhra Pradesh. Scope and deliverables are planned to suit the site and inspection brief." },
    { q: "Can you monitor construction progress?", a: "Yes. We provide repeatable aerial progress documentation for residential towers and construction projects, with capture schedules agreed in advance." },
    { q: "Do you cover weddings, live streaming and Telugu folk songs?", a: "Yes. Aerial event photography, wedding coverage, live streaming and cinematic drone services for Telugu folk-song productions are available, subject to site permissions and flight conditions." },
    { q: "How do you quote a project?", a: "Pricing depends on location, duration, flight permissions, crew and deliverables. Send us your project details and preferred date for a tailored quote." },
  ];
  return (
    <section id="faq" className="section-padding relative bg-secondary/20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="label-tag border-primary/30 text-primary bg-primary/5 mb-6">FAQ</span>
          <h2 className="heading-lg font-heading mb-4 text-foreground">Frequently Asked Questions</h2>
          <p className="body-lg">Everything you need to know about our drone services</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-background rounded-2xl px-4 border border-border/50 shadow-sm sm:px-6"
              >
                <AccordionTrigger className="py-4 text-left font-heading font-medium text-foreground hover:text-primary hover:no-underline text-sm sm:py-5 sm:text-[15px]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
