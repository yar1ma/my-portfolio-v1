export default function AiProjects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
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
          <p>End-to-end machine learning pipeline for breast cancer classification — trains a Logistic Regression model, evaluates it, and serves predictions through a FastAPI endpoint.</p>
          <div className="tags"><span>Python</span><span>Machine Learning</span><span>AI/ML</span></div>
          <a href="https://github.com/yar1ma/ml-pipeline-project/tree/main" target="_blank" rel="noopener" className="project-link">View Code</a>
        </article>
      </div>
    </section>
  );
}