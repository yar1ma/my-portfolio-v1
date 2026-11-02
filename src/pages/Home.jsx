import Hero from '../components/Hero.jsx';
import Technologies from '../components/Technologies.jsx';
import About from '../components/About.jsx';
import Experience from '../components/Experience.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Connect from '../components/Connect.jsx';

export default function Home() {
  return (
    <main>
      <div id="top"></div>
      <Hero />
      <Technologies />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Connect />
    </main>
  );
}