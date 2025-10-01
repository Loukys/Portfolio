import './Parcours.scss';

// NOTE : ordre = du plus récent (en haut) au plus ancien (en bas)
const ITEMS = [
  // — FORMATION DEV
  {
    type: 'formation',
    period: '05/2025 → 10/2025',
    title: 'Développeur Web',
    org: 'OpenClassrooms',
    image: '/imgParcours/Formation_Developpeur_Web_OpenClassroom.png',
  },

  // — EXPÉRIENCES
  {
    type: 'experience',
    period: '03/2024 → 08/2024',
    title: 'Coordinateur Amélioration des Procédés (CDI)',
    org: 'Laboratoires Prodène Klint – GOJO',
    image: '/imgParcours/Coordinateur_Amélioration_des_Procédés.png',
  },
  {
    type: 'experience',
    period: '10/2020 → 02/2024',
    title: 'Adjoint Responsable Qualité (CDI)',
    org: 'Laboratoires Prodène Klint – GOJO',
    image: '/imgParcours/Adjoint_Responsable_Qualité.png',
  },
  {
    type: 'experience',
    period: '07/2020 → 09/2020',
    title: 'Préventeur Hygiène & Sécurité (CDD)',
    org: 'COORDEF',
    image: '/imgParcours/Préventeur_Hygiène_Sécurité.png',
  },
  {
    type: 'experience',
    period: '10/2017 → 10/2019',
    title: 'Assistant Qualité (CDI)',
    org: 'COOKIE CREATIONS',
    image: '/imgParcours/Assistant_Qualité.png',
  },
  {
    type: 'experience',
    period: '09/2013 → 09/2016',
    title: 'Assistant QHSE (Alternance)',
    org: 'Compagnie Paul Prédault',
    image: '/imgParcours/Assistant_QHSE.png',
  },

  // — FORMATIONS académiques
  {
    type: 'formation',
    period: '2017',
    title: 'Formation Anglais',
    org: 'ESL – St Giles, Eastbourne (UK)',
    image: '/imgParcours/Formation_Anglais.png',
  },
  {
    type: 'formation',
    period: '2016',
    title: 'Master MQSE (alternance)',
    org: 'UPEM, Sens (89)',
    image: '/imgParcours/Master_MQSE.png',
  },
  {
    type: 'formation',
    period: '2014',
    title: 'Licence QSE (apprentissage)',
    org: 'UPEM & CFA Descartes (77)',
    image: '/imgParcours/Licence_QSE.png',
  },
  {
    type: 'formation',
    period: '2013',
    title: 'BTS QIAB',
    org: 'Lycée Paul Éluard (93)',
    image: '/imgParcours/BTS_QIAB.png',
  },
  {
    type: 'formation',
    period: '2011',
    title: 'Bac STL',
    org: 'Lycée Émilie Brontë (77)',
    image: '/imgParcours/Bac_STL.png',
  },
];

export default function Parcours() {
  return (
    <main className="vtl">
      <h1 className="vtl__title">Mon parcours</h1>
      <p className="vtl__subtitle">
        Découvrez en plus sur moi !
      </p>

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
                    <img src={item.image} alt="" loading="lazy" />
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
    </main>
  );
}
