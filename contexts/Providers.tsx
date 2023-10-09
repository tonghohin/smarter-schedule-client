"use client";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AlertContextProvider from "@/contexts/AlertContextProvider";
import AuthContextProvider from "@/contexts/AuthContextProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AlertContextProvider>
            <AuthContextProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>
            </AuthContextProvider>
        </AlertContextProvider>
    );
}
