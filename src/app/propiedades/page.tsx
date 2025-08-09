"use client";
import { useSearchParams, useRouter } from "next/navigation";
import PropertyCard from "@/components/PropertyCard";
import PropertyFilters from "@/components/PropertyFilters";
import { useProperties } from "@/context/PropertiesProvider";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { getMainImage } from "@/lib/utils";

const getUnique = (arr: string[]): string[] => Array.from(new Set(arr));

function filtrarPorRango(precio: number, min: number, max: number) {
  return precio >= min && precio <= max;
}

const PAGE_SIZE = 6;

export default function PropiedadesPage() {
  const { properties } = useProperties();
  const searchParams = useSearchParams();
  const router = useRouter();
  const ubicacion = searchParams.get("ubicacion") || "";
  const tipo = searchParams.get("tipo") || "";
  const minQ = Number(searchParams.get("min") || "");
  const maxQ = Number(searchParams.get("max") || "");
  const page = parseInt(searchParams.get("page") || "1", 10);

  const ubicaciones: string[] = getUnique(
    (properties || []).map((p) => (p.district as string | undefined) || "")
  );
  const tipos: string[] = getUnique(
    (properties || []).map((p) => (p as unknown as { type?: string }).type || "")
  );

  const prices = (properties || []).map((p) => (p.price as number) ?? 0);
  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPrice = prices.length ? Math.max(...prices) : 0;
  const min = Number.isFinite(minQ) && minQ > 0 ? minQ : minPrice;
  const max = Number.isFinite(maxQ) && maxQ > 0 ? maxQ : maxPrice;

  const filtered = (properties || []).filter((p) => {
    const matchUbicacion = !ubicacion || p.district === ubicacion;
    const matchTipo =
      !tipo || (p as unknown as { type?: string }).type === tipo;
    const matchRango = filtrarPorRango((p.price as number) ?? 0, min, max);
    return matchUbicacion && matchTipo && matchRango;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleFilters = ({ ubicacion, tipo, min, max }: { ubicacion: string; tipo: string; min: number; max: number }) => {
    const params = new URLSearchParams();
    if (ubicacion) params.append("ubicacion", ubicacion);
    if (tipo) params.append("tipo", tipo);
    if (min) params.append("min", String(min));
    if (max) params.append("max", String(max));
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
        <h1 className="text-4xl font-bold mb-8 text-primary-foreground">Propiedades Disponibles</h1>
        <div className="mb-8">
          <PropertyFilters
            ubicaciones={ubicaciones}
            tipos={tipos}
            priceBounds={{ min: minPrice, max: maxPrice }}
            initial={{ ubicacion, tipo, min, max }}
            onSubmit={handleFilters}
            showClearButton
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {paginated.map((p, i: number) => (
            <PropertyCard
              key={String(p.id ?? p.slug ?? i)}
              title={(p.title as string) || ""}
              location={(p.location as string) || ""}
              price={(p.price as number) || 0}
              features={(p.features as string) || ""}
              imageUrl={getMainImage(p.images)}
              slug={(p.slug as string) || ""}
              status={(p.status as string) || ""}
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
                    className="bg-white"
                    href="#"
                    onClick={() => handlePageChange(Math.max(1, page - 1))}
                    aria-disabled={page === 1}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <PaginationItem key={idx}>
                    <PaginationLink
                      className={`${page === idx + 1 ? "bg-primary text-white" : "bg-white"}`}
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
                    className="bg-white"
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