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

  if (error) {
    console.error("Error trayendo propiedades:", error);
    return [];
  }

  const normalize = (text: string) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  type DbFeature = { label: string; quantity?: string | number | null };
  type DbDetail = { label: string; quantity?: string | number | null };
  type DbImage = { id: string | number; url: string; is_main: boolean };
  type DbNearby = { id?: number | string; name: string; type: string; distance: string };
  type DbPropertyRow = {
    id?: number | string | null;
    slug?: string | null;
    title?: string | null;
    location?: string | null;
    status?: string | null;
    type?: string | null;
    code?: string | number | null;
    property_images?: DbImage[] | null;
    main_features?: DbFeature[] | null;
    additional_details?: DbDetail[] | null;
    nearby_services?: DbNearby[] | null;
  } & Record<string, unknown>;

  const rows: DbPropertyRow[] = Array.isArray(data) ? (data as DbPropertyRow[]) : [];

  const buildFeaturesSummary = (
    features: DbFeature[]
  ): string => {
    if (!features || features.length === 0) return "";

    const matchOneOf = (labels: string[]) =>
      features.find((f) => labels.some((l) => normalize(f.label) === normalize(l)));

    const area = matchOneOf([
      "Área Terreno",
      "Area Terreno",
      "Área de Terreno",
      "Area de Terreno",
      "Área Construida",
      "Area Construida",
    ]);
    const dormitorios = matchOneOf(["Dormitorios"]);
    const banos = matchOneOf(["Baños", "Banos"]);
    const cocheras = matchOneOf(["Cocheras", "Cochera", "Estacionamientos", "Estacionamiento"]);

    const parts: string[] = [];
    if (area?.quantity) parts.push(String(area.quantity).trim());
    if (dormitorios?.quantity !== undefined && dormitorios?.quantity !== null)
      parts.push(`${dormitorios.quantity} dorm`);
    if (banos?.quantity !== undefined && banos?.quantity !== null)
      parts.push(`${banos.quantity} baños`);
    if (cocheras?.quantity !== undefined && cocheras?.quantity !== null)
      parts.push(`${cocheras.quantity} coch`);

    if (parts.length > 0) return parts.join(" / ");

    // Fallback: tomar hasta 4 items
    return features
      .slice(0, 4)
      .map((f) =>
        f.quantity !== undefined && f.quantity !== null
          ? `${f.quantity} ${f.label}`
          : f.label
      )
      .join(" / ");
  };

  const propertiesWithUrls = rows.map((property) => {
    // Usar el slug provisto por la BD tal cual
    const slug = (property?.slug ?? undefined) as string | undefined;

    type EnrichedPropertyImage = PropertyImage & { publicUrl: string };
    const rawImages: DbImage[] = Array.isArray(property?.property_images)
      ? (property.property_images as DbImage[])
      : [];

    const mainFeaturesRaw: DbFeature[] = Array.isArray(property?.main_features)
      ? (property.main_features as DbFeature[])
      : [];
    const additionalDetailsRaw: DbDetail[] = Array.isArray(property?.additional_details)
      ? (property.additional_details as DbDetail[])
      : [];
    const nearbyServicesRaw: DbNearby[] = Array.isArray(property?.nearby_services)
      ? (property.nearby_services as DbNearby[])
      : [];

    // Remover campos en snake_case para evitar duplicados
    const { main_features: _mf, additional_details: _ad, nearby_services: _ns, property_images: _pi, ...rest } = property as DbPropertyRow;
    void _mf; void _ad; void _ns; void _pi; // evitar variables sin uso

    return {
      ...(rest as Record<string, unknown>),
      slug,
      mainFeatures: mainFeaturesRaw.map((f) => ({
        label: f.label,
        quantity: f.quantity ?? undefined,
      })),
      additionalDetails: additionalDetailsRaw.map((d) => ({
        label: d.label,
        quantity: d.quantity ?? undefined,
      })),
      nearbyServices: nearbyServicesRaw.map((s) => ({
        name: s.name,
        type: s.type,
        distance: s.distance,
      })),
      // Si la BD trae features, úsalo; si no, generamos un resumen desde mainFeatures
      features: (rest as { features?: string }).features ?? buildFeaturesSummary(mainFeaturesRaw),
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
