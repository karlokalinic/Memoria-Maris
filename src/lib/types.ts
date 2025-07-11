// lib/types.ts

export interface Memory {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location?: string;
  createdAt: string; // ISO date string
  likes: number;
  tags: string[];
}

export type NewMemory = Omit<Memory, 'id' | 'createdAt' | 'likes'>;
