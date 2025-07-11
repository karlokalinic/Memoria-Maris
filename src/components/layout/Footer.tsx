'use client';
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black border-t-2 border-primary/50 py-12">
      <div className="container mx-auto px-6 text-center text-white">
        <p className="font-cormorant text-2xl text-primary chaotic-rotate-1 glitch">Cantata de Septem Perspectivae</p>
        <p className="font-special text-sm mt-4 chaotic-rotate-n1">
          © {year} Karlo Legend. Sva prava pridržana.
        </p>
      </div>
    </footer>
  );
}
