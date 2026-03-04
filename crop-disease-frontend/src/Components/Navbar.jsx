import "./Navbar.css";

function Navbar({ toggleHistory, toggleAbout, showBack, goBack }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          {showBack && (
            <button className="back-btn" onClick={goBack} title="Go back">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
          )}
          <div className="brand-content">
            <svg className="brand-icon" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
            </svg>
            <h1>CropDiagnosis</h1>
          </div>
        </div>

        <div className="nav-buttons">
          <button className="nav-btn" onClick={toggleAbout} title="Learn about our project">
            <span>About</span>
          </button>
          <button className="nav-btn" onClick={toggleHistory} title="View detection history">
            <span>History</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
