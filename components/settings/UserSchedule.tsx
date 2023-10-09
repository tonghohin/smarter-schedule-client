"use client";

import { Api } from "@/api/Api";
import { useSetAlert } from "@/contexts/AlertContextProvider";
import Availability from "@/interfaces/Availability";
import { Button, Stack } from "@mui/material";
import deepEqual from "deep-equal";
import { useState } from "react";
import Schedule from "../general/Schedule";
import { getUserUid } from "@/contexts/AuthContextProvider";

interface UserScheduleProps {
    schedule: Availability[];
}

export default function UserSchedule({ schedule }: UserScheduleProps) {
    const uid = getUserUid();
    const setAlert = useSetAlert();
    const [scheduleData, setScheduleData] = useState(() => structuredClone(schedule));

    function resetInputs() {
        setScheduleData(schedule);
    }

    async function handleSave() {
        try {
            await Api.User.updateSchedule(uid, scheduleData);
            setAlert("success", "Your availability has been updated successfully!");
        } catch (error) {
            console.error(error);
            if (error instanceof Error) {
                setAlert("error", error.message);
            }
        }
    }
    return (
        <Stack spacing={2}>
            <Schedule schedule={scheduleData} setScheduleData={setScheduleData} />
            <Stack direction="row" alignItems="center" spacing={1} width={140}>
                <Button disabled={deepEqual(schedule, scheduleData)} onClick={resetInputs}>
                    Cancel
                </Button>
                <Button type="submit" disabled={deepEqual(schedule, scheduleData)} variant="contained" onClick={handleSave}>
                    Save
                </Button>
            </Stack>
        </Stack>
    );
}
