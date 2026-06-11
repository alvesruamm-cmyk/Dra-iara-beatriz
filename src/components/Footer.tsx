import React from "react";
import { MessageCircle, Instagram, Shield, Award, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWappClick = () => {
    window.open("https://wa.me/5547999991234", "_blank");
  };

  const handleInstaClick = () => {
    window.open("https://instagram.com", "_blank");
  };

  return (
    <footer className="bg-[#E8E4DD] text-[#1E1E1E] border-t border-[#163A5F]/10 pt-16 pb-8" id="app_footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 mb-8 border-b border-[#163A5F]/10">
          
          {/* Column 1: Executive Brand Info (4/12 layout) */}
          <div className="md:col-span-4 space-y-4" id="footer_col_brand">
            <div className="space-y-1">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-[#163A5F]">
                Dra. Iara Beatriz Arruda
              </span>
              <p className="text-[10px] font-sans tracking-[0.25em] font-medium text-[#1E1E1E]/60 uppercase">
                Implantodontologia Avançada
              </p>
            </div>
            
            <p className="text-xs sm:text-sm text-[#1E1E1E]/75 leading-relaxed max-w-sm">
              Tratamentos inovadores dirigidos à reabilitação estética e funcional sob o mais rígido rigor cirúrgico e acolhimento nutricional em Santa Catarina.
            </p>

            <div className="inline-flex items-center space-x-2 bg-[#163A5F]/10 border border-[#163A5F]/10 text-[#163A5F] px-3.5 py-1.5 rounded-lg text-xs font-semibold">
              <Award size={14} />
              <span>CRO/SC 19460</span>
            </div>
          </div>

          {/* Column 2: Atendimento em (4/12 layout) */}
          <div className="md:col-span-4 space-y-4" id="footer_col_cities">
            <h4 className="font-serif text-sm font-bold text-[#163A5F] tracking-wide uppercase">
              Locais de Atendimento
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#1E1E1E]/80">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#163A5F]" />
                <span>Balneário Camboriú — SC (Av. Brasil, Centro)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#163A5F]" />
                <span>Bombinhas — SC (Av. Leopoldo Zarling)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#163A5F]" />
                <span>Tijucas — SC (Rua Jacob Lameu Tavares)</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Links (4/12 layout) */}
          <div className="md:col-span-4 space-y-4" id="footer_col_links">
            <h4 className="font-serif text-sm font-bold text-[#163A5F] tracking-wide uppercase">
              Canais Digitais & Agendamentos
            </h4>
            
            <p className="text-xs text-[#1E1E1E]/70 max-w-xs leading-relaxed">
              Fale diretamente com nossa assessoria de acolhimento para tirar dúvidas operacionais ou reservar seu horário prévio.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={handleWappClick}
                className="w-10 h-10 rounded-full bg-[#163A5F] text-white hover:bg-[#0F2B47] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                aria-label="Falar pelo WhatsApp"
                id="footer_social_whatsapp"
              >
                <MessageCircle size={18} />
              </button>

              <button
                onClick={handleInstaClick}
                className="w-10 h-10 rounded-full bg-[#163A5F] text-white hover:bg-[#0F2B47] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                aria-label="Seguir no Instagram"
                id="footer_social_instagram"
              >
                <Instagram size={18} />
              </button>
            </div>
          </div>

        </div>

        {/* Corporate Legal & Credits section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[11px] font-sans text-[#1E1E1E]/55" id="footer_terms_row">
          <div>
            <span>© {currentYear} Dra. Iara Beatriz Arruda. Todos os direitos reservados.</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Shield size={10} />
            <span>Responsabilidade Técnica: Dra. Iara Beatriz Arruda • CRO/SC 19460</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
