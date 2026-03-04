import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Upload from "./Components/Upload";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  // Stores past detections
  const [history, setHistory] = useState([]);

  // Current page: 'home' or 'detect'
  const [currentPage, setCurrentPage] = useState("home");

  // Used to reset Upload component when going back
  const [uploadReset, setUploadReset] = useState(false);

  // Add detection to history
  const addHistory = (item) => {
    setHistory([item, ...history]);
  };

  // Go to home
  const goHome = () => {
    setCurrentPage("home");
  };

  // Go to detect
  const goDetect = () => {
    setCurrentPage("detect");
  };

  return (
    <>
      {/* Navbar */}
      <Navbar
        currentPage={currentPage}
        goHome={goHome}
        goDetect={goDetect}
      />

      {/* Home Page */}
      {currentPage === "home" && (
        <Home goDetect={goDetect} />
      )}

      {/* Detect Page */}
      {currentPage === "detect" && (
        <Upload addHistory={addHistory} reset={uploadReset} />
      )}

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
