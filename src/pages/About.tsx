import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Shield, Users, Award, Zap, Target, Heart } from "lucide-react";
import teamPhoto from "@/assets/siva-Skywheelzs.jpeg";
import FinalCTA from "@/components/FinalCTA";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";


import PricingSection from "@/components/PricingSection";


const AboutPage = () => {
  useEffect(() => {
    document.title = "About SkyWheelzs | DGCA Certified Drone Services India | Professional Aerial Photography";
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', 'About SkyWheelzs | DGCA certified drone services across India. 500+ projects in aerial photography, videography, inspection & mapping. Trusted by businesses nationwide.');
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
          >
            <span className="inline-block px-4 py-1.5 text-xs rounded-full border border-[#007BE7]/30 text-[#007BE7] bg-[#007BE7]/10 mb-5">
              About SkyWheelzs
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Professional Drone Services{" "}
              <span className="text-[#007BE7]">
                Near You In India
              </span>
            </h1>

            <p className="text-black/70 text-base sm:text-lg max-w-3xl mx-auto">
              Leading drone service provider offering aerial photography, videography, and advanced survey solutions across India. DGCA certified, trusted by 500+ clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#007BE7]/5 via-transparent to-[#007BE7]/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 text-xs sm:text-sm rounded-full border border-[#007BE7]/30 text-[#007BE7] bg-[#007BE7]/5 mb-6">
                Drone Services In India
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 leading-tight text-black">
                Drone Services In{" "}
                <span className="text-[#007BE7]">
                  Chennai & Bangalore
                </span>
              </h2>

              <p className="text-base sm:text-lg mb-5 text-black">
                I'm <strong>Siva</strong>, founder of SkyWheelzs and a DGCA-certified professional drone pilot in India. We specialize in aerial photography, videography, and drone survey services for businesses across Chennai, Bangalore, and Tamil Nadu.
              </p>

              <p className="text-black text-base sm:text-lg leading-relaxed mb-5">
                Using advanced DJI drones and enterprise-grade technology, we deliver high-quality aerial cinematography, land surveys, industrial inspections, and live HD drone streaming solutions tailored for modern businesses.
              </p>

              <p className="text-black text-base sm:text-lg leading-relaxed mb-8">
                With over <strong>500+ successful drone projects</strong>, we are trusted by construction, real estate, and industrial clients across India. Our focus is on precision, safety, and delivering measurable results.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#007BE7]/5 border border-[#007BE7]/10">
                  <div className="text-xl sm:text-2xl font-bold text-[#007BE7] mb-1">500+</div>
                  <div className="text-xs sm:text-sm text-black/60">Drone Projects</div>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-[#007BE7]/5 border border-[#007BE7]/10">
                  <div className="text-xl sm:text-2xl font-bold text-[#007BE7] mb-1">15+</div>
                  <div className="text-xs sm:text-sm text-black/60">Cities Covered</div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={teamPhoto}
                  alt="Professional drone pilot with DJI drone - Drone services in India"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* VALUES SECTION */}
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Zap,
                title: "High Precision Drone Surveys",
                desc: "Accurate aerial mapping and land surveys using RTK/PPK technology for construction and industrial projects.",
              },
              {
                icon: Shield,
                title: "Certified & Safe Operations",
                desc: "DGCA-certified drone pilots ensuring safe, compliant, and professional drone operations across India.",
              },
              {
                icon: Heart,
                title: "Fast & Reliable Service",
                desc: "Quick turnaround times, professional editing, and delivery on all drone photography and videography projects.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-black/10 hover:border-[#007BE7]/30 hover:bg-[#007BE7]/5 transition"
              >
                <value.icon className="w-10 h-10 text-[#007BE7] mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                  {value.title}
                </h3>
                <p className="text-black/60 text-sm sm:text-base">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            <PricingSection />


      {/* Why Choose Us */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black mb-4 leading-tight">
              Why Choose SkyWheelzs For Drone Services Near Me?
            </h2>

            <p className="text-black/70 text-base sm:text-lg">
              Looking for drone services in India? Here's why we're the best choice for your aerial needs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Award,
                title: "DGCA Certification",
                desc: "All pilots are DGCA certified for legal and safe drone operations in India.",
              },
              {
                icon: Zap,
                title: "Advanced Technology",
                desc: "Enterprise-grade DJI drones with 4K cameras, thermal sensors, and RTK/PPK capabilities.",
              },
              {
                icon: Target,
                title: "Fast Delivery",
                desc: "Quick turnaround on editing and delivery. Express options available for urgent projects.",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Experienced drone pilots with expertise in weddings, real estate, industrial, and construction.",
              },
              {
                icon: Shield,
                title: "Safe & Compliant",
                desc: "Full compliance with Indian aviation regulations and insurance coverage for all operations.",
              },
              {
                icon: Heart,
                title: "Customer Focused",
                desc: "Dedicated support, personalized service, and commitment to exceeding expectations.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-black/5 hover:shadow-lg transition"
              >
                <item.icon className="w-12 h-12 text-[#007BE7] mb-4" />
                <h3 className="text-lg font-bold text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-black/60 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6">
              Professional Drone Services Near You
            </h2>

            <div className="space-y-4 text-black/70 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>SkyWheelzs</strong> is India's leading drone service provider, offering professional aerial photography, videography, and advanced survey solutions. Whether you're looking for drone services near you or require specialized aerial solutions, we have you covered.
              </p>

              <p>
                Our comprehensive drone service packages include:
                <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
                  <li>Aerial photography and videography for events, weddings, and real estate</li>
                  <li>Drone survey and mapping for construction and infrastructure projects</li>
                  <li>Industrial inspection services for rooftops, solar panels, and structures</li>
                  <li>Live drone streaming for events and large displays</li>
                  <li>Cinematic drone footage for marketing and promotional videos</li>
                </ul>
              </p>

              <p>
                Based in <strong>Chennai and Bangalore</strong>, we serve clients across India with DGCA-certified pilots and state-of-the-art drone technology. Whether you need drone services in Bangalore, Chennai, Kerala, Andaman, or Delhi, we have the expertise and equipment to deliver exceptional results.
              </p>

              <p>
                With over <strong>500+ completed drone projects</strong> and <strong>25+ certified pilots</strong>, we're the trusted choice for businesses seeking reliable, professional, and affordable drone services in India.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;