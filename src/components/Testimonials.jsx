import React, { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2, Heart } from "lucide-react";
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider border border-blue-200">
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> Client Stories
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Founders & Businesses
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Real feedback from founders and team leads on projects delivered by TechRise.
          </p>
        </div>

        {/* Featured Testimonial Hero Card */}
        <div className="max-w-4xl mx-auto relative">
          <div
            key={current.id || currentIndex}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-slate-200 relative transition-all duration-300"
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
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Verified Client
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

              <div className="text-left sm:text-right text-[11px] text-slate-600">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 font-mono text-[10px] text-blue-700 font-medium">
                  ⚡ {current.projectDelivered} • {current.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6 max-w-xs mx-auto">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-white hover:bg-blue-600 border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-white shadow-xs transition cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Indicator Dots */}
            <div className="flex gap-1.5">
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

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-white hover:bg-blue-600 border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-white shadow-xs transition cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
