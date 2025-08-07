import React from "react";
import DesktopSidebar from "@/components/layout/DesktopSidebar";
import MobileNavigation from "@/components/layout/MobileNavigation";
import MainContent from "@/components/layout/MainContent";


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
