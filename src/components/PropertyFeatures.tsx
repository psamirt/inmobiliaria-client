import {
  Utensils,
  Snowflake,
  Droplet,
  ArrowUp,
  Car,
  Archive,
  Train,
  Home,
  Shield,
  PawPrint,
  Sofa,
  Leaf,
  Sun,
  Users,
  Dumbbell,
  Eye,
  Beef,
  Ruler,
  Bed,
  ShowerHead,
} from "lucide-react";

export const featureIconMap: Record<string, React.ReactNode> = {
  "Cocina equipada": <Utensils className="w-5 h-5" />,
  "Aire acondicionado": <Snowflake className="w-5 h-5" />,
  "Piscina comunitaria": <Droplet className="w-5 h-5" />,
  Ascensor: <ArrowUp className="w-5 h-5" />,
  "Garaje incluido": <Car className="w-5 h-5" />,
  Trastero: <Archive className="w-5 h-5" />,
  "Cerca de transporte público": <Train className="w-5 h-5" />,
  Balcón: <Home className="w-5 h-5" />,
  "Terraza privada": <Sun className="w-5 h-5" />,
  Jardín: <Leaf className="w-5 h-5" />,
  Calefacción: <Sofa className="w-5 h-5" />,
  "Seguridad 24h": <Shield className="w-5 h-5" />,
  Amueblado: <Sofa className="w-5 h-5" />,
  "Mascotas permitidas": <PawPrint className="w-5 h-5" />,
  "Acceso para discapacitados": <Users className="w-5 h-5" />,
  "Zona infantil": <Users className="w-5 h-5" />,
  Gimnasio: <Dumbbell className="w-5 h-5" />,
  "Vistas al mar": <Eye className="w-5 h-5" />,
  "Zona de barbacoa": <Beef className="w-5 h-5" />,
  "Área Construida": <Ruler className="w-5 h-5" />,
  Dormitorios: <Bed className="w-5 h-5" />,
  Baños: <ShowerHead className="w-5 h-5" />,
};

interface PropertyFeaturesProps {
  features: string[];
}

const PropertyFeatures = ({ features }: PropertyFeaturesProps) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {features.map((label) => (
      <li key={label} className="flex items-center gap-2 text-muted-foreground">
        {featureIconMap[label] ?? <span className="w-5 h-5" />}{" "}
      </li>
    ))}
  </ul>
);

export default PropertyFeatures;
