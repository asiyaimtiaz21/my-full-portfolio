import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import './styles/global.css';
import Navbar    from './components/Navbar';
import Footer    from './components/Footer';
import Home      from './pages/Home';
import About     from './pages/About';
import Projects  from './pages/Projects';
import Skills    from './pages/Skills';
import Photography from './pages/Photography';
import Contact   from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

// Jumps to top immediately on every route change.
// 'instant' so it doesn't compete with the page fade-in.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// Re-keyed on every navigation entry so the CSS animation restarts.
// The key changes = React tears down the old div and mounts a new one
// = .page-enter animation fires fresh on every route change.
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.key} className="page-enter">
      <Routes>
        <Route path="/"                element={<Home />}         />
        <Route path="/about"           element={<About />}        />
        <Route path="/projects"        element={<Projects />}     />
        <Route path="/projects/:category" element={<Projects />}  />
        <Route path="/skills"          element={<Skills />}       />
        <Route path="/photography"     element={<Photography />}  />
        <Route path="/contact"         element={<Contact />}      />
        <Route path="/project/:id"     element={<ProjectDetail />}/>
      </Routes>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <div style={{ paddingTop: '64px' }}>
        <AnimatedRoutes />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
