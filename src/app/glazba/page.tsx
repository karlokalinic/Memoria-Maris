import { musicTracks } from '@/lib/data';

export default function GlazbaPage() {
  return (
    <div className="container mx-auto px-6 py-20 page-enter pt-[72px]">
        <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-cormorant font-bold text-white">Glazba</h1>
            <p className="mt-3 text-lg text-gray-400 font-lato">Poslušajte i preuzmite zvučni zapis kantate.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-900/50 rounded-lg shadow-xl music-list">
            <ul className="divide-y divide-gray-700">
                {musicTracks.map((track, index) => (
                    <li key={index} className="flex items-center justify-between p-5 hover:bg-gray-800/60 transition-colors duration-300" style={{'--delay': `${index * 50}ms`} as React.CSSProperties}>
                        <div className="flex items-center">
                            <span className="text-primary font-bold font-cormorant text-2xl w-10">{index + 1}.</span>
                            <div>
                                <p className="text-white text-lg font-semibold font-lato">{track.title}</p>
                                <p className="text-gray-400 text-sm">{track.duration}</p>
                            </div>
                        </div>
                        <a 
                            href={track.file} 
                            download 
                            className="border-2 border-primary text-primary rounded-full px-5 py-2 text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
                        >
                            Preuzmi
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}
