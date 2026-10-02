import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const mobileNavRef = useRef(null);

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

  // Auto-scroll active pill into view on mobile
  useEffect(() => {
    if (mobileNavRef.current) {
      const activeEl = mobileNavRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [activeSection]);

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
        mobileMenuOpen
          ? "bg-white border-b border-slate-200 py-3 shadow-sm"
          : isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_25px_-2px_rgba(15,23,42,0.08)] py-3 sm:py-3.5"
          : "bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-[0_2px_15px_-3px_rgba(15,23,42,0.05)] py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Logo, Desktop Nav, Action CTAs */}
        <div className="flex items-center justify-between">
          {/* TechRise Brand Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#home")}
            className="inline-block group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg shrink-0"
            aria-label="TechRise Home"
          >
            <img
              src="/techrise-logo-dark.png"
              alt="TechRise - Elevate Your Digital Presence"
              className="h-7 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation (Visible on lg+) */}
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
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile Navigation Toggle Button (Commented Out) */}
            {/*
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            */}
          </div>
        </div>

        {/* Mobile Navigation Pills Bar (Visible on mobile/tablet screens < lg) */}
        <div
          ref={mobileNavRef}
          className="lg:hidden mt-2.5 pt-2 border-t border-slate-200/70 flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {siteConfig.navLinks.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.name}
                href={item.href}
                data-active={isActive ? "true" : "false"}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-full transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-xs shadow-blue-600/30"
                    : "bg-slate-100/90 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 border border-slate-200/60"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer Menu (Commented Out) */}
      {/*
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[92px] sm:top-[96px] inset-x-0 bottom-0 h-[calc(100dvh-92px)] sm:h-[calc(100dvh-96px)] z-50 bg-white lg:hidden flex flex-col justify-between px-6 py-6 overflow-y-auto shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold px-3 pb-2 border-b border-slate-100">
                All Navigation Pages
              </div>
              
              <div className="pt-2 flex flex-col gap-1">
                {siteConfig.navLinks.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`text-base font-semibold px-4 py-3 rounded-xl transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-blue-50 text-blue-600 font-bold"
                          : "text-slate-800 hover:text-blue-600 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3 mt-6">
              <div className="text-center text-xs text-slate-500 pt-1 font-medium">
                Direct founder collaboration • Deepak Gupta
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      */}
    </header>
  );
};

export default Navbar;
