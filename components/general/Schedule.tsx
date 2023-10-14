"use client";

import Availability from "@/interfaces/Availability";
import { List } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import ScheduleDayRow from "./ScheduleDayRow";
import TableDisplay from "./TableDisplay";

interface ScheduleProps {
    schedule: Availability[];
    setScheduleData: Dispatch<SetStateAction<Availability[]>>;
}

export default function Schedule({ schedule, setScheduleData }: ScheduleProps) {
    return (
        <TableDisplay>
            <List>
                {schedule.map((day) => (
                    <ScheduleDayRow key={day.day} day={day} setScheduleData={setScheduleData} />
                ))}
            </List>
        </TableDisplay>
    );
}
