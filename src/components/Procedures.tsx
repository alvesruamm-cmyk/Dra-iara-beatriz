import React, { useState } from "react";
import { Layers, ShieldCheck, Scissors, Sparkle, FileCheck, Check, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { PROCEDURES } from "../data";

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-6 h-6 text-[#163A5F]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#163A5F]" />,
  Scissors: <Scissors className="w-6 h-6 text-[#163A5F]" />,
  Sparkle: <Sparkle className="w-6 h-6 text-[#163A5F]" />,
  FileCheck: <FileCheck className="w-6 h-6 text-[#163A5F]" />
};

export default function Procedures() {
  const [selectedProc, setSelectedProc] = useState<string | null>(null);

  const handleContactProc = (procTitle: string) => {
    const textQuery = encodeURIComponent(
      `Olá, Dra. Iara! Tenho interesse em uma avaliação focada em: **${procTitle}**.`
    );
    window.open(`https://wa.me/5547999991234?text=${textQuery}`, "_blank");
  };

  return (
    <section id="especialidades" className="pt-12 pb-24 bg-[#E8E4DD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-16"
          id="procedures_header"
        >
          <span className="text-xs font-semibold tracking-widest text-[#163A5F] uppercase block mb-3 font-sans">
            Especialidades Clínicas de Alto Padrão
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] tracking-tight font-medium">
            Tratamentos Clássicos & Reconstrutivos
          </h2>
          <p className="mt-4 font-sans text-sm sm:text-base text-[#1E1E1E]/70 leading-relaxed">
            Abordagens integradas que resgatam o equilíbrio biológico de sua mordida, combinando materiais estéticos importados de padrão internacional à ergonomia de tratamentos ágeis.
          </p>
        </motion.div>

        {/* Dynamic Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="procedures_grid">
          {PROCEDURES.map((proc, index) => {
            const isHovered = selectedProc === proc.id;
            return (
              <motion.div
                key={proc.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                onMouseEnter={() => setSelectedProc(proc.id)}
                onMouseLeave={() => setSelectedProc(null)}
                className={`bg-[#F1EEE8] p-8 rounded-3xl border transition-all duration-500 ease-out flex flex-col justify-between h-auto shadow-sm relative group cursor-pointer ${
                  isHovered
                    ? "border-[#163A5F]/70 shadow-lg scale-[1.01] bg-white translate-y-[-4px]"
                    : "border-[#163A5F]/5 hover:border-[#163A5F]/20"
                }`}
                id={`proc_card_${proc.id}`}
              >
                {/* Visual anchor elements */}
                <div className="relative z-10 space-y-6">
                  
                  {/* Icon & Index heading */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#E8E4DD]/60 flex items-center justify-center border border-white/50 group-hover:bg-[#163A5F]/10 transition-colors duration-400">
                      {iconMap[proc.iconName] || <Sparkle className="w-6 h-6 text-[#163A5F]" />}
                    </div>
                    <span className="text-2xl font-serif text-[#163A5F]/10 font-bold group-hover:text-[#163A5F]/20 select-none">
                      {`0${PROCEDURES.indexOf(proc) + 1}`}
                    </span>
                  </div>

                  {/* Title & Descr */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-[#1E1E1E] group-hover:text-[#163A5F] transition-colors duration-300">
                      {proc.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#1E1E1E]/70 leading-relaxed">
                      {proc.description}
                    </p>
                  </div>

                  {/* Bullet specifics details list */}
                  <div className="border-t border-[#E8E4DD]/85 pt-4 space-y-2">
                    <span className="text-[10px] font-bold tracking-widest text-[#163A5F]/50 uppercase block mb-3 font-sans">
                      Destaques do Protocolo
                    </span>
                    {proc.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-2">
                        <Check size={12} className="text-[#163A5F] mt-1 shrink-0 stroke-[2.5px]" />
                        <span className="text-xs text-[#1E1E1E]/80 font-sans leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card footer calling action */}
                <div className="mt-8 pt-4 border-t border-[#E8E4DD]/40 flex items-center justify-between z-10">
                  <button
                    onClick={() => handleContactProc(proc.title)}
                    className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#163A5F] hover:text-[#0F2B47] group transition-colors"
                  >
                    <span>Solicitar Tratamento</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>

                {/* Decorative absolute element overlay */}
                <div className="absolute right-6 top-6 w-8 h-8 rounded-full bg-[#163A5F]/0 group-hover:bg-[#163A5F]/5 blur-xs transition-all duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
