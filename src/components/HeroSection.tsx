import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useProperties } from "@/context/PropertiesProvider";
import PropertyFilters from "@/components/PropertyFilters";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const HeroSection = () => {
  const { properties } = useProperties();
  const router = useRouter();

  const handleFilters = ({
    ubicacion,
    tipo,
  }: {
    ubicacion: string;
    tipo: string;
  }) => {
    const params = new URLSearchParams();
    if (ubicacion) params.append("ubicacion", ubicacion);
    if (tipo) params.append("tipo", tipo);
    router.push(`/propiedades?${params.toString()}`);
  };

  const getUnique = (arr: string[]): string[] => Array.from(new Set(arr));

  const ubicaciones: string[] = getUnique(
    properties.map((p) => p.district ?? "") as string[]
  );
  const tipos: string[] = getUnique(
    properties.map((p) => p.type ?? "") as string[]
  );

  return (
    <section
      className="min-h-screen flex items-start justify-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/hero-building.jpg)",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

       <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="space-y-8 pt-16 lg:pt-10">
          <div className="flex gap-5 items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hola, Somos
              {/* <span className="text-primary">Choni Espejo</span>{" "}
              Inmobiliaria */}
            </h1>
            <Image
              src="/images/preview2.png"
              alt="Casa Ideal"
              width={300}
              height={300}
              className="cursor-pointer brightness-0 invert"
            />
          </div>
           <div className="flex flex-col gap-4 items-end max-w-[1100px] mt-20">
            <p className="text-lg font-bold text-white/90">
              Cada propiedad tiene una historia, ayúdanos a escribir la tuya
            </p>

            <Button
              onClick={() => router.push("/propiedades")}
              size="lg"
              className="px-8 py-3 text-lg w-fit"
            >
              Comenzar
            </Button>
          </div>

          {/* Stats */}
        </div>
      </div>

      {/* Filtros básicos (sin rango de precio) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full px-4 z-50">
        <Card className="mx-auto w-full max-w-4xl p-6 bg-[#fffed8] shadow-xl">
          <div className="space-y-4 ">
            <h3 className="text-xl font-semibold text-text-dark">
              Buscar propiedades disponibles
            </h3>
            <PropertyFilters
              ubicaciones={ubicaciones}
              tipos={tipos}
              priceBounds={{ min: 0, max: 0 }}
              onSubmit={({ ubicacion, tipo }) =>
                handleFilters({ ubicacion, tipo })
              }
              showClearButton={false}
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
