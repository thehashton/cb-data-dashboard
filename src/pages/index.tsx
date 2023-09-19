import Login from "@/components/Login";
import Dashboard from "@/pages/dashboard";
import { useSession } from "next-auth/react";
import React from "react";
import scss from "../components/Layout/Layout.module.scss";

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <main className={scss.main}>
      {session && <Dashboard />}
      {!session && <Login />}
    </main>
  );
};

export default Home;
