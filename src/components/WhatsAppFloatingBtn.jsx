import React, { useState } from "react";
import { X } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { WhatsAppIcon } from "./BrandIcons";

const WhatsAppFloatingBtn = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900/95 backdrop-blur-md border border-slate-700 text-slate-200 text-xs px-3 py-2 rounded-xl shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Chat directly</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        aria-label="Contact TechRise on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default WhatsAppFloatingBtn;
