
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M20 5C15 5 10 8 10 13C10 18 15 21 20 21C25 21 30 18 30 13C30 8 25 5 20 5Z"
                    stroke="var(--color-blue)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M20 19C15 19 10 22 10 27C10 32 15 35 20 35C25 35 30 32 30 27C30 22 25 19 20 19Z"
                    stroke="var(--color-blue)"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="footer-logo-text">
                <div className="logo-text-main">BLOCKCHAIN</div>
                <div className="logo-text-sub">APP ADVISOR</div>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/industries">Industries</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="/case-studies">Case Studies</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Blockchain App Advisor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

