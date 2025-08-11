import './globals.css'

export const metadata = {
  title: 'Walton Web Hosting - Professional Web Hosting Solutions',
  description: 'Easy, Affordable, and Reliable Hosting Solutions for Your Business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <a href="/" className="nav-logo">
              <span className="logo-text">WWH</span>
            </a>
            <ul className="nav-links">
              <li><a href="/" className="nav-link">Home</a></li>
              <li><a href="/about" className="nav-link">About</a></li>
              <li><a href="/contact" className="nav-link">Contact</a></li>
            </ul>
          </div>
        </nav>
        
        <main className="main-content">
          {children}
        </main>
        
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <a href="/" className="footer-link">Home</a>
              <a href="/about" className="footer-link">About</a>
              <a href="/contact" className="footer-link">Contact</a>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 Walton Web Hosting. All rights reserved.</p>
              <p>Empowering businesses with affordable hosting solutions.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
