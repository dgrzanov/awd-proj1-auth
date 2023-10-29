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
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-700">
      <NavBar />
      {user ? (
        <>
          <PrivateHome />
        </>
      ) : (
        <>
          <PublicHome />
        </>
      )}
      <a>{user?.nickname}</a>
    </main>
  );
}
