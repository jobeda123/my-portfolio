// Professional Availability and Career Information
export const CAREER_INFO = {
  // Availability
  availability: {
    status: "Open to new opportunities", // "Available for freelance", "Currently employed", etc.
    preferredRoles: ["Senior Full-Stack Developer", "Team Lead", "Technical Lead"],
    workType: ["Remote", "Hybrid", "On-site"], // Preferred work arrangements
    startDate: "Immediately", // When can you start
    contractTypes: ["Full-time", "Contract", "Freelance"]
  },
  
  // Experience timeline
  experience: [
    {
      company: "Tech Company Name", // Update with real company
      position: "Senior Full-Stack Developer",
      duration: "2020 - Present",
      description: "Led development of scalable web applications using React and Node.js",
      technologies: ["React", "Node.js", "TypeScript", "AWS"]
    },
    {
      company: "Previous Company", // Update with real company
      position: "Full-Stack Developer", 
      duration: "2018 - 2020",
      description: "Developed and maintained multiple client projects",
      technologies: ["PHP", "Laravel", "Vue.js", "MySQL"]
    }
    // Add more experience as needed
  ],
  
  // Career highlights
  highlights: [
    "Led team of 15+ developers across multiple projects",
    "Delivered 50+ successful projects on time and within budget",
    "Reduced application load time by 60% through optimization",
    "Mentored 10+ junior developers in modern web technologies"
  ]
} as const;

// Export individual pieces for easy access
export const {
  availability: USER_AVAILABILITY,
  experience: USER_EXPERIENCE_TIMELINE,
  highlights: CAREER_HIGHLIGHTS
} = CAREER_INFO;
