import LoginForm from "@/components/login/LoginForm";
import { Divider, Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Login"
};

export default async function Login() {
    return (
        <Stack spacing={2} width={300}>
            <Typography variant="h6" textAlign="center">
                Sign In to Smarter Schedule
            </Typography>
            <Divider />
            <Typography component={Link} href="/reset-password" fontSize={14} alignSelf="end" color="primary" sx={{ textDecoration: "none" }}>
                Forgot password?
            </Typography>
            <LoginForm />
            <Stack direction="row" spacing={1}>
                <Typography fontSize={14}>New to Smarter Schedule?</Typography>
                <Typography
                    fontSize={14}
                    component={Link}
                    href="/register"
                    color="primary"
                    sx={{
                        textDecoration: "none",
                        ":hover": {
                            textDecoration: "underline"
                        }
                    }}>
                    Create an account.
                </Typography>
            </Stack>
        </Stack>
    );
}
