import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useInView from '../hooks/useInView';
import projects from '../data/projects';
import './ProjectDetail.css';

// ── Lightbox ───────────────────────────────────────────────────
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const img = images[index];
  const multi = images.length > 1;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowLeft')  onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lb-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Image preview">
      <button className="lb-close" onClick={onClose} aria-label="Close preview">×</button>

      {multi && (
        <button className="lb-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous image">‹</button>
      )}

      <div
        className="lb-content"
        onClick={(e) => e.stopPropagation()}
        style={img.bg ? { backgroundColor: img.bg } : undefined}
      >
        <img src={img.src} alt={img.label || ''} className="lb-img" />
        {img.label && <p className="lb-caption">{img.label}</p>}
      </div>

      {multi && (
        <button className="lb-next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next image">›</button>
      )}

      {multi && (
        <span className="lb-counter" aria-live="polite">{index + 1} / {images.length}</span>
      )}
    </div>
  );
}

const CATEGORY_LABELS = {
  'web-design':     'Web Design',
  'ux-ui':          'UX / UI Design',
  'graphic-design': 'Graphic Design',
};

// ── Rich case study — editorial presentation layout ────────────
// Renders when project has problem + insights + keyDecisions fields.
function RichCaseStudy({ project }) {
  const {
    title, category, image, tools,
    role, year, duration, overview, problem,
    insights, process, keyDecisions, retrospective,
    figmaLink, liveLink, presentationLink,
    documents, ctaHeading, ctaSub,
  } = project;

  const categoryLabel = CATEGORY_LABELS[category] || category;
  const externalLink  = liveLink  ?? figmaLink  ?? null;
  const externalLabel = liveLink  ? 'View Live Site' : 'View Prototype';
  const hasCTA = externalLink || presentationLink || documents?.length;

  // One ref per content block — staggered scroll reveals
  const [problemRef,   problemVisible]   = useInView();
  const [insightsRef,  insightsVisible]  = useInView();
  const [processRef,   processVisible]   = useInView();
  const [decisionsRef, decisionsVisible] = useInView();
  const [ctaRef,       ctaVisible]       = useInView();
  const [reflectionRef, reflectionVisible] = useInView();

  return (
    <div className="cs-page">

      {/* ══ Hero — full-bleed image, title anchored at bottom ══ */}
      <div className="cs-hero">
        <img src={image} alt={title} className="cs-hero-img" />
        <div className="cs-hero-scrim" aria-hidden="true" />

        <Link to="/projects" className="cs-nav-back">← Work</Link>

        <div className="cs-hero-text">
          <span className="cs-hero-eyebrow">{categoryLabel}</span>
          <h1 className="cs-hero-title">{title}</h1>
        </div>
      </div>

      {/* ══ Meta strip — film credit block ══ */}
      <div className="cs-meta-strip">
        <div className="cs-meta-inner">
          {[
            { label: 'Discipline', value: categoryLabel },
            role     && { label: 'Role',     value: role },
            year     && { label: 'Year',     value: year },
            duration && { label: 'Duration', value: duration },
            tools?.length && { label: 'Tools', value: tools.join(', ') },
          ].filter(Boolean).map(({ label, value }) => (
            <div className="cs-meta-item" key={label}>
              <span className="cs-meta-label">{label}</span>
              <span className="cs-meta-value">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══ Overview ══ */}
      {overview && (
        <section className="cs-section">
          <div className="cs-container">
            <p className="cs-overview-text">{overview}</p>
          </div>
        </section>
      )}

      {/* ══ The Problem — asymmetric split ══ */}
      {problem && (
        <section className="cs-section cs-band">
          <div className="cs-container">
            <div className="cs-problem-grid">
              <div className="cs-problem-label-col">
                <span className="eyebrow">The Problem</span>
              </div>
              <p
                ref={problemRef}
                className={`cs-problem-text reveal${problemVisible ? ' is-visible' : ''}`}
              >
                {problem}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ══ Research / Insights — three numbered cards ══ */}
      {insights && (
        <section className="cs-section">
          <div className="cs-container">
            <span className="eyebrow cs-section-eyebrow">Research</span>
            <div
              ref={insightsRef}
              className={`cs-insights-grid reveal-stagger${insightsVisible ? ' is-visible' : ''}`}
            >
              {insights.map(({ number, label, body }) => (
                <div className="cs-insight" key={number}>
                  <span className="cs-insight-number" aria-hidden="true">{number}</span>
                  <h3 className="cs-insight-label">{label}</h3>
                  <p className="cs-insight-body">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ Approach / Process — tabular rows ══ */}
      {process && (
        <section className="cs-section cs-band">
          <div className="cs-container">
            <span className="eyebrow cs-section-eyebrow">Approach</span>
            <div
              ref={processRef}
              className={`cs-steps reveal-stagger${processVisible ? ' is-visible' : ''}`}
            >
              {process.map(({ step, detail }, i) => (
                <div className="cs-step" key={step}>
                  <span className="cs-step-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="cs-step-name">{step}</h3>
                  <p className="cs-step-detail">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ Key Decisions — before / after format ══ */}
      {keyDecisions && (
        <section className="cs-section">
          <div className="cs-container">
            <span className="eyebrow cs-section-eyebrow">Key Decisions</span>
            <div
              ref={decisionsRef}
              className={`cs-decisions reveal-stagger${decisionsVisible ? ' is-visible' : ''}`}
            >
              {keyDecisions.map(({ versus, decision, annotation }, i) => (
                <div className="cs-decision" key={i}>
                  <div className="cs-decision-head">
                    <h3 className="cs-decision-title">{decision}</h3>
                    {versus && (
                      <span className="cs-decision-versus">vs. {versus}</span>
                    )}
                  </div>
                  <p className="cs-decision-annotation">{annotation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ CTA — prototype link and/or document downloads ══ */}
      {hasCTA && (
        <section className="cs-section cs-band cs-cta-section">
          <div
            ref={ctaRef}
            className={`cs-container cs-cta-inner reveal${ctaVisible ? ' is-visible' : ''}`}
          >
            <p className="cs-cta-heading">
              {ctaHeading ?? 'The prototype is interactive.'}
            </p>
            <p className="cs-cta-sub">
              {ctaSub ?? 'See the flows in motion.'}
            </p>
            <div className="cs-cta-actions">
              {externalLink && (
                <a
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  {externalLabel} ↗
                </a>
              )}
              {presentationLink && (
                <a
                  href={presentationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Case Study ↗
                </a>
              )}
              {documents?.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ Reflection ══ */}
      {retrospective && (
        <section className="cs-section">
          <div className="cs-container">
            <span className="eyebrow cs-section-eyebrow">Reflection</span>
            <blockquote
              ref={reflectionRef}
              className={`cs-reflection reveal${reflectionVisible ? ' is-visible' : ''}`}
            >
              {retrospective}
            </blockquote>
          </div>
        </section>
      )}

      {/* ══ Footer link ══ */}
      <div className="cs-footer">
        <Link to="/projects" className="cs-footer-link">
          <span>View all projects</span>
          <span className="cs-footer-arrow" aria-hidden="true">→</span>
        </Link>
      </div>

    </div>
  );
}

// ── Basic detail — cleaner fallback for other projects ─────────
function BasicDetail({ project }) {
  const {
    title, category, image, tools, description,
    process, retrospective, liveLink, figmaLink, githubLink, gallery, logoVariants,
  } = project;

  const categoryLabel = CATEGORY_LABELS[category] || category;
  const externalLink  = liveLink  ?? figmaLink  ?? null;
  const externalLabel = liveLink  ? 'View Live Site ↗' : figmaLink ? 'View Prototype ↗' : null;

  const [processRef,   processVisible]   = useInView();
  const [reflectionRef, reflectionVisible] = useInView();

  // Lightbox state
  const [lbIndex, setLbIndex] = useState(null);
  const lbImages = logoVariants
    ? logoVariants.map(({ src, label, bg }) => ({ src, label, bg }))
    : gallery
    ? gallery.map(src => ({ src, label: null, bg: null }))
    : [];
  const closeLb = () => setLbIndex(null);
  const prevLb  = () => setLbIndex(i => (i - 1 + lbImages.length) % lbImages.length);
  const nextLb  = () => setLbIndex(i => (i + 1) % lbImages.length);

  return (
    <div className="cs-page">

      {/* Header */}
      <header className="cs-basic-header">
        <div className="cs-container">
          <Link to="/projects" className="cs-basic-back">← Work</Link>
          <span className="eyebrow cs-basic-eyebrow">{categoryLabel}</span>
          <h1 className="cs-basic-title">{title}</h1>

          {(externalLink || githubLink) && (
            <div className="cs-basic-links">
              {externalLink && (
                <a href={externalLink} target="_blank" rel="noopener noreferrer"
                   className="btn btn-primary">
                  {externalLabel}
                </a>
              )}
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer"
                   className="btn btn-outline">
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Hero image — gallery grid for image series, logo showcase for logo projects, or single image */}
      {logoVariants ? (
        <section className="cs-section cs-logo-showcase-section">
          <div className="cs-container">
            <span className="eyebrow cs-section-eyebrow">Logo Variants · click to preview</span>
            <div className="cs-logo-showcase">
              {logoVariants.map(({ src, label, bg }, i) => (
                <button
                  key={label}
                  className="cs-logo-swatch"
                  style={{ backgroundColor: bg }}
                  onClick={() => setLbIndex(i)}
                  aria-label={`Preview ${label} variant`}
                >
                  <div className="cs-logo-img-wrap">
                    <img src={src} alt={`${label} version`} loading="lazy" />
                  </div>
                  <span className="cs-logo-swatch-label">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      ) : gallery ? (
        <section className="cs-section cs-gallery-section">
          <div className="cs-container">
            <span className="eyebrow cs-section-eyebrow">
              Cover Series · {gallery.length} covers · click to preview
            </span>
            <div className="cs-gallery-grid">
              {gallery.map((src, i) => (
                <button
                  key={i}
                  className="cs-gallery-item"
                  onClick={() => setLbIndex(i)}
                  aria-label={`Preview cover ${i + 1}`}
                >
                  <img src={src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div className="cs-basic-img-wrap">
          <img src={image} alt={title} className="cs-basic-img" />
        </div>
      )}

      {/* Overview + tools */}
      <section className="cs-section">
        <div className="cs-container cs-basic-meta">
          <p className="cs-basic-description">{description}</p>
          <div className="cs-basic-tools">
            <span className="eyebrow">Tools</span>
            <div className="cs-tool-chips">
              {tools.map(tool => (
                <span key={tool} className="cs-tool-chip">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      {process && (
        <section className="cs-section cs-band">
          <div className="cs-container">
            <span className="eyebrow cs-section-eyebrow">Approach</span>
            <div
              ref={processRef}
              className={`cs-steps reveal-stagger${processVisible ? ' is-visible' : ''}`}
            >
              {process.map(({ step, detail }, i) => (
                <div className="cs-step" key={step}>
                  <span className="cs-step-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="cs-step-name">{step}</h3>
                  <p className="cs-step-detail">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reflection */}
      {retrospective && (
        <section className="cs-section">
          <div className="cs-container">
            <span className="eyebrow cs-section-eyebrow">Reflection</span>
            <blockquote
              ref={reflectionRef}
              className={`cs-reflection reveal${reflectionVisible ? ' is-visible' : ''}`}
            >
              {retrospective}
            </blockquote>
          </div>
        </section>
      )}

      <div className="cs-footer">
        <Link to="/projects" className="cs-footer-link">
          <span>View all projects</span>
          <span className="cs-footer-arrow" aria-hidden="true">→</span>
        </Link>
      </div>

      {lbIndex !== null && (
        <Lightbox
          images={lbImages}
          index={lbIndex}
          onClose={closeLb}
          onPrev={prevLb}
          onNext={nextLb}
        />
      )}

    </div>
  );
}

// ── Main router ────────────────────────────────────────────────
function ProjectDetail() {
  const { id }    = useParams();
  const project   = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="cs-page cs-not-found">
        <p>Project not found.</p>
        <Link to="/projects">← Back to projects</Link>
      </div>
    );
  }

  const isRich = !!(project.problem && project.insights && project.keyDecisions);
  return isRich ? <RichCaseStudy project={project} /> : <BasicDetail project={project} />;
}

export default ProjectDetail;
