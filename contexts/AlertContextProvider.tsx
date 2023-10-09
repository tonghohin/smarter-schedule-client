"use client";

import { createContext, useContext, useState } from "react";

type Severity = "error" | "info" | "success" | "warning";

interface Alert {
    severity: Severity;
    message: string;
}

interface AlertContext {
    alert: Alert | null;
    setAlert: (severity: Severity, message: string) => void;
    clearAlert: () => void;
}

const AlertContext = createContext<AlertContext>({ alert: null, setAlert: () => {}, clearAlert: () => {} });

export default function AlertContextProvider({ children }: { children: React.ReactNode }) {
    const [alertContext, setAlertContext] = useState<Alert | null>(null);

    function setAlert(severity: Severity, message: string) {
        setAlertContext({ severity: severity, message: message });
    }

    function clearAlert() {
        setAlertContext(null);
    }

    return <AlertContext.Provider value={{ alert: alertContext, setAlert: setAlert, clearAlert: clearAlert }}>{children}</AlertContext.Provider>;
}

export function useAlert() {
    return useContext(AlertContext)?.alert;
}
export function useSetAlert() {
    return useContext(AlertContext).setAlert;
}
export function useClearAlert() {
    return useContext(AlertContext).clearAlert;
}
