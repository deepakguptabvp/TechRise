import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Layers, Calendar, User, Code2, Sparkles } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/20 text-cyan-400 border border-blue-500/30">
              {project.badge}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              {project.clientType}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Title & Tagline */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-cyan-300 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">Client Type</span>
              <span className="font-semibold text-slate-200">{project.clientType}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Timeline</span>
              <span className="font-semibold text-slate-200">{project.duration}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-slate-400 block mb-0.5">Project Status</span>
              <span className="font-semibold text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                {project.demoStatus}
              </span>
            </div>
          </div>

          {/* Project Summary */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">
              Project Overview & Business Impact
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Key Deliverables & Services */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">
              Services & Deliverables Provided
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.servicesDelivered.map((serv, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-800/40 p-2.5 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{serv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Technical Features */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">
              Architectural & Interactive Features
            </h4>
            <div className="space-y-2">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-slate-800 text-cyan-300 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
          <button
            onClick={onClose}
            className="text-xs font-medium text-slate-400 hover:text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Close Window
          </button>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-blue-600/30 transition-all duration-200"
            >
              <span>Explore Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
