import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CalendarDays,
  Clock,
  MessageCircle,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import emailjs from "emailjs-com";

const services = [
  "Aerial Event Photography/Videography",
  "HDMI Live Streaming from Drone",
  "Property / Real Estate Shoot",
    "Construction Monitoring",
  "Industrial Inspection",
  "Real Estate Aerial",
  "Wedding Shoot",
  "Event Coverage",
  "Live Streaming",
  "Outdoor Promotional Shoot",
    "Drone Survey & Mapping",
  "Construction Monitoring",
 
  "Other",
];

const LeadFormSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.service ||
      !form.date
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_tq0n95q",
        "template_8fv0uuc",
        form,
        "JX17EV2EsaeLH8Stb"
      )
      .then(() => {
        toast.success("✅ Booking request sent! We’ll contact you soon.");

        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          message: "",
        });

        setLoading(false);

        // 🔥 WhatsApp redirect (increase conversion)
        // window.open(
        //   `https://wa.me/919360744915?text=Hi, I just submitted a drone booking request`,
        //   "_blank"
        // );
      })
      .catch(() => {
        toast.error("❌ Failed to send. Try again.");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="label-tag border-primary/30 text-primary bg-primary/5 mb-4 inline-block">
            Reach Out To Us
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Book Your Drone <br /> Service Now 
          </h2>

          <p className="text-muted-foreground mb-6 text-sm sm:text-base max-w-md">
            Get professional drone services in Chennai, Bangalore & All over India.
            Fast response, certified pilots, and cinematic results.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              Response within 30 minutes
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MessageCircle className="w-4 h-4 text-primary" />
              Free consultation available
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-sm">
            <Zap className="w-4 h-4 text-amber-600" />
            <span className="text-amber-700 font-medium">
              Limited slots available this week
            </span>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-2xl border border-border/40 rounded-3xl p-6 sm:p-8 shadow-xl space-y-5"
        >
          {/* NAME + EMAIL */}
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter Your Name *"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="input"
            />

            <input
              type="email"
              placeholder="Enter Your Email *"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="input"
            />
          </div>

          {/* PHONE */}
          <input
            type="tel"
            placeholder="Mobile Number *"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            className="input"
          />

          {/* SERVICE */}
          <div>
            <label className="text-sm text-foreground mb-1 block">
              Select Your Service *
            </label>
            <select
              value={form.service}
              onChange={(e) =>
                setForm({ ...form, service: e.target.value })
              }
              className="input"
            >
              <option value="">Choose Service</option>
              {services.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* DATE */}
<div>
  <label className="text-sm font-medium text-foreground mb-2 block">
    Select Date *
  </label>

  <div className="relative">
    {/* Icon */}
    <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary pointer-events-none" />

    {/* Input */}
    <input
      type="date"
      value={form.date}
      onChange={(e) =>
        setForm({ ...form, date: e.target.value })
      }
      className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-white/80 backdrop-blur-md text-foreground text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
    />
  </div>
</div>

          {/* MESSAGE */}
          <textarea
            placeholder="Message / Project Details (optional)"
            rows={4}
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="input resize-none"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            <Send size={16} />
            {loading ? "Sending..." : "Contact Us"}
          </button>

          <p className="text-xs text-center text-muted-foreground">
            🔒 Your data is safe. No spam. No unnecessary calls.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default LeadFormSection;