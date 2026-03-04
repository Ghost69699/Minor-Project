import { useState } from "react";
import Navbar from "./Components/Navbar";
import Upload from "./Components/Upload";
import History from "./Components/History";
import "./App.css";

function App() {
  // Stores past detections
  const [history, setHistory] = useState([]);

  // Active panel: 'home' = upload page, 'image' = after upload, 'about', 'history'
  const [activePanel, setActivePanel] = useState("home");

  // Used to reset Upload component when going back
  const [uploadReset, setUploadReset] = useState(false);

  // Add detection to history and switch to image view
  const addHistory = (item) => {
    setHistory([item, ...history]);
    setActivePanel("image");
  };

  // Go back to home/upload panel and reset Upload state
  const showHome = () => {
    setActivePanel("home");
    setUploadReset(prev => !prev); // toggles to trigger reset in Upload
  };

  // Toggle About panel (mutually exclusive)
  const toggleAbout = () =>
    setActivePanel(activePanel === "about" ? "home" : "about");

  // Toggle History panel (mutually exclusive)
  const toggleHistory = () =>
    setActivePanel(activePanel === "history" ? "home" : "history");

  return (
    <>
      {/* Navbar with Back button if viewing image */}
      <Navbar
        toggleHistory={toggleHistory}
        toggleAbout={toggleAbout}
        showBack={activePanel === "image"}
        goBack={showHome}
      />

      {/* About panel */}
      {activePanel === "about" && (
        <div className="panel about-panel">
          <div className="panel-header">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4M12 8h.01"/>
            </svg>
            <h2>About CropGuard</h2>
          </div>
          
          <div className="about-content">
            <div className="about-section">
              <h3>🎯 Our Mission</h3>
              <p>
                CropGuard is an AI-powered system designed to help farmers and agricultural 
                specialists identify plant diseases quickly and accurately using deep learning 
                technology. We're committed to supporting smart agriculture and enabling early 
                disease detection to prevent crop loss.
              </p>
            </div>

            <div className="about-section">
              <h3>🔬 How It Works</h3>
              <p>
                Our advanced deep learning model analyzes crop images to identify diseases. 
                Simply upload a photo of a leaf or crop, and our system instantly provides:
              </p>
              <ul className="features-list">
                <li>Disease identification</li>
                <li>Confidence score</li>
                <li>Recommended treatment and prevention methods</li>
              </ul>
            </div>

            <div className="about-section">
              <h3>💡 Key Features</h3>
              <ul className="features-list">
                <li><strong>Fast Detection:</strong> Get results in seconds</li>
                <li><strong>Accurate Analysis:</strong> Powered by deep learning models</li>
                <li><strong>Easy to Use:</strong> Simple and intuitive interface</li>
                <li><strong>Treatment Guidance:</strong> Detailed remedies and prevention tips</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* History panel */}
      {activePanel === "history" && (
        <History history={history} />
      )}

      {/* Upload panel */}
      {(activePanel === "home" || activePanel === "image") && (
        <Upload addHistory={addHistory} reset={uploadReset} />
      )}
    </>
  );
}

export default App;
