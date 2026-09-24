import { Link } from 'react-router-dom';

export default function MLPipelineWriteup() {
  return (
    <div className="article-page">
      <Link to="/" className="article-back">← Back to portfolio</Link>
      <h1>ML/AI Pipeline</h1>
      <p className="article-meta">Python · Machine Learning · AI/ML</p>

      <h2>Overview</h2>
      <p>
        An end-to-end machine learning pipeline for breast cancer classification, using
        Python, scikit-learn, Joblib, and FastAPI. It trains a Logistic Regression model on
        the Breast Cancer Wisconsin dataset from scikit-learn.
      </p>

      <h2>What the Pipeline Does</h2>
      <p>
        It loads the dataset, splits it into training and testing sets, scales the features
        with StandardScaler, trains a Logistic Regression model, and evaluates its accuracy.
        The trained model and scaler are saved with Joblib, then served through a FastAPI API
        so predictions can be requested over HTTP. It also includes a basic monitoring
        analysis covering model performance and data drift.
      </p>

      <h2>Technologies</h2>
      <p>Python, scikit-learn, NumPy, FastAPI, Uvicorn, Joblib, Git/GitHub.</p>

      <h2>How It Runs</h2>
      <p>
        Running <code>train.py</code> trains the model, evaluates its accuracy, and saves
        <code> model.joblib</code> and <code>scaler.joblib</code>. Running the API with
        Uvicorn exposes two endpoints: <code>GET /health</code> to check the service is up,
        and <code>POST /predict</code> to get a prediction. Interactive API docs are
        available at <code>/docs</code> once it's running.
      </p>

      <h2>Monitoring</h2>
      <p>
        The project includes a monitoring analysis covering model performance degradation,
        data drift, and considerations for when the model would need retraining.
      </p>

      <h2>Future Improvements</h2>
      <p>
        Planned next steps include more evaluation metrics, automated tests, Docker support,
        CI/CD, automated data drift monitoring, and model versioning.
      </p>

      <p className="article-meta">
        This project is for educational purposes and should not be used for medical diagnosis
        or clinical decision-making.
      </p>

      <div className="article-links">
        <a href="https://github.com/yar1ma/ml-pipeline-project/tree/main" target="_blank" rel="noopener" className="btn-primary">
          View Code
        </a>
      </div>
    </div>
  );
}