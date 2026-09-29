import React from "react";
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
  Layers
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
    <section id="services" className="py-20 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Our Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Web Development{" "}
            <span className="bg-linear-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Fast, modern, and mobile-friendly websites designed to grow your online presence.
          </p>
        </div>

        {/* 4 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || Globe;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-white border border-slate-200 hover:border-blue-400 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Short Clear Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* What's Included Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      What you get:
                    </div>
                    {service.keyDeliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar: Timeline & CTA Button */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Timeline: {service.estimatedTimeline}</span>
                  </div>

                  <button
                    onClick={() => handleDiscussService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-white bg-blue-50 hover:bg-blue-600 border border-blue-200 hover:border-blue-600 px-3.5 py-2 rounded-xl transition-all duration-200 cursor-pointer shadow-xs"
                  >
                    <span>Discuss Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
