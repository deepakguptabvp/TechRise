import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "../data/faqData";
import {
  HelpCircle,
  ChevronDown,
  MessageSquare
} from "lucide-react";
import { siteConfig } from "../data/siteConfig";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Open first item by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 relative border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
              Know
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Clear, honest answers about project timelines, pricing, hosting, communication, and post-launch support.
          </p>
        </div>

        {/* 7 Core FAQ Accordion Items */}
        <div className="space-y-3">
          {faqItems.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={faq.id || idx}
                layout
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#323947] border-blue-500/50 shadow-xl shadow-blue-950/20 text-white"
                    : "bg-white border-slate-200 hover:border-slate-300 shadow-xs text-slate-900"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-4.5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 pr-2">
                    <span
                      className={`text-xs font-mono font-bold shrink-0 px-2 py-0.5 rounded-md transition-colors ${
                        isOpen
                          ? "bg-blue-500/20 text-cyan-300 border border-blue-500/30"
                          : "bg-slate-100 text-blue-600"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      className={`text-sm sm:text-base font-bold transition-colors ${
                        isOpen ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isOpen
                        ? "bg-white text-blue-600 shadow-sm"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </motion.div>
                </button>

                {/* Framer Motion AnimatePresence Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-cyan-50/80 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">
              Have a specific question about your project?
            </h4>
            <p className="text-xs text-slate-600">
              Get a direct answer from our core team within a few hours.
            </p>
          </div>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shrink-0 shadow-xs cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask a Question on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
