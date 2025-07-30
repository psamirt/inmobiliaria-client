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

  // 🔑 Transformar la URL
  const propertiesWithUrls = data.map((property) => ({
    ...property,
    property_images: property.property_images.map((img: PropertyImage) => ({
      ...img,
      publicUrl: supabase.storage.from("propiedades").getPublicUrl(img.url).data
        .publicUrl,
    })),
  }));

  return propertiesWithUrls;
};
