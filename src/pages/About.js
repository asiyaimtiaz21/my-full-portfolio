import useInView from '../hooks/useInView';
import './About.css';

const focusAreas = [
  {
    icon: '◈',
    title: 'UX / UI Design',
    description: 'Designing interfaces that feel intuitive — from wireframes and user flows to polished, accessible final screens.',
  },
  {
    icon: '◻',
    title: 'Web Design',
    description: 'Building clean, responsive websites that balance visual craft with performance and usability.',
  },
  {
    icon: '◇',
    title: 'Graphic Design',
    description: 'Crafting visual identities, layouts, and branded assets with a sharp eye for detail and composition.',
  },
];

const values = [
  { number: '3+', label: 'Years designing' },
  { number: '15+', label: 'Projects completed' },
  { number: '∞',  label: 'Curiosity' },
];

function About() {
  const [focusRef, focusVisible] = useInView();
  const [valuesRef, valuesVisible] = useInView();

  return (
    <div className="about-page">
      <div className="about-inner">

        {/* ── Intro ── */}
        <section className="about-intro">
          <p className="about-eyebrow">About Me</p>
          <div className="about-divider" />
          <h1>Design with intention.<br />Build with care.</h1>
          <p>
            Hi, I'm Asiya — a digital media graduate specializing in web and interactive design, with a strong passion for creating visually engaging and user-centered experiences. My work focuses on blending creativity with functionality — designing interfaces that are not only visually appealing but also intuitive and effective.
          </p>
          <p>
            With experience in UX/UI design, graphic design, and content strategy, I enjoy bringing ideas to life through thoughtful design and storytelling.
          </p>
        </section>

        <hr className="about-rule" />

        {/* ── Design Focus ── */}
        <section>
          <p className="about-focus-label">What I Do</p>
          <div
            ref={focusRef}
            className={`about-focus-grid fade-section stagger${focusVisible ? ' is-visible' : ''}`}
          >
            {focusAreas.map(({ icon, title, description }) => (
              <div className="focus-card" key={title}>
                <span className="focus-card-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Values strip ── */}
        <div
          ref={valuesRef}
          className={`about-values fade-section${valuesVisible ? ' is-visible' : ''}`}
        >
          {values.map(({ number, label }) => (
            <div className="about-value" key={label}>
              <span className="about-value-number">{number}</span>
              <span className="about-value-label">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default About;
