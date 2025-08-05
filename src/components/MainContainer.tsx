import React from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileNavigation from "./MobileNavigation";
import MainContent from "./MainContent";


function MainContainer({ sections }: { sections: string[] }) {
  return (
    <div className="main-container flex-1 bg-gradient-to-br from-slate-50 to-gray-100 text-gray-900 relative lg:h-screen lg:overflow-hidden">
      <DesktopSidebar sections={sections} />

      <MobileNavigation sections={sections} />

      <MainContent />
    </div>
  );
}

export default MainContainer;
