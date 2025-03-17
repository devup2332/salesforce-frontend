import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

type Props = {
  children: React.ReactNode;
};

const PublicRouteProvider: React.FC<Props> = async ({ children }) => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  if (data.user) {
    return redirect("/dashboard");
  }
  return children;
};

export default PublicRouteProvider;
