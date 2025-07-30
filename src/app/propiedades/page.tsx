"use client";
import { useSearchParams, useRouter } from "next/navigation";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import PropertyFilters from "@/components/PropertyFilters";
import { propiedades } from "@/mock/props";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

const getUnique = (arr: string[]): string[] => Array.from(new Set(arr));
const ubicaciones: string[] = getUnique(propiedades.map((p) => p.district));
const tipos: string[] = getUnique(propiedades.map((p) => p.type));
const presupuestos: string[] = [
  "0-200k",
  "200k-500k",
  "500k-1m",
  "1m+",
];

function filtrarPorPresupuesto(precio: number, presupuesto: string) {
  if (presupuesto === "0-200k") return precio <= 200000;
  if (presupuesto === "200k-500k") return precio > 200000 && precio <= 500000;
  if (presupuesto === "500k-1m") return precio > 500000 && precio <= 1000000;
  if (presupuesto === "1m+") return precio > 1000000;
  return true;
}

const PAGE_SIZE = 6;

export default function PropiedadesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const ubicacion = searchParams.get("ubicacion") || "";
  const tipo = searchParams.get("tipo") || "";
  const presupuesto = searchParams.get("presupuesto") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);

  const filtered = propiedades.filter((p) => {
    const matchUbicacion = !ubicacion || p.district === ubicacion;
    const matchTipo = !tipo || p.type === tipo;
    const matchPresupuesto = !presupuesto || filtrarPorPresupuesto(p.price, presupuesto);
    return matchUbicacion && matchTipo && matchPresupuesto;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleFilters = ({ ubicacion, tipo, presupuesto }: { ubicacion: string; tipo: string; presupuesto: string }) => {
    const params = new URLSearchParams();
    if (ubicacion) params.append("ubicacion", ubicacion);
    if (tipo) params.append("tipo", tipo);
    if (presupuesto) params.append("presupuesto", presupuesto);
    // Al cambiar filtros, vuelve a la página 1
    params.append("page", "1");
    router.push(`/propiedades?${params.toString()}`);
  };

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`/propiedades?${params.toString()}`);
  };

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Propiedades Disponibles</h1>
        <div className="mb-8">
          <PropertyFilters
            ubicaciones={ubicaciones}
            tipos={tipos}
            presupuestos={presupuestos}
            initial={{ ubicacion, tipo, presupuesto }}
            onSubmit={handleFilters}
            showClearButton
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {paginated.map((p, i) => (
            <PropertyCard
              key={p.slug || i}
              title={p.title}
              location={p.location}
              price={p.price}
              features={p.features}
              imageUrl={p.images?.[0]?.url}
              slug={p.slug}
            />
          ))}
        </div>
        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() => handlePageChange(Math.max(1, page - 1))}
                    aria-disabled={page === 1}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <PaginationItem key={idx}>
                    <PaginationLink
                      href="#"
                      isActive={page === idx + 1}
                      onClick={() => handlePageChange(idx + 1)}
                    >
                      {idx + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
                    aria-disabled={page === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </main>
  );
} 