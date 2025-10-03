import './CompetencesSection.scss';

import Section from '@/components/Section/Section.jsx';
import CompetenceGroup from '@/components/CompetenceGroup/CompetenceGroup.jsx';

// 3. Mes Compétences
// Listes par catégorie
const competencesFrontend = [ "HTML5", "CSS3", "JavaScript", "React", "React Router", "Sass", "Responsive Design", "SEO" ];

const competencesBackend = [ "Node.js", "Express", "API REST", "Auth", "MongoDB" ];

const competencesAutres = [ "Master MQSE", "Figma", "GitHub", "Gestion de projet", "Pack Office Plus" ];

// Section principale
export default function CompetencesSection() {
  return (
    <Section
      id="competences"
      title="Mes compétences"
      subtitle="Stack technique et soft skills"
    >
      <CompetenceGroup title="Frontend" skills={competencesFrontend} />
      <CompetenceGroup title="Backend" skills={competencesBackend} />
      <CompetenceGroup title="Autres" skills={competencesAutres} />
    </Section>
  );
}
