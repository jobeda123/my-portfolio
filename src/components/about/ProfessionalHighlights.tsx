import React from "react";
import GradientButton from "../ui/GradientButton";
import GreenOutlineButton from "../ui/GreenOutlineButton";

function ProfessionalHighlights() {
  return (
    <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-6 lg:p-8 border border-emerald-100">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">
            Ready to collaborate?
          </h3>
          <p className="text-gray-600">
            Let&apos;s turn your ideas into reality with cutting-edge technology
            and proven expertise.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
          {/* navigate to work section */}
          <GradientButton label="View My Work" />

          {/* navigate to contact section */}
          <GreenOutlineButton label="Get In Touch" />
        </div>
      </div>
    </div>
  );
}

export default ProfessionalHighlights;
