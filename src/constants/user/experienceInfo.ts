import { getTotalYears } from "@/utils/string";

const stats={
    startDate: new Date("2021-08-01"),
    endDate:new Date(),
    companiesWorked: 4,
    projectsCompleted: 50,
    technologiesUsed: 25,
  }

// Experience Information
export const EXPERIENCE_INFO = {
    subTitle:"A journey of growth, innovation, and technical excellence across various roles and technologies",
  description:
    "I have over 8 years of experience in software development, specializing in full-stack web applications. My expertise includes designing scalable architectures, leading development teams, and delivering high-quality software solutions.",
  stats:stats ,
  companies: [
    {
      id: 1,
      title: "Senior Software Engineer (FullStack Team Lead)",
      company: "Portonics Limited",
      period: "November, 2021 – Present",
      isActive: true,
      technologies: [
        "JavaScript",
        "Node.js",
        "Express.js",
        "PHP",
        "Laravel",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "RabbitMQ",
        "Redis",
        "Docker",
        "AWS",
        "Jira",
      ],
      responsibilities: [
        "Designing application architecture and microservices",
        "Providing solutions to any new technical issues",
        "Code review and mentoring team members",
        "Requirement Analysis from client and task estimation",
        "Actively working as a software engineer",
        "Write scalable, fail-safe, maintainable, extendable OWASP standard APIs",
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "TechCorp Solutions",
      period: "January, 2020 – October, 2021",
      isActive: false,
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "AWS",
        "Git",
      ],
      responsibilities: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with cross-functional teams to define and implement new features",
        "Optimized application performance and user experience",
        "Participated in code reviews and maintained coding standards",
      ],
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Digital Innovations Inc",
      period: "June, 2018 – December, 2019",
      isActive: false,
      technologies: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "SASS",
        "Bootstrap",
        "jQuery",
      ],
      responsibilities: [
        "Built responsive web interfaces using React and modern CSS",
        "Implemented pixel-perfect designs from UI/UX mockups",
        "Ensured cross-browser compatibility and mobile responsiveness",
        "Collaborated with backend developers for API integration",
      ],
    },
  ],
  summary: `Over the past ${getTotalYears(stats.startDate, stats.endDate)} years, I&apos;ve
        evolved from a frontend developer into a senior full-stack engineer and
        team lead. My journey has been marked by continuous learning, taking on
        challenging projects, and mentoring fellow developers. I&apos;ve worked
        across various industries, building scalable applications and leading
        technical initiatives.`
} as const;

export type ExperienceCompany = (typeof EXPERIENCE_INFO.companies)[0];
