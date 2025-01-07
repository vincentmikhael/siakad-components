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
        title: Utils.getDocumentTitle('Report'),
    }
}

export default function ReportLayout({children}) {
    const baseUrl = '/report';
    const menu = [
        { label: "Data utama", href: `${baseUrl}/data-utama` },
        { label: "Management user", href: `${baseUrl}/management-user` },
        { label: "KRS", href: `${baseUrl}/krs` },
        { label: "Penjadwalan kelas", href: `${baseUrl}/penjadwalan-kelas` },
        { label: "Management nilai", href: `${baseUrl}/management-nilai` },
        { label: "Penjadwalan ujian", href: `${baseUrl}/penjadwalan-ujian` },
        { label: "Presensi", href: `${baseUrl}/presensi` },
        { label: "PKN & Skripsi", href: `${baseUrl}/pkn-skripsi` },
        { label: "Status mahasiswa", href: `${baseUrl}/status-mahasiswa` },
        { label: "Kalender akademik", href: `${baseUrl}/kalender-akademik` },
        { label: "Pengumuman", href: `${baseUrl}/pengumuman` },
        { label: "Kuesioner", href: `${baseUrl}/kuesioner` },
        { label: "Dosen wali", href: `${baseUrl}/dosen-wali` },
        { label: "Tagihan", href: `${baseUrl}/tagihan` },
        { label: "Daftar pengajuan", href: `${baseUrl}/daftar-pengajuan` }
    ]
    return (
        <>
            <Breadcrumb className="mb-8 md:mb-12">
                <BreadcrumbItem home href="/dashboard">
                    Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem>Report</BreadcrumbItem>
            </Breadcrumb>
            <Card>
                <CardHeader>
                    <Text size="xl" color="text-gray-100" weight={600}>
                        Report
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
