import { NavLink } from 'react-router-dom';
import './Nav.scss';

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => window.scrollTo(0, 0)}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/Parcours" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => window.scrollTo(0, 0)}>
            Parcours
          </NavLink>
        </li>
        <li>
          <NavLink to="/CV" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => window.scrollTo(0, 0)}> 
            CV
          </NavLink>
        </li>
      </ul>
    </nav>
  );
} 