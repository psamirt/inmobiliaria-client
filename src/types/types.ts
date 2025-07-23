export interface Property {
  slug: string;
  title: string;
  location: string;
  district: string;
  lat: number;
  lng: number;
  price: string;
  features: string;
  code?: string;
  description: string;
  mainFeatures: { label: string; quantity?: string | number }[];
  additionalDetails: { label: string; quantity?: string | number }[];
  map: string;
  images: string[];
  nearbyServices: { name: string; type: string; distance: string }[];
}
