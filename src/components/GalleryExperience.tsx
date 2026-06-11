import React from "react";
import { MessageSquare, ShieldCheck, Cpu, Users, Eye, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface ExperienceCard {
  id: string;
  title: string;
  category: string;
  description: string;
  // Easily replaceable drive link or premium placeholder
  imageUrl: string;
  badge: string;
  objectPosition?: string;
}

export default function GalleryExperience() {
  const experiences: ExperienceCard[] = [
    {
      id: "exp_1",
      title: "Atendimento Clínico de Alta Proximidade",
      category: "Acolhimento",
      description: "Momento dedicado a escutar as necessidades do paciente, avaliar suas queixas estéticas com empatia e estabelecer um diagnosticado sem pressa.",
      // Placeholder or direct image for: Dra. Iara atendendo com paciência e elegância
      imageUrl: "https://lh3.googleusercontent.com/d/1rZ81TFABO6XK-LINN3giwlb-qjb3qh6j", // Converted link for the customized consultation photo
      badge: "Consulta Consular",
      objectPosition: "center 20%"
    },
    {
      id: "exp_2",
      title: "Infraestrutura Premium em SC",
      category: "Ambiente",
      description: "Consultórios modernos planejados para oferecer máxima biossegurança, purificação de ar e conforto térmico-acústico em áreas nobres.",
      imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      badge: "Biossegurança Ouro",
      objectPosition: "center"
    },
    {
      id: "exp_3",
      title: "Atendimento Infantil com Cuidado Lúdico",
      category: "Infantil",
      description: "Consultas dinâmicas e sem traumas estruturadas de forma lúdica no tempo da criança, cultivando hábitos saudáveis para toda a vida.",
      imageUrl: "https://lh3.googleusercontent.com/d/1H8MoUZy_fbhXc86EBrG4n2auhcR-532u",
      badge: "Odontopediatria",
      objectPosition: "center 20%"
    },
    {
      id: "exp_4",
      title: "Cuidado e Suporte Pós-Procedimento",
      category: "Recuperação",
      description: "Assistência contínua com a parceria de nutrição exclusiva para garantir uma cicatrização rápida, de baixo inchaço e sem privações alimentares.",
      imageUrl: "https://lh3.googleusercontent.com/d/1AzUhqoc3dmc1xrg9E69CFoIym50luqqK",
      badge: "Suporte 24h",
      objectPosition: "center 10%" // Perfect positioning to keep heads and upper bodies inside the crop
    }
  ];

  const handleWappContact = (experienceTitle: string) => {
    const textQuery = encodeURIComponent(
      `Olá, Dra. Iara! Gostaria de agendar uma consulta focada no padrão de atendimento: **${experienceTitle}**.`
    );
    window.open(`https://wa.me/5547999991234?text=${textQuery}`, "_blank");
  };

  return (
    <section id="experiencia" className="pt-24 pb-12 bg-[#E8E4DD] relative overflow-hidden">
      {/* Background ambient luxury blurs */}
      <div className="absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#F1EEE8]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-[#163A5F]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
          id="gallery_header"
        >
          <span className="text-xs font-semibold tracking-widest text-[#163A5F] uppercase block mb-3 font-sans">
            A Experiência no Consultório
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] tracking-tight font-medium">
            Vivência Clínica Dra. Iara Beatriz
          </h2>
          <p className="mt-4 font-sans text-sm sm:text-base text-[#1E1E1E]/70 leading-relaxed">
            Mais do que tecnologia médica, estruturamos uma jornada focada na previsibilidade, conforto absoluto do paciente e suporte multiprofissional contínuo. Explore nosso dia a dia clínico.
          </p>
        </motion.div>

        {/* 4 Cards Grid - Fully customizable photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="gallery_cards_grid">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: "easeOut" }}
              className="bg-[#F1EEE8] rounded-3xl overflow-hidden border border-white/50 shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-500 flex flex-col justify-between group cursor-pointer"
              onClick={() => handleWappContact(exp.title)}
              id={`experience_card_${exp.id}`}
            >
              
              {/* Photo Frame Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <img
                  src={exp.imageUrl}
                  alt={exp.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: exp.objectPosition || "center" }}
                />
                
                {/* Visual Glassmorphic Tag Badge on top of the Image */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center space-x-1.5 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A572]" />
                    <span>{exp.badge}</span>
                  </span>
                </div>

                {/* Subtile visual overlay when hovering */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-[11px] font-bold tracking-widest uppercase flex items-center space-x-1">
                    <span>Ver detalhes do atendimento</span>
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              {/* Text Information Details */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-[#163A5F] uppercase tracking-wider block font-sans">
                    {exp.category}
                  </span>
                  
                  <h3 className="font-serif text-lg font-bold text-[#1E1E1E] group-hover:text-[#163A5F] transition-colors leading-snug">
                    {exp.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-[#1E1E1E]/75 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Floating Micro call to action */}
                <div className="pt-3 border-t border-[#E8E4DD] flex items-center justify-between text-xs font-semibold text-[#163A5F]">
                  <span className="font-bold uppercase tracking-wider">Agendar Vivência</span>
                  <div className="w-8 h-8 rounded-full bg-white/60 group-hover:bg-[#163A5F] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic Instructional Note */}
        <div className="mt-8 text-center text-xs text-[#1E1E1E]/50 font-sans" id="gallery_instructional_note">
          <span>* Toque em qualquer um dos cartões para iniciar uma conversa guiada no WhatsApp focado na área de sua preferência.</span>
        </div>

      </div>
    </section>
  );
}
