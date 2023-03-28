import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button variant={"contained"} color={"error"} onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <Button variant={"contained"} color={"success"} onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
};

export default Login;
