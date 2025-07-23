import { supabase } from '@/lib/supabaseClient'

export const getProperties = async () => {
  const { data, error } = await supabase
    .from('properties')
    .select(`
    *,
    nearby_services (
      id,
      name,
      type,
      distance
    ),
    property_images (
      id,
      url
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
  `)

  if (error) {
    console.error('Error trayendo propiedades:', error)
    return []
  }

  return data
}