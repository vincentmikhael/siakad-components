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
        title: Utils.getDocumentTitle('Kuisioner > Tambah'),
    }
}

export default function TambahKuisionerLayout({children}) {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem href="/kuisioner">
                    Kuisioner
                </BreadcrumbItem>
                <BreadcrumbItem>Tambah</BreadcrumbItem>
            </Breadcrumb>
            {children}
        </>
    );
}
