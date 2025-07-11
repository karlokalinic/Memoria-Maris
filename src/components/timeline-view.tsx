// components/timeline-view.tsx
"use client";

import { MemoryCard } from './memory-card';
import type { Memory } from "@/lib/types";
import { format } from 'date-fns';
import { Waves } from 'lucide-react';

interface TimelineViewProps {
  memories: Memory[];
  onLike: (id: string) => void;
}

export function TimelineView({ memories, onLike }: TimelineViewProps) {
  if (memories.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-headline text-primary">No Memories Yet</h2>
        <p className="text-muted-foreground mt-2">
          Click "Add Memory" to start your collection.
        </p>
      </div>
    );
  }

  const sortedMemories = [...memories].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <div className="relative max-w-3xl mx-auto py-6 space-y-12">
      <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2" aria-hidden="true"></div>
      {sortedMemories.map((memory, index) => (
        <div key={memory.id} className="relative flex items-start md:grid md:grid-cols-2 md:gap-x-8">
           <div className="hidden md:flex justify-end pr-8">
             {index % 2 !== 0 && (
                <div className="w-full">
                    <p className="text-sm text-right text-muted-foreground mb-2 font-medium">
                        {format(new Date(memory.createdAt), "MMMM d, yyyy")}
                    </p>
                    <MemoryCard memory={memory} onLike={onLike} />
                </div>
             )}
           </div>

           <div className="absolute left-4 top-5 w-0.5 h-0.5 md:left-1/2 -translate-x-1/2">
                <div className="absolute z-10 p-1.5 bg-background rounded-full border-2 border-primary">
                    <Waves className="h-3 w-3 text-primary" />
                </div>
           </div>

           <div className="pl-12 md:pl-8">
             {index % 2 === 0 && (
                <div className="w-full">
                    <p className="md:text-left text-sm text-muted-foreground mb-2 font-medium">
                        {format(new Date(memory.createdAt), "MMMM d, yyyy")}
                    </p>
                    <MemoryCard memory={memory} onLike={onLike} />
                </div>
             )}
           </div>
        </div>
      ))}
    </div>
  );
}
