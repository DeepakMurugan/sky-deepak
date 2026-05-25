import Navbar from "@/components/Navbar";
import LeadFormSection from "@/components/LeadFormSection";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact SkyWheelzs | Book Professional Drone Services | Fast Quote & Support";
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', 'Contact SkyWheelzs for professional drone services | Get quick quotes for aerial photography, videography, inspection & mapping. Same-day response. WhatsApp booking available.');
    }
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    // {
    //   icon: Phone,
    //   title: "Phone",
    //   desc: "+91 9360744915",
    //   link: "tel:+919360744915",
    // },
    {
      icon: Mail,
      title: "Email",
      desc: "info@skywheelzs.com",
      link: "mailto:info@skywheelzs.com",
    },
    {
      icon: MapPin,
      title: "Address",
      desc: "Chennai & Bangalore, India",
      link: "#",
    },
    {
      icon: Clock,
      title: "Response Time",
      desc: "Within 30 minutes",
      link: "#",
    },
  ];

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
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 text-xs rounded-full border border-[#007BE7]/30 text-[#007BE7] bg-[#007BE7]/10 mb-5">
              Get in Touch
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Contact Us For{" "}
              <span className="text-[#007BE7]">
                Drone Services Near You
              </span>
            </h1>

            <p className="text-black/70 text-base sm:text-lg max-w-3xl mx-auto">
              Have questions about our drone services? Need a custom quote? Get in touch with our team today. We're here to help with all your aerial photography, videography, and survey needs across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#007BE7]/5 via-transparent to-[#007BE7]/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 sm:p-8 rounded-2xl bg-white border border-black/10 hover:border-[#007BE7]/30 hover:bg-[#007BE7]/5 hover:shadow-lg transition text-center cursor-pointer"
              >
                <info.icon className="w-10 h-10 text-[#007BE7] mx-auto mb-4 group-hover:scale-110 transition" />
                <h3 className="text-lg font-bold text-black mb-2">
                  {info.title}
                </h3>
                <p className="text-black/60 text-sm">
                  {info.desc}
                </p>
              </motion.a>
            ))}
          </div>

          {/* SEO Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-6 sm:p-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              Professional Drone Services In India
            </h2>

            <div className="space-y-4 text-black/70 text-sm sm:text-base">
              <p>
                Looking for drone services near you? <strong>SkyWheelzs</strong> provides comprehensive aerial photography, videography, and survey solutions across India. Whether you need drone services in Chennai, Bangalore, Kerala, Andaman, or Delhi, our DGCA-certified pilots are ready to assist.
              </p>

              <p>
                Contact us today to discuss your specific drone service requirements:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Aerial Event Photography & Videography</li>
                <li>Real Estate Drone Photography</li>
                <li>Drone Live Streaming (HD Quality)</li>
                <li>Construction & Industrial Inspection</li>
                <li>Drone Mapping & Land Surveys</li>
                <li>Promotional & Cinematic Shoots</li>
              </ul>

              <p>
                Our team provides <strong>fast response times</strong>, <strong>competitive pricing</strong>, and <strong>professional quality</strong> on every project. Get your free quote within 30 minutes of contacting us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black mb-4 leading-tight">
              Send Us Your Drone Service Inquiry
            </h2>

            <p className="text-black/70 text-base sm:text-lg">
              Fill out the form below and we'll get back to you with a personalized quote within 30 minutes. All fields are required for us to process your request.
            </p>
          </motion.div>

          <LeadFormSection />
        </div>
      </section>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;