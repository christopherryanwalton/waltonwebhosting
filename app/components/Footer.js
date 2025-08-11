import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link href="/" className="footer-link">Home</Link>
          <Link href="/about" className="footer-link">About</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
          <Link href="#" className="footer-link">Privacy Policy</Link>
          <Link href="#" className="footer-link">Terms of Service</Link>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Walton Web Hosting. All rights reserved.</p>
          <p>Empowering businesses with affordable hosting solutions.</p>
        </div>
      </div>
    </footer>
  )
}
