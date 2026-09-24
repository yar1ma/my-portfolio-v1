const CATEGORIES = [
  {
    title: 'Languages',
    bars: [
      { label: 'Python', pct: 70 },
      { label: 'JavaScript', pct: 60 },
    ],
  },
  {
    title: 'AI / ML & Data',
    bars: [
      { label: 'Machine Learning', pct: 65 },
      { label: 'Data Analysis', pct: 65 },
    ],
  },
  {
    title: 'Web Development',
    bars: [
      { label: 'HTML/CSS', pct: 75 },
      { label: 'Web Dev (general)', pct: 60 },
    ],
  },
  {
    title: 'Tools',
    bars: [
      { label: 'Git', pct: 65 },
      { label: 'Data Engineering Tools', pct: 55 },
    ],
  },
];

export default function Skills() {
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
            {/* EDIT: adjust widths (%) to reflect your actual skill level */}
          </div>
        ))}
      </div>

      <div className="also-familiar">
        <h3>Also familiar with</h3>
        <div className="tags">
          <span>IoT/Hardware</span>
          <span>Research</span>
          <span>Data Analytics</span>
        </div>
      </div>
    </section>
  );
}
