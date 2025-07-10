'use client';

import CharacterCard from '@/components/CharacterCard';
import type { characterData } from '@/lib/data';

type Character = (typeof characterData)[0];

interface LikoviGridProps {
  characters: Character[];
}

export default function LikoviGrid({ characters }: LikoviGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 card-grid">
      {characters.map((char, index) => (
        <CharacterCard
          key={char.id}
          character={char}
          adaptedQuote={char.lyricQuote}
          isLoading={false}
          index={index}
        />
      ))}
    </div>
  );
}
