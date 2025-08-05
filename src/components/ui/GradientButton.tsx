import React from "react";

function GradientButton({
  label = "Click Me",
  onClick,
}: {
  label?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:cursor-pointer"
    >
      {label}
    </button>
  );
}

export default GradientButton;
