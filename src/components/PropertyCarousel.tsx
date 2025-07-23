import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface PropertyCarouselProps {
  images: string[];
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
      <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
        <Image
          src={images[currentIndex]}
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
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-none shadow-[var(--shadow-card)] backdrop-blur-sm z-20"
          onClick={prevImage}
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-none shadow-[var(--shadow-card)] backdrop-blur-sm z-20"
          onClick={nextImage}
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </Button>
        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex gap-2 z-20">
          <Button
            variant="outline"
            size="icon"
            className="bg-white/90 hover:bg-white border-none shadow-[var(--shadow-card)] backdrop-blur-sm"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              toast.success("URL copiada al portapapeles");
            }}
          >
            <Share2 className="h-5 w-5 text-foreground" />
          </Button>
        </div>
        {/* Image counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm z-20">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      {/* Thumbnail navigation */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={cn(
              "flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200",
              currentIndex === index
                ? "border-primary shadow-[var(--shadow-glow)]"
                : "border-border hover:border-accent"
            )}
            type="button"
            style={{ minWidth: 80, minHeight: 80 }}
          >
            <Image
              src={img}
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
