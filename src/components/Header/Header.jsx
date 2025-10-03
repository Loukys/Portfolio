import './Header.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Nav from '@/components/Nav/Nav.jsx';
import Photo_profile from '@/assets/images/Photo_profile.webp';

// Composant : en-tête de la page (logo, photo, réseaux, menu)
export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo gauche → clique = retour accueil */}
        <h1 className="header__logo">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
            Guillaume LOUAIL
          </Link>
        </h1>

        {/* Bloc photo + réseaux */}
        <div className="header__profile">
          <a
            href="https://github.com/Loukys"
            target="_blank"
            rel="noopener noreferrer"
            className="header__icon"
            aria-label="Profil GitHub de Guillaume Louail"
          >
            <FaGithub />
          </a>

          {/* Photo cliquable → retour accueil */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
            <img
              src={Photo_profile}
              alt="Photo de profil Guillaume LOUAIL"
              className="header__photo"
              aria-label="Profil de profil de Guillaume Louail"
            />
          </Link>

          <a
            href="https://www.linkedin.com/in/guillaume-louail-01537a109/"
            target="_blank"
            rel="noopener noreferrer"
            className="header__icon"
            aria-label="Profil LinkedIn de Guillaume Louail"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Menu */}
        <Nav />
      </div>
    </header>
  );
}
