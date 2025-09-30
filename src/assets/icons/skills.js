// src/icons/skills.js
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiReactrouter, SiSass, SiNodedotjs, SiExpress, SiMongodb, SiGithub, SiFigma } from 'react-icons/si';
import { TbApi, TbLock, TbDevices2, TbAccessible, TbClipboardCheck } from 'react-icons/tb';
import { BiCodeCurly } from 'react-icons/bi';
import { MdOutlineDynamicForm } from 'react-icons/md';
import { VscTools } from 'react-icons/vsc';
import { PiCertificateFill } from "react-icons/pi";

// Mapping des icônes
export const skillIcons = {
  // Frontend
  'HTML5': SiHtml5,
  'CSS3': SiCss3,
  'JavaScript': SiJavascript,
  'React': SiReact,
  'React Router': SiReactrouter,
  'Sass': SiSass,
  'Responsive Design': TbDevices2,
  'DOM': BiCodeCurly,
  'Formulaires': MdOutlineDynamicForm,
  'DevTools': VscTools,

  // Backend
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'MongoDB': SiMongodb,
  'API REST': TbApi,
  'Auth': TbLock,

  // Autres
  'Master MQSE': PiCertificateFill,
  'GitHub': SiGithub,
  'Figma': SiFigma,
  'Accessibilité': TbAccessible,
  'Gestion de projet': TbClipboardCheck,
  'Modélisation': TbClipboardCheck, // à remplacer si tu trouves mieux
};

// Mapping des couleurs officielles
export const skillColors = {
  'HTML5': '#E34F26',
  'CSS3': '#1572B6',
  'JavaScript': '#F7DF1E',
  'React': '#61DAFB',
  'React Router': '#CA4245',
  'Sass': '#CC6699',
  'Responsive Design': '#4A90E2',
  'DOM': '#FF6F00',
  'Formulaires': '#00897B',
  'DevTools': '#607D8B',

  'Node.js': '#339933',
  'Express': '#000000',
  'MongoDB': '#47A248',
  'API REST': '#FF9800',
  'Auth': '#9C27B0',

  'Master MQSE': '#e8c502ff',
  'GitHub': '#181717',
  'Figma': '#F24E1E',
  'Accessibilité': '#1565C0',
  'Gestion de projet': '#795548',
  'Modélisation': '#3F51B5',
};

export const FallbackIcon = TbClipboardCheck;
