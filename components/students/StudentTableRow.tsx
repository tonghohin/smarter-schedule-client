"use client";

import Student from "@/interfaces/Student";
import { TableCell, TableRow, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

interface StudentTableRow {
    uid: string;
    student: Student;
}

export default function StudentTableRow({ uid, student }: StudentTableRow) {
    const router = useRouter();

    return (
        <TableRow key={student.id} hover sx={{ cursor: "pointer", textDecoration: "none" }} onClick={() => router.push(`/students/${uid}/edit/${student.id}`)}>
            <TableCell>
                <Typography>{student.name}</Typography>
            </TableCell>
            <TableCell>
                <Typography>{student.phone}</Typography>
            </TableCell>
            <TableCell>
                <Typography>{student.email}</Typography>
            </TableCell>
        </TableRow>
    );
}
