import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";

const propiedades = [
  {
    title: "Apartamento Moderno",
    location: "Banana Island, Madrid",
    price: "€300,000",
    features: "2 Hab / 2 Baños / 110 m²",
  },
  {
    title: "Casa Familiar",
    location: "Parkview Estate, Barcelona",
    price: "€450,000",
    features: "3 Hab / 3 Baños / 200 m²",
  },
  {
    title: "Torre Residencial",
    location: "Bio Atlantic, Valencia",
    price: "€650,000",
    features: "2 Hab / 2 Baños / 95 m²",
  },
];

export default function PropiedadesPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Propiedades Disponibles</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {propiedades.map((p, i) => (
            <PropertyCard key={i} {...p} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
} 