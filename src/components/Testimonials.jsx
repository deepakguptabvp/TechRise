import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { verifiedTestimonials } from "../data/testimonialsData";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % verifiedTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % verifiedTestimonials.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + verifiedTestimonials.length) % verifiedTestimonials.length
    );
  };

  const current = verifiedTestimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-20 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-2.5 mb-10"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider border border-blue-200">
            <Heart className="w-3 text-rose-500 fill-rose-500" /> Client Stories
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Founders & Businesses
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Real feedback from founders and team leads on projects delivered by TechRise.
          </p>
        </motion.div>

        {/* Featured Testimonial Hero Card & Side Navigation */}
        <div className="max-w-4xl mx-auto relative px-2 sm:px-0">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-3 sm:-left-5 lg:-left-7 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-white/95 hover:bg-blue-600 border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-90 flex items-center justify-center backdrop-blur-xs"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-3 sm:-right-5 lg:-right-7 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-white/95 hover:bg-blue-600 border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-90 flex items-center justify-center backdrop-blur-xs"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Testimonial Card */}
          <div className="relative min-h-[290px] sm:min-h-[250px] overflow-hidden py-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id || currentIndex}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-slate-200 relative transition-all duration-300"
              >
                {/* Top Quote Icon & Stars */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2.5 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                    <span className="ml-2 text-xs font-semibold text-slate-700">
                      5.0 Verified Review
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-blue-700 border border-slate-200">
                      {current.category}
                    </span>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm md:text-base text-slate-700 font-normal leading-relaxed italic relative pt-1">
                  <Quote className="w-7 h-7 text-blue-500/10 absolute -top-3 -left-2 pointer-events-none" />
                  “{current.quote}”
                </p>

                {/* Author Info */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-linear-to-tr ${current.avatarBg || "from-blue-600 to-cyan-500"} flex items-center justify-center font-bold text-white text-xs shadow-xs shrink-0`}
                    >
                      {current.initials || current.clientName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        {current.clientName}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {current.role} • <span className="text-blue-700 font-medium">{current.businessName}</span> ({current.location})
                      </p>
                    </div>
                  </div>

                  {(current.projectDelivered || current.duration) && (
                    <div className="text-left sm:text-right text-[11px] text-slate-600">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 font-mono text-[10px] text-blue-700 font-medium">
                        ⚡ {[current.projectDelivered, current.duration].filter(Boolean).join(" • ")}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center items-center gap-1.5 mt-6">
            {verifiedTestimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? "w-6 bg-blue-600"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
