export type Property = {
  id?: number | string | null;
  slug?: string | null;
  title?: string | null;
  location?: string | null;
  district?: string | null;
  lat?: number | null;
  lng?: number | null;
  price?: number | null;
  status?: string | null;
  type?: string | null;
  features?: string | null;
  code?: string | number | null;
  description?: string;
  mainFeatures?: MainFeature;
  additionalDetails?: { label: string; quantity?: string | number }[];
  images?: PropertyImage[] | null;
  nearbyServices?: { name: string; type: string; distance: string }[];
} & Record<string, unknown>;

export interface PropertyImage {
  id: string;
  url: string;
  is_main: boolean;
}

export type MainFeature =
  | {
      id: number | string;
      label: string;
      quantity?: string | number | null;
    }[]
  | null;

