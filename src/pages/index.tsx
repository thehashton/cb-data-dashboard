import Login from "@/components/Login";
import Dashboard from "@/pages/dashboard";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  return (
    <>
      {session && <Dashboard />}
      {!session && <Login />}
    </>
  );
};

export default Home;
