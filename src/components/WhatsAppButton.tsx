import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://api.whatsapp.com/send?phone=5511963799408"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contato via WhatsApp"
    >
      {/* Pulse Effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30" />
      
      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full shadow-lg hover:shadow-xl transition-shadow">
        <MessageCircle size={28} className="text-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2 whitespace-nowrap shadow-lg">
          <span className="text-sm text-foreground font-medium">
            Fale conosco
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
