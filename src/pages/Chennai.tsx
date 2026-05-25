import LocationPage from "@/components/LocationPage";
import { Clock, Shield, Star, MapPin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ChennaiPage = () => {
  const areas = [
    { name: "ECR (East Coast Road)", desc: "Beach weddings and resort photography services" },
    { name: "OMR (Old Mahabalipuram Road)", desc: "IT corridor and professional corporate shoots" },
    { name: "Anna Nagar", desc: "Residential areas and residential event photography" },
    { name: "Nungambakkam", desc: "Luxury weddings and high-end celebration events" },
    { name: "T. Nagar", desc: "Commercial zones and retail property photography" },
    { name: "Adyar", desc: "Heritage sites and cultural event documentation" },
    { name: "Velachery", desc: "Residential complexes and housing society events" },
    { name: "Perambur", desc: "Industrial inspection and construction monitoring" },
  ];

  const highlights = [
    { icon: Clock, title: "Same-Day Booking", desc: "Express booking available for urgent aerial photography needs in Chennai" },
    { icon: Shield, title: "DGCA Certified Pilots", desc: "Fully licensed drone operations with Government of India approvals" },
    { icon: Star, title: "4K Cinematic Quality", desc: "Premium 4K footage and professional post-production guaranteed" },
  ];

  const faqData = [
    { q: "What is the cost of aerial drone photography in Chennai?", a: "Professional aerial photography services in Chennai start from ₹8,000 for basic shoots. Premium cinematic packages with editing and color grading begin at ₹15,000+. We offer customized quotes based on your specific requirements." },
    { q: "How quickly can you provide drone video services near me in Chennai?", a: "We provide same-day booking for most drone services across Chennai. For complex shoots requiring DGCA permissions, delivery is typically within 24-48 hours." },
    { q: "Do you offer wedding drone photography services in Chennai?", a: "Yes! Our aerial videography experts specialize in destination wedding coverage across Chennai, including ECR beach weddings, luxury resort events, and traditional ceremonies with cinematic drone footage." },
    { q: "Are your drone pilots DGCA certified for Chennai operations?", a: "All our aerial photography pilots are DGCA-certified with valid Remote Pilot Certificates. We maintain full compliance with Indian aviation regulations for safe drone operations." },
    { q: "Which areas in Chennai do you service for drone photography?", a: "We provide professional aerial photography across all of Chennai including ECR, OMR, Anna Nagar, Nungambakkam, T. Nagar, Adyar, and surrounding locations with rapid response times." },
    { q: "How long to receive edited aerial footage from drone shoots?", a: "Standard editing and delivery: 24 hours. Cinematic color grading and advanced editing: 48-72 hours. Rush delivery available for urgent projects." },
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Skywheelzs",
      "description": "Skywheelzs provides aerial drone photography, videography, and inspection services in Chennai with DGCA-certified pilots and premium 4K production.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "TN",
        "addressCountry": "IN"
      },
      "areaServed": ["Chennai", "ECR", "OMR", "Anna Nagar", "Nungambakkam", "T. Nagar", "Adyar", "Velachery", "Perambur"],
      "openingHours": "Mo-Su 08:00-20:00",
      "priceRange": "₹8,000+"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the cost of aerial drone photography in Chennai?", "acceptedAnswer": { "@type": "Answer", "text": "Professional aerial photography services in Chennai start from ₹8,000 for basic shoots. Premium cinematic packages with editing and color grading begin at ₹15,000+." } },
        { "@type": "Question", "name": "How quickly can you provide drone video services near me in Chennai?", "acceptedAnswer": { "@type": "Answer", "text": "We provide same-day booking for most drone services in Chennai. Complex shoots with DGCA permissions are typically delivered within 24-48 hours." } },
        { "@type": "Question", "name": "Do you offer wedding drone photography services in Chennai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our aerial videography experts cover Chennai weddings, including ECR beach weddings, resort events, and cultural ceremonies with cinematic footage." } },
        { "@type": "Question", "name": "Are your drone pilots DGCA certified for Chennai operations?", "acceptedAnswer": { "@type": "Answer", "text": "All our pilots are DGCA-certified with valid Remote Pilot Certificates. We operate safely and in full compliance with Indian aviation regulations." } }
      ]
    }
  ];

  const extraSection = (
    <section className="bg-slate-50 py-16 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Best Drone Services in Chennai</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Local aerial expertise for Chennai businesses, weddings, real estate and events</h2>
          <p className="max-w-3xl text-lg leading-8">
            Looking for drone services near me in Chennai? Skywheelzs offers professional aerial photography and videography across the city, from ECR beach weddings to OMR corporate shoots and Adyar real estate marketing.
          </p>
          <p className="max-w-3xl text-base leading-7 text-slate-700">
            Our Chennai team blends DGCA-certified drone pilots, cinematic 4K cameras, and fast turnaround for aerial inspection, mapping, wedding films, and property walk-throughs. We are trusted by local developers, event planners, and hospitality brands for high-impact visuals that convert.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-semibold">Aerial Photography</p>
              <p className="mt-2 text-sm text-slate-600">Real estate, hospitality, event coverage, commercial branding.</p>
            </li>
            <li className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-semibold">Drone Videography</p>
              <p className="mt-2 text-sm text-slate-600">Cinematic wedding films, corporate promos, and marketing videos.</p>
            </li>
            <li className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-semibold">Survey & Inspection</p>
              <p className="mt-2 text-sm text-slate-600">Construction progress monitoring, site surveys, and asset inspections.</p>
            </li>
            <li className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-semibold">Location Coverage</p>
              <p className="mt-2 text-sm text-slate-600">ECR, OMR, Anna Nagar, Nungambakkam, T. Nagar, Adyar and beyond.</p>
            </li>
          </ul>
        </div>
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold">Chennai Drone Services FAQ</h3>
          <Accordion type="single" collapsible className="mt-6 space-y-4">
            <AccordionItem value="cost">
              <AccordionTrigger>How much do drone shoots cost in Chennai?</AccordionTrigger>
              <AccordionContent>Basic aerial photography starts at ₹8,000. Full drone videography packages with editing, color grading and delivery begin at ₹15,000+ depending on the scope and location.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="booking">
              <AccordionTrigger>Can I get same-day drone service in Chennai?</AccordionTrigger>
              <AccordionContent>Yes, we offer same-day booking for most Chennai drone shoots. Large productions or flights requiring DGCA approvals are typically scheduled within 24-48 hours.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="areas">
              <AccordionTrigger>Which neighbourhoods in Chennai do you cover?</AccordionTrigger>
              <AccordionContent>We service ECR, OMR, Anna Nagar, Nungambakkam, T. Nagar, Adyar, Velachery, Perambur and surrounding Chennai areas for aerial photography, inspections and events.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );

  return (
    <LocationPage
      city="Chennai"
      heroTitle={<>Aerial Drone Services in{" "}
        <span className="text-[#007BE7]">
          Chennai
        </span></>}
      heroSubtitle="Professional aerial photography, videography, and drone survey services for weddings, real estate, and commercial projects across Chennai, ECR, OMR & Anna Nagar"
      areas={areas}
      highlights={highlights}
      faqData={faqData}
      metaTitle=" Aerial Drone Services in Chennai & Bangalore | SkyWheelzs"
      metaDesc=" Reliable drone services in Chennai for real estate, weddings, and industry events. 4K footage, DGCA certified. Book from ₹8,000"
      structuredData={structuredData}
      extraSection={extraSection}
    />
  );
};

export default ChennaiPage;