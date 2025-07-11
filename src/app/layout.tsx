import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import ConditionalNavbar from '@/components/layout/ConditionalNavbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Memoria Maris: Web Experience',
  description: 'Psihološka odiseja kroz olujne vode duše, gdje se mit, folklor i glazba stapaju u jedno.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-lato bg-black text-gray-200">
        <ConditionalNavbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
