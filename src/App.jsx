import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import TrackerWriteup from './pages/TrackerWriteup.jsx';
import FarmsWriteup from './pages/FarmsWriteup.jsx';
import MLPipelineWriteup from './pages/MLPipelineWriteup.jsx';
import WhyHireMe from './pages/WhyHireMe.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<TrackerWriteup />} />
        <Route path="/farms" element={<FarmsWriteup />} />
        <Route path="/ml-pipeline" element={<MLPipelineWriteup />} />
        <Route path="/why-hire-me" element={<WhyHireMe />} />
      </Routes>
      <Footer />
    </>
  );
}
