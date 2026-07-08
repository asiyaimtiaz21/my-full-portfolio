import { useState } from 'react';
import useInView from '../hooks/useInView';
import './Contact.css';

const contactLinks = [
  {
    platform: 'Email',
    value: 'asiyaimtiaz03@gmail.com',
    href: 'mailto:asiyaimtiaz03@gmail.com',
  },
  {
    platform: 'LinkedIn',
    value: 'linkedin.com/in/asiyaimtiaz',
    href: 'https://linkedin.com/in/asiyaimtiaz',
  },
  {
    platform: 'GitHub',
    value: 'github.com/asiyaimtiaz21',
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
    console.log('Form submitted:', form);
  };

  return (
    <div className="contact-page">

      {/* ── Header ── */}
      <header className="contact-header">
        <span className="eyebrow">Get In Touch</span>
        <h1 className="contact-heading">
          Let's work<br />together
        </h1>
        <p className="contact-intro">
          Send me a message! Whether you have a project in mind, a question, or just want to say hello, my inbox is always open.
        </p>
      </header>

      {/* ── Body ── */}
      <div
        ref={bodyRef}
        className={`contact-body reveal${bodyVisible ? ' is-visible' : ''}`}
      >

        {/* ── Contact links ── */}
        <div className="contact-links-col">
          <span className="eyebrow contact-links-eyebrow">Find Me At</span>
          <div className="contact-links">
            {contactLinks.map(({ platform, value, href }) => (
              <a
                key={platform}
                href={href}
                className="contact-link"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="contact-link-body">
                  <span className="contact-link-platform">{platform}</span>
                  <span className="contact-link-value">{value}</span>
                </div>
                <span className="contact-link-arrow" aria-hidden="true">→</span>
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
          <button type="submit" className="form-submit">
            Send Message
            <span aria-hidden="true">→</span>
          </button>
        </form>

      </div>
    </div>
  );
}

export default Contact;
