import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Career from './components/Career';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/nav/Nav';
import Footer from './components/Footer';
import './App.css';

import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
        <Nav />
        <Hero />
        <About />
        <Stack />
        <Career />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
