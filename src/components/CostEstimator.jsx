import React, { useState } from "react";
import { Calculator, Sparkles, ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";

const projectTypes = [
  { id: "landing", label: "High-Converting Landing Page", baseINR: 8000, baseUSD: 120, defaultPages: 1 },
  { id: "business", label: "Multi-Page Business Website", baseINR: 15000, baseUSD: 220, defaultPages: 4 },
  { id: "webapp", label: "Custom Web App / Portal", baseINR: 30000, baseUSD: 400, defaultPages: 6 }
];

const availableFeatures = [
  { id: "seo", label: "Advanced Local SEO & Schema JSON-LD", priceINR: 2500, priceUSD: 35 },
  { id: "whatsapp", label: "WhatsApp Chat & Instant Lead Alerts", priceINR: 1500, priceUSD: 20 },
  { id: "payment", label: "Payment Gateway (Razorpay/Stripe)", priceINR: 4000, priceUSD: 55 },
  { id: "cms", label: "Custom Content Management Structure", priceINR: 5000, priceUSD: 70 },
  { id: "speed", label: "99+ Core Web Vitals Turbo Tuning", priceINR: 2000, priceUSD: 30 }
];

const CostEstimator = ({ onSendScope, currency = "INR" }) => {
  const [selectedType, setSelectedType] = useState(projectTypes[1]); // Business website default
  const [pageCount, setPageCount] = useState(4);
  const [selectedFeatures, setSelectedFeatures] = useState(["seo", "whatsapp", "speed"]);

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Calculation
  const extraPages = Math.max(0, pageCount - selectedType.defaultPages);
  const extraPageCostINR = extraPages * 1500;
  const extraPageCostUSD = extraPages * 20;

  const featuresCostINR = selectedFeatures.reduce((acc, featId) => {
    const feat = availableFeatures.find((f) => f.id === featId);
    return acc + (feat ? feat.priceINR : 0);
  }, 0);

  const featuresCostUSD = selectedFeatures.reduce((acc, featId) => {
    const feat = availableFeatures.find((f) => f.id === featId);
    return acc + (feat ? feat.priceUSD : 0);
  }, 0);

  const totalINR = selectedType.baseINR + extraPageCostINR + featuresCostINR;
  const totalUSD = selectedType.baseUSD + extraPageCostUSD + featuresCostUSD;

  const displayTotal = currency === "USD" ? `$${totalUSD.toLocaleString()}` : `₹${totalINR.toLocaleString()}`;

  const handleApplyEstimate = () => {
    const scopeSummary = `Project Type: ${selectedType.label}\nPages: ${pageCount}\nSelected Add-ons: ${selectedFeatures.map(id => availableFeatures.find(f => f.id === id)?.label).join(", ")}\nEstimated Range: ${displayTotal}`;
    onSendScope(selectedType.label, scopeSummary);
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-blue-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400"></div>

      <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <Calculator className="w-4 h-4" />
          <span>Interactive Project Cost & Scope Estimator</span>
        </div>
        <span className="text-[11px] text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700">
          Instant Ballpark Estimation
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Step 1: Select Type */}
          <div className="space-y-2.5">
            <label className="text-xs font-semibold text-slate-300 block">
              1. Select Project Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => {
                    setSelectedType(type);
                    setPageCount(type.defaultPages);
                  }}
                  className={`p-3 rounded-xl text-left border transition-all text-xs cursor-pointer ${
                    selectedType.id === type.id
                      ? "bg-blue-600/20 border-blue-500 text-white shadow-sm"
                      : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <div className="font-bold mb-1">{type.label}</div>
                  <div className="text-[11px] text-cyan-400 font-mono">
                    Base: {currency === "USD" ? `$${type.baseUSD}` : `₹${type.baseINR.toLocaleString()}`}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Page Count Slider */}
          <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-300">2. Total Estimated Pages</span>
              <span className="font-bold text-cyan-300 font-mono text-sm bg-blue-950/60 px-2.5 py-0.5 rounded border border-blue-800/60">
                {pageCount} {pageCount === 1 ? "Page" : "Pages"}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              value={pageCount}
              onChange={(e) => setPageCount(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>1 Page (Landing)</span>
              <span>5 Pages (Standard)</span>
              <span>15 Pages (Extensive)</span>
            </div>
          </div>

          {/* Step 3: Add-on Capabilities */}
          <div className="space-y-2.5">
            <label className="text-xs font-semibold text-slate-300 block">
              3. Desired Features & Enhancements
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {availableFeatures.map((feat) => {
                const isSelected = selectedFeatures.includes(feat.id);
                const featPrice = currency === "USD" ? `+$${feat.priceUSD}` : `+₹${feat.priceINR.toLocaleString()}`;

                return (
                  <button
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-cyan-950/40 border-cyan-500/50 text-white"
                        : "bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span className="text-[11px] font-medium truncate mr-2">{feat.label}</span>
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold shrink-0">
                      {featPrice}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Calculated Result Box */}
        <div className="lg:col-span-5 bg-gradient-to-b from-blue-950/40 to-slate-950 p-6 rounded-2xl border border-blue-900/40 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Estimated Investment Range
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight text-gradient-accent">
                {displayTotal}*
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Estimated Turnaround: ~{selectedType.id === "landing" ? "4 to 7 Days" : "2 to 3 Weeks"}
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-800 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Base Architecture:</span>
                <span className="font-medium text-slate-200">{selectedType.label}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Page Volume:</span>
                <span className="font-medium text-slate-200">{pageCount} Pages</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Add-on Features:</span>
                <span className="font-medium text-cyan-300">{selectedFeatures.length} Selected</span>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 leading-relaxed italic">
              *Ballpark scope estimate. Final quote is confirmed after discussing your specific content and third-party API requirements.
            </p>
          </div>

          <button
            onClick={handleApplyEstimate}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-xs py-3 px-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
          >
            <span>Lock In This Scope & Request Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default CostEstimator;
