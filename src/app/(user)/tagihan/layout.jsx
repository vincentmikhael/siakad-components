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
        title: Utils.getDocumentTitle('Tagihan'),
    }
}

export default function TagihanLayout({children}) {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem>Tagihan</BreadcrumbItem>
            </Breadcrumb>
            <Card className="my-8 md:my-12">
                <CardHeader>
                    <Text size="xl" color="text-gray-100" weight={600}>
                        Tagihan
                    </Text>
                    <Text size="sm" color="text-gray-60" weight={500}>
                        Akses Prodi dan Fakultas untuk cek tagihan mahasiswa.
                    </Text>
                </CardHeader>

                <div className="grow gap-6 flex flex-col pt-6">
                    {children}
                </div>
            </Card>
        </>
    );
}
