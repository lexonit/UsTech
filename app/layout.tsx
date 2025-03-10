import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';


export const metadata = {
  title: 'US Tech Lighting Solutions',
  description: 'Salesforce Partnership',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <GoogleTagManager gtmId='GTM-TJPHQKJW'/>
      </body>
    </html>
  )
}
