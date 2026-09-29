import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, MessageSquare, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

const QuickConsultModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    projectType: "Business Website",
    brief: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappConsultUrl = `https://wa.me/919643080715?text=Hi%20Deepak!%20I'd%20like%20to%20request%20a%20free%20consultation%20for%20a%20${encodeURIComponent(formData.projectType)}.%20My%20name%20is%20${encodeURIComponent(formData.name || "a prospective client")}.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Consultation Request Received!
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
              Deepak will connect with you on {formData.contact || "your contact details"} within 12 hours.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 bg-slate-100 px-4 py-2 rounded-xl"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                Direct with Deepak Gupta
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Get a Free Consultation
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                No sales pressure. 15-minute honest technical and architecture advice for your web project.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email or WhatsApp Number
                </label>
                <input
                  type="text"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="your@email.com or +91 98765 43210"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-3 py-2 text-xs text-slate-800"
                >
                  <option value="Business Website">Business Website</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Website Redesign">Website Redesign</option>
                  <option value="Custom Web App">Custom Web App</option>
                  <option value="Maintenance & Retainer">Maintenance & Support</option>
                </select>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold text-xs py-2.5 px-4 rounded-xl shadow-md shadow-blue-600/20 transition-all cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <a
                  href={whatsappConsultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 py-2.5 px-3.5 rounded-xl transition-colors font-medium shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Instead</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickConsultModal;
