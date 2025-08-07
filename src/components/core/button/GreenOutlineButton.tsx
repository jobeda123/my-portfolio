import React from "react";

function GreenOutlineButton({ onClick = () => {}, label = "Get In Touch" }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 hover:cursor-pointer"
    >
      {label}
    </button>
  );
}

export default GreenOutlineButton;
