import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search } from "lucide-react";

interface PropertyFiltersProps {
  ubicaciones: string[];
  tipos: string[];
  presupuestos: string[];
  initial?: { ubicacion?: string; tipo?: string; presupuesto?: string };
  onSubmit: (filters: { ubicacion: string; tipo: string; presupuesto: string }) => void;
  showClearButton?: boolean;
}

const PropertyFilters = ({ ubicaciones, tipos, presupuestos, initial, onSubmit, showClearButton }: PropertyFiltersProps) => {
  const [ubicacion, setUbicacion] = useState(initial?.ubicacion || "all");
  const [tipo, setTipo] = useState(initial?.tipo || "all");
  const [presupuesto, setPresupuesto] = useState(initial?.presupuesto || "all");

  const handleBuscar = () => {
    onSubmit({
      ubicacion: ubicacion === "all" ? "" : ubicacion,
      tipo: tipo === "all" ? "" : tipo,
      presupuesto: presupuesto === "all" ? "" : presupuesto,
    });
  };

  const handleLimpiar = () => {
    setUbicacion("all");
    setTipo("all");
    setPresupuesto("all");
    onSubmit({ ubicacion: "", tipo: "", presupuesto: "" });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end ">
      <Select value={ubicacion} onValueChange={setUbicacion}>
        <SelectTrigger className="w-full bg-white">
          <div className="flex items-center gap-2 ">
            <MapPin className="h-4 w-4 text-text-light" />
            <SelectValue placeholder="Ubicación" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Ubicación</SelectItem>
          {ubicaciones.map((u) => (
            <SelectItem key={u} value={u}>{u}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={tipo} onValueChange={setTipo}>
        <SelectTrigger className="w-full bg-white">
          <SelectValue placeholder="Tipo de Propiedad" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tipo de propiedad</SelectItem>
          {tipos.map((t) => (
            <SelectItem key={t} value={t}>{t}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={presupuesto} onValueChange={setPresupuesto}>
        <SelectTrigger className="w-full bg-white">
          <SelectValue placeholder="Presupuesto" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Presupuesto</SelectItem>
          {presupuestos.map((p) => (
            <SelectItem key={p} value={p}>{p}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex gap-2">
        <Button className="h-11" onClick={handleBuscar}>
          <Search className="h-4 w-4 mr-2" />
          Buscar Ahora
        </Button>
        {showClearButton && (
          <Button className="h-11 bg-white" variant="outline" onClick={handleLimpiar} type="button">
            Limpiar filtros
          </Button>
        )}
      </div>
    </div>
  );
};

export default PropertyFilters; 