import { env } from "@/config/env";
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(env.SUPABASE_PROJECT_URL, env.SUPABASE_ANON_KEY);
}
