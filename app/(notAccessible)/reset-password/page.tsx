import ResetPasswordForm from "@/components/reset-password/ResetPasswordForm";
import { Divider, Stack, Typography } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reset Password"
};

export default function ResetPassword() {
    return (
        <Stack spacing={2} width={300}>
            <Typography variant="h6" textAlign="center">
                Reset your password
            </Typography>
            <Divider />
            <Typography>Enter your user account's verified email address and we will send you a password reset link.</Typography>
            <ResetPasswordForm />
        </Stack>
    );
}
