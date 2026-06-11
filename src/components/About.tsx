import React from "react";
import { Award, BookOpen, MapPin, Sparkle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { DOCTOR_INFO, TIMELINE_EVENTS } from "../data";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#E8E4DD] relative overflow-hidden">
      {/* Decorative radial blur for luxury mood */}
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#F1EEE8]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-[#163A5F]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12"
          id="about_header"
        >
          <span className="text-xs font-semibold tracking-widest text-[#163A5F] uppercase block mb-3 font-sans">
            A Profissional por Trás do Sorriso
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] tracking-tight font-medium" id="about_main_title">
            Conheça a Dra. Iara Beatriz Arruda
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F1EEE8] p-6 sm:p-10 lg:p-12 rounded-[2.5rem] border border-white/60 shadow-xl"
          id="about_content_grid"
        >
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-6 text-left" id="about_bio_text">
            <p className="font-sans text-base sm:text-lg text-[#1E1E1E]/80 leading-relaxed" id="about_bio_p1">
              {DOCTOR_INFO.bio}
            </p>
            <p className="font-sans text-sm text-[#1E1E1E]/70 leading-relaxed" id="about_bio_p2">
              {DOCTOR_INFO.clinicsSummary}
            </p>

            <div className="pt-2 text-xs text-[#1E1E1E]/50 flex items-center space-x-1.5" id="about_cro_info">
              <span>Registro profissional ativo no CRO:</span>
              <strong className="text-[#163A5F] font-semibold">SC 19460</strong>
            </div>
          </div>

          {/* Philosophy quota & locations focus */}
          <div className="lg:col-span-5 space-y-6 text-left border-t lg:border-t-0 lg:border-l border-[#E8E4DD] pt-8 lg:pt-0 lg:pl-10" id="about_quote_side">
            <blockquote className="italic font-serif text-[#163A5F] text-lg sm:text-xl leading-relaxed" id="about_blockquote">
              "Acredito que restabelecer a mastigação e dentes firmes vai muito além de um processo mecânico. É devolver autoestima, autoconfiança de falar em público e prazer em se alimentar sem dores ou constrangimentos."
            </blockquote>

            {/* Visual geographic focus of clinics */}
            <div className="bg-[#E8E4DD]/40 p-5 rounded-2xl border border-white/50 shadow-xs space-y-3" id="about_clinics_card">
              <h4 className="font-serif text-xs font-semibold text-[#163A5F] uppercase tracking-wider flex items-center space-x-2">
                <MapPin size={14} />
                <span>Atendimento Presencial em SC</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Balneário Camboriú", "Bombinhas", "Tijucas"].map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center space-x-1 bg-white text-[#1E1E1E]/90 text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border border-[#E8E4DD] shadow-xs"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#163A5F]" />
                    <span>{city}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
