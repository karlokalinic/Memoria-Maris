// components/memory-card.tsx
"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, MapPin } from "lucide-react";
import type { Memory } from "@/lib/types";
import { formatDistanceToNow } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import { useState, useMemo } from 'react';
import { isValidImageUrl } from '@/lib/utils';

interface MemoryCardProps {
  memory: Memory;
  onLike: (id: string) => void;
}

export function MemoryCard({ memory, onLike }: MemoryCardProps) {
    const { toast } = useToast();
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        if (!imageError) {
            console.warn(`Image failed to load, falling back to placeholder: ${memory.imageUrl}`);
            setImageError(true);
        }
    };
    
    const imageSrc = useMemo(() => {
        if (imageError || !isValidImageUrl(memory.imageUrl)) {
            return `https://placehold.co/600x400.png`;
        }
        return memory.imageUrl;
    }, [memory.imageUrl, imageError]);


    const handleShare = async () => {
        const shareData = {
            title: memory.title,
            text: memory.description,
            url: window.location.href,
        };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
                toast({ title: "Shared successfully!" });
            } else {
                 await navigator.clipboard.writeText(window.location.href);
                 toast({
                    title: "Link Copied!",
                    description: "The link to this page has been copied to your clipboard.",
                });
            }
        } catch (err) {
            console.error("Share failed:", err);
            toast({ title: "Could not share at this time.", variant: "destructive" });
        }
    };

  return (
    <Card className="w-full overflow-hidden flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 duration-300 bg-card">
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary">{memory.title}</CardTitle>
        <div className="text-xs text-muted-foreground flex items-center justify-between">
            <span>
              {formatDistanceToNow(new Date(memory.createdAt), { addSuffix: true })}
            </span>
            {memory.location && (
                <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3"/>
                    {memory.location}
                </span>
            )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        {imageSrc && (
          <div className="relative aspect-video w-full rounded-md overflow-hidden border">
              <Image
              src={imageSrc}
              alt={memory.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint="marine life ocean"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={handleImageError}
              />
          </div>
        )}
        <p className="text-sm text-foreground/90">{memory.description}</p>
         {memory.tags && memory.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
                {memory.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
                ))}
            </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-auto">
        <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" onClick={() => onLike(memory.id)} className="flex items-center group">
                <Heart className={`h-5 w-5 text-muted-foreground group-hover:text-red-500 transition-colors ${memory.likes > 0 ? 'text-red-500 fill-current' : ''}`} />
                 <span className="text-sm ml-1">{memory.likes}</span>
            </Button>
            <Button variant="ghost" size="icon" className="flex items-center group">
                <MessageCircle className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleShare} className="flex items-center group">
                <Share2 className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
