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
    <div className="space-y-8">
      {/* Title and price section */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {props.title}
            </h1>
            <p className=" mt-2 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {props.location}, {props.district}
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl md:text-4xl font-bold ">
              {formatUSD(props.price ?? 0)}
            </div>
            <p className="text-sm ">{props.status}</p>
          </div>
        </div>

        {/* Quick specs */}
        <PropertyFeatures features={props.mainFeatures ?? null} />
      </div>

      <Separator />

      {/* Description */}
      <Card className="shadow-[var(--shadow-card)]">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Descripción</h2>
          <p className=" leading-relaxed">{props.description}</p>
        </CardContent>
      </Card>

      {/* Features grid */}
      <Card className="shadow-[var(--shadow-card)]">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Características</h2>
          <PropertyFeatures
            features={props.additionalDetails as unknown as MainFeature | null}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyDetails;
