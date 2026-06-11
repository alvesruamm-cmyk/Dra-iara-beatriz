import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Atendimento", href: "#atendimento" },
    { label: "Depoimentos", href: "#depoimentos" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 88; // header height
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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F1EEE8]/90 backdrop-blur-md shadow-sm border-b border-[#E8E4DD] py-3"
            : "bg-transparent py-5"
        }`}
        id="app_header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, "hero")}
            className="flex flex-col group"
            id="header_logo_link"
          >
            <span className="font-serif text-lg sm:text-2xl font-medium tracking-wide text-[#163A5F] group-hover:opacity-85 transition-opacity">
              Dra. Iara Beatriz
            </span>
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.2em] font-light uppercase text-[#1E1E1E]/75">
              Implantodontologia Avançada
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop_nav">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href.slice(1))}
                className="font-sans text-sm font-medium text-[#1E1E1E]/80 hover:text-[#163A5F] hover:translate-y-[-1px] transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#163A5F] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#diagnostico"
              onClick={(e) => handleScrollTo(e, "diagnostico")}
              className="inline-flex items-center space-x-2 bg-[#163A5F] text-white hover:bg-[#0F2B47] px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02]"
              id="header_cta_btn"
            >
              <Calendar size={14} />
              <span>Agendar Avaliação</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#163A5F] hover:bg-[#E8E4DD] rounded-full transition-colors focus:outline-none"
            aria-label="Abrir Menu"
            id="mobile_menu_toggle_btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Side Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed top-16 left-0 w-full bg-[#F1EEE8] border-b border-[#E8E4DD] shadow-xl z-40 md:hidden"
            id="mobile_nav_panel"
          >
            <div className="px-5 pt-4 pb-8 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href.slice(1))}
                  className="block px-4 py-3 rounded-xl font-sans text-base font-semibold text-[#1E1E1E]/95 hover:bg-[#E8E4DD] hover:text-[#163A5F] transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[#E8E4DD] px-4">
                <a
                  href="#diagnostico"
                  onClick={(e) => handleScrollTo(e, "diagnostico")}
                  className="flex items-center justify-center space-x-2 bg-[#163A5F] text-white hover:bg-[#0F2B47] py-3.5 px-6 rounded-xl text-center text-sm font-semibold uppercase tracking-widest shadow-md transition-all"
                  id="mobile_header_cta"
                >
                  <Calendar size={16} />
                  <span>Agendar Avaliação</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
