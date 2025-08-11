export default function Home() {
  return (
    <div className="hero">
      <div className="container">
        <h1>Welcome to Walton Web Hosting</h1>
        <p className="subtitle">Easy, Affordable, and Reliable Hosting Solutions</p>
        <a href="/contact" className="btn">Get Started</a>
      </div>

      <div className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="grid">
            <div className="card">
              <h3>Small Business Hosting</h3>
              <p>Perfect solutions for small businesses.</p>
            </div>
            <div className="card">
              <h3>WordPress Hosting</h3>
              <p>Optimized hosting for WordPress sites.</p>
            </div>
            <div className="card">
              <h3>Server Hosting</h3>
              <p>Dedicated server solutions.</p>
            </div>
            <div className="card">
              <h3>Consulting</h3>
              <p>Expert guidance for your hosting needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
