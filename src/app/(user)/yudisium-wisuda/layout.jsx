import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardHeader,
    Text,
    MenuUl,
    MenuLi, Utils
} from "@/components";

export async function generateMetadata(/*{params}*/) {
    return {
        title: Utils.getDocumentTitle('Yudisium & Wisuda'),
    }
}

export default function YudisiumWisudaLayout({children}) {
    const baseUrl = '/yudisium-wisuda';
    const menu = [
        {label: "Entri pra yudisium", href: `${baseUrl}/entri-prayudisium`},
        {label: "Validasi status pra yudisium", href: `${baseUrl}/validasi-prayudisium`},
        {label: "Validasi status yudisium", href: `${baseUrl}/validasi-yudisium`},
        {label: "Entri wisuda", href: `${baseUrl}/entri-wisuda`},
        {label: "Validasi status wisuda", href: `${baseUrl}/validasi-wisuda`},
        {label: "Report", href: `${baseUrl}/report`},
    ];
    return (
        <>
            <Breadcrumb className="mb-8 md:mb-12">
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem>Yudisium & Wisuda</BreadcrumbItem>
            </Breadcrumb>
            <Card>
                <CardHeader>
                    <Text size="xl" color="text-gray-100" weight={600}>
                        Penarikan yudisium dan proses wisuda
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
