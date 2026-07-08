import { useParams, NavLink, Link } from 'react-router-dom';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import useInView from '../hooks/useInView';
import './Projects.css';

// ── Gallery entry — full-width strip for projects with a `gallery` array ──
function GalleryEntry({ project }) {
  const [ref, isVisible] = useInView();
  const { id, title, description, gallery } = project;
  const previews = gallery.slice(0, 6);

  return (
    <article
      ref={ref}
      className={`gallery-entry reveal${isVisible ? ' is-visible' : ''}`}
    >
      <div className="gallery-entry-left">
        <span className="eyebrow gallery-entry-eyebrow">Graphic Design</span>
        <Link to={`/project/${id}`} className="gallery-entry-title-link">
          <h3 className="gallery-entry-title">{title}</h3>
        </Link>
        <p className="gallery-entry-desc">{description}</p>
        <Link to={`/project/${id}`} className="gallery-entry-cta">
          View series <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="gallery-entry-right">
        <div className="gallery-entry-strip">
          {previews.map((src, i) => (
            <div
              key={i}
              className={`gallery-entry-frame${i >= 4 ? ' gallery-entry-frame--dim' : ''}`}
            >
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
        <p className="gallery-entry-count" aria-label={`${gallery.length} covers total`}>
          {gallery.length} covers total
        </p>
      </div>
    </article>
  );
}

const categories = [
  { slug: 'web-design',     label: 'Web Design'      },
  { slug: 'ux-ui',          label: 'UX / UI Design'  },
  { slug: 'graphic-design', label: 'Graphic Design'  },
];

const filters = [
  { label: 'All', slug: null },
  ...categories,
];

// Split a project list into featured + secondary.
function splitProjects(group) {
  const featured  = group.filter(p => p.featured);
  const secondary = group.filter(p => !p.featured);
  return { featured, secondary };
}

// ── Logo entry — 4-variant swatch strip for logo projects ──
function LogoEntry({ project }) {
  const [ref, isVisible] = useInView();
  const { id, title, description, logoVariants } = project;

  return (
    <article
      ref={ref}
      className={`logo-entry reveal${isVisible ? ' is-visible' : ''}`}
    >
      <div className="logo-entry-left">
        <span className="eyebrow logo-entry-eyebrow">Graphic Design</span>
        <Link to={`/project/${id}`} className="logo-entry-title-link">
          <h3 className="logo-entry-title">{title}</h3>
        </Link>
        <p className="logo-entry-desc">{description}</p>
        <Link to={`/project/${id}`} className="logo-entry-cta">
          View project <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="logo-entry-right">
        <div className="logo-entry-swatches">
          {logoVariants.map(({ src, label, bg }) => (
            <div key={label} className="logo-entry-swatch" style={{ backgroundColor: bg }}>
              <div className="logo-entry-img-wrap">
                <img src={src} alt={`${label} variant`} loading="lazy" />
              </div>
              <span className="logo-entry-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

// ── All-projects view: one category section per discipline ──
function GroupedProjects() {
  return (
    <div className="projects-grouped">
      {categories.map(({ slug, label }, index) => {
        const group = projects.filter(p => p.category === slug);
        if (!group.length) return null;

        const galleryProjects = group.filter(p => p.gallery);
        const logoProjects    = group.filter(p => p.logoVariants);
        const cardProjects    = group.filter(p => !p.gallery && !p.logoVariants);
        const { featured, secondary } = splitProjects(cardProjects.length ? cardProjects : []);
        const total = group.length;

        return (
          <section className="projects-section" key={slug}>
            <header className="projects-section-header">
              <span className="projects-section-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h2 className="projects-section-heading">
                <Link to={`/projects/${slug}`}>
                  {label}
                  <span className="projects-section-arrow" aria-hidden="true">→</span>
                </Link>
              </h2>
              <span className="projects-section-count">
                {total} {total === 1 ? 'project' : 'projects'}
              </span>
            </header>

            {featured.length > 0 && (
              <div className="projects-section-featured">
                {featured.map(p => (
                  <ProjectCard key={p.id} {...p} variant="featured" />
                ))}
              </div>
            )}

            {secondary.length > 0 && (
              <div className="projects-grid">
                {secondary.map(p => (
                  <ProjectCard key={p.id} {...p} variant="secondary" />
                ))}
              </div>
            )}

            {galleryProjects.map(p => (
              <GalleryEntry key={p.id} project={p} />
            ))}

            {logoProjects.map(p => (
              <LogoEntry key={p.id} project={p} />
            ))}
          </section>
        );
      })}
    </div>
  );
}

// ── Category view: single discipline, featured + grid ──
function FilteredProjects({ category }) {
  const [sectionRef, sectionVisible] = useInView();
  const group           = projects.filter(p => p.category === category);
  const galleryProjects = group.filter(p => p.gallery);
  const logoProjects    = group.filter(p => p.logoVariants);
  const cardProjects    = group.filter(p => !p.gallery && !p.logoVariants);
  const { featured, secondary } = splitProjects(cardProjects.length ? cardProjects : []);

  return group.length > 0 ? (
    <div
      ref={sectionRef}
      className={`projects-filtered reveal${sectionVisible ? ' is-visible' : ''}`}
    >
      {featured.length > 0 && (
        <div className="projects-section-featured">
          {featured.map(p => (
            <ProjectCard key={p.id} {...p} variant="featured" />
          ))}
        </div>
      )}

      {secondary.length > 0 && (
        <div className="projects-grid">
          {secondary.map(p => (
            <ProjectCard key={p.id} {...p} variant="secondary" />
          ))}
        </div>
      )}

      {galleryProjects.map(p => (
        <GalleryEntry key={p.id} project={p} />
      ))}

      {logoProjects.map(p => (
        <LogoEntry key={p.id} project={p} />
      ))}
    </div>
  ) : (
    <p className="projects-empty">No projects in this category yet.</p>
  );
}

// ── Page ────────────────────────────────────────────────
function Projects() {
  const { category } = useParams();
  const activeCategory = categories.find(c => c.slug === category);

  return (
    <div className="projects-page">

      <header className="projects-header">
        <span className="eyebrow">Selected Work</span>
        <h1 className="projects-h1">
          {activeCategory ? activeCategory.label : 'Work'}
        </h1>
        {!category && (
          <p className="projects-sub">
            A curated collection spanning UX design, web development, and visual design.
          </p>
        )}
      </header>

      {/* Sticky filter bar — stays visible while scrolling */}
      <div className="projects-filters-wrapper">
        <nav className="projects-filters" aria-label="Filter projects by discipline">
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

      <div className="projects-content">
        {category ? <FilteredProjects category={category} /> : <GroupedProjects />}
      </div>

    </div>
  );
}

export default Projects;
