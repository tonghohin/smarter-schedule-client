import SignUpForm from "@/components/register/SignUpForm";
import { Divider, Stack, Typography } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register"
};

export default function Login() {
    return (
        <Stack spacing={2} width={300}>
            <Typography variant="h6" textAlign="center">
                Welcome to Scheduler!
            </Typography>
            <Divider />
            <SignUpForm />
        </Stack>
    );
}
