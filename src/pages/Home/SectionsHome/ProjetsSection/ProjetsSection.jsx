import './ProjetsSection.scss';

import Section from '@/components/Section/Section.jsx';
import ProjetCard from '@/components/ProjetCard/ProjetCard.jsx';

import Kasa_logo from '@/assets/images/Kasa_logo.png';
import MVG_logo from '@/assets/images/MVG_logo.png';
import Dev_logo from '@/assets/images/Dev_logo.png';


// 2. Mes Projets
export default function ProjetsSection() {
  return (
    <Section
      id="projets"
      title="Mes Projets"
      subtitle="Quelques réalisations dont je suis fier"
      variant="alt"
    >
      <div
        className="grid"
        style={{
        display: 'grid',
        gap: '24px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))'
        }}
      >
        <ProjetCard 
          title="Kasa" 
          subtitle="React.js • Sass - 1 Developpeur" 
          image={Kasa_logo} 
          githubLink="https://github.com/Loukys/Projet5_Kasa">
          <p>
            Un projet frontend moderne de location d'appartement entre particuliers.
          </p>            
        </ProjetCard>
    
        <ProjetCard 
          title="Mon Vieux Grimoire" 
          subtitle="Node.js • Express - 1 Developpeur"
          image={MVG_logo} 
          githubLink="https://github.com/Loukys/Projet6_Dev-Web-livres">
          <p>
            Backend complet avec authentification sécurisé pour la gestion de données CRUD.
          </p>
        </ProjetCard>
    
        <ProjetCard 
          title="Projet C" 
          subtitle="React.js • Node.js - 2 Developpeurs"
          image={Dev_logo} 
          githubLink="#">
          <p>
            Site d'E-commerce en cours de développement.
          </p>
        </ProjetCard>
      </div>
    </Section>
  );
} 