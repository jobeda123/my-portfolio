import type { Metadata } from "next";
import { BASIC_INFO, PROFILE_IMAGE } from "./user/basicInfo";
import { CONTACT_INFO } from "./user/contactInfo";
import { ABOUT_INFO } from "./user/aboutInfo";

// Reusable metadata constants
const SITE_NAME = BASIC_INFO.name;
const SITE_TITLE = `${BASIC_INFO.name} - ${BASIC_INFO.fullTitle}`;
const SITE_DESCRIPTION = ABOUT_INFO.summary;
const SITE_URL = CONTACT_INFO.social.website;
const SITE_KEYWORDS = [
  "Jobeda Nur Akhi",
  "Software Engineer",
  "Full-Stack Developer", 
  "Team Lead",
  "Node.js Developer",
  "React Developer",
  "Next.js Developer",
  "JavaScript Developer",
  "TypeScript Developer",
  "Web Development",
  "Frontend Developer",
  "Backend Developer",
  "Dhaka Bangladesh",
  "Portfolio",
  "Software Development",
  "Web Applications",
  "API Development",
  "Database Design",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Docker",
].join(", ");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${BASIC_INFO.name}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ 
    name: SITE_NAME,
    url: SITE_URL 
  }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Technology",
  classification: "Portfolio Website",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/favicon.svg", sizes: "180x180" }
    ]
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: `${SITE_NAME} - Portfolio`,
    locale: "en_US",
    type: "website",
    countryName: "Bangladesh",
    images: [
      {
        url: PROFILE_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - ${BASIC_INFO.fullTitle}`,
        type: "image/jpeg",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-verification-code", // Add your Google Search Console verification
  //   // yandex: "your-yandex-verification-code",
  //   // bing: "your-bing-verification-code",
  // },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
    },
  },
};
