import React from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileNavigation from "./MobileNavigation";
import MainContent from "./MainContent";

function MainContentContainer({ sections }: { sections: string[] }) {
  return (
    <div className="flex-1 bg-gradient-to-br from-gray-50 to-white text-gray-900 relative lg:h-screen lg:overflow-hidden">
      <DesktopSidebar sections={sections} />

      <MobileNavigation sections={sections} />

      <MainContent />
    </div>
  );
}

export default MainContentContainer;
