import './CompetencesSection.scss';

import Section from '@/components/Section/Section.jsx';
import SkillCard from '@/components/SkillCard/SkillCard.jsx';
import { skillIcons, skillColors, FallbackIcon } from '@/assets/icons/skills.js';

// Listes par catégorie
const competencesFrontend = [
  "HTML5", "CSS3", "JavaScript", "React", "React Router", "Sass", "Responsive Design", "SEO"
];

const competencesBackend = [
  "Node.js", "Express", "API REST", "Auth", "MongoDB"
];

const competencesAutres = [
  "Master MQSE", "Figma", "GitHub", "Gestion de projet", "Pack Office Plus"
];

// Sous-composant générique : affiche une catégorie
function CompetenceGroup({ title, skills }) {
  return (
    <div className="competences-grid">
      <h3>{title}</h3>
      {skills.map((name) => {
        const Icon = skillIcons[name] || FallbackIcon;
        const color = skillColors[name] || '#555'; // couleur par défaut
        return <SkillCard key={name} icon={Icon} color={color} name={name} />;
      })}
    </div>
  );
}

// Section principale
export default function CompetencesSection() {
  return (
    <Section
      id="competences"
      title="Mes compétences"
      subtitle="TStack technique et soft skills"
    >
      <CompetenceGroup title="Frontend" skills={competencesFrontend} />
      <CompetenceGroup title="Backend" skills={competencesBackend} />
      <CompetenceGroup title="Autres" skills={competencesAutres} />
    </Section>
  );
}
