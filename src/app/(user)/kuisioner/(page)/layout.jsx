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
        title: Utils.getDocumentTitle('Kuisioner'),
    }
}

export default function KalenderAkademikLayout({children}) {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem>Kuisioner</BreadcrumbItem>
            </Breadcrumb>
            <Card className="my-8 md:my-12">
                <CardHeader>
                    <Text size="xl" color="text-gray-100" weight={600}>
                        Manajemen kuisioner
                    </Text>
                    <Text size="sm" color="text-gray-60" weight={500}>
                        Kelola kuesioner untuk dosen, mahasiswa, maupun staf administrasi.
                    </Text>
                </CardHeader>

                <div className="flex-grow pt-6 space-y-6">
                    {children}
                </div>
            </Card>
        </>
    );
}
