"use client";
import { useAuthStore } from "@/store/AuthStore";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "salesforce-lib";

const DashboardPage = () => {
  const { user } = useAuthStore();
  const router = useRouter();
  const { setUser } = useAuthStore();

  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(undefined);
    router.push("/login");
  };
  return (
    <div className="h-screen">
      Hello {user?.email}
      <Button className="text-text-3" onClick={() => signOut()}>
        Sign Out
      </Button>
    </div>
  );
};

export default DashboardPage;
