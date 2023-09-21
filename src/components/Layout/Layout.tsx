import SideMenu from "@/components/SideMenu";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Footer from "../Footer";

const Layout = (props: any) => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>DataSoft - Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{ padding: session ? '0 24px 0 80px' : 0 }}>
        {session && <SideMenu />}
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
