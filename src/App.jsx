import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Timeline from './components/Timeline.jsx';
import Languages from './components/Languages.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useTheme } from './hooks/useTheme.js';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
