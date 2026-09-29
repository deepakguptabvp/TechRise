import React from "react";
import { siteConfig } from "../data/siteConfig";
import {
  User,
  Mail,
  ArrowRight,
  Code2
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const coreSkills = [
  "React.js & Next.js",
  "Tailwind CSS & UI/UX",
  "JavaScript & TypeScript",
  "REST APIs & Webhooks",
  "Performance & SEO",
  "Clean Architecture"
];

const AboutFounder = () => {
  return (
    <section id="about" className="py-20 relative border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <User className="w-3.5 h-3.5 text-blue-600" />
            <span>About the Founder</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Direct Engineering,{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
              No Agency Overhead
            </span>
          </h2>
        </div>

        {/* Simplified Founder Card */}
        <div className="bg-white border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Profile Details */}
            <div className="md:col-span-4 flex flex-col items-center text-center space-y-4 md:border-r md:border-slate-200 md:pr-8">
              <div className="w-24 h-24 rounded-2xl bg-linear-to-tr from-blue-600 to-cyan-500 p-0.5 shadow-md shadow-blue-500/20">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                  <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-mono">
                    DG
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">Deepak Gupta</h3>
                <p className="text-xs text-blue-700 font-semibold mt-0.5">
                  Founder & Frontend Architect
                </p>
                <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-medium text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{siteConfig.founder.availability}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={siteConfig.founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors shadow-xs"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors shadow-xs"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${siteConfig.founder.email}`}
                  className="p-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors shadow-xs"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Story & Skills */}
            <div className="md:col-span-8 space-y-5">
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  Hi, I’m <strong>Deepak Gupta</strong>. With over 3+ years of professional engineering experience, I help businesses build fast, responsive, and high-converting web applications.
                </p>
                <p>
                  At <strong>TechRise</strong>, you work directly with the developer building your site. No middlemen, no bloated templates—just clean code, transparent pricing, and fast delivery.
                </p>
              </div>

              {/* Core Skills */}
              <div className="pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Core Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coreSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-white text-slate-700 border border-slate-200 shadow-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Contact CTA */}
              <div className="pt-1">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                >
                  <span>Have a project in mind? Let's talk</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutFounder;
