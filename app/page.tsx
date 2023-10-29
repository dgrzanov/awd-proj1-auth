"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import PrivateHome from "./components/PrivateHome";
import PublicHome from "./components/PublicHome";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <>Loading...</>;
  if (error) return <>{error.message}</>;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {user ? (
        <>
          <a href="/api/auth/logout">Logout</a>
          <PrivateHome />
        </>
      ) : (
        <>
          <a href="/api/auth/login">Login</a>
          <PublicHome />
        </>
      )}
      <a>{user?.nickname}</a>
    </main>
  );
}
