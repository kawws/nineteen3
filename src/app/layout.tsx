// src/app/layout.tsx
import Header from './components/Header';
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
      <head>
      <link rel="icon" href="https://nineteenstudent.se/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
      <script id="script-loader" src="https://maps.googleapis.com/maps/api/js?libraries=maps&amp;key=AIzaSyAszTDHpgO36yKAMCdzV__2GlxX0aKLlR4&amp;v=weekly&amp;map_ids=&amp;language=en&amp;region=US&amp;auth_referrer_policy=origin&amp;callback=google.maps.__ib__"></script>
    </html>
    
  );
}
