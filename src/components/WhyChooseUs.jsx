import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalCards = whyChoosePoints.length;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalCards]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const goToSlide = (targetIndex) => {
    setIsAutoPlaying(false);
    setCurrentIndex(targetIndex);
  };

  return (
    <section id="why-us" className="py-24 relative border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-14"
        >
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
        </motion.div>

        {/* Carousel Viewport Container */}
        <div className="relative max-w-6xl mx-auto px-2 sm:px-8 md:px-12">
          
          {/* Fully Rounded Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:-left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 hover:bg-blue-600 border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 shadow-lg shadow-slate-200/80 cursor-pointer active:scale-95 backdrop-blur-xs"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Fully Rounded Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-2 sm:-right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 hover:bg-blue-600 border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 shadow-lg shadow-slate-200/80 cursor-pointer active:scale-95 backdrop-blur-xs"
            aria-label="Next item"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Left & Right Edge Gradient Fade Overlays */}
          <div className="hidden md:block absolute left-4 lg:left-8 top-0 bottom-0 w-20 lg:w-28 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-20" />
          <div className="hidden md:block absolute right-4 lg:right-8 top-0 bottom-0 w-20 lg:w-28 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-20" />

          {/* Carousel Stage */}
          <div className="relative w-full h-[400px] sm:h-[410px] flex items-center justify-center overflow-hidden py-4">
            {whyChoosePoints.map((card, idx) => {
              // Calculate circular offset relative to currentIndex (-1: Left, 0: Center, 1: Right)
              let offset = idx - currentIndex;
              if (offset > totalCards / 2) offset -= totalCards;
              if (offset <= -totalCards / 2) offset += totalCards;

              const Icon = iconMap[card.iconName] || Zap;
              const isCenter = offset === 0;
              const isNeighbor = Math.abs(offset) === 1;

              return (
                <motion.div
                  key={card.title}
                  className={`absolute w-[86%] sm:w-[340px] md:w-[350px] lg:w-[370px] min-h-[350px] sm:min-h-[365px] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-colors duration-300 select-none ${
                    isCenter
                      ? "bg-white border-2 border-blue-500 shadow-xl shadow-blue-500/10 ring-4 ring-blue-500/10 cursor-default"
                      : isNeighbor
                      ? "bg-white/85 border border-slate-200/90 shadow-xs hover:border-blue-300 cursor-pointer"
                      : "bg-white/60 border border-slate-200 pointer-events-none"
                  }`}
                  animate={{
                    x: `calc(${offset * 106}% + ${offset * 16}px)`,
                    scale: isCenter ? 1 : isNeighbor ? 0.92 : 0.8,
                    opacity: isCenter ? 1 : isNeighbor ? 0.42 : 0,
                    zIndex: isCenter ? 20 : isNeighbor ? 10 : 0,
                  }}
                  whileHover={isNeighbor ? { opacity: 0.75, scale: 0.95 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26,
                    mass: 0.85
                  }}
                  onClick={() => {
                    if (offset === -1) handlePrev();
                    if (offset === 1) handleNext();
                  }}
                >
                  <div className="space-y-5">
                    {/* Card Top: Icon & Feature Badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 sm:w-14 h-12 sm:h-14 rounded-2xl flex items-center justify-center shadow-xs transition-colors ${
                          isCenter
                            ? "bg-blue-50 text-blue-600 border border-blue-100"
                            : "bg-slate-100 text-slate-500 border border-slate-200/80"
                        }`}
                      >
                        <Icon className="w-6 sm:w-7 h-6 sm:h-7" />
                      </div>

                      <span
                        className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full border shadow-xs transition-colors ${
                          isCenter
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : "bg-slate-100 text-slate-500 border-slate-200"
                        }`}
                      >
                        0{idx + 1} / 0{totalCards}
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
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Standard Delivery</span>
                    <span className="text-emerald-600 flex items-center gap-1.5 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Guaranteed</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {whyChoosePoints.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
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
