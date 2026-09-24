import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ROLES = ['Software Engineer', 'Data Engineer', 'AI/ML Enthusiast'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          <span style={{ whiteSpace: 'nowrap' }}>Yarima Zam-atu Faruku</span>
          <br />
          Salaga
        </h1>
        <p className="hero-role">
          <span key={roleIndex} id="rotating-role" className="role-text">{ROLES[roleIndex]}</span>
        </p>
        <p className="hero-sub">
          Building software, data pipelines, and AI/ML systems — one real project at a time.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-secondary">View Projects</a>
          <a href="#connect" className="btn-secondary">Get in Touch</a>
        </div>
        <div className="hero-actions-secondary">
        <Link to="/why-hire-me" className="btn-primary">Why Hire Me</Link>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll to explore</span>
        <span className="scroll-arrow">⌄</span>
      </div>

      <div className="code-card" aria-hidden="true">
        <div className="code-card-header">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
          <span className="code-card-title">yarima.tsx</span>
        </div>
        <pre className="code-card-body">
          <span className="cc-kw">const</span> <span className="cc-var">developer</span> = {'{'}
          {'\n'}  <span className="cc-key">name</span>: <span className="cc-str">"Yarima"</span>,
          {'\n'}  <span className="cc-key">role</span>: <span className="cc-str">"Software Engineer"</span>,
          {'\n'}  <span className="cc-key">stack</span>: [<span className="cc-str">"Python"</span>, <span className="cc-str">"React"</span>],
          {'\n'}  <span className="cc-key">passion</span>: <span className="cc-str">"clean code"</span>
          {'\n'}{'}'};
        </pre>
      </div>
    </section>
  );
}
