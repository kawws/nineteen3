'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify({ name, email, phone, message }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      // Clear the form fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setFormSubmitted(true); // Set the form submitted state to true
      setIsSubmitting(false); // Reset the submitting state
      setTimeout(() => setFormSubmitted(false), 3000); // Reset button text after 3 seconds
    } else {
      alert("Error sending message. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className='contact-form'>
      <div className='form-div'>
        <input
          type="text"
          name="name"
          id="name"
          placeholder='Namn'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className='form-div'>
        <input
          type="email"
          placeholder='E-post'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='form-div'>
        <input
          type="tel"
          placeholder='Telefon'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className='form-div'>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder='Meddelande'
        />
      </div>
      
      <button
        type="submit"
        className='submit'
        disabled={isSubmitting || formSubmitted}
      >
        {formSubmitted ? 'Skickat' : isSubmitting ? 'Skickar...' : 'Skicka'}
      </button>
    </form>
  );
}
