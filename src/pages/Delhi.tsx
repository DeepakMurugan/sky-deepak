import LocationPage from "@/components/LocationPage";
import { Crown, Shield, Star, MapPin } from "lucide-react";

const DelhiPage = () => {
  const areas = [
    { name: "Connaught Place", desc: "Central business district" },
    { name: "Karol Bagh", desc: "Commercial and shopping areas" },
    { name: "Lajpat Nagar", desc: "Residential and event venues" },
    { name: "Greater Kailash", desc: "Luxury residential photography" },
    { name: "Aerocity", desc: "Business and aviation shoots" },
    { name: "Delhi Cantonment", desc: "Heritage and institutional areas" },
  ];

  const highlights = [
    { icon: Crown, title: "Luxury Focus", desc: "High-end clientele specialization" },
    { icon: Star, title: "Premium Service", desc: "White-glove aerial photography" },
    { icon: Shield, title: "DGCA Certified", desc: "Delhi NCR licensed operations" },
  ];

  const faqData = [
    { q: "Do you provide luxury drone services in Delhi?", a: "Yes! We specialize in high-end aerial photography for luxury brands, events, and premium real estate in Delhi NCR." },
    { q: "What is the cost of premium drone photography in Delhi?", a: "Luxury packages start from ₹25,000+ for high-end shoots with cinematic editing and premium deliverables." },
    { q: "Can you handle drone shoots near Delhi airports?", a: "Yes, we have experience with controlled airspace operations and coordinate with AAI for shoots near IGI and domestic airports." },
    { q: "How quickly can you respond to Delhi booking requests?", a: "We offer priority booking for Delhi clients with same-day availability for most locations within NCR." },
    { q: "Do you provide drone services for Delhi weddings?", a: "Absolutely! We cover luxury wedding venues across Delhi including five-star hotels and heritage sites." },
    { q: "What makes your Delhi drone services premium?", a: "We use enterprise-grade equipment, provide personal project managers, and deliver Hollywood-style post-production." },
  ];

  return (
    <LocationPage
      city="Delhi NCR"
      heroTitle={<>Luxury Drone Services in{" "}
        <span className="text-[#007BE7]">
          Delhi
        </span></>}
      heroSubtitle="Premium aerial photography and cinematography for luxury brands, high-end events, and premium real estate across Delhi NCR."
      areas={areas}
      highlights={highlights}
      faqData={faqData}
      metaTitle="Luxury Drone Services Delhi NCR | Premium Aerial Photography For Events & Real Estate | SkyWheelzs"
      metaDesc="Luxury drone services Delhi NCR | Premium aerial photography for high-end events, real estate & brands. DGCA certified, cinematic 4K, white-glove service. From ₹25,000+"
    />
  );
};

export default DelhiPage;