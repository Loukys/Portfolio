import './Parcours.scss';

// Import les images depuis le dossier src/assets/imgParcours
import FormationDev from '@/assets/imgParcours/Formation_Developpeur_Web_OpenClassroom.webp';
import Coordinateur from '@/assets/imgParcours/Coordinateur_Amélioration_des_Procédés.webp';
import AdjointQualite from '@/assets/imgParcours/Adjoint_Responsable_Qualité.webp';
import Preventeur from '@/assets/imgParcours/Préventeur_Hygiène_Sécurité.webp';
import AssistantQualite from '@/assets/imgParcours/Assistant_Qualité.webp';
import AssistantQHSE from '@/assets/imgParcours/Assistant_QHSE.webp';
import FormationAnglais from '@/assets/imgParcours/Formation_Anglais.webp';
import MasterMQSE from '@/assets/imgParcours/Master_MQSE.webp';
import LicenceQSE from '@/assets/imgParcours/Licence_QSE.webp';
import BTSQIAB from '@/assets/imgParcours/BTS_QIAB.webp';
import BacSTL from '@/assets/imgParcours/Bac_STL.webp';

// Page : affiche le parcours sous forme de timeline
// Ordre du plus récent (en haut) au plus ancien (en bas)
const ITEMS = [
  {
    type: 'formation',
    period: '05/2025 → 10/2025',
    title: 'Développeur Web',
    org: 'OpenClassrooms',
    image: FormationDev,
    alt: 'Formation Développeur Web suivie chez OpenClassrooms en 2025',
  },
  {
    type: 'experience',
    period: '03/2024 → 08/2024',
    title: 'Coordinateur Amélioration des Procédés (CDI)',
    org: 'Laboratoires Prodène Klint – GOJO',
    image: Coordinateur,
    alt: 'Coordinateur amélioration des procédés chez Laboratoires Prodène Klint – GOJO en 2024',
  },
  {
    type: 'experience',
    period: '10/2020 → 02/2024',
    title: 'Adjoint Responsable Qualité (CDI)',
    org: 'Laboratoires Prodène Klint – GOJO',
    image: AdjointQualite,
    alt: 'Adjoint Responsable Qualité chez Laboratoires Prodène Klint – GOJO entre 2020 et 2024',
  },
  {
    type: 'experience',
    period: '07/2020 → 09/2020',
    title: 'Préventeur Hygiène & Sécurité (CDD)',
    org: 'COORDEF',
    image: Preventeur,
    alt: 'Préventeur Hygiène et Sécurité chez COORDEF en 2020',
  },
  {
    type: 'experience',
    period: '10/2017 → 10/2019',
    title: 'Assistant Qualité (CDI)',
    org: 'Compagnie Paul Prédault',
    image: AssistantQHSE,
    alt: 'Assistant QHSE en alternance chez Compagnie Paul Prédault de 2013 à 2016',
  },
  {
    type: 'formation',
    period: '2017',
    title: 'Formation Anglais',
    org: 'ESL – St Giles, Eastbourne (UK)',
    image: FormationAnglais,
    alt: 'Formation en anglais à l’école ESL – St Giles à Eastbourne au Royaume-Uni en 2017',
  },
  {
    type: 'experience',
    period: '09/2013 → 09/2016',
    title: 'Assistant QHSE (Alternance)',org: 'COOKIE CREATIONS',
    image: AssistantQualite,
    alt: 'Assistant Qualité chez COOKIE CREATIONS de 2017 à 2019',
  },
  {
    type: 'formation',
    period: '2016',
    title: 'Master MQSE (alternance)',
    org: 'UPEM, Sens (89)',
    image: MasterMQSE,
    alt: 'Diplôme de Master Management Qualité Sécurité Environnement obtenu à l’UPEM en alternance en 2016',
  },
  {
    type: 'formation',
    period: '2014',
    title: 'Licence QSE (apprentissage)',
    org: 'UPEM & CFA Descartes (77)',
    image: LicenceQSE,
    alt: 'Licence Qualité Sécurité Environnement suivie en apprentissage à l’UPEM & CFA Descartes en 2014',
  },
  {
    type: 'formation',
    period: '2013',
    title: 'BTS QIAB',
    org: 'Lycée Paul Éluard (93)',
    image: BTSQIAB,
    alt: 'BTS Qualité dans les Industries Alimentaires et Bio-industries obtenu au Lycée Paul Éluard en 2013',
  },
  {
    type: 'formation',
    period: '2011',
    title: 'Bac STL',
    org: 'Lycée Émilie Brontë (77)',
    image: BacSTL,
    alt: 'Baccalauréat STL obtenu au Lycée Émilie Brontë en 2011',
  },
];

export default function Parcours() {
  return (
    <div className="vtl">
      <h2 className="vtl__title">Mon parcours</h2>
      <p className="vtl__subtitle">Découvrez en plus sur moi !</p>

      <div className="vtl__line" aria-hidden="true" />

      <section className="vtl__list" aria-label="Ligne du temps">
        {ITEMS.map((item, i) => {
          const side = i % 2 === 0 ? 'left' : 'right';
          return (
            <article
              key={`${item.period}-${item.title}`}
              className={`vtl-item vtl-item--${side} vtl-item--${item.type}`}
            >
              <div className="vtl-item__dot" aria-hidden="true" />
              <div className="vtl-item__card">
                {item.image && (
                  <div className="vtl-item__media">
                    <img src={item.image} alt={item.alt} loading="lazy" />
                  </div>
                )}
                <div className="vtl-item__content">
                  <span className="vtl-item__period">{item.period}</span>
                  <h3 className="vtl-item__title">{item.title}</h3>
                  {item.org && <p className="vtl-item__org">{item.org}</p>}
                  <span
                    className={`vtl-item__badge vtl-item__badge--${item.type}`}
                  >
                    {item.type === 'formation' ? 'Formation' : 'Expérience'}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
