import { useState, useEffect, useCallback } from 'react';
import useInView from '../hooks/useInView';
import './Photography.css';

const photos = [
  { id: 1, src: 'https://picsum.photos/seed/golden/600/750',    alt: 'Golden hour',    caption: 'Golden Hour' },
  { id: 2, src: 'https://picsum.photos/seed/urban/600/800',     alt: 'Urban geometry', caption: 'Urban'       },
  { id: 3, src: 'https://picsum.photos/seed/still/600/600',     alt: 'Still life',     caption: 'Still Life'  },
  { id: 4, src: 'https://picsum.photos/seed/land/800/450',      alt: 'Landscape',      caption: 'Landscape'   },
  { id: 5, src: 'https://picsum.photos/seed/portrt/600/900',    alt: 'Portrait',       caption: 'Portrait'    },
  { id: 6, src: 'https://picsum.photos/seed/detail/600/450',    alt: 'Details',        caption: 'Details'     },
  { id: 7, src: 'https://picsum.photos/seed/nature7/600/800',   alt: 'Nature',         caption: 'Nature'      },
  { id: 8, src: 'https://picsum.photos/seed/arch8/600/900',     alt: 'Architecture',   caption: 'Architecture'},
  { id: 9, src: 'https://picsum.photos/seed/street9/600/750',   alt: 'Street',         caption: 'Street'      },
];

function Photography() {
  const [active, setActive] = useState(null);
  const [gridRef, gridVisible] = useInView();

  const close = useCallback(() => setActive(null), []);

  const prev = useCallback(() =>
    setActive(i => (i - 1 + photos.length) % photos.length), []);

  const next = useCallback(() =>
    setActive(i => (i + 1) % photos.length), []);

  // Keyboard navigation
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

  // Prevent body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [active]);

  return (
    <div className="photography-page">
      <div className="photography-inner">
        <p className="photography-eyebrow">Visual Work</p>
        <div className="photography-divider" />
        <h1>Photography</h1>
        <p className="photography-intro">
          Photography is how I slow down and pay attention. A collection of moments, textures, and light captured along the way.
        </p>

        {/* ── Portfolio CTA ── */}
        <div className="photography-portfolio-cta">
          <div className="photography-portfolio-cta-text">
            <p className="photography-portfolio-cta-label">Full Portfolio</p>
            <p className="photography-portfolio-cta-desc">
              These are placeholder images. Visit <strong>Imtiaz Imagez</strong> to browse my complete photography portfolio — including portraits, landscapes, and editorial work.
            </p>
          </div>
          <a
            href="https://imtiazimagez.myportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="photography-portfolio-btn"
          >
            Visit Imtiaz Imagez ↗
          </a>
        </div>

        <div
          ref={gridRef}
          className={`photography-grid fade-section${gridVisible ? ' is-visible' : ''}`}
        >
          {photos.map(({ id, src, alt, caption }, index) => (
            <div className="photo-item" key={id} onClick={() => setActive(index)}>
              <img src={src} alt={alt} />
              <div className="photo-overlay">
                <span className="photo-overlay-icon">+</span>
                <span className="photo-caption">{caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
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
              alt={photos[active].alt}
              className="lightbox-img"
            />
            <p className="lightbox-caption">{photos[active].caption}</p>
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
