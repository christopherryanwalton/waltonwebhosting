import { NextResponse } from 'next/server'

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
    
    // TODO: Add your email service integration here
    // For Mailgun, SendGrid, etc.
    
    // Redirect back to contact page with success message
    return NextResponse.redirect(new URL('/contact?success=true', request.url))
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.redirect(new URL('/contact?error=true', request.url))
  }
}
