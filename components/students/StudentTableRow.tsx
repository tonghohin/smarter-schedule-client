"use client";

import { Api } from "@/api/Api";
import { useSetAlert } from "@/contexts/AlertContextProvider";
import Student from "@/interfaces/Student";
import { Button, TableCell, TableRow, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

interface StudentTableRow {
    uid: string;
    student: Student;
}

export default function StudentTableRow({ uid, student }: StudentTableRow) {
    const router = useRouter();
    const setAlert = useSetAlert();
    async function handleDelete() {
        try {
            await Api.Students.deleteStudent(student.id);
            setAlert("success", `${student.name} has been deleted successfully!`);
        } catch (error) {
            console.error(error);
            if (error instanceof Error) {
                setAlert("error", error.message);
            }
        }
    }
    return (
        <TableRow key={student.id} hover sx={{ cursor: "pointer", textDecoration: "none" }}>
            <TableCell onClick={() => router.push(`/students/${uid}/edit/${student.id}`)}>
                <Typography>{student.name}</Typography>
            </TableCell>
            <TableCell onClick={() => router.push(`/students/${uid}/edit/${student.id}`)}>
                <Typography>{student.phone}</Typography>
            </TableCell>
            <TableCell onClick={() => router.push(`/students/${uid}/edit/${student.id}`)}>
                <Typography>{student.email}</Typography>
            </TableCell>
            <TableCell align="center">
                <Button variant="outlined" color="error" onClick={handleDelete}>
                    Delete
                </Button>
            </TableCell>
        </TableRow>
    );
}
