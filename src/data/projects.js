import novaImage    from '../assets/images/nova-title.jpg';
import sableImage   from '../assets/images/sable-title.jpg';
import comingSoonImage from '../assets/images/coming-soon.svg';
import novaPresentationPDF from '../assets/pdfs/Nova - Midterm Presentation .pdf';
import swcPlaceholder from '../assets/images/swc-logo.jpg';
import swcCaseStudyPDF from '../assets/pdfs/swc.pdf';
import swcProposalPDF  from '../assets/pdfs/website-proposal.pdf';

// Car logo variants
import logoOnly       from "../assets/images/graphic design/logo's/car logo/logo only.png";
import logoWhite      from "../assets/images/graphic design/logo's/car logo/white on black.png";
import logoBlack      from "../assets/images/graphic design/logo's/car logo/black on white.png";
import logoHorizontal from "../assets/images/graphic design/logo's/car logo/horizontal.png";

// Sable book cover series
import bookCover1  from '../assets/images/graphic design/book cover series/1.png';
import bookCover2  from '../assets/images/graphic design/book cover series/2.png';
import bookCover3  from '../assets/images/graphic design/book cover series/3.png';
import bookCover4  from '../assets/images/graphic design/book cover series/4.png';
import bookCover5  from '../assets/images/graphic design/book cover series/5.png';
import bookCover6  from '../assets/images/graphic design/book cover series/6.png';
import bookCover7  from '../assets/images/graphic design/book cover series/7.png';
import bookCover10 from '../assets/images/graphic design/book cover series/10.png';
import bookCover11 from '../assets/images/graphic design/book cover series/11.png';
import bookCover12 from '../assets/images/graphic design/book cover series/12.png';
import bookCover13 from '../assets/images/graphic design/book cover series/13.png';
import bookCover15 from '../assets/images/graphic design/book cover series/15.png';
import bookCover17 from '../assets/images/graphic design/book cover series/17.png';
import bookCover21 from '../assets/images/graphic design/book cover series/21.png';
import bookCover22 from '../assets/images/graphic design/book cover series/22.png';
import bookCover24 from '../assets/images/graphic design/book cover series/24.png';
import bookCover25 from '../assets/images/graphic design/book cover series/25.png';

const BOOK_COVERS = [
  bookCover1, bookCover2, bookCover3, bookCover4, bookCover5, bookCover6,
  bookCover7, bookCover10, bookCover11, bookCover12, bookCover13,
  bookCover15, bookCover17, bookCover21, bookCover22, bookCover24, bookCover25,
];

const CAR_LOGO_VARIANTS = [
  { src: logoOnly,       label: 'Logo Only',      bg: 'var(--ground-subtle)' },
  { src: logoWhite,      label: 'White on Black',  bg: 'var(--ink)'           },
  { src: logoBlack,      label: 'Black on White',  bg: 'var(--surface)'       },
  { src: logoHorizontal, label: 'Horizontal',      bg: 'var(--ground-subtle)' },
];

// Stock photos — replace with locally-hosted images before final deploy if preferred
const flowerStockImage  = 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1200&q=80';
const studyStockImage   = 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80';

const projects = [
    {
      id: 1,
      title: 'Reading Platform',
      category: 'web-design',
      role: 'Web Designer & Content Lead',
      year: '2024',
      description: 'A full-stack reading platform focused on user engagement and accessibility. Designed end-to-end from wireframes to a responsive interface with a clean reading experience. I oversaw content production in this project. It was a Capstone project which won my three other team members and I entry into the Senior Web Design Showcase',
      image: sableImage,
      tools: ['Figma', 'React', 'CSS', 'Node.js'],
      liveLink: 'https://sable-two.vercel.app/',
      githubLink: 'https://github.com/xiarune/sable.git',
      overview: 'A full-stack capstone project built around the question of what makes a reading platform worth staying in. My role spanned both sides of the product: UI design and the entire content system — book covers, story titles, user accounts, and data. The project won entry into the Senior Web Design Showcase.',
      problem: "Building a reading platform means solving two problems simultaneously — making discovery easy and making reading feel worth staying for. The challenge wasn't just technical; it was creating a content ecosystem believable enough that users would actually inhabit it. An empty or half-finished library signals abandonment the moment a user lands.",
      insights: [
        {
          number: '01',
          label: 'Content is the product',
          body: 'Users don\'t evaluate reading platforms on features — they evaluate them on what\'s there to read. No amount of UI polish compensates for a thin or visually inconsistent library.',
        },
        {
          number: '02',
          label: 'Account context drives return visits',
          body: 'Personalization — reading history, saved books, mock recommendations — transformed passive visitors into users with a reason to come back. Without it, every session felt like the first.',
        },
        {
          number: '03',
          label: 'Cover design is UX',
          body: 'Badly designed book covers broke the platform\'s credibility faster than any broken component. Each cover had to function as a real published object to sustain the experience.',
        },
      ],
      keyDecisions: [
        {
          versus: 'Populating content after launch',
          decision: 'Build content in parallel with the UI',
          annotation: 'Shipping the UI empty and filling it later meant the platform would never feel inhabited during testing. Building content alongside the interface kept every review session grounded in a real use case.',
        },
        {
          versus: 'Default browser typography',
          decision: 'A purpose-built reading type system',
          annotation: 'Long-form reading is unforgiving. Optimized line length, line height, and contrast were defined as a system — not applied page by page — so the reading experience stayed consistent at every viewport.',
        },
        {
          versus: 'End-of-project review',
          decision: 'Survey-driven iteration throughout',
          annotation: 'Distributing user surveys at key milestones — not just at the end — kept feedback loops short and surfaced usability issues before they compounded into structural problems.',
        },
      ],
      process: [
        { step: 'Research', detail: 'Conducted user interviews and competitive analysis to understand reading habits and pain points.' },
        { step: 'Wireframing', detail: 'Sketched low-fidelity layouts, then built interactive prototypes in Figma for user testing.' },
        { step: 'Visual Design', detail: 'Defined a clean typographic system and accessible colour palette optimised for long reading sessions.' },
        { step: 'Development', detail: 'Built the responsive frontend in React with a focus on performance and smooth page transitions.' },
      ],
      retrospective: "If I revisited this project, I would expand on my role in content production and platform population, where I was responsible for creating and organizing the majority of the platform's content. This included designing book covers, writing and formatting story titles and narratives, generating mock user accounts, and building out personalized account experiences. I also handled testing and user flow validation, along with distributing surveys, collecting feedback, and analyzing results to improve the overall structure and usability of the platform's database. This process gave me a deeper understanding of how content systems and user-facing experiences connect in a reading platform environment.",
    },

    {
      id: 2,
      title: 'Nova App Prototype',
      category: 'ux-ui',
      description:
        'A high-fidelity interactive mobile app prototype focused on intuitive navigation and smooth micro-interactions, designed to enhance user engagement and usability.',
      role:     'UX Designer',
      year:     '2024',
      duration: '6 weeks',
      overview: 'A high-fidelity interactive mobile prototype built entirely in Figma. The focus: make movement through the app feel inevitable — navigation that disappears because it never gets in the way.',
      problem:  "Users were abandoning mobile apps not because features were missing, but because they couldn't find them. Deep menus, hidden drawers, and silent UI created disorientation at every level. The brief: design navigation so intuitive that users never have to think about navigating.",
      insights: [
        {
          number: '01',
          label: 'Disorientation kills retention',
          body: "Users who couldn't locate themselves in the app hierarchy left within 30 seconds of hitting a dead end. The app felt broken — even when it wasn't.",
        },
        {
          number: '02',
          label: 'Three taps is the threshold',
          body: 'Any action requiring more than three taps showed measurable drop in task completion. Each additional tap was less friction and more invitation to abandon.',
        },
        {
          number: '03',
          label: 'Feedback is navigation',
          body: 'When a tap produced no visible response, users re-tapped — causing duplicate actions and confusion. Silence from the UI reads as system failure.',
        },
      ],
      keyDecisions: [
        {
          versus:     'Hamburger menu',
          decision:   'Persistent tab bar',
          annotation: "Hamburger menus hide what's available until you look. A persistent tab bar makes the full navigation structure visible at all times — reducing the decision to a single glance, not a search.",
        },
        {
          versus:     'Static screen transitions',
          decision:   'Directional motion as spatial grammar',
          annotation: 'Deeper screens enter from the right. Back navigation exits to the left. This spatial consistency lets users build a mental map of the app without ever needing a breadcrumb trail.',
        },
        {
          versus:     'No interaction feedback',
          decision:   'Every tap has a receipt',
          annotation: "Micro-interactions aren't decoration — they're confirmation. A button that visibly responds tells the user the system heard them. Without this, users assume failure and re-tap.",
        },
      ],
      image: novaImage,
      tools: ['Figma'],
      figmaLink: 'https://www.figma.com/proto/UvAsLdNld2MCbzXtuR1vs0/Nova?node-id=77-146&t=FkqBmv3TuovnIbCC-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=77%3A146&show-proto-sidebar=1',
      liveLink: null,
      githubLink: null,
      presentationLink: novaPresentationPDF,
      process: [
        {
          step: 'User Research',
          detail: 'Analyzed user behavior and identified key navigation pain points to improve overall usability.',
        },
        {
          step: 'User Flows',
          detail: 'Designed clear user journeys to streamline navigation and reduce friction throughout the app experience.',
        },
        {
          step: 'Prototyping',
          detail: 'Built a high-fidelity interactive prototype in Figma with realistic transitions and micro-interactions.',
        },
        {
          step: 'Testing & Iteration',
          detail: 'Conducted usability testing and refined interactions based on user feedback.',
        },
      ],
      retrospective: "Given more time, I would run a second round of usability testing with a more diverse participant group to pressure-test the navigation patterns. I'd also add a full accessibility annotation layer to the Figma file for a cleaner engineering handoff, and produce motion design specs — the micro-interaction intent was clear to me, but the prototype alone doesn't communicate timing values or easing curves precisely enough.",
    },

    {
      id: 3,
      title: 'Starr Wellness Collective',
      category: 'ux-ui',
      role: 'UX / UI Design Intern',
      year: '2024',
      duration: 'Internship',
      image: swcPlaceholder,
      tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
      liveLink: null,
      figmaLink: null,
      githubLink: null,
      documents: [
        { label: 'View Redesign Proposal', href: swcProposalPDF },
        { label: 'View Case Study',        href: swcCaseStudyPDF },
      ],
      ctaHeading: 'The full redesign is documented.',
      ctaSub: 'Review the proposal and complete case study.',
      overview: 'A full website redesign completed during my internship at Starr Wellness Collective. The project began with a formal redesign proposal — establishing rationale, scope, and direction with the client — then moved through UX audit, information architecture, and a complete visual overhaul across every page of the site.',
      problem: "The existing Starr Wellness Collective website didn't reflect the quality of the practice or the care behind the brand. Visitors couldn't easily navigate to services, understand what the collective offered, or take a clear next step. The brief: redesign the site so the digital experience matched the standard of care clients received in person.",
      insights: [
        {
          number: '01',
          label: 'Trust is the primary conversion driver',
          body: 'Wellness clients seek practitioners, not just services. The site needed to communicate safety, expertise, and warmth before a visitor reached any service listing — the visual language had to do that work before a word was read.',
        },
        {
          number: '02',
          label: 'Navigation was burying key services',
          body: 'Core offerings were two or three levels deep in the existing structure, requiring users to search for what should have been immediately findable. Every additional click was a reason to leave.',
        },
        {
          number: '03',
          label: 'Mobile-first was non-negotiable',
          body: 'The majority of the site\'s traffic arrived on mobile. Every layout decision made with desktop-primary thinking was a direct barrier to the audience most likely to convert.',
        },
      ],
      keyDecisions: [
        {
          versus: 'Starting with screens',
          decision: 'Proposal before pixels',
          annotation: 'Built a formal redesign proposal before opening Figma. Establishing rationale, scope, and visual direction with the client upfront prevented costly revisions and gave the work a clear mandate before any design investment was made.',
        },
        {
          versus: 'Mirroring the org structure',
          decision: 'Navigation built around user goals',
          annotation: "Rebuilt the information architecture around what visitors came to do — find a therapist, learn about services, book an appointment — not around how the collective organized itself internally. The user's mental model, not the client's, drove every nav decision.",
        },
        {
          versus: 'Generic wellness aesthetic',
          decision: 'Grounded, credible visual language',
          annotation: 'Moved away from the soft gradients and stock photography common to wellness brands toward a warmer but more professional visual identity. The design needed to communicate expertise alongside care — both qualities matter in a therapeutic context.',
        },
      ],
      process: [
        {
          step: 'Discovery & Audit',
          detail: 'Reviewed the existing site, identified UX gaps across navigation, hierarchy, and mobile layout, and documented the findings in a formal redesign proposal submitted to the client.',
        },
        {
          step: 'Information Architecture',
          detail: 'Restructured the site map and navigation to surface key services and reduce the depth of the content hierarchy — prioritizing the paths users actually take.',
        },
        {
          step: 'Visual Design',
          detail: 'Developed a refreshed visual identity: color system, typography, layout grid, and component library aligned to the brand\'s positioning in the wellness space.',
        },
        {
          step: 'Full Redesign',
          detail: 'Applied the design system across every page, producing a complete set of high-fidelity screens for the redesigned site.',
        },
      ],
      retrospective: "Working within a real client relationship gave this project dimensions that classroom projects can't replicate. Scope decisions had to be justified, tone had to be calibrated for a professional audience, and the work had to stand on its own without me in the room explaining it. The formal proposal process was the most valuable part — it forced clarity before any visual work began and gave the client concrete input into the direction before significant effort was invested.",
    },

    {
      id: 4,
      title: 'Flower Boutique',
      category: 'web-design',
      role: 'Designer & Developer',
      year: '2025',
      description: 'A responsive boutique website focused on elegant layout, branding, and smooth user experience.',
      image: flowerStockImage,
      tools: ['React', 'CSS', 'HTML5', 'Claude Code (AI-assisted workflow)'],
      liveLink: 'https://asiyaimtiaz21.github.io/asiyas-flowers/',
      githubLink: 'https://github.com/asiyaimtiaz21/asiyas-flowers',
      overview: 'A responsive boutique website built to translate a local florist\'s brand online — elegant, warm, and immediately trustworthy to a first-time visitor. Handled both design and development end-to-end, using an AI-assisted workflow to maintain quality while moving at speed.',
      problem: "Local boutiques often lose customers to larger platforms not because of price, but because their web presence doesn't match their in-store experience. The challenge was building a site that felt premium and personal — without the complexity and overhead of a full e-commerce system pulling focus from craft.",
      insights: [
        {
          number: '01',
          label: 'First impression is everything',
          body: 'Boutique customers decide within seconds. The hero image, typeface, and color palette had to do the selling before a word was read — the UI needed to feel like the shop.',
        },
        {
          number: '02',
          label: 'Simplicity signals quality',
          body: 'Cluttered layouts read as discount retail. White space, restrained color, and careful typography communicate craftsmanship without needing to say it explicitly.',
        },
        {
          number: '03',
          label: 'Mobile is the primary storefront',
          body: 'Most local business discovery happens on a phone, often mid-errand. Every layout decision was made mobile-first, with desktop treated as an expansion rather than the default.',
        },
      ],
      keyDecisions: [
        {
          versus: 'High-contrast brand colors',
          decision: 'A soft, warm botanical palette',
          annotation: 'A muted, warm color system over bold branding. High contrast reads as corporate; the softness of the palette communicates the hand-made, locally-sourced quality of a real flower boutique.',
        },
        {
          versus: 'Rushing a commerce integration',
          decision: 'A polished static site',
          annotation: 'A well-crafted static site over a half-finished shopping experience. Premature e-commerce scope would have diluted the design quality — polish was the priority for a first version.',
        },
        {
          versus: 'Solo development at full pace',
          decision: 'AI-assisted development workflow',
          annotation: 'Used Claude Code to accelerate responsive layout development, maintaining full creative control while compressing the timeline. The AI handled scaffolding; every visual decision remained deliberate.',
        },
      ],
      process: [
        { step: 'Art Direction', detail: 'Created a soft, elegant aesthetic aligned with boutique branding.' },
        { step: 'Design System', detail: 'Defined typography, colors, and layout consistency.' },
        { step: 'Development', detail: 'Built a responsive UI with smooth interactions and clean layout structure.' },
      ],
      retrospective: "What I'd improve today is making the site more flexible and closer to a real client-ready product. Right now, the content is static, and not hooked up to a database which limits how easily it could adapt to things like seasonal bouquets or new arrangements. I would also refine the shopping experience to feel more complete and intuitive, especially when it comes to browsing, selecting, and purchasing flowers.",
    },

    {
      id: 5,
      title: 'Study Planner',
      category: 'web-design',
      role: 'Designer & Developer',
      year: '2025',
      description: 'A productivity-focused web app designed to help students organize tasks and manage time effectively.',
      image: studyStockImage,
      tools: ['React', 'CSS', 'HTML5', 'localStorage', 'Claude Code (AI-assisted workflow)'],
      liveLink: 'https://asiyaimtiaz21.github.io/study-planner-app/',
      githubLink: 'https://github.com/asiyaimtiaz21/study-planner-app',
      overview: 'A productivity web app built around how students actually work — not the idealized version. Designed to reduce friction between a student having a task and getting it recorded, organized, and tracked, without the overhead of a full project management tool.',
      problem: "Most productivity tools are designed for knowledge workers, not students. The rhythms of student work — assignments, exams, semesters — don't map cleanly onto generic to-do lists. The result is tools that add overhead instead of removing it, and get abandoned within a week of installation.",
      insights: [
        {
          number: '01',
          label: 'Students abandon complex systems',
          body: 'Tools with too many categories, views, or configuration options get discarded fast. The feature that keeps students coming back is not power — it\'s the absence of friction.',
        },
        {
          number: '02',
          label: 'Deadlines need to be visible',
          body: 'Tasks without prominent due-date context carry no urgency signal. When deadlines are surfaced clearly, students act on tasks faster — the design creates the sense of priority, not the task itself.',
        },
        {
          number: '03',
          label: 'Task entry has to be instant',
          body: 'Students add tasks between classes on their phones, not at a desk. If adding a task takes more than a few taps, it doesn\'t get added at all — it gets forgotten.',
        },
      ],
      keyDecisions: [
        {
          versus: 'A server-side database',
          decision: 'localStorage persistence',
          annotation: 'Persistent local storage over a backend kept the app fast, private, and deployable without infrastructure. For a student tool, zero-latency data and no login requirement outweighed the trade-off of cross-device sync.',
        },
        {
          versus: 'Subject-based organization',
          decision: 'Deadline-first task layout',
          annotation: 'Tasks sorted by deadline rather than by course reflect how students actually triage their workload — by when something is due, not by which class assigned it.',
        },
        {
          versus: 'Desktop-first layout',
          decision: 'Mobile-first design',
          annotation: 'Designed for small screens first and expanded up. Student task management is spontaneous and mobile — a desktop-first layout would have produced an interface optimized for the wrong context.',
        },
      ],
      process: [
        { step: 'User Needs', detail: 'Identified key features needed for student productivity and time management.' },
        { step: 'UI Design', detail: 'Designed a clean, distraction-free interface focused on usability.' },
        { step: 'Development', detail: 'Built a responsive layout optimized for both desktop and mobile use.' },
      ],
      retrospective: "One area I would continue improving is making the task organization feel more dynamic and flexible for different study styles. While the current structure works well, I would explore adding more customization options for how tasks are grouped and viewed, so users could adapt the planner to things like exam prep, daily scheduling, or long-term projects. I'd also refine the overall user experience to make interactions feel even smoother and more intentional, especially around how tasks are created, edited, and visually prioritized within the interface.",
    },

    {
      id: 7,
      title: 'Sable Book Cover Series',
      category: 'graphic-design',
      description: 'A collection of 18 mock book covers created to populate the Sable reading platform. Each design builds its own visual identity — genre, tone, and era — through typography and image composition alone.',
      image: bookCover1,
      gallery: BOOK_COVERS,
      tools: ['Adobe Photoshop', 'Adobe Illustrator'],
      liveLink: null,
      githubLink: null,
      process: [
        { step: 'Concept', detail: 'Defined a range of genres — literary fiction, science fiction, romance, thriller — to give the platform visual variety and credibility.' },
        { step: 'Typography', detail: 'Selected typeface pairings matched to each genre: condensed serifs for literary titles, bold grotesques for thrillers, italic scripts for romance.' },
        { step: 'Composition', detail: 'Designed each cover as a standalone piece — balancing imagery, type hierarchy, and colour to create immediate recognition at thumbnail scale.' },
      ],
      retrospective: 'Designing at scale meant every decision had to work across 18 different visual identities simultaneously. Staying within a coherent platform aesthetic while letting each cover feel like a distinct published object was the central design challenge — and the one I found most rewarding.',
    },

    {
      id: 8,
      title: 'Car Logo Design',
      category: 'graphic-design',
      description: 'A complete logo identity delivered across four production-ready variants — color, white, black, and horizontal — for consistent use across all brand touchpoints.',
      image: logoOnly,
      logoVariants: CAR_LOGO_VARIANTS,
      tools: ['Adobe Illustrator'],
      liveLink: null,
      githubLink: null,
      process: [
        {
          step: 'Research & Discovery',
          detail: '[Replace with your own text] Describe the brief here — the client, their industry, target audience, and the core values or feeling the logo needed to communicate before any sketching began.',
        },
        {
          step: 'Concept Development',
          detail: '[Replace with your own text] Walk through the ideation phase — how many directions you explored, what you were trying to communicate with each mark, and how you narrowed to this concept.',
        },
        {
          step: 'Refinement',
          detail: '[Replace with your own text] Describe the iteration process — adjustments to proportion, stroke weight, spacing, and how the mark evolved from a rough concept to a polished final form.',
        },
        {
          step: 'Production & Variants',
          detail: '[Replace with your own text] Explain how the four logo variants were prepared — the decisions behind the color system, how the horizontal version was adapted, and what file formats were delivered.',
        },
      ],
      retrospective: '[Replace with your own text] Reflect on the project — what constraints shaped the design direction, what you would approach differently with more time, and what you are most proud of in the final mark.',
    },

  ];

  export default projects;