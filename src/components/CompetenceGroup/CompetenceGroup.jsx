import "./CompetenceGroup.scss";

import SkillCard from '@/components/SkillCard/SkillCard.jsx';
import { skillIcons, skillColors, FallbackIcon } from '@/assets/icons/skills.js';

// Composant : affiche une catégorie dans Mes compétences
export default function CompetenceGroup({ title, skills }) {
  return (
    <div className="competences-grid">
      <h3>{title}</h3>
      {skills.map((name) => {
        const Icon = skillIcons[name] || FallbackIcon;
        const color = skillColors[name] || '#555';
        return <SkillCard key={name} icon={Icon} color={color} name={name} />;
      })}
    </div>
  );
}