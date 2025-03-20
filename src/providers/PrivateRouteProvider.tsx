import Loader from "@/components/general/Loader";
import { createClient } from "@/utils/supabase/client";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const PrivateRouteProvider: React.FC<Props> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  const getSession = async () => {
    const supabase = createClient();
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) return router.push("/login");

    setSession(session);
  };

  useEffect(() => {
    getSession();
  }, []);

  if (!session) {
    return <Loader />;
  }

  return children;
};

export default PrivateRouteProvider;
