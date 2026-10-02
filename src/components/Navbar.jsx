import React, { useState, useEffect } from "react";
import { siteConfig } from "../data/siteConfig";
import {
  Menu,
  X,
  ArrowUpRight
} from "lucide-react";

const Navbar = ({ onOpenConsultModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["services", "why-us", "portfolio", "about", "faq", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#" || href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_25px_-2px_rgba(15,23,42,0.08)] py-3.5"
          : "bg-white/70 backdrop-blur-md border-b border-slate-200/50 shadow-[0_2px_15px_-3px_rgba(15,23,42,0.05)] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* TechRise Brand Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#home")}
            className="inline-block group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
            aria-label="TechRise Home"
          >
            <img
              src="/techrise-logo-dark.png"
              alt="TechRise - Elevate Your Digital Presence"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 border border-slate-200 px-3 py-1.5 rounded-full backdrop-blur-md">
            {siteConfig.navLinks.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-xs shadow-blue-600/30"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/70"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenConsultModal}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Get Free Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-white/98 backdrop-blur-xl border-t border-slate-200 lg:hidden flex flex-col justify-between p-6 animate-in fade-in slide-in-from-top-4 duration-200 overflow-y-auto">
          <div className="flex flex-col gap-2">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold px-3 py-1">
              Navigation
            </div>
            
            {siteConfig.navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-lg font-medium text-slate-800 hover:text-blue-600 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-4 rounded-xl shadow-md shadow-blue-600/20"
            >
              <span>Get Free Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="text-center text-xs text-slate-500 pt-2">
              Direct founder collaboration • Deepak Gupta
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
