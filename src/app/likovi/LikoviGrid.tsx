'use client';

import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { getAdaptedQuote } from './actions';
import CharacterCard from '@/components/CharacterCard';
import type { characterData } from '@/lib/data';

type Character = (typeof characterData)[0];

interface LikoviGridProps {
  characters: Character[];
}

const VIEWING_HISTORY_KEY = 'memoriaMarisHistory';

export default function LikoviGrid({ characters }: LikoviGridProps) {
  const [quotes, setQuotes] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  useEffect(() => {
    let history = [];
    try {
      history = JSON.parse(localStorage.getItem(VIEWING_HISTORY_KEY) || '[]');
      if (!history.includes('likovi')) {
        history.push('likovi');
        localStorage.setItem(VIEWING_HISTORY_KEY, JSON.stringify(history));
      }
    } catch (error) {
      console.warn("Could not access viewing history.", error);
    }
    const userViewingHistory = history.join(', ');

    characters.forEach(character => {
      setLoading(prev => ({ ...prev, [character.id]: true }));
      getAdaptedQuote({
        characterName: character.name,
        originalQuote: character.lyricQuote,
        userViewingHistory,
      }).then(result => {
        if (result.error) {
          toast({
            variant: "destructive",
            title: "AI Error",
            description: result.error,
          });
          setQuotes(prev => ({ ...prev, [character.id]: character.lyricQuote }));
        } else if (result.adaptedQuote) {
          setQuotes(prev => ({ ...prev, [character.id]: result.adaptedQuote! }));
        }
      }).finally(() => {
        setLoading(prev => ({ ...prev, [character.id]: false }));
      });
    });
  }, [characters, toast]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 card-grid">
      {characters.map((char, index) => (
        <CharacterCard
          key={char.id}
          character={char}
          adaptedQuote={quotes[char.id]}
          isLoading={loading[char.id]}
          index={index}
        />
      ))}
    </div>
  );
}
