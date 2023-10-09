"use client";

import { useSetAlert } from "@/contexts/AlertContextProvider";
import { logIn } from "@/contexts/AuthContextProvider";
import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function LoginForm() {
    const setAlert = useSetAlert();
    const [formData, setFormData] = useState({ email: "", password: "" });

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
            await logIn(formData);
        } catch (error) {
            if (error) {
                setAlert("error", "Incorrect email or password.");
            }
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <Stack spacing={2}>
                <TextField label="Email" variant="outlined" type="email" name="email" value={formData.email} onChange={handleFormDataChange} />
                <TextField label="Password" variant="outlined" type="password" name="password" value={formData.password} onChange={handleFormDataChange} />
                <Button variant="contained" type="submit">
                    Sign In
                </Button>
            </Stack>
        </form>
    );
}
