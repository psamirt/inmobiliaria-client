import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PropertyCardProps {
  title: string;
  location: string;
  price: string;
  features: string;
  imageUrl?: string;
  slug: string;
}

const PropertyCard = ({ title, location, price, features, imageUrl, slug }: PropertyCardProps) => (
  <Card className="p-4 flex flex-col gap-4">
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
      <div className="text-sm text-muted-foreground">{features}</div>
      <div className="font-bold text-primary text-xl">{price}</div>
    </div>
    <Button variant="outline" asChild>
      <Link href={`/propiedades/${slug}`}>Ver Detalles</Link>
    </Button>
  </Card>
);

export default PropertyCard; 