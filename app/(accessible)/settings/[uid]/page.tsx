import { Api } from "@/api/Api";
import EnhancedTabs from "@/components/general/EnhancedTabs";
import Account from "@/components/settings/Account";
import UserSchedule from "@/components/settings/UserSchedule";
import { Stack, Typography } from "@mui/material";

export default async function Settings({ params }: { params: { uid: string } }) {
    const scheduleData = await Api.User.readSchedule(params.uid);
    const user = await Api.User.read(params.uid);

    return (
        <Stack>
            <Typography variant="h6">Settings</Typography>
            <EnhancedTabs
                tabs={[
                    { label: "Account", component: <Account userPhone={user.phone} /> },
                    { label: "Schedule", component: <UserSchedule schedule={scheduleData} /> }
                ]}
            />
        </Stack>
    );
}
