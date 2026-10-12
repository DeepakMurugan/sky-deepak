import LocationPage from "@/components/LocationPage";
import { Camera, Shield, MapPin } from "lucide-react";

const KeralaPage = () => {
  const areas = [
    { name: "Kochi", desc: "Commercial drone services and aerial photography" },
    { name: "Alleppey", desc: "Backwater aerial photography and videography" },
    { name: "Munnar", desc: "Resort, tourism, and landscape drone shoots" },
    { name: "Kovalam", desc: "Beach events and coastal drone coverage" },
    { name: "Thekkady", desc: "Resort and nature aerial filming" },
    { name: "Varkala", desc: "Cliffside and coastal photography" },
    { name: "Trivandrum", desc: "Corporate, government, and infrastructure projects" },
    { name: "Calicut", desc: "Industrial inspections and drone surveys" },
  ];

  const highlights = [
    {
      icon: Camera,
      title: "4K Aerial Photography & Videography",
      desc: "High-quality drone imaging for commercial and personal projects",
    },
    {
      icon: Shield,
      title: "DGCA Certified Pilots",
      desc: "Safe, legal, and professional drone operations across Kerala",
    },
    {
      icon: MapPin,
      title: "Statewide Coverage",
      desc: "Serving major cities, tourist destinations, and remote locations",
    },
  ];

  const faqData = [
    {
      q: "What drone services do you offer in Kerala?",
      a: "We provide aerial photography, videography, real estate shoots, construction monitoring, drone inspections, surveys, mapping, event coverage, and wedding drone services across Kerala.",
    },
    {
      q: "Do you provide drone services in Kochi and Trivandrum?",
      a: "Yes, we serve Kochi, Trivandrum, Calicut, Munnar, Alleppey, Varkala, Kovalam, and all major locations across Kerala.",
    },
    {
      q: "Are your drone operators DGCA certified?",
      a: "Yes, all our drone operations are conducted by trained and DGCA-certified professionals following government regulations.",
    },
    {
      q: "Can drones be used for construction monitoring in Kerala?",
      a: "Absolutely. We provide regular construction progress monitoring, site inspections, and aerial documentation for builders and developers.",
    },
    {
      q: "Do you offer drone surveys and mapping services?",
      a: "Yes, we provide drone mapping, land surveys, orthomosaic mapping, and aerial inspection services for various industries.",
    },
    {
      q: "How much do drone services cost in Kerala?",
      a: "Pricing depends on project requirements, location, duration, and deliverables. Contact us for a customized quote.",
    },
  ];

  return (
    <LocationPage
      city="Kerala"
      heroTitle={
        <>
          Aerial Drone Services in{" "}
          <span className="text-[#0284C7]">Kerala</span>
        </>
      }
      heroSubtitle="Professional drone photography, videography, real estate marketing, construction monitoring, inspections, surveys, mapping, and event coverage across Kerala."

      areas={areas}
      highlights={highlights}
      faqData={faqData}

      metaTitle="Aerial Drone Wedding Photography Kerala | SkyWheelzs"

      metaDesc="DGCA-certified drone wedding photography in Kerala with stunning aerial venue shots, couple portraits, and cinematic coverage."

      // canonicalUrl="https://skywheelzs.in/drone-services-in-kerala"
    />
  );
};

export default KeralaPage;