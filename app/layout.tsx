import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';


export const metadata = {
  title: 'US Tech Lighting Solutions',
  description: 'Salesforce Partnership',
}

const GTM_ID = 'GTM-TJPHQKJW'; // Replace with your actual GTM ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_ID });
  }, []);

  return (
    <html lang="en">
      <head>
        {/* GTM Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
          }}
        />
      </head>
      <body>
        {/* GTM NoScript Fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}