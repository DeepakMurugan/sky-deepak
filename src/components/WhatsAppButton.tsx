import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="mailto:hello@skydigilens.in"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      aria-label="Email SkyDigiLens"
    >
      <Mail className="w-6 h-6 text-white" />
    </motion.a>
  );
};

export default WhatsAppButton;