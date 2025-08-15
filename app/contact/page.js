export default function Contact() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team</p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <p className="contact-intro">
          Have questions about our services? Need a custom hosting solution? 
          We&apos;d love to hear from you! Fill out the form below and our team will get back to you within 24 hours.
        </p>
        
        <form className="contact-form" method="POST" action="/api/contact">
          <div className="form-group">
            <label htmlFor="name">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%' }}
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  )
}
