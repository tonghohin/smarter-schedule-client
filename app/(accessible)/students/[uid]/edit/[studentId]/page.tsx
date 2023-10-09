import { Api } from "@/api/Api";
import StudentForm from "@/components/students/StudentForm";
import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default async function Register({ params }: { params: { uid: string; studentId: string } }) {
    const student = await Api.Students.readOneStudent(params.uid, params.studentId);

    return student ? (
        <Stack spacing={2}>
            <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
                <Typography variant="h6" component={Link} href={`/students/${params.uid}`} color="initial" sx={{ textDecoration: "none" }}>
                    Students
                </Typography>
                <Typography variant="h6">{student.name}</Typography>
            </Breadcrumbs>
            <StudentForm student={student} />
        </Stack>
    ) : (
        <Stack spacing={2}>
            <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
                <Typography variant="h6" component={Link} href={`/students/${params.uid}`} color="initial" sx={{ textDecoration: "none" }}>
                    Students
                </Typography>
                <Typography variant="h6">Not Found</Typography>
            </Breadcrumbs>
            <Typography>Sorry, the student you tried to view doesn't exist...</Typography>
            <Button variant="outlined" component={Link} href={`/students/${params.uid}`}>
                Go Back
            </Button>
        </Stack>
    );
}
