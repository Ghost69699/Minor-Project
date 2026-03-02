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
        <div className="panel">
          <h2>About Our Project</h2>
          <p>
            Crop Disease Detection is an AI-powered system that helps farmers
            identify plant diseases quickly using images. The system detects
            the disease and provides effective remedies to prevent crop loss.
          </p>
          <p>
            Users can upload a photo of a crop leaf, and the system instantly
            analyzes it to detect the disease and provide remedies. This project
            supports smart agriculture and early disease detection.
          </p>
        </div>
      )}

      {/* History panel */}
      {activePanel === "history" && (
        <div className="panel">
          <h2>Recent Detections</h2>
          {history.length === 0 ? (
            <p>No detections yet</p>
          ) : (
            <ul>
              {history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Upload panel */}
      {(activePanel === "home" || activePanel === "image") && (
        <Upload addHistory={addHistory} reset={uploadReset} />
      )}
    </>
  );
}

export default App;
