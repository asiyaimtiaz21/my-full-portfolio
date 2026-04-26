import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ id, image, title, category, description, status, tools, figmaLink, liveLink, githubLink }) {
  const detailPath = `/project/${id}`;
  const isComingSoon = status === 'coming-soon';

  // Determine the primary external link and label
  const primaryLink  = liveLink  ?? figmaLink  ?? null;
  const primaryLabel = liveLink  ? 'Live Demo ↗'
                     : figmaLink ? 'View Prototype ↗'
                     : null;

  // Show Prototype as a secondary button only when there is also a live link
  const showPrototype = liveLink && figmaLink;

  return (
    <div className={`project-card${isComingSoon ? ' coming-soon' : ''}`}>

      {/* ── Image ── */}
      <Link to={detailPath} className="project-card-image-wrapper" tabIndex={-1} aria-hidden="true">
        <img src={image} alt={title} className="project-card-image" />

        {/* hover overlay */}
        <div className="project-card-overlay">
          <span className="project-card-overlay-cta">Case Study →</span>
        </div>

        <span className="project-card-category">{category.replace(/-/g, ' ')}</span>
        {isComingSoon && <span className="project-card-badge">Coming Soon</span>}
      </Link>

      {/* ── Body ── */}
      <div className="project-card-body">
        <Link to={detailPath} className="project-card-title-link">
          <h3 className="project-card-title">{title}</h3>
        </Link>

        <p className="project-card-description">{description}</p>

        {/* ── Tech stack ── */}
        {tools && tools.length > 0 && (
          <div className="project-card-tools">
            {tools.map(tool => (
              <span key={tool} className="project-card-tool">{tool}</span>
            ))}
          </div>
        )}

        {/* ── Actions ── */}
        <div className="project-card-actions">
          {primaryLink && (
            <a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card-btn card-btn-primary"
            >
              {primaryLabel}
            </a>
          )}
          {showPrototype && (
            <a
              href={figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card-btn card-btn-outline"
            >
              Prototype ↗
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card-btn card-btn-ghost"
            >
              GitHub
            </a>
          )}
          <Link to={detailPath} className={`card-btn ${primaryLink ? 'card-btn-ghost' : 'card-btn-primary'}`}>
            Case Study →
          </Link>
        </div>
      </div>

    </div>
  );
}

export default ProjectCard;
