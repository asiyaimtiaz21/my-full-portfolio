import profileImage2 from '../assets/images/profile-image-2.jpg';
import useInView from '../hooks/useInView';
import './About.css';

const focusAreas = [
  {
    icon: '◈',
    title: 'UX / UI Design',
    description: 'Creating digital experiences centered around the needs, behaviors, and goals of users. I focus on understanding how people interact with products through research, user flows, wireframes, and prototypes to design interfaces that are intuitive, accessible, and enjoyable to use.',
  },
  {
    icon: '◻',
    title: 'Web Design',
    description: 'Designing and developing responsive websites that bring ideas to life through structure, layout, and functionality. I focus on creating seamless digital experiences by combining visual design with usability, ensuring websites are engaging, easy to navigate, and optimized across different devices.',
  },
  {
    icon: '◇',
    title: 'Graphic Design',
    description: 'Creating visual solutions that communicate messages, build brand identities, and capture attention. I focus on the use of typography, color, composition, and visual storytelling to create designs that are memorable, consistent, and impactful across digital and print platforms.',
  },
];

const values = [
  { number: '5+', label: 'Years designing' },
  { number: '15+', label: 'Projects completed' },
  { number: '∞',  label: 'Curiosity' },
];

function About() {
  const [focusRef, focusVisible] = useInView();
  const [valuesRef, valuesVisible] = useInView();

  return (
    <div className="about-page">

      {/* ── Intro — image left, text right ── */}
      <section className="about-intro">

        <div className="about-intro-image">
          <img src={profileImage2} alt="Asiya Imtiaz" />
        </div>

        <div className="about-intro-text">
          <span className="eyebrow">About</span>
          <h1 className="about-heading">
            The story behind<br />the designer
          </h1>
          <p>
            I'm Asiya, a designer driven by curiosity, creativity, and a passion for creating meaningful digital experiences.
          </p>
          <p>
            I graduated from the University of Central Florida with a Bachelor's degree in Digital Media, specializing in Web &amp; Interactive Media, along with a minor in Communications. Over the past few years, I've built experience in UI/UX design, web design, branding, graphic design, and front-end development — combining creativity with strategy to create solutions that are both functional and visually engaging.
          </p>
          <p>
            What drew me to this field is the opportunity to solve problems through design. I enjoy taking complex ideas and transforming them into intuitive, user-centered experiences that not only look great but also make people's lives a little easier.
          </p>
          <p>
            Outside of design, photography has strengthened my eye for detail, composition, and storytelling; skills that continue to shape the way I approach every project.
          </p>
        </div>

      </section>

      {/* ── Design Focus ── */}
      <section className="about-focus-section">
        <span className="eyebrow">What I Do</span>
        <div
          ref={focusRef}
          className={`about-focus-grid reveal${focusVisible ? ' is-visible' : ''}`}
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
        className={`about-values reveal${valuesVisible ? ' is-visible' : ''}`}
      >
        {values.map(({ number, label }) => (
          <div className="about-value" key={label}>
            <span className="about-value-number">{number}</span>
            <span className="about-value-label">{label}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default About;
