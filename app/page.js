import Link from 'next/link'

export default function Home() {
  const services = [
    {
      icon: '🌐',
      title: 'Small Business Hosting',
      description: 'Perfect hosting solutions tailored for small businesses. Get your company online with reliable, fast, and secure web hosting that grows with your business.'
    },
    {
      icon: '📝',
      title: 'WordPress Hosting',
      description: 'Optimized WordPress hosting with one-click installations, automatic updates, and enhanced security. Build your dream website with the world\'s most popular CMS.'
    },
    {
      icon: '🖥️',
      title: 'Server Hosting',
      description: 'Powerful dedicated server solutions for applications that demand more resources. Full root access, custom configurations, and 24/7 monitoring.'
    },
    {
      icon: '💡',
      title: 'Consulting Services',
      description: 'Expert guidance to help you make the right hosting decisions. From migration strategies to optimization, our team is here to support your success.'
    },
    {
      icon: '🚀',
      title: 'Application Hosting',
      description: 'Deploy and scale your applications with ease. Support for various frameworks and languages with automated deployment pipelines.'
    },
    {
      icon: '🔧',
      title: 'Physical Servers',
      description: 'Coming Soon! Enterprise-grade physical server solutions for maximum performance and control. Stay tuned for our upcoming offerings.',
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
              <Link href="/contact" className="btn btn-primary">
                Get Started Today
              </Link>
              <Link href="/about" className="btn btn-secondary">
                Learn More
              </Link>
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
          <Link href="/contact" className="btn btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}

// ============================================
// FILE 6: app/globals.css
// Path: /app/globals.css
// ============================================
:root {
  --primary-dark: #1a1a2e;
  --secondary-dark: #16213e;
  --accent-purple: #7c3aed;
  --accent-blue: #3b82f6;
  --light-purple: #a78bfa;
  --text-light: #f3f4f6;
  --text-dim: #9ca3af;
  --card-bg: rgba(31, 41, 55, 0.8);
  --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: var(--primary-dark);
  color: var(--text-light);
  line-height: 1.6;
}

.site-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 80px;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;
  font-weight: 700;
}

h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
}

h2 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 1.5rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--light-purple);
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background: var(--gradient);
  color: white;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--light-purple);
  border: 2px solid var(--light-purple);
}

.btn-secondary:hover {
  background: var(--light-purple);
  color: var(--primary-dark);
  transform: translateY(-2px);
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(22, 33, 62, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: var(--text-light);
  font-size: 1.5rem;
  font-weight: bold;
}

.logo-text {
  background: linear-gradient(135deg, #3b82f6, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-link {
  color: var(--text-dim);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text-light);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-purple);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text-light);
  font-size: 1.5rem;
  cursor: pointer;
}

/* Hero Section */
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #1a1a2e, #16213e, #0f1724);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  z-index: -1;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.hero-content {
  text-align: center;
  z-index: 1;
}

.hero-title {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  animation: fadeInUp 1s ease;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: var(--text-dim);
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease 0.2s backwards;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease 0.4s backwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Services Section */
.services {
  padding: 5rem 0;
  background: rgba(22, 33, 62, 0.3);
}

.section-title {
  text-align: center;
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  color: var(--text-dim);
  margin-bottom: 3rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.service-card {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(124, 58, 237, 0.2);
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(124, 58, 237, 0.3);
  border-color: var(--accent-purple);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.service-title {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--light-purple);
}

.service-description {
  color: var(--text-dim);
  line-height: 1.6;
}

.badge {
  display: inline-block;
  background: var(--accent-blue);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  font-size: 0.7rem;
  margin-left: 0.5rem;
  vertical-align: middle;
}

/* CTA Section */
.cta-section {
  padding: 5rem 0;
  text-align: center;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
}

.cta-section h2 {
  margin-bottom: 1rem;
}

.cta-section p {
  color: var(--text-dim);
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

/* About Page */
.page-header {
  padding: 3rem 0;
  text-align: center;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
}

.about-content {
  padding: 3rem 0;
}

.about-section {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(124, 58, 237, 0.2);
}

.about-section h2 {
  color: var(--light-purple);
  margin-bottom: 1.5rem;
}

.about-section p {
  color: var(--text-dim);
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.value-card {
  text-align: center;
  padding: 1.5rem;
  background: rgba(124, 58, 237, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.value-card:hover {
  background: rgba(124, 58, 237, 0.2);
  transform: translateY(-5px);
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

/* Contact Page */
.contact-intro {
  text-align: center;
  color: var(--text-dim);
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.contact-form {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid rgba(124, 58, 237, 0.2);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--light-purple);
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  background: rgba(22, 33, 62, 0.5);
  border: 1px solid rgba(124, 58, 237, 0.3);
  border-radius: 8px;
  color: var(--text-light);
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-purple);
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
  background: rgba(22, 33, 62, 0.7);
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

.form-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  animation: fadeIn 0.3s ease;
}

.form-message.success {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.form-message.error {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Footer */
.footer {
  background: var(--secondary-dark);
  padding: 3rem 0 1rem;
  border-top: 1px solid rgba(124, 58, 237, 0.2);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.footer-link {
  color: var(--text-dim);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--light-purple);
}

.footer-bottom {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(124, 58, 237, 0.1);
  color: var(--text-dim);
}

.footer-bottom p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-content {
    padding-top: 70px;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(22, 33, 62, 0.98);
    flex-direction: column;
    padding: 1rem 2rem;
    gap: 1rem;
  }

  .nav-links.active {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }

  .hero {
    min-height: 70vh;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .contact-form {
    padding: 2rem 1.5rem;
  }
}
