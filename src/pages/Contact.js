import { useState } from 'react';
import useInView from '../hooks/useInView';
import './Contact.css';

const contactLinks = [
  {
    platform: 'Email',
    value: 'asiyaimtiaz03@email.com',
    icon: '✉',
    href: 'mailto:asiyaimtiaz03@email.com',
  },
  {
    platform: 'LinkedIn',
    value: 'linkedin.com/in/asiyaimtiaz',
    icon: 'in',
    href: 'https://linkedin.com/in/asiyaimtiaz',
  },
  {
    platform: 'GitHub',
    value: 'github.com/asiyaimtiaz21',
    icon: '◈',
    href: 'https://github.com/asiyaimtiaz21',
  },
];

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [bodyRef, bodyVisible] = useInView();

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up to a form service (e.g. Formspree, EmailJS) when ready.
    console.log('Form submitted:', form);
  };

  return (
    <div className="contact-page">
      <div className="contact-inner">
        <p className="contact-eyebrow">Get In Touch</p>
        <div className="contact-divider" />
        <h1>Let's Work Together</h1>
        <p className="contact-intro">
          Whether you have a project in mind, a question, or just want to say hello — my inbox is always open.
        </p>

        <div
          ref={bodyRef}
          className={`contact-body fade-section${bodyVisible ? ' is-visible' : ''}`}
        >

          {/* ── Contact info ── */}
          <div>
            <p className="contact-links-label">Find Me At</p>
            <div className="contact-links">
              {contactLinks.map(({ platform, value, icon, href }) => (
                <a
                  key={platform}
                  href={href}
                  className="contact-link"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span className="contact-link-icon">{icon}</span>
                  <span className="contact-link-body">
                    <span className="contact-link-platform">{platform}</span>
                    <span className="contact-link-value">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Form ── */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="form-submit">Send Message</button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;
