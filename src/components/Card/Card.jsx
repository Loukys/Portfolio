import './Card.scss';

export default function Card({ image, title, subtitle, children, githubLink }) {
  return (
    <div className="card">
      {image && (
        <div className="card__image">
          <img src={image} alt={title || 'Image'} />
        </div>
      )}
      {title && <h3 className="card__title">{title}</h3>}
      {subtitle && <p className="card__subtitle">{subtitle}</p>}
      <div className="card__content">
        {children}
      </div>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
    </div>
  );
}
