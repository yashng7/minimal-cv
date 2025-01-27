export interface ResumeContent {
  profile: {
    name: string;
    title: string;
    image?: string;
    location?: string;
    email?: string;
    phone?: string;
    links?: {
      website?: string;
      github?: string;
      linkedin?: string;
    };
  };
  summary?: string;
  experience?: Array<{
    role: string;
    company: string;
    period?: string;
    achievements?: string[];
  }>;
  projects?: Array<{
    title: string;
    role: string;
    period?: string;
    achievements?: string[];
  }>;
  skills: {
    [key: string]: string[];
  };
  education?: Array<{
    degree: string;
    school: string;
    period?: string;
    description?: string[];
  }>;
  certifications?: Array<{
    title: string;
    subtitle: string;
    description?: string;
    link?: string;
    period?: string;
    achievements?: string[];
  }>;
}

export const resumeContent = {
  profile: {
    name: "Spider Mon",
    title: "Senior Full Stack Developer",
    image: "/images/spidermon.jpg",
    location: "New Delhi, India",
    email: "example@email.com",
    phone: "+91 123456789",
    links: {
      website: "https://example.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  summary: `Senior Full Stack Developer with 5+ years of experience in building scalable web applications.
      Proven track record of delivering high-quality solutions using modern technologies.
      Strong expertise in React, Node.js, and cloud architecture with a focus on performance and user experience.`,
  skills: {
    frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
    backend: ["Node.js", "PostgreSQL", "GraphQL", "Docker", "AWS"],
    version_control: ["git", "github"],
  },
  experience: [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      achievements: [
        "Led a team of 5 developers in building a microservices-based e-commerce platform",
        "Improved application performance by 40% through code optimization and caching strategies",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Digital Innovations Co.",
      period: "2019 - 2021",
      achievements: [
        "Developed and maintained multiple client-facing web applications",
        "Integrated third-party APIs and payment gateways",
        "Mentored junior developers and conducted code reviews",
      ],
    },
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description:
        "A scalable, microservices-based e-commerce platform with real-time inventory updates and order tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
      role: "Lead Developer",
      period: "2021 - 2022",
      achievements: [
        "Designed and implemented the product catalog and user authentication system",
        "Reduced response times by 50% by optimizing database queries",
        "Collaborated with frontend and backend teams to integrate payment gateways",
      ],
    },
    {
      title: "Project Management Tool",
      description:
        "A project management web app with task tracking, time logging, and team collaboration features.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      role: "Full Stack Developer",
      period: "2020 - 2021",
      achievements: [
        "Built a real-time notification system using WebSockets",
        "Enhanced user experience by implementing drag-and-drop task management",
        "Integrated calendar and reporting features to improve project tracking",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2015 - 2019",
      description: [
        "Gained in-depth knowledge of computer systems, algorithms, and software engineering.",
        "Developed proficiency in programming languages like Python, Java, and C++.",
        "Hands-on experience in building web applications, databases, and machine learning models.",
        "Collaborated in group projects, demonstrating strong problem-solving and team-based skills.",
      ],
    },
  ],
  certifications: [
    {
      title: "Back End Development and APIs",
      subtitle: "By freeCodeCamp",
      description:
        "Completed a course on back-end development and API design, focusing on building RESTful APIs, database integration, and secure authentication.",
      achievements: [
        "Developed and deployed RESTful APIs using Node.js and Express",
        "Built CRUD applications with MongoDB",
        "Implemented JWT authentication for secure user access",
      ],
      link: "https://www.freecodecamp.org/",
      period: "Jan - 2020",
    },
  ],
};
