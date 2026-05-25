import LocationPage from "@/components/LocationPage";
import { Clock, Shield, Star, MapPin } from "lucide-react";

const BangalorePage = () => {
  const areas = [
    { name: "Whitefield", desc: "Tech parks and modern developments" },
    { name: "Indiranagar", desc: "Residential and lifestyle shoots" },
    { name: "Electronic City", desc: "IT corridor and corporate photography" },
    { name: "Koramangala", desc: "Commercial and event photography" },
    { name: "HSR Layout", desc: "Residential communities and weddings" },
    { name: "Jayanagar", desc: "Heritage areas and cultural events" },
  ];

  const highlights = [
    { icon: Star, title: "Tech-Focused", desc: "Specialized in tech and startup shoots" },
    { icon: Shield, title: "DGCA Certified", desc: "Fully licensed drone operations" },
    { icon: Clock, title: "Quick Delivery", desc: "24-hour turnaround for urgent projects" },
  ];

  const faqData = [
    { q: "Do you provide drone services for tech companies in Bangalore?", a: "Yes! We specialize in aerial photography for tech companies, startups, and IT parks across Bangalore's tech corridor." },
    { q: "What is the cost of drone photography in Bangalore?", a: "Starting from ₹8,000 for basic shoots. Premium cinematic packages start from ₹15,000 with advanced editing." },
    { q: "How quickly can you deliver drone footage in Bangalore?", a: "We offer 24-hour express delivery for urgent projects. Standard delivery is within 48 hours." },
    { q: "Are your drone operations legal in Bangalore?", a: "Yes, all our operations are DGCA certified with proper permissions for commercial drone flights in Bangalore." },
    { q: "What areas do you cover in Bangalore?", a: "We cover Whitefield, Indiranagar, Electronic City, Koramangala, HSR Layout, Jayanagar, and all major Bangalore areas." },
    { q: "Do you offer real estate drone photography in Bangalore?", a: "Absolutely! We provide stunning aerial photography for property listings, helping real estate agents sell faster." },
  ];

  return (
    <LocationPage
      city="Bangalore"
      heroTitle={<>Professional Drone Services in{" "}
        <span className="text-[#007BE7]">
          Bangalore
        </span></>}
      heroSubtitle="Cinematic aerial photography for tech companies, real estate, and events. Specialized coverage across Whitefield, Indiranagar & Electronic City."
      areas={areas}
      highlights={highlights}
      faqData={faqData}
      metaTitle="Drone Services in Bangalore | Tech Companies, Real Estate & Weddings | SkyWheelzs"
      metaDesc="Drone services Bangalore | Whitefield, Indiranagar, Electronic City tech shoots & real estate. DGCA certified, 4K cinematic footage, 24-hour delivery. Wedding coverage. From ₹8,000"
    />
  );
};

export default BangalorePage;