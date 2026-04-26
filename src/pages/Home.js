import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';
import './Home.css';

function Home() {
  const [aboutRef, aboutVisible] = useInView();

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Portfolio</p>
          <div className="hero-divider" />
          <h1 className="hero-name">Asiya Imtiaz</h1>
          <p className="hero-subtitle">
            Digital designer focused on UX and visual design — crafting clean, intentional experiences that look great and feel effortless to use.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-outline">Contact Me</Link>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div
          ref={aboutRef}
          className={`about-preview-content fade-section${aboutVisible ? ' is-visible' : ''}`}
        >
          <h2>About Me</h2>
          <p>
            I'm a designer and developer who loves turning ideas into clean, purposeful digital experiences. I care deeply about the details — from layout and typography to how something feels when you interact with it. When I'm not designing, I'm usually behind a camera or exploring something new.
          </p>
          <Link to="/projects" className="btn btn-primary">View Projects</Link>
        </div>
      </section>
    </>
  );
}

export default Home;
