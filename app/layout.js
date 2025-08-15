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
          <div className="container">
            <div className="nav-content">
              <a href="/" className="logo">
                <span className="logo-text">WWH</span>
              </a>
              <div className="nav-links">
                <a href="/" className="nav-link">Home</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/contact" className="nav-link">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="main-content">
          {children}
        </main>
        
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-links">
                <a href="/" className="footer-link">Home</a>
                <a href="/about" className="footer-link">About</a>
                <a href="/contact" className="footer-link">Contact</a>
                <a href="#" className="footer-link">Privacy Policy</a>
                <a href="#" className="footer-link">Terms of Service</a>
              </div>
              <div className="footer-bottom">
                <p>&copy; 2024 Walton Web Hosting. All rights reserved.</p>
                <p>Empowering businesses with affordable hosting solutions.</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
