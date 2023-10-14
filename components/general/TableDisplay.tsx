import { Stack } from "@mui/material";

interface TableDisplayProps {
    children: React.ReactNode;
}

export default function TableDisplay({ children }: TableDisplayProps) {
    return (
        <Stack paddingX={1} border={1} borderRadius={2} borderColor="lightgray">
            {children}
        </Stack>
    );
}
