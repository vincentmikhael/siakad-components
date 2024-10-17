import Image from 'next/image';
import itnWhiteLogo from '../../../public/images/itn-white-logo.png';
import { Bell, BellRinging, BookBookmark, Calendar, CalendarBlank, CaretDown, ChalkboardTeacher, Files, Fingerprint, Gear, GraduationCap, ListChecks, ListDashes, Notepad, NotePencil, PlusMinus, Student, Timer, Users } from '@phosphor-icons/react/dist/ssr';
import { Hr, Navbar, NavBrand, NavHamburger, NavLi, NavUl, NavRow } from '@/components';
export default function Layout({ children }) {
    return (
        <>
            <Navbar>
                <NavRow>
                    <div className='inline-flex items-center md:gap-6 justify-start'>
                        <NavBrand>
                            <Image src={itnWhiteLogo} alt='itn white logo' width={40} height={40} />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                        </NavBrand>
                        <Hr direction="vertical" classHr="h-6 bg-white opacity-[32%] hidden md:block" classDiv="hidden md:block" />
                        <NavHamburger />
                        <NavUl>
                            <NavLi href='/dashboard' icon={<Calendar />}>Dashboard</NavLi>
                            <NavLi href='/konfigurasi' icon={<Gear />}>Konfigurasi</NavLi>
                            <NavLi href='/data-utama' icon={<Files />}>Data utama</NavLi>
                            <NavLi href='/management-user' icon={<Users />}>Management user</NavLi>
                            <NavLi href='/krs' icon={<PlusMinus />}>KRS</NavLi>
                            <NavLi href='/penjadwalan-kelas' icon={<Timer />}>Penjadwalan kelas</NavLi>
                            <NavLi href='/management-nilai' icon={<NotePencil />}>Management nilai</NavLi>
                            <NavLi href='/penjadwalan-ujian' icon={<Timer />}>Penjadwalan ujian</NavLi>
                            <div className='flex flex-col lg:hidden gap-3 '>
                                <NavLi href="/presensi" icon={<Fingerprint />}>Presensi</NavLi>
                                <NavLi href="/pkn-skripsi" icon={<BookBookmark />}>PKN & Skripsi</NavLi>
                                <NavLi href="/yudisium-wisuda" icon={<GraduationCap />}>Yudusium & Wisuda</NavLi>
                                <NavLi href="/status-mahasiswa" icon={<Student />}>Status Mahasiswa</NavLi>
                                <NavLi href="/report" icon={<Files />}>Report</NavLi>
                                <NavLi href="/kalender-akademik" icon={<CalendarBlank />}>Kalender Akademik</NavLi>
                                <NavLi href="/pengumuman" icon={<Bell />}>Pengumuman</NavLi>
                                <NavLi href="/kuisioner" icon={<ListChecks />}>Kuisioner</NavLi>
                                <NavLi href="/dosen-wali" icon={<ChalkboardTeacher />}>Dosen Wali</NavLi>
                                <NavLi href="/tagihan" icon={<Notepad />}>Tagihan</NavLi>
                                <NavLi href="/daftar-pengajuan" icon={<ListDashes />}>Daftar Pengajuan</NavLi>
                            </div>
                        </NavUl>
                    </div>
                    <div className="flex items-center md:w-auto space-x-6 order-2" id="navbar-default">
                        <BellRinging color='#FFFFFF' size={20} weight='regular' />
                        <Hr direction="vertical" classHr="h-6 bg-white opacity-[32%]" classDiv="hidden md:block" />
                        <div className='gap-3 flex flex-row items-center'>
                            <div className="w-8 h-8 bg-white rounded-full" />
                            <p className='text-gray-10 font-normal text-sm hidden md:block'>Faisol Klakah</p>
                            <div className='block'>
                                <CaretDown size={16} weight='regular' color='#FFFFFF' />
                            </div>
                        </div>
                    </div>
                </NavRow>

                <NavRow className='hidden lg:flex h-14'>
                    <NavUl>
                        <NavLi href="/presensi" icon={<Fingerprint />}>Presensi</NavLi>
                        <NavLi href="/pkn-skripsi" icon={<BookBookmark />}>PKN & Skripsi</NavLi>
                        <NavLi href="/yudisium-wisuda" icon={<GraduationCap />}>Yudusium & Wisuda</NavLi>
                        <NavLi href="/status-mahasiswa" icon={<Student />}>Status Mahasiswa</NavLi>
                        <NavLi href="/report" icon={<Files />}>Report</NavLi>
                        <NavLi href="/kalender-akademik" icon={<CalendarBlank />}>Kalender Akademik</NavLi>
                        <NavLi href="/pengumuman" icon={<Bell />}>Pengumuman</NavLi>
                        <NavLi href="/kuisioner" icon={<ListChecks />}>Kuisioner</NavLi>
                        <NavLi href="/dosen-wali" icon={<ChalkboardTeacher />}>Dosen Wali</NavLi>
                        <NavLi href="/tagihan" icon={<Notepad />}>Tagihan</NavLi>
                        <NavLi href="/daftar-pengajuan" icon={<ListDashes />}>Daftar Pengajuan</NavLi>
                    </NavUl>
                </NavRow>
            </Navbar>

            <div className="bg-radial-gradient h-[calc(100%*0.62391304)] md:h-[calc(100%*0.62391304)] w-full absolute top-16" />
            <div className="overflow-hidden min-h-screen">
                <div className='px-5 py-8 md:p-14 relative h-full w-full'>
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