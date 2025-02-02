import { Bell, BookBookmark, Calendar, CalendarBlank, ChalkboardTeacher, Files, Fingerprint, Gear, GraduationCap, ListChecks, ListDashes, Notepad, NotePencil, PlusMinus, Student, Timer, Users } from "@phosphor-icons/react/dist/ssr";
import React from "react";
var navItems = [{
  href: "/dashboard",
  label: "Dashboard",
  icon: /*#__PURE__*/React.createElement(Calendar, null)
}, {
  href: "/konfigurasi",
  label: "Konfigurasi",
  icon: /*#__PURE__*/React.createElement(Gear, null)
}, {
  href: "/data-utama",
  label: "Data utama",
  icon: /*#__PURE__*/React.createElement(Files, null)
}, {
  href: "/manajemen-user",
  label: "Manajemen user",
  icon: /*#__PURE__*/React.createElement(Users, null)
}, {
  href: "/krs",
  label: "KRS",
  icon: /*#__PURE__*/React.createElement(PlusMinus, null)
}, {
  href: "/penjadwalan-kelas",
  label: "Penjadwalan kelas",
  icon: /*#__PURE__*/React.createElement(Timer, null)
}, {
  href: "/manajemen-nilai",
  label: "Manajemen nilai",
  icon: /*#__PURE__*/React.createElement(NotePencil, null)
}, {
  href: "/penjadwalan-ujian",
  label: "Penjadwalan ujian",
  icon: /*#__PURE__*/React.createElement(Timer, null)
}];
var additionalNavItems = [{
  href: "/presensi",
  label: "Presensi",
  icon: /*#__PURE__*/React.createElement(Fingerprint, null)
}, {
  href: "/pkn-skripsi",
  label: "PKN & Skripsi",
  icon: /*#__PURE__*/React.createElement(BookBookmark, null)
}, {
  href: "/yudisium-wisuda",
  label: "Yudusium & Wisuda",
  icon: /*#__PURE__*/React.createElement(GraduationCap, null)
}, {
  href: "/status-mahasiswa",
  label: "Status Mahasiswa",
  icon: /*#__PURE__*/React.createElement(Student, null)
}, {
  href: "/report",
  label: "Report",
  icon: /*#__PURE__*/React.createElement(Files, null)
}, {
  href: "/kalender-akademik",
  label: "Kalender Akademik",
  icon: /*#__PURE__*/React.createElement(CalendarBlank, null)
}, {
  href: "/pengumuman",
  label: "Pengumuman",
  icon: /*#__PURE__*/React.createElement(Bell, null)
}, {
  href: "/kuisioner",
  label: "Kuisioner",
  icon: /*#__PURE__*/React.createElement(ListChecks, null)
}, {
  href: "/dosen-wali",
  label: "Dosen Wali",
  icon: /*#__PURE__*/React.createElement(ChalkboardTeacher, null)
}, {
  href: "/tagihan",
  label: "Tagihan",
  icon: /*#__PURE__*/React.createElement(Notepad, null)
}, {
  href: "/daftar-pengajuan",
  label: "Daftar Pengajuan",
  icon: /*#__PURE__*/React.createElement(ListDashes, null)
}];
export { navItems, additionalNavItems };