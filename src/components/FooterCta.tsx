import React from "react";
import { MessageCircle, ShieldCheck, Sparkle } from "lucide-react";
import { motion } from "motion/react";

export default function FooterCta() {
  const handleWappClick = () => {
    const textQuery = encodeURIComponent(
      "Olá, Dra. Iara! Gostaria de conversar sobre um planejamento para os meus implantes dentários."
    );
    window.open(`https://wa.me/5547999991234?text=${textQuery}`, "_blank");
  };

  return (
    <section className="relative py-24 bg-[#163A5F] text-white overflow-hidden text-center" id="final_cta">
      {/* Decorative luxury radial glow effects */}
      <div className="absolute top-[-50%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#E8E4DD]/10 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8"
      >
        
        {/* Luxury top category asterisk divider */}
        <div className="flex items-center justify-center space-x-2 text-[#E8E4DD]">
          <Sparkle size={14} className="animate-spin duration-3500 fill-current" />
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase font-sans">
            Alta Performance Científica & Estética
          </span>
          <Sparkle size={14} className="animate-spin duration-3500 fill-current" />
        </div>

        {/* Master headline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5.5xl text-white tracking-tight leading-tight max-w-3xl mx-auto font-medium" id="final_cta_headline">
          Seu novo sorriso começa com uma avaliação especializada.
        </h2>

        {/* Instructive subtitle */}
        <p className="font-sans text-xs sm:text-base text-[#F1EEE8]/80 max-w-2xl mx-auto leading-relaxed">
          Agende sua consulta preliminar e experimente um cuidado personalizado e integral, focado na restauração de sua confiança e qualidade de vida. Atendimentos agendados em Balneário Camboriú, Bombinhas e Tijucas.
        </p>

        {/* Massive call-to-action button */}
        <div className="pt-4" id="final_cta_button_container">
          <button
            onClick={handleWappClick}
            className="inline-flex items-center space-x-3.5 bg-[#F1EEE8] text-[#163A5F] hover:bg-white hover:text-[#0F2B47] py-4.5 px-8 sm:px-12 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest shadow-xl transition-all transform hover:scale-[1.02] cursor-pointer"
            id="final_cta_primary_btn"
          >
            <MessageCircle size={22} className="stroke-[2.5px] fill-[#163A5F]/5" />
            <span>Falar com a Dra. Iara pelo WhatsApp</span>
          </button>
        </div>

        {/* Short bullet proof markers below WhatsApp button */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-6 text-xs text-[#F1EEE8]/60 font-sans" id="final_cta_trust_markers">
          <div className="flex items-center space-x-1.5">
            <ShieldCheck size={14} className="text-[#E8E4DD]" />
            <span>Contato Direto com Suporte Clínico</span>
          </div>
          <div className="flex items-center space-x-1.55">
            <ShieldCheck size={14} className="text-[#E8E4DD]" />
            <span>Segurança de Dados e Sigilo em SC</span>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
