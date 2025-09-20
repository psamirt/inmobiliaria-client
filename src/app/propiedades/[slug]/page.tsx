"use client";
import React from "react";
import { notFound } from "next/navigation";
import { useProperties } from "@/context/PropertiesProvider";
import { useParams } from "next/navigation";
import PropertyCarousel from "@/components/PropertyCarousel";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyMap from "@/components/PropertyMap";
import { Property, PropertyImage } from "@/types/types";

export default function PropertyDetailPage() {
  const { slug } = useParams();
  const { getBySlug, loading } = useProperties();
  const property = getBySlug(String(slug));
  if (loading) {
    return (
      <div className="min-h-screen text-primary-foreground grid place-items-center p-8">
        <div className="animate-pulse text-sm text-muted-foreground">Cargando propiedad…</div>
      </div>
    );
  }
  if (!property) return notFound();

  return (
    <div className="min-h-screen text-primary-foreground max-w-[1400px] mx-auto md:pt-16">
      {/* Header section */}
      <div className="">
        <div className="max-w-[1400px] mx-auto px-4 py-6 md:py-8">
          <h1 className="text-xl md:text-2xl font-bold">
            Detalle de Propiedad
          </h1>
          <p className="text-sm md:text-base mt-1">
            Descubre todos los detalles de esta increíble propiedad
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1400px] mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left column - Images and details */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Carousel */}
            <div className="mb-6 md:mb-8">
              <PropertyCarousel
                images={(property.images ?? []) as PropertyImage[]}
                alt={property.title ?? "Imagen de propiedad"}
              />
            </div>
            <PropertyDetails props={property as unknown as Property} />
          </div>

          {/* Right column - Map */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              <PropertyMap props={property as unknown as Property} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
