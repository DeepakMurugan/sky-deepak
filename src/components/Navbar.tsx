import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";
import logo from "@/assets/skywheelzs-drone-service-chennai.png";


const locationLinks = [
    { label: " Professional Drone Services in Chennai", href: "/drone-services-in-chennai-india", desc: "Chennai , Bangalore , Hyderabad" },

  { label: "Aerial Drone Services in Chennai", href: "/aerial-drone-services-in-chennai", desc: "ECR, OMR & Anna Nagar" },
  { label: "Drone Services in Bangalore", href: "/drone-services-in-bangalore-skywheelzs", desc: "Whitefield & Indiranagar" },
  { label: "Wedding Drone Services Kerala", href: "/wedding-drone-services-in-kerala", desc: "Backwater Weddings" },
  { label: "Beach Wedding Drone Andaman", href: "/beach-wedding-drone-services-andaman", desc: "Beach Weddings" },
  { label: "Luxury Drone Services Delhi", href: "/luxury-drone-services-delhi-ncr", desc: "Luxury Services" },
];



const navLinks = [
  { label: "Home", href: "/" },
    { label: "Drone Services", href: "/services" },
 { label: "Pricing", href: "#our-work" }, // 👈 ADD THIS
  { label: "About Us", href: "/about-us" },
  // { label: "Contact", href: "/contact-us" },
    // { label: "FAQ", href: "#faq" },

];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  const dropdownRef = useRef(null);

  /* Scroll Detect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Outside Click */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLocationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* LOGO */}
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Skywheelzs Logo"
              className={`h-12 sm:h-12 lg:h-15 w-full object-cover ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-md font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-black hover:text-[#007BE7]"
                    : "text-white hover:text-[#00A3FF]"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* LOCATIONS DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
                className={`flex items-center gap-2 text-md font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-black hover:text-[#007BE7]"
                    : "text-white hover:text-[#00A3FF]"
                }`}
              >
                <MapPin size={16} className="text-[#007BE7]" />
                Locations
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    locationsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {locationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl overflow-hidden"
                    onMouseEnter={() => setLocationsOpen(true)}
                    onMouseLeave={() => setLocationsOpen(false)}
                  >
                    <div className="p-2">
                      {locationLinks.map((location, index) => (
                        <motion.a
                          key={location.href}
                          href={location.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#007BE7]/10 transition-colors duration-200 group"
                        >
                          <div className="w-8 h-8 bg-[#007BE7]/20 rounded-lg flex items-center justify-center">
                            <MapPin size={14} className="text-[#007BE7]" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-[#007BE7]">
                              {location.label}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {location.desc}
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/contact-us" className="btn-primary text-sm py-2.5 px-6">
 Get Free Quote 🚀            </a>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-b border-border"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-foreground/70 hover:text-foreground font-medium"
                >
                  {link.label}
                </a>
              ))}

              {/* MOBILE LOCATIONS */}
              <div className="border-t border-border/50 pt-4">
                <button
                  onClick={() =>
                    setMobileLocationsOpen(!mobileLocationsOpen)
                  }
                  className="flex items-center justify-between w-full text-foreground/70 font-medium"
                >
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#007BE7]" />
                    Locations
                  </div>

                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      mobileLocationsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileLocationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 space-y-2 pl-6"
                    >
                      {locationLinks.map((location) => (
                        <a
                          key={location.href}
                          href={location.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-sm text-foreground/70 hover:text-[#007BE7]"
                        >
                          {location.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary block text-center text-sm py-2.5"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;