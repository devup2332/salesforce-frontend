import { env } from "@/config/env";
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(env.SUPABASE_URL, env.SUPABASE_API_KEY);
}
