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
        title: Utils.getDocumentTitle('Manajemen PKN & Skripsi'),
    }
}

export default function KrsLayout({children}) {
    const baseUrl = "/pkn-skripsi"
    const tabItem = [{
        href: `${baseUrl}/entri-skripsi`,
        title: "Entri skripsi"
    }, {
        href: `${baseUrl}/entri-pkn`,
        title: "Entri PKN"
    }, {
        href: `${baseUrl}/entri-nilai`,
        title: "Entri nilai"
    },{
        href: `${baseUrl}/sk-bimbingan`,
        title: "Upload SK bimbingan"
    },{
        href: `${baseUrl}/sinkron-data`,
        title: "Sinkronasi data"
    }]
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem>PKN & Skripsi</BreadcrumbItem>
            </Breadcrumb>
            <Card className={"my-8 md:my-12"}>
                <CardHeader className="border-0">
                    <Text size="xl" color="text-gray-100" weight={600}>
                        Manajemen PKN & Skripsi
                    </Text>
                    <Text size="sm" color="text-gray-60" weight={500}>
                        lorem ipsum
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
