import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5551995185222" // ← substitua pelo número real
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-[#25D366] text-white p-3 rounded-full shadow-lg z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Abrir conversa no WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        {/* Efeito de brilho sutil */}
        <span className="absolute inset-0 rounded-full bg-white opacity-20 blur-md animate-pulse"></span>
        <MessageCircle size={26} strokeWidth={2.5} />
      </div>
    </motion.a>
  );
}
