import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function WhatsAppBottom() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on load to establish state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Shows an elegant conversational tooltip after 3 seconds of the button becoming visible
    if (!isVisible) {
      setShowTip(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowTip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isVisible]);

  const handleWappClick = () => {
    const textQuery = encodeURIComponent(
      "Olá, Dra. Iara! Estou navegando na sua página e gostaria de tirar uma dúvida sobre implantes dentários."
    );
    window.open(`https://wa.me/5547999991234?text=${textQuery}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-none"
          id="whatsapp_floating_anchor"
        >
          
          {/* Dynamic Conversational Tooltip */}
          <AnimatePresence>
            {showTip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                className="pointer-events-auto bg-white text-[#1E1E1E] px-4.5 py-3.5 rounded-2xl shadow-xl border border-[#E8E4DD] text-xs font-sans font-medium flex items-center space-x-3.5 max-w-[280px]"
                id="whatsapp_floating_tooltip"
              >
                <div className="space-y-0.5">
                  <span className="font-bold text-[#163A5F] block">Dra. Iara Beatriz</span>
                  <p className="text-[#1E1E1E]/80 text-[11px] leading-relaxed">
                    Agende sua avaliação ou tire suas dúvidas agora pelo WhatsApp.
                  </p>
                </div>
                
                {/* Direct Tooltip cross closer */}
                <button
                  onClick={() => setShowTip(false)}
                  className="text-[#1E1E1E]/40 hover:text-[#1E1E1E] p-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer self-start"
                  aria-label="Fechar mensagem"
                >
                  <X size={12} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Pulse Action button */}
          <div className="relative pointer-events-auto h-14 w-14">
            {/* Pulsing visual halo wave rings */}
            <span className="absolute inset-0 h-full w-full rounded-full bg-green-500/25 animate-ping" />
            
            <button
              onClick={handleWappClick}
              className="relative z-10 w-14 h-14 rounded-full bg-[#163A5F] hover:bg-[#0F2B47] text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 cursor-pointer border-2 border-white"
              aria-label="Enviar mensagem de WhatsApp"
              id="whatsapp_floater_btn"
            >
              <MessageCircle size={26} className="fill-white/10" />
            </button>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
