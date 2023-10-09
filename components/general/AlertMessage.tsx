"use client";

import { useAlert, useClearAlert } from "@/contexts/AlertContextProvider";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, Collapse, IconButton } from "@mui/material";
import { useEffect, useState } from "react";

export default function AlertMessage() {
    const alert = useAlert();
    const clearAlert = useClearAlert();
    const [isOpen, setIsOpen] = useState(alert !== null);

    useEffect(() => {
        setIsOpen(alert !== null);
    }, [alert]);

    function handleCloseButtonClick() {
        setIsOpen(false);
        setTimeout(() => clearAlert(), 500);
    }

    return (
        <Collapse sx={{ maxWidth: "1400px", margin: "auto", position: "fixed", top: "60px" }} in={isOpen}>
            {alert && (
                <Alert
                    severity={alert.severity}
                    action={
                        <IconButton aria-label="close" color="inherit" size="small" onClick={handleCloseButtonClick}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }>
                    {alert.message}
                </Alert>
            )}
        </Collapse>
    );
}
