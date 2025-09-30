import './SkillCard.scss';

export default function SkillCard({ icon: Icon, name, color }) {
  return (
    <div className="skill-card">
      <Icon className="skill-card__icon" aria-hidden="true" color={color} />
      <span className="skill-card__name">{name}</span>
    </div>
  );
}
