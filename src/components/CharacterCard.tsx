'use client';
import Image from 'next/image';

interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  lyricQuote: string;
  imageUrl: string;
  aiHint: string;
}

interface CharacterCardProps {
  character: Character;
  index: number;
}

export default function CharacterCard({ character, index }: CharacterCardProps) {
  const rotationClass = index % 2 === 0 ? 'chaotic-rotate-1' : 'chaotic-rotate-n2';

  return (
    <div 
      className={`mork-card bg-black border-2 border-primary overflow-hidden group ${rotationClass}`}
    >
      <div className="relative h-96 border-b-2 border-primary">
        <Image 
          src={character.imageUrl} 
          alt={character.name} 
          width={600}
          height={800}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
          data-ai-hint={character.aiHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-3xl md:text-4xl font-cormorant font-bold text-secondary">{character.name}</h3>
          <p className="text-primary font-special text-sm md:text-base">{character.title}</p>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <p className="text-white font-lato mb-4 text-sm md:text-base">{character.description}</p>
        <blockquote className="border-l-4 border-secondary pl-4 italic text-gray-300 font-special text-sm md:text-base">
          "{character.lyricQuote}"
        </blockquote>
      </div>
    </div>
  );
}
