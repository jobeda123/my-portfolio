// Skills and Technologies Information
export const SKILLS_INFO = {
  // Core Technologies/Skills
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "PHP", "Laravel", "Express.js", "REST APIs", "GraphQL"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    devops: ["Docker", "AWS", "Git", "CI/CD", "Linux"],
    tools: ["VS Code", "Postman", "Figma", "Jira", "Slack"]
  },
  
  // Skill categories for display
  categories: {
    "Frontend Development": ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend Development": ["Node.js", "PHP", "Laravel", "Express.js", "REST APIs", "GraphQL"],
    "Database Management": ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    "DevOps & Cloud": ["Docker", "AWS", "Git", "CI/CD", "Linux"],
    "Development Tools": ["VS Code", "Postman", "Figma", "Jira", "Slack"]
  },
  
  // Proficiency levels (optional)
  proficiency: {
    expert: ["React", "Node.js", "TypeScript", "JavaScript", "PHP", "Laravel"],
    advanced: ["Next.js", "MySQL", "PostgreSQL", "Docker", "Git"],
    intermediate: ["GraphQL", "MongoDB", "AWS", "Redis"]
  }
} as const;

// Export individual pieces for easy access
export const {
  skills: USER_SKILLS,
  categories: SKILL_CATEGORIES,
  proficiency: SKILL_PROFICIENCY
} = SKILLS_INFO;
