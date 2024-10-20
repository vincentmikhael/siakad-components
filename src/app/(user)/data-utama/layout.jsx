import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  Text,
  MenuUl,
  MenuLi
} from "@/components";
export default function DataUtamaLayout({ children }) {
  const menu = [
    { label: "Fakultas", href: "/data-utama/fakultas" },
    { label: "Prodi", href: "/data-utama/prodi" },
    { label: "Konsentrasi", href: "/data-utama/konsentrasi" },
    { label: "Dosen", href: "/data-utama/dosen" },
    { label: "Mahasiswa", href: "/data-utama/mahasiswa" },
    { label: "Mahasiswa Pindahan", href: "/data-utama/mahasiswa-pindahan" },
    { label: "Nilai Mahasiswa Pindahan", href: "/data-utama/nilai-mahasiswa-pindahan" },
    {
      label: "Data dan proses krs mahasiswa PMB",
      href: "/data-utama/data-proses-krs-mahasiswa-pmb",
    },
    { label: "Konfigurasi dosen wali", href: "/data-utama/konfigurasi-dosen-wali" },
    { label: "Data Ruang", href: "/data-utama/data-ruang" },
    { label: "Mata kuliah", href: "/data-utama/mata-kuliah" },
    { label: "Kurikulum", href: "/data-utama/kurikulum" },
    { label: "Prasyarat mata kuliah", href: "/data-utama/prasyarat mata kuliah" },
  ];
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem home href="/dashboard">
          Dashboard
        </BreadcrumbItem>
        <BreadcrumbItem>Data utama</BreadcrumbItem>
      </Breadcrumb>
      <Card className={"my-8 md:my-12"}>
        <CardHeader>
          <Text size="xl" color="text-gray-100" weight={600}>
            Data utama
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
          <div className="flex-grow">{children}</div>
        </div>
      </Card>
    </>
  );
}
