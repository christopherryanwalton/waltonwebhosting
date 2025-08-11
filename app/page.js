'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Start animation after component mounts
    setTimeout(() => {
      setIsLoaded(true)
      // Show main content after doors open
      setTimeout(() => {
        setShowContent(true)
      }, 1500)
    }, 100)
  }, [])

  return (
    <>
      {/* Datacenter Doors Animation */}
      <div className={`loader-wrapper ${isLoaded ? 'loaded' : ''}`}>
        <div className="datacenter-scene">
          <div className="door-frame">
            <div className="door left-door">
              <div className="door-panel">
                <div className="server-rack">
                  <div className="server"></div>
                  <div className="server"></div>
                  <div className="server"></div>
                  <div className="server"></div>
                </div>
                <div className="door-handle"></div>
              </div>
              <div className="door-text">SECURE</div>
            </div>
            <div className="door right-door">
              <div className="door-panel">
                <div className="server-rack">
                  <div className="server"></div>
                  <div className="server"></div>
                  <div className="server"></div>
                  <div className="server"></div>
                </div>
                <div className="door-handle"></div>
              </div>
              <div className="door-text">ACCESS</div>
            </div>
            <div className="center-logo">
              <div className="logo-glow">WWH</div>
              <div className="tagline">Welcome to Your Digital Infrastructure</div>
            </div>
          </div>
          <div className="floor-grid"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`main-content ${showContent ? 'visible' : ''}`}>
        <div className="hero">
          <div className="container">
            <h1 className="hero-title">Welcome to Walton Web Hosting</h1>
            <p className="subtitle">Easy, Affordable, and Reliable Hosting Solutions</p>
            <a href="/contact" className="btn">Get Started</a>
          </div>
        </div>

        <div className="services">
          <div className="container">
            <h2>Our Services</h2>
            <div className="grid">
              <div className="card service-card">
                <div className="service-icon">🌐</div>
                <h3>Small Business Hosting</h3>
                <p>Perfect solutions tailored for small businesses with reliability and speed.</p>
              </div>
              <div className="card service-card">
                <div className="service-icon">📝</div>
                <h3>WordPress Hosting</h3>
                <p>Optimized hosting for WordPress sites with one-click installations.</p>
              </div>
              <div className="card service-card">
                <div className="service-icon">🖥️</div>
                <h3>Server Hosting</h3>
                <p>Dedicated server solutions with full root access and custom configurations.</p>
              </div>
              <div className="card service-card">
                <div className="service-icon">💡</div>
                <h3>Consulting</h3>
                <p>Expert guidance for your hosting needs and infrastructure planning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

