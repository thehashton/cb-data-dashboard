import { useSession, signIn, signOut } from "next-auth/react";
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
      <h2>Please log in</h2> <br />
      <Button variant={"contained"} color={"success"} onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
};

export default Login;
