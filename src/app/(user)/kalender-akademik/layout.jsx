import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardHeader,
    Text, Utils
} from "@/components";
import React from "react";
import FormKalenderAkademik from "@views/kalender-akademik/FormKalenderAkademik";

export async function generateMetadata(/*{params}*/) {
    return {
        title: Utils.getDocumentTitle('Kalender Akademik'),
    }
}

export default function KalenderAkademikLayout({children}) {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem>Kalender akademik</BreadcrumbItem>
            </Breadcrumb>
            <Card className="my-8 md:my-12 relative">
                <CardHeader className="sm:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col gap-1.5">
                        <Text size="xl" color="text-gray-100" weight={600}>
                            Kalender Akademik
                        </Text>
                        <Text size="sm" color="text-gray-60" weight={500}>
                            Panduan yang memuat jadwal kegiatan akademik selama satu tahun ajaran.
                        </Text>
                    </div>
                    <FormKalenderAkademik/>
                </CardHeader>

                <div className="grow xl:overflow-hidden pt-6">
                    {children}
                </div>
            </Card>
        </>
    );
}
