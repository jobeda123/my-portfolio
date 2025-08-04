import type { Metadata } from "next";
import { BASIC_INFO, PROFILE_IMAGE } from "./user/basicInfo";
import { CONTACT_INFO } from "./user/contactInfo";
import { ABOUT_INFO } from "./user/aboutInfo";

// Reusable metadata constants
const SITE_NAME = BASIC_INFO.name;
const SITE_TITLE = `${BASIC_INFO.name} - ${BASIC_INFO.fullTitle}`;
const SITE_DESCRIPTION = ABOUT_INFO.summary;
const SITE_URL = CONTACT_INFO.social.website;
// const TWITTER_HANDLE = CONTACT_INFO.social.twitter.split('/').pop() || "@jobeda_akhi"; // Extract handle from URL
const SITE_KEYWORDS = "Software Engineer, Full-Stack Developer, Team Lead, Node.js, React, Next.js, PHP, Laravel, Web Development, JavaScript, TypeScript";


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: `${SITE_NAME} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: PROFILE_IMAGE,
        width: 800,
        height: 600,
        alt: `${SITE_NAME} - ${BASIC_INFO.fullTitle}`,
      },
    ],
  },
//   twitter: {
//     card: "summary_large_image",
//     title: SITE_TITLE,
//     description: SITE_DESCRIPTION,
//     creator: TWITTER_HANDLE,
//     images: [PROFILE_IMAGE],
//   },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
