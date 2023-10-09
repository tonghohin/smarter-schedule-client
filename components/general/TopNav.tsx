"use client";

import { getUserUid } from "@/contexts/AuthContextProvider";
import { AppBar, Box, Button, Stack } from "@mui/material";
import Link from "next/link";
import TopNavSettings from "./TopNavSettings";

export default function TopNav() {
    const uid = getUserUid();

    return (
        <AppBar position="fixed" sx={{ display: "flex", alignItems: "center" }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%" maxWidth={1200}>
                <Box sx={{ flexShrink: "1" }}>
                    <Button component={Link} href="/" variant="text" color="inherit">
                        Home
                    </Button>
                    <Button component={Link} href={`/schedule/${uid}`} variant="text" color="inherit">
                        Schedule
                    </Button>
                    <Button component={Link} href={`/students/${uid}`} variant="text" color="inherit">
                        Students
                    </Button>
                </Box>
                <TopNavSettings />
            </Stack>
        </AppBar>
    );
}
