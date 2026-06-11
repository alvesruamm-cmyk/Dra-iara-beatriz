import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import GalleryExperience from "./components/GalleryExperience";
import Procedures from "./components/Procedures";
import Locations from "./components/Locations";
import Testimonials from "./components/Testimonials";
import SmartForm from "./components/SmartForm";
import FooterCta from "./components/FooterCta";
import Footer from "./components/Footer";
import WhatsAppBottom from "./components/WhatsAppBottom";

export default function App() { 
  return (
         
      {/* 1. Header / Navigation */}
      <Header />

      <main id="app_main_content">
        {/* 2. Hero Section (including Dra Iara's prominent image and credentials) */}
        <Hero />

        {/* 3. About the Doctor Section (including interactive Timeline) */}
        <About />

        {/* Vivência Clínica & Atendimento Premium */}
        <GalleryExperience />

        {/* 4. Clinical Procedures and Specialized Treatments */}
        <Procedures />

        {/* 6. Service Areas / Geographic Locations */}
        <Locations />

        {/* 7. Patient Testimonials & Visual Carousels */}
        <Testimonials />

        {/* 8. Smart Interactive Diagnostic Form Questionnaire */}
        <SmartForm />

        {/* 9. Pre-Footer Deep Action CTA */}
        <FooterCta />
      </main>

      {/* 10. Core Institutional Footer */}
      <Footer />

      {/* 11. Persistent Adaptive WhatsApp Hover Floating Button */}
      <WhatsAppBottom />

    </div>
  );
}
