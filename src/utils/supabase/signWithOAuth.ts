"use client";
import { env } from "@/config/env";
import { createClient } from "./client";
import { Provider } from "@supabase/supabase-js";

const signInWithOAuth = async (provider: Provider) => {
  const supabase = createClient();
  const redirectUrl = `${env.APP_URL}/api/auth/callback`;
  console.log({ redirectUrl });
  supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: redirectUrl,
    },
  });
};

export const signInWithGoogle = async () => signInWithOAuth("google");
