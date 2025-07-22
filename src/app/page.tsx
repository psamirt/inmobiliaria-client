"use client"
import HeroSection from "@/components/HeroSection";
import PropertyCard from "@/components/PropertyCard";
import { propiedades } from "@/mock/props";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* Sección de propiedades populares */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Nuestras Casas Populares</h2>
          <Link href="/propiedades" className="text-primary font-medium hover:underline">Ver Todas →</Link>
        </div>
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
      </section>
      {/* Testimonio del fundador anclado al footer */}
      <section className="bg-background border-t border-border py-16">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-lg font-semibold mb-2">Kevin Durand</div>
            <div className="text-sm text-muted-foreground mb-4">Fundador, Casa Ideal</div>
          </div>
          <div className="flex-1 flex flex-col items-center md:items-end">
            <div className="text-primary text-4xl font-bold mb-4">&#10077;</div>
            <div className="italic text-center md:text-right text-lg max-w-xl">
              &quot;Nuestro negocio se basa en relaciones cercanas y estamos contentos de poder compartir nuestras experiencias positivas en bienes raíces con nuestros clientes.&quot;
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
