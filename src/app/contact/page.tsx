// page.tsx (Server Component by default)

import ContactForm from '../components/ContactForm';

export default function Page() {
  return (
    <div className='contact-page-div'>
      <h1>Kontakta oss</h1>
      <div className='contact-page-div-inner'>
        <ContactForm />
        <div className='contact-information'>
           <h3>Kontaktinformation</h3>
           <a href="mailto:info@nineteenproduction.se">info@nineteenproduction.se</a>
           <a href="tel:+46760090613">076 009 06 13</a>
           <span>Norr Mälarstrand 32,<br/>112 20 Stockholm, Sverige</span>
           <h3>Öppettider</h3>
           <p>Måndag till Fredag: 09:00 - 17:00</p>
        </div>
      </div>
    </div>

  );
}
