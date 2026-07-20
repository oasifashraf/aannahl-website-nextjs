import type { Metadata } from 'next';
import './globals.css';
import '@/styles/index.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Aan Nahl Software | Modern Software Development Firm',
  description: 'Aan Nahl builds web applications, mobile-first interfaces, UI/UX design, dedicated teams, and support for growing businesses.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
