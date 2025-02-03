import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'Home -  US Tech Lightning Solutions',
  description: 'Welcome to US Tech Solutions. Explore our services, client testimonials, FAQs, and more!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        
        {/* You can directly insert global meta tags here */}
        <meta name="description" content="Salesforce Partnership" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
