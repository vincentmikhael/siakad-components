import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardHeader,
    Text, Utils
} from "@/components";

export async function generateMetadata(/*{params}*/) {
    return {
        title: Utils.getDocumentTitle('Management user'),
    }
}

export default function ManagementUserLayout({children}) {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem>Management user</BreadcrumbItem>
            </Breadcrumb>
            <Card className={"my-8 md:my-12"}>
                <CardHeader className="border-0">
                    <Text size="xl" color="text-gray-100" weight={600}>
                        Manajemen User
                    </Text>
                    <Text size="sm" color="text-gray-60" weight={500}>
                        Pengaturan user, role dan konfigurasi hak akses user
                    </Text>
                </CardHeader>

                <div className="flex-grow xl:overflow-hidden">{children}</div>
            </Card>
        </>
    );
}
