"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import PrivateHome from "./components/PrivateHome";
import PublicHome from "./components/PublicHome";
import NavBar from "./components/NavBar";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <>Loading...</>;
  if (error) return <>{error.message}</>;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-700">
      <NavBar />
      <div className="mt-[100px] p-24">
        {user ? <PrivateHome /> : <PublicHome />}
      </div>
    </main>
  );
}
