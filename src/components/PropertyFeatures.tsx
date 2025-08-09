import { MainFeature } from "@/types/types";
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
  House,
  Package2,
  Columns3,
  Gem ,
  LampCeiling ,
  Tv,
  WashingMachine 
} from "lucide-react";

const normalize = (text: string) =>
  (text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

function getFeatureIcon(label?: string): React.ReactNode {
  const key = normalize(label ?? "");

  if (key.includes("cocina")) return <Utensils size={16} />;
  if (key.includes("banos") || key.includes("baños") || key.includes("bano"))
    return <ShowerHead size={16} />;
  if (
    key.includes("dormitorio") ||
    key.includes("habitacion") ||
    key.includes("habitación")
  )
    return <Bed size={16} />;
  if (
    key.includes("cochera") ||
    key.includes("cocheras") ||
    key.includes("estacionamiento") ||
    key.includes("garaje") ||
    key.includes("garage")
  )
    return <Car size={16} />;
  if (key.includes("anos")) return <House size={16} />;
  if (key.includes("deposito")) return <Package2 size={16} />;
  if (key.includes("pisos")) return <Columns3 size={16} />;
  if (key.includes("piscina")) return <Droplet size={16} />;
  if (key.includes("ascensor") || key.includes("elevador"))
    return <ArrowUp size={16} />;
  if (key.includes("trastero")) return <Archive size={16} />;
  if (key.includes("finos")) return <Gem size={16} />;
  if (key.includes("transporte")) return <Train size={16} />;
  if (key.includes("balcon") || key.includes("balcón"))
    return <Home size={16} />;
  if (key.includes("terraza")) return <Sun size={16} />;
  if (key.includes("jardin") || key.includes("jardín"))
    return <Leaf size={16} />;
  if (key.includes("calefaccion") || key.includes("calefacción"))
    return <Sofa size={16} />;
  if (key.includes("seguridad")) return <Shield size={16} />;
  if (key.includes("amueblado")) return <Sofa size={16} />;
  if (key.includes("mascotas")) return <PawPrint size={16} />;
  if (key.includes("sala")) return <Tv size={16} />;
  if (key.includes("linea")) return <WashingMachine size={16} />;
  if (key.includes("discapacitados") || key.includes("acceso"))
    return <Users size={16} />;
  if (key.includes("infantil")) return <Users size={16} />;
  if (key.includes("gimnasio")) return <Dumbbell size={16} />;
  if (key.includes("vistas") || key.includes("vista")) return <Eye size={16} />;
  if (key.includes("barbacoa")) return <Beef size={16} />;
  if (
    key.includes("area") ||
    key.includes("área") ||
    key.includes("superficie") ||
    key.includes("m2") ||
    key.includes("m²")
  )
    return <Ruler size={16} />;
  if (key.includes("aire") && key.includes("acondicionado"))
    return <Snowflake size={16} />;
  if (key.includes("techo")) return <LampCeiling size={16} />;
  return <span className="w-5 h-5" />;
}

const PropertyFeatures = ({ features }: { features: MainFeature | null }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {features?.map((feature) => (
      <li key={feature?.label} className="flex items-center gap-2">
        {getFeatureIcon(feature?.label)}
        <span className="font-medium">
          {feature?.quantity ? `${feature?.quantity} ` : ""}
          {feature?.label}
        </span>
      </li>
    ))}
  </ul>
);

export default PropertyFeatures;
