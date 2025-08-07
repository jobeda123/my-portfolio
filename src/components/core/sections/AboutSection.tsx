import React from "react";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import WelcomeHeader from "@/components/about/WelcomeHeader";
import AboutMe from "@/components/about/AboutMe";
import KeyMetrics from "@/components/about/KeyMetrics";
import ProfessionalHighlights from "@/components/about/ProfessionalHighlights";


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
