import './Card.scss';

export default function Card({
  title,
  subtitle,
  children,
  as: Tag = 'section',
  elevated = true,
  onClick,
}) {
  return (
    <Tag className={`card ${elevated ? 'card--elevated' : ''}`} onClick={onClick}>
      {title && <h3 className="card__title">{title}</h3>}
      {subtitle && <p className="card__subtitle">{subtitle}</p>}
      <div className="card__content">{children}</div>
    </Tag>
  );
}
