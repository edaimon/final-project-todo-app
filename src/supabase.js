// PONER CONEXIÓN CON SUPABASE

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey); //export cons añadido por Joan


// CAMBIAR CONTRASEÑA SEGÚN EL PROYECTO DE GEMMA