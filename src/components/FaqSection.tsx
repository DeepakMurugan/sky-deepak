import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = ({ faqData }) => {
  const faqs = faqData || [
    { q: "What areas do you cover for drone services?", a: "We provide professional drone services across Chennai, Bangalore, and Pan India. Our team is based in both cities with dedicated pilots for quick deployment." },
    { q: "Are your drone operations DGCA certified?", a: "Yes, all our operations are fully DGCA certified. Our pilots hold valid Remote Pilot Certificates and we comply with all Indian aviation regulations for commercial drone flights." },
    { q: "What types of drones do you use?", a: "We use enterprise-grade DJI equipment including Matrice 300 RTK, Phantom 4 RTK, and Mavic 3 Enterprise series — equipped with thermal, LiDAR, and high-resolution cameras." },
    { q: "How much do drone services cost in Chennai and Bangalore?", a: "Pricing varies based on project scope, area coverage, and deliverables required. Contact us for a free, no-obligation custom quote tailored to your specific requirements." },
    { q: "What is the turnaround time for drone survey data?", a: "Standard projects are delivered within 48 hours. Rush delivery is available for time-sensitive projects. Complex 3D modeling and GIS projects may take 3-5 business days." },
    { q: "Do you provide drone services for weddings and events?", a: "Absolutely! We offer cinematic aerial photography and videography for weddings, corporate events, festivals, and live streaming across Chennai and Bangalore." },
    { q: "Can you fly drones near airports or restricted areas?", a: "We handle all necessary permissions and clearances. For flights in controlled airspace, we coordinate with AAI and obtain required NOCs well in advance." },
  ];
  return (
    <section id="faq" className="section-padding relative bg-secondary/20">
      <div className="max-w-3xl mx-auto">
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
                className="bg-background rounded-2xl px-6 border border-border/50 shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-medium text-foreground hover:text-primary hover:no-underline py-5 text-[15px]">
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
