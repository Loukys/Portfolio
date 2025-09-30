import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo / Nom */}
        <div className="footer__brand">
          <h2>Guillaume LOUAIL</h2>
          <p>Développeur Web • Frontend</p>
        </div>

        {/* Liens internes */}
        <ul className="footer__links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/Parcours">Parcours</Link></li>
          <li><Link to="/CV">CV</Link></li>
        </ul>

        {/* Réseaux sociaux */}
        <div className="footer__socials">
          <a href="https://github.com/Loukys" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/guillaume-louail-01537a109/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {currentYear} — Guillaume LOUAIL — Tous droits réservés.</p>
      </div>
    </footer>
  );
}
