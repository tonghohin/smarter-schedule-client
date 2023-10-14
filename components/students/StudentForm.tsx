"use client";

import { Api } from "@/api/Api";
import { useSetAlert } from "@/contexts/AlertContextProvider";
import { getUserUid } from "@/contexts/AuthContextProvider";
import Student from "@/interfaces/Student";
import { Button, Stack, TextField, Typography } from "@mui/material";
import deepEqual from "deep-equal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Schedule from "../general/Schedule";

interface StudentFormProps {
    student: Student;
    update?: boolean;
}

export default function StudentForm({ student, update }: StudentFormProps) {
    const router = useRouter();
    const uid = getUserUid();
    const setAlert = useSetAlert();
    const [formData, setFormData] = useState(() => structuredClone(student));
    const [scheduleData, setScheduleData] = useState(() => structuredClone(student.availability));
    const isDataUnchanged = deepEqual(student, { ...formData, availability: scheduleData });

    function handleFormDataChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            };
        });
    }

    function resetInputs() {
        setFormData(student);
    }

    async function handleSave() {
        try {
            if (student.id) {
                await Api.Students.updateStudent({ ...formData, availability: scheduleData });
                setAlert("success", `${formData.name}'s information has been updated successfully!`);
            } else {
                const createdStudent = await Api.Students.createStudent(uid, { ...formData, availability: scheduleData });
                setAlert("success", `${formData.name} has been registered successfully!`);
                if (createdStudent?.id) {
                    router.push(`/students/${uid}/edit/${createdStudent.id}`);
                }
            }
        } catch (error) {
            console.error(error);
            if (typeof error === "string") {
                setAlert("error", error);
            } else if (error instanceof Error) {
                setAlert("error", error.message);
            }
        }
    }

    async function handleDelete() {
        try {
            await Api.Students.deleteStudent(student.id);
            setAlert("success", `${student.name} has been deleted successfully!`);
            router.push(`/students/${uid}`);
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
            <TextField label="Email" variant="outlined" type="email" name="email" value={formData.email} onChange={handleFormDataChange} sx={{ flex: "1 1 0" }} required />
            <Typography variant="h6">Schedule</Typography>
            <Schedule schedule={scheduleData} setScheduleData={setScheduleData} />
            <Stack direction="row" alignItems="center" spacing={1}>
                <Button disabled={isDataUnchanged} onClick={resetInputs}>
                    Cancel
                </Button>
                <Button type="submit" disabled={isDataUnchanged} variant="contained" onClick={handleSave}>
                    Save
                </Button>
                {update && (
                    <Button variant="outlined" color="error" onClick={handleDelete}>
                        Delete
                    </Button>
                )}
            </Stack>
        </Stack>
    );
}
