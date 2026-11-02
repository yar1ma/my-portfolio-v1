import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="split-landing">
      <Link to="/data" className="split-half split-data">
        <div className="split-bg split-bg-data"></div>
        <div className="split-overlay"></div>
        <div className="split-content">
          <h2>Data Specialist</h2>
          <span className="split-btn">Enter</span>
        </div>
      </Link>

      <Link to="/software" className="split-half split-software">
        <div className="split-bg split-bg-software"></div>
        <div className="split-overlay"></div>
        <div className="split-content">
          <h2>Software Developer</h2>
          <span className="split-btn">Enter</span>
        </div>
      </Link>

      <Link to="/ai" className="split-half split-ai">
        <div className="split-bg split-bg-ai"></div>
        <div className="split-overlay"></div>
        <div className="split-content">
          <h2>AI/ML Engineer</h2>
          <span className="split-btn">Enter</span>
        </div>
      </Link>
    </div>
  );
}