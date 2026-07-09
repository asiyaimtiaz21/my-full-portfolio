import useInView from '../hooks/useInView';
import resumePDF from '../assets/pdfs/my-resume.pdf';
import './Skills.css';

const categories = [
  {
    icon: '◈',
    title: 'Design',
    skills: ['UX / UI Design', 'Visual Design', 'Graphic Design', 'Typography', 'Layout & Composition', 'Branding', 'Wireframing', 'Prototyping', 'Responsive Design', 'User Research'],
  },
  {
    icon: '◻',
    title: 'Development',
    skills: ['HTML5', 'CSS', 'JavaScript', 'React', 'Front-End Development', 'Git', 'Github', 'WordPress', 'Webflow'],
  },
  {
    icon: '◇',
    title: 'Tools',
    skills: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator','Adobe Lightroom', 'Adobe InDesign', 'Adobe Premiere Pro', 'Netlify/Vercel', 'Canva', 'VS Code'],
  },
  {
    icon: '○',
    title: 'Other',
    skills: ['SEO Optimization', 'Google Analytics', 'Content Strategy', 'Photography', 'Photo Editing', 'Social Media Design', 'Microsoft Office', 'Debugging', 'Accessibility', 'Collaboration'],
  },
];

function Skills() {
  const [gridRef, gridVisible] = useInView();

  return (
    <div className="skills-page">
      <div className="skills-inner">
        <p className="skills-eyebrow">What I Bring</p>
        <div className="skills-divider" />
        <h1>Skills & Tools</h1>
        <p className="skills-intro">
          A mix of design thinking, technical ability, and creative tools that are built up through projects, study, and a lot of curiosity.
        </p>
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary skills-resume-btn"
        >
          View Résumé ↗
        </a>

        <div
          ref={gridRef}
          className={`skills-grid fade-section stagger${gridVisible ? ' is-visible' : ''}`}
        >
          {categories.map(({ icon, title, skills }) => (
            <div className="skills-category" key={title}>
              <div className="skills-category-header">
                <span className="skills-category-icon">{icon}</span>
                <h2>{title}</h2>
              </div>
              <div className="skills-tags">
                {skills.map(skill => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
