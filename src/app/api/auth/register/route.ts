import { createClient } from "@/utils/supabase/server";

export const POST = async (request: Request) => {
  const { email, password } = await request.json();
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({ email, password });
  const user = {
    email: data?.user?.email,
    id: data?.user?.id,
    ...(data?.user && { full_name: "Diego Rojas" }),
  };

  if (error) {
    throw new Error(error.message);
  }
  return Response.json({ user, error });
};
