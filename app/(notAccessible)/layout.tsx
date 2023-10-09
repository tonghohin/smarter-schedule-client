import AuthGuard from "@/components//general/AuthGuard";
import AlertMessage from "@/components/general/AlertMessage";
import { Paper, Stack } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login"
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <AuthGuard isAccessible={false}>
            <Stack padding={1} spacing={2} flex="1 1 100%" alignItems="center">
                <AlertMessage />
                <Paper sx={{ minWidth: "300px", maxWidth: "400px", padding: "1.5rem" }}>{children}</Paper>
            </Stack>
        </AuthGuard>
    );
}
