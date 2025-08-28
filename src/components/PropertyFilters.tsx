import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Search } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface PropertyFiltersProps {
  ubicaciones: string[];
  tipos: string[];
  priceBounds: { min: number; max: number };
  initial?: { ubicacion?: string; tipo?: string; min?: number; max?: number };
  onSubmit: (filters: {
    ubicacion: string;
    tipo: string;
    min: number;
    max: number;
  }) => void;
  showClearButton?: boolean;
  showPriceSlider?: boolean;
}

const PropertyFilters = ({
  ubicaciones,
  tipos,
  priceBounds,
  initial,
  onSubmit,
  showClearButton = true,
}: PropertyFiltersProps) => {
  const [ubicacion, setUbicacion] = useState(initial?.ubicacion || "all");
  const [tipo, setTipo] = useState(initial?.tipo || "all");
  const [range, setRange] = useState<[number, number]>([
    initial?.min ?? priceBounds.min,
    initial?.max ?? priceBounds.max,
  ]);

  const handleBuscar = () => {
    const [min, max] = range;
    const minValue = Number.isFinite(min) ? min : priceBounds.min;
    const maxValue = Number.isFinite(max) ? max : priceBounds.max;
    onSubmit({
      ubicacion: ubicacion === "all" ? "" : ubicacion,
      tipo: tipo === "all" ? "" : tipo,
      min: Math.min(minValue, maxValue),
      max: Math.max(minValue, maxValue),
    });
  };

  const handleLimpiar = () => {
    setUbicacion("all");
    setTipo("all");
    setRange([priceBounds.min, priceBounds.max]);
    onSubmit({
      ubicacion: "",
      tipo: "",
      min: priceBounds.min,
      max: priceBounds.max,
    });
  };

  return (
    <div className="flex flex-wrap justify-evenly gap-4 items-center">
      {/* Filtro de ubicación */}
      <div className="min-w-[200px] ">
        <Select value={ubicacion} onValueChange={setUbicacion}>
          <SelectTrigger className="w-full h-11 bg-[#fffed8]">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-text-light" />
              <SelectValue placeholder="Ubicación" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Ubicación</SelectItem>
            {ubicaciones.map((u) => (
              <SelectItem key={u} value={u}>
                {u}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Filtro de tipo de propiedad */}
      <div className="min-w-[200px]">
        <Select value={tipo} onValueChange={setTipo}>
          <SelectTrigger className="w-full h-11 bg-[#fffed8]">
            <SelectValue placeholder="Tipo de Propiedad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tipo de propiedad</SelectItem>
            {tipos.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Slider de precios */}
      {showClearButton && (
        <div className="px-2 min-w-[260px] bg-[#fffed8] rounded-md h-9 flex flex-col justify-center">
          <div className="text-xs text-muted-foreground mb-1 text-center flex justify-between items-center">
            <span className="font-medium ms-1">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(range[0])}
            </span>
            <span className="font-medium">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(range[1])}
            </span>
          </div>
          <Slider
            color="#cfbc62"
            defaultValue={[range[0], range[1]]}
            min={priceBounds.min}
            max={priceBounds.max}
            step={1000}
            onValueChange={(vals: number[]) =>
              setRange([vals[0], vals[1]] as [number, number])
            }
          />
        </div>
      )}

      {/* Botones */}
      <div className="flex gap-2 items-center">
        <Button className="h-11" onClick={handleBuscar}>
          <Search className="h-4 w-4 mr-2" />
          Buscar Ahora
        </Button>
        {showClearButton && (
          <Button
            className="h-11 bg-[#fffed8]"
            variant="outline"
            onClick={handleLimpiar}
            type="button"
          >
            Limpiar filtros
          </Button>
        )}
      </div>
    </div>
  );
};

export default PropertyFilters;
