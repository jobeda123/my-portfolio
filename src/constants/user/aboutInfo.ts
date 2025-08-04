// About Section Information
export const ABOUT_INFO = {
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
  ]
} as const;

// Export individual pieces for easy access
export const {
  summary: USER_SUMMARY,
  extendedSummary: USER_EXTENDED_SUMMARY,
  experience: USER_EXPERIENCE,
  interests: USER_INTERESTS,
  education: USER_EDUCATION,
  certifications: USER_CERTIFICATIONS
} = ABOUT_INFO;
