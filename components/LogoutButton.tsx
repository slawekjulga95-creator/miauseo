"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <button onClick={handleLogout}
      className="text-sm font-semibold text-zinc-500 hover:text-brand border border-border hover:border-brand px-4 py-2 rounded-xl transition-colors">
      Wyloguj
    </button>
  );
}
