// Basic User Information
export const BASIC_INFO = {
  name: "Jobeda Nur Akhi",
  title: "Software Engineer",
  fullTitle: "Full-Stack Developer & Software Engineer",
  location: "Dhaka, Bangladesh",
  avatarName: "JA", 
} as const;

// Professional tagline
export const TAGLINE = `${BASIC_INFO.name} - Turning ideas into scalable digital solutions`;

// Alt text for profile image
export const PROFILE_ALT_TEXT = `${BASIC_INFO.name} - ${BASIC_INFO.title}`;
export const PROFILE_IMAGE = "/images/jobeda-nur-akhi-profile-image.jpeg";

// Export individual pieces for easy access
export const {
  name: USER_NAME,
  title: USER_TITLE,
  fullTitle: USER_FULL_TITLE,
  location: USER_LOCATION
} = BASIC_INFO;
