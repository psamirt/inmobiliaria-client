import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PropertyCardProps {
  title: string;
  location: string;
  price: number;
  features: string;
  imageUrl?: string;
  slug: string;
  maxFeatureLength?: number;
}

const formatUSD = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

const truncateText = (text: string, maxLength: number): string => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  const sliced = text.slice(0, maxLength);
  // evitar cortar mitad de palabra
  const cleaned = sliced.replace(/\s+\S*$/, "");
  return (cleaned || sliced).trimEnd() + "…";
};

const PropertyCard = ({ title, location, price, features, imageUrl, slug, maxFeatureLength = 48 }: PropertyCardProps) => (
  <Card className="p-4 flex flex-col gap-4 bg-white">
    <div className="relative w-full h-48 rounded-lg overflow-hidden">
      <Image
        src={imageUrl || "/images/hero-building.jpg"}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
    <div className="flex-1 flex flex-col gap-2">
      <h4 className="font-semibold text-lg">{title}</h4>
      <div className="text-sm text-muted-foreground">{location}</div>
      <div className="text-sm text-muted-foreground truncate" title={features}>
        {truncateText(features, maxFeatureLength)}
      </div>
      <div className="font-bold text-primary text-xl">{formatUSD(price)}</div>
    </div>
    <Button variant="outline" className="bg-white" asChild>
      <Link href={`/propiedades/${slug}`}>Ver Detalles</Link>
    </Button>
  </Card>
);

export default PropertyCard; 