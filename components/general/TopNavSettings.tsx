"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { getUserUid, logOut } from "@/contexts/AuthContextProvider";

export default function TopNavSettings() {
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorElement);
    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        setAnchorElement(event.currentTarget);
    }
    function handleClose() {
        setAnchorElement(null);
    }
    const userId = getUserUid();

    return (
        <>
            <IconButton aria-label="profile" onClick={handleClick}>
                <AccountCircleIcon fontSize="large" />
            </IconButton>
            <Menu anchorEl={anchorElement} open={open} onClose={handleClose}>
                <MenuItem component={Link} href={`/settings/${userId}`} onClick={handleClose}>
                    Settings
                </MenuItem>
                <MenuItem onClick={logOut}>Logout</MenuItem>
            </Menu>
        </>
    );
}
