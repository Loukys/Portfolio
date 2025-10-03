import './CV.scss';
import MonCV from '@/assets/cv/mon-cv.pdf';

// Page : affiche le CV avec options de téléchargement, impression et envoi par mail
export default function CV() {
  const handlePrint = () => {
    window.print();
  };

  const handleMail = () => {
    window.location.href = "mailto:ton.email@exemple.com?subject=Mon CV&body=Bonjour, voici mon CV.";
  };

  return (
    <div className="cv-page">
      <h2 className="cv-page__title">Mon CV</h2>

      <div className="cv-page__viewer">
        <iframe src={MonCV} title="CV Guillaume Louail" />
      </div>

      <div className="cv-page__actions">
        <a href={MonCV} download className="btn btn-primary">📥 Télécharger</a>
        <button onClick={handlePrint} className="btn btn-primary">🖨️ Imprimer</button>
        <button onClick={handleMail} className="btn btn-primary">✉️ Envoyer par mail</button>
      </div>
    </div>
  );
}
