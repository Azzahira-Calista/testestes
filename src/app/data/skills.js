import {
  FaReact,
  FaVuejs,
  FaJs,
  FaGithub,
  FaFigma,
  FaLaravel,
  FaUnity,
  FaPython,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAdobeaftereffects, SiBlender } from "react-icons/si";
import { FaFlutter, FaDartLang  } from "react-icons/fa6";

export const skills = [
  {
    name: "Frontend Web Development",
    level: 90,
    icon: <FaReact />,
    description: "React, Next.js, Vue.js",
    category: "Technical",
  },
  {
    name: "UI/UX Design",
    level: 90,
    icon: <FaFigma />,
    description: "Figma, Adobe XD, User Research",
    category: "Design",
  },
  {
    name: "Frontend App Development",
    level: 85,
    icon: <FaFlutter />,
    description: "Flutter",
    category: "Technical",
  },
  {
    name: "Graphic Design",
    level: 50,
    icon: <FaFigma />,
    description: "Photoshop, Illustrator, Figma, Canva",
    category: "Design",
  },
  {
    name: "Backend Development",
    level: 20,
    icon: <FaLaravel />,
    description: "Laravel, mySQL, APIs",
    category: "Technical",
  },
  {
    name: "Motion Graphics",
    level: 20,
    icon: <SiAdobeaftereffects />,
    description: "After Effects, Framer Motion",
    category: "Creative",
  },
  
];

export const frameworks = [
  { name: "Vue.js", icon: <FaVuejs />, type: "Frontend" },
  { name: "JavaScript", icon: <FaJs />, type: "Language" },
  { name: "Dart", icon: <FaDartLang />, type: "Language" },
  { name: "Flutter", icon: <FaFlutter />, type: "Framework" },
  { name: "React", icon: <FaReact />, type: "Frontend" },
  { name: "Next.js", icon: "▲", type: "Framework" },
  { name: "Git", icon: <FaGithub />, type: "Tools" },
  { name: "Blender", icon: <SiBlender />, type: "3D Modeling" },
  { name: "Unity", icon: <FaUnity />, type: "Game Development" },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill />, type: "Styling" },
  { name: "Laravel", icon: <FaLaravel />, type: "Backend" },
  { name: "Figma", icon: <FaFigma />, type: "Design" },
  { name: "Adobe After Effects", icon: <SiAdobeaftereffects />, type: "Creative" },
  { name: "Python", icon: <FaPython />, type: "Language" },
];

export const softSkills = [
  { name: "Problem Solving", icon: "🧩", strength: "High" },
  { name: "Creative Thinking", icon: "💡", strength: "High" },
  { name: "Team Collaboration", icon: "🤝", strength: "Medium" },
  { name: "Communication", icon: "💬", strength: "High" },
  { name: "Time Management", icon: "⏰", strength: "Medium" },
];

export const getSkillsByCategory = (category) => {
  return skills.filter((skill) => skill.category === category);
};

export const getTechnicalSkills = () => {
  return getSkillsByCategory("Technical");
};

export const getDesignSkills = () => {
  return getSkillsByCategory("Design");
};

export const getCreativeSkills = () => {
  return getSkillsByCategory("Creative");
};
