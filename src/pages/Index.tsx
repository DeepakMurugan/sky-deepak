import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadFormSection from "@/components/LeadFormSection";
import FaqSection from "@/components/FaqSection";
import FinalCTA from "@/components/FinalCTA";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import EquipmentSection from "@/components/EquipmentSection";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <ServicesSection />
      <VideoShowcaseSection />

      <EquipmentSection />
      <PricingSection />

      <ProcessSection />
      {/* <ProjectsSection /> */}
      {/* <BeforeAfterSection /> */}
      <WhyChooseSection />
     
      <TeamSection />

      <TestimonialsSection />
      <LeadFormSection />
      <FaqSection />
      <FinalCTA />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
