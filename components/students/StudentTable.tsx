import { Api } from "@/api/Api";
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import StudentTableRow from "./StudentTableRow";

interface StudentTableProps {
    uid: string;
}

export default async function StudentTable({ uid }: StudentTableProps) {
    const students = await Api.Students.readStudents(uid);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Typography color="grey">Name</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography color="grey">Phone</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography color="grey">Email</Typography>
                    </TableCell>
                    <TableCell />
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((student) => (
                    <StudentTableRow key={student.id} uid={uid} student={student} />
                ))}
            </TableBody>
        </Table>
    );
}
