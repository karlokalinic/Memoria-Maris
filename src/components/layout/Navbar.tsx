"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/o-djelu', label: 'O Djelu' },
  { href: '/likovi', label: 'Likovi' },
  { href: '/galerija', label: 'Galerija' },
  { href: '/glazba', label: 'Glazba' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg shadow-lg shadow-primary/10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center h-[72px]">
        <Link href="/o-djelu" className="text-2xl font-cormorant font-bold text-primary tracking-wider transition-transform hover:scale-105">
          MEMORIA MARIS
        </Link>
        
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={`font-lato transition-colors duration-300 relative ${pathname === link.href ? 'text-primary' : 'text-gray-300 hover:text-primary'}`}
              >
                {link.label}
                {pathname === link.href && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary animate-slide-in"></span>}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div className={`md:hidden mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  onClick={handleNavClick} 
                  className={`font-cormorant text-3xl transition-colors duration-300 ${pathname === link.href ? 'text-primary' : 'text-gray-300 hover:text-primary'}`}
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
