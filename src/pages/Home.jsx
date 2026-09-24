import { useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import Technologies from '../components/Technologies.jsx';
import About from '../components/About.jsx';
import Experience from '../components/Experience.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Connect from '../components/Connect.jsx';

export default function Home() {
  useEffect(() => {
    // smooth scroll for in-page nav links
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id) || document.querySelector(`main section#${id}`);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

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
