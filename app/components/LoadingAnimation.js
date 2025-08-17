'use client'
import { useState, useEffect } from 'react'

const asciiLogo = [
  "██     ██ ██     ██ ██   ██",
  "██     ██ ██     ██ ██   ██",
  "██  █  ██ ██  █  ██ ███████",
  "██ ███ ██ ██ ███ ██ ██   ██",
  " ███ ███   ███ ███  ██   ██",
  "   W  A  L  T  O  N   W  E  B   H  O  S  T  I  N  G",
  ""
]

const bootLogs = [
  "> Connecting to remote host...",
  "> Authenticating...",
  "> Tunnel established [OK]",
  "> Initializing virtual machine...",
  "> Loading kernel modules...",
  "> Starting services...",
  "> Allocating resources...",
  "> VM boot sequence complete.",
  "> ACCESS GRANTED: SYSTEM READY"
]

export default function LoadingAnimation() {
  const [currentLine, setCurrentLine] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem('loaderShown')) return

    setShouldShow(true)
    sessionStorage.setItem('loaderShown', 'true')

    const timers = []

    bootLogs.forEach((_, i) => {
      timers.push(setTimeout(() => setCurrentLine(i + 1), i * 450))
    })

    timers.push(
      setTimeout(() => setIsComplete(true), bootLogs.length * 450 + 1000)
    )

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  if (!shouldShow) return null

  return (
    <div className={`datacenter-loader ${isComplete ? 'fade-out' : ''}`}>
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-title">REMOTE SESSION</span>
        </div>
        <div className="terminal-body">
          {asciiLogo.map((line, i) => (
            <div key={`logo-${i}`} className="terminal-line ascii-line">
              {line}
            </div>
          ))}

          {bootLogs.slice(0, currentLine).map((line, i) => (
            <div
              key={`log-${i}`}
              className={`terminal-line ${
                line.includes("ACCESS GRANTED") ? "access-line" : ""
              }`}
            >
              {line}
              {i === currentLine - 1 && !isComplete && <span className="cursor">_</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
