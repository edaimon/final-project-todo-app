// PONER CONEXIÓN CON SUPABASE

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ovhdooidkcfygufxvbei.supabase.co";
const supabaseKey = "unNz#T!#E3Uz2vG";
export const supabase = createClient(supabaseUrl, supabaseKey); //export cons añadido por Joan

// import.meta.env.VITE_SUPABASE_URL
// import.meta.env.VITE_SUPABASE_KEY