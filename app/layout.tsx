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
      <GoogleTagManager gtmId='GTM-TJPHQKJW'/>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
