import {Button, Select, Text} from "@/components";
import {FilePdf, FileXls} from "@phosphor-icons/react";

export default function TabJadwalKuliahPerHari() {
return <>
    <Text className="mb-8" size="xl" color="text-gray-100" weight={600}>
        Cetak Laporan Jadwal Kuliah Per Hari
    </Text>
    <div className="flex xl:overflow-x-auto xl:min-w-0 scrollbar-thin overflow-y-visible mb-3">
        <div className="flex justify-between w-full gap-3">
            <div
                className="flex flex-wrap xl:flex-nowrap xl:flex-shrink-0 flex-grow xl:flex-grow-0 justify-end items-center gap-4 overflow-y-visible">
                <Select isRelative={false} label="Fakultas" options={[]} showLabel/>
                <Select isRelative={false} label="Jurusan" options={[]} showLabel/>
                <Select isRelative={false} label="Program studi" options={[]} showLabel/>
                <Select isRelative={false} label="Tahun akademik" options={[]} showLabel/>
            </div>
        </div>
    </div>
    <div
        className="flex items-center justify-center bg-fade text-gray-50 min-h-[250px] lg:min-h-[500px] mb-3">Template
    </div>
    <div className="flex gap-3">
        <Button leftIcon={<FilePdf/>} variant='danger' filled>Export PDF</Button>
        <Button leftIcon={<FileXls/>} variant='success' filled>Export Excel</Button>
    </div>
</>
}