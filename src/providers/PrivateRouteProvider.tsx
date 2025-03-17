import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const PrivateRouteProvider: React.FC<Props> = async ({ children }) => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) {
    return redirect("/login");
  }

  return children;
};

export default PrivateRouteProvider;
