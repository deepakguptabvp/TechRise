import React from "react";
import { siteConfig } from "../data/siteConfig";
import {
  ArrowRight,
  Zap,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";

const Hero = ({ onSelectService }) => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-24 md:pt-44 md:pb-32 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Ambient Background Glow Elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-7">
          
          {/* Top Founder & Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-300 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Independent Web Development Studio</span>
            <span className="text-slate-500">•</span>
            <span className="text-cyan-400 font-semibold">Accepting New Projects</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] max-w-3xl">
            Websites That Help Your{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
                Business Grow
              </span>
              <svg
                className="absolute -bottom-1.5 left-0 w-full text-cyan-500/40"
                viewBox="0 0 250 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9C60 3 190 3 247 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-sm text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            We design and develop modern, responsive, high-performance websites that help businesses strengthen their online presence, attract customers, and grow with confidence.
          </p>

          {/* Key Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full py-1">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-900/80 border border-slate-800 px-4 py-2.5 rounded-xl shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Mobile Responsive</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-900/80 border border-slate-800 px-4 py-2.5 rounded-xl shadow-sm">
              <Zap className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Fast & Clean Code</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-900/80 border border-slate-800 px-4 py-2.5 rounded-xl shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Post-Launch Support</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection("portfolio")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-base px-7 py-3.5 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-200 cursor-pointer"
            >
              <span>Explore Our Work</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
