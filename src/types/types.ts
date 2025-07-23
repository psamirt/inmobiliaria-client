export interface Property {
  slug: string;
  title: string;
  location: string;
  district: string;
  lat: number;
  lng: number;
  price: number;
  features: string;
  code?: string;
  description: string;
  mainFeatures: { label: string; quantity?: string | number }[];
  additionalDetails: { label: string; quantity?: string | number }[];
  images: string[];
  nearbyServices: { name: string; type: string; distance: string }[];
}
