// components/map-view.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function MapViewPlaceholder() {
  return (
    <Card className="mt-6 border-dashed border-2 hover:border-primary transition-colors">
      <CardHeader>
        <CardTitle className="font-headline flex items-center text-muted-foreground">
          <MapPin className="mr-2" />
          Map View
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center text-center bg-muted/30 p-12 rounded-lg">
          <h3 className="text-xl font-semibold text-foreground/80">Map View Coming Soon!</h3>
          <p className="text-muted-foreground mt-2 max-w-md">
            We're working on an interactive map to visualize memories by location. This feature will require adding location data to your memories.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
