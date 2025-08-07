import React from "react";

function GrayOutlineButton({buttonText = "Download CV", onClick=() => {}}) {
  return (
    <button onClick={onClick} className="w-full mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg transition-all duration-300 hover:border-white/40 flex items-center justify-center space-x-2 cursor-pointer">
      <span>{buttonText}</span>
    </button>
  );
}

export default GrayOutlineButton;
