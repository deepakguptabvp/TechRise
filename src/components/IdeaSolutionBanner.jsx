import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons";
import { siteConfig } from "../data/siteConfig";

const IdeaSolutionBanner = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#071e22] border-y border-teal-900/60">
      {/* Background Image on Right with Dark Teal Tone */}
      <div
        className="absolute inset-0 bg-cover bg-right sm:bg-center md:bg-right opacity-40 md:opacity-60 scale-100 md:scale-105 transition-all duration-700 pointer-events-none"
        style={{
          backgroundImage: "url('/solution-banner-bg.jpg')",
          backgroundPosition: "right 25% center"
        }}
      />

      {/* Dark Teal Gradient Overlays matching user screenshot */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#051a1d] via-[#072429]/95 to-[#072429]/40 md:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#051a1d]/90 via-transparent to-[#051a1d]/40 md:hidden pointer-events-none" />

      {/* Vertical Subtle Pinstripe Texture on Left */}
      <div
        className="absolute inset-y-0 left-0 w-full sm:w-1/2 md:w-1/3 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 14px)"
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl lg:max-w-3xl space-y-5 sm:space-y-6"
        >

          
          {/* Subtle Accent Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-400/30 text-teal-300 text-xs font-semibold tracking-wide uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            <span>Turn Your Vision Into Reality</span>
          </div>

          {/* Headline - exact concept from screenshot */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.15]">
            You have Idea ? <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-200 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
              We have Solution.
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-teal-100/90 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl">
            Delivering Customized and High-Impact Web Development, UI/UX Design & Digital Solutions to scale your brand and accelerate business growth.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-300 hover:to-cyan-400 text-slate-950 font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-teal-950/50 hover:shadow-teal-400/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Bring Idea to Life</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl backdrop-blur-md transition-all duration-200 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default IdeaSolutionBanner;
