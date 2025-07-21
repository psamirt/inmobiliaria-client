"use client"
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Carousel from "@/components/PropertyCarousel";

const propiedades = [
  {
    slug: "apartamento-moderno",
    title: "Apartamento Moderno",
    location: "Banana Island, Madrid",
    price: "€300,000",
    features: "2 Hab / 2 Baños / 110 m²",
    code: "21222",
    description: `Encantador apartamento muy luminoso y espacioso. Cuenta con 2 habitaciones, 2 baños, sala de estar, cocina equipada y una gran terraza. Situado en una zona tranquila y cerca de todos los servicios.`,
    mainFeatures: [
      { label: "Área Construida", value: "110 m²" },
      { label: "Dormitorios", value: "2" },
      { label: "Baños", value: "2" },
    ],
    additionalDetails: [
      "Terraza privada",
      "Cocina equipada",
      "Aire acondicionado",
      "Piscina comunitaria",
      "Ascensor",
      "Garaje incluido",
      "Trastero",
      "Cerca de transporte público",
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    map: "/images/hero-building.jpg",
    images: [
      "/images/hero-building.jpg",
      "/images/hero-building.jpg",
      "/images/hero-building.jpg"
    ],
  },
  {
    slug: "casa-familiar",
    title: "Casa Familiar",
    location: "Parkview Estate, Barcelona",
    price: "€450,000",
    features: "3 Hab / 3 Baños / 200 m²",
    description: "Casa ideal para familias, con amplio jardín y espacios luminosos.",
    images: [
      "/images/hero-building.jpg",
      "/images/hero-building.jpg",
      "/images/hero-building.jpg"
    ],
  },
  {
    slug: "torre-residencial",
    title: "Torre Residencial",
    location: "Bio Atlantic, Valencia",
    price: "€650,000",
    features: "2 Hab / 2 Baños / 95 m²",
    description: "Torre residencial de lujo en el corazón de Valencia.",
    images: [
      "/images/hero-building.jpg",
      "/images/hero-building.jpg",
      "/images/hero-building.jpg"
    ],
  },
];

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const property = propiedades.find((p) => p.slug === params.slug);
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