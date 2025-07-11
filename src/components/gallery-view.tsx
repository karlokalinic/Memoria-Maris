// components/gallery-view.tsx
"use client";

import { MemoryCard } from './memory-card';
import type { Memory } from "@/lib/types";
import { Waves } from 'lucide-react';

interface GalleryViewProps {
  memories: Memory[];
  onLike: (id: string) => void;
}

export function GalleryView({ memories, onLike }: GalleryViewProps) {
  if (memories.length === 0) {
    return (
      <div className="text-center py-20">
        <Waves className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-4 text-2xl font-headline text-primary">No Memories Yet</h2>
        <p className="text-muted-foreground mt-2">
          Your ocean memories will appear here. Click "Add Memory" to start your collection.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-6">
      {memories.map((memory) => (
        <MemoryCard key={memory.id} memory={memory} onLike={onLike} />
      ))}
    </div>
  );
}
