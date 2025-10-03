import { NavLink } from 'react-router-dom';
import './Nav.scss';

// Composant : barre de navigation principale
export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/Parcours" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
            Parcours
          </NavLink>
        </li>
        <li>
          <NavLink to="/CV" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} > 
            CV
          </NavLink>
        </li>
      </ul>
    </nav>
  );
} 