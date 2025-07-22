"use client"
import React from "react";
import { notFound } from "next/navigation";
import { propiedades } from "@/mock/props";
import { useParams } from "next/navigation";
import PropertyCarousel from "@/components/PropertyCarousel";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyMap from "@/components/PropertyMap";


export default function PropertyDetailPage() {
  const { slug } = useParams();
  const property = propiedades.find((p) => p.slug === slug);
  if (!property) return notFound();

  return (
    <div className="min-h-screen bg-background">
      {/* Header section */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-foreground">Detalle de Propiedad</h1>
          <p className="text-muted-foreground mt-1">
            Descubre todos los detalles de esta increíble propiedad
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Images and details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Carousel */}
            <div className="mb-8">
              <PropertyCarousel images={property.images} alt={property.title} />
            </div>
            <PropertyDetails />
          </div>
          
          {/* Right column - Map */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <PropertyMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 