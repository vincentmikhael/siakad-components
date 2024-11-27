import {
    Tabs, TabItem, Utils,
} from "@/components";
import User from "@views/management-user/User";
import Role from "@views/management-user/Role";
import KonfigurasiUser from "@views/management-user/KonfigurasiUser";

export async function generateMetadata(/*{params}*/) {
    return {
        title: Utils.getDocumentTitle('Management User'),
    }
}

export default function ManajemenUser() {
    return (
        <div>
            <Tabs>
                <TabItem title="User">
                    <User/></TabItem>
                <TabItem title="Role"><Role/></TabItem>
                <TabItem title="Konfigurasi hak akses user"><KonfigurasiUser/></TabItem>
            </Tabs>
        </div>
    );
}
