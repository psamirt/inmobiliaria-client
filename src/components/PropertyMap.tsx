import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Property } from "@/types/types";
import { GoogleMap, Marker } from "@react-google-maps/api";

const PropertyMap = ({ props }: { props: Property }) => {
  const [showMap, setShowMap] = useState(false);

  // Simulate map functionality without external dependencies
  // useEffect(() => {
  //   if (!mapContainer.current) return;

  //   // This would be where you'd initialize your map (Google Maps, Mapbox, etc.)
  //   // For now, we'll create a beautiful static representation
  // }, []);

  return (
    <Card className="shadow-[var(--shadow-card)]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-feature-icon" />
          Ubicación y Servicios Cercanos
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Map placeholder o mapa interactivo */}
        <div className="relative w-full h-64 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg overflow-hidden border border-border flex items-center justify-center">
          {!showMap ? (
            <Button
              onClick={() => setShowMap(true)}
              className="z-10"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Ver mapa interactivo
            </Button>
          ) : (
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={{ lat: props.lat, lng: props.lng }}
              zoom={15}
            >
              <Marker position={{ lat: props.lat, lng: props.lng }} />
            </GoogleMap>
          )}
        </div>

        {/* Nearby services */}
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">Servicios Cercanos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {props.nearbyServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-[#e9f0ff]/30 hover:bg-[#e9f0ff] transition-colors border border-border"
              >
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {service.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {service.type}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-primary">
                    {service.distance}
                  </p>
                  <p className="text-xs text-muted-foreground">a pie</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation button */}
        <Button
          onClick={() => {
            window.open(
              `https://www.google.com/maps/dir/?api=1&destination=${props.lat},${props.lng}`,
              "_blank"
            );
          }}
          className="w-full hover:opacity-90 transition-opacity"
        >
          <Navigation className="h-4 w-4 mr-2" />
          Ver Direcciones en el Mapa
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyMap;
