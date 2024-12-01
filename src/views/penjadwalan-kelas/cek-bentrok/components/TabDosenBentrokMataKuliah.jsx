import {Input, Pagination, Select} from "@/components";
import {TableDosenBentrokMataKuliah} from "./index";
import {MagnifyingGlass} from "@phosphor-icons/react/dist/ssr";

const data = [
    {
        nama_mk: 'Pendidikan Agama Islam',
        kode_dosen: '001',
        nama: 'Ir. Gaguk Sukowiyono, MT',
        hari: 'Selasa',
        jam: 1,
        ruang: 2,
    },
    {
        nama_mk: 'Pendidikan Agama Islam',
        kode_dosen: '001',
        nama: 'Ir. Gaguk Sukowiyono, MT',
        hari: 'Selasa',
        jam: 1,
        ruang: 2,
    },
    {
        nama_mk: 'Pendidikan Agama Islam',
        kode_dosen: '001',
        nama: 'Ir. Gaguk Sukowiyono, MT',
        hari: 'Selasa',
        jam: 1,
        ruang: 2,
    },
    {
        nama_mk: 'Pendidikan Agama Islam',
        kode_dosen: '001',
        nama: 'Ir. Gaguk Sukowiyono, MT',
        hari: 'Selasa',
        jam: 1,
        ruang: 2,
    },
    {
        nama_mk: 'Pendidikan Agama Islam',
        kode_dosen: '001',
        nama: 'Ir. Gaguk Sukowiyono, MT',
        hari: 'Selasa',
        jam: 1,
        ruang: 2,
    },
    {
        nama_mk: 'Pendidikan Agama Islam',
        kode_dosen: '001',
        nama: 'Ir. Gaguk Sukowiyono, MT',
        hari: 'Selasa',
        jam: 1,
        ruang: 2,
    },
    {
        nama_mk: 'Pendidikan Agama Islam',
        kode_dosen: '001',
        nama: 'Ir. Gaguk Sukowiyono, MT',
        hari: 'Selasa',
        jam: 1,
        ruang: 2,
    },
    {
        nama_mk: 'Pendidikan Agama Islam',
        kode_dosen: '001',
        nama: 'Ir. Gaguk Sukowiyono, MT',
        hari: 'Selasa',
        jam: 1,
        ruang: 2,
    },
    {
        nama_mk: 'Pendidikan Agama Islam',
        kode_dosen: '001',
        nama: 'Ir. Gaguk Sukowiyono, MT',
        hari: 'Selasa',
        jam: 1,
        ruang: 2,
    },
    {
        nama_mk: 'Pendidikan Agama Islam',
        kode_dosen: '001',
        nama: 'Ir. Gaguk Sukowiyono, MT',
        hari: 'Selasa',
        jam: 1,
        ruang: 2,
    },
];
const columns = [
    {name: "", minWidth: "min-w-[56px]", colName: "id"},
    {name: "nama mata kuliah", minWidth: "min-w-[200px]", colName: "nama_mk"},
    {name: "kode dosen", minWidth: "min-w-[112px]", colName: "kode_dosen"},
    {name: "nama dosen", minWidth: "min-w-[204px]", colName: "nama"},
    {name: "hari", minWidth: "min-w-[80px]", colName: "hari"},
    {name: "jam", minWidth: "min-w-[80px]", colName: "jam"},
    {name: "ruang", minWidth: "min-w-[80px]", colName: "ruang"},
    {name: "", minWidth: "min-w-[108px]", colName: "actions"},
];
const pinnedColumns = [0];
export default function TabDosenBentrokMataKuliah() {
    return <>
        <div className="flex xl:overflow-x-auto xl:min-w-0 scrollbar-thin overflow-y-visible">
            <div className="flex justify-between w-full gap-3">
                <div
                    className="flex flex-wrap xl:flex-nowrap xl:flex-shrink-0 flex-grow xl:flex-grow-0 justify-end items-center gap-4 overflow-y-visible">
                    <Select isRelative={false} label="Semester" options={[]} showLabel/>
                    <Select isRelative={false} label="Tahun akademik" options={[]} showLabel/>
                </div>
                <Input
                    size="xs"
                    className="min-w-[156px] self-end"
                    placeholder={"Cari data disini"}
                    leftIcon={<MagnifyingGlass weight="bold"/>}
                />
            </div>
        </div>
        <TableDosenBentrokMataKuliah data={data} columns={columns} pinnedColumns={pinnedColumns}/>
        <Pagination/>
    </>
}