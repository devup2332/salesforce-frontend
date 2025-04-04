"use client";
import Loader from "@/components/global/Loader";
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
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setSession(session);
        router.push("/dashboard");
      }
    } catch (err) {
      setLoading(false);
      console.error("Error fetching session", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSession();
  }, []);
  if (loading) return <Loader />;
  if (!session) return children;
};

export default PublicRouteProvider;
