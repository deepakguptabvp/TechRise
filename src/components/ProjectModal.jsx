import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 15 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-y-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  {project.badge}
                </span>
                <span className="text-xs text-slate-500 hidden sm:inline">
                  {project.clientType}
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Title & Tagline */}
              <div className="space-y-1.5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-blue-700 font-medium">
                  {project.tagline}
                </p>
              </div>

              {/* Quick Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 block mb-0.5">Client Type</span>
                  <span className="font-semibold text-slate-800">{project.clientType}</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-0.5">Timeline</span>
                  <span className="font-semibold text-slate-800">{project.duration}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-slate-500 block mb-0.5">Project Status</span>
                  <span className="font-semibold text-emerald-700 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {project.demoStatus}
                  </span>
                </div>
              </div>

              {/* Project Summary */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Project Overview & Business Impact
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Key Deliverables & Services */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Services & Deliverables Provided
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.servicesDelivered.map((serv, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{serv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Technical Features */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Architectural & Interactive Features
                </h4>
                <div className="space-y-2">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer CTAs */}
            <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-t border-slate-200">
              <button
                onClick={onClose}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close Window
              </button>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-blue-600/20 transition-all duration-200"
                >
                  <span>Explore Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
