export default function About() {
  const values = [
    { icon: '💰', title: 'Cost-Conscious', description: 'Competitive pricing without hidden fees' },
    { icon: '🛠️', title: 'Easy Setup', description: 'Get online quickly with our intuitive platform' },
    { icon: '🔒', title: 'Secure & Reliable', description: 'Your data is safe with our robust security measures' },
    { icon: '📈', title: 'Scalable Solutions', description: 'Grow your hosting as your business expands' },
    { icon: '🤝', title: 'Personal Support', description: 'Real people who care about your success' },
    { icon: '🚀', title: 'Innovation', description: 'Always improving with the latest technologies' }
  ]

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>About Walton Web Hosting</h1>
          <p>Your trusted partner in web hosting solutions</p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Who We Are</h2>
            <p>
              Walton Web Hosting (WWH) is a newer company dedicated to making web hosting accessible, 
              affordable, and reliable for businesses of all sizes. We understand that in today&apos;s digital age, 
              having a strong online presence is crucial for success, but it shouldn&apos;t break the bank.
            </p>
            <p>
              Founded with a vision to democratize web hosting, we specialize in providing cost-conscious 
              solutions without compromising on quality or performance. Our team brings together years of 
              experience in web technologies, server management, and customer service to deliver hosting 
              solutions that just work.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              To provide easy, affordable, and reliable hosting solutions that empower businesses to 
              establish and grow their online presence. We believe that every business, regardless of 
              size or budget, deserves access to professional-grade hosting services.
            </p>
          </div>

          <div className="about-section">
            <h2>Why Choose WWH?</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <span className="value-icon">{value.icon}</span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h2>Looking Ahead</h2>
            <p>
              As we grow, we&apos;re excited to expand our services to include physical server hosting and 
              more advanced solutions. We&apos;re committed to staying at the forefront of hosting technology 
              while maintaining our core values of affordability and accessibility.
            </p>
            <p>
              Join us on our journey to make professional web hosting available to everyone. Whether 
              you&apos;re launching your first website or migrating an existing application, WWH is here 
              to support your digital success.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
