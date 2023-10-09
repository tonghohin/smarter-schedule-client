"use client";

import Availability from "@/interfaces/Availability";
import { List, Stack } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import ScheduleDayRow from "./ScheduleDayRow";

interface ScheduleProps {
    schedule: Availability[];
    setScheduleData: Dispatch<SetStateAction<Availability[]>>;
}

export default function Schedule({ schedule, setScheduleData }: ScheduleProps) {
    return (
        <Stack spacing={2}>
            <Stack paddingX={1} border={1} borderRadius={2} borderColor="lightgray">
                <List>
                    {schedule.map((day) => (
                        <ScheduleDayRow key={day.day} day={day} setScheduleData={setScheduleData} />
                    ))}
                </List>
            </Stack>
        </Stack>
    );
}
