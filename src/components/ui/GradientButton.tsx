import { cn } from "@/lib/utils";
import React from "react";

function GradientButton({
  label = "Click Me",
  className = "",
  onClick,
}: {
  label?: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn("px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:cursor-pointer", className)}
    >
      {label}
    </button>
  );
}

export default GradientButton;
