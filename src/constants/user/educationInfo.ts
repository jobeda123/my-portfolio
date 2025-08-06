// Education Information
export const EDUCATION_INFO = {
  subTitle: "Academic journey and continuous learning that shaped my technical expertise",
  stats: {
    startDate: "2016-01-01",
    endDate: "2020-12-31", 
    certificationsEarned: 8,
    institutionsAttended: 3,
    gpaAchieved: 3.8
  },
  degrees: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Dhaka",
      period: "2016 - 2020",
      location: "Dhaka, Bangladesh",
      gpa: "3.8/4.0",
      isActive: false,
      coursework: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Computer Networks",
        "Web Development",
        "Object-Oriented Programming",
        "System Analysis & Design",
        "Mobile Application Development"
      ],
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List for 6 consecutive semesters",
        "Led final year project on E-commerce Platform",
        "Active member of Computer Science Society",
        "Participated in ACM Programming Contest",
        "Completed internship at leading tech company"
      ]
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC) - Science",
      institution: "Dhaka College",
      period: "2014 - 2016",
      location: "Dhaka, Bangladesh", 
      gpa: "5.0/5.0",
      isActive: false,
      coursework: [
        "Physics",
        "Chemistry", 
        "Mathematics",
        "Biology",
        "ICT",
        "English"
      ],
      achievements: [
        "Achieved Golden GPA 5.0",
        "Ranked in top 5% of class",
        "Science Olympiad participant",
        "Mathematics club member"
      ]
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC) - Science",
      institution: "Motijheel Model High School",
      period: "2012 - 2014",
      location: "Dhaka, Bangladesh",
      gpa: "5.0/5.0", 
      isActive: false,
      coursework: [
        "General Mathematics",
        "Physics",
        "Chemistry",
        "Biology", 
        "ICT",
        "English",
        "Bangla"
      ],
      achievements: [
        "Achieved Golden GPA 5.0",
        "School topper in Mathematics",
        "Science fair winner",
        "Debate team member"
      ]
    }
  ],
  certifications: [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-CSA-2023-001"
    },
    {
      id: 2,
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022", 
      credentialId: "GCP-DEV-2022-015"
    },
    {
      id: 3,
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "AZ-900-2022-089"
    },
    {
      id: 4,
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      credentialId: "CKA-2023-192"
    }
  ]
} as const;

export type EducationDegree = typeof EDUCATION_INFO.degrees[0];
export type EducationCertification = typeof EDUCATION_INFO.certifications[0];
