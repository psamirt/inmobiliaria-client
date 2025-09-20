"use client";
import HeroSection from "@/components/HeroSection";
import PropertyCard from "@/components/PropertyCard";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useProperties } from "@/context/PropertiesProvider";
import { getMainImage } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  const { properties } = useProperties();

  return (
    <div>
      <HeroSection />
      <div className="hidden lg:grid grid-cols-3 gap-8 pt-8 max-w-6xl items-center mx-auto justify-center px-4 py-16 text-primary-foreground border-b border-primary-foreground">
        <div className="text-center">
          <div className="text-3xl font-bold text-white">1200+</div>
          <div className="text-white/80">Propiedades Vendidas</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white">4500+</div>
          <div className="text-white/80">Propiedades Alquiladas</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white">100+</div>
          <div className="text-white/80">Clientes Felices</div>
        </div>
      </div>
      {/* Sección de propiedades populares */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-primary-foreground">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Propiedades Destacadas</h2>
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
              {properties?.slice(0, 6).map((p, i) => (
                <CarouselItem
                  key={String(p.id ?? p.slug ?? i)}
                  className="md:basis-1/3 lg:basis-1/3"
                >
                  <PropertyCard
                    title={p.title ?? ""}
                    location={p.location ?? ""}
                    price={p.price ?? 0}
                    features={p.features ?? ""}
                    imageUrl={getMainImage(p.images)}
                    slug={p.slug ?? ""}
                    status={p.status ?? ""}
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
      <section className="bg-background pt-10 text-primary-foreground mt-1">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between border-t border-primary-foreground">
          <div className="flex-1 flex flex-col items-center">
            <div className="text-primary text-4xl font-bold">&#10077;</div>
            <div className="italic text-lg max-w-3xl">
              &quot;Nos identificamos con cada cliente y les ofrecemos lo que
              mas les conviene. Muchas veces gran parte de nuestro trabajo es
              entender lo que el cliente quiere y necesita, la empatía es
              clave.&quot;
            </div>
            <Image
              src="/images/preview2.png"
              alt="Casa Ideal"
              width={200}
              height={200}
              className="cursor-pointer brightness-0 invert mt-10"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
