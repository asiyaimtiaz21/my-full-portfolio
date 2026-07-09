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
    title: 'Sable',
    category: 'web-design',
    role: 'Content Production Lead & UX Researcher',
    year: '2025–2026',
  
    description:
      'A live community-driven storytelling platform created for our senior capstone project. Inspired by Webtoon, Wattpad, AO3, and Audible, Sable combines immersive reading, personalized recommendations, community features, audio narration, and multimedia storytelling within a medieval-inspired experience. I served as Content Production Lead while contributing to UX research, competitive analysis, stakeholder planning, feature planning, and usability testing.',
  
    image: sableImage,
  
    tools: ['Figma', 'React', 'CSS', 'Node.js', 'Adobe Photoshop', 'Canva'],
  
    liveLink: 'https://sable-two.vercel.app/',
    githubLink: 'https://github.com/xiarune/sable.git',
  
    overview:
      'Sable is a live community-driven storytelling platform built for readers and writers who value craft, atmosphere, and discovering stories worth getting lost in. Inspired by Webtoon, Wattpad, AO3, and Audible, the platform combines immersive reading with community interaction, personalized profiles, bookmarks, messaging, audio narration, music integration, and story discovery through genres, fandoms, and an AO3-inspired tagging system. During onboarding, users select their favorite genres, allowing Sable to recommend stories through a personalized recommendation algorithm that can be updated at any time through profile settings. The interface embraces a medieval-inspired visual identity using warm parchment tones, earthy colors, and textured backgrounds that evoke the feeling of aged manuscripts while creating a cozy and immersive reading experience. Developed as our senior capstone project, Sable was selected for the Senior Web Design Showcase, where our team presented the project to faculty and industry professionals. As Content Production Lead, I led content production while contributing to UX research, competitive analysis, stakeholder planning, feature planning, and usability testing throughout the project.',
  
    problem:
      'Readers and writers often rely on multiple platforms to publish stories, discover new content, listen to narrated works, and engage with creative communities. We wanted to create a single platform that combined immersive reading, multimedia storytelling, personalized discovery, and meaningful community interaction while making it easier for users to find stories that genuinely match their interests.',
  
    insights: [
      {
        number: '01',
        label: 'Personalized discovery keeps readers engaged',
        body:
          'User research and competitive analysis showed that readers want more intentional ways to discover stories. By allowing users to select their favorite genres during onboarding and supporting discovery through genres, fandoms, and an AO3-inspired tagging system, Sable creates a personalized experience that continues to evolve as users update their preferences.',
      },
      {
        number: '02',
        label: 'Storytelling extends beyond the written page',
        body:
          'Research into platforms like Audible, Webtoon, Wattpad, and AO3 inspired features such as audio narration, music integration, community interaction, personalized profiles, and flexible tagging that support different ways of experiencing and sharing stories.',
      },
      {
        number: '03',
        label: 'Atmosphere strengthens immersion',
        body:
          'The interface was intentionally designed around a medieval-inspired aesthetic using parchment textures, warm earth tones, and aged paper styling. These visual choices reinforce the storytelling experience and create an environment that feels distinct from modern reading platforms.',
      },
    ],
  
    keyDecisions: [
      {
        versus: 'Replicating a single storytelling platform',
        decision: 'Combine the strengths of multiple platforms',
        annotation:
          'Rather than recreating one existing service, we combined inspiration from Webtoon, Wattpad, AO3, and Audible to create a platform that blends immersive reading, multimedia storytelling, community interaction, personalized recommendations, and flexible story discovery into one cohesive experience.',
      },
      {
        versus: 'Generic content recommendations',
        decision: 'Personalized recommendations from onboarding',
        annotation:
          'Users choose the genres they enjoy when creating an account, allowing the recommendation algorithm to surface stories tailored to their interests immediately. These preferences can be updated later, ensuring recommendations continue evolving alongside each reader.',
      },
      {
        versus: 'Modern minimalist aesthetics',
        decision: 'A medieval-inspired visual identity',
        annotation:
          'Warm parchment colors, textured backgrounds, and earthy tones were chosen to evoke the feeling of reading from an aged manuscript. This visual language supports the platform’s storytelling focus while creating a memorable and immersive experience.',
      },
    ],
  
    process: [
      {
        step: 'Research & Planning',
        detail:
          'Conducted competitive analysis of platforms including Webtoon, Wattpad, AO3, and Audible while participating in stakeholder planning, user research, feature prioritization, and identifying opportunities to improve story discovery, community engagement, and multimedia storytelling.',
      },
      {
        step: 'UX & Product Design',
        detail:
          'Collaborated with my team on wireframes, user flows, onboarding experiences, recommendation features, and interactive prototypes in Figma while helping shape a medieval-inspired interface built around parchment textures, earthy colors, and immersive reading experiences.',
      },
      {
        step: 'Content Production',
        detail:
          'Led the creation and organization of the platform’s content by designing book covers, writing story titles and descriptions, creating user profiles, populating story libraries, and ensuring the platform felt authentic, engaging, and consistent throughout testing and demonstrations.',
      },
      {
        step: 'Testing & Refinement',
        detail:
          'Participated in usability testing, distributed surveys, analyzed participant feedback, and collaborated with the team to improve navigation, recommendation flows, content organization, and overall user experience throughout development.',
      },
    ],
  
    retrospective:
      'Sable reinforced how closely UX research, content strategy, and product design influence one another throughout the development process. As Content Production Lead, I learned that realistic content plays a critical role in shaping user perception and validating design decisions. Beyond content production, I contributed to competitive analysis, stakeholder planning, user research, feature planning, and usability testing while collaborating closely with my team to build and launch a fully deployed storytelling platform. Working on features such as personalized recommendations, immersive story discovery, the AO3-inspired tagging system, and the platform’s medieval-inspired visual identity deepened my understanding of how thoughtful design decisions can shape both usability and emotional engagement. Presenting Sable during the Senior Web Design Showcase gave me valuable experience communicating our research, design process, and product vision to faculty and industry professionals.',
  },

  {
    id: 2,
    title: 'Nova',
    category: 'ux-ui',
  
    description:
      'A high-fidelity mobile UX/UI prototype designed to help people form more personalized and meaningful connections beyond surface-level interactions. Nova is a star-themed connection app that allows users to discover friendships and relationships through shared hobbies, personality traits, interests, values, and compatibility preferences. I worked as a UX/UI Designer on the team, contributing to interface design, user flows, prototyping, research, and usability testing.',
  
    role: 'UX/UI Designer',
    year: '2025',
    duration: '6 months',
  
    overview:
      'Nova is a high-fidelity interactive mobile app prototype created in Figma that explores a more intentional approach to online connection. Rather than relying primarily on appearance-based matching, Nova focuses on helping users build relationships through shared interests, personality, values, and lifestyle preferences. Inspired by platforms such as Tinder, Hinge, Bumble, Facebook Dating, OkCupid, and Coffee Meets Bagel, Nova combines personalized profiles, compatibility-based discovery, inclusive filtering, chat features, and privacy controls within a star-themed experience centered around the idea of finding meaningful connections and your “fated pair.”',
  
    problem:
      'Many existing connection platforms prioritize quick judgments and surface-level interactions, making it difficult for users to understand who someone truly is before connecting. Our challenge was to design an experience that encourages deeper connections by allowing users to express their identity, discover shared interests, and connect with people based on compatibility rather than appearance alone.',
  
    insights: [
      {
        number: '01',
        label: 'Meaningful connections require context',
        body:
          'Research into existing platforms showed that users often want more information before deciding to connect. Shared hobbies, personality traits, values, and interests provide deeper context and help users discover people they genuinely relate to.',
      },
      {
        number: '02',
        label: 'Personalization creates stronger matches',
        body:
          'Users have unique identities, preferences, and relationship goals. Nova was designed with customizable profiles and inclusive filtering options that allow people to discover connections based on what matters most to them.',
      },
      {
        number: '03',
        label: 'Trust encourages authentic interaction',
        body:
          'Building relationships online requires users to feel comfortable and in control. Privacy settings, profile customization, and intentional user choices were integrated to create a safer and more authentic connection experience.',
      },
    ],
  
    keyDecisions: [
      {
        versus: 'Appearance-first matching',
        decision: 'Compatibility-driven discovery',
        annotation:
          'Nova was designed to move beyond quick judgments by emphasizing hobbies, personality, interests, identity, and values. The goal was to help users connect with people they genuinely relate to rather than making decisions based only on appearance.',
      },
      {
        versus: 'Limited profile information',
        decision: 'Personalized identity-focused profiles',
        annotation:
          'Profiles were designed as a reflection of each user’s personality and interests, allowing people to showcase what makes them unique and giving others more meaningful reasons to connect.',
      },
      {
        versus: 'Generic user experiences',
        decision: 'Inclusive customization and privacy controls',
        annotation:
          'Nova prioritizes individual choice by allowing users to customize discovery preferences, including hobbies, personality, gender, sexual orientation, values, and other important factors that influence compatibility.',
      },
    ],
  
    image: novaImage,
  
    tools: ['Figma'],
  
    figmaLink:
      'https://www.figma.com/proto/UvAsLdNld2MCbzXtuR1vs0/Nova?node-id=77-146&t=FkqBmv3TuovnIbCC-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=77%3A146&show-proto-sidebar=1',
  
    liveLink: null,
  
    githubLink: null,
  
    presentationLink: novaPresentationPDF,
  
    process: [
      {
        step: 'Research & Competitive Analysis',
        detail:
          'Researched existing platforms including Tinder, Hinge, Bumble, Facebook Dating, OkCupid, and Coffee Meets Bagel to identify opportunities for creating more personalized and meaningful connection experiences.',
      },
      {
        step: 'Audience & Product Planning',
        detail:
          'Defined target audiences, explored user motivations, considered stakeholder needs, and identified opportunities for a more inclusive and personalized approach to online connection.',
      },
      {
        step: 'UX/UI Design',
        detail:
          'Designed user flows, swipe interactions, personalized profiles, chat features, privacy settings, and a cohesive star-themed interface system focused on creating an engaging and approachable experience.',
      },
      {
        step: 'Prototyping & Testing',
        detail:
          'Built a high-fidelity interactive prototype in Figma and conducted usability testing to evaluate user flows, gather feedback, and refine the overall experience.',
      },
    ],
  
    retrospective:
      'Nova expanded my understanding of designing digital experiences around human connection, identity, and personalization. As a UX/UI Designer, I contributed to interface design, user flows, prototyping, research, and usability testing while collaborating with my team to create an experience focused on meaningful connections rather than superficial interactions. Through competitive analysis and user research, I learned how important trust, inclusivity, personalization, and user control are when designing social experiences. If I continued developing Nova, I would expand testing with a broader range of users, continue improving accessibility, and explore additional ways to support deeper connections between people.',
  },

  {
    id: 3,
    title: 'Starr Wellness Collective',
    category: 'ux-ui',
    role: 'Content Strategist & Web Design Intern',
    year: '2025',
    duration: '6 months',

    image: swcPlaceholder,

    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Google PageSpeed Insights', 'Google Analytics'],

    description:
      'A full website redesign completed during my UX/UI Design internship at Starr Wellness Collective. I led the project from a formal redesign proposal through UX auditing, information architecture, and a complete visual overhaul while optimizing performance, accessibility, and technical SEO along the way. The redesign increased user engagement across the site and contributed to the organization qualifying for a $10,000 Google Ad Grant.',

    liveLink: null,
    figmaLink: null,
    githubLink: null,
    redesignLink: swcCaseStudyPDF,

    documents: [
      { label: 'View Redesign Proposal', href: swcProposalPDF },
      { label: 'View Redesign', href: swcCaseStudyPDF },
    ],

    ctaHeading: 'The full redesign is documented.',
    ctaSub: 'Explore the redesign proposal, UX process, and measurable outcomes.',

    overview:
      'During my UX/UI Design internship at Starr Wellness Collective, I led a comprehensive website redesign focused on improving usability, accessibility, search visibility, and user engagement. The project began with a formal redesign proposal before moving through UX auditing, information architecture, visual design, and implementation recommendations. Alongside redesigning the user experience, I optimized website performance, strengthened technical SEO, improved mobile responsiveness, ensured compliance with Google Ad Grants website requirements, and contributed to helping the organization qualify for a $10,000 Google Ad Grant.',

    problem:
      'The existing website no longer reflected the professionalism of the organization or effectively guided visitors toward learning about services, providers, and wellness resources. Navigation was difficult to follow, mobile usability needed improvement, and technical issues limited both user experience and search performance. The goal was to create a website that felt welcoming, trustworthy, and easier to navigate while improving overall site performance, accessibility, and visibility.',

    insights: [
      {
        number: '01',
        label: 'Trust begins with the first impression',
        body:
          'Visitors searching for wellness services make decisions quickly based on professionalism, clarity, and credibility. Creating a visual experience that communicated warmth, expertise, and trust became one of the primary design goals.',
      },
      {
        number: '02',
        label: 'Clear navigation increases conversions',
        body:
          'Important services and provider information were buried within the original navigation structure. Reorganizing the information architecture reduced friction and made essential content significantly easier to discover.',
      },
      {
        number: '03',
        label: 'Performance is part of user experience',
        body:
          'Improving page speed, technical SEO, mobile responsiveness, and eliminating broken links not only created a smoother browsing experience but also increased user engagement and search visibility.',
      },
    ],

    keyDecisions: [
      {
        versus: 'Beginning with visual mockups',
        decision: 'Start with research and strategy',
        annotation:
          'Created a formal redesign proposal before entering the design phase, allowing project goals, stakeholder expectations, and UX recommendations to be established before visual design began.',
      },
      {
        versus: 'Maintaining the existing site structure',
        decision: 'Rebuild the information architecture',
        annotation:
          'Navigation and content hierarchy were redesigned around visitor goals rather than internal organization, making services, providers, and wellness resources easier to locate.',
      },
      {
        versus: 'Improving only the visual design',
        decision: 'Combine UX improvements with technical optimization',
        annotation:
          'The redesign balanced aesthetics with measurable performance improvements by optimizing page speed, strengthening technical SEO, improving mobile usability, repairing broken links, and increasing accessibility.',
      },
    ],

    process: [
      {
        step: 'Discovery & UX Audit',
        detail:
          'Evaluated the existing website through usability reviews, stakeholder discussions, competitive analysis, and content audits before documenting recommendations in a comprehensive redesign proposal.',
      },
      {
        step: 'Information Architecture',
        detail:
          'Restructured navigation, content hierarchy, and user flows to improve discoverability of providers, wellness services, educational resources, and important calls to action.',
      },
      {
        step: 'Visual Design & Optimization',
        detail:
          'Designed a refreshed visual identity with updated layouts, typography, color systems, imagery, and responsive components while improving accessibility, technical SEO, page speed, and mobile responsiveness.',
      },
      {
        step: 'Evaluation & Iteration',
        detail:
          'Measured redesign performance using analytics and optimization tools while monitoring user engagement, search visibility, mobile usability, conversions, and website compliance with Google Ad Grants requirements.',
      },
    ],

    results: [
      {
        category: 'Improved Website Performance',
        metric: 'Site Speed Optimization',
        value: '25% faster load time',
        description:
          'Reduced average page load time by 25%. Improved First Contentful Paint (FCP) to 0.8 seconds, improved Largest Contentful Paint (LCP) by +6, and achieved a near-perfect Cumulative Layout Shift (CLS) score of 0.003 as measured by Google PageSpeed Insights.',
      },
      {
        category: 'Improved Website Performance',
        metric: 'Technical SEO',
        value: '23% increase in organic search visibility (75 → 92)',
        description:
          'Increased organic search visibility by 23% through technical SEO improvements, including website structure optimization, improved content organization, and enhanced search engine accessibility.',
      },
      {
        category: 'Improved Website Performance',
        metric: 'Mobile Responsiveness',
        value: '15–20% improvement in mobile usability',
        description:
          'Improved mobile usability by 15–20% through responsive design improvements, resolved mobile display issues, enhanced accessibility, and reduced mobile bounce rate.',
      },
      {
        category: 'Improved Website Performance',
        metric: 'Broken Links',
        value: 'Nearly 100% reduction in broken links',
        description:
          'Identified and eliminated nearly 100% of broken links across the website, improving navigation, usability, and overall technical website health.',
      },
    
      {
        category: 'Boosted Engagement',
        metric: 'Overall Website Engagement',
        value: '38.9% longer sessions and 8.1% lower bounce rate',
        description:
          'Increased average session duration by 38.9%, improving from 5m 23s to 7m 42s. Reduced overall bounce rate by 8.1%, from 42.5% down to 39.1%.',
      },
      {
        category: 'Boosted Engagement',
        metric: 'Blog Engagement',
        value: '+38.3% increase in visits',
        description:
          'Increased visits to the updated Blog page by 38.3% since April 20th through improved content organization and discoverability.',
      },
      {
        category: 'Boosted Engagement',
        metric: 'Contact Form Submissions',
        value: '133% increase',
        description:
          'Boosted contact form submissions by 133%, increasing from 6 total submissions before my start date to 14 new submissions after optimization.',
      },
    
      {
        category: 'Streamlined Operations & Enhanced Brand Professionalism',
        metric: 'Google Ad Grants Compliance',
        value: '100% website policy compliance',
        description:
          'Ensured 100% compliance with Google Ad Grants website policies by improving nonprofit mission clarity, accessibility, content quality, and website requirements.',
      },
      {
        category: 'Streamlined Operations & Enhanced Brand Professionalism',
        metric: 'Google Ad Grant Achievement',
        value: '$10,000 Google Ad Grant',
        description:
          'Helped support Starr Wellness Collective in achieving qualification for a $10,000 Google Ad Grant by improving website performance, technical SEO, content clarity, and nonprofit website compliance.',
      },
    ],

    testimonial: {
      author: 'Marisol Starr',
      role: 'Founder & Charity Director, Starr Wellness Collective',
      quote:
        'I highly recommend Asiya as an exceptional Web Optimization and SEO Specialist. During her internship at Starr Wellness Collective, Asiya profoundly enhanced our website functionality, user experience, and technical performance. She significantly boosted our technical SEO, optimized site speed, and resolved critical mobile display issues. Asiya also implemented key features like a gallery and testimonials to increase user engagement, and expertly integrated Google and Facebook tags for enhanced analytics. Her meticulous attention to detail and ability to drive tangible improvements in digital presence make her an invaluable asset to any team.',
    },

    retrospective:
      'This internship strengthened my understanding that UX design extends far beyond creating visually appealing interfaces. I learned how user research, accessibility, information architecture, analytics, SEO, and performance optimization work together to create meaningful digital experiences. Working directly with a real client taught me how to communicate design decisions, balance stakeholder goals with user needs, and support those decisions using measurable data. Beyond redesigning the interface, I improved website performance, strengthened technical SEO, enhanced mobile usability, increased user engagement across multiple pages, significantly boosted contact form submissions, and ensured the site met Google Ad Grants requirements. Seeing measurable improvements in both user experience and organizational outcomes reinforced the importance of designing with both people and performance in mind.',
  },

  {
    id: 4,
    title: 'Asiya’s Flowers',
    category: 'web-design',
  
    role: 'Designer & Developer',
    year: '2026',
  
    description:
      'A responsive flower boutique website created for a low-code development course. Designed to establish a warm, elegant digital presence for a fictional floral business, the site includes homepage, about, services, gallery, and contact experiences. I designed and developed the interface while improving functionality through validated forms, user feedback states, and AI-assisted testing workflows.',
  
    image: flowerStockImage,
  
    tools: ['React', 'CSS', 'HTML5', 'Claude Code (AI-assisted workflow)'],
  
    liveLink: 'https://asiyaimtiaz21.github.io/asiyas-flowers/',
    githubLink: 'https://github.com/asiyaimtiaz21/asiyas-flowers',
  
    overview:
      'Asiya’s Flowers is a responsive mock boutique website designed to translate the feeling of a local flower shop into a digital experience. The goal for this concept was to create a warm, elegant, and trustworthy online presence through thoughtful branding, responsive layouts, and intuitive user interactions. Throughout development, I designed and built the website while improving functionality through a validated contact form, visual error feedback, success states, and automated testing workflows using Claude and browser developer tools.',
  
    problem:
      'Small businesses rely heavily on their digital presence to communicate their brand and build trust with customers. The challenge was creating a website that felt personal and welcoming while maintaining usability, accessibility, and clear communication between the business and potential customers.',
  
    insights: [
      {
        number: '01',
        label: 'Brand experience begins online',
        body:
          'A boutique website needs to communicate the feeling of the business before users ever visit in person. The visual design, typography, colors, and imagery were created to reflect the warmth and craftsmanship associated with a flower boutique.',
      },
      {
        number: '02',
        label: 'Small interactions build trust',
        body:
          'Features like contact form validation, error messages, and success feedback improve confidence by showing users that their actions are recognized and the system is responding correctly.',
      },
      {
        number: '03',
        label: 'Testing improves reliability',
        body:
          'Using browser developer tools and AI-assisted testing helped identify areas where functionality could be improved. Testing navigation behavior, links, and user interactions helped create a more dependable experience.',
      },
    ],
  
    keyDecisions: [
      {
        versus: 'Overly complex business features',
        decision: 'Focused boutique experience',
        annotation:
          'Instead of adding unnecessary complexity, the website focused on presenting the brand, services, gallery, and contact experience clearly while maintaining a polished and approachable design.',
      },
      {
        versus: 'Basic contact form',
        decision: 'Validated user interaction',
        annotation:
          'The contact form was enhanced with required-field validation, visual error states, and success messaging to create a clearer and more user-friendly communication process.',
      },
      {
        versus: 'Manual testing only',
        decision: 'AI-assisted testing workflow',
        annotation:
          'Used Claude to generate testing ideas and evaluate existing functionality, then verified results through Chrome Developer Tools and repository-based testing workflows.',
      },
    ],
  
    process: [
      {
        step: 'Brand & Visual Design',
        detail:
          'Created a soft botanical visual identity with thoughtful typography, colors, imagery, and layouts that reflected the personality of a boutique flower business.',
      },
      {
        step: 'Interface Development',
        detail:
          'Built responsive pages including the homepage, about section, services, gallery, and contact experience using React, HTML, and CSS.',
      },
      {
        step: 'Form Enhancement',
        detail:
          'Improved the existing contact form by adding validation, required-field feedback, error handling, and successful submission messaging.',
      },
      {
        step: 'Testing & Refinement',
        detail:
          'Used Claude-assisted testing ideas and Chrome Developer Tools to verify navigation behavior, DOM structure, link functionality, and user interactions.',
      },
    ],
  
    retrospective:
      'Building Asiya’s Flowers helped me understand how visual design and functionality work together to create a trustworthy business experience. Beyond creating the interface, I gained experience improving user interactions through form validation, feedback states, and testing workflows. Using AI-assisted development and testing tools also showed me how emerging tools can support the development process while still requiring thoughtful design decisions. If I continued developing this project, I would expand the site with dynamic content management, seasonal flower collections, and a more complete ordering experience while maintaining the personal feel of a boutique brand.',
  },

  {
    id: 5,
    title: 'Study Planner',
  
    category: 'web-design',
  
    role: 'Designer & Developer',
  
    year: '2026',
  
    description:
      'A productivity-focused student web application designed to help users organize assignments, manage study sessions, and build better study habits. The application combines task management, Pomodoro-style focus sessions, progress tracking, local data persistence, and an AI-powered study advice feature using a locally hosted LLM.',
  
    image: studyStockImage,
  
    tools: [
      'HTML5',
      'CSS',
      'Vanilla JavaScript',
      'localStorage',
      'Ollama',
      'Gemma 3:1B',
      'Claude Code (AI-assisted workflow)'
    ],
  
    liveLink: 'https://asiyaimtiaz21.github.io/study-planner-app/',
  
    githubLink: 'https://github.com/asiyaimtiaz21/study-planner-app',
  
    overview:
      'Study Planner is a productivity web application designed around the everyday needs of students. The goal was to create a simple and effective system where students can track assignments, organize subjects, manage focused study sessions, and monitor progress without the complexity of traditional productivity tools. The application includes assignment tracking, a Pomodoro-style timer, subject organization, progress analytics, local data persistence, and an AI-powered study advice feature that analyzes pending assignments and provides personalized recommendations using a locally hosted language model.',
  
    problem:
      'Students often struggle with managing multiple assignments, deadlines, and study schedules across different courses. Many productivity tools are either too generalized or require unnecessary setup, creating more friction instead of helping students stay organized. The challenge was designing a lightweight, accessible planner that supports student workflows while making organization and focus easier.',
  
    insights: [
      {
        number: '01',
        label: 'Students need simplicity over complexity',
        body:
          'Students manage constantly changing workloads, deadlines, and priorities. A successful planning tool needs to reduce friction by making it quick and easy to record assignments, organize tasks, and view progress.',
      },
      {
        number: '02',
        label: 'Deadlines create motivation',
        body:
          'Assignments become easier to manage when deadlines and subjects are clearly visible. Organizing tasks around due dates helps students understand priorities and make informed decisions about their time.',
      },
      {
        number: '03',
        label: 'Personalized guidance improves planning',
        body:
          'Adding AI-powered study advice allowed the application to move beyond simple tracking by analyzing pending assignments and providing personalized suggestions based on the student’s workload.',
      },
    ],
  
    keyDecisions: [
      {
        versus: 'Complex productivity platforms',
        decision: 'A focused student-centered workflow',
        annotation:
          'Instead of creating an overwhelming task management system, Study Planner focuses on the features students use most: assignments, subjects, study sessions, and progress tracking.',
      },
      {
        versus: 'Server-based data storage',
        decision: 'Local storage persistence',
        annotation:
          'Using browser localStorage allowed the application to save user data without requiring accounts or external infrastructure. This kept the experience fast, private, and accessible while maintaining persistence between sessions.',
      },
      {
        versus: 'Generic productivity advice',
        decision: 'AI-powered personalized recommendations',
        annotation:
          'The integrated AI feature uses Ollama and the Gemma 3:1B model locally to analyze pending assignments and generate customized study advice, creating a more supportive and personalized experience.',
      },
    ],
  
    process: [
      {
        step: 'Feature Planning',
        detail:
          'Identified essential student productivity needs and planned features including assignment tracking, study sessions, subject organization, progress tracking, and AI-assisted guidance.',
      },
      {
        step: 'Interface Design',
        detail:
          'Designed a clean and responsive interface focused on reducing distractions while making important information such as deadlines and progress easy to understand.',
      },
      {
        step: 'Development',
        detail:
          'Built the application using HTML5, CSS, and Vanilla JavaScript with localStorage-based data persistence to create a functional browser-based experience.',
      },
      {
        step: 'AI Integration & Testing',
        detail:
          'Integrated a locally running Ollama model with the application to generate personalized study advice based on stored assignments. Tested functionality through iterative development and refinement.',
      },
    ],
  
    retrospective:
      'Building Study Planner helped me understand how thoughtful functionality and user-centered design work together to create useful digital tools. Developing features such as assignment tracking, local persistence, and AI-generated study advice showed me how small interactions can improve the overall user experience. Integrating Ollama and a local language model was especially valuable because it helped me understand how AI features can be incorporated into applications while maintaining control over the workflow. If I continued developing the project, I would expand the AI capabilities by allowing it to consider assignment difficulty, deadlines, and workload priority when generating study recommendations. I would also explore additional customization options for different learning styles and study habits.',
  },

    {
      id: 7,
      title: 'Sable Book Cover Series',
      category: 'graphic-design',
      description: 'A collection of 18 mock book covers created to populate the Sable reading platform. Each design builds its own visual identity around genre, tone, and era through typography and image composition alone.',
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
    
      title: 'Deluxe Auto Detailing Brand Identity',
    
      category: 'graphic-design',
    
      description:
        'A premium automotive brand identity redesign created for Deluxe Auto Detailing. The project transformed an existing simple logo into a more polished and memorable identity system through custom illustration, refined typography, and adaptable logo variations designed for digital and print applications.',
    
      image: logoOnly,
    
      logoVariants: CAR_LOGO_VARIANTS,
    
      tools: ['Adobe Illustrator'],
    
      liveLink: null,
    
      githubLink: null,
    
      process: [
        {
          step: 'Research & Discovery',
          detail:
            'Analyzed Deluxe Auto Detailing’s existing identity, target audience, and industry positioning to understand how the brand could better communicate precision, luxury, trust, and professional automotive care.',
        },
        {
          step: 'Concept Development',
          detail:
            'Explored different approaches for representing premium automotive detailing before developing a custom vehicle mark based on a 3/4 side profile luxury SUV silhouette inspired by high-end automotive design. The angled perspective created more depth and personality compared to the original front-facing vehicle graphic.',
        },
        {
          step: 'Refinement',
          detail:
            'Refined the vehicle illustration, typography, spacing, and overall composition to create a balanced and professional identity. The monochromatic black, gray, and white palette reinforced the premium positioning while maintaining versatility across different applications.',
        },
        {
          step: 'Production & Variants',
          detail:
            'Created a complete logo system with multiple production-ready variations, including the primary logo, black version, white version, and horizontal lockup. These formats allow the brand to maintain consistency across websites, social media, signage, print materials, apparel, and vehicle applications.',
        },
      ],
      retrospective:
        'This project challenged me to transform an existing logo into a complete brand identity while staying aligned with the client’s original vision. The main design challenge was creating a mark that communicated luxury and automotive expertise without becoming overly complicated. I am most proud of developing a cohesive identity system that combines a custom vehicle illustration, refined typography, and flexible logo variations to create a more professional and recognizable representation of Deluxe Auto Detailing.',
    },

  ];

  export default projects;