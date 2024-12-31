import {
    Breadcrumb,
    BreadcrumbItem,
    Card, CardHeader, MenuLi, MenuUl, Text,
    Utils
} from "@/components";

export async function generateMetadata(/*{params}*/) {
    return {
        title: Utils.getDocumentTitle('Status Mahasiswa'),
    }
}

export default function StatusMahasiswaLayout({children}) {
    const baseUrl = "/status-mahasiswa";
    const menu = [
        {label: "Staus Cuti", href: `${baseUrl}/cuti`},
        {label: "Mahasiswa Out", href: `${baseUrl}/out`},
        {label: "Report", href: `${baseUrl}/report`},
    ];
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem>Status mahasiswa</BreadcrumbItem>
            </Breadcrumb>
            <Card className={"my-8 md:my-12"}>
                <CardHeader>
                    <Text size="xl" color="text-gray-100" weight={600}>
                        Manajemen status mahasiswa
                    </Text>
                    <Text size="sm" color="text-gray-60" weight={500}>
                        Lorem ipsum
                    </Text>
                </CardHeader>
                <div className="flex flex-col xl:flex-row xl:gap-20 mt-6">
                    <MenuUl>
                        {menu.map((item, index) => (
                            <MenuLi key={index} href={item.href}>
                                {item.label}
                            </MenuLi>
                        ))}
                    </MenuUl>
                    <div className="grow xl:overflow-hidden gap-6 flex flex-col">{children}</div>
                </div>
            </Card>
        </>
    );
}
