// src/app/page.tsx
import React from 'react';
import ContactForm from '../components/ContactForm';

const Page: React.FC = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default Page;
