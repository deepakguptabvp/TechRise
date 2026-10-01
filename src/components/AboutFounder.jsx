import React from "react";
import { siteConfig } from "../data/siteConfig";
import {
  Users,
  Zap,
  ShieldCheck,
  Clock,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons";

const teamStats = [
  { label: "Combined Web Experience", value: "3+ Years" },
  { label: "Direct Client Collaboration", value: "100%" },
  { label: "Post-Launch Warranty", value: "30 Days" },
  { label: "Avg. Initial Response", value: "< 12 Hours" }
];

const teamPillars = [
  {
    icon: Zap,
    title: "Agile & Transparent Sprints",
    description: "Daily async updates, working preview links, and zero middlemen so you're always in the loop."
  },
  {
    icon: ShieldCheck,
    title: "Production-Grade Standards",
    description: "Modular, well-documented code built to scale seamlessly without unnecessary bloated libraries."
  },
  {
    icon: Clock,
    title: "On-Time Milestone Delivery",
    description: "Strict adherence to agreed project timelines, clear deliverables, and guaranteed warranty support."
  }
];

const AboutFounder = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="py-20 sm:py-24 relative bg-[#060c16] text-slate-100 overflow-hidden border-y border-slate-800/80"
    >
      {/* Background Image with Higher Visibility */}
      <div
        className="absolute inset-0 bg-cover bg-right sm:bg-center opacity-60 md:opacity-75 scale-100 md:scale-105 transition-all duration-700 pointer-events-none"
        style={{
          backgroundImage: "url('/solution-banner-bg.jpg')",
          backgroundPosition: "right 25% center"
        }}
      />

      {/* Transparent Gradient Overlays for Readability & High Visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060c16]/90 via-[#060c16]/75 to-[#060c16]/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060c16]/85 via-transparent to-[#060c16]/75 pointer-events-none" />

      {/* Vertical Subtle Pinstripe Texture */}
      <div
        className="absolute inset-y-0 left-0 w-full sm:w-1/2 md:w-1/3 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 14px)"
        }}
      />

      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-blue-600/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[250px] bg-cyan-500/15 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm">
            <Users className="w-3.5 h-3.5 text-blue-300" />
            <span>About TechRise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            A Dedicated Team of{" "}
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
              Engineers & Designers
            </span>
          </h2>

          <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            At TechRise, we unite modern design, senior engineering, and digital strategy to build fast, scalable, and high-converting web applications for growing businesses.
          </p>
        </div>

        {/* Team Working Culture & Stats Card (Glassmorphic Container) */}
        <div className="bg-slate-900/45 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Story & Philosophy */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Engineering Culture</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Built to deliver senior engineering without agency bloat.
              </h3>
              
              <p className="text-slate-200/90 text-xs sm:text-sm leading-relaxed">
                Traditional digital agencies charge heavy markups and route client requests through layers of non-technical managers. We keep our team lean, focused, and agile—giving you direct collaboration with the specialists building your product.
              </p>

              <p className="text-slate-300/80 text-xs sm:text-sm leading-relaxed">
                Whether you need a high-converting landing page, a complex SaaS interface, or a complete digital overhaul, our team ensures clean code, transparent pricing, and rapid delivery.
              </p>
            </div>

            {/* Quick Stats Bento */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
              {teamStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.04] backdrop-blur-md border border-white/[0.08] hover:border-blue-400/30 rounded-2xl p-4 text-center space-y-1 transition-all duration-300"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-sky-300 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* 3 Pillars Row */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {teamPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] hover:border-white/15 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-400/25 text-blue-300 flex items-center justify-center shrink-0 mt-0.5">
                    <PillarIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-slate-300/80 mt-0.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action CTA Strip */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-white text-center sm:text-left">
                Have a project in mind for our team?
              </h4>
              <p className="text-xs text-slate-300/80 text-center sm:text-left mt-0.5">
                Share your requirements and get a detailed proposal within 12 hours.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-400 hover:from-blue-400 hover:to-cyan-300 text-slate-950 font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-cyan-400/30 transition-all duration-300 cursor-pointer"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 backdrop-blur-md transition-all shadow-sm flex items-center justify-center cursor-pointer"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutFounder;
