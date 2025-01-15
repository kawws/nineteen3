// src/app/layout.tsx
import Header from './components/Header';
import Mobileheader from './components/Mobileheader';
import Footer from './components/Footer';
import './globals.css';

export const metadata = {
  title: 'Nineteen Production',
  description: 'Welcome to Nineteen Production',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Mobileheader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>

  );
}
