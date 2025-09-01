export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js featuring real-time inventory, payment integration, and beautiful animations.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    technologies: ["Next.js", "React", "Tailwind", "Stripe"],
    projectUrl: "#",
    category: "Web Development",
    featured: true,
    status: "Completed"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A stunning portfolio website with interactive animations, dark mode support, and responsive design.",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
    technologies: ["React", "Framer Motion", "CSS"],
    projectUrl: "#",
    category: "Design",
    featured: false,
    status: "Completed"
  },
  {
    id: 3,
    title: "Mobile App UI",
    description: "Beautiful mobile app interface design with smooth micro-interactions and intuitive user experience.",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    technologies: ["Figma", "React Native", "Expo"],
    projectUrl: "#",
    category: "Mobile",
    featured: true,
    status: "In Progress"
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description: "Interactive dashboard with real-time data visualization, charts, and comprehensive analytics features.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    projectUrl: "#",
    category: "Web Development",
    featured: true,
    status: "Completed"
  },
  {
    id: 5,
    title: "Motion Graphics Reel",
    description: "Collection of motion graphics work including logo animations, transitions, and creative visual effects.",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop",
    technologies: ["After Effects", "Cinema 4D", "Premiere Pro"],
    projectUrl: "#",
    category: "Motion Graphics",
    featured: false,
    status: "Completed"
  }
];

// Helper functions
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};