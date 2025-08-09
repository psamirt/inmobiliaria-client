import { supabase } from "@/lib/supabaseClient";
import { PropertyImage } from "@/types/types";

export const getProperties = async () => {
  const { data, error } = await supabase.from("properties").select(`
      *,
      nearby_services (
        id,
        name,
        type,
        distance
      ),
      property_images (
        id,
        url,
        is_main
      ),
      main_features (
        id,
        label,
        quantity
      ),
      additional_details (
        id,
        label,
        quantity
      )
    `);

  console.log("data", data);

  if (error) {
    console.error("Error trayendo propiedades:", error);
    return [];
  }

  // Utilidad para generar slugs robustos desde cadenas arbitrarias
  const slugify = (input: unknown, fallback?: string): string => {
    if (typeof input !== "string" || input.trim() === "") {
      return fallback ?? "";
    }
    return input
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // quitar acentos
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // quitar caracteres no válidos
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  // 🔑 Construir propiedades con slug seguro y URLs públicas de imágenes
  type DbPropertyImage = { id: number | string; url: string; is_main: boolean };
  type DbProperty = {
    id?: number | string | null;
    slug?: string | null;
    title?: string | null;
    name?: string | null;
    location?: string | null;
    code?: string | number | null;
    property_images?: DbPropertyImage[] | null;
    main_features?: { id: number | string; label: string; quantity?: string | number | null }[] | null;
  } & Record<string, unknown>;

  const rows: DbProperty[] = Array.isArray(data) ? (data as DbProperty[]) : [];
  const buildFeaturesSummary = (
    features: { label: string; quantity?: string | number | null }[]
  ): string => {
    if (!features || features.length === 0) return "";

    const getByLabel = (label: string) =>
      features.find((f) => f.label?.toLowerCase() === label.toLowerCase());

    const area = getByLabel("Área Construida") || getByLabel("Area Construida") || getByLabel("Área construida");
    const dormitorios = getByLabel("Dormitorios");
    const banos = getByLabel("Baños") || getByLabel("Banos") || getByLabel("baños");

    const parts: string[] = [];
    if (area?.quantity) parts.push(String(area.quantity).trim());
    if (dormitorios?.quantity !== undefined && dormitorios?.quantity !== null)
      parts.push(`${dormitorios.quantity} dorm`);
    if (banos?.quantity !== undefined && banos?.quantity !== null)
      parts.push(`${banos.quantity} baños`);

    if (parts.length > 0) return parts.join(" / ");

    // Fallback genérico: tomar hasta 3 items
    return features
      .slice(0, 3)
      .map((f) =>
        f.quantity !== undefined && f.quantity !== null
          ? `${f.quantity} ${f.label}`
          : f.label
      )
      .join(" / ");
  };

  const propertiesWithUrls = rows.map((property) => {
    const baseSlugSource =
      property?.slug ||
      property?.title ||
      property?.name ||
      property?.location ||
      (property?.code ? String(property.code) : undefined) ||
      (property?.id ? `prop-${property.id}` : undefined);

    const slug = slugify(baseSlugSource, `prop-${property?.id ?? "sin-id"}`);

    type EnrichedPropertyImage = PropertyImage & { publicUrl: string };
    const rawImages: DbPropertyImage[] = Array.isArray(property?.property_images)
      ? (property.property_images as DbPropertyImage[])
      : [];

    const mainFeaturesRaw = Array.isArray(property?.main_features)
      ? (property.main_features as { label: string; quantity?: string | number | null }[])
      : [];

    const featuresSummary = buildFeaturesSummary(mainFeaturesRaw);

    return {
      ...property,
      slug,
      features: featuresSummary,
      // camelCase espejo para componentes que esperan mainFeatures
      mainFeatures: mainFeaturesRaw.map((f) => ({
        label: f.label,
        quantity: f.quantity ?? undefined,
      })),
      property_images: rawImages.map<EnrichedPropertyImage>((img) => ({
        id: String(img.id),
        url: img.url,
        is_main: Boolean(img.is_main),
        publicUrl: supabase.storage
          .from("propiedades")
          .getPublicUrl(img.url).data.publicUrl,
      })),
    };
  });

  return propertiesWithUrls;
};
