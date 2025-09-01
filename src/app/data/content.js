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
      "My journey started with curiosity about how websites work. What began as tinkering with HTML has evolved into a passion for creating seamless digital experiences that users love.",
      "I specialize in bringing ideas to life through clean code, thoughtful design, and smooth animations. Every project is an opportunity to solve problems and create something meaningful.",
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
    "Motion Graphic",
    "Ui/Ux",
    "Graphic Design",
  ],
  blurText:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  cta: {
    text: "Get in Touch",
    href: "/contact",
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
  { name: "GitHub", url: "https://github.com/calista", icon: <FaGithub /> },
  { name: "LinkedIn", url: "https://linkedin.com/in/calista", icon: <FaLinkedin /> },
//   { name: "Dribbble", url: "https://dribbble.com/calista", icon: <FaDribbble /> },
  { name: "Instagram", url: "https://instagram.com/calista", icon: <FaInstagram /> },
];

export const contact = {
  email: "hello@calista.dev",
  phone: "+62 xxx-xxxx-xxxx",
  location: "Tangerang, Indonesia",
  availability: "Available for freelance projects",
};
