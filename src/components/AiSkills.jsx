const CATEGORIES = [
  {
    title: 'Machine Learning',
    bars: [
      { label: 'Model Training', pct: 65 },
      { label: 'Model Evaluation', pct: 60 },
    ],
  },
  {
    title: 'Libraries & Tools',
    bars: [
      { label: 'scikit-learn', pct: 65 },
      { label: 'NumPy', pct: 60 },
    ],
  },
  {
    title: 'Deployment',
    bars: [
      { label: 'FastAPI', pct: 60 },
      { label: 'Joblib', pct: 55 },
    ],
  },
  {
    title: 'Languages',
    bars: [
      { label: 'Python', pct: 70 },
    ],
  },
];

export default function AiSkills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {CATEGORIES.map((cat) => (
          <div className="skill-category" key={cat.title}>
            <h3>{cat.title}</h3>
            {cat.bars.map((bar) => (
              <div className="skill-bar" key={bar.label}>
                <span>{bar.label}</span>
                <div className="bar">
                  <div className="fill" style={{ width: `${bar.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="also-familiar">
        <h3>Also familiar with</h3>
        <div className="tags">
          <span>Model Monitoring</span>
          <span>Data Drift</span>
          <span>Feature Scaling</span>
        </div>
      </div>
    </section>
  );
}