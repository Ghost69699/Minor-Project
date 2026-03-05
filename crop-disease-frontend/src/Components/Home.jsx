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
            <button className="tab-btn" onClick={() => {
              const diseaseCards = document.getElementById("diseaseCardsRing");
              if (diseaseCards) {
                diseaseCards.scrollIntoView({ behavior: "smooth" });
              }
            }}>
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

          <div className="disease-cards-wrapper">
            <div className="disease-cards" id="diseaseCardsRing">
              <div className="disease-card card-1">
                <div className="disease-icon">🍃</div>
                <h3>Leaf Spot</h3>
                <p>Circular brown or black spots on leaves caused by fungal infections</p>
                <span className="disease-severity common">Common</span>
              </div>
              <div className="disease-card card-2">
                <div className="disease-icon">❄️</div>
                <h3>Powdery Mildew</h3>
                <p>White powdery coating on plant surfaces, typically fungal</p>
                <span className="disease-severity very-common">Very Common</span>
              </div>
              <div className="disease-card card-3">
                <div className="disease-icon">🌱</div>
                <h3>Root Rot</h3>
                <p>Decaying roots causing yellowing, wilting, and plant death</p>
                <span className="disease-severity critical">Critical</span>
              </div>
              <div className="disease-card card-4">
                <div className="disease-icon">🦠</div>
                <h3>Rust</h3>
                <p>Orange, red, or brown pustules on leaf undersides and stems</p>
                <span className="disease-severity common">Common</span>
              </div>
              <div className="disease-card card-5">
                <div className="disease-icon">🍂</div>
                <h3>Early Blight</h3>
                <p>Concentric rings on older leaves, brown spots spreading upward</p>
                <span className="disease-severity very-common">Very Common</span>
              </div>
              <div className="disease-card card-6">
                <div className="disease-icon">💧</div>
                <h3>Damping Off</h3>
                <p>Seedling stems wilt and collapse near soil line</p>
                <span className="disease-severity common">Common</span>
              </div>
              <div className="disease-card card-7">
                <div className="disease-icon">🍁</div>
                <h3>Anthracnose</h3>
                <p>Dark sunken lesions with pink spore masses on fruit and leaves</p>
                <span className="disease-severity very-common">Very Common</span>
              </div>
              <div className="disease-card card-8">
                <div className="disease-icon">🌾</div>
                <h3>Septoria Leaf Spot</h3>
                <p>Small gray spots with dark borders and black pycnidia</p>
                <span className="disease-severity common">Common</span>
              </div>
              <div className="disease-card card-9">
                <div className="disease-icon">⚫</div>
                <h3>Black Spot</h3>
                <p>Black lesions with yellow halos on rose and fruit tree leaves</p>
                <span className="disease-severity critical">Critical</span>
              </div>
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

      {/* ML Models Section */}
      <div className="ml-models-section">
        <div className="ml-models-container">
          <h2>Machine Learning Models Used</h2>
          <p>Our system leverages state-of-the-art machine learning models to ensure accurate and reliable plant disease identification.</p>
          <div className="ml-models-grid">
            <div className="ml-model-card">
              <h3>ConvNeXt</h3>
              <p>Accuracy: 97.5%</p>
              <p>A modernized architecture for image classification, optimized for high performance.</p>
            </div>
            <div className="ml-model-card">
              <h3>ResNet</h3>
              <p>Accuracy: 96.8%</p>
              <p>Deep residual networks that improve training efficiency and accuracy.</p>
            </div>
            <div className="ml-model-card">
              <h3>SegFormer</h3>
              <p>Accuracy: 95.2%</p>
              <p>A transformer-based model for semantic segmentation, ideal for precise disease localization.</p>
            </div>
            <div className="ml-model-card">
              <h3>EfficientNet</h3>
              <p>Accuracy: 94.7%</p>
              <p>A highly efficient model that balances accuracy and computational cost.</p>
            </div>
          </div>
        </div>
      </div>


      
    </div>
  );
}

export default Home;
