import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardHeader, TabItem, Tabs,
    Text, Utils
} from "@/components";
import React from "react";

export async function generateMetadata(/*{params}*/) {
    return {
        title: Utils.getDocumentTitle('Manajemen user'),
    }
}

export default function ManajemenUserLayout({children}) {
    const baseUrl = "/manajemen-user"
    const tabItem = [{
        href: `${baseUrl}/user`,
        title: "User"
    }, {
        href: `${baseUrl}/role`,
        title: "Role"
    }, {
        href: `${baseUrl}/konfigurasi-hak-akses`,
        title: "Konfigurasi hak akses user"
    }]
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem>Manajemen user</BreadcrumbItem>
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

                <div className="flex-col flex-grow xl:overflow-hidden relative">
                    <Tabs>
                        {tabItem.map((item, index) => (
                            <TabItem href={item.href} key={index} title={item.title}/>
                        ))}
                    </Tabs>
                    {children}
                </div>
            </Card>
        </>
    );
}
