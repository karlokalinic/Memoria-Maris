import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Oluja na moru"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
        data-ai-hint="dark sea storm"
        priority
      />
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      <div className="relative z-20 px-4 text-white animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-cormorant font-bold drop-shadow-lg" style={{textShadow: '0 2px 10px hsl(var(--primary) / 0.5)'}}>
          Cantata de Septem Perspectivae
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-lato drop-shadow-md">
          Psihološka odiseja kroz olujne vode duše, gdje se mit, folklor i glazba stapaju u jedno.
        </p>
        <div className="mt-10">
          <Link href="/o-djelu" className="bg-primary text-primary-foreground font-bold py-3 px-10 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-lg font-cormorant tracking-wider shadow-lg shadow-primary/30">
            Uroni u priču
          </Link>
        </div>
      </div>
    </div>
  );
}
