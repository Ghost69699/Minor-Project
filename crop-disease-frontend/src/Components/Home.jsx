import "./Home.css";

function Home({ goDetect }) {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-background-elements">
          <div className="background-circle circle-1"></div>
          <div className="background-circle circle-2"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-left">
            

            <h1 className="hero-title">
              Plant Disease<br />Identification
            </h1>

            <p className="hero-description">
              Identify plant diseases instantly using AI-powered image recognition. Simply upload a photo of your plant leaf and get instant diagnosis with treatment recommendations.
            </p>

            <div className="cta-group">
              <button className="cta-button primary" onClick={goDetect}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
                <span>Start Diagnosis</span>
              </button>
              <a href="#" className="cta-button secondary">
                Learn More
              </a>
            </div>

            <div className="trust-indicators">
              <div className="indicator">
                <span className="indicator-number">10K+</span>
                <span className="indicator-text">Plants Identified</span>
              </div>
              <div className="indicator">
                <span className="indicator-number">98%</span>
                <span className="indicator-text">Accuracy Rate</span>
              </div>
              <div className="indicator">
                <span className="indicator-number">24/7</span>
                <span className="indicator-text">Free Access</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-illustrations">
              <div className="plant-illustration plant-1">
                <div className="plant-pot"></div>
                <div className="plant-leaves healthy"></div>
              </div>
              <div className="plant-illustration plant-2">
                <div className="plant-pot"></div>
                <div className="plant-leaves diseased"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabs-section">
        <div className="tabs-container">
          <div className="tabs">
            <button className="tab-btn active">
              <span className="tab-icon">📋</span>
              All Problems
            </button>
            <button className="tab-btn">
              <span className="tab-icon">🦠</span>
              Diseases
            </button>
            <button className="tab-btn">
              <span className="tab-icon">🐛</span>
              Pests
            </button>
            <button className="tab-btn">
              <span className="tab-icon">✅</span>
              Beneficial
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="info-section">
        <div className="info-container">
          <div className="info-text">
            <div className="info-header">
              <h2>Understanding Plant Diseases</h2>
              <p>Learn to identify and treat common plant problems</p>
            </div>

            <p className="info-description">
              Plant diseases can quickly spread and damage your crops or garden. Our advanced identification system uses machine learning to analyze plant images and provide accurate disease diagnosis. Early detection is key to saving your plants.
            </p>

            
          </div>

          <div className="disease-cards">
            <div className="disease-card">
              <div className="disease-icon">🍃</div>
              <h3>Leaf Spot</h3>
              <p>Circular brown or black spots on leaves caused by fungal infections</p>
              <span className="disease-severity common">Common</span>
            </div>
            <div className="disease-card">
              <div className="disease-icon">❄️</div>
              <h3>Powdery Mildew</h3>
              <p>White powdery coating on plant surfaces, typically fungal</p>
              <span className="disease-severity very-common">Very Common</span>
            </div>
            <div className="disease-card">
              <div className="disease-icon">🌱</div>
              <h3>Root Rot</h3>
              <p>Decaying roots causing yellowing, wilting, and plant death</p>
              <span className="disease-severity critical">Critical</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="features-container">
          <h2>Why Use Our Tool?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant Results</h3>
              <p>Get diagnosis in seconds with our AI system</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>High Accuracy</h3>
              <p>98% accuracy rate in disease identification</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Treatment Tips</h3>
              <p>Get personalized treatment recommendations</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
