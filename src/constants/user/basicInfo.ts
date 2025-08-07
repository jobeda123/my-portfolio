import { CONTACT_INFO } from "./contactInfo";

// Basic User Information
export const BASIC_INFO = {
  name: "Jobeda Nur Akhi",
  title: "Software Engineer",
  fullTitle: "Full-Stack Developer & Software Engineer",
  location: "Dhaka, Bangladesh",
  avatarName: "JA",
  email: "jobedanur265@gmail.com",
  phone: "+880 1638103706", // Update with real phone
} as const;

// Professional tagline
export const TAGLINE = `${BASIC_INFO.name} - Turning ideas into scalable digital solutions`;

// Alt text for profile image
export const PROFILE_ALT_TEXT = `${BASIC_INFO.name} - ${BASIC_INFO.title}`;
export const PROFILE_IMAGE = "/images/jobeda-nur-akhi-profile-image.jpeg";

export const USER_SOCIAL_PLATFORMS = [
  {
    name: "LinkedIn",
    url: CONTACT_INFO.social.linkedin,
    icon: "linkedin",
    ariaLabel: "Visit LinkedIn profile",
  },
  {
    name: "GitHub",
    url: CONTACT_INFO.social.github,
    icon: "github",
    ariaLabel: "Visit GitHub profile",
  },
  {
    name: "Website",
    url: CONTACT_INFO.social.website,
    icon: "website",
    ariaLabel: "Visit personal website",
  },
  {
    name: "Email",
    url: CONTACT_INFO.social.email,
    icon: "email",
    ariaLabel: "Send an email",
    value: BASIC_INFO.email,
  },
  {
    name: "Phone",
    url: CONTACT_INFO.social.mobile,
    icon: "mobile",
    ariaLabel: "Call phone number",
    value: BASIC_INFO.phone,
  },
];

// Export individual pieces for easy access
export const {
  name: USER_NAME,
  title: USER_TITLE,
  fullTitle: USER_FULL_TITLE,
  location: USER_LOCATION,
} = BASIC_INFO;
