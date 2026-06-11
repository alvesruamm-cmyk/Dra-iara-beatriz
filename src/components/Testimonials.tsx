import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-play interval for effortless conversion
  useEffect(() => {
    timerRef.current = setInterval(slideNext, 8000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(slideNext, 8000);
    }
  };

  const handleNextClick = () => {
    resetTimer();
    slideNext();
  };

  const handlePrevClick = () => {
    resetTimer();
    slidePrev();
  };

  const handleDotClick = (idx: number) => {
    resetTimer();
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  // Monogram initials for premium look
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <section id="depoimentos" className="py-24 bg-[#E8E4DD] relative overflow-hidden">
      
      {/* Visual background details */}
      <div className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-[#F1EEE8]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-[#163A5F]/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
          id="testimonials_header"
        >
          <span className="text-xs font-semibold tracking-widest text-[#163A5F] uppercase block mb-3 font-sans">
            Comunidade de Sorrisos Transformados
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#1E1E1E] tracking-tight font-medium">
            Depoimentos de Pacientes
          </h2>
          <p className="mt-3 font-sans text-xs sm:text-sm text-[#1E1E1E]/60">
            Mais do que prontuários, histórias reais de recuperação funcional e resgate de bem-estar integral.
          </p>
        </motion.div>

        {/* Carousel Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative"
          id="testimonials_carousel_container"
        >
          
          {/* Main Card View */}
          <div className="min-h-[300px] md:min-h-[250px] bg-[#F1EEE8] border border-white/60 p-8 sm:p-12 rounded-[2rem] shadow-lg relative flex flex-col justify-between overflow-hidden" id="testimonial_slide_card">
            
            {/* Subtle decorative quotation quotes watermark */}
            <div className="absolute top-6 right-8 text-[#163A5F]/5 select-none pointer-events-none font-serif text-[12rem] leading-none">
              “
            </div>

            <div>
              {/* Star System */}
              <div className="flex items-center space-x-1 mb-6" id="testimonial_stars">
                {[...Array(TESTIMONIALS[activeIndex].stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#163A5F] text-[#163A5F]" />
                ))}
              </div>

              {/* Paciente Review Text */}
              <p className="font-sans text-base sm:text-lg text-[#1E1E1E]/90 italic leading-relaxed mb-8 relative z-10">
                "{TESTIMONIALS[activeIndex].text}"
              </p>
            </div>

            {/* Patient Footer Detail Block */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#E8E4DD] mt-6">
              
              <div className="flex items-center space-x-4">
                {/* Simulated circle portrait using premium initial labels */}
                <div className="w-12 h-12 rounded-full bg-[#163A5F] text-white flex items-center justify-center font-serif text-sm font-semibold border-2 border-white shadow-sm shrink-0">
                  {getInitials(TESTIMONIALS[activeIndex].name)}
                </div>
                
                <div>
                  <h4 className="font-serif text-base font-bold text-[#1e1e1e]">
                    {TESTIMONIALS[activeIndex].name}
                  </h4>
                  <p className="font-sans text-xs text-[#1e1e1e]/60">
                    {TESTIMONIALS[activeIndex].role && `${TESTIMONIALS[activeIndex].role} • `} Paciente de {TESTIMONIALS[activeIndex].location}
                  </p>
                </div>
              </div>

              {/* Status Verification Badge */}
              <div className="flex items-center space-x-1.5 self-start sm:self-center bg-white/60 border border-white px-3 py-1.5 rounded-full">
                <Quote size={12} className="text-[#163A5F]" />
                <span className="text-[10px] font-semibold tracking-wider text-[#163A5F]/70 uppercase font-sans">
                  Avaliação Confirmada
                </span>
              </div>

            </div>

          </div>

          {/* Left Arrow Nav */}
          <button
            onClick={handlePrevClick}
            className="absolute left-[-16px] md:left-[-24px] top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white text-[#163A5F] hover:bg-[#163A5F] hover:text-white flex items-center justify-center border border-[#E8E4DD] shadow-md hover:shadow-lg transition-all duration-350 cursor-pointer z-20"
            aria-label="Depoimento Anterior"
            id="testimonial_prev_btn"
          >
            <ChevronLeft size={20} className="stroke-[2.5px]" />
          </button>

          {/* Right Arrow Nav */}
          <button
            onClick={handleNextClick}
            className="absolute right-[-16px] md:right-[-24px] top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white text-[#163A5F] hover:bg-[#163A5F] hover:text-white flex items-center justify-center border border-[#E8E4DD] shadow-md hover:shadow-lg transition-all duration-350 cursor-pointer z-20"
            aria-label="Próximo Depoimento"
            id="testimonial_next_btn"
          >
            <ChevronRight size={20} className="stroke-[2.5px]" />
          </button>

        </motion.div>

        {/* Carousel Slide Navigation Dots */}
        <div className="flex justify-center items-center space-x-3.5 mt-8" id="testimonials_dots_container">
          {TESTIMONIALS.map((_, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isSelected ? "bg-[#163A5F] w-6" : "bg-[#163A5F]/20 w-2"
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
                id={`testimonial_dot_${idx}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
