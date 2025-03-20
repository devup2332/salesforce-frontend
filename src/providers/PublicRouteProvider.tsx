"use client";
import Loader from "@/components/general/Loader";
import { sleep } from "@/utils/sleep";
import { createClient } from "@/utils/supabase/client";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const supabase = createClient();
const PublicRouteProvider: React.FC<Props> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  const getSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    await sleep(3000);
    if (session) {
      setSession(session);

      setLoading(false);
      return router.push("/dashboard");
    }
  };

  useEffect(() => {
    getSession();
  }, []);
  if (loading) return <Loader />;
  if (!session) return children;
};

export default PublicRouteProvider;
