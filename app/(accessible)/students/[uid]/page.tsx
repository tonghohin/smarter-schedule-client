import StudentTable from "@/components/students/StudentTable";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import { Chip, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default async function Students({ params }: { params: { uid: string } }) {
    return (
        <Stack spacing={2}>
            <Typography variant="h6">Students</Typography>
            <Stack spacing={2}>
                <StudentTable uid={params.uid} />
                <Chip component={Link} href={`/students/${params.uid}/register`} icon={<PersonAddAltRoundedIcon />} label="Register New Students" color="primary" />
            </Stack>
        </Stack>
    );
}
