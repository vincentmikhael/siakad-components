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
        title: Utils.getDocumentTitle('Management nilai'),
    }
}

export default function ManajemenNilaiLayout({children}) {
    const baseUrl = '/manajemen-nilai';
    const menu = [
        {label: "Entri nilai dari prodi", href: `${baseUrl}/entri-nilai-prodi`},
        {label: "Report histori perubahan nilai", href: `${baseUrl}/report-histori`},
        {label: "Konversi nilai mahasiswa pindahan", href: `${baseUrl}/konversi-mhs-pindahan`},
    ];
    return (
        <>
            <Breadcrumb className="mb-8 md:mb-12">
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem>Management nilai</BreadcrumbItem>
            </Breadcrumb>
            <Card>
                <CardHeader>
                    <Text size="xl" color="text-gray-100" weight={600}>
                        Management nilai
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
