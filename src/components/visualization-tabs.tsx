// components/visualization-tabs.tsx
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GalleryView } from './gallery-view';
import { TimelineView } from './timeline-view';
import { MapViewPlaceholder } from './map-view-placeholder';
import type { Memory } from "@/lib/types";
import { LayoutGrid, Map, GanttChartSquare } from "lucide-react";

interface VisualizationTabsProps {
  memories: Memory[];
  onLike: (id: string) => void;
}

export function VisualizationTabs({ memories, onLike }: VisualizationTabsProps) {
  return (
    <Tabs defaultValue="gallery" className="w-full">
      <div className="flex justify-center border-b">
        <TabsList className="bg-transparent p-0">
          <TabsTrigger value="gallery" className="flex items-center gap-2 px-4 py-2.5 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none">
            <LayoutGrid className="h-4 w-4" />
            Gallery
          </TabsTrigger>
          <TabsTrigger value="map" className="flex items-center gap-2 px-4 py-2.5 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none">
            <Map className="h-4 w-4" />
            Map
          </TabsTrigger>
          <TabsTrigger value="timeline" className="flex items-center gap-2 px-4 py-2.5 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none">
            <GanttChartSquare className="h-4 w-4" />
            Timeline
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="gallery" className="mt-6">
        <GalleryView memories={memories} onLike={onLike} />
      </TabsContent>
      <TabsContent value="map" className="mt-6">
        <MapViewPlaceholder />
      </TabsContent>
      <TabsContent value="timeline" className="mt-6">
        <TimelineView memories={memories} onLike={onLike} />
      </TabsContent>
    </Tabs>
  );
}
