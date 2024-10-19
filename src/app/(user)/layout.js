import {
  Bell,
  BellRinging,
  BookBookmark,
  Calendar,
  CalendarBlank,
  CaretDown,
  ChalkboardTeacher,
  Files,
  Fingerprint,
  Gear,
  GraduationCap,
  ListChecks,
  ListDashes,
  Notepad,
  NotePencil,
  PlusMinus,
  Student,
  Timer,
  Users,
} from "@phosphor-icons/react/dist/ssr";
import {
  Hr,
  Navbar,
  NavBrand,
  NavHamburger,
  NavLi,
  NavUl,
  NavRow,
  LogoItn
} from "@/components";
export default function Layout({ children }) {
  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: <Calendar /> },
    { href: "/konfigurasi", label: "Konfigurasi", icon: <Gear /> },
    { href: "/data-utama", label: "Data utama", icon: <Files /> },
    { href: "/management-user", label: "Management user", icon: <Users /> },
    { href: "/krs", label: "KRS", icon: <PlusMinus /> },
    { href: "/penjadwalan-kelas", label: "Penjadwalan kelas", icon: <Timer /> },
    {
      href: "/management-nilai",
      label: "Management nilai",
      icon: <NotePencil />,
    },
    { href: "/penjadwalan-ujian", label: "Penjadwalan ujian", icon: <Timer /> },
  ];

  const additionalNavItems = [
    { href: "/presensi", label: "Presensi", icon: <Fingerprint /> },
    { href: "/pkn-skripsi", label: "PKN & Skripsi", icon: <BookBookmark /> },
    {
      href: "/yudisium-wisuda",
      label: "Yudusium & Wisuda",
      icon: <GraduationCap />,
    },
    { href: "/status-mahasiswa", label: "Status Mahasiswa", icon: <Student /> },
    { href: "/report", label: "Report", icon: <Files /> },
    {
      href: "/kalender-akademik",
      label: "Kalender Akademik",
      icon: <CalendarBlank />,
    },
    { href: "/pengumuman", label: "Pengumuman", icon: <Bell /> },
    { href: "/kuisioner", label: "Kuisioner", icon: <ListChecks /> },
    { href: "/dosen-wali", label: "Dosen Wali", icon: <ChalkboardTeacher /> },
    { href: "/tagihan", label: "Tagihan", icon: <Notepad /> },
    {
      href: "/daftar-pengajuan",
      label: "Daftar Pengajuan",
      icon: <ListDashes />,
    },
  ];
  return (
    <>
      <Navbar>
        <NavRow>
          <div className="inline-flex items-center md:gap-6 justify-start">
            <NavBrand>
              <LogoItn type='white' />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </NavBrand>
            <Hr
              direction="vertical"
              classHr="h-6 bg-white opacity-[32%] hidden md:block"
              classDiv="hidden md:block"
            />
            <NavHamburger />
            <NavUl>
              {navItems.map(({ href, label, icon }) => (
                <NavLi key={href} href={href} icon={icon}>
                  {label}
                </NavLi>
              ))}
              <div className="flex flex-col lg:hidden gap-3">
                {additionalNavItems.map(({ href, label, icon }) => (
                  <NavLi key={href} href={href} icon={icon}>
                    {label}
                  </NavLi>
                ))}
              </div>
            </NavUl>
          </div>
          <div
            className="flex items-center md:w-auto space-x-6 order-2"
            id="navbar-default"
          >
            <BellRinging color="#FFFFFF" size={20} weight="regular" />
            <Hr
              direction="vertical"
              classHr="h-6 bg-white opacity-[32%]"
              classDiv="hidden md:block"
            />
            <div className="gap-3 flex flex-row items-center">
              <div className="w-8 h-8 bg-white rounded-full" />
              <p className="text-gray-10 font-normal text-sm hidden md:block">
                Faisol Klakah
              </p>
              <div className="block">
                <CaretDown size={16} weight="regular" color="#FFFFFF" />
              </div>
            </div>
          </div>
        </NavRow>

        <NavRow className="hidden lg:flex h-14">
          <NavUl>
            <NavLi href="/presensi" icon={<Fingerprint />}>
              Presensi
            </NavLi>
            <NavLi href="/pkn-skripsi" icon={<BookBookmark />}>
              PKN & Skripsi
            </NavLi>
            <NavLi href="/yudisium-wisuda" icon={<GraduationCap />}>
              Yudusium & Wisuda
            </NavLi>
            <NavLi href="/status-mahasiswa" icon={<Student />}>
              Status Mahasiswa
            </NavLi>
            <NavLi href="/report" icon={<Files />}>
              Report
            </NavLi>
            <NavLi href="/kalender-akademik" icon={<CalendarBlank />}>
              Kalender Akademik
            </NavLi>
            <NavLi href="/pengumuman" icon={<Bell />}>
              Pengumuman
            </NavLi>
            <NavLi href="/kuisioner" icon={<ListChecks />}>
              Kuisioner
            </NavLi>
            <NavLi href="/dosen-wali" icon={<ChalkboardTeacher />}>
              Dosen Wali
            </NavLi>
            <NavLi href="/tagihan" icon={<Notepad />}>
              Tagihan
            </NavLi>
            <NavLi href="/daftar-pengajuan" icon={<ListDashes />}>
              Daftar Pengajuan
            </NavLi>
          </NavUl>
        </NavRow>
      </Navbar>

      <div className="bg-radial-gradient h-[calc(100%*0.62391304)] md:h-[calc(100%*0.62391304)] w-full absolute top-16" />
      <div className="overflow-hidden min-h-screen">
        <div className="px-5 py-8 md:p-14 relative h-full w-full">
          {children}
        </div>
      </div>
      <footer className="bg-white py-2">
        <div className="text-center text-gray-50 text-sm">
          <p>Copyright © 2024 ITN Malang</p>
        </div>
      </footer>
    </>
  );
}
