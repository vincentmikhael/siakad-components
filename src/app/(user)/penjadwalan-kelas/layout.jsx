import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardHeader,
    Text,
    MenuUl,
    MenuLi, Utils
} from "@/components";

export async function generateMetadata(/*{params}*/){
    return {
        title: Utils.getDocumentTitle('Penjadwalan kelas'),
    }
}
export default function DataUtamaLayout({children}) {
    const baseUrl = 'penjadwalan-kelas';
    const menu = [
        {label: "Entri pengajar kelas", href: `${baseUrl}/entri-pengajar`},
        {label: "Entri jadwal kuliah", href: `${baseUrl}/entri-jadwal`},
        {label: "Pindah Kelas", href: `${baseUrl}/pindah-kelas`},
        {label: "Cek bentrok", href: `${baseUrl}/cek-bentrok`},
        {label: "Report", href: `${baseUrl}/report`},
        {label: "Upload SK mengajar", href: `${baseUrl}/upload-sk-mengajar`},
    ];
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem>Penjadwalan kelas</BreadcrumbItem>
            </Breadcrumb>
            <Card className={"my-8 md:my-12"}>
                <CardHeader>
                    <Text size="xl" color="text-gray-100" weight={600}>
                        Penjadwalan kelas
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
                    <div className="flex-grow xl:overflow-hidden">{children}</div>
                </div>
            </Card>
        </>
    );
}
