import React from "react";

function GradientTooltip({ label = "" }: { label: string }) {
  return (
    <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 px-4 py-2 rounded-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-2xl shadow-emerald-500/50 border border-emerald-400/30 z-50">
      {label}
      <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[8px] border-l-emerald-500 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" />
    </div>
  );
}

export default GradientTooltip;
