// src/app/layout.tsx
import './globals.css';
import Navbar from '../components/Navbar/Navbar'; // Navbar import
import Footer from '../components/Footer/Footer'; // Footer import
import Header from '../components/Header/Header'; // Header import

export const metadata = {
  title: 'My E-commerce Website',
  description: 'An amazing e-commerce platform built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* Header at the top */}
        <Navbar /> {/* Navbar below Header */}
        <main>{children}</main> {/* Dynamic content */}
        <Footer /> {/* Footer at the bottom */}
      </body>
    </html>
  );
}
