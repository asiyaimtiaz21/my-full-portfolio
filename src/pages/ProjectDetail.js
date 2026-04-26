import { useParams, Link } from 'react-router-dom';
import useInView from '../hooks/useInView';
import projects from '../data/projects';
import './ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));
  const [processRef, processVisible] = useInView();
  const [retroRef, retroVisible] = useInView();

  if (!project) {
    return (
      <div className="detail-page">
        <div className="detail-not-found">
          <p>Project not found.</p>
          <Link to="/projects">← Back to projects</Link>
        </div>
      </div>
    );
  }

  const { title, category, description, image, tools, process, retrospective, liveLink, figmaLink, githubLink } = project;

  return (
    <div className="detail-page">
      <div className="detail-inner">
        <Link to="/projects" className="detail-back">← All Projects</Link>

        <p className="detail-category">{category.replace(/-/g, ' ')}</p>
        <h1 className="detail-title">{title}</h1>

        {/* ── External links ── */}
        {(liveLink || figmaLink || githubLink) && (
          <div className="detail-links">
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="detail-link-btn detail-link-primary">
                View Live Site ↗
              </a>
            )}
            {figmaLink && (
              <a href={figmaLink} target="_blank" rel="noopener noreferrer" className="detail-link-btn detail-link-outline">
                View Prototype ↗
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="detail-link-btn detail-link-ghost">
                View on GitHub
              </a>
            )}
          </div>
        )}

        <img src={image} alt={title} className="detail-image" />

        {/* ── Meta row: description + tools ── */}
        <div className="detail-meta">
          <p className="detail-description">{description}</p>

          <div className="detail-tools">
            <h3>Tech Stack</h3>
            <div className="detail-tools-pills">
              {tools.map(tool => (
                <span key={tool} className="detail-tool-pill">{tool}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Design Process ── */}
        <section
          ref={processRef}
          className={`detail-process fade-section${processVisible ? ' is-visible' : ''}`}
        >
          <h2>Design Process</h2>
          <div className="detail-steps">
            {process.map(({ step, detail }) => (
              <div className="detail-step" key={step}>
                <span className="detail-step-label">{step}</span>
                <p className="detail-step-text">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Retrospective ── */}
        {retrospective && (
          <section
            ref={retroRef}
            className={`detail-retrospective fade-section${retroVisible ? ' is-visible' : ''}`}
          >
            <div className="detail-retro-header">
              <span className="detail-retro-eyebrow">Retrospective</span>
              <h2 className="detail-retro-title">What I'd improve today</h2>
            </div>
            <blockquote className="detail-retro-body">
              {retrospective}
            </blockquote>
          </section>
        )}

      </div>
    </div>
  );
}

export default ProjectDetail;
