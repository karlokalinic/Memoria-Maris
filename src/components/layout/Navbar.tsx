"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/o-djelu', label: 'O Djelu' },
  { href: '/likovi', label: 'Likovi' },
  { href: '/sah', label: 'Šah' },
  { href: '/galerija', label: 'Galerija' },
  { href: '/glazba', label: 'Glazba' },
  { href: '/dodatno', label: 'Dodatno' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center h-[72px] bg-black/80 backdrop-blur-sm border-b-2 border-primary">
        <Link href="/" className="text-xl md:text-2xl font-cormorant font-bold text-primary tracking-wider transition-transform hover:scale-105 chaotic-rotate-n1 glitch">
          MEMORIA MARIS
        </Link>
        
        <ul className="hidden lg:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link, index) => (
            <li key={link.href} className={index % 2 === 0 ? 'chaotic-rotate-1' : 'chaotic-rotate-n2'}>
              <Link 
                href={link.href} 
                className={`font-special transition-colors duration-300 text-sm lg:text-base ${pathname === link.href ? 'text-secondary' : 'text-white hover:text-primary'}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none text-3xl z-50 font-cormorant text-secondary">
            {isOpen ? 'X' : '≡'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu lg:hidden ${isOpen ? 'open' : ''}`}
      >
        <ul className="flex flex-col items-center justify-center h-full p-4 space-y-6">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full text-center">
                <Link 
                  href={link.href} 
                  onClick={handleNavClick} 
                  className={`block w-full font-cormorant text-4xl transition-colors duration-300 py-2 ${pathname === link.href ? 'text-secondary' : 'text-white hover:text-primary'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </header>
  );
};