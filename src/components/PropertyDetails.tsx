import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Property } from "@/types/types";
import { MapPin } from "lucide-react";
import PropertyFeatures from "./PropertyFeatures";

const PropertyDetails = ({ props }: { props: Property }) => {
  return (
    <div className="space-y-8">
      {/* Title and price section */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {props.title}
            </h1>
            <p className="text-muted-foreground mt-2 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {props.location}, {props.district}
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl md:text-4xl font-bold text-primary">
              {props.price}
            </div>
            <p className="text-sm text-muted-foreground">Precio final</p>
          </div>
        </div>

        {/* Quick specs */}
        <PropertyFeatures features={props.mainFeatures} />
      </div>

      <Separator />

      {/* Description */}
      <Card className="shadow-[var(--shadow-card)]">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Descripción</h2>
          <p className="text-muted-foreground leading-relaxed">
            {props.description}
          </p>
        </CardContent>
      </Card>

      {/* Features grid */}
      <Card className="shadow-[var(--shadow-card)]">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-foreground">
            Características
          </h2>
          <PropertyFeatures features={props.additionalDetails} />
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyDetails;
