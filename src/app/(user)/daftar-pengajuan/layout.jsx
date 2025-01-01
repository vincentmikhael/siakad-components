import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardHeader,
    Text, Utils
} from "@/components";
import React from "react";

export async function generateMetadata(/*{params}*/) {
    return {
        title: Utils.getDocumentTitle('Daftar Pengajuan'),
    }
}

export default function DaftarPengajuanLayout({children}) {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem>Daftar pengajuan</BreadcrumbItem>
            </Breadcrumb>
            <Card className="my-8 md:my-12">
                <CardHeader>
                    <Text size="xl" color="text-gray-100" weight={600}>
                        Daftar pengajuan
                    </Text>
                    <Text size="sm" color="text-gray-60" weight={500}>
                        Daftar pengajuan perubahan data oleh Dosen dan Mahasiswa
                    </Text>
                </CardHeader>

                <div className="grow gap-6 flex flex-col pt-6">
                    {children}
                </div>
            </Card>
        </>
    );
}
