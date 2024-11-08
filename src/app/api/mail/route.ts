// route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body from the request
    const { name, email, phone, message } = await request.json();

    // Send the email using Resend's API
    const data = await resend.emails.send({
      from: 'Info <onboarding@resend.dev>',
      to: email,
      subject: 'New message from website',
      html: `<p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
      `
      ,
    });

    // Respond with a success message and the data from Resend
    return NextResponse.json({ status: 'success', data });
  } catch (error) {
    // Ensure error is handled as an Error type for better TypeScript compatibility
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    
    // Return a JSON response with the error message and a 500 status code
    return NextResponse.json({ status: 'error', message: errorMessage }, { status: 500 });
  }
}
