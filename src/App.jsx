import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import AboutFounder from "./components/AboutFounder";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import QuickConsultModal from "./components/QuickConsultModal";
import WhatsAppFloatingBtn from "./components/WhatsAppFloatingBtn";
import { PrivacyModal, TermsModal } from "./components/LegalModals";

function App() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  // State to pass preselected service from Services to Contact form
  const [preselectedService, setPreselectedService] = useState("");

  const handleSelectService = (serviceTitle) => {
    setPreselectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen text-slate-800 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar onOpenConsultModal={() => setConsultModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onSelectService={handleSelectService} />
        <Services onSelectService={handleSelectService} />
        <WhyChooseUs />
        <Portfolio />
        <AboutFounder />
        <Testimonials />
        <FAQ />
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenTerms={() => setTermsModalOpen(true)}
        onSelectService={handleSelectService}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingBtn />

      {/* Modals */}
      <QuickConsultModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
      />
    </div>
  );
}

export default App;
