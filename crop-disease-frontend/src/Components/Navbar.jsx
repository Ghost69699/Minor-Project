import "./Navbar.css";

function Navbar({ toggleHistory, toggleAbout, showBack, goBack }) {
  return (
    <nav className="navbar">
      {showBack && (
        <button className="back-btn" onClick={goBack}>
          ⬅ Back
        </button>
      )}

      <h2>🌱 Crop Disease Detector</h2>

      <div className="nav-buttons">
        <button onClick={toggleHistory}>History</button>
        <button onClick={toggleAbout}>About</button>
      </div>
    </nav>
  );
}

export default Navbar;
