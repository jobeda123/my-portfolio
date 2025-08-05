import React from "react";
import { BASIC_INFO } from "@/constants/user/basicInfo";
import { ABOUT_INFO } from "@/constants/user/aboutInfo";
import SectionWrapper from "../wrapper/SectionWrapper";
import WelcomeHeader from "../about/WelcomeHeader";
import AboutMe from "../about/AboutMe";
import KeyMetrics from "../about/KeyMetrics";
import ProfessionalHighlights from "../about/ProfessionalHighlights";


export default function AboutSection() {
  return (
    <SectionWrapper name="about">
      <div className="space-y-8 w-full mx-auto pb-0 lg:pb-8">
        <WelcomeHeader />
        <AboutMe />
        <KeyMetrics />
        <ProfessionalHighlights />
      </div>
    </SectionWrapper>
  );
}
