import LocationPage from "@/components/LocationPage";
import { Heart, Shield, Camera, MapPin } from "lucide-react";

const KeralaPage = () => {
  const areas = [
    { name: "Alleppey", desc: "Backwater wedding destinations" },
    { name: "Kochi", desc: "Urban weddings and events" },
    { name: "Munnar", desc: "Hill station wedding photography" },
    { name: "Kovalam", desc: "Beach wedding locations" },
    { name: "Thekkady", desc: "Wildlife and resort photography" },
    { name: "Varkala", desc: "Cliff and beach weddings" },
  ];

  const highlights = [
    { icon: Heart, title: "Wedding Specialists", desc: "Expertise in destination weddings" },
    { icon: Camera, title: "Cinematic Quality", desc: "Hollywood-style aerial cinematography" },
    { icon: Shield, title: "DGCA Certified", desc: "Licensed for Kerala operations" },
  ];

  const faqData = [
    { q: "Do you specialize in wedding drone photography in Kerala?", a: "Yes! We're experts in Kerala wedding drone services, covering backwater, beach, and hill station destinations." },
    { q: "What is the cost of drone services for Kerala weddings?", a: "Wedding packages start from ₹15,000 for basic coverage. Premium destination wedding packages start from ₹25,000+." },
    { q: "Can you fly drones over backwaters in Kerala?", a: "Yes, we have extensive experience with backwater wedding drone photography in Alleppey and surrounding areas." },
    { q: "How far in advance should I book for a Kerala wedding?", a: "We recommend booking 2-3 months in advance for peak season. Last-minute bookings are available based on availability." },
    { q: "Do you provide drone services in Munnar?", a: "Absolutely! We cover Munnar and other hill stations for destination wedding photography and resort shoots." },
    { q: "Are your drones suitable for Kerala weather?", a: "Yes, our enterprise-grade drones are weather-resistant and suitable for Kerala's tropical climate." },
  ];

  return (
    <LocationPage
      city="Kerala"
      heroTitle={<>Wedding Drone Services in{" "}
        <span className="text-[#007BE7]">
          Kerala
        </span></>}
      heroSubtitle="Cinematic aerial photography for destination weddings, backwater ceremonies, and resort events across God's Own Country."
      areas={areas}
      highlights={highlights}
      faqData={faqData}
      metaTitle="Wedding Drone Services Kerala | Alleppey Backwater & Munnar Hill Station Weddings | SkyWheelzs"
      metaDesc="Wedding drone photography Kerala | Alleppey backwater, Munnar & Kochi ceremonies. Cinematic 4K aerial videography, DGCA certified, destination specialists. From ₹15,000"
    />
  );
};

export default KeralaPage;