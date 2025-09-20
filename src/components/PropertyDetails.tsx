import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MainFeature, Property } from "@/types/types";
import { MapPin } from "lucide-react";
import PropertyFeatures from "./PropertyFeatures";

const formatUSD = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    value
  );

const PropertyDetails = ({ props }: { props: Property }) => {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Title and price section */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              {props.title}
            </h1>
            <p className="text-sm md:text-base mt-2 flex items-center gap-2">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              {props.location}, {props.district}
            </p>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
              {formatUSD(props.price ?? 0)}
            </div>
            <p className="text-sm">{props.status}</p>
          </div>
        </div>

        {/* Quick specs */}
        <PropertyFeatures features={props.mainFeatures ?? null} />
      </div>

      <Separator />

      {/* Description */}
      <Card className="shadow-[var(--shadow-card)]">
        <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
          <h2 className="text-lg md:text-xl font-semibold">Descripción</h2>
          <p className="text-sm md:text-base leading-relaxed">{props.description}</p>
        </CardContent>
      </Card>

      {/* Features grid */}
      <Card className="shadow-[var(--shadow-card)]">
        <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
          <h2 className="text-lg md:text-xl font-semibold">Características</h2>
          <PropertyFeatures
            features={props.additionalDetails as unknown as MainFeature | null}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyDetails;
