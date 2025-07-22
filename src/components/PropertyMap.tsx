import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PropertyMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  // Simulate map functionality without external dependencies
  useEffect(() => {
    if (!mapContainer.current) return;
    
    // This would be where you'd initialize your map (Google Maps, Mapbox, etc.)
    // For now, we'll create a beautiful static representation
  }, []);

  const nearbyServices = [
    { name: "Metro San Antonio", type: "Transporte", distance: "2 min" },
    { name: "Supermercado Carrefour", type: "Compras", distance: "5 min" },
    { name: "Hospital General", type: "Salud", distance: "8 min" },
    { name: "Colegio San José", type: "Educación", distance: "3 min" },
    { name: "Parque Central", type: "Ocio", distance: "7 min" },
  ];

  return (
    <Card className="shadow-[var(--shadow-card)]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-feature-icon" />
          Ubicación y Servicios Cercanos
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Map placeholder */}
        <div className="relative w-full h-64 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg overflow-hidden border border-border">
          {/* Map visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto shadow-[var(--shadow-glow)]">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-sm font-medium text-foreground">Tu nueva propiedad</p>
              <p className="text-xs text-muted-foreground">Calle Principal 123, Centro</p>
            </div>
          </div>
          
          {/* Decorative map elements */}
          <div className="absolute top-4 left-4 w-8 h-8 bg-accent rounded-full opacity-50"></div>
          <div className="absolute bottom-8 right-8 w-6 h-6 bg-property-accent rounded-full opacity-40"></div>
          <div className="absolute top-1/2 right-4 w-4 h-4 bg-primary rounded-full opacity-60"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, hsl(var(--foreground)) 20px, hsl(var(--foreground)) 21px),
                               repeating-linear-gradient(90deg, transparent, transparent 20px, hsl(var(--foreground)) 20px, hsl(var(--foreground)) 21px)`
            }}></div>
          </div>
        </div>

        {/* Nearby services */}
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">Servicios Cercanos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {nearbyServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors"
              >
                <div>
                  <p className="font-medium text-foreground text-sm">{service.name}</p>
                  <p className="text-xs text-muted-foreground">{service.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-primary">{service.distance}</p>
                  <p className="text-xs text-muted-foreground">a pie</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation button */}
        <Button className="w-full bg-[var(--gradient-primary)] hover:opacity-90 transition-opacity">
          <Navigation className="h-4 w-4 mr-2" />
          Ver Direcciones en el Mapa
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyMap;