import { NavLink } from 'react-router-dom';
import './Header.scss';

import Photo_profile from '../../images/Photo_profile.png';

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <h1 className="header__logo">Mon Portfolio</h1>
        <img src={Photo_profile} alt="Photo de profile Guillaume LOUAIL" className="photo-profile-header" />
        <ul className="header__menu">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/Parcours" className={({ isActive }) => isActive ? 'active' : ''}>
              Parcours
            </NavLink>
          </li>
          <li>
            <NavLink to="/CV" className={({ isActive }) => isActive ? 'active' : ''}>
              CV
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
