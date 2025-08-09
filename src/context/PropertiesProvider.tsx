"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProperties } from "@/api/supabaseApi";
import { Property, PropertyImage } from "@/types/types";

interface PropertiesContextValue {
  properties: Property[];
  loading: boolean;
  error?: string;
  refresh: () => Promise<void>;
  getBySlug: (slug: string) => Property | undefined;
}

const PropertiesContext = createContext<PropertiesContextValue | undefined>(undefined);

type RawImage = { id: string | number; url: string; is_main: boolean; publicUrl?: string };
type RawProperty = Property & { property_images?: RawImage[] };

function normalizeImages(property: RawProperty): PropertyImage[] {
  const rawImages: RawImage[] = Array.isArray(property?.property_images)
    ? (property.property_images as RawImage[])
    : [];
  return rawImages.map((img) => ({
    id: String(img.id),
    url: img.publicUrl ?? img.url ?? "",
    is_main: Boolean(img.is_main),
  }));
}

export const PropertiesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);

  const load = async () => {
    setLoading(true);
    setError(undefined);
    try {
      const rows = (await getProperties()) as RawProperty[];
      const normalized: Property[] = rows.map((p) => ({
        ...p,
        images: normalizeImages(p),
      }));
      setProperties(normalized);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error cargando propiedades";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, []);

  const value = useMemo<PropertiesContextValue>(() => ({
    properties,
    loading,
    error,
    refresh: load,
    getBySlug: (slug: string) => properties.find((p) => p.slug === slug),
  }), [properties, loading, error]);

  return (
    <PropertiesContext.Provider value={value}>{children}</PropertiesContext.Provider>
  );
};

export const useProperties = (): PropertiesContextValue => {
  const ctx = useContext(PropertiesContext);
  if (!ctx) throw new Error("useProperties debe usarse dentro de PropertiesProvider");
  return ctx;
};


