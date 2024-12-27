import {
    Bell,
    BookBookmark,
    Calendar, CalendarBlank, ChalkboardTeacher,
    Files,
    Fingerprint,
    Gear, GraduationCap, ListChecks, ListDashes, Notepad,
    NotePencil,
    PlusMinus, Student,
    Timer,
    Users
} from "@phosphor-icons/react/dist/ssr";

const navItems = [
    {href: "/dashboard", label: "Dashboard", icon: <Calendar/>},
    {href: "/konfigurasi", label: "Konfigurasi", icon: <Gear/>},
    {href: "/data-utama", label: "Data utama", icon: <Files/>},
    {href: "/manajemen-user", label: "Manajemen user", icon: <Users/>},
    {href: "/krs", label: "KRS", icon: <PlusMinus/>},
    {href: "/penjadwalan-kelas", label: "Penjadwalan kelas", icon: <Timer/>},
    {href: "/manajemen-nilai", label: "Manajemen nilai", icon: <NotePencil/>},
    {href: "/penjadwalan-ujian", label: "Penjadwalan ujian", icon: <Timer/>},
];

const additionalNavItems = [
    {href: "/presensi", label: "Presensi", icon: <Fingerprint/>},
    {href: "/pkn-skripsi", label: "PKN & Skripsi", icon: <BookBookmark/>},
    {href: "/yudisium-wisuda", label: "Yudusium & Wisuda", icon: <GraduationCap/>},
    {href: "/status-mahasiswa", label: "Status Mahasiswa", icon: <Student/>},
    {href: "/report", label: "Report", icon: <Files/>},
    {href: "/kalender-akademik", label: "Kalender Akademik", icon: <CalendarBlank/>},
    {href: "/pengumuman", label: "Pengumuman", icon: <Bell/>},
    {href: "/kuisioner", label: "Kuisioner", icon: <ListChecks/>},
    {href: "/dosen-wali", label: "Dosen Wali", icon: <ChalkboardTeacher/>},
    {href: "/tagihan", label: "Tagihan", icon: <Notepad/>},
    {href: "/daftar-pengajuan", label: "Daftar Pengajuan", icon: <ListDashes/>},
];

export {navItems, additionalNavItems};