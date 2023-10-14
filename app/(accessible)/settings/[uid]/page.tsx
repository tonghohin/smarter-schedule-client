import { Api } from "@/api/Api";
import EnhancedTabs from "@/components/general/EnhancedTabs";
import Account from "@/components/settings/Account";
import UserForm from "@/components/settings/UserForm";
import { Stack, Typography } from "@mui/material";

export default async function Settings({ params }: { params: { uid: string } }) {
    const user = await Api.User.readUser(params.uid);

    return (
        <Stack>
            <Typography variant="h6">Settings</Typography>
            <EnhancedTabs
                tabs={[
                    { label: "Basic Information", component: <Account userPhone={user.phone} /> },
                    { label: "Account", component: <UserForm user={user} /> }
                ]}
            />
        </Stack>
    );
}
