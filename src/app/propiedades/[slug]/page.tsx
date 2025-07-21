"use client"
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Carousel from "@/components/PropertyCarousel";
import { propiedades } from "@/mock/props";
import { useParams } from "next/navigation";


export default function PropertyDetailPage() {
  const { slug } = useParams();
  const property = propiedades.find((p) => p.slug === slug);
  if (!property) return notFound();

  return (
    <main className="min-h-screen pt-24 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/propiedades" className="text-primary hover:underline mb-6 inline-block">← Volver a propiedades</Link>
        {/* Encabezado */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-1">{property.title}</h1>
          <div className="text-muted-foreground mb-1">{property.location}</div>
          <div className="flex flex-wrap items-center gap-4 mb-1">
            <span className="text-lg font-semibold text-primary">{property.price}</span>
            <span className="text-xs text-muted-foreground">Código Propiedad: {property.code}</span>
          </div>
        </div>
        {/* Carousel */}
        <div className="mb-8">
          <Carousel images={property.images} />
        </div>
        {/* Características principales */}
        <div className="flex flex-wrap gap-6 mb-8 justify-center">
          {(property.mainFeatures ?? []).map((f, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-bold text-lg text-primary">{f.value}</span>
              <span className="text-xs text-muted-foreground">{f.label}</span>
            </div>
          ))}
        </div>
        {/* Descripción */}
        <Card className="mb-8 p-6">
          <h2 className="text-xl font-semibold mb-2">Descripción</h2>
          <p className="text-base text-muted-foreground whitespace-pre-line">{property.description}</p>
        </Card>
        {/* Detalles adicionales */}
        <Card className="mb-8 p-6">
          <h2 className="text-xl font-semibold mb-2">Detalles Adicionales</h2>
          <ul className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {(property.additionalDetails ?? []).map((d, i) => (
              <li key={i} className="before:content-['•'] before:mr-2">{d}</li>
            ))}
          </ul>
        </Card>
        {/* Video */}
        <Card className="mb-8 p-6">
          <h2 className="text-xl font-semibold mb-2">Video Propiedad</h2>
          <div className="aspect-video w-full rounded overflow-hidden">
            <iframe
              width="100%"
              height="315"
              src={property.video}
              title="Video de la propiedad"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Card>
        {/* Mapa */}
        <Card className="mb-8 p-6">
          <h2 className="text-xl font-semibold mb-2">Mapa de ubicación</h2>
          <div className="w-full h-64 rounded overflow-hidden flex items-center justify-center bg-muted">
            {/* Aquí puedes poner un embed de Google Maps o una imagen de ejemplo */}
            {property.map ? (
              <Image src={property.map} alt="Mapa de ubicación" width={400} height={200} className="object-cover w-full h-full" />
            ) : (
              <span className="text-muted-foreground">No hay mapa disponible</span>
            )}
          </div>
        </Card>
      </div>
      <Footer />
    </main>
  );
} 