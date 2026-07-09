import { Link } from 'react-router-dom';
import './ProjectCard.css';

const CATEGORY_LABELS = {
  'web-design':     'Web Design',
  'ux-ui':          'UX / UI Design',
  'graphic-design': 'Graphic Design',
};

function ProjectCard({
  id, image, title, category, description, status,
  figmaLink, liveLink, redesignLink, variant = 'secondary',
}) {
  const detailPath    = `/project/${id}`;
  const isComingSoon  = status === 'coming-soon';
  const categoryLabel = CATEGORY_LABELS[category] || category;

  const externalLink  = liveLink  ?? figmaLink  ?? redesignLink ?? null;
  const externalLabel = liveLink  ? 'Live Site' : figmaLink ? 'Prototype' : redesignLink ? 'Redesign' : null;

  if (variant === 'featured') {
    return (
      <article className={`project-card project-card--featured${isComingSoon ? ' project-card--soon' : ''}`}>

        {/* Image — the stretched link below covers click */}
        <div className="pc-image-wrap">
          <img src={image} alt={title} className="pc-image" loading="lazy" />

          {/* Hover scrim — visible on :hover of the article */}
          <div className="pc-scrim" aria-hidden="true">
            <span className="pc-scrim-label">View Case Study →</span>
          </div>

          {isComingSoon && <span className="pc-badge">Coming Soon</span>}
        </div>

        {/* Info row */}
        <div className="pc-body">
          <div className="pc-text">
            <span className="eyebrow pc-eyebrow">{categoryLabel}</span>
            {/* Title link — ::after stretches to cover the entire card */}
            <Link to={detailPath} className="pc-title-link">
              <h3 className="pc-title">{title}</h3>
            </Link>
          </div>

          {/* External link floats above the stretched link via z-index */}
          {externalLink && !isComingSoon && (
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-external"
            >
              {externalLabel} ↗
            </a>
          )}
        </div>

      </article>
    );
  }

  // ── Secondary variant ──────────────────────────────────
  return (
    <article className={`project-card project-card--secondary${isComingSoon ? ' project-card--soon' : ''}`}>

      <div className="pc-image-wrap">
        <img src={image} alt={title} className="pc-image" loading="lazy" />
        {isComingSoon && <span className="pc-badge">Coming Soon</span>}
      </div>

      <div className="pc-body">
        <span className="eyebrow pc-eyebrow">{categoryLabel}</span>
        <div className="pc-title-row">
          <Link to={detailPath} className="pc-title-link">
            <h3 className="pc-title">{title}</h3>
          </Link>
          {externalLink && !isComingSoon && (
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-external"
            >
              {externalLabel} ↗
            </a>
          )}
        </div>
        {description && <p className="pc-description">{description}</p>}
      </div>

    </article>
  );
}

export default ProjectCard;
