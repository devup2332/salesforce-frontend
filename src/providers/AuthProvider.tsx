"use client";
import { useAuthStore } from "@/store/AuthStore";
import { createClient } from "@/utils/supabase/client";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const { setUser } = useAuthStore();

  const getUser = async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      setUser({
        email: user.email!,
        id: user.id,
        full_name: "Diego Rojas",
      });
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return children;
};

export default AuthProvider;
