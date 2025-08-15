import LoadingAnimation from './components/LoadingAnimation'

export default function Home() {
  return (
    <>
      <LoadingAnimation />
      
      <div className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Walton Web Hosting</h1>
            <p className="hero-subtitle">Easy, Affordable, and Reliable Hosting Solutions for Your Business</p>
            <div className="hero-buttons">
              <a href="/contact" className="btn btn-primary">Get Started Today</a>
              <a href="/about" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Choose the perfect hosting solution for your needs</p>
          
          <div className="services-grid">
            <div className="service-card">
              <span className="service-icon">🌐</span>
              <h3>Small Business Hosting</h3>
              <p>Perfect hosting solutions tailored for small businesses. Get your company online with reliable, fast, and secure web hosting that grows with your business.</p>
            </div>
            
            <div className="service-card">
              <span className="service-icon">📝</span>
              <h3>WordPress Hosting</h3>
              <p>Optimized WordPress hosting with one-click installations, automatic updates, and enhanced security. Build your dream website with ease.</p>
            </div>
            
            <div className="service-card">
              <span className="service-icon">🖥️</span>
              <h3>Server Hosting</h3>
              <p>Powerful dedicated server solutions for applications that demand more resources. Full root access and custom configurations.</p>
            </div>
            
            <div className="service-card">
              <span className="service-icon">💡</span>
              <h3>Consulting Services</h3>
              <p>Expert guidance to help you make the right hosting decisions. From migration strategies to optimization, we're here to help.</p>
            </div>
            
            <div className="service-card">
              <span className="service-icon">🚀</span>
              <h3>Application Hosting</h3>
              <p>Deploy and scale your applications with ease. Support for various frameworks and languages with automated deployment.</p>
            </div>
            
            <div className="service-card">
              <span className="service-icon">🔧</span>
              <h3>Physical Servers</h3>
              <p><strong>Coming Soon!</strong> Enterprise-grade physical server solutions for maximum performance and control.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of satisfied customers who trust WWH for their hosting needs</p>
          <a href="/contact" className="btn btn-primary">Contact Us Today</a>
        </div>
      </section>
    </>
  )
}
