import Login from "@/components/Login";
import { Box, Typography } from "@mui/material";
import { useSession } from "next-auth/react";

const SignIn = () => {
    const { data: session } = useSession()

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant="h3" component="h2">{session ? 'Thank you for signing in' : 'Please Log In'}</Typography>
            <Login />
        </Box>
    )
}

export default SignIn;