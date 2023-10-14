"use client";

import { useSetAlert } from "@/contexts/AlertContextProvider";
import { getUserDisplayName, getUserEmail, logOut, resetPassword } from "@/contexts/AuthContextProvider";
import { Chip, Divider, List, ListItem, Stack, Typography } from "@mui/material";
import TableDisplay from "../general/TableDisplay";

interface AccountProps {
    userPhone: string;
}

export default function Account({ userPhone }: AccountProps) {
    const userEmail = getUserEmail();
    const userDisplayName = getUserDisplayName();
    const setAlert = useSetAlert();
    async function handleResetPassword() {
        try {
            await resetPassword(userEmail);
            setAlert("success", `A password reset email has been sent to ${userEmail}.`);
        } catch (error) {
            console.error(error);
            setAlert("error", `Failed to send the password reset email to ${userEmail}. Please try again.`);
        }
    }
    return (
        <Stack spacing={2}>
            <TableDisplay>
                <List>
                    <ListItem>
                        <Typography color="grey" width={100}>
                            Name
                        </Typography>
                        <Typography>{userDisplayName}</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Typography color="grey" width={100}>
                            Email
                        </Typography>
                        <Typography>{userEmail}</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Typography color="grey" width={100}>
                            Phone
                        </Typography>
                        <Typography>{userPhone}</Typography>
                    </ListItem>
                </List>
            </TableDisplay>
            <Chip label="Reset Password" color="primary" onClick={handleResetPassword} />
            <Chip label="Logout" onClick={logOut} />
        </Stack>
    );
}
