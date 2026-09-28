import React from "react";
import { verifiedTestimonials, clientCommitmentPoints } from "../data/testimonialsData";
import {
  MessageSquareQuote,
  ShieldCheck,
  Star,
  Quote,
  Sparkles,
  CheckCircle2,
  Clock
} from "lucide-react";

const Testimonials = () => {
  const hasReviews = verifiedTestimonials && verifiedTestimonials.length > 0;

  return (
    <section id="testimonials" className="py-24 relative bg-[#0B1220] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/60 text-xs font-semibold text-cyan-400">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Client Feedback & Commitments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Client Experience &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Integrity Standard
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We hold ourselves to strict standards of transparency, prompt communication, and verified real-world results.
          </p>
        </div>

        {/* If genuine reviews exist, render them */}
        {hasReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {verifiedTestimonials.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-bold text-cyan-400 text-sm">
                    {item.clientName.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{item.clientName}</div>
                    <div className="text-xs text-slate-400">{item.role} • {item.businessName}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Honest Client Testimonials Preview & Guarantee State */
          <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 p-8 sm:p-12 mb-16 text-center max-w-4xl mx-auto shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-6 shadow-inner">
              <ShieldCheck className="w-7 h-7" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              100% Authentic Feedback Only
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              We never fabricate fake reviews, stock customer photos, or artificial ratings. Genuine, verified client reviews from our ongoing deliveries will be posted here as authorized by our partners.
            </p>

            {/* 3 Core Commitments to Every Client */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-6 border-t border-slate-800">
              {clientCommitmentPoints.map((point, idx) => (
                <div key={idx} className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{point.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Testimonials;
