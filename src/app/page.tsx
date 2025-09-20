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

  const width = window.innerWidth > 768 ? 200 : 150;
  const height = window.innerWidth > 768 ? 200 : 150;

  return (
    <div>
      <HeroSection />
      <div className="md:grid grid-cols-1 md:grid-cols-3 hidden gap-4 md:gap-8 pt-8 max-w-6xl items-center mx-auto justify-center px-4 py-8 md:py-16 text-primary-foreground border-b border-primary-foreground">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-white">1200+</div>
          <div className="text-sm md:text-base text-white/80">Propiedades Vendidas</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-white">4500+</div>
          <div className="text-sm md:text-base text-white/80">Propiedades Alquiladas</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-white">100+</div>
          <div className="text-sm md:text-base text-white/80">Clientes Felices</div>
        </div>
      </div>
      {/* Sección de propiedades populares */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16 text-primary-foreground">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 md:mb-8 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center sm:text-left">Propiedades Destacadas</h2>
          <Link
            href="/propiedades"
            className="font-medium hover:underline text-sm md:text-base"
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
                  className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/3"
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
      <section className="bg-background pt-6 md:pt-10 text-primary-foreground mt-1">
        <div className="md:max-w-6xl max-w-[380px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between border-t border-primary-foreground">
          <div className="flex-1 flex flex-col items-center">
            <div className="text-primary text-2xl md:text-4xl font-bold">&#10077;</div>
            <div className="italic text-sm md:text-lg max-w-3xl text-center md:text-left px-4 md:px-0">
              &quot;Nos identificamos con cada cliente y les ofrecemos lo que
              mas les conviene. Muchas veces gran parte de nuestro trabajo es
              entender lo que el cliente quiere y necesita, la empatía es
              clave.&quot;
            </div>
            <Image
              src="/images/preview2.png"
              alt="Casa Ideal"
              width={width}
              height={height}
              className="cursor-pointer brightness-0 invert mt-6 md:mt-10"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
