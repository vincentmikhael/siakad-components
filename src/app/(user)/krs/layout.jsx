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
        title: Utils.getDocumentTitle('KRS'),
    }
}

export default function KrsLayout({children}) {
    const baseUrl = "/krs"
    const tabItem = [{
        href: `${baseUrl}/entri-krs-mhs-baru`,
        title: "Entri KRS mahasiswa baru"
    }, {
        href: `${baseUrl}/entri-krs`,
        title: "Entri KRS"
    }, {
        href: `${baseUrl}/batal-tambah`,
        title: "Batal tambah"
    },{
        href: `${baseUrl}/report-krs`,
        title: "Report"
    }]
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem>KRS</BreadcrumbItem>
            </Breadcrumb>
            <Card className={"my-8 md:my-12"}>
                <CardHeader className="border-0">
                    <Text size="xl" color="text-gray-100" weight={600}>
                        KRS
                    </Text>
                    <Text size="sm" color="text-gray-60" weight={500}>
                        Proses batal tambah
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
