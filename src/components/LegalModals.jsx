import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";

export const PrivacyModal = ({ isOpen, onClose }) => {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[85vh] bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span>Privacy Policy</span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>Last Updated: September 2026</strong>
              </p>
              <p>
                TechRise ("we", "us", or "our"), operated by founder Deepak Gupta, respects your privacy. This Privacy Policy explains how we collect and protect information when you visit <strong>techrise.in</strong> or submit a project enquiry.
              </p>
              <h4 className="text-slate-900 font-bold">1. Information We Collect</h4>
              <p>
                When you submit a project enquiry or schedule a consultation, we collect your name, business name, email address, phone/WhatsApp number, and project brief details solely for the purpose of preparing proposals and communicating regarding your project.
              </p>
              <h4 className="text-slate-900 font-bold">2. Use of Information</h4>
              <p>
                We use your contact information only to reply to your enquiries, provide estimates, and deliver agreed web development services. We never sell, rent, or trade your personal data with third-party marketing companies.
              </p>
              <h4 className="text-slate-900 font-bold">3. Data Security & Confidentiality</h4>
              <p>
                All client source code, brand assets, credentials, and business strategy shared during our projects are treated as strictly confidential.
              </p>
              <h4 className="text-slate-900 font-bold">4. Contact</h4>
              <p>
                For any privacy inquiries, please contact Deepak Gupta directly at <strong>techrise.digitalservices@gmail.com</strong>.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 text-right">
              <button
                onClick={onClose}
                className="text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const TermsModal = ({ isOpen, onClose }) => {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[85vh] bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span>Terms of Service & Engagement</span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>Last Updated: September 2026</strong>
              </p>
              <p>
                Welcome to TechRise. By commissioning a web development project with TechRise, you agree to the following terms of engagement:
              </p>
              <h4 className="text-slate-900 font-bold">1. Scope of Work & Proposals</h4>
              <p>
                Every project begins with a clear scope proposal detailing pages, deliverables, milestone schedules, and fixed costs. Any features requested outside the approved scope will be quoted separately as add-on deliverables.
              </p>
              <h4 className="text-slate-900 font-bold">2. Payment Milestones</h4>
              <p>
                Work commences upon receipt of the agreed deposit (typically 40%). Staging milestone (40%) is due upon review of the working preview, and final balance (20%) is due upon production deployment and source code transfer.
              </p>
              <h4 className="text-slate-900 font-bold">3. Revisions & Approvals</h4>
              <p>
                Standard projects include 2 to 3 structured rounds of feedback to ensure prompt progress. We do not provide unlimited open-ended revisions.
              </p>
              <h4 className="text-slate-900 font-bold">4. Code Ownership</h4>
              <p>
                Upon receipt of final payment, full intellectual property and repository ownership of the customized frontend code is transferred to the client.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 text-right">
              <button
                onClick={onClose}
                className="text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                I Agree
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

