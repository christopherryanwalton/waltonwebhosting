'use client'
import { useState, useEffect } from 'react'

export default function LoadingAnimation() {
  const [phase, setPhase] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Progressive animation phases
    const timers = []
    
    timers.push(setTimeout(() => setPhase(1), 100))   // Initialize
    timers.push(setTimeout(() => setPhase(2), 600))   // Connect
    timers.push(setTimeout(() => setPhase(3), 1200))  // Power up
    timers.push(setTimeout(() => setPhase(4), 1800))  // Data flow
    timers.push(setTimeout(() => setPhase(5), 2400))  // Ready
    timers.push(setTimeout(() => {
      setIsComplete(true)
      // Hide after fade completes
      setTimeout(() => {
        const wrapper = document.querySelector('.datacenter-loader')
        if (wrapper) wrapper.style.display = 'none'
      }, 800)
    }, 3000))

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  return (
    <div className={`datacenter-loader ${isComplete ? 'complete' : ''}`}>
      {/* Background Grid */}
      <div className="grid-background"></div>
      
      {/* Main Scene */}
      <div className="datacenter-viewport">
        {/* Server Rack Visualization */}
        <div className={`server-rack-container phase-${phase}`}>
          {/* Central Server Stack */}
          <div className="server-stack">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className={`server-unit unit-${num} ${phase >= num ? 'active' : ''}`}>
                <div className="server-front">
                  <div className="led-strip">
                    {[...Array(8)].map((_, i) => (
                      <span key={i} className="led" style={{ animationDelay: `${i * 0.1}s` }}></span>
                    ))}
                  </div>
                  <div className="server-label">NODE-{String(num).padStart(2, '0')}</div>
                  <div className="power-indicator"></div>
                </div>
                <div className="server-ventilation"></div>
              </div>
            ))}
          </div>

          {/* Network Connections */}
          <svg className="network-lines" viewBox="0 0 800 600">
            {/* Main backbone */}
            <path
              className={`data-path main-path ${phase >= 2 ? 'active' : ''}`}
              d="M 400 50 L 400 550"
              stroke="#7c3aed"
              strokeWidth="2"
              fill="none"
            />
            
            {/* Connection nodes */}
            {[100, 200, 300, 400, 500].map((y, i) => (
              <g key={i}>
                <path
                  className={`data-path branch-path ${phase >= 2 ? 'active' : ''}`}
                  d={`M 400 ${y} L 200 ${y} M 400 ${y} L 600 ${y}`}
                  stroke="#3b82f6"
                  strokeWidth="1"
                  fill="none"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
                <circle
                  className={`network-node ${phase >= 3 ? 'active' : ''}`}
                  cx="400"
                  cy={y}
                  r="8"
                  fill="#7c3aed"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              </g>
            ))}

            {/* Data packets */}
            {phase >= 4 && (
              <>
                <circle className="data-packet packet-1" r="3" fill="#00ff88">
                  <animateMotion dur="2s" repeatCount="indefinite">
                    <mpath href="#dataflow1" />
                  </animateMotion>
                </circle>
                <circle className="data-packet packet-2" r="3" fill="#00ffff">
                  <animateMotion dur="2.5s" repeatCount="indefinite">
                    <mpath href="#dataflow2" />
                  </animateMotion>
                </circle>
                <path id="dataflow1" d="M 200 100 L 400 100 L 400 500 L 600 500" fill="none" />
                <path id="dataflow2" d="M 600 200 L 400 200 L 400 400 L 200 400" fill="none" />
              </>
            )}
          </svg>

          {/* Side Panels - Database Icons */}
          <div className={`side-panel left-panel ${phase >= 3 ? 'active' : ''}`}>
            <div className="database-icon">
              <div className="db-cylinder"></div>
              <div className="db-cylinder"></div>
              <div className="db-cylinder"></div>
            </div>
            <div className="panel-label">STORAGE</div>
            <div className="capacity-bar">
              <div className="capacity-fill" style={{ width: phase >= 4 ? '78%' : '0%' }}></div>
            </div>
          </div>

          <div className={`side-panel right-panel ${phase >= 3 ? 'active' : ''}`}>
            <div className="network-icon">
              <div className="network-globe">
                <div className="globe-line"></div>
                <div className="globe-line"></div>
                <div className="globe-line"></div>
              </div>
            </div>
            <div className="panel-label">NETWORK</div>
            <div className="bandwidth-meter">
              <span className="meter-bar"></span>
              <span className="meter-bar"></span>
              <span className="meter-bar"></span>
              <span className="meter-bar"></span>
            </div>
          </div>
        </div>

        {/* Status Terminal */}
        <div className={`status-terminal ${phase >= 1 ? 'visible' : ''}`}>
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="terminal-title">SYSTEM INITIALIZATION</span>
          </div>
          <div className="terminal-content">
            <div className={`terminal-line ${phase >= 1 ? 'active' : ''}`}>
              <span className="prompt">&gt;</span> Connecting to datacenter...
              <span className="status success">✓</span>
            </div>
            <div className={`terminal-line ${phase >= 2 ? 'active' : ''}`}>
              <span className="prompt">&gt;</span> Establishing secure tunnel...
              <span className="status success">✓</span>
            </div>
            <div className={`terminal-line ${phase >= 3 ? 'active' : ''}`}>
              <span className="prompt">&gt;</span> Initializing server nodes...
              <span className="status success">✓</span>
            </div>
            <div className={`terminal-line ${phase >= 4 ? 'active' : ''}`}>
              <span className="prompt">&gt;</span> Optimizing network routes...
              <span className="status success">✓</span>
            </div>
            <div className={`terminal-line ${phase >= 5 ? 'active' : ''}`}>
              <span className="prompt">&gt;</span> System ready
              <span className="cursor">_</span>
            </div>
          </div>
        </div>

        {/* Logo Reveal */}
        <div className={`logo-reveal ${phase >= 5 ? 'active' : ''}`}>
          <div className="logo-container">
            <div className="logo-circuit">
              <svg viewBox="0 0 200 200" className="circuit-svg">
                <path
                  className="circuit-path"
                  d="M 50 100 L 75 150 L 100 100 L 125 150 L 150 100"
                  stroke="url(#logoGradient)"
                  strokeWidth="4"
                  fill="none"
                />
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 className="company-name">WWH</h1>
            <p className="company-tagline">WALTON WEB HOSTING</p>
            <div className="access-granted">
              <span className="access-text">ACCESS GRANTED</span>
              <div className="scan-line"></div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className={`metrics-display ${phase >= 4 ? 'visible' : ''}`}>
          <div className="metric">
            <span className="metric-value">99.9%</span>
            <span className="metric-label">UPTIME</span>
          </div>
          <div className="metric">
            <span className="metric-value">15ms</span>
            <span className="metric-label">LATENCY</span>
          </div>
          <div className="metric">
            <span className="metric-value">10Gb/s</span>
            <span className="metric-label">NETWORK</span>
          </div>
        </div>
      </div>
    </div>
  )
}
