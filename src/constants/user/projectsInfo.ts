// Projects Information
export const PROJECTS_INFO = {
  // Featured projects
  featured: [
    {
      id: "project-1",
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React frontend and Node.js backend",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      image: "/images/projects/ecommerce.jpg", // Add project image
      liveUrl: "https://example.com", // Update with real URL
      githubUrl: "https://github.com/username/project", // Update with real URL
      featured: true
    },
    {
      id: "project-2", 
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      image: "/images/projects/taskmanager.jpg", // Add project image
      liveUrl: "https://example.com", // Update with real URL
      githubUrl: "https://github.com/username/project", // Update with real URL
      featured: true
    }
    // Add more projects as needed
  ],
  
  // Project categories
  categories: [
    "Web Applications",
    "E-commerce",
    "Mobile Apps", 
    "API Development",
    "DevOps Tools"
  ],
  
  // Project stats
  stats: {
    totalProjects: "50+",
    clientProjects: "30+",
    openSource: "10+",
    inProduction: "40+"
  }
} as const;

// Export individual pieces for easy access
export const {
  featured: FEATURED_PROJECTS,
  categories: PROJECT_CATEGORIES,
  stats: PROJECT_STATS
} = PROJECTS_INFO;
