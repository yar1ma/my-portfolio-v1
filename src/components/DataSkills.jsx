const CATEGORIES = [
  {
    title: 'Languages',
    bars: [
      { label: 'Python', pct: 70 },
      { label: 'SQL', pct: 60 },
    ],
  },
  {
    title: 'Data Science & ML',
    bars: [
      { label: 'Machine Learning', pct: 65 },
      { label: 'Data Analysis', pct: 65 },
    ],
  },
  {
    title: 'Data Engineering',
    bars: [
      { label: 'Data Pipelines', pct: 60 },
      { label: 'Data Modeling', pct: 55 },
    ],
  },
  {
    title: 'Tools',
    bars: [
      { label: 'Pandas', pct: 65 },
      { label: 'scikit-learn', pct: 60 },
    ],
  },
];

export default function DataSkills() {
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
          <span>Jupyter</span>
          <span>PostgreSQL</span>
          <span>Data Visualization</span>
        </div>
      </div>
    </section>
  );
}