"use client";
import NavBar from "@/app/components/NavBar";
import PrivateHome from "@/app/components/PrivateHome";
import PublicHome from "@/app/components/PublicHome";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const HOST = process.env.HOST_URL;
const CompetitionPage = ({ params }: { params: { id: number } }) => {
  const { user, error, isLoading } = useUser();
  const { id } = params;
  const [competition, setCompetition] = useState<object>({});

  const fetchCompetition = async () => {
    console.log("prasd", HOST);
    const res = await axios.get(`http://localhost:3000/api/competition/${id}`);
    setCompetition(res);
  };

  useEffect(() => {
    fetchCompetition();
  }, []);

  useEffect(() => {
    console.log("Competition:", competition);
  }, [competition]);
  if (isLoading) return <>Loading...</>;
  if (error) return <>{error.message}</>;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-700">
      <NavBar />
      <div className="mt-[100px] p-24">
        {user ? (
          <>
            {/* @ts-ignore */}
            <a>{competition?.name}</a>
          </>
        ) : null}
      </div>
    </main>
  );
};

export default CompetitionPage;
