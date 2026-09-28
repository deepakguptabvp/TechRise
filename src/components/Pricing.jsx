import React, { useState } from "react";
import { pricingTiers, pricingTerms } from "../data/pricingData";
import CostEstimator from "./CostEstimator";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Info,
  ShieldCheck,
  Zap,
  DollarSign
} from "lucide-react";

const Pricing = ({ onSelectPlan, onSendScope }) => {
  const [currency, setCurrency] = useState("INR"); // 'INR' or 'USD'

  const handlePlanClick = (plan) => {
    onSelectPlan(plan.servicePreset, plan.name);
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 relative bg-[#0B1220] border-t border-slate-800/80">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/60 text-xs font-semibold text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest & Transparent Investment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Clear Starting Pricing,{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Zero Hidden Surprises
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Straightforward starting packages designed for startups, cafes, travel agencies, and growing enterprises. Quoted with clear deliverables and milestones.
          </p>

          {/* Currency Toggle Switch */}
          <div className="inline-flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl shadow-inner mt-4">
            <button
              onClick={() => setCurrency("INR")}
              className={`text-xs font-bold px-4 py-2 rounded-lg transition-all cursor-pointer ${
                currency === "INR"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Indian Rupee (₹ INR)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`text-xs font-bold px-4 py-2 rounded-lg transition-all cursor-pointer ${
                currency === "USD"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Global Clients ($ USD)
            </button>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingTiers.map((tier) => {
            const displayPrice = currency === "USD" ? tier.priceDisplayUSD : tier.priceDisplayINR;
            const subPrice = currency === "USD" ? tier.priceSubUSD : tier.priceSubINR;

            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? "bg-gradient-to-b from-slate-900 via-blue-950/30 to-slate-950 border-2 border-blue-500 shadow-2xl shadow-blue-950/50 -translate-y-2"
                    : "bg-slate-900/80 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {tier.badge}
                  </div>
                )}

                <div>
                  {/* Tier Title & Tagline */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-snug">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="py-4 border-y border-slate-800/80 mb-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-extrabold text-white font-mono tracking-tight">
                        {displayPrice}
                      </span>
                    </div>
                    {subPrice && (
                      <span className="text-xs text-cyan-400 font-mono font-medium block mt-1">
                        {subPrice}
                      </span>
                    )}
                    <span className="text-[11px] text-slate-400 block mt-1">
                      {tier.billingSuffix} • {tier.turnaround}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6">
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => handlePlanClick(tier)}
                  className={`w-full inline-flex items-center justify-center gap-2 text-xs font-semibold py-3 px-4 rounded-xl transition-all cursor-pointer ${
                    tier.popular
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-600/30"
                      : "bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white border border-slate-700"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Scope & Cost Estimator */}
        <div className="mb-16">
          <CostEstimator onSendScope={onSendScope} currency={currency} />
        </div>

        {/* Transparent Pricing Terms */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-slate-300 text-xs font-bold uppercase tracking-wider">
            <Info className="w-4 h-4 text-cyan-400" />
            <span>Pricing Principles & Commercial Terms</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pricingTerms.map((term, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                <span>{term}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
