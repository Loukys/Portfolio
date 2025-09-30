import './ProjetCard.scss';

export default function ProjetCard({ image, title, subtitle, children, githubLink }) {
  return (
    <div className="ProjetCard">
      {image && (
        <div className="ProjetCard__image">
          <img src={image} alt={title || 'Image'} />
        </div>
      )}
      {title && <h3 className="ProjetCard__title">{title}</h3>}
      {subtitle && <p className="ProjetCard__subtitle">{subtitle}</p>}
      <div className="ProjetCard__content">
        {children}
      </div>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
    </div>
  );
}