import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Landing from './pages/Landing.jsx';
import DataHome from './pages/DataHome.jsx';
import AiHome from './pages/AiHome.jsx';
import TrackerWriteup from './pages/TrackerWriteup.jsx';
import FarmsWriteup from './pages/FarmsWriteup.jsx';
import MLPipelineWriteup from './pages/MLPipelineWriteup.jsx';
import WhyHireMe from './pages/WhyHireMe.jsx';
import GhanaFoodPrices from './pages/GhanaFoodPrices.jsx';

export default function App() {
  const { pathname } = useLocation();
  const isLanding = pathname === '/';

  return (
    <>
      {!isLanding && <Nav />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/software" element={<Home />} />
        <Route path="/data" element={<DataHome />} />
        <Route path="/ai" element={<AiHome />} />
        <Route path="/tracker" element={<TrackerWriteup />} />
        <Route path="/farms" element={<FarmsWriteup />} />
        <Route path="/ml-pipeline" element={<MLPipelineWriteup />} />
        <Route path="/why-hire-me" element={<WhyHireMe />} />
        <Route path="/ghana-food-prices" element={<GhanaFoodPrices />} />
      </Routes>
      {!isLanding && <Footer />}
    </>
  );
}