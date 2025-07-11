// components/layout/header.tsx
"use client";

import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { AddMemoryForm } from '@/components/add-memory-form';
import { Waves, Download, Upload, Plus, MoreVertical } from 'lucide-react';
import type { NewMemory } from '@/lib/types';

interface HeaderProps {
  onExport: () => void;
  onImport: (file: File) => void;
  onAddMemory: (memory: NewMemory) => void;
}

export function Header({ onExport, onImport, onAddMemory }: HeaderProps) {
  const [isAddMemoryOpen, setIsAddMemoryOpen] = React.useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImport(file);
      // Reset file input to allow importing the same file again
      event.target.value = '';
    }
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Waves className="h-6 w-6 mr-2 text-primary" />
          <h1 className="text-xl font-bold font-headline text-primary tracking-tight">Memoria-Maris Mirror</h1>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button onClick={() => setIsAddMemoryOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Memory
            </Button>
            <Button variant="outline" onClick={handleImportClick}>
              <Upload className="mr-2 h-4 w-4" />
              Import
            </Button>
            <Button variant="outline" onClick={onExport}>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
          
          {/* Mobile Dropdown */}
          <div className="md:hidden">
            <Button onClick={() => setIsAddMemoryOpen(true)} className="mr-2">
              <Plus className="mr-2 h-4 w-4" />
              Add
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleImportClick}>
                  <Upload className="mr-2 h-4 w-4" />
                  Import Data
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onExport}>
                  <Download className="mr-2 h-4 w-4" />
                  Export Data
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept=".json"
          />
        </div>
      </div>
      <AddMemoryForm isOpen={isAddMemoryOpen} onOpenChange={setIsAddMemoryOpen} onAddMemory={onAddMemory} />
    </header>
  );
}
