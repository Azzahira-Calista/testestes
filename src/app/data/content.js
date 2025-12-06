import { FaGithub, FaLinkedin, FaDribbble, FaInstagram } from "react-icons/fa";

export const PortoContent = {
  hero: {
    title: "My Portfolio",
    subtitle: "A collection of projects that showcase my passion for creating digital experiences"
  },
  categories: ["All", "Web Development", "Design", "Mobile", "Motion Graphics"],
  viewAll: {
    showText: "View All Projects",
    hideText: "Show Less"
  }
};

export const aboutContent = {
  hero: {
    title: "Hi, I'm Calista",
    subtitle: "Digital Creator & Problem Solver",
    description: "I turn ideas into beautiful, functional digital experiences",
  },

  story: {
    title: "My Journey",
    paragraphs: [
      "My journey began from a curiosity about how games were made, which later grew into an interest in design and building digital experiences.",
  "Now, I enjoy front-end development—both web and mobile—where I can combine design and code to create clean and intuitive interfaces.",
      "When I'm not coding, you'll find me exploring new design trends, experimenting with motion graphics, or sipping coffee while sketching out the next big idea.",
    ],
  },

  stats: [
    { label: "Projects", value: "50+", icon: "🚀" },
    { label: "Coffee Cups", value: "∞", icon: "☕" },
    { label: "Years Experience", value: "3+", icon: "⭐" },
    { label: "Happy Clients", value: "25+", icon: "😊" },
  ],

  interests: [
    {
      title: "Music Lover",
      icon: "🎵",
      description: "Helps me code better",
    },
    {
      title: "Gaming Enthusiast",
      icon: "🎮",
      description: "A way to unwind and recharge",
    },
    {
      title: "Always Learning",
      icon: "🌱",
      description: "Constantly growing",
    },
    {
      title: "Design Inspiration",
      icon: "✨",
      description: "Finding beauty everywhere",
    },
  ],
};

export const homeContent = {
  rotatingTexts: [
    "Web Dev",
    "App Dev",
    "Illustration",
    "Ui/Ux",
    "Graphic Design",
  ],
  // blurText:
    // "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  cta: {
    text: "Get in Touch",
    href: "/contact_me",
  },
};

export const navigation = {
  menuItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/azzahira-calista", icon: <FaGithub /> },
  { name: "LinkedIn", url: "https://linkedin.com/in/calista-azzahira-rusdy", icon: <FaLinkedin /> },
//   { name: "Dribbble", url: "https://dribbble.com/calista", icon: <FaDribbble /> },
  { name: "Instagram", url: "https://instagram.com/callzhira", icon: <FaInstagram /> },
];

export const contact = {
  email: "calista.azzahira.r@calista.dev",
  phone: "+62 878-0403-7393",
  location: "Tangerang Selatan, Indonesia",
  availability: "Available for freelance projects",
};
