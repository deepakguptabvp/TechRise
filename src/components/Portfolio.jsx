import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  CheckSquare
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
    <section id="portfolio" className="py-24 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-semibold text-cyan-700">
            <Code2 className="w-3.5 h-3.5 text-cyan-600" />
            <span>Curated Portfolio & Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Work Built for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
              Real-World Impact
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
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
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-xs"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with Framer Motion Layout animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const VisualIcon = getVisualIcon(project.previewType);

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.92, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-2xl bg-white border border-slate-200 hover:border-blue-400 flex flex-col justify-between overflow-hidden transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
                >
                  {/* Visual Header / Mockup Preview */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.accentGradient} p-5 border-b border-slate-200 flex flex-col justify-between overflow-hidden`}>
                    {/* Subtle Grid overlay */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

                    {/* Top Bar Badge & Icon */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-slate-800 border border-slate-200 shadow-xs">
                        {project.badge}
                      </span>

                      <div className="w-9 h-9 rounded-xl bg-white/95 border border-slate-200 flex items-center justify-center text-blue-600 shadow-xs group-hover:scale-110 transition-transform">
                        <VisualIcon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Center Visual Mockup Graphic */}
                    <div className="relative z-10 space-y-1">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-600 font-medium">
                        {project.clientType}
                      </div>
                      <div className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </div>
                    </div>

                    {/* Live Status indicator */}
                    <div className="relative z-10 flex items-center gap-1.5 text-[10px] text-slate-700 font-medium bg-white/90 px-2.5 py-0.5 rounded-md w-fit border border-slate-200 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>{project.demoStatus}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <p className="text-xs font-semibold text-blue-700 leading-snug">
                        {project.tagline}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {project.summary}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
                      >
                        View Case Study
                      </button>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 px-3 py-2 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Portfolio Guarantee Note */}
        <div className="mt-14 text-center max-w-2xl mx-auto p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 shadow-xs">
          <span className="text-slate-900 font-semibold">Integrity Notice: </span>
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
