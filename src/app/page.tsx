import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-30">
        <video
          className="w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/4434467/4434467-hd_1920_1080_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
      <div className="relative z-20 px-4 text-white animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-cormorant font-bold tracking-wider text-shadow-lg shadow-primary/50">MEMORIA MARIS</h1>
        <p className="mt-4 text-lg md:text-xl font-lato text-gray-300">Psihološka odiseja kroz olujne vode duše</p>
        <div className="mt-10">
          <Link href="/o-djelu" className="bg-primary text-primary-foreground font-bold py-3 px-8 md:px-10 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-base md:text-lg font-cormorant tracking-wider shadow-lg shadow-primary/30">
            Uroni u avanturu
          </Link>
        </div>
      </div>
    </div>
  );
}
