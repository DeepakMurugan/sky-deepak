import LocationPage from "@/components/LocationPage";
import { Sun, Shield, Camera, MapPin } from "lucide-react";

const AndamanPage = () => {
  const areas = [
    { name: "Port Blair", desc: "Capital city and main wedding venues" },
    { name: "Havelock Island", desc: "Beach wedding paradise" },
    { name: "Neil Island", desc: "Secluded beach ceremonies" },
    { name: "Diglipur", desc: "Northern island destinations" },
    { name: "Baratang", desc: "Mangrove and wildlife areas" },
    { name: "Rangat", desc: "Middle Andaman wedding spots" },
  ];

  const highlights = [
    { icon: Sun, title: "Paradise Settings", desc: "Stunning beach and island backdrops" },
    { icon: Camera, title: "Premium Quality", desc: "Luxury aerial cinematography" },
    { icon: Shield, title: "Full Compliance", desc: "All necessary permissions included" },
  ];

  const faqData = [
    { q: "Do you provide drone services for Andaman beach weddings?", a: "Yes! We specialize in beach wedding drone photography across all major Andaman islands including Havelock and Neil." },
    { q: "What permissions are needed for drone flights in Andaman?", a: "We handle all permissions including DGCA clearance, forest department approvals, and local authority permissions." },
    { q: "How much does drone photography cost for Andaman weddings?", a: "Premium destination packages start from ₹25,000+ for Andaman beach weddings, including all travel and permissions." },
    { q: "Can you travel to remote Andaman islands?", a: "Yes, we cover all inhabited islands including Havelock, Neil, Diglipur, and Baratang for wedding photography." },
    { q: "How far in advance should I book for Andaman wedding?", a: "Book 3-6 months in advance during peak season. We require time for permissions and travel arrangements." },
    { q: "Do you provide live streaming for Andaman events?", a: "Yes, we offer HD live streaming services for weddings and events across Andaman and Nicobar Islands." },
  ];

  return (
    <LocationPage
      city="Andaman & Nicobar"
      heroTitle={<>Beach Wedding Drone Services in{" "}
        <span className="text-[#007BE7]">
          Andaman
        </span></>}
      heroSubtitle="Luxury aerial photography for beach weddings and destination ceremonies in the Andaman Islands. Paradise captured from the sky."
      areas={areas}
      highlights={highlights}
      faqData={faqData}
      metaTitle="Beach Wedding Drone Services in Andaman | Havelock & Neil Island Weddings | SkyWheelzs"
      metaDesc="Beach wedding drone services in Andaman | Havelock, Neil Island, Port Blair luxury photography. 4K cinematic aerial videography, all permits included. Paradise weddings. From ₹45,000"
    />
  );
};

export default AndamanPage;