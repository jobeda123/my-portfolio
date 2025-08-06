import { ABOUT_INFO } from "@/constants/user";
import React from "react";
import GradientSectionTitle from "../core/typography/GradientSectionTitle";

function AboutMe() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-4 lg:p-8">
     <GradientSectionTitle blackText="About" coloredText="Me" />

      <div className="space-y-4 text-gray-600 text-base lg:text-lg leading-snug">
        <p>{ABOUT_INFO.summary}</p>
        <p>{ABOUT_INFO.extendedSummary}</p>
      </div>
    </section>
  );
}

export default AboutMe;
