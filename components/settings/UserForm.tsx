"use client";

import { Api } from "@/api/Api";
import { useSetAlert } from "@/contexts/AlertContextProvider";
import { getUserEmail, getUserUid } from "@/contexts/AuthContextProvider";
import Student from "@/interfaces/Student";
import { Button, Stack, TextField, Typography } from "@mui/material";
import deepEqual from "deep-equal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Schedule from "../general/Schedule";
import User from "@/interfaces/User";

interface UserFormProps {
    user: User;
}

export default function UserForm({ user }: UserFormProps) {
    const email = getUserEmail();
    const setAlert = useSetAlert();
    const [formData, setFormData] = useState(() => structuredClone(user));
    const [scheduleData, setScheduleData] = useState(() => structuredClone(user.availability));
    const isDataUnchanged = deepEqual(user, { ...formData, availability: scheduleData });

    function handleFormDataChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            };
        });
    }

    function resetInputs() {
        setFormData(user);
    }

    async function handleSave() {
        try {
            await Api.User.updateUser({ ...formData, availability: scheduleData });
            setAlert("success", `Your information has been updated successfully!`);
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
        <Stack justifyContent="space-evenly" spacing={2}>
            <Typography variant="h6">Contact Information</Typography>
            <TextField label="Name" variant="outlined" name="name" value={formData.name} onChange={handleFormDataChange} sx={{ flex: "1 1 0" }} required />
            <TextField label="Phone" variant="outlined" type="tel" name="phone" value={formData.phone} onChange={handleFormDataChange} sx={{ flex: "1 1 0" }} required />
            <TextField label="Email" variant="outlined" type="email" name="email" value={email} sx={{ flex: "1 1 0" }} disabled />
            <Typography variant="h6">Schedule</Typography>
            <Schedule schedule={scheduleData} setScheduleData={setScheduleData} />
            <Stack direction="row" alignItems="center" spacing={1}>
                <Button disabled={isDataUnchanged} onClick={resetInputs}>
                    Cancel
                </Button>
                <Button type="submit" disabled={isDataUnchanged} variant="contained" onClick={handleSave}>
                    Save
                </Button>
            </Stack>
        </Stack>
    );
}
