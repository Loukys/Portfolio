import { Link } from "react-router-dom";
import "./NotFound.scss";

// Page : affiche un message 404 et un lien de retour à l'accueil
export default function NotFound() {
  return (
    <main className="notfound">
      <div className="notfound__content">
        <h1 className="notfound__title">404 – Page non trouvée</h1>
        <Link to="/" className="notfound__button">
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
