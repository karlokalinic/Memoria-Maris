import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/r82_pG0c_kE?autoplay=1&mute=1&loop=1&playlist=r82_pG0c_kE&controls=0&showinfo=0&autohide=1&modestbranding=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 px-4 text-white animate-fade-in-up">
        <div className="mt-10">
          <Link href="/o-djelu" className="bg-primary text-primary-foreground font-bold py-3 px-10 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-lg font-cormorant tracking-wider shadow-lg shadow-primary/30">
            Uroni u avanturu
          </Link>
        </div>
      </div>
    </div>
  );
}
