// Contact Information
export const CONTACT_INFO = {
  email: "jobeda.akhi@example.com", // Update with real email
  phone: "+1 (555) 123-4567", // Update with real phone
  
  // CV/Resume Link
  cv: "https://drive.google.com/uc?export=download&id=1hBB_BAJ2RWQHwIaTTS6d5efduQocVtDm", // Direct download link
  
  // Social Media Links
  social: {
    linkedin: "https://www.linkedin.com/in/jobeda-nur/", 
    github: "https://github.com/jobeda123",
    facebook: "https://facebook.com/jobeda.akhi", 
    website: "https://jobeda-portfolio.web.app/" ,
    email: "mailto:jobedanur265@gmail.com",
    mobile: "tel:+880163803706"
  }
} as const;

// Quick contact CTA
export const CONTACT_CTA = "Let's build something amazing together!";

// Export individual pieces for easy access
export const {
  email: USER_EMAIL,
  phone: USER_PHONE,
  cv: USER_CV,
  social: USER_SOCIAL
} = CONTACT_INFO;
