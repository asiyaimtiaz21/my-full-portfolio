import { useState } from 'react';
import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';
import novaImage     from '../assets/images/nova-title.jpg';
import sableImage    from '../assets/images/sable-title.jpg';
import flowerImage   from '../assets/images/flower-title.jpg';
import profileImage  from '../assets/images/profile-image-1.jpg';
import photo1  from '../assets/images/photography/photo1.jpg';
import photo4  from '../assets/images/photography/photo4.jpg';
import photo8  from '../assets/images/photography/photo8.jpg';
import photo13 from '../assets/images/photography/photo13.jpg';
import photo18 from '../assets/images/photography/photo18.jpg';
import './Home.css';

const INDEX_PROJECTS = [
  {
    id: 1, num: '01',
    title: 'Reading Platform',
    category: 'Web Design',
    tagline: 'Full-stack capstone. Senior Showcase winner.',
    image: sableImage,
  },
  {
    id: 2, num: '02',
    title: 'Nova App Prototype',
    category: 'UX / UI Design',
    tagline: 'Navigation so intuitive it disappears.',
    image: novaImage,
  },
  {
    id: 4, num: '03',
    title: 'Flower Boutique',
    category: 'Web Design',
    tagline: 'Boutique identity, editorial detail.',
    image: flowerImage,
  },
];

const STRIP_PHOTOS = [photo1, photo4, photo8, photo13, photo18];

export default function Home() {
  const [previewSrc, setPreviewSrc] = useState(null);
  const [indexRef,   indexVisible]  = useInView();
  const [stripRef,   stripVisible]  = useInView();

  return (
    <main className="home">

      {/* ══════════════════════════════════════════════════════
          HERO
          Full-viewport grid. The type on the left IS the
          layout — two words at architectural scale that frame
          the project image on the right. The image fills the
          column top to bottom, spanning both grid rows.
      ══════════════════════════════════════════════════════ */}
      <section className="h-hero" aria-label="Introduction">

        {/* Left column — typography as structure */}
        <div className="h-hero-left">

          <p className="h-hero-index" aria-hidden="true">
            <span>Designing experiences that </span>
            <span className="h-hero-index-rule" aria-hidden="true" />
            <span>connect.</span>
          </p>

          <div
            className="h-tagline"
            aria-label="Web Designer, UI/UX and Graphic Design"
          >
            <span className="h-tagline-line h-tagline-line--1">Digital</span>
            <span className="h-tagline-line h-tagline-line--2">Designer.</span>
          </div>

          <p className="h-disciplines">
            <span>UI / UX</span>
            <span className="h-disc-dot" aria-hidden="true">·</span>
            <span>Graphic Design</span>
            <span className="h-disc-dot" aria-hidden="true">·</span>
            <span>Web Design</span>
            <span className="h-disc-dot" aria-hidden="true">·</span>
            <span>Photography</span>
          </p>

          <p className="h-hero-statement">
            Hi there! I am Asiya Imtiaz, a digital designer based in Central Florida with a background in Digital Media in web and interactive media. My focus is to create designs that are not only creative and immersive, but {' '}
            <em>meaningful</em> as well.
          </p>

        </div>

        {/* Right column — portrait introduction */}
        <div className="h-hero-portrait" aria-label="Portrait of Asiya Imtiaz">
          <div className="h-hero-portrait-ring">
            <img
              src={profileImage}
              alt="Asiya Imtiaz"
              className="h-hero-portrait-img"
            />
          </div>
          <p className="h-hero-portrait-name">Asiya Imtiaz</p>
        </div>

      

      </section>


      {/* ══════════════════════════════════════════════════════
          WORK INDEX
          An editorial list. Hover reveals a ghost of the
          project image behind the text — the work always
          wants to be seen, even in list form.
      ══════════════════════════════════════════════════════ */}
      <section className="h-index">

        {/* Ghost numeral — atmospheric depth behind the section */}
        <span className="h-index-ghost" aria-hidden="true"></span>

        <header className="h-index-head">
          <span className="eyebrow">Selected Work</span>
          <span className="h-index-total" aria-label="3 projects"></span>
        </header>

        <div className="h-index-body">

          <div
            ref={indexRef}
            className={`h-index-list reveal-stagger${indexVisible ? ' is-visible' : ''}`}
          >
            {INDEX_PROJECTS.map((p) => (
              <Link
                key={p.id}
                to={`/project/${p.id}`}
                className="h-index-item"
                onMouseEnter={() => setPreviewSrc(p.image)}
                onMouseLeave={() => setPreviewSrc(null)}
              >
                <span className="h-idx-num" aria-hidden="true">{p.num}</span>

                <div className="h-idx-body">
                  <span className="h-idx-title">{p.title}</span>
                  <span className="h-idx-tagline">{p.tagline}</span>
                </div>

                <span className="h-idx-cat">{p.category}</span>

                <span className="h-idx-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>

          {/* Preview image — right column, never overlaps the list */}
          <div
            className={`h-index-preview${previewSrc ? ' is-visible' : ''}`}
            aria-hidden="true"
            style={previewSrc ? { backgroundImage: `url(${previewSrc})` } : undefined}
          />

        </div>

      </section>


      {/* ══════════════════════════════════════════════════════
          PHOTO STRIP
          Five photographs, not labeled as photography.
          Present as evidence of how this designer sees —
          the eye behind the work.
      ══════════════════════════════════════════════════════ */}
      <section className="h-strip" ref={stripRef} aria-label="Photography">
        <div className={`h-strip-inner reveal${stripVisible ? ' is-visible' : ''}`}>

          <div className="h-strip-rail">
            {STRIP_PHOTOS.map((src, i) => (
              <div key={i} className={`h-strip-frame h-strip-frame--${i + 1}`}>
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>

          <footer className="h-strip-foot">
            <p className="h-strip-caption">
              Photography as a design practice.
            </p>
            <Link to="/photography" className="h-strip-link">
              View photography
              <span aria-hidden="true">→</span>
            </Link>
          </footer>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          CLOSE — the invitation to see everything
      ══════════════════════════════════════════════════════ */}
      <div className="h-close">
        <Link to="/projects" className="h-close-link">
          <span>All Projects</span>
          <span className="h-close-arrow" aria-hidden="true">→</span>
        </Link>
      </div>

    </main>
  );
}
