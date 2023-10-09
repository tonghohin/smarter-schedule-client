import StudentForm from "@/components/students/StudentForm";
import { InitialStates } from "@/utilities/InitialStates";
import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Register({ params }: { params: { uid: string } }) {
    const student = InitialStates.STUDENT;

    return (
        <Stack spacing={2}>
            <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
                <Typography variant="h6" component={Link} href={`/students/${params.uid}`} color="initial" sx={{ textDecoration: "none" }}>
                    Students
                </Typography>
                <Typography variant="h6">Register</Typography>
            </Breadcrumbs>
            <StudentForm student={student} />
        </Stack>
    );
}
