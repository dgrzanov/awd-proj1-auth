import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

const NavBar = () => {
  const { user, error, isLoading } = useUser();
  return (
    <div className="w-full h-[100px] bg-slate-800 absolute top-0 flex justify-between items-center px-5">
      <div>
        <a>Project 1 - Auth</a>
      </div>
      <div className="flex gap-3">
        {user ? (
          <>
            <a>User: {user?.name}</a>
            <a href="/api/auth/logout">Logout</a>
          </>
        ) : (
          <a href="/api/auth/login">Login</a>
        )}
      </div>
    </div>
  );
};

export default NavBar;
