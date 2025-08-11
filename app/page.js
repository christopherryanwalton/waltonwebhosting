export default function Home() {
  const services = [
    {
      icon: '🌐',
      title: 'Small Business Hosting',
      description: 'Perfect hosting solutions tailored for small businesses. Get your company online with reliable, fast, and secure web hosting.'
    },
    {
      icon: '📝',
      title: 'WordPress Hosting',
      description: 'Optimized WordPress hosting with one-click installations, automatic updates, and enhanced security.'
    },
    {
      icon: '🖥️',
      title: 'Server Hosting',
      description: 'Powerful dedicated server solutions for applications that demand more resources.'
    },
    {
      icon: '💡',
      title: 'Consulting Services',
      description: 'Expert guidance to help you make the right hosting decisions.'
    },
    {
      icon: '🚀',
      title: 'Application Hosting',
      description: 'Deploy and scale your applications with ease.'
    },
    {
      icon: '🔧',
      title: 'Physical Servers',
      description: 'Coming Soon! Enterprise-grade physical server solutions.',
      comingSoon: true
    }
  ]

  return (
    <>
      <section className="hero">
        <div className="hero-background"></div>
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
      </section>

      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Choose the perfect hosting solution for your needs</p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">
                  {service.title}
                  {service.comingSoon && <span className="badge">Coming Soon</span>}
                </h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
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
