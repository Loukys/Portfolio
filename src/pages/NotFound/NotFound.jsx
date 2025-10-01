import { Link } from "react-router-dom";
import "./NotFound.scss";

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
