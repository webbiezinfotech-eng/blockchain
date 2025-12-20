
const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          {/* Left Side - Text Content */}
          <div className="hero-content">
            <h1 className="hero-headline">
              <span className="hero-headline-part1">BUILD THE FUTURE WITH</span>
              <span className="hero-headline-part2">WORLD-CLASS BLOCKCHAIN </span>
              <span className="hero-headline-part2"> & AI DEVELOPMENT</span>
            </h1>
            
            <p className="hero-description">
              We engineer secure, scalable and intelligent blockchain ecosystems –powered by advanced smart contracts, AI automation, token development, and next-gen decentralized applications.
            </p>
            
            <button className="hero-cta-button">
              Get a Quote
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Right Side - Graphics Placeholder */}
          <div className="hero-graphics">
            <div className="graphics-placeholder">
              <p className="placeholder-text">Graphics Placeholder</p>
              <p className="placeholder-subtext">Blockchain chain + Hand illustration will be added here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="core-services-section">
        <div className="section-container">
          <h2 className="section-heading">
            <span className="section-heading-line1">
              <span className="section-heading-part1">OUR CORE</span>
              <span className="section-heading-part2">BLOCKCHAIN & AI DEVELOPMENT</span>
            </span>
            <span className="section-heading-part2">SERVICES</span>
          </h2>
          
          <p className="section-description">
            We offer a fully specialized suite of blockchain and AI solutions designed to help startups, enterprises, and innovators build secure, scalable, and future-ready digital products.
          </p>

          {/* Service Cards */}
          <div className="service-cards">
            <div className="service-card">
              <div className="service-card-image">
                <div className="service-image-placeholder">
                  <p>Blockchain Development Image</p>
                </div>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">Blockchain Development</h3>
                <p className="service-card-description">
                  We design and develop custom blockchain solutions tailored to your business needs.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-image">
                <div className="service-image-placeholder">
                  <p>AI Development Image</p>
                </div>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">AI Development</h3>
                <p className="service-card-description">
                  Supercharge your platform with intelligent automation and machine learning capabilities.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-image">
                <div className="service-image-placeholder">
                  <p>Smart Contract Development Image</p>
                </div>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">Smart Contract Development</h3>
                <p className="service-card-description">
                  We create secure, gas-efficient, and audit-ready smart contracts for your decentralized applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

