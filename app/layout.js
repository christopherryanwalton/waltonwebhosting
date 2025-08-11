import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata = {
  title: 'Walton Web Hosting - Professional Web Hosting Solutions',
  description: 'Easy, Affordable, and Reliable Hosting Solutions for Your Business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-wrapper">
          <Navigation />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
