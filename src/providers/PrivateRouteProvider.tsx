import Loader from "@/components/global/Loader";
import { useAuthStore } from "@/store/AuthStore";
import { fetchApi } from "@/utils/api/fetch";
import { createClient } from "@/utils/supabase/client";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const PrivateRouteProvider: React.FC<Props> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const { setUser } = useAuthStore();
  const router = useRouter();

  const getSession = useCallback(async () => {
    const supabase = createClient();
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) return router.push("/login");

    const {
      data: { user },
    } = await fetchApi(`/api/users/findUserById/${session.user.id}`, {
      method: "GET",
    });
    setUser(user);
    setSession(session);
  }, []);

  useEffect(() => {
    getSession();
  }, []);

  if (!session) {
    return <Loader />;
  }

  return children;
};

export default PrivateRouteProvider;
