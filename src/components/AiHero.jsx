import { useEffect, useState } from 'react';

const ROLES = ['AI Engineer', 'ML Engineer', 'AI/ML Enthusiast'];

export default function AiHero() {
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
          <span key={roleIndex} className="role-text">{ROLES[roleIndex]}</span>
        </p>
        <p className="hero-sub">
          Building and training machine learning models — from raw data to a working prediction system.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-secondary">View Projects</a>
          <a href="#connect" className="btn-secondary">Get in Touch</a>
        </div>
      </div>
      <div className="code-card" aria-hidden="true">
  <div className="code-card-header">
    <span className="dot dot-red"></span>
    <span className="dot dot-yellow"></span>
    <span className="dot dot-green"></span>
    <span className="code-card-title">yarima.py</span>
  </div>
  <pre className="code-card-body">
    <span className="cc-var">ml_engineer</span> = {'{'}
    {'\n'}  <span className="cc-key">"name"</span>: <span className="cc-str">"Yarima"</span>,
    {'\n'}  <span className="cc-key">"role"</span>: <span className="cc-str">"AI/ML Engineer"</span>,
    {'\n'}  <span className="cc-key">"stack"</span>: [<span className="cc-str">"Python"</span>, <span className="cc-str">"scikit-learn"</span>],
    {'\n'}  <span className="cc-key">"built"</span>: <span className="cc-str">"end-to-end ML pipeline"</span>,
    {'\n'}  <span className="cc-key">"rule"</span>: <span className="cc-str">"test before you trust"</span>
    {'\n'}{'}'}
  </pre>
</div>
    </section>
  );
}