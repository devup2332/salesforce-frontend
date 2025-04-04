import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const supabase = await createClient();
    await supabase.auth.signOut();
    return NextResponse.json({ message: "Logged out" });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error });
  }
};
