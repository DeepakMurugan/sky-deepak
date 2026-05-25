import { MessageCircleMore } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919360744915?text=Hi%2C%20I%27m%20interested%20in%20your%20drone%20services"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircleMore className="w-6 h-6 text-white" />
    </motion.a>
  );
};

export default WhatsAppButton;