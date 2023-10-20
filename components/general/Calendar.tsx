"use client";

import { DateCalendar } from "@mui/x-date-pickers";
import { useState } from "react";

export default function Calendar() {
    const [selectedDate, setSelectedDate] = useState(null);

    return <DateCalendar value={selectedDate} onChange={(newDate) => setSelectedDate(newDate)} />;
}
