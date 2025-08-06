

const skills={
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "PHP", "Laravel", "Express.js", "REST APIs", "GraphQL"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    devops: ["Docker", "AWS", "Git", "CI/CD", "Linux"],
    tools: ["VS Code", "Postman", "Figma", "Jira", "Slack"],
    ai: ["ChatGPT", "OpenAI API", "Hugging Face Transformers", "LangChain", "RAG (Retrieval-Augmented Generation)"]
  }

export const SKILLS_INFO = {
  description: "A comprehensive overview of my technical skills and expertise",
  skills: skills,
  categories: {
    "Frontend Development": skills.frontend,
    "Backend Development": skills.backend,
    "Database Management": skills.databases,
    "DevOps & Cloud": skills.devops,
    "Development Tools": skills.tools,
    "AI & Machine Learning": skills.ai
  },
  chipColors: {
    "Frontend Development": "bg-blue-100 text-blue-800",
    "Backend Development": "bg-green-100 text-green-800",
    "Database Management": "bg-yellow-100 text-yellow-800",
    "DevOps & Cloud": "bg-purple-100 text-purple-800",
    "Development Tools": "bg-teal-100 text-teal-800",
    "AI & Machine Learning": "bg-orange-100 text-orange-800"  
  }

} as const;

// Export individual pieces for easy access
export const {
  skills: USER_SKILLS,
  categories: SKILL_CATEGORIES,
  chipColors: SKILL_CHIP_COLORS
} = SKILLS_INFO;
