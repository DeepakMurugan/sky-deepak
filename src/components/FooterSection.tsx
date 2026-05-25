import { MapPin, Phone, Mail, Instagram, Youtube } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo + About */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4 text-foreground">
              Sky<span className="text-primary">wheelzs</span>
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              India's premier drone technology company delivering aerial intelligence solutions for enterprise clients.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/skywheelzs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.youtube.com/@skywheelzs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground text-sm">
              Pages
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="/about-us" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground text-sm">
              Locations
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="/aerial-drone-services-in-chennai" className="hover:text-primary transition-colors">
                  Drone Services in Chennai
                </a>
              </li>
              <li>
                <a href="/drone-services-in-bangalore-skywheelzs" className="hover:text-primary transition-colors">
                  Drone Services in Bangalore
                </a>
              </li>
              <li>
                <a href="/wedding-drone-services-in-kerala" className="hover:text-primary transition-colors">
                  Wedding Drone shoots in Kerala
                </a>
              </li>
              <li>
                <a href="/beach-wedding-drone-services-andaman" className="hover:text-primary transition-colors">
                  Beach Drone Service in Andaman and Nicobar Islands

                </a>
              </li>
              <li>
                <a href="/luxury-drone-services-delhi-ncr" className="hover:text-primary transition-colors">
                  Drone Services in Delhi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground text-sm">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-primary mt-0.5 flex-shrink-0" />
                Chennai & Bangalore, India
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-primary flex-shrink-0" />
                +91 93607 44915
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-primary flex-shrink-0" />
                info@skywheelzs.com
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
       <div className="border-t border-border mt-12 pt-8 text-center text-md text-muted-foreground">
  © {new Date().getFullYear()} Skywheelzs. All rights reserved. | 
 
        Built by{" "}

  <a
      
        href="https://dtechgrow.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-primary hover:underline"
      >
        DTech Grow ↗
  </a>
  
</div>





      </div>
      
    </footer>
  );
};

export default FooterSection;