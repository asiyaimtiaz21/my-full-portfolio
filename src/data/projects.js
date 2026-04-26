import novaImage      from '../assets/images/nova-title.jpg';
import comingSoonImage from '../assets/images/coming-soon.svg';

// Stock photos — replace with locally-hosted images before final deploy if preferred
const readingStockImage = 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80';
const flowerStockImage  = 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1200&q=80';
const exerciseStockImage = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80';
const studyStockImage   = 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80';

const projects = [
    {
      id: 1,
      title: 'Reading Platform',
      category: 'featured',
      description: 'A full-stack reading platform focused on user engagement and accessibility. Designed end-to-end from wireframes to a responsive interface with a clean reading experience. I oversaw content production in this project. It was a Capstone project which won my three other team members and I entry into the Senior Web Design Showcase',
      image: readingStockImage,
      tools: ['Figma', 'React', 'CSS', 'Node.js'],
      liveLink: 'https://sable-two.vercel.app/',      // TODO: replace with live URL
      githubLink: 'https://github.com/xiarune/sable.git',    // TODO: replace with GitHub URL
      process: [
        { step: 'Research', detail: 'Conducted user interviews and competitive analysis to understand reading habits and pain points.' },
        { step: 'Wireframing', detail: 'Sketched low-fidelity layouts, then built interactive prototypes in Figma for user testing.' },
        { step: 'Visual Design', detail: 'Defined a clean typographic system and accessible colour palette optimised for long reading sessions.' },
        { step: 'Development', detail: 'Built the responsive frontend in React with a focus on performance and smooth page transitions.' },
      ],
      retrospective: "If I revisited this project, I would expand on my role in content production and platform population, where I was responsible for creating and organizing the majority of the platform’s content. This included designing book covers, writing and formatting story titles and narratives, generating mock user accounts, and building out personalized account experiences. I also handled testing and user flow validation, along with distributing surveys, collecting feedback, and analyzing results to improve the overall structure and usability of the platform’s database. This process gave me a deeper understanding of how content systems and user-facing experiences connect in a reading platform environment.",
    },

    {
      id: 2,
      title: 'Nova App Prototype',
      category: 'ux-ui',
      description:
        'A high-fidelity interactive mobile app prototype focused on intuitive navigation and smooth micro-interactions, designed to enhance user engagement and usability.',
      image: novaImage,
      tools: ['Figma'],
      figmaLink: 'https://www.figma.com/proto/UvAsLdNld2MCbzXtuR1vs0/Nova?node-id=77-146&t=FkqBmv3TuovnIbCC-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=77%3A146&show-proto-sidebar=1',
      liveLink: null,
      githubLink: null,
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
      title: 'Exercise Tracker',
      category: 'web-design',
      description: 'A responsive web app for logging workouts and tracking fitness progress, built with a clean interface optimised for quick daily use.',
      image: exerciseStockImage,
      tools: ['React', 'CSS', 'Figma', 'Google Fonts'],
      liveLink: 'https://asiyaimtiaz21.github.io/exercise-tracker/',
      githubLink: 'https://github.com/asiyaimtiaz21/exercise-tracker',
      process: [
        { step: 'Art Direction', detail: 'Established a clean, motivating visual language with clear typographic hierarchy and a focused colour palette.' },
        { step: 'Design System', detail: 'Built a token-based CSS system covering colour, spacing, typography, and elevation.' },
        { step: 'Development', detail: 'Implemented React components, state management, and a responsive layout optimized for mobile logging.' },
      ],
      retrospective: "I'd add localStorage persistence so workout history survives a page refresh — as it stands, a reload wipes all data, which is a significant usability gap. I'd also introduce a weekly progress chart using a lightweight library like Recharts, and refactor the state logic from useState to useReducer now that the data model has grown more complex than I originally anticipated.",
    },

    {
      id: 4,
      title: 'Flower Boutique',
      category: 'web-design',
      description: 'A responsive boutique website focused on elegant layout, branding, and smooth user experience.',
      image: flowerStockImage,
      tools: ['React', 'CSS','HTML5','Claude Code (AI - assisted workflow'],
      liveLink: 'https://asiyaimtiaz21.github.io/asiyas-flowers/',
      githubLink: 'https://github.com/asiyaimtiaz21/asiyas-flowers',
      process: [
        { step: 'Art Direction', detail: 'Created a soft, elegant aesthetic aligned with boutique branding.' },
        { step: 'Design System', detail: 'Defined typography, colors, and layout consistency.' },
        { step: 'Development', detail: 'Built a responsive UI with smooth interactions and clean layout structure.' },
      ],
      retrospective: "What I’d improve today is making the site more flexible and closer to a real client-ready product. Right now, the content is static, and not hooked up to a databse which limits how easily it could adapt to things like seasonal bouquets or new arrangements. I would also refine the shopping experience to feel more complete and intuitive, especially when it comes to browsing, selecting, and purchasing flowers.",
    },

    {
      id: 5,
      title: 'Study Planner',
      category: 'web-design',
      description: 'A productivity-focused web app designed to help students organize tasks and manage time effectively.',
      image: studyStockImage,
      tools: ['React', 'CSS','HTML5','locslStorage','Claude Code (AI - assisted workflow'],
      liveLink: 'https://asiyaimtiaz21.github.io/study-planner-app/',
      githubLink: 'https://github.com/asiyaimtiaz21/study-planner-app',
      process: [
        { step: 'User Needs', detail: 'Identified key features needed for student productivity and time management.' },
        { step: 'UI Design', detail: 'Designed a clean, distraction-free interface focused on usability.' },
        { step: 'Development', detail: 'Built a responsive layout optimized for both desktop and mobile use.' },
      ],
      retrospective: "One area I would continue improving is making the task organization feel more dynamic and flexible for different study styles. While the current structure works well, I would explore adding more customization options for how tasks are grouped and viewed, so users could adapt the planner to things like exam prep, daily scheduling, or long-term projects. I’d also refine the overall user experience to make interactions feel even smoother and more intentional, especially around how tasks are created, edited, and visually prioritized within the interface.",
    },

    {
      id: 6,
      title: 'Branding Design',
      category: 'graphic-design',
      description: 'A complete brand identity for a boutique studio — including logo design, colour system, typography, and branded collateral.',
      image: comingSoonImage,
      tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
      liveLink: null,
      githubLink: null,
      status: 'coming-soon',
      process: [
        { step: 'Discovery', detail: 'Ran a brand workshop to define values, audience, and visual direction.' },
        { step: 'Logo Design', detail: 'Explored multiple directions before refining a mark that balanced elegance with versatility.' },
        { step: 'Brand System', detail: 'Expanded the logo into a full system: colour palette, type scale, iconography, and usage guidelines.' },
      ],
      retrospective: "Delivering a static PDF brand guide now feels like a missed opportunity. I'd build an interactive brand guidelines microsite instead — a live URL the client can share with collaborators, where colours and type specimens are rendered in-browser rather than as screenshots. I'd also define motion tokens (easing curves, durations) and a digital asset library from the start, since those come up almost immediately in production.",
    },
  ];

  export default projects;