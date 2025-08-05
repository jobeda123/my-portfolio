import React from "react";

function MainContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="main-content p-4 lg:p-8 pb-24 pt-26 lg:pt-5 lg:pr-24 min-h-screen flex items-center justify-center lg:h-full lg:overflow-y-auto w-full max-w-full">
       {children}
    </main>
  );
}

export default MainContentWrapper;
