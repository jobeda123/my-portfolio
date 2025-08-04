import LeftSideProfileBar from "@/components/LeftSideProfileBar";
import MainContentContainer from "@/components/MainContentContainer";
import MobileProfile from "@/components/MobileProfile";
import { getSectionIds } from "@/utils/section-helpers";

export default function Home() {
  const sections = getSectionIds();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row lg:h-screen">
      <MobileProfile />
      
      <LeftSideProfileBar />

      <MainContentContainer sections={sections} />
    </div>
  );
}
