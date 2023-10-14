"use client";

import { Api } from "@/api/Api";
import { useSetAlert } from "@/contexts/AlertContextProvider";
import { registerUser, updateUserProfile } from "@/contexts/AuthContextProvider";
import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function SignUpForm() {
    const setAlert = useSetAlert();
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "" });

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
            const { user } = await registerUser(formData.email, formData.password);
            await updateUserProfile(user, formData.name);
            await Api.User.createUser(user.uid, formData);
            setAlert("success", "You've successfully signed up! Welcome to Smarter Schedule!");
        } catch (error) {
            console.error(error);
            if (typeof error === "string") {
                setAlert("error", error);
            } else if (error instanceof Error) {
                setAlert("error", error.message);
            }
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <Stack spacing={2}>
                <TextField label="Enter your name" variant="outlined" name="name" value={formData.name} onChange={handleFormDataChange} />
                <TextField label="Enter your email" variant="outlined" type="email" name="email" value={formData.email} onChange={handleFormDataChange} />
                <TextField label="Enter your phone number" variant="outlined" type="tel" name="phone" value={formData.phone} onChange={handleFormDataChange} />
                <TextField label="Enter your password" variant="outlined" type="password" name="password" value={formData.password} onChange={handleFormDataChange} />
                <Button variant="contained" type="submit">
                    Sign Up
                </Button>
            </Stack>
        </form>
    );
}
