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
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Creepster&family=Aclonica&display=swap" rel="stylesheet" />
      </head>
      <body className="font-lato bg-black text-white">
        <ConditionalNavbar />
        <main className="min-h-screen overflow-hidden">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
