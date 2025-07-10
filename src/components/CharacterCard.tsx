'use client';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';

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
  adaptedQuote: string;
  isLoading: boolean;
  index: number;
}

export default function CharacterCard({ character, adaptedQuote, isLoading, index }: CharacterCardProps) {
  return (
    <div 
      className="bg-black rounded-lg overflow-hidden shadow-lg shadow-primary/10 group transform transition-all duration-500 hover:!scale-105 hover:shadow-2xl hover:shadow-primary/20" 
      style={{'--delay': `${index * 100}ms`} as React.CSSProperties}
    >
      <div className="relative h-96">
        <Image 
          src={character.imageUrl} 
          alt={character.name} 
          width={600}
          height={800}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          data-ai-hint={character.aiHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-3xl font-cormorant font-bold text-white">{character.name}</h3>
          <p className="text-primary font-lato">{character.title}</p>
        </div>
      </div>
      <div className="p-6 bg-gray-900/50">
        <p className="text-gray-300 font-lato mb-4 h-28 overflow-auto">{character.description}</p>
        <blockquote className="border-l-4 border-primary pl-4 italic text-gray-400 font-lato min-h-[6rem] flex items-center">
          {isLoading ? (
            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/6" />
            </div>
          ) : (
            <span>{adaptedQuote || character.lyricQuote}</span>
          )}
        </blockquote>
      </div>
    </div>
  );
}
