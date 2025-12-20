import { useTheme } from '../../context/ThemeContext';
import logoImage from '../../assets/imgs/WhatsApp Image 2025-11-29 at 00.06.54_e2c49acd 1.png';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-icon">
            <img src={logoImage} alt="Blockchain App Advisor Logo" className="logo-img w-100" />
          </div>
          {/* <div className="logo-text">
            <div className="logo-text-main">BLOCKCHAIN</div>
            <div className="logo-text-sub">APP ADVISOR</div>
          </div> */}
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="/" className="nav-link active">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/services" className="nav-link">Services</a>
          <a href="/industries" className="nav-link">Industries</a>
          <a href="/case-studies" className="nav-link">Case studies</a>
          <a href="/blog" className="nav-link">Blog</a>
        </nav>

        {/* Right Side Actions */}
        <div className="header-actions">
          <button className="theme-toggle-button" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? (
              // Moon icon for dark mode
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M17.293 13.293C16.378 13.817 15.305 14.142 14.142 14.142C10.228 14.142 7 10.914 7 7C7 5.895 7.325 4.822 7.849 3.907C4.236 4.822 1.5 8.007 1.5 11.929C1.5 16.135 4.865 19.5 9.071 19.5C12.993 19.5 16.178 16.764 17.093 13.151L17.293 13.293Z"
                  stroke="var(--color-blue)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              // Sun icon for light mode
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle
                  cx="10"
                  cy="10"
                  r="4"
                  stroke="var(--color-blue)"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 2V4M10 16V18M18 10H16M4 10H2M16.364 3.636L14.95 5.05M5.05 14.95L3.636 16.364M16.364 16.364L14.95 14.95M5.05 5.05L3.636 3.636"
                  stroke="var(--color-blue)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
          <button className="contact-button">Contact</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

