import './Section.scss';

export default function Section({
  id,
  title,
  subtitle,
  children,
  variant = 'default',
  container = true, 
  as: Tag = 'section',
}) {
  const labelId = id ? `${id}-title` : undefined;

  return (
    <Tag
      id={id}
      className={`section section--${variant}`}
      aria-labelledby={labelId}
    >
      <div className={container ? 'section__container container' : 'section__container'}>
        {title && (
          <header className="section__header">
            <h2 className="section__title" id={labelId}>{title}</h2>
            {subtitle && <p className="section__subtitle">{subtitle}</p>}
          </header>
        )}
        <div className="section__content">{children}</div>
      </div>
    </Tag>
  );
}
