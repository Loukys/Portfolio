import './styles/main.scss';
import Card from './components/Card/Card';

export default function App() {
  return (
    <main className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <section style={{ marginBottom: '32px' }}>
        <h1>Mon Portfolio</h1>
        <p className="text-muted">
          Bienvenue — voici une démo de <code>&lt;Card /&gt;</code> avec les variables et mixins.
        </p>
      </section>

      <section className="grid" style={{
        display: 'grid',
        gap: '24px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))'
      }}>
        <Card title="Projet A" subtitle="React • Sass">
          <p>
            Un projet front moderne. <a href="#">Voir le repo</a>.
          </p>
        </Card>

        <Card title="Projet B" subtitle="Node • API" elevated={false}>
          <p>
            Backend minimal pour formulaire de contact.
          </p>
        </Card>

        <Card title="À propos" subtitle="Qui suis-je ?">
          <p>
            Développeur front, passionné par l’UX et les interfaces propres ✨
          </p>
        </Card>
      </section>

      <section style={{ marginTop: '32px' }}>
        <button className="btn-primary">Me contacter</button>
      </section>
    </main>
  );
}
