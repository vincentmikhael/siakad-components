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
        title: Utils.getDocumentTitle('Presensi'),
    }
}

export default function KrsLayout({children}) {
    const baseUrl = "/presensi"
    const tabItem = [{
        href: `${baseUrl}/perkuliahan-mahasiswa`,
        title: "Perkuliahan mahasiswa"
    }, {
        href: `${baseUrl}/ujian-mahasiswa`,
        title: "Ujian mahasiswa"
    }, {
        href: `${baseUrl}/kehadiran-dosen`,
        title: "Kehadiran dosen"
    }]
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem>Presensi</BreadcrumbItem>
            </Breadcrumb>
            <Card className={"my-8 md:my-12"}>
                <CardHeader className="border-0">
                    <Text size="xl" color="text-gray-100" weight={600}>
                        Presensi
                    </Text>
                    <Text size="sm" color="text-gray-60" weight={500}>
                        Presensi
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
