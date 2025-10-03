import './ParcoursSection.scss';
import Section from '@/components/Section/Section.jsx';
import { Link } from 'react-router-dom';

// 4. Mon Parcours
export default function ParcoursSection() {
  return (
    <Section
      id="parcours"
      title="Mon parcours"
      subtitle="Apprenez en plus sur moi ;)"
      variant="alt"
    >
      <div className="parcours-section__cards">
        <Link to="/Parcours" className="parcours-card">
          <h3>Parcours</h3>
        </Link>

        <Link to="/CV" className="parcours-card">
          <h3>CV</h3>
        </Link>
      </div>
    </Section>
  );
}
