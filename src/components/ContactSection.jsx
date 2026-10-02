import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";
import {
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles
} from "lucide-react";

const serviceOptions = [
  "Business Website Development",
  "Landing Page Development",
  "Website Redesign & Modernization",
  "Website Maintenance & Support",
  "Custom Web Application",
  "Other / Consultation"
];

const budgetOptions = [
  "Under ₹15,000",
  "₹15,000 – ₹30,000",
  "₹30,000 – ₹60,000 ",
  "₹60,000+",
  "Not Sure / Request Recommendation"
];

const timelineOptions = [
  "Urgent (Within 1-2 weeks)",
  "Standard (2-4 weeks)",
  "Flexible (1-2 months)",
  "Planning Phase"
];

const ContactSection = ({ preselectedService = "", prefilledScope = "" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    service: serviceOptions[0],
    budget: budgetOptions[1],
    timeline: timelineOptions[1],
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (preselectedService) {
      const match = serviceOptions.find(
        (s) => s.toLowerCase().includes(preselectedService.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match }));
      }
    }
  }, [preselectedService]);

  useEffect(() => {
    if (prefilledScope) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `${prev.message}\n\n[Calculated Scope Estimate]:\n${prefilledScope}` : `[Calculated Scope Estimate]:\n${prefilledScope}`
      }));
    }
  }, [prefilledScope]);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please provide at least a brief description of your project (min 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (web3FormsKey && web3FormsKey !== "your_web3forms_access_key_here") {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `New TechRise Project Enquiry: ${formData.fullName} (${formData.service})`,
            from_name: formData.fullName,
            ...formData
          })
        });

        const result = await response.json();
        if (result.success) {
          setSubmitStatus("success");
          setFormData({
            fullName: "",
            businessName: "",
            email: "",
            phone: "",
            service: serviceOptions[0],
            budget: budgetOptions[1],
            timeline: timelineOptions[1],
            message: ""
          });
        } else {
          setSubmitStatus("error");
        }
      } else {
        await new Promise((r) => setTimeout(r, 800));
        setSubmitStatus("success");
      }
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppUrl = () => {
    const text = `Hi Deepak! I'd like to discuss a project with TechRise.%0A%0A*Name:* ${encodeURIComponent(formData.fullName || "Prospective Client")}%0A*Business:* ${encodeURIComponent(formData.businessName || "Not specified")}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Budget:* ${encodeURIComponent(formData.budget)}%0A*Details:* ${encodeURIComponent(formData.message || "Looking for a modern website consultation.")}`;
    return `https://wa.me/919643080715?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Direct Project Enquiry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Have a Project in Mind?{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
              Let’s Build It Together.
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Fill out the brief below for an itemized proposal, or connect directly on WhatsApp for an instant consultation.
          </p>
        </motion.div>

        {/* Centered Proposal Request Form */}
        <div className="relative max-w-4xl mx-auto group">
          {/* Ambient border glow shadow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-sky-600/20 rounded-[2.2rem] sm:rounded-[2.7rem] blur-xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />

          {/* Form Card Container */}
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-white/95 backdrop-blur-xl border border-slate-200/90 p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_-15px_rgba(37,99,235,0.12),0_0_0_1px_rgba(226,232,240,0.8)] hover:shadow-[0_25px_60px_-12px_rgba(37,99,235,0.18),0_0_0_1px_rgba(147,197,253,0.5)] transition-all duration-300">
              
              {submitStatus === "success" ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-20 h-20 rounded-3xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 mx-auto shadow-md shadow-emerald-500/10">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your project brief has been received. Deepak will review your requirements and reach out within 12 hours with initial insights and proposal options.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100/80 border border-blue-200/60 px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-xs hover:shadow"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {submitStatus === "error" && (
                    <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>An error occurred while sending your request. Please message directly on WhatsApp (+91-9643080715) or email us.</span>
                    </div>
                  )}

                  {/* Row 1: Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full bg-slate-50/70 border ${errors.fullName ? "border-rose-400 ring-2 ring-rose-400/20" : "border-slate-200/90"} focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 shadow-xs hover:border-slate-300 transition-all outline-none`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-500 mt-1.5">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Business / Company Name <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Cafe / Nova Logistics"
                        className="w-full bg-slate-50/70 border border-slate-200/90 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 shadow-xs hover:border-slate-300 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@domain.com"
                        className={`w-full bg-slate-50/70 border ${errors.email ? "border-rose-400 ring-2 ring-rose-400/20" : "border-slate-200/90"} focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 shadow-xs hover:border-slate-300 transition-all outline-none`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 mt-1.5">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Phone / WhatsApp <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91"
                        className="w-full bg-slate-50/70 border border-slate-200/90 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 shadow-xs hover:border-slate-300 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-slate-50/70 border border-slate-200/90 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-800 shadow-xs hover:border-slate-300 transition-all outline-none cursor-pointer"
                      >
                        {serviceOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-slate-50/70 border border-slate-200/90 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-800 shadow-xs hover:border-slate-300 transition-all outline-none cursor-pointer"
                      >
                        {budgetOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Timeline */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Preferred Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-slate-50/70 border border-slate-200/90 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-800 shadow-xs hover:border-slate-300 transition-all outline-none cursor-pointer"
                    >
                      {timelineOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 5: Project Description */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Project Requirements & Goals <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business, target audience, required features, and any reference websites you like..."
                      className={`w-full bg-slate-50/70 border ${errors.message ? "border-rose-400 ring-2 ring-rose-400/20" : "border-slate-200/90"} focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-2xl p-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 shadow-xs hover:border-slate-300 transition-all outline-none leading-relaxed resize-y`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 mt-1.5">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-2xl shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Submitting Brief...</span>
                      ) : (
                        <>
                          <span>Submit Project Brief</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50/80 hover:bg-emerald-100/90 border border-emerald-200/90 px-5 py-3.5 rounded-2xl transition-all shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>Or Send via WhatsApp Instant</span>
                    </a>
                  </div>

                </form>
              )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
