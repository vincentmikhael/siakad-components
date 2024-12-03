import {Breadcrumb, BreadcrumbItem, Card, CardHeader, Text} from "@/components";

export default function PenjadwalanUjianLayout({children}) {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem>Penjadwalan ujian</BreadcrumbItem>
            </Breadcrumb>
            <Card className={"my-8 md:my-12"}>
                <CardHeader>
                    <Text size="xl" color="text-gray-100" weight={600}>
                        Penjadwalan ujian
                    </Text>
                    <Text size="sm" color="text-gray-60" weight={500}>
                        Lorem ipsum
                    </Text>
                </CardHeader>
                <div className="mt-6">
                    {children}
                </div>
            </Card>
        </>
    )
}