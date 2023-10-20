import Calendar from "@/components/general/Calendar";
import TableDisplay from "@/components/general/TableDisplay";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Stack, Typography } from "@mui/material";

export default function Schedule() {
    return (
        <Stack spacing={2}>
            <Typography variant="h6">Schedule</Typography>
            <Stack direction="row" spacing={2}>
                <Stack>
                    <Fab variant="extended" color="primary" size="medium">
                        <AddIcon />
                        Create
                    </Fab>
                    <Calendar />
                </Stack>
                <TableDisplay>asdf</TableDisplay>
            </Stack>
        </Stack>
    );
}
