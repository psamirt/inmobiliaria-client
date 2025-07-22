import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { propiedades } from "@/mock/props";

export default function PropiedadesPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Propiedades Disponibles</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {propiedades.map((p, i) => (
            <PropertyCard
              key={p.slug || i}
              title={p.title}
              location={p.location}
              price={p.price}
              features={p.features}
              imageUrl={p.images?.[0]}
              slug={p.slug}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
} 