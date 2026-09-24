import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <article className="project-card">
          <div className="project-preview">
            <iframe src="https://umar-farouk-farms.vercel.app/" loading="lazy" title="Umar Farouk Farms preview"></iframe>
          </div>
          <h3>Umar Farouk Farms</h3>
          <p>Website built for a farm business, live and deployed.</p>
          <div className="tags"><span>Web Development</span></div>
          <a href="https://umar-farouk-farms.vercel.app/" target="_blank" rel="noopener" className="project-link">View Live Site</a>
          <Link to="/farms" className="project-link">Read Write-up</Link>
        </article>

        <article className="project-card">
          <div className="project-preview">
            <iframe src="https://livestock-dashboard-alpha.vercel.app/" loading="lazy" title="Livestock GPS Tracker dashboard preview"></iframe>
          </div>
          <h3><h3>Livestock Tracking and Monitoring System</h3></h3>
          <p>Smart GPS tracker (hardware + software) for small farms without access to expensive tracking systems. Tracks animal location, flags boundary crossings, and sends alerts. Still in progress.</p>
          <div className="tags"><span>IoT</span><span>Python</span></div>
          <div className="project-links">
            <a href="https://livestock-dashboard-alpha.vercel.app/" target="_blank" rel="noopener" className="project-link">View Live Site</a>
            <a href="https://github.com/yar1ma/livestock-tracker" target="_blank" rel="noopener" className="project-link">View Code</a>
            <Link to="/tracker" className="project-link">Read Write-up</Link>
          </div>
        </article>

        <article className="project-card">
          <div className="project-preview">
            <pre className="project-code">
              <span className="cc-kw">from</span> fastapi <span className="cc-kw">import</span> FastAPI
              {'\n'}<span className="cc-kw">import</span> joblib
              {'\n'}<span className="cc-kw">import</span> numpy <span className="cc-kw">as</span> np
              {'\n\n'}app = FastAPI()
              {'\n\n'}model = joblib.load(<span className="cc-str">"model.joblib"</span>)
              {'\n'}scaler = joblib.load(<span className="cc-str">"scaler.joblib"</span>)
              {'\n\n'}<span className="cc-kw">@app.post</span>(<span className="cc-str">"/predict"</span>)
              {'\n'}<span className="cc-kw">def</span> <span className="cc-var">predict</span>(features: list[float]):
              {'\n'}    X = np.array(features).reshape(1, -1)
              {'\n'}    X_scaled = scaler.transform(X)
              {'\n'}    prediction = model.predict(X_scaled)[0]
              {'\n'}    result = <span className="cc-str">"malignant"</span> <span className="cc-kw">if</span> prediction == 0 <span className="cc-kw">else</span> <span className="cc-str">"benign"</span>
              {'\n'}    <span className="cc-kw">return</span> {'{'}<span className="cc-str">"prediction"</span>: result{'}'}
            </pre>
          </div>
          <h3>ML/AI Pipeline</h3>
          <p>Built for a technical internship interview.</p>
          <div className="tags"><span>Python</span><span>Machine Learning</span><span>AI/ML</span></div>
          <a href="https://github.com/yar1ma/ml-pipeline-project/tree/main" target="_blank" rel="noopener" className="project-link">View Code</a>
          <Link to="/ml-pipeline" className="project-link">Read Write-up</Link>
        </article>
      </div>
    </section>
  );
}
