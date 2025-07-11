import Image from 'next/image';
import { galleryImages } from '@/lib/data';

export default function GalerijaPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-20 page-enter pt-[72px]">
        <div className="text-center mb-12 md:mb-16">
            <h1 className="text-5xl md:text-7xl font-cormorant font-bold text-primary chaotic-rotate-2 text-shadow-custom">Galerija</h1>
            <p className="mt-3 text-lg md:text-xl text-white font-special chaotic-rotate-n2">Vizualni svijet Kantate.</p>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
                <div key={index} className={`border-2 border-secondary overflow-hidden break-inside-avoid group ${index % 2 === 0 ? 'chaotic-rotate-1' : 'chaotic-rotate-n1'}`}>
                    <Image 
                        className="w-full h-auto transform transition-transform duration-500 hover:scale-110 cursor-pointer grayscale hover:grayscale-0"
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={600}
                        data-ai-hint={image.aiHint}
                    />
                </div>
            ))}
        </div>
    </div>
  );
}