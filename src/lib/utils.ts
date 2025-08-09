import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getMainImage(images: Array<{ url: string; is_main: boolean }> | null | undefined): string {
  if (!images || images.length === 0) return "/images/hero-building.jpg";
  
  // Buscar la imagen marcada como principal
  const mainImage = images.find(img => img.is_main);
  if (mainImage) return mainImage.url;
  
  // Si no hay imagen principal, usar la primera
  return images[0].url;
}
