import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardHeader, TabItem, Tabs,
    Text, Utils
} from "@/components";
import React from "react";

// export async function generateMetadata(/*{params}*/) {
//     return {
//         title: Utils.getDocumentTitle('Presensi'),
//     }
// }

export default function ReportLayout({children}) {
    const baseUrl = "/yudisium-wisuda/report"
    const tabItem = [{
        href: `${baseUrl}/pra-yudisium`,
        title: "Mahasiswa pra yudisium"
    }, {
        href: `${baseUrl}/yudisium`,
        title: "Mahasiswa yudisium"
    }, {
        href: `${baseUrl}/peserta-wisuda`,
        title: "Daftar peserta wisuda"
    }]
    return (
        <>
            {/* <Breadcrumb>
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem>Presensi</BreadcrumbItem>
            </Breadcrumb> */}
            {/* <Card className={"my-8 md:my-12"}>
                <CardHeader className="border-0">
                    <Text size="xl" color="text-gray-100" weight={600}>
                        Presensi
                    </Text>
                    <Text size="sm" color="text-gray-60" weight={500}>
                        Presensi
                    </Text>
                </CardHeader>

                
            </Card> */}
            <div className="flex-col flex-grow xl:overflow-hidden relative">
                    <Tabs className={"mb-5"}>
                        {tabItem.map((item, index) => (
                            <TabItem href={item.href} key={index} title={item.title}/>
                        ))}
                    </Tabs>
                    {children}
                </div>
        </>
    );
}
