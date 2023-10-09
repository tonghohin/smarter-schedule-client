"use client";

import { Stack, Tab, Tabs } from "@mui/material";
import { useState } from "react";

interface EnhancedTabsProps {
    tabs: { label: string; component?: React.ReactNode }[];
}

export default function EnhancedTabs({ tabs }: EnhancedTabsProps) {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Stack spacing={2}>
            <Stack borderBottom={1} borderColor="divider">
                <Tabs value={value} onChange={handleChange}>
                    {tabs.map((tab, i) => (
                        <Tab key={i} label={tab.label} />
                    ))}
                </Tabs>
            </Stack>
            {tabs.map((tab, i) => (
                <TabContent key={i} index={i} value={value}>
                    {tab.component}
                </TabContent>
            ))}
        </Stack>
    );
}

interface TabContentProps {
    index: number;
    value: number;
    children?: React.ReactNode;
}

function TabContent({ index, value, children }: TabContentProps) {
    return value === index && children;
}
