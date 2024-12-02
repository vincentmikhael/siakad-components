import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Utils
} from "@/components";

export async function generateMetadata(/*{params}*/) {
    return {
        title: Utils.getDocumentTitle('Data Utama'),
    }
}

export default function DataUtamaLayout({children}) {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem>Data utama</BreadcrumbItem>
            </Breadcrumb>
            <Card className={"my-8 md:my-12"}>
                {children}
            </Card>
        </>
    );
}
