import AlertMessage from "@/components/general/AlertMessage";
import AuthGuard from "@/components/general/AuthGuard";
import TopNav from "@/components/general/TopNav";
import { Paper, Stack } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <AuthGuard isAccessible={true}>
            <Stack height="100%" width="100%">
                <TopNav />
                <Stack padding={1} spacing={2} marginTop={5} flex="1 1 100%" alignItems="center">
                    <AlertMessage />
                    <Paper sx={{ width: "100%", height: "100%", maxWidth: "1200px", padding: "1.5rem" }}>{children}</Paper>
                </Stack>
            </Stack>
        </AuthGuard>
    );
}
