import { createClient } from "@/utils/supabase/server";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const { email, password } = await request.json();

  const supabase = await createClient();
  const {
    data: { user, session },
    error,
  } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  const dataUser = {
    email: user?.email,
    id: user?.id,
    full_name: "Diego Rojas",
  };
  return Response.json({ user: dataUser, session, error });
};
