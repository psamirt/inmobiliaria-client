import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "./ui/card";
import PropertyFilters from "@/components/PropertyFilters";
import { propiedades } from "@/mock/props";

const getUnique = (arr: string[]): string[] => Array.from(new Set(arr));

const ubicaciones: string[] = getUnique(propiedades.map((p) => p.district));
const tipos: string[] = getUnique(propiedades.map((p) => p.type));
const presupuestos: string[] = ["0-200k", "200k-500k", "500k-1m", "1m+"];

interface Filters {
  ubicacion: string;
  tipo: string;
  presupuesto: string;
}

const HeroSection = () => {
  const router = useRouter();

  const handleFilters = ({ ubicacion, tipo, presupuesto }: Filters) => {
    const params = new URLSearchParams();
    if (ubicacion) params.append("ubicacion", ubicacion);
    if (tipo) params.append("tipo", tipo);
    if (presupuesto) params.append("presupuesto", presupuesto);
    router.push(`/propiedades?${params.toString()}`);
  };

  return (
    <section
      className="min-h-screen flex lg:items-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/hero-building.jpg)",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Content */}
        <div className="max-w-2xl space-y-8 mt-10 lg:mt-0">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hola Somos <span className="text-primary">Choni Espejo</span> Inmobiliaria
            </h1>
            <p className="text-lg text-white/90 ">
              Cada Propiedad Tiene una Historia Ayúdanos a Escribir la Tuya
            </p>
          </div>

          <Button
            onClick={() => router.push("/propiedades")}
            size="lg"
            className="px-8 py-3 text-lg"
          >
            Comenzar
          </Button>

          {/* Stats */}
          <div className="hidden lg:grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">1200+</div>
              <div className="text-white/80">Propiedades Vendidas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">4500+</div>
              <div className="text-white/80">Propiedades Alquiladas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-white/80">Clientes Felices</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full px-4 z-50">
        <Card className="mx-auto w-full max-w-4xl p-6 bg-card shadow-xl">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-text-dark">
              Buscar propiedades disponibles
            </h3>
            <PropertyFilters
              ubicaciones={ubicaciones}
              tipos={tipos}
              presupuestos={presupuestos}
              onSubmit={handleFilters}
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
