// Portfolio Information
export const PORTFOLIO_INFO = {
  subTitle: "A showcase of my technical projects, highlighting problem-solving skills and innovative solutions",
  stats: {
    totalProjects: 12,
    completedProjects: 10,
    clientProjects: 8,
    personalProjects: 4
  },
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Comprehensive full-stack e-commerce solution featuring modern responsive UI/UX design, secure payment processing with Stripe integration, real-time inventory management, advanced product search and filtering capabilities, shopping cart functionality, order tracking system, and comprehensive admin dashboard for complete business management.",
      category: "Web Application",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe API",
        "JWT",
        "Docker",
        "AWS"
      ],
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Admin dashboard for inventory management",
        "Order tracking and management",
        "Responsive design for all devices",
        "Email notifications and confirmations"
      ],
      responsibilities: [
        "Led full-stack development and architecture design",
        "Implemented secure payment gateway integration with Stripe",
        "Designed and developed RESTful APIs for all business operations",
        "Created responsive React components with modern UI/UX patterns",
        "Set up MongoDB database schema and data relationships",
        "Implemented JWT-based authentication and authorization system",
        "Configured Docker containerization and AWS deployment",
        "Mentored junior developers and conducted code reviews"
      ],
      duration: "3 months",
      teamSize: "4 developers",
      role: "Full-Stack Lead Developer",
      liveUrl: "https://ecommerce-demo.vercel.app",
      imageUrl: "/images/projects/ecommerce-platform.jpg",
      isActive: false
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Advanced collaborative project management platform featuring real-time task updates via WebSocket connections, comprehensive team collaboration tools, interactive project timelines with milestone tracking, drag-and-drop task organization, file attachment system, advanced reporting and analytics dashboard, role-based access control, and customizable themes for enhanced user experience.",
      category: "Web Application",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Socket.io",
        "TailwindCSS",
        "NextAuth.js"
      ],
      features: [
        "Real-time task updates and notifications",
        "Team collaboration and member management",
        "Project timeline and milestone tracking",
        "File attachments and comments",
        "Drag-and-drop task organization",
        "Advanced reporting and analytics",
        "Role-based access control",
        "Dark/light theme support"
      ],
      responsibilities: [
        "Architected frontend application structure using Next.js and TypeScript",
        "Implemented real-time communication system using Socket.io",
        "Designed and developed responsive UI components with TailwindCSS",
        "Created interactive drag-and-drop functionality for task management",
        "Integrated NextAuth.js for secure authentication flows",
        "Implemented role-based permissions and access control system",
        "Optimized application performance and SEO with Next.js features",
        "Collaborated with backend team for API integration and data flow"
      ],
      duration: "2 months",
      teamSize: "3 developers",
      role: "Frontend Lead & Architecture",
      liveUrl: "https://taskmanager-demo.vercel.app",
      imageUrl: "/images/projects/task-management.jpg",
      isActive: true
    },
    {
      id: 3,
      title: "Healthcare Appointment System",
      description: "Comprehensive digital health platform designed to seamlessly connect patients with healthcare providers through intelligent appointment booking system, complete patient profile management, medical history tracking, prescription management, integrated payment processing for consultations, automated SMS and email notifications, and detailed analytics dashboard for healthcare providers to monitor patient engagement and clinic performance.",
      category: "Healthcare",
      technologies: [
        "React",
        "Laravel",
        "MySQL",
        "Redux",
        "PHP",
        "Bootstrap",
        "Chart.js",
        "Pusher"
      ],
      features: [
        "Patient registration and profile management",
        "Doctor availability and scheduling",
        "Appointment booking and confirmation",
        "Medical history tracking",
        "Prescription management",
        "Payment processing for consultations",
        "SMS and email notifications",
        "Analytics dashboard for healthcare providers"
      ],
      responsibilities: [
        "Developed patient registration and profile management system",
        "Created doctor scheduling and availability management module",
        "Implemented secure appointment booking and confirmation workflow",
        "Built medical history tracking and prescription management features",
        "Integrated payment gateway for consultation fees processing",
        "Developed real-time notification system using Pusher",
        "Created analytics dashboard with Chart.js for healthcare insights",
        "Ensured HIPAA compliance and data security measures"
      ],
      duration: "4 months",
      teamSize: "5 developers",
      role: "Full-Stack Developer",
      liveUrl: "https://healthcare-booking.demo.com",
      imageUrl: "/images/projects/healthcare-system.jpg",
      isActive: false
    },
    {
      id: 4,
      title: "Real Estate Platform",
      description: "Sophisticated property listing and management platform featuring advanced property search with intelligent filters, interactive map integration using Google Maps API, immersive virtual property tours with high-quality image galleries, comprehensive agent profiles and networking system, user favorites and saved searches functionality, property comparison tools, integrated mortgage calculator, and fully responsive mobile design for seamless property browsing experience.",
      category: "Real Estate",
      technologies: [
        "Vue.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Google Maps API",
        "Cloudinary",
        "JWT",
        "Vuetify"
      ],
      features: [
        "Property listing with detailed information",
        "Advanced search with filters and map integration",
        "Virtual property tours and image galleries",
        "Agent profiles and contact system",
        "Favorites and saved searches",
        "Property comparison tool",
        "Mortgage calculator integration",
        "Mobile-responsive design"
      ],
      responsibilities: [
        "Developed responsive Vue.js components using Vuetify framework",
        "Implemented advanced search functionality with multiple filter options",
        "Integrated Google Maps API for interactive property location display",
        "Created virtual tour functionality with image gallery management",
        "Built agent profile system and contact management features",
        "Developed user favorites and saved searches functionality",
        "Implemented property comparison tool with side-by-side analysis",
        "Optimized mobile responsiveness and cross-browser compatibility"
      ],
      duration: "3.5 months",
      teamSize: "4 developers",
      role: "Frontend Developer",
      liveUrl: "https://realestate-platform.demo.com",
      imageUrl: "/images/projects/realestate-platform.jpg",
      isActive: false
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "Advanced educational platform designed for comprehensive online learning experiences featuring robust course creation and content management system, high-quality video streaming and processing capabilities, detailed student enrollment and progress tracking, interactive quizzes and assignment management, live video conferencing for real-time classes, dynamic discussion forums and messaging system, automated certificate generation, and secure payment integration for course purchases.",
      category: "Education",
      technologies: [
        "React",
        "Django",
        "PostgreSQL",
        "Redis",
        "WebRTC",
        "FFmpeg",
        "Docker",
        "AWS S3"
      ],
      features: [
        "Course creation and content management",
        "Video streaming and processing",
        "Student enrollment and progress tracking",
        "Interactive quizzes and assignments",
        "Live video conferencing for classes",
        "Discussion forums and messaging",
        "Certificate generation",
        "Payment integration for course purchases"
      ],
      responsibilities: [
        "Architected and developed Django REST API backend infrastructure",
        "Implemented video streaming system using FFmpeg for content processing",
        "Built student enrollment and progress tracking algorithms",
        "Created interactive quiz and assignment evaluation system",
        "Integrated WebRTC for live video conferencing functionality",
        "Developed discussion forums and real-time messaging features",
        "Implemented automated certificate generation system",
        "Configured AWS S3 for scalable video and content storage"
      ],
      duration: "5 months",
      teamSize: "6 developers",
      role: "Backend Lead Developer",
      liveUrl: "https://lms-platform.demo.com",
      imageUrl: "/images/projects/lms-platform.jpg",
      isActive: false
    },
    {
      id: 6,
      title: "Social Media Analytics Dashboard",
      description: "Comprehensive analytics platform designed for sophisticated social media performance tracking featuring multi-platform integration with major social networks, real-time analytics and detailed reporting capabilities, in-depth audience demographics and behavioral insights, comprehensive content performance tracking with engagement metrics, competitive analysis and benchmarking tools, automated report generation and scheduling, customizable dashboard creation with drag-and-drop functionality, and advanced data export and visualization options.",
      category: "Analytics",
      technologies: [
        "React",
        "D3.js",
        "Node.js",
        "Python",
        "MongoDB",
        "Social Media APIs",
        "Chart.js",
        "Material-UI"
      ],
      features: [
        "Multi-platform social media integration",
        "Real-time analytics and reporting",
        "Audience demographics and insights",
        "Content performance tracking",
        "Competitor analysis",
        "Automated report generation",
        "Custom dashboard creation",
        "Data export and visualization"
      ],
      responsibilities: [
        "Developed React-based dashboard with Material-UI components",
        "Integrated multiple social media APIs for data aggregation",
        "Created real-time analytics system with live data updates",
        "Built interactive data visualizations using D3.js and Chart.js",
        "Implemented audience demographics analysis algorithms",
        "Developed competitor analysis and benchmarking features",
        "Created automated report generation and scheduling system",
        "Designed custom dashboard builder with drag-and-drop functionality"
      ],
      duration: "2.5 months",
      teamSize: "3 developers",
      role: "Full-Stack Developer",
      liveUrl: null,
      imageUrl: "/images/projects/social-analytics.jpg",
      isActive: false
    }
  ]
} as const;

export type PortfolioProject = typeof PORTFOLIO_INFO.projects[0] & {
  responsibilities: readonly string[];
};
