import { useState, useEffect, useCallback } from 'react';
import useInView from '../hooks/useInView';
import './Photography.css';

import photo1  from '../assets/images/photography/photo1.jpg';
import photo2  from '../assets/images/photography/photo2.jpg';
import photo3  from '../assets/images/photography/photo3.jpg';
import photo4  from '../assets/images/photography/photo4.jpg';
import photo5  from '../assets/images/photography/photo5.jpg';
import photo6  from '../assets/images/photography/photo6.jpg';
import photo7  from '../assets/images/photography/photo7.jpg';
import photo8  from '../assets/images/photography/photo8.jpg';
import photo9  from '../assets/images/photography/photo9.jpg';
import photo10 from '../assets/images/photography/photo10.jpg';
import photo11 from '../assets/images/photography/photo11.jpg';
import photo12 from '../assets/images/photography/photo12.jpg';
import photo13 from '../assets/images/photography/photo13.jpg';
import photo14 from '../assets/images/photography/photo14.jpg';
import photo15 from '../assets/images/photography/photo15.jpg';
import photo16 from '../assets/images/photography/photo16.jpg';
import photo17 from '../assets/images/photography/photo17.jpg';
import photo18 from '../assets/images/photography/photo18.jpg';
import photo19 from '../assets/images/photography/photo19.jpg';
import photo20 from '../assets/images/photography/photo20.jpg';

const photos = [
  { id: 1,  src: photo1  },
  { id: 2,  src: photo2  },
  { id: 3,  src: photo3  },
  { id: 4,  src: photo4  },
  { id: 5,  src: photo5  },
  { id: 6,  src: photo6  },
  { id: 7,  src: photo7  },
  { id: 8,  src: photo8  },
  { id: 9,  src: photo9  },
  { id: 10, src: photo10 },
  { id: 11, src: photo11 },
  { id: 12, src: photo12 },
  { id: 13, src: photo13 },
  { id: 14, src: photo14 },
  { id: 15, src: photo15 },
  { id: 16, src: photo16 },
  { id: 17, src: photo17 },
  { id: 18, src: photo18 },
  { id: 19, src: photo19 },
  { id: 20, src: photo20 },
];

function Photography() {
  const [active, setActive] = useState(null);
  const [gridRef, gridVisible] = useInView();

  const close = useCallback(() => setActive(null), []);
  const prev  = useCallback(() => setActive(i => (i - 1 + photos.length) % photos.length), []);
  const next  = useCallback(() => setActive(i => (i + 1) % photos.length), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [active]);

  return (
    <div className="photography-page">

      {/* ── Header ── */}
      <header className="photography-header">
        <span className="eyebrow">Visual Work</span>
        <h1 className="photography-heading">Photography</h1>
        <p className="photography-intro">
          Photography is how I slow down and pay attention. A collection of my favorite works; stories and moments captured along the way.
        </p>

        <div className="photography-portfolio-cta">
          <div className="photography-cta-text">
            <span className="eyebrow">Full Portfolio</span>
            <p>
              Visit <strong>Imtiaz Imagez</strong> to browse my complete photography portfolio — portraits, landscapes, and editorial work.
            </p>
          </div>
          <a
            href="https://imtiazimagez.myportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="photography-portfolio-btn"
          >
            Visit Imtiaz Imagez
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      {/* ── Grid ── */}
      <div
        ref={gridRef}
        className={`photography-grid reveal${gridVisible ? ' is-visible' : ''}`}
      >
        {photos.map(({ id, src }, index) => (
          <div className="photo-item" key={id} onClick={() => setActive(index)}>
            <img src={src} alt="" loading="lazy" />
            <div className="photo-overlay">
              <span className="photo-overlay-expand" aria-hidden="true">+</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {active !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lightbox-close" onClick={close} aria-label="Close">✕</button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >‹</button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[active].src}
              alt=""
              className="lightbox-img"
            />
            <p className="lightbox-counter">
              {active + 1} / {photos.length}
            </p>
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >›</button>
        </div>
      )}
    </div>
  );
}

export default Photography;
