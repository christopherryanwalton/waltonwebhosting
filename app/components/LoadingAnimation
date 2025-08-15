'use client'
import { useState, useEffect } from 'react'

export default function LoadingAnimation() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Hide animation after it completes
  if (isLoaded) {
    setTimeout(() => {
      const wrapper = document.querySelector('.loader-wrapper')
      if (wrapper) {
        wrapper.style.display = 'none'
      }
    }, 2500)
  }

  return (
    <div className={`loader-wrapper ${isLoaded ? 'loaded' : ''}`}>
      <div className="datacenter-scene">
        <div className="door-frame">
          <div className="door left-door">
            <div className="door-panel">
              <div className="server-rack">
                <div className="server"></div>
                <div className="server"></div>
                <div className="server"></div>
              </div>
            </div>
            <div className="door-text">SECURE</div>
          </div>
          <div className="door right-door">
            <div className="door-panel">
              <div className="server-rack">
                <div className="server"></div>
                <div className="server"></div>
                <div className="server"></div>
              </div>
            </div>
            <div className="door-text">ACCESS</div>
          </div>
          <div className="center-logo">
            <div className="logo-glow">WWH</div>
            <div className="tagline">Welcome to Your Digital Infrastructure</div>
          </div>
        </div>
      </div>
    </div>
  )
}
