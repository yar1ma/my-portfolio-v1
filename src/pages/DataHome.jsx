import DataHero from '../components/DataHero.jsx';
import DataTechnologies from '../components/DataTechnologies.jsx';
import DataAbout from '../components/DataAbout.jsx';
import Experience from '../components/Experience.jsx';
import DataSkills from '../components/DataSkills.jsx';
import DataProjects from '../components/DataProjects.jsx';
import Connect from '../components/Connect.jsx';

export default function DataHome() {
  return (
    <main>
      <div id="top"></div>
      <DataHero />
      <DataTechnologies />
      <DataAbout />
      <Experience />
      <DataSkills />
      <DataProjects />
      <Connect />
    </main>
  );
}