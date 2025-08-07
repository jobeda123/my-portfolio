import React from "react";
import MainContentWrapper from "../../wrapper/MainContentWrapper";

function NotFoundSection({ currentSection }: { currentSection: string }) {
  return (
    <MainContentWrapper>
      <div className="w-full max-w-4xl">
        <div className="text-center">
          <h1 className="text-2xl text-gray-600">
            Section not found: {currentSection}
          </h1>
        </div>
      </div>
    </MainContentWrapper>
  );
}

export default NotFoundSection;
