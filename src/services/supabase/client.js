import { createClient } from "@supabase/supabase-js";

if (
  !import.meta.env.VITE_SUPABASE_URL ||
  !import.meta.env.VITE_SUPABASE_ANON_KEY
) {
  throw new Error("Se debe proporcionar la URL de Supabase y la clave anon.");
}

const SUPABASE = {
  URL: import.meta.env.VITE_SUPABASE_URL,
  KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
};

export const client = createClient(SUPABASE.URL, SUPABASE.KEY);
