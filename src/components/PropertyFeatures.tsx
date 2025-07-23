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
  "Cocina equipada": <Utensils size={16} />,
  "Aire acondicionado": <Snowflake size={16} />,
  "Piscina comunitaria": <Droplet size={16} />,
  Ascensor: <ArrowUp size={16} />,
  "Garaje incluido": <Car size={16} />,
  Trastero: <Archive size={16} />,
  "Cerca de transporte público": <Train size={16} />,
  Balcón: <Home size={16} />,
  "Terraza privada": <Sun size={16} />,
  Jardín: <Leaf size={16} />,
  Calefacción: <Sofa size={16} />,
  "Seguridad 24h": <Shield size={16} />,
  Amueblado: <Sofa size={16} />,
  "Mascotas permitidas": <PawPrint size={16} />,
  "Acceso para discapacitados": <Users size={16} />,
  "Zona infantil": <Users size={16} />,
  Gimnasio: <Dumbbell size={16} />,
  "Vistas al mar": <Eye size={16} />,
  "Zona de barbacoa": <Beef size={16} />,
  "Área Construida": <Ruler size={16} />,
  Dormitorios: <Bed size={16} />,
  Baños: <ShowerHead size={16} />,
};

interface FeatureItem {
  label: string;
  quantity?: string | number;
}

interface PropertyFeaturesProps {
  features: FeatureItem[];
}

const PropertyFeatures = ({ features }: PropertyFeaturesProps) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {features.map((feature) => (
      <li
        key={feature.label}
        className="flex items-center gap-2 text-muted-foreground"
      >
        {featureIconMap[feature.label] ?? <span className="w-5 h-5" />}
        <span className="font-medium text-foreground">
          {feature.quantity ? `${feature.quantity} ` : ""}
          {feature.label}
        </span>
      </li>
    ))}
  </ul>
);

export default PropertyFeatures;
