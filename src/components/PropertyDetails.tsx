import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Home,
  Bath,
  Bed,
  Car,
  Waves,
  Wind,
  Building,
  Package,
  Train,
  MapPin,
} from "lucide-react";

const PropertyDetails = () => {
  const features = [
    { icon: Home, label: "Terraza privada", highlight: true },
    { icon: Package, label: "Cocina equipada" },
    { icon: Wind, label: "Aire acondicionado" },
    { icon: Waves, label: "Piscina comunitaria" },
    { icon: Building, label: "Ascensor" },
    { icon: Car, label: "Garaje incluido" },
    { icon: Package, label: "Trastero" },
    { icon: Train, label: "Cerca de transporte público" },
  ];

  const quickSpecs = [
    { icon: Bed, label: "2 Habitaciones" },
    { icon: Bath, label: "2 Baños" },
    { icon: Home, label: "Sala de estar" },
    { icon: MapPin, label: "Zona tranquila" },
  ];
  return (
    <div className="space-y-8">
      {/* Title and price section */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Apartamento Luminoso y Espacioso
            </h1>
            <p className="text-muted-foreground mt-2 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Zona tranquila, cerca de todos los servicios
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl md:text-4xl font-bold text-primary">
              €350,000
            </div>
            <p className="text-sm text-muted-foreground">Precio final</p>
          </div>
        </div>

        {/* Quick specs */}
        <div className="flex flex-wrap gap-4">
          {quickSpecs.map((spec, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <spec.icon className="h-4 w-4 text-feature-icon" />
              <span className="text-sm font-medium">{spec.label}</span>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Description */}
      <Card className="shadow-[var(--shadow-card)]">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Descripción</h2>
          <p className="text-muted-foreground leading-relaxed">
            Encantador apartamento muy luminoso y espacioso. Cuenta con 2
            habitaciones, 2 baños, sala de estar, cocina equipada y una gran
            terraza. Situado en una zona tranquila y cerca de todos los
            servicios.
          </p>
        </CardContent>
      </Card>

      {/* Features grid */}
      <Card className="shadow-[var(--shadow-card)]">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-foreground">
            Características
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  feature.highlight
                    ? "bg-property-highlight border border-property-accent/20"
                    : "hover:bg-accent/50"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    feature.highlight ? "bg-property-accent/20" : "bg-accent"
                  }`}
                >
                  <feature.icon
                    className={`h-4 w-4 ${
                      feature.highlight
                        ? "text-property-accent"
                        : "text-feature-icon"
                    }`}
                  />
                </div>
                <span className="font-medium text-foreground">
                  {feature.label}
                </span>
                {feature.highlight && (
                  <Badge
                    variant="secondary"
                    className="ml-auto bg-property-accent/10 text-property-accent border-property-accent/20"
                  >
                    Destacado
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyDetails;
