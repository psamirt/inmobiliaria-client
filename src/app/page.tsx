"use client";
import HeroSection from "@/components/HeroSection";
import PropertyCard from "@/components/PropertyCard";
import { propiedades } from "@/mock/props";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { getProperties } from "@/api/supabaseApi";
import { Property } from "@/types/types";

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const props = await getProperties();
      setProperties(props);
    };

    fetchData();
  }, []);
  console.log(properties);
  return (
    <div>
      <HeroSection />
      {/* Sección de propiedades populares */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Nuestras Casas Populares</h2>
          <Link
            href="/propiedades"
            className="text-primary font-medium hover:underline"
          >
            Ver Todas →
          </Link>
        </div>
        <div className="relative">
          <Carousel>
            <CarouselContent>
              {propiedades.slice(0, 6).map((p, i) => (
                <CarouselItem
                  key={p.slug || i}
                  className="md:basis-1/3 lg:basis-1/3"
                >
                  <PropertyCard
                    title={p.title}
                    location={p.location}
                    price={p.price}
                    features={p.features}
                    imageUrl={p.images?.[0]?.url}
                    slug={p.slug}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-[10px] lg:left-[-50px] top-1/2 transform -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-[10px] lg:right-[-50px] top-1/2 transform -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </section>
      {/* Testimonio del fundador anclado al footer */}
      <section className="bg-background border-t border-border py-16">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-lg font-semibold mb-2">Kevin Durand</div>
            <div className="text-sm text-muted-foreground mb-4">
              Fundador, Casa Ideal
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center md:items-end">
            <div className="text-primary text-4xl font-bold mb-4">&#10077;</div>
            <div className="italic text-center md:text-right text-lg max-w-xl">
              &quot;Nos identificamos con cada cliente y les ofrecemos lo que
              mas les conviene. Muchas veces gran parte de nuestro trabajo es
              entender lo que el cliente quiere y necesita, la empatía es
              clave.&quot;
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
