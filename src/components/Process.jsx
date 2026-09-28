import React from "react";
import { processSteps } from "../data/processData";
import {
  Compass,
  FileCheck,
  Code,
  CheckCircle2,
  Rocket,
  Sparkles,
  ArrowRight
} from "lucide-react";

const stepIcons = [Compass, FileCheck, Code, CheckCircle2, Rocket];

const Process = () => {
  return (
    <section id="process" className="py-20 relative bg-[#0B1220] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/60 text-xs font-semibold text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How We{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Work
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A simple 5-step process from initial idea to your live website.
          </p>
        </div>

        {/* 5-Step Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {processSteps.map((step, index) => {
            const Icon = stepIcons[index] || Compass;

            return (
              <div
                key={step.stepNumber}
                className="relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 p-6 flex flex-col justify-between space-y-5 transition-all duration-300 hover:bg-slate-900 hover:shadow-xl hover:shadow-blue-950/30 hover:-translate-y-1 group"
              >
                {/* Step Top: Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-blue-950/60 border border-blue-800/60 px-2.5 py-1 rounded-lg">
                    Step {step.stepNumber}
                  </span>

                  <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-blue-600/25 transition-all duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Step Title & Short Description */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono flex items-center justify-between">
                  <span>Phase {index + 1}</span>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors hidden lg:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;
