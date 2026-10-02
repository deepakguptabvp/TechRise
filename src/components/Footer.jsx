import React, { useState, useEffect } from "react";
import { siteConfig } from "../data/siteConfig";
import { ArrowUp, Mail } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons";

const Footer = ({ onOpenPrivacy, onOpenTerms, onSelectService }) => {
  const currentYear = new Date().getFullYear();
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };
      setIstTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServiceClick = (serviceName) => {
    onSelectService(serviceName);
    scrollToSection("contact");
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Ambient background glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-linear-to-b from-blue-600/10 via-cyan-500/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
              aria-label="TechRise Home"
            >
              <img
                src="/techrise-logo.png"
                alt="TechRise - Elevate Your Digital Presence"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Independent web development and frontend architecture studio delivering high-performance, conversion-focused websites for startups and businesses worldwide.
            </p>

            {/* Live IST Status Box */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>IST: {istTime || "Loading..."}</span>
              <span className="text-slate-700">•</span>
              <span className="text-slate-400">Noida, India</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleServiceClick("Business Website Development")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Business Website Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("Landing Page Development")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Landing Page Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("Website Redesign & Modernization")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Website Redesign & Modernization
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("Website Maintenance & Support")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Website Maintenance & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("why-us")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Why TechRise
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Founder
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact Channels */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contacts
            </h4>

            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-slate-400 hover:text-emerald-400 transition-colors group"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2.5 text-slate-400 hover:text-blue-400 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="break-all">{siteConfig.contact.email}</span>
                </a>
              </li>
            </ul>
          </div>



        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} <strong className="text-slate-300">TechRise</strong>. Founded by Deepak Gupta. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0"></span>
              <span>Privacy Policy</span>
            </button>
            <button
              onClick={onOpenTerms}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0"></span>
              <span>Terms of Engagement</span>
            </button>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
