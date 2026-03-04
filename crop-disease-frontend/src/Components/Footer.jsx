import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About CropDiagnosis</h3>
            <p>
              We help farmers and gardeners identify plant diseases instantly
              using AI-powered technology. Our mission is to protect crops and
              ensure healthy plant growth.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#diagnose">Diagnose</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#guide">Plant Care Guide</a>
              </li>
              <li>
                <a href="#diseases">Disease Database</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#facebook" className="social-link">
                Facebook
              </a>
              <a href="#twitter" className="social-link">
                Twitter
              </a>
              <a href="#instagram" className="social-link">
                Instagram
              </a>
              <a href="#linkedin" className="social-link">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} CropDiagnosis. All rights reserved. | Privacy
            Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
