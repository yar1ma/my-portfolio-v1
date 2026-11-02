import { useEffect, useState } from 'react';

const ROLES = ['Data Engineer', 'Data Analyst', 'Data Scientist'];

export default function DataHero() {
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
          Working with data pipelines, analysis, and machine learning — turning raw data into something useful.
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
    <span className="cc-var">data_specialist</span> = {'{'}
    {'\n'}  <span className="cc-key">"name"</span>: <span className="cc-str">"Yarima"</span>,
    {'\n'}  <span className="cc-key">"role"</span>: <span className="cc-str">"Data Specialist"</span>,
    {'\n'}  <span className="cc-key">"stack"</span>: [<span className="cc-str">"Python"</span>, <span className="cc-str">"SQL"</span>, <span className="cc-str">"pandas"</span>],
    {'\n'}  <span className="cc-key">"learning"</span>: <span className="cc-str">"Data Engineering (ALX)"</span>,
    {'\n'}  <span className="cc-key">"goal"</span>: <span className="cc-str">"raw data into answers"</span>
    {'\n'}{'}'}
  </pre>
</div>
    </section>
  );
}