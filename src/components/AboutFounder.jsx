import React from "react";
import { siteConfig } from "../data/siteConfig";
import {
  User,
  Code2,
  CheckCircle2,
  Mail,
  Terminal,
  Layers,
  Sparkles,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const technicalSkills = [
  "React.js & Next.js",
  "Tailwind CSS & Vanilla CSS",
  "JavaScript (ES6+) & TypeScript",
  "Responsive UI/UX Architecture",
  "REST APIs & Webhooks",
  "Vite & Modern Build Tools",
  "Core Web Vitals Optimization",
  "Git & Azure DevOps / GitHub",
  "Payment Gateways (Razorpay/Stripe)",
  "SEO Schema & OpenGraph"
];

const AboutFounder = () => {
  return (
    <section id="about" className="py-24 relative bg-[#090E1A] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/60 text-xs font-semibold text-cyan-400">
            <User className="w-3.5 h-3.5" />
            <span>Founder-Led Studio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Direct Engineering,{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
              No Agency Noise
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            TechRise is founded and operated by Deepak Gupta to give businesses direct access to senior frontend architecture, modern standards, and honest execution.
          </p>
        </div>

        {/* Main Founder Card Grid */}
        <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Founder Avatar / Graphic Badge */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="relative">
                {/* Profile Visual Frame */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-blue-400 p-1 shadow-2xl shadow-blue-500/20">
                  <div className="w-full h-full bg-[#0B1220] rounded-[22px] overflow-hidden flex flex-col items-center justify-center relative p-6">
                    {/* Clean stylized founder portrait mark */}
                    <div className="w-24 h-24 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-cyan-400 mb-3 shadow-inner">
                      <Terminal className="w-12 h-12" />
                    </div>
                    <span className="text-sm font-bold text-white tracking-tight">
                      Deepak Gupta
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400">
                      @deepakguptabvp
                    </span>
                  </div>
                </div>

                {/* Status indicator */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-900/95 border border-slate-700 px-3 py-1 rounded-full text-[10px] font-semibold text-emerald-400 flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{siteConfig.founder.availability}</span>
                </div>
              </div>

              {/* Social / Profiles */}
              <div className="flex items-center gap-3 pt-4">
                <a
                  href={siteConfig.founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  aria-label="GitHub profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${siteConfig.founder.email}`}
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  aria-label="Email founder"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Founder Story & Principles */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-cyan-400">
                  {siteConfig.founder.role}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Crafting Digital Products with Engineering Rigor
                </h3>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  Hi, I’m <strong>Deepak Gupta</strong>. I’m a frontend architect and software engineer with over 3 years of hands-on experience building enterprise-grade applications, responsive consumer portals, and conversion-optimized websites.
                </p>
                <p>
                  I started <strong>TechRise</strong> because I noticed many small businesses, startups, and restaurants were paying high agency retainers only to receive bloated, template-based websites that loaded slowly and broke on mobile phones.
                </p>
                <p>
                  At TechRise, you work directly with the developer building your site. Every component is thoughtfully written, fast, SEO-ready, and built to scale as your business expands.
                </p>
              </div>

              {/* Technical Proficiencies */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Core Engineering Toolkit</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutFounder;
