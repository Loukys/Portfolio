import './PresentationSection.scss';

import Section from '@/components/Section/Section.jsx';

import Photo_profile from '@/assets/images/Photo_profile.webp';

// 1. Présentation 
export default function PresentationSection() {
  return (
    <Section
      id="presentation"
      title="Présentation"
      subtitle="Développeur Web • Ingénieur MQSE"
    >
      <div className="home_presentation">
        <img src={Photo_profile} alt="Photo de profil Guillaume LOUAIL" className="photo-profile" />
        <div className="home_texte">
          <p>Bonjour,</p>
          <p>Moi c'est Guillaume !</p>
          <p>Je suis Développeur Web junior et Ingénieur Management, Qualité, Sécurité et Environnement.</p>
          <p>Vous recherchez un développeur qui connait le monde du travail et tout particulièrement celui de l'industrie ?</p>
          <p>Alors travaillons ensemble !</p>
        </div>
      </div>
    </Section>
  );
}