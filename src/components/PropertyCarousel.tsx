import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface PropertyCarouselProps {
  images: string[];
}

const PropertyCarousel = ({ images }: PropertyCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full h-72 rounded-lg overflow-hidden">
      <Image
        src={images[current]}
        alt={`Imagen ${current + 1}`}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="transition-all duration-300"
      />
      {/* Controles */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white z-10"
        onClick={prev}
        aria-label="Anterior"
        type="button"
      >
        &#8592;
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white z-10"
        onClick={next}
        aria-label="Siguiente"
        type="button"
      >
        &#8594;
      </Button>
      {/* Indicadores */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`block w-2 h-2 rounded-full ${i === current ? "bg-primary" : "bg-white/70"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyCarousel; 