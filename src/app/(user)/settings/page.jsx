import {Breadcrumb, BreadcrumbItem, Card, Hr, Text, Utils} from "@/components";
import {cookies} from "next/headers";
import {getSession} from "@libs/redisHelper";
import SettingsForm from "@views/settings";

export const metadata = {
    title: Utils.getDocumentTitle('Settings Profile'),
    description: "Generated by create next app",
};

export default async function Settings() {
    const cookieStore = cookies();
    const s_id = cookieStore.get("s_id")?.value;
    let parsedData;
    const userData = await getSession(s_id);
    if (!userData)
        return Utils.redirectLogin();
    parsedData = JSON.parse(userData);
    return (
        <div>
            <Breadcrumb className="mb-8">
                <BreadcrumbItem home href="/dashboard">
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem>Settings profile</BreadcrumbItem>
            </Breadcrumb>
            <Card>
                <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                    Settings profile
                </Text>
                <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                    Setting akun anda di sini
                </Text>
                <Hr className="mb-8"/>
                <SettingsForm userData={parsedData?.data ?? {}}/>
            </Card>
        </div>
    )
}