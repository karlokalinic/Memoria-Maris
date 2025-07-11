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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg shadow-lg shadow-primary/10">
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center h-[72px]">
        <Link href="/" className="text-xl md:text-2xl font-cormorant font-bold text-primary tracking-wider transition-transform hover:scale-105">
          MEMORIA MARIS
        </Link>
        
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={`font-lato transition-colors duration-300 relative text-sm lg:text-base ${pathname === link.href ? 'text-primary' : 'text-gray-300 hover:text-primary'}`}
              >
                {link.label}
                {pathname === link.href && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary animate-slide-in"></span>}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none text-2xl z-50">
            {isOpen ? '×' : '≡'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu md:hidden ${isOpen ? 'open' : ''}`}
      >
        <ul className="flex flex-col items-start p-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full">
                <Link 
                  href={link.href} 
                  onClick={handleNavClick} 
                  className={`block w-full text-left font-cormorant text-2xl transition-colors duration-300 py-2 px-4 rounded-md ${pathname === link.href ? 'bg-primary/20 text-primary' : 'text-gray-300 hover:bg-white/10 hover:text-primary'}`}
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
