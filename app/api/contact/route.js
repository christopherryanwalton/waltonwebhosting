export async function POST(request) {
  try {
    const formData = await request.formData()
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }
    
    // Log the submission
    console.log('Contact form submission:', data)
    
    // TODO: Add email service here
    
    // Redirect back to contact page with success
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/contact?success=true'
      }
    })
  } catch (error) {
    console.error('Error:', error)
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/contact?error=true'
      }
    })
  }
}
