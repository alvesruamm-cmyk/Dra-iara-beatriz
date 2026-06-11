import React, { useState } from "react";
import { MapPin, ExternalLink, Phone, Compass, MessageCircle, Map } from "lucide-react";
import { motion } from "motion/react";
import { LOCATIONS } from "../data";

export default function Locations() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const mockCityCoords = [
    { name: "Balneário Camboriú", relativeX: "62%", relativeY: "25%", color: "#163A5F" },
    { name: "Bombinhas", relativeX: "78%", relativeY: "65%", color: "#163A5F" },
    { name: "Tijucas", relativeX: "40%", relativeY: "82%", color: "#163A5F" }
  ];

  const handleOpenMap = (url: string) => {
    window.open(url, "_blank");
  };

  const handleCallClinic = (phone: string, cityName: string) => {
    const textQuery = encodeURIComponent(
      `Olá, gostaria de agendar uma avaliação com a Dra. Iara para a clínica parceira em **${cityName}**.`
    );
    window.open(`https://wa.me/5547999991234?text=${textQuery}`, "_blank");
  };

  return (
    <section id="atendimento" className="py-24 bg-[#F1EEE8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-16"
          id="locations_header"
        >
          <span className="text-xs font-semibold tracking-widest text-[#163A5F] uppercase block mb-3 font-sans">
            Consultórios de Primeiro Mundo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] tracking-tight font-medium">
            Regiões de Atendimento
          </h2>
          <p className="mt-4 font-sans text-sm sm:text-base text-[#1E1E1E]/70 leading-relaxed">
            Estruturas hospitalares e consultórios de alto padrão equipados com tecnologia para exames radiográficos e cirurgias assistidas, garantindo comodidade perto de você.
          </p>
        </motion.div>

        {/* Interactive Layout: Left is geographic listing tabs, right is stylized schematic radar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="locations_grid">
          
          {/* Left Panel: Tabs list (7/12 layout) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
            id="locations_tabs_col"
          >
            <div className="space-y-4">
              {LOCATIONS.map((loc, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={loc.name}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-6 sm:p-8 rounded-3xl border transition-all duration-350 cursor-pointer ${
                      isActive
                        ? "bg-white border-[#163A5F] shadow-md"
                        : "bg-[#E8E4DD]/40 border-transparent hover:bg-[#E8E4DD]/70"
                    }`}
                    id={`location_btn_${idx}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        {/* Map Icon Anchor with dynamic highlights */}
                        <div className={`p-3 rounded-2xl shrink-0 transition-colors ${
                          isActive ? "bg-[#163A5F] text-white" : "bg-white text-[#163A5F]"
                        }`}>
                          <MapPin size={22} />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-serif text-xl font-bold text-[#1E1E1E]">
                            {loc.name}
                          </h3>
                          <p className={`font-sans text-xs sm:text-sm leading-relaxed ${
                            isActive ? "text-[#1E1E1E]/80" : "text-[#1E1E1E]/60"
                          }`}>
                            {loc.address}
                          </p>
                        </div>
                      </div>

                      {/* Small visual radio indicator */}
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-1 ${
                        isActive ? "border-[#163A5F]" : "border-[#1E1E1E]/20"
                      }`}>
                        {isActive && <div className="w-2.5 h-2.5 rounded-full bg-[#163A5F]" />}
                      </div>
                    </div>

                    {/* Extended active specifications */}
                    {isActive && (
                      <div className="mt-6 pt-6 border-t border-[#E8E4DD] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="text-xs font-sans text-[#1E1E1E]/70 space-y-1">
                          <div className="flex items-center space-x-1.5 font-medium text-[#163A5F]">
                            <Compass size={12} />
                            <span>Horários Disponíveis: Sob Agendamento</span>
                          </div>
                          <div>Ambiente estéril, adaptado para cirurgias guiadas.</div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => handleOpenMap(loc.mapsUrl)}
                            className="inline-flex items-center space-x-1 border border-[#163A5F]/20 text-[#163A5F]/80 hover:text-[#163A5F] hover:bg-[#163A5F]/5 px-3.5 py-2 rounded-xl text-xs font-semibold font-sans transition-colors"
                            id={`map_link_${idx}`}
                          >
                            <span>Abrir no Google Maps</span>
                            <ExternalLink size={12} />
                          </button>
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Direct Central Booking CTA */}
            <div className="bg-[#163A5F]/5 border border-[#163A5F]/10 p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1 sm:max-w-md">
                <h4 className="font-serif text-base font-bold text-[#163A5F]">Deseja atendimento exclusivo em sua cidade?</h4>
                <p className="font-sans text-xs sm:text-sm text-[#1E1E1E]/70">Nossa assessoria personalizada direcionará você ao consultório parceiro mais próximo com a estrutura ideal.</p>
              </div>
              <button
                onClick={() => handleCallClinic(LOCATIONS[activeTab].phone, LOCATIONS[activeTab].name)}
                className="bg-[#163A5F] text-white hover:bg-[#0F2B47] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-center transition-colors shrink-0 flex items-center justify-center space-x-2 shadow-sm"
              >
                <MessageCircle size={16} />
                <span>Agendar Nesta Cidade</span>
              </button>
            </div>
          </motion.div>

          {/* Right Panel: Stylized Modern Schematic Radar Map (5/12 layout) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 h-full min-h-[350px] lg:min-h-none rounded-3xl bg-[#E8E4DD] border border-white/50 p-8 flex flex-col justify-between relative overflow-hidden"
            id="locations_map_col"
          >
            
            {/* Top info and geometric alignment details */}
            <div className="relative z-10">
              <span className="text-[10px] font-bold tracking-widest text-[#163A5F] uppercase font-sans">
                Mapa Costeiro de SC
              </span>
              <h3 className="font-serif text-lg font-bold text-[#1E1E1E] mt-1 leading-tight">
                Hubs de Reabilitação Integrada
              </h3>
              <p className="text-[11px] text-[#1E1E1E]/60 font-sans mt-2">
                Nossos consultórios parceiros estão dispostos de forma inteligente na região da Costa Sereia e do Vale do Rio Tijucas, otimizando o deslocamento pós-procedimento.
              </p>
            </div>

            {/* Stylized Visual Geography Canvas - No clunky external dependencies */}
            <div className="relative w-full h-[220px] rounded-2xl bg-[#F1EEE8]/40 border border-white/40 my-6 flex items-center justify-center overflow-hidden" id="stylized_map_canvas">
              
              {/* Coast Line vector schematic effect */}
              <svg className="absolute inset-0 w-full h-full opacity-15 stroke-[#163A5F] fill-none" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0 C 130 50, 180 80, 280 120 C 350 150, 380 180, 400 220" strokeWidth="3" />
                <path d="M40 0 C 120 50, 170 80, 270 120 C 340 150, 370 180, 390 220" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* Ripples of Santa Catarina coast */}
                <circle cx="280" cy="120" r="40" strokeWidth="1" strokeDasharray="3,3" />
                <circle cx="280" cy="120" r="70" strokeWidth="1" strokeDasharray="3,3" />
              </svg>

              {/* Coordinates Radar line */}
              <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-[#163A5F]/10 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l border-b border-[#163A5F]/10 rounded-bl-2xl" />

              {/* Styled markers mapping */}
              {mockCityCoords.map((coord, idx) => {
                const isSelected = activeTab === idx;
                return (
                  <div
                    key={coord.name}
                    className="absolute transition-all duration-300"
                    style={{ left: coord.relativeX, top: coord.relativeY }}
                  >
                    {/* Pulsing ring indicator */}
                    <div className="relative flex items-center justify-center">
                      <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping duration-1000 ${
                        isSelected ? "bg-[#163A5F]/40" : "bg-[#1E1E1E]/10"
                      }`} style={{ width: "32px", height: "32px" }} />
                      
                      {/* Central Point card */}
                      <button
                        onClick={() => setActiveTab(idx)}
                        className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm ${
                          isSelected
                            ? "bg-[#163A5F] text-white scale-110 border-2 border-white"
                            : "bg-white text-[#1E1E1E]/80 hover:bg-[#163A5F] hover:text-white"
                        }`}
                        title={coord.name}
                      >
                        <MapPin size={16} />
                      </button>

                      {/* Floating tooltip identifier text */}
                      <span className={`absolute top-10 whitespace-nowrap text-[9px] font-bold tracking-wide px-2 py-1 rounded-md shadow-xs border ${
                        isSelected
                          ? "bg-[#163A5F] text-white border-[#163A5F]"
                          : "bg-white text-[#1E1E1E] border-[#E8E4DD]"
                      }`}>
                        {coord.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer metric metadata */}
            <div className="flex items-center justify-between text-[10px] font-mono text-[#1E1E1E]/50 relative z-10" id="locations_metadata">
              <span className="flex items-center space-x-1">
                <Map size={10} />
                <span>COSTA AZUL REGION</span>
              </span>
              <span>UTM: 26°S 48°W</span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
