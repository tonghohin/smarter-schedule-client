"use client";

import { useSetAlert } from "@/contexts/AlertContextProvider";
import { resetPassword } from "@/contexts/AuthContextProvider";
import { Utilities } from "@/utilities/Utilities";
import { Button, Stack, TextField } from "@mui/material";
import { FirebaseError } from "firebase/app";
import { useState } from "react";

export default function ResetPasswordForm() {
    const setAlert = useSetAlert();
    const [formData, setFormData] = useState({ email: "" });

    function handleFormDataChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            };
        });
    }

    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await resetPassword(formData.email);
            setAlert("success", `The password reset email has been sent to ${formData.email}.`);
        } catch (error) {
            if (error instanceof FirebaseError) {
                setAlert("error", error.code);
            }
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <Stack spacing={2}>
                <TextField label="Email" variant="outlined" type="email" name="email" value={formData.email} onChange={handleFormDataChange} />
                <Button variant="contained" type="submit">
                    Send password reset email
                </Button>
            </Stack>
        </form>
    );
}
