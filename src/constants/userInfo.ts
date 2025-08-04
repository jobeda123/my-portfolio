// User Profile Information Constants
export const USER_INFO = {
  // Basic Information
  name: "Jobeda Nur Akhi",
  title: "Software Engineer",
  fullTitle: "Full-Stack Team Lead & Senior Software Engineer",
  
  // Contact Information
  email: "jobeda.akhi@example.com", // Update with real email
  phone: "+1 (555) 123-4567", // Update with real phone
  location: "Your City, Country", // Update with real location
  
  // Professional Summary
  summary: "Full-Stack Team Lead & Senior Software Engineer with 8+ years of experience in web development, telecom, ticketing, and e-commerce projects. Expert in Node.js, PHP/Laravel, React/Next.js, MySQL/PostgreSQL, and Docker-driven DevOps, I translate complex requirements into secure, scalable solutions while mentoring cross-functional teams and driving agile, test-driven development workflows.",
  
  extendedSummary: "Beyond technical expertise, I excel at bridging business needs with innovative technology solutions, ensuring projects deliver both exceptional user experiences and measurable business value. My leadership approach emphasizes collaboration, continuous learning, and maintaining high code quality standards across diverse development environments.",
  
  // Experience Stats
  experience: {
    years: "8+",
    projectsDelivered: "50+",
    teamMembers: "15+",
    technologies: "10+"
  },
  
  // Core Technologies/Skills
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "PHP", "Laravel", "Express.js", "REST APIs", "GraphQL"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    devops: ["Docker", "AWS", "Git", "CI/CD", "Linux"],
    tools: ["VS Code", "Postman", "Figma", "Jira", "Slack"]
  },
  
  // Social Media Links
  social: {
    linkedin: "https://linkedin.com/in/jobeda-akhi", // Update with real profile
    github: "https://github.com/jobeda-akhi", // Update with real profile
    twitter: "https://twitter.com/jobeda_akhi", // Update with real profile
    facebook: "https://facebook.com/jobeda.akhi", // Update with real profile
    website: "https://jobeda-portfolio.com" // Update with real website
  },
  
  // Professional Goals/Interests
  interests: [
    "Full-Stack Development",
    "Team Leadership",
    "DevOps & Cloud Computing",
    "Open Source Contributions",
    "Technical Mentoring",
    "Agile Methodologies"
  ],
  
  // Education (optional)
  education: {
    degree: "Bachelor of Science in Computer Science", // Update as needed
    university: "Your University Name", // Update as needed
    year: "2016" // Update as needed
  },
  
  // Certifications (optional)
  certifications: [
    // "AWS Certified Developer",
    // "MongoDB Certified Developer",
    // Add your certifications here
  ],
  
  // Availability
  availability: {
    status: "Open to new opportunities", // "Available for freelance", "Currently employed", etc.
    preferredRoles: ["Senior Full-Stack Developer", "Team Lead", "Technical Lead"],
    workType: ["Remote", "Hybrid", "On-site"] // Preferred work arrangements
  }
} as const;

// Alt text for profile image
export const PROFILE_ALT_TEXT = `${USER_INFO.name} - ${USER_INFO.title}`;

// Professional tagline
export const TAGLINE = `${USER_INFO.experience.years} years of turning ideas into scalable digital solutions`;

// Quick contact CTA
export const CONTACT_CTA = "Let's build something amazing together!";

// Export individual pieces for easy access
export const {
  name: USER_NAME,
  title: USER_TITLE,
  fullTitle: USER_FULL_TITLE,
  email: USER_EMAIL,
  phone: USER_PHONE,
  summary: USER_SUMMARY,
  social: USER_SOCIAL,
  skills: USER_SKILLS,
  experience: USER_EXPERIENCE
} = USER_INFO;
