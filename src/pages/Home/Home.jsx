import './Home.scss';

import Section from '../../components/Section/Section.jsx';
import Card from '../../components/Card/Card.jsx';

import Photo_profile from '../../images/Photo_profile.png';
import Kasa_logo from '../../images/Kasa_logo.png';
import MVG_logo from '../../images/MVG_logo.png';
import Dev_logo from '../../images/Dev_logo.png';

export default function Home() {
  return (
    <>
      {/* 1. Présentation */}
      <Section
        id="presentation"
        title="Présentation"
        subtitle="Guillaume LOUAIL"
      >
        <div >
          <img src={Photo_profile} alt="Photo de profil" className="photo-profile-home" />
        </div>

        <div>
          <p>Bonjour,</p>
          <p>Moi c'est Guillaume,</p>
          <p>Je suis Développeur Web junior et Ingénieur Management, Qualité, Sécurité et Environnement,</p>
          <p>Vous recherchez un développeur qui connait le monde du travail et tout particulièrement celui de l'industrie ?</p>
          <p>Alors travaillons ensemble !</p>
        </div>
      </Section>

      {/* 2. Mes projets */}
      <Section
        id="projets"
        title="Mes Projets"
        subtitle="Quelques réalisations dont je suis fier·e"
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
          <Card 
            title="Kasa" 
            subtitle="React • Sass" 
            image={Kasa_logo} 
            githubLink="https://github.com/Loukys/Projet5_Kasa">
            <p>
              Un projet frontend moderne de location d'appartement entre particuliers.
            </p>            
          </Card>

          <Card 
            title="Mon Vieux Grimoire" 
            subtitle="Node.js • Express"
            image={MVG_logo} 
            githubLink="https://github.com/Loukys/Projet6_Dev-Web-livres">
            <p>
              Backend complet avec authentification sécurisé pour la gestion de données CRUD.
            </p>
          </Card>

          <Card 
            title="Projet C" 
            subtitle="React"
            image={Dev_logo} 
            githubLink="#">
            <p>
              Site d'E-commerce en cours de développement.
            </p>
          </Card>
        </div>
      </Section>

      {/* 3. Mes compétences */}
      <Section
        id="competences"
        title="Mes compétences"
        subtitle="Techniques & soft skills"
      >
        <ul style={{
          display: 'grid',
          gap: '12px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          paddingLeft: 0,
          listStyle: 'none'
        }}>
          <li className="card">React, Vite, Router</li>
          <li className="card">Sass, CSS Modules</li>
          <li className="card">Node, Express</li>
          <li className="card">Tests (Vitest/Jest)</li>
          <li className="card">Accessibilité</li>
          <li className="card">UI/UX & design system</li>
        </ul>
      </Section>

      {/* 4. Mon parcours */}
      <Section
        id="parcours"
        title="Mon parcours"
        subtitle="Études, expériences, certifications"
        variant="alt"
      >
        <ol style={{ paddingLeft: '1rem' }}>
          <li><strong>2024–2025 :</strong> Frontend – Entreprise X (React)</li>
          <li><strong>2023 :</strong> Formation – Titre/Bootcamp</li>
          <li><strong>Avant :</strong> …</li>
        </ol>
      </Section>

      {/* 5. Me contacter */}
      <Section
        id="contact"
        title="Me contacter"
        subtitle="Discutons de vos besoins"
      >
        <form
          className="card"
          onSubmit={(e) => { e.preventDefault(); alert('Message envoyé !'); }}
          style={{ maxWidth: 560 }}
        >
          <div style={{ display: 'grid', gap: '12px' }}>
            <label>
              Nom
              <input type="text" name="name" placeholder="Votre nom" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="vous@exemple.com" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Votre message…" required />
            </label>
            <button className="btn-primary" type="submit">Envoyer</button>
          </div>
        </form>
      </Section>
    </>
  );
}
