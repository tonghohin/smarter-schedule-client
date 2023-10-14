"use client";

import Availability from "@/interfaces/Availability";
import { Mapping } from "@/mappings/mappings";
import { ListItem, Stack, Switch, Typography } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { Dispatch, SetStateAction, useMemo } from "react";

interface ScheduleDayRowProps {
    day: Availability;
    setScheduleData: Dispatch<SetStateAction<Availability[]>>;
}

export default function ScheduleDayRow({ day, setScheduleData }: ScheduleDayRowProps) {
    const dayCopy = useMemo(() => structuredClone(day), []);

    function changeAvailable(event: React.ChangeEvent<HTMLInputElement>) {
        setScheduleData((prevScheduleData) => {
            const newScheduleData = prevScheduleData.map((prevDayData) => {
                if (prevDayData.day === day.day) {
                    return prevDayData.available ? { ...prevDayData, from: null, to: null, available: event.target.checked } : { ...prevDayData, from: dayCopy.from || "07:00:00", to: dayCopy.to || "18:00:00", available: event.target.checked };
                } else {
                    return prevDayData;
                }
            });
            return newScheduleData;
        });
    }

    function changeStartTime(value: Dayjs | null) {
        if (value) {
            setScheduleData((prevScheduleData) => {
                const newScheduleData = prevScheduleData.map((prevDayData) => {
                    if (prevDayData.day === day.day) {
                        return { ...prevDayData, from: value.format("HH:mm:ss") };
                    } else {
                        return prevDayData;
                    }
                });
                return newScheduleData;
            });
        }
    }

    function changeEndTime(value: Dayjs | null) {
        if (value) {
            setScheduleData((prevScheduleData) => {
                const newScheduleData = prevScheduleData.map((prevDayData) => {
                    if (prevDayData.day === day.day) {
                        return { ...prevDayData, to: value.format("HH:mm:ss") };
                    } else {
                        return prevDayData;
                    }
                });
                return newScheduleData;
            });
        }
    }

    return (
        <ListItem divider={day.day !== 6} sx={{ overflow: "auto" }}>
            <Stack direction="row" spacing={2} alignItems="center" width="100%">
                <Stack direction="row" alignItems="center" justifyContent="space-between" width={150} minWidth={150}>
                    <Typography>{Mapping.DayOfTheWeek[day.day]}</Typography>
                    <Switch about="available" checked={day.available} onChange={changeAvailable} />
                </Stack>
                {day.available ? (
                    <Stack direction="row" alignItems="center" spacing={2} minWidth={300}>
                        <TimePicker label="Start Time" value={dayjs(day.from, "HH:mm:ss")} onChange={changeStartTime} />
                        <TimePicker label="End Time" value={dayjs(day.to, "HH:mm:ss")} onChange={changeEndTime} minTime={dayjs(day.from, "HH:mm:ss").add(5, "minute")} />
                    </Stack>
                ) : (
                    <Stack direction="row" alignItems="center" spacing={2} minWidth={300}>
                        <TimePicker disabled label="Not Available" value={day.from} />
                        <TimePicker disabled label="Not Available" value={day.to} />
                    </Stack>
                )}
            </Stack>
        </ListItem>
    );
}
