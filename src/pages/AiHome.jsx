import AiHero from '../components/AiHero.jsx';
import AiTechnologies from '../components/AiTechnologies.jsx';
import AiAbout from '../components/AiAbout.jsx';
import Experience from '../components/Experience.jsx';
import AiSkills from '../components/AiSkills.jsx';
import AiProjects from '../components/AiProjects.jsx';
import Connect from '../components/Connect.jsx';

export default function AiHome() {
  return (
    <main>
      <div id="top"></div>
      <AiHero />
      <AiTechnologies />
      <AiAbout />
      <Experience />
      <AiSkills />
      <AiProjects />
      <Connect />
    </main>
  );
}