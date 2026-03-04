import { useState, useEffect } from "react";
import "./Upload.css";

function Upload({ addHistory, reset }) {
  const [image, setImage] = useState(null);
  const [disease, setDisease] = useState("");
  const [remedy, setRemedy] = useState("");
  const [confidence, setConfidence] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Reset state when `reset` prop changes
  useEffect(() => {
    setImage(null);
    setDisease("");
    setRemedy("");
    setConfidence("");
    setIsLoading(false);
  }, [reset]);

  // Handle file upload
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsLoading(true);

    // Simulate image processing delay
    setTimeout(() => {
      setImage(URL.createObjectURL(file));

      // TEMP fake detection result
      const detected = "Leaf Blight";
      const solution = "Apply fungicide spray every 7-10 days. Remove infected leaves immediately. Ensure proper crop rotation and avoid overhead watering.";
      const conf = "94.2%";

      setDisease(detected);
      setRemedy(solution);
      setConfidence(conf);
      setIsLoading(false);

      addHistory(`${file.name} → ${detected}`);
    }, 1500);
  };

  return (
    <div className="upload-container">
      <div className="upload-content">
        {!image ? (
          <div className="upload-area">
            <div className="upload-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
                <line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
            </div>
            <h2>Upload Crop Image</h2>
            <p className="upload-subtitle">Drag and drop or click to select an image for disease detection</p>
            
            <label className="upload-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              Choose Image
              <input type="file" accept="image/*" hidden onChange={handleUpload} />
            </label>
            <p className="upload-hint">Supported formats: JPG, PNG, WebP</p>
          </div>
        ) : isLoading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Analyzing image...</p>
          </div>
        ) : (
          <div className="result-container">
            <div className="image-preview">
              <img src={image} alt="Disease detection" className="preview" />
            </div>
            
            <div className="result-content">
              <div className="disease-card">
                <div className="result-header">
                  <h3>Detection Result</h3>
                  <span className="confidence-badge">{confidence}</span>
                </div>
                
                <div className="disease-info">
                  <div className="disease-name">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                    <span className="disease-label">Detected Disease:</span>
                    <span className="disease-value">{disease}</span>
                  </div>
                </div>

                <div className="remedy-section">
                  <div className="remedy-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                    <span>Recommended Treatment</span>
                  </div>
                  <p className="remedy-text">{remedy}</p>
                </div>

                <button className="detect-again-btn" onClick={() => {
                  setImage(null);
                  setDisease("");
                  setRemedy("");
                  setConfidence("");
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 4v6h6M23 20v-6h-6"/>
                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64M3.51 15A9 9 0 0 0 18.36 18.36"/>
                  </svg>
                  Detect Another Image
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Upload;
