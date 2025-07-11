import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black">
       <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/crissxcross.png')] opacity-10 z-0"></div>
      <div className="relative z-20 px-4 text-white flex flex-col items-center">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-cormorant font-bold tracking-wider text-shadow-custom chaotic-rotate-n2 glitch">MEMORIA MARIS</h1>
        <p className="mt-4 text-lg md:text-2xl font-special text-white chaotic-rotate-2">Psihološka odiseja kroz olujne vode duše</p>
        <div className="mt-12 chaotic-rotate-1">
          <Link href="/o-djelu" className="mork-button">
            Uroni u avanturu
          </Link>
        </div>
      </div>
    </div>
  );
}