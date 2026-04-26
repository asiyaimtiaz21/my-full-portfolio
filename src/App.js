import { HashRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Photography from './pages/Photography';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:category" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;