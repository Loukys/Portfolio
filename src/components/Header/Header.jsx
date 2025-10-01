import './Header.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Nav from '@/components/Nav/Nav.jsx';
import Photo_profile from '@/assets/images/Photo_profile.png';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo gauche → clique = retour accueil */}
        <Link to="/" className="header__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
          Guillaume LOUAIL
        </Link>

        {/* Bloc photo + réseaux */}
        <div className="header__profile">
          <a
            href="https://github.com/Loukys"
            target="_blank"
            rel="noopener noreferrer"
            className="header__icon"
          >
            <FaGithub />
          </a>

          {/* Photo cliquable → retour accueil */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
            <img
              src={Photo_profile}
              alt="Photo de profil Guillaume LOUAIL"
              className="header__photo"
            />
          </Link>

          <a
            href="https://www.linkedin.com/in/guillaume-louail-01537a109/"
            target="_blank"
            rel="noopener noreferrer"
            className="header__icon"
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
