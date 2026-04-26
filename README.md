# Asiya Imtiaz — Personal Portfolio

A fully custom personal portfolio built with React, showcasing my work in UX/UI design, web development, and visual design. Designed and developed from scratch with a focus on clean aesthetics, responsive layouts, and smooth user experience.

---

## Project Overview

This portfolio is a single-page application featuring six projects, a photography section, a skills overview, and a contact form. The design follows a soft pastel aesthetic — warm neutrals, dusty rose, and lavender — built around a consistent token-based CSS system.

The site was built entirely without a UI component library or CSS framework. Every component, animation, and layout was written by hand to keep the bundle lean and the design fully custom.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Routing | React Router v7 |
| Styling | Vanilla CSS with custom design tokens (CSS variables) |
| Fonts | Cormorant Garamond (serif headings), Nunito (body) via Google Fonts |
| Animations | CSS keyframes + IntersectionObserver (custom `useInView` hook) |
| Build tool | Create React App |
| Deployment | *(not yet deployed)* |

---

## Features

- **Project showcase** — Six projects across UX/UI, web design, and graphic design, each with a dedicated case study page including design process steps, tech stack, and a retrospective
- **Filter navigation** — Projects page supports category filtering (Featured, UX/UI, Web Design, Graphic Design) with animated transitions
- **Photography gallery** — Masonry grid layout with a keyboard-navigable lightbox and a direct link to the full photography portfolio
- **Responsive design** — Fully tested across mobile (375px), tablet (768px), and desktop (1440px); includes iOS Safari `100svh` fix and 44px minimum touch targets
- **Scroll animations** — Sections fade in on scroll using a custom `useInView` hook built on the native IntersectionObserver API
- **Hamburger menu** — Mobile navigation with an animated ×/≡ toggle
- **Contact form** — Structured form with validation-ready inputs, styled focus states, and clear placeholder for a form backend
- **Global footer** — Persistent footer with navigation links and social links (Email, LinkedIn, GitHub) on every page
- **Token-based design system** — All colors, spacing, typography, shadows, and radii are defined as CSS custom properties for easy theming

---

## What I Learned

**Design system thinking.** Building everything from a single `variables.css` file taught me how much leverage a well-structured token system gives you. Changing the entire color palette later only required updating a handful of values — every component responded automatically.

**Custom hooks for UI behavior.** Writing `useInView` with IntersectionObserver instead of reaching for a library gave me a clearer mental model of how scroll-driven animations actually work, and kept the bundle size down.

**CSS without shortcuts.** Working without Tailwind or a component library forced me to make deliberate decisions about every spacing value, shadow, and transition. The result is a stylesheet I can fully explain and maintain.

**Mobile-first edge cases.** Fixing real issues like the iOS Safari `100vh` problem, hamburger menu z-index stacking, and 44px touch targets showed me that responsive design goes well beyond breakpoints.

**React Router v7.** Setting up nested routes, active link states, and URL-driven filter navigation gave me practical experience with client-side routing patterns I'll use in larger applications.

---

## Future Improvements

- **Wire up the contact form** — Integrate with Formspree or EmailJS so form submissions send a real email without needing a backend server
- **Add a resume download** — Link a hosted PDF from the navbar and Contact page
- **Replace placeholder photography** — Swap the current placeholder images in the gallery with real photography from [Imtiaz Imagez](https://imtiazimagez.myportfolio.com)
- **Dark mode** — The CSS variable system is already structured for theming; adding a `[data-theme="dark"]` override and a toggle would be straightforward
- **SEO and meta tags** — Update `public/index.html` with proper `<meta>` descriptions and Open Graph tags so the portfolio previews correctly when shared on LinkedIn or Slack
- **Accessibility audit** — Run a full WCAG 2.1 AA pass with a screen reader to catch any remaining contrast or focus-management issues

---

## Running Locally

```bash
# Clone the repository
git clone https://github.com/asiyaimtiaz21/my-full-portfolio.git
cd my-full-portfolio

# Install dependencies
npm install

# Start the development server
npm start
# Opens at http://localhost:3000
```

```bash
# Build for production
npm run build
```

---

## Contact

**Asiya Imtiaz**
[asiyaimtiaz03@gmail.com](mailto:asiyaimtiaz03@gmail.com) · [LinkedIn](https://linkedin.com/in/asiyaimtiaz) · [GitHub](https://github.com/asiyaimtiaz21)
