import React, { useState } from "react";
import { portfolioCategories, portfolioProjects } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";
import {
  ExternalLink,
  Layers,
  ArrowUpRight,
  Code2,
  UtensilsCrossed,
  Building2,
  Compass,
  Music,
  CheckSquare,
  Sparkles
} from "lucide-react";

const getVisualIcon = (type) => {
  switch (type) {
    case "cafe":
      return UtensilsCrossed;
    case "property":
      return Building2;
    case "travel":
      return Compass;
    case "music":
      return Music;
    case "app":
      return CheckSquare;
    default:
      return Layers;
  }
};

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects =
    selectedCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 relative bg-[#0B1220] border-t border-slate-800/80">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-semibold text-cyan-400">
            <Code2 className="w-3.5 h-3.5" />
            <span>Curated Portfolio & Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work Built for{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Real-World Impact
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Explore a selection of responsive business websites, conversion-focused landing pages, and interactive web applications engineered by TechRise.
          </p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-14">
          {portfolioCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                  : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const VisualIcon = getVisualIcon(project.previewType);

            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-blue-500/50 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/40 hover:-translate-y-1"
              >
                {/* Visual Header / Mockup Preview */}
                <div className={`relative h-48 bg-gradient-to-br ${project.accentGradient} p-5 border-b border-slate-800 flex flex-col justify-between overflow-hidden`}>
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

                  {/* Top Bar Badge & Icon */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900/90 text-cyan-300 border border-slate-700/80 shadow-sm">
                      {project.badge}
                    </span>

                    <div className="w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-slate-200 shadow-sm group-hover:scale-110 transition-transform">
                      <VisualIcon className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>

                  {/* Center Visual Mockup Graphic */}
                  <div className="relative z-10 space-y-1">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      {project.clientType}
                    </div>
                    <div className="text-lg font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </div>
                  </div>

                  {/* Live Status indicator */}
                  <div className="relative z-10 flex items-center gap-1.5 text-[10px] text-slate-300 font-medium bg-slate-900/80 px-2 py-0.5 rounded w-fit border border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{project.demoStatus}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-cyan-300 leading-snug">
                      {project.tagline}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-750 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
                    >
                      View Case Study
                    </button>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-xl hover:bg-blue-950/40 border border-transparent hover:border-blue-900/60 transition-all"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Portfolio Guarantee Note */}
        <div className="mt-14 text-center max-w-2xl mx-auto p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400">
          <span className="text-slate-200 font-semibold">Integrity Notice: </span>
          All listed projects represent actual frontend architecture, client prototypes, and live platforms delivered with clean React and Tailwind CSS.
        </div>

      </div>

      {/* Project Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;
