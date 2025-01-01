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
        title: Utils.getDocumentTitle('Dosen Wali'),
    }
}

export default function DosenWaliLayout({children}) {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem>Dosen wali</BreadcrumbItem>
            </Breadcrumb>
            <Card className="my-8 md:my-12">
                <CardHeader>
                    <Text size="xl" color="text-gray-100" weight={600}>
                        Dosen wali
                    </Text>
                    <Text size="sm" color="text-gray-60" weight={500}>
                        Konfigurasi dosen wali.
                    </Text>
                </CardHeader>

                <div className="grow gap-6 flex flex-col pt-6">
                    {children}
                </div>
            </Card>
        </>
    );
}
