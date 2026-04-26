import { useParams, NavLink, Link } from 'react-router-dom';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import useInView from '../hooks/useInView';
import './Projects.css';

const categories = [
  { slug: 'featured',      label: 'Featured'       },
  { slug: 'ux-ui',         label: 'UX / UI Design' },
  { slug: 'web-design',    label: 'Web Design'     },
  { slug: 'graphic-design',label: 'Graphic Design' },
];

const filters = [
  { label: 'All', slug: null },
  ...categories,
];

// ── All-projects view: grouped sections with clickable headings ──
function GroupedProjects() {
  return (
    <div className="projects-grouped">
      {categories.map(({ slug, label }) => {
        const group = projects.filter(p => p.category === slug);
        if (!group.length) return null;
        return (
          <div className="projects-section" key={slug}>
            <Link to={`/projects/${slug}`} className="projects-section-heading">
              {label}
              <span className="projects-section-arrow">→</span>
            </Link>
            <div className="projects-grid">
              {group.map(project => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Category view: flat filtered grid ──
function FilteredProjects({ category }) {
  const [gridRef, gridVisible] = useInView();
  const filtered = projects.filter(p => p.category === category);

  return filtered.length > 0 ? (
    <div
      ref={gridRef}
      className={`projects-grid fade-section stagger${gridVisible ? ' is-visible' : ''}`}
    >
      {filtered.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  ) : (
    <p className="projects-empty">No projects in this category yet.</p>
  );
}

// ── Page ──
function Projects() {
  const { category } = useParams();
  const activeLabel = categories.find(c => c.slug === category)?.label;

  return (
    <section className="projects-page">
      <div className="projects-header">
        <p className="projects-eyebrow">Selected Work</p>
        <div className="projects-header-divider" />
        <h1>{activeLabel ?? 'My Work'}</h1>
        <p>A curated collection of projects spanning UX design, web development, and visual design.</p>
      </div>

      <div className="projects-filters-wrapper">
        <nav className="projects-filters">
          {filters.map(({ label, slug }) => (
            <NavLink
              key={label}
              to={slug ? `/projects/${slug}` : '/projects'}
              end
              className={({ isActive }) => `filter-tab${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {category ? <FilteredProjects category={category} /> : <GroupedProjects />}
    </section>
  );
}

export default Projects;
