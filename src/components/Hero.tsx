import React from "react";
import { Check, MessageCircle, Award, ShieldCheck, Sparkles, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { DOCTOR_INFO } from "../data";

// Use the converted direct Google Drive display link for the provided photograph
const DRA_IMAGE = "https://lh3.googleusercontent.com/d/18a51cBn4vFC0EI3myAOh8y21SpX3Y_Vg";

export default function Hero() {
  const handleWappClick = () => {
    // Predefined high-end message for premium dental clinics
    const textQuery = encodeURIComponent(
      "Olá, Dra. Iara! Gostaria de agendar uma consulta de avaliação para implantes."
    );
    window.open(`https://wa.me/5547999991234?text=${textQuery}`, "_blank");
  };

  const handleScrollToForm = () => {
    const element = document.getElementById("diagnostico");
    if (element) {
      const offset = 88;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] lg:min-h-screen pt-24 sm:pt-28 flex items-center bg-[#F1EEE8] overflow-hidden"
    >
      {/* Absolute decorative subtle shapes */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#E8E4DD]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#E8E4DD]/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LADO ESQUERDO: Foto em moldura/card (Aparece em primeiro no Mobile) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 flex justify-center items-center h-full relative order-first lg:order-none"
            id="hero_image_col"
          >
            {/* Elegant outer geometric frame acting as a pedestal */}
            <div className="relative w-full max-w-[500px] lg:max-w-none aspect-[3/4] lg:h-[720px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-[#E8E4DD]/40" id="hero_image_frame">
              <img
                src={DRA_IMAGE}
                alt="Fotografia de alta resolução da Dra. Iara Beatriz Arruda sorrindo de forma acolhedora e confiante em ambiente profissional premium."
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-[1.03] transition-transform duration-700"
                id="hero_dr_profile_img"
              />
              
              {/* Overlaid minimal certification badge inside the photo */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center space-x-3.5 border border-white/50 shadow-lg">
                <div className="bg-[#163A5F] text-white p-2.5 rounded-xl">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#163A5F]">Padrão Ouro de Atendimento</h4>
                  <p className="text-[11px] text-[#1E1E1E]/75 font-sans">Próteses e implantes planejados digitalmente</p>
                </div>
              </div>
            </div>

            {/* Subtle background elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-44 border-r-2 border-b-2 border-[#163A5F]/20 rounded-br-[2rem] hidden lg:block" />
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-44 border-l-2 border-t-2 border-[#163A5F]/20 rounded-tl-[2rem] hidden lg:block" />
          </motion.div>

          {/* LADO DIREITO: Headline, Subheadline, CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center text-left"
            id="hero_content_col"
          >
            {/* Premium category tag */}
            <div className="inline-flex items-center space-x-2 bg-[#163A5F]/10 border border-[#163A5F]/10 text-[#163A5F] px-4 py-1.5 rounded-full w-fit mb-6" id="hero_badge_lead">
              <span className="w-1.5 h-1.5 rounded-full bg-[#163A5F] animate-pulse" />
              <span className="text-[11px] font-semibold tracking-wider uppercase font-sans">
                Referência em Reabilitação Oral
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5.5xl text-[#1E1E1E] leading-[1.12] tracking-tight font-medium" id="hero_headline">
              Recupere seu sorriso com <span className="text-[#163A5F] italic font-semibold">segurança</span>, tecnologia e acompanhamento completo.
            </h1>

            {/* Subheadline (Institutional Text) */}
            <p className="mt-6 font-sans text-base sm:text-lg text-[#1E1E1E]/80 leading-relaxed max-w-xl" id="hero_subheadline">
              Especialista em Implantodontia com atuação em Balneário Camboriú, Bombinhas e Tijucas. Tratamentos planejados para devolver função, estética e qualidade de vida.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4" id="hero_cta_container">
              <button
                onClick={handleWappClick}
                className="flex items-center justify-center space-x-3 bg-[#163A5F] hover:bg-[#0F2B47] text-white py-4 px-8 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-xl transform hover:scale-[1.02] cursor-pointer"
                id="hero_primary_cta"
              >
                <MessageCircle size={20} className="stroke-[2.5px]" />
                <span className="tracking-wide">Agendar Avaliação pelo WhatsApp</span>
              </button>
              
              <button
                onClick={handleScrollToForm}
                className="flex items-center justify-center space-x-2 border border-[#163A5F]/30 hover:border-[#163A5F] text-[#163A5F] hover:bg-[#163A5F]/5 py-4 px-6 rounded-full text-sm font-semibold transition-all cursor-pointer bg-white/40"
                id="hero_secondary_cta"
              >
                <span>Fazer Questionário Inteligente</span>
              </button>
            </div>

            {/* Credenciais Acadêmicas e Registro */}
            <div className="mt-10 pt-8 border-t border-[#E8E4DD] flex flex-col gap-3.5" id="hero_credentials_stamp">
              <span className="text-xs font-semibold tracking-widest text-[#163A5F]/60 uppercase">
                Credenciais Acadêmicas e Registro
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-y-2.5 sm:gap-y-3">
                <div className="flex items-center space-x-2.5">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#163A5F]/10 text-[#163A5F]">
                    <Check size={12} className="stroke-[3px]" />
                  </div>
                  <span className="text-sm font-semibold text-[#1E1E1E]">CRO/SC 19460</span>
                </div>
                
                <div className="flex items-center space-x-2.5">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#163A5F]/10 text-[#163A5F]">
                    <Check size={12} className="stroke-[3px]" />
                  </div>
                  <span className="text-sm font-medium text-[#1E1E1E]/95">Especialista em Implantodontia — <span className="text-xs text-[#1E1E1E]/70 font-light font-sans">Instituto ORBIS</span></span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#163A5F]/10 text-[#163A5F]">
                    <Check size={12} className="stroke-[3px]" />
                  </div>
                  <span className="text-sm font-medium text-[#1E1E1E]/95">Pós-graduada em Cirurgia Oral Menor — <span className="text-xs text-[#1E1E1E]/70 font-light font-sans">Instituto ORBIS</span></span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

