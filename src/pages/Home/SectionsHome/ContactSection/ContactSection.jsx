import './ContactSection.scss';
import Section from '@/components/Section/Section.jsx';

export default function ContactSection() {
  return (
    <Section
      id="contact"
      title="Me contacter"
      subtitle="Discutons de vos besoins"
    >
      <form
        className="contact-form card"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Message envoyé !');
        }}
      >
        <div className="contact-form__fields">
          <label>
            Nom
            <input 
              type="text" 
              name="name" 
              placeholder="Votre nom" 
              required />
          </label>
          <label>
            Email
            <input 
              type="email" 
              name="email" 
              placeholder="vous@exemple.com" 
              required />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Votre message…"
              required/>
          </label>
          <button className="btn-primary" type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </Section>
  );
}
