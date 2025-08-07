import LeftSideProfileBar from "@/components/layout/LeftSideProfileBar";
import MainContainer from "@/components/layout/MainContainer";
import MobileProfile from "@/components/layout/MobileProfile";
import { getSectionIds } from "@/utils/section-helpers";

export default function Home() {
  const sections = getSectionIds();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row lg:h-screen">
      <MobileProfile />
      
      <LeftSideProfileBar />

      <MainContainer sections={sections} />
    </div>
  );
}
