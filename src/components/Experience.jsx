const EXPERIENCE = [
  {
    date: '2026 – Present',
    title: 'Freelance — Umar Farouk Farms',
    body: 'Freelance development work for Umar Farouk Farms.',
  },
  {
    date: '2025 – Present',
    title: 'Data Engineering Trainee — ALX Africa',
    body: 'Coursework and applied projects in data engineering: pipelines, data modeling, and processing workflows.',
  },
  {
    date: '2025 – 2026',
    title: 'Front End Developer — AYA Data (Contract)',
    body: 'Moved into a front-end developer role with AYA Data on a contract basis.',
  },
  {
    date: '2023 – 2025',
    title: 'Data Specialist — AYA Data',
    body: 'Worked as a data specialist at AYA Data.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {EXPERIENCE.map((item) => (
          <div className="timeline-item" key={item.title}>
            <span className="timeline-date">{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
