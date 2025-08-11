export default function Logo() {
  return (
    <svg viewBox="0 0 100 100" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      
      {/* W shape with circuit elements */}
      <path 
        d="M 10 30 L 25 70 L 35 40 L 50 70 L 65 40 L 75 70 L 90 30" 
        stroke="url(#logoGradient)" 
        strokeWidth="4" 
        fill="none"
      />
      
      {/* Circuit nodes */}
      <circle cx="10" cy="30" r="4" fill="#3b82f6" />
      <circle cx="25" cy="70" r="3" fill="#a78bfa" />
      <circle cx="35" cy="40" r="3" fill="#a78bfa" />
      <circle cx="50" cy="70" r="4" fill="#3b82f6" />
      <circle cx="65" cy="40" r="3" fill="#a78bfa" />
      <circle cx="75" cy="70" r="3" fill="#a78bfa" />
      <circle cx="90" cy="30" r="4" fill="#3b82f6" />
      
      {/* Circuit lines */}
      <path 
        d="M 10 30 L 15 25 M 35 40 L 30 35 M 65 40 L 70 35 M 90 30 L 85 25" 
        stroke="#a78bfa" 
        strokeWidth="2" 
        fill="none"
      />
    </svg>
  )
}
