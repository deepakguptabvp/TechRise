import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";
import {
  Globe,
  Zap,
  Palette,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  Check
} from "lucide-react";

const iconMap = {
  Globe: Globe,
  Zap: Zap,
  Palette: Palette,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck
};

const Services = ({ onSelectService }) => {
  const handleDiscussService = (serviceTitle) => {
    onSelectService(serviceTitle);
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 sm:py-28 relative border-t border-slate-200/80 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/40 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_30%,transparent_90%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-3.5 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-xs font-semibold text-blue-700 shadow-xs backdrop-blur-sm">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Specialized Offerings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-tight">
            Web Development & Design{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            High-performance, modern web solutions engineered for speed, clean code, and business conversions.
          </p>
        </motion.div>

        {/* 4 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Globe;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 hover:border-blue-400/80 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/8 hover:-translate-y-1.5 overflow-hidden"
              >

                {/* Subtle top card gradient border accent on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="space-y-5">
                  {/* Top Header Row: Icon, Index & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl ${service.iconBg} border flex items-center justify-center group-hover:scale-105 transition-all duration-300 shrink-0 shadow-xs`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block font-mono">
                          Service 0{index + 1}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {service.subtitle}
                        </span>
                      </div>
                    </div>

                    {service.badge && (
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 shadow-xs">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Deliverables Section */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 bg-slate-50/60 p-4 rounded-2xl border">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600" />
                      <span>Key Deliverables</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {service.keyDeliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Bar: Timeline & Distinct CTA Button */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 text-xs text-slate-600 font-medium px-3 py-1.5 rounded-xl bg-slate-100/80 border border-slate-200">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Timeline: <strong className="text-slate-800">{service.estimatedTimeline}</strong></span>
                  </div>

                  <button
                    onClick={() => handleDiscussService(service.title)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 px-4 py-2.5 rounded-xl shadow-md shadow-slate-900/10 hover:shadow-blue-600/25 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <span>{service.ctaText || "Select Service"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
