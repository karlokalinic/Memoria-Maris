'use client';

import CharacterCard from '@/components/CharacterCard';
import type { characterDataType } from '@/lib/data';

type Character = characterDataType[0];

interface LikoviGridProps {
  characters: Character[];
}

export default function LikoviGrid({ characters }: LikoviGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 card-grid">
      {characters.map((char, index) => (
        <CharacterCard
          key={char.id}
          character={char}
          index={index}
        />
      ))}
    </div>
  );
}
