export const skills = [
  { 
    name: 'Frontend Development', 
    level: 90, 
    icon: '⚛️',
    description: 'React, Next.js, Vue.js',
    category: 'Technical'
  },
  { 
    name: 'UI/UX Design', 
    level: 85, 
    icon: '🎨',
    description: 'Figma, Adobe XD, User Research',
    category: 'Design'
  },
  { 
    name: 'Motion Graphics', 
    level: 80, 
    icon: '🎭',
    description: 'After Effects, Framer Motion',
    category: 'Creative'
  },
  { 
    name: 'App Development', 
    level: 75, 
    icon: '📱',
    description: 'React Native, Flutter',
    category: 'Technical'
  },
  {
    name: 'Backend Development',
    level: 70,
    icon: '🔧',
    description: 'Node.js, MongoDB, APIs',
    category: 'Technical'
  },
  {
    name: 'Graphic Design',
    level: 85,
    icon: '🖌️',
    description: 'Photoshop, Illustrator, Branding',
    category: 'Design'
  }
];

export const frameworks = [
  { name: 'React', icon: '⚛️', type: 'Frontend' },
  { name: 'Next.js', icon: '▲', type: 'Framework' },
  { name: 'Tailwind CSS', icon: '🎨', type: 'Styling' },
  { name: 'Framer Motion', icon: '🎭', type: 'Animation' },
  { name: 'TypeScript', icon: '📘', type: 'Language' },
  { name: 'Node.js', icon: '🟢', type: 'Backend' },
  { name: 'Figma', icon: '🎯', type: 'Design' },
  { name: 'Adobe Creative Suite', icon: '🎪', type: 'Creative' },
  { name: 'MongoDB', icon: '🍃', type: 'Database' },
  { name: 'Git', icon: '📚', type: 'Tools' },
];

export const softSkills = [
  { name: 'Problem Solving', icon: '🧩', strength: 'High' },
  { name: 'Creative Thinking', icon: '💡', strength: 'High' },
  { name: 'Team Collaboration', icon: '🤝', strength: 'Medium' },
  { name: 'Communication', icon: '💬', strength: 'High' },
  { name: 'Time Management', icon: '⏰', strength: 'Medium' },
];

// Helper functions
export const getSkillsByCategory = (category) => {
  return skills.filter(skill => skill.category === category);
};

export const getTechnicalSkills = () => {
  return getSkillsByCategory('Technical');
};

export const getDesignSkills = () => {
  return getSkillsByCategory('Design');
};

export const getCreativeSkills = () => {
  return getSkillsByCategory('Creative');
};