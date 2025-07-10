'use client';
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black border-t border-primary/20">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <p className="font-cormorant text-lg text-gray-400">Cantata de Septem Perspectivae</p>
        <p className="font-lato text-sm mt-2">
          © {year || new Date().getFullYear()} Karlo Legend. Sva prava pridržana.
        </p>
      </div>
    </footer>
  );
}
