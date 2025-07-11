import Image from 'next/image';
import { galleryImages } from '@/lib/data';

export default function GalerijaPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-20 page-enter pt-[72px]">
        <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl font-cormorant font-bold text-white">Galerija</h1>
            <p className="mt-3 text-base md:text-lg text-gray-400 font-lato">Vizualni svijet Kantate.</p>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 gallery-grid">
            {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg break-inside-avoid" style={{'--delay': `${index * 50}ms`} as React.CSSProperties}>
                    <Image 
                        className="w-full h-auto transform transition-transform duration-500 hover:scale-110 cursor-pointer"
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
