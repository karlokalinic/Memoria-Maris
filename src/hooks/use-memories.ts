// hooks/use-memories.ts
"use client";

import { useState, useEffect, useCallback } from 'react';
import type { Memory, NewMemory } from '@/lib/types';
import { useToast } from "@/hooks/use-toast";
import initialMemories from '@/lib/initial-memories.json';

const STORAGE_KEY = 'memoria-maris-memories';

export function useMemories() {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const storedMemories = localStorage.getItem(STORAGE_KEY);
      if (storedMemories) {
        // Basic validation for stored data
        const parsed = JSON.parse(storedMemories);
        if (Array.isArray(parsed)) {
          setMemories(parsed);
        } else {
           setMemories(initialMemories);
        }
      } else {
        // Set initial data if nothing is in local storage
        setMemories(initialMemories);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialMemories));
      }
    } catch (error) {
      console.error("Failed to load memories from local storage", error);
       setMemories(initialMemories);
      toast({
        title: "Error",
        description: "Could not load memories. Using default data.",
        variant: "destructive",
      });
    }
    setIsInitialized(true);
  }, [toast]);

  const updateStorage = useCallback((updatedMemories: Memory[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMemories));
      setMemories(updatedMemories);
    } catch (error) {
      console.error("Failed to save memories to local storage", error);
      toast({
        title: "Error",
        description: "Could not save memories to your browser's storage.",
        variant: "destructive",
      });
    }
  }, [toast]);

  const addMemory = useCallback((memory: NewMemory) => {
    const newMemory: Memory = {
      ...memory,
      id: new Date().toISOString() + Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      likes: 0,
      tags: memory.tags || [],
    };
    const updatedMemories = [newMemory, ...memories];
    updateStorage(updatedMemories);
    toast({
      title: "Success!",
      description: "Your memory has been saved.",
    });
  }, [memories, updateStorage, toast]);
  
  const updateMemory = useCallback((id: string, updates: Partial<Omit<Memory, 'id'>>) => {
    setMemories(prevMemories => {
        const updatedMemories = prevMemories.map(mem => 
            mem.id === id ? { ...mem, ...updates } : mem
        );
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMemories));
        return updatedMemories;
    });
  }, []);

  const exportMemories = useCallback(() => {
    if (memories.length === 0) {
        toast({ title: "No memories to export." });
        return;
    }
    try {
      const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(memories, null, 2)
      )}`;
      const link = document.createElement("a");
      link.href = jsonString;
      link.download = `memoria-maris-backup-${new Date().toISOString().split('T')[0]}.json`;
      link.click();
      toast({ title: "Memories exported successfully!" });
    } catch (error) {
      console.error("Failed to export memories", error);
      toast({
        title: "Export Failed",
        description: "An unexpected error occurred during export.",
        variant: "destructive",
      });
    }
  }, [memories, toast]);

  const importMemories = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result;
        if (typeof text === 'string') {
          const importedData = JSON.parse(text) as Memory[];
          // More robust validation
          if (Array.isArray(importedData) && importedData.every(item => 'id' in item && 'title' in item && 'createdAt' in item && 'imageUrl' in item)) {
            // Simple merge: add new, don't update existing
            const existingIds = new Set(memories.map(m => m.id));
            const newMemories = importedData.filter(m => !existingIds.has(m.id));
            const updatedMemories = [...memories, ...newMemories].sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            updateStorage(updatedMemories);
            toast({ title: `Imported ${newMemories.length} new memories successfully!` });
          } else {
            throw new Error("Invalid file format. Each memory must have id, title, createdAt, and imageUrl.");
          }
        }
      } catch (error) {
        console.error("Failed to import memories", error);
        toast({
          title: "Import Failed",
          description: error instanceof Error ? error.message : "The selected file is not a valid memory backup.",
          variant: "destructive",
        });
      }
    };
    reader.onerror = () => {
       toast({
          title: "Import Failed",
          description: "Could not read the selected file.",
          variant: "destructive",
        });
    }
    reader.readAsText(file);
  }, [memories, updateStorage, toast]);

  return { memories, addMemory, updateMemory, exportMemories, importMemories, isInitialized };
}
