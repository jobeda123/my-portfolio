import React from "react";
import { BASIC_INFO } from "@/constants/user/basicInfo";
import { ABOUT_INFO } from "@/constants/user/aboutInfo";
import SectionWrapper from "../wrapper/SectionWrapper";

export default function AboutSection() {
  // Get core skills for display
  const coreSkills = [
    "React & Next.js",
    "Node.js",
    "PHP/Laravel",
    "TypeScript",
    "MySQL/PostgreSQL",
    "Docker",
  ];
  return (
    <SectionWrapper name="about">
      <div className="space-y-8 max-w-5xl mx-auto">
        {/* Welcome Header */}
        <div className="text-center lg:text-left space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Hello, I&apos;m {BASIC_INFO.name.split(" ")[0]}! 👋
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl">
            {BASIC_INFO.fullTitle}
          </p>
          <p className="text-lg text-gray-500 max-w-2xl">
            Passionate about building scalable solutions and leading
            high-performing teams to deliver exceptional digital experiences.
          </p>
        </div>

        {/* About Me Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            About <span className="text-purple-600">Me</span>
          </h2>

          <div className="space-y-4 text-gray-600 leading-relaxed text-base lg:text-lg">
            <p>{ABOUT_INFO.summary}</p>
            <p>{ABOUT_INFO.extendedSummary}</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl lg:text-4xl font-bold text-purple-600">
              {ABOUT_INFO.experience.years}
            </div>
            <div className="text-sm lg:text-base text-gray-600 mt-2">
              Years Experience
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600">
              {ABOUT_INFO.experience.projectsDelivered}
            </div>
            <div className="text-sm lg:text-base text-gray-600 mt-2">
              Projects Delivered
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl lg:text-4xl font-bold text-green-600">
              {ABOUT_INFO.experience.teamMembers}
            </div>
            <div className="text-sm lg:text-base text-gray-600 mt-2">
              Team Members Led
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl lg:text-4xl font-bold text-orange-600">
              {ABOUT_INFO.experience.technologies}
            </div>
            <div className="text-sm lg:text-base text-gray-600 mt-2">
              Technologies
            </div>
          </div>
        </div>

        {/* Core Technologies */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">
            Core Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {coreSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm lg:text-base font-medium hover:from-purple-200 hover:to-blue-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* What I Do */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">
            What I Do
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Full-Stack Development
              </h4>
              <p className="text-gray-600 text-sm">
                Building end-to-end web applications with modern technologies
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Team Leadership
              </h4>
              <p className="text-gray-600 text-sm">
                Leading and mentoring development teams to achieve excellence
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Solution Architecture
              </h4>
              <p className="text-gray-600 text-sm">
                Designing scalable and maintainable software architectures
              </p>
            </div>
          </div>
        </div>

        {/* Professional Journey */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">
            My Journey
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              My passion for technology started early, and over the past{" "}
              {ABOUT_INFO.experience.years} years, I&apos;ve evolved from a
              curious developer into a seasoned team leader. I&apos;ve had the
              privilege of working across diverse industries, from startups to
              enterprise-level organizations.
            </p>
            <p>
              What drives me is the intersection of technology and human impact.
              Every line of code I write, every team I lead, and every project I
              architect is guided by the goal of creating meaningful digital
              experiences that solve real-world problems.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me mentoring fellow
              developers, contributing to open-source projects, or exploring the
              latest technological innovations that could shape the future of
              software development.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Let&apos;s Build Something Amazing Together
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            I&apos;m always excited to discuss new opportunities, collaborate on
            interesting projects, or simply chat about technology and
            innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
