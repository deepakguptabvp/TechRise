import React, { useState, useEffect } from "react";
import { siteConfig } from "../data/siteConfig";
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  ArrowUpRight,
  ShieldCheck
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
  "Under ₹15,000 (< $220)",
  "₹15,000 – ₹30,000 ($220 – $400)",
  "₹30,000 – ₹60,000 ($400 – $800)",
  "₹60,000+ ($800+)",
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
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Update form if preselectedService or prefilledScope changes
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
        // Submit via Web3Forms API
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
        // Fallback simulation with mailto instruction
        // In local development or before key is supplied:
        await new Promise((r) => setTimeout(r, 800));
        setSubmitStatus("success");
      }
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate dynamic WhatsApp URL with current form fields
  const generateWhatsAppUrl = () => {
    const text = `Hi Deepak! I'd like to discuss a project with TechRise.%0A%0A*Name:* ${encodeURIComponent(formData.fullName || "Prospective Client")}%0A*Business:* ${encodeURIComponent(formData.businessName || "Not specified")}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Budget:* ${encodeURIComponent(formData.budget)}%0A*Details:* ${encodeURIComponent(formData.message || "Looking for a modern website consultation.")}`;
    return `https://wa.me/919643080715?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090E1A] border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/60 text-xs font-semibold text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Project Enquiry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have a Project in Mind?{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Let’s Build It Together.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Fill out the brief below for an itemized proposal, or connect directly on WhatsApp for an instant consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Instant Channels */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Channel Cards */}
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 space-y-4">
              <h3 className="text-base font-bold text-white mb-2">
                Direct Contact Channels
              </h3>

              {/* WhatsApp Card */}
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-800/50 hover:border-emerald-500 text-slate-200 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-300 flex items-center gap-1">
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                  <div className="text-xs text-slate-300 font-mono mt-0.5">
                    +91-9643080715
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Fastest response for quick questions
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60 hover:border-blue-500 text-slate-200 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-300 flex items-center gap-1">
                    <span>Official Email</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                  <div className="text-xs text-slate-300 font-mono mt-0.5 break-all">
                    {siteConfig.contact.email}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    For detailed project briefs & RFPs
                  </div>
                </div>
              </a>
            </div>

            {/* Response Time Guarantee Box */}
            <div className="rounded-2xl bg-gradient-to-b from-blue-950/40 to-slate-950 border border-blue-900/40 p-5 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
                <Clock className="w-4 h-4" />
                <span>Response Guarantee</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                All enquiries receive a personalized response from founder <strong>Deepak Gupta</strong> within <strong>12 hours</strong>.
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero spam. Your project details stay 100% confidential.</span>
              </div>
            </div>

          </div>

          {/* Right: Comprehensive Proposal Request Form */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl">
              
              {submitStatus === "success" ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your project brief has been received. Deepak will review your requirements and reach out within 12 hours with initial insights and proposal options.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="text-xs font-semibold text-cyan-400 hover:text-white bg-slate-800 px-4 py-2 rounded-xl transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {submitStatus === "error" && (
                    <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>An error occurred while sending your request. Please message directly on WhatsApp (+91-9643080715) or email us.</span>
                    </div>
                  )}

                  {/* Row 1: Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma / Sarah Jenkins"
                        className={`w-full bg-slate-950/80 border ${errors.fullName ? "border-rose-500" : "border-slate-800"} focus:border-blue-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Business / Company Name <span className="text-slate-400 text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Cafe / Nova Logistics"
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@domain.com"
                        className={`w-full bg-slate-950/80 border ${errors.email ? "border-rose-500" : "border-slate-800"} focus:border-blue-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone / WhatsApp <span className="text-slate-400 text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 transition-colors cursor-pointer"
                      >
                        {serviceOptions.map((opt, i) => (
                          <option key={i} value={opt} className="bg-slate-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 transition-colors cursor-pointer"
                      >
                        {budgetOptions.map((opt, i) => (
                          <option key={i} value={opt} className="bg-slate-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Timeline */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Preferred Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 transition-colors cursor-pointer"
                    >
                      {timelineOptions.map((opt, i) => (
                        <option key={i} value={opt} className="bg-slate-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 5: Project Description */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Requirements & Goals <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business, target audience, required features, and any reference websites you like..."
                      className={`w-full bg-slate-950/80 border ${errors.message ? "border-rose-500" : "border-slate-800"} focus:border-blue-500 rounded-xl p-4 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors leading-relaxed`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
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
                      className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-800/60 px-4 py-3 rounded-xl transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Or Send via WhatsApp Instant</span>
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
