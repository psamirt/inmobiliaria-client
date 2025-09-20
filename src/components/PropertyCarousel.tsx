import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { PropertyImage } from "@/types/types";

interface PropertyCarouselProps {
  images: PropertyImage[];
  alt?: string;
}

const PropertyCarousel = ({ images, alt = "Imagen de propiedad" }: PropertyCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Main carousel */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl md:rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
        <Image
          src={images[currentIndex].url}
          alt={alt}
          fill
          className="object-cover transition-all duration-500"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10" />
        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-none shadow-[var(--shadow-card)] backdrop-blur-sm z-20 h-8 w-8 md:h-10 md:w-10"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-none shadow-[var(--shadow-card)] backdrop-blur-sm z-20 h-8 w-8 md:h-10 md:w-10"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
        </Button>
        {/* Action buttons */}
        <div className="absolute top-2 md:top-4 right-2 md:right-4 flex gap-2 z-20">
          <Button
            variant="outline"
            size="icon"
            className="bg-white/90 hover:bg-white border-none shadow-[var(--shadow-card)] backdrop-blur-sm h-8 w-8 md:h-10 md:w-10"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              toast.success("URL copiada al portapapeles");
            }}
          >
            <Share2 className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
          </Button>
        </div>
        {/* Image counter */}
        <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 bg-black/50 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm backdrop-blur-sm z-20">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      {/* Thumbnail navigation */}
      <div className="flex gap-2 mt-3 md:mt-4 overflow-x-auto pb-2">
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => goToImage(index)}
            className={cn(
              "flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200",
              currentIndex === index
                ? "border-primary shadow-[var(--shadow-glow)]"
                : "border-border hover:border-accent"
            )}
            type="button"
            style={{ minWidth: 64, minHeight: 64 }}
          >
            <Image
              src={img.url}
              alt={alt}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyCarousel;
