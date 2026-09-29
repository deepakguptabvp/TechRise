import React, { useState } from "react";
import { whyChoosePoints } from "../data/whyChooseData";
import {
  UserCheck,
  Zap,
  Smartphone,
  BadgeIndianRupee,
  Code2,
  LifeBuoy,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";

const iconMap = {
  UserCheck: UserCheck,
  Zap: Zap,
  Smartphone: Smartphone,
  BadgeIndianRupee: BadgeIndianRupee,
  Code2: Code2,
  LifeBuoy: LifeBuoy
};

const WhyChooseUs = () => {
  const [startIndex, setStartIndex] = useState(0);
  const totalCards = whyChoosePoints.length;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === totalCards - 1 ? 0 : prev + 1));
  };

  // Generate 3 visible cards starting from current index
  const visibleCards = [
    whyChoosePoints[startIndex % totalCards],
    whyChoosePoints[(startIndex + 1) % totalCards],
    whyChoosePoints[(startIndex + 2) % totalCards]
  ];

  return (
    <section id="why-us" className="py-24 relative border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Why TechRise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Businesses Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
              TechRise
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Honest communication, high-performance code, and dependable support on every project.
          </p>
        </div>

        {/* Slider Container with Relative Positioning for Absolute Arrows */}
        <div className="relative max-w-6xl mx-auto px-2 sm:px-14">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-2xl bg-white hover:bg-blue-600 border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 shadow-md shadow-slate-200/60 cursor-pointer active:scale-95"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-2xl bg-white hover:bg-blue-600 border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 shadow-md shadow-slate-200/60 cursor-pointer active:scale-95"
            aria-label="Next item"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 3 Tall Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCards.map((card, idx) => {
              const Icon = iconMap[card.iconName] || Zap;
              const cardRealIndex = (startIndex + idx) % totalCards;

              return (
                <div
                  key={`${card.title}-${idx}-${startIndex}`}
                  className="rounded-2xl bg-white border border-slate-200 hover:border-blue-400 p-7 sm:p-8 flex flex-col justify-between min-h-[350px] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
                >
                  <div className="space-y-6">
                    {/* Card Top: Icon & Feature Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xs">
                        <Icon className="w-7 h-7" />
                      </div>

                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white text-blue-700 border border-slate-200 shadow-xs">
                        0{cardRealIndex + 1} / 0{totalCards}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Card Bottom: Commitment Bar */}
                  <div className="pt-5 mt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Standard Delivery</span>
                    <span className="text-emerald-600 flex items-center gap-1.5 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Guaranteed</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {whyChoosePoints.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                  startIndex === idx
                    ? "w-8 bg-blue-600"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
