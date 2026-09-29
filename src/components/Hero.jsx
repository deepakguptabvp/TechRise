import React from "react";
import { siteConfig } from "../data/siteConfig";
import {
  ArrowRight,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Code2,
  TrendingUp,
  Laptop
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
      className="relative min-h-[92vh] pt-36 pb-20 md:pt-44 md:pb-28 flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30"
    >
      {/* 1. Precision Background Grid Pattern with Radial Vignette */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 [mask-image:radial-gradient(ellipse_75%_55%_at_50%_38%,#000_45%,transparent_85%)] pointer-events-none" />

      {/* 2. Layered Multi-Color Ambient Glow Orbs */}
      <div className="absolute top-12 left-1/2 -translate-x-[60%] w-[580px] h-[580px] bg-linear-to-tr from-blue-600/15 via-indigo-500/10 to-cyan-400/15 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute top-28 left-1/2 translate-x-[15%] w-[480px] h-[480px] bg-gradient-to-bl from-cyan-400/20 via-sky-400/12 to-blue-600/10 blur-[100px] rounded-full pointer-events-none animate-pulse-glow [animation-delay:3s]" />
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-gradient-to-r from-blue-500/8 via-cyan-400/12 to-indigo-500/8 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-cyan-400/10 blur-[100px] rounded-full pointer-events-none" />

      {/* 3. Subtle Geometric Concentric Halo Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] border border-blue-500/10 rounded-full pointer-events-none hidden md:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[980px] h-[980px] border border-cyan-500/[0.07] border-dashed rounded-full pointer-events-none hidden md:block animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] border border-indigo-500/[0.08] rounded-full pointer-events-none hidden md:block" />

      {/* 4. Decorative Tech Crosshairs & Sparkles */}
      <div className="absolute top-[22%] left-[8%] md:left-[14%] text-blue-400/40 text-xl font-light select-none pointer-events-none">
        +
      </div>
      <div className="absolute top-[28%] right-[8%] md:right-[15%] text-cyan-400/40 text-xl font-light select-none pointer-events-none">
        +
      </div>
      <div className="absolute bottom-[24%] left-[10%] md:left-[18%] text-indigo-400/30 text-lg font-light select-none pointer-events-none">
        +
      </div>
      <div className="absolute bottom-[20%] right-[10%] md:right-[16%] text-blue-400/40 text-xl font-light select-none pointer-events-none">
        +
      </div>

      {/* 5. Left Floating Tech Accent Badges (Desktop) */}
      <div className="hidden xl:flex absolute left-8 2xl:left-16 top-1/3 -translate-y-1/2 flex-col gap-5 pointer-events-none z-10">
        <div className="animate-float-slow bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-blue-500/5 px-3.5 py-2.5 rounded-2xl flex items-center gap-3 w-56 mt-30">
          <div className="w-8 h-8 rounded-xl bg-linear-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-sm shrink-0">
            <Zap className="w-4 h-4 fill-white" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <span>99+ PageSpeed</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <div className="text-[10px] text-slate-500 font-medium">Ultra-Fast Load Times</div>
          </div>
        </div>

        <div className="animate-float-reverse [animation-delay:1.5s] bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-blue-500/5 px-3.5 py-2.5 rounded-2xl flex items-center gap-3 w-52 translate-x-4 mt-20">
          <div className="w-8 h-8 rounded-xl bg-linear-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-sm shrink-0">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Modern Codebase</div>
            <div className="text-[10px] text-slate-500 font-medium">React • Tailwind • SEO</div>
          </div>
        </div>
      </div>

      {/* 6. Right Floating Tech Accent Badges (Desktop) */}
      <div className="hidden xl:flex absolute right-8 2xl:right-16 top-1/3 -translate-y-1/2 flex-col gap-5 pointer-events-none z-10">
        <div className="animate-float-reverse bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-blue-500/5 px-3.5 py-2.5 rounded-2xl flex items-center gap-3 w-56">
          <div className="w-8 h-8 rounded-xl bg-linear-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-sm shrink-0">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Conversion Focused</div>
            <div className="text-[10px] text-slate-500 font-medium">Designed to Convert</div>
          </div>
        </div>

        <div className="animate-float-slow [animation-delay:2s] bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-blue-500/5 px-3.5 py-2.5 rounded-2xl flex items-center gap-3 w-52 -translate-x-4 mt-30">
          <div className="w-8 h-8 rounded-xl bg-linear-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-sm shrink-0">
            <Laptop className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">100% Responsive</div>
            <div className="text-[10px] text-slate-500 font-medium">Mobile, Tablet, Desktop</div>
          </div>
        </div>
      </div>

      {/* 7. Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-7">
          
          {/* Top Availability & Studio Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/80 text-xs font-medium text-slate-700 shadow-sm shadow-blue-500/10 hover:border-blue-400/80 transition-all duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-slate-800">Modern Web Development Studio</span>
            <span className="text-slate-300">•</span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-600" />
              Accepting New Projects
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] max-w-3xl">
            Websites That Help Your{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                Business Grow
              </span>
              <svg
                className="absolute -bottom-1.5 left-0 w-full text-cyan-500/50"
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
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            We design and develop modern, responsive, high-performance websites that help businesses strengthen their online presence, attract customers, and grow with confidence.
          </p>

          {/* Key Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full py-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/90 backdrop-blur-sm border border-slate-200/90 px-4 py-2.5 rounded-xl shadow-xs hover:border-slate-300 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
              <span>Mobile Responsive</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/90 backdrop-blur-sm border border-slate-200/90 px-4 py-2.5 rounded-xl shadow-xs hover:border-slate-300 transition-colors">
              <Zap className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Fast & Clean Code</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/90 backdrop-blur-sm border border-slate-200/90 px-4 py-2.5 rounded-xl shadow-xs hover:border-slate-300 transition-colors">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Post-Launch Support</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection("portfolio")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-semibold text-base px-7 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 shadow-xs transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
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

