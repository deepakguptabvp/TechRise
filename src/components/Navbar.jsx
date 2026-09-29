import React, { useState, useEffect, useRef } from "react";
import { siteConfig } from "../data/siteConfig";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Globe,
  Zap,
  Palette,
  Sparkles,
  ShieldCheck
} from "lucide-react";

const serviceDropdownItems = [
  {
    title: "Business Websites",
    desc: "Multi-page modern web development",
    icon: Globe,
    href: "#services"
  },
  {
    title: "Landing Pages",
    desc: "High-converting single page experiences",
    icon: Zap,
    href: "#services"
  },
  {
    title: "UI/UX Design",
    desc: "Custom Figma UI/UX & design systems",
    icon: Palette,
    href: "#services"
  },
  {
    title: "Website Redesign",
    desc: "Upgrade slow or outdated websites",
    icon: Sparkles,
    href: "#services"
  },
  {
    title: "Maintenance & Support",
    desc: "Regular updates & priority technical care",
    icon: ShieldCheck,
    href: "#services"
  }
];

const Navbar = ({ onOpenConsultModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const dropdownTimeoutRef = useRef(null);

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
        setServicesDropdownOpen(false);
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
    setServicesDropdownOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#" || href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
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
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            aria-label="TechRise Home"
          >
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-blue-600 via-blue-500 to-cyan-500 p-[1.5px] shadow-sm shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center relative overflow-hidden">
                {/* Upward Growth Bars */}
                <div className="flex items-end gap-1">
                  <span className="w-1.5 h-3 bg-blue-300 rounded-t-sm"></span>
                  <span className="w-1.5 h-5 bg-blue-500 rounded-t-sm"></span>
                  <span className="w-1.5 h-7 bg-cyan-600 rounded-t-sm"></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
                TechRise
                <span className="text-blue-600 font-black">.</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500">
                Digital Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 border border-slate-200 px-3 py-1.5 rounded-full backdrop-blur-md">
            {siteConfig.navLinks.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              const isServices = item.name === "Services";

              if (isServices) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                        isActive || servicesDropdownOpen
                          ? "bg-blue-600 text-white shadow-xs shadow-blue-600/30"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/70"
                      }`}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl p-2.5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                        {serviceDropdownItems.map((serv, i) => {
                          const Icon = serv.icon;
                          return (
                            <a
                              key={i}
                              href={serv.href}
                              onClick={(e) => handleNavClick(e, serv.href)}
                              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors group cursor-pointer"
                            >
                              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-105 group-hover:bg-blue-100 transition-all shrink-0">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                  {serv.title}
                                </div>
                                <div className="text-[10px] text-slate-500 line-clamp-1">
                                  {serv.desc}
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

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
            
            {siteConfig.navLinks.map((item) => {
              if (item.name === "Services") {
                return (
                  <div key={item.name} className="flex flex-col">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between text-lg font-medium text-slate-800 hover:text-blue-600 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors w-full text-left"
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-xl my-1 border border-slate-200">
                        {serviceDropdownItems.map((serv, i) => (
                          <a
                            key={i}
                            href={serv.href}
                            onClick={(e) => handleNavClick(e, serv.href)}
                            className="block text-sm text-slate-600 hover:text-blue-600 py-1.5 px-2 rounded-lg"
                          >
                            {serv.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-lg font-medium text-slate-800 hover:text-blue-600 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  {item.name}
                </a>
              );
            })}
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
