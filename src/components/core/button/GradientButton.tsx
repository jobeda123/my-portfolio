import { cn } from "@/lib/utils";
import React from "react";

function GradientButton({
  label = "Click Me",
  loadingLabel = "",
  className = "",
  onClick,
  disabled = false,
  isLoading = false,
}: {
  label?: string;
  loadingLabel?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}) {
  return (
    <button
      onClick={!disabled && onClick ? onClick : undefined}
      className={cn(
        "px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transform hover:cursor-pointer",
        className,
        {
          "bg-gray-300 text-gray-500 hover:cursor-not-allowed": disabled,
        }
      )}
      disabled={disabled}
    >
      <span className="flex items-center gap-2">
        {isLoading ? (
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : null}
        {isLoading ? loadingLabel : label}
      </span>
    </button>
  );
}

export default GradientButton;
