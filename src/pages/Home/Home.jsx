import './Home.scss';

import PresentationSection from './SectionsHome/PresentationSection/PresentationSection.jsx';
import ProjetsSection from './SectionsHome/ProjetsSection/ProjetsSection.jsx';
import CompetencesSection from './SectionsHome/CompetencesSection/CompetencesSection.jsx';
import ParcoursSection from './SectionsHome/ParcoursSection/ParcoursSection.jsx';
import ContactSection from './SectionsHome/ContactSection/ContactSection.jsx';


// Fonction d'importation des sections de la page d'accueil
export default function Home() {
  return (
    <div>
      <PresentationSection />
      <ProjetsSection />
      <CompetencesSection />
      <ParcoursSection />
      <ContactSection />
    </div>
  );
}
