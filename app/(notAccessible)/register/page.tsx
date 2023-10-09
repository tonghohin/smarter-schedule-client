import SignUpForm from "@/components/register/SignUpForm";
import { Divider, Stack, Typography } from "@mui/material";

export default function Login() {
    return (
        <Stack spacing={2} width={300}>
            <Typography variant="h6" textAlign="center">
                Welcome to Scheduler!
            </Typography>
            <Divider />
            <SignUpForm />
        </Stack>
    );
}
