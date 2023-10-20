"use client";

import { useAuth } from "@/contexts/AuthContextProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "./Loading";

interface AuthGuardProps {
    isAccessible: boolean;
    children: React.ReactNode;
}

function AuthGuard({ isAccessible, children }: AuthGuardProps) {
    const router = useRouter();
    const { user, isPending } = useAuth();

    useEffect(() => {
        if (!isPending) {
            if (isAccessible && !user) {
                router.replace("/login");
            }
            if (!isAccessible && user) {
                router.replace("/");
            }
        }
    }, [user, isPending]);

    if (isPending) {
        return <Loading />;
    }
    if ((isAccessible && user) || (!isAccessible && !user)) {
        return <>{children}</>;
    }
    return <Loading />;
}

export default AuthGuard;
