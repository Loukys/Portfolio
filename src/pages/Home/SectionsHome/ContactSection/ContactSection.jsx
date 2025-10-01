// src/components/ContactSection/ContactSection.jsx
import { useState } from 'react';
import emailjs from '@emailjs/browser';

import './ContactSection.scss';
import Section from '@/components/Section/Section.jsx';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', text: '' });

    // Anti-spam: champ caché (robot)
    const honey = e.currentTarget.querySelector('input[name="company"]')?.value;
    if (honey) return;

    setSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
          page_url: window.location.href,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      // Vide le champs en cas de succès
      setForm({ name: '', email: '', message: '' });
      setStatus({ type: 'success', text: '✅ Message envoyé, merci !' });
    } catch (err) {
      console.error(err);
      setStatus({
        type: 'error',
        text:
          "❌ L'envoi a échoué. Réessayez plus tard ou écrivez-moi à : " +
          'louailguillaume77400@gmail.com',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contact" title="Me contacter" subtitle="Discutons de vos besoins">
      <form className="contact-form card" onSubmit={handleSubmit} noValidate>
        <div className="contact-form__fields">
          <input
            type="text"
            name="company"
            tabIndex="-1"
            autoComplete="off"
            style={{ display: 'none' }}
            onChange={() => {}}
          />

          <label htmlFor="name">Nom</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            value={form.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="vous@exemple.com"
            required
            value={form.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Votre message…"
            required
            value={form.message}
            onChange={handleChange}
          />

          <button className="btn-primary" type="submit" disabled={sending}>
            {sending ? 'Envoi…' : 'Envoyer'}
          </button>

          {status.text && (
            <p role="status" className={`contact-form__status contact-form__status--${status.type}`}>
              {status.text}
            </p>
          )}

          {/* Fallback mailto si besoin */}
          <a
            href={`mailto:louailguillaume77400@gmail.com?subject=Contact%20Portfolio&body=Nom:%20${encodeURIComponent(
              form.name
            )}%0AEmail:%20${encodeURIComponent(form.email)}%0AMessage:%0A${encodeURIComponent(
              form.message
            )}`}
            className="contact-form__mailto"
          >
            Ou m’écrire via votre messagerie
          </a>
        </div>
      </form>
    </Section>
  );
}
