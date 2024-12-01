import {Input, Pagination, Select} from "@/components";
import {TableMahasiswa} from "./index";
import {MagnifyingGlass} from "@phosphor-icons/react/dist/ssr";

const data = [
    {nim: 1728120, nama: 'Fajar ramadhani', nama_mk: 'Pendidikan Agama Islam', hari: 'Selasa', jam: 1, ruang: 2,},
    {nim: 1728120, nama: 'Fajar ramadhani', nama_mk: 'Pendidikan Agama Islam', hari: 'Selasa', jam: 1, ruang: 2,},
    {nim: 1728120, nama: 'Fajar ramadhani', nama_mk: 'Pendidikan Agama Islam', hari: 'Selasa', jam: 1, ruang: 2,},
    {nim: 1728120, nama: 'Fajar ramadhani', nama_mk: 'Pendidikan Agama Islam', hari: 'Selasa', jam: 1, ruang: 2,},
    {nim: 1728120, nama: 'Fajar ramadhani', nama_mk: 'Pendidikan Agama Islam', hari: 'Selasa', jam: 1, ruang: 2,},
    {nim: 1728120, nama: 'Fajar ramadhani', nama_mk: 'Pendidikan Agama Islam', hari: 'Selasa', jam: 1, ruang: 2,},
    {nim: 1728120, nama: 'Fajar ramadhani', nama_mk: 'Pendidikan Agama Islam', hari: 'Selasa', jam: 1, ruang: 2,},
    {nim: 1728120, nama: 'Fajar ramadhani', nama_mk: 'Pendidikan Agama Islam', hari: 'Selasa', jam: 1, ruang: 2,},
    {nim: 1728120, nama: 'Fajar ramadhani', nama_mk: 'Pendidikan Agama Islam', hari: 'Selasa', jam: 1, ruang: 2,},
    {nim: 1728120, nama: 'Fajar ramadhani', nama_mk: 'Pendidikan Agama Islam', hari: 'Selasa', jam: 1, ruang: 2,},
];
const columns = [
    {name: "", minWidth: "min-w-[56px]", colName: "id"},
    {name: "nim", minWidth: "min-w-[112px]", colName: "nim"},
    {name: "nama", minWidth: "min-w-[200px]", colName: "nama"},
    {name: "nama mata kuliah", minWidth: "min-w-[200px]", colName: "nama_mk"},
    {name: "hari", minWidth: "min-w-[84px]", colName: "hari"},
    {name: "jam", minWidth: "min-w-[80px]", colName: "jam"},
    {name: "ruang", minWidth: "min-w-[80px]", colName: "ruang"},
    {name: "", minWidth: "min-w-[108px]", colName: "actions"},
];
const pinnedColumns = [0];
export default function TabMahasiswa() {
    return <>
        <div className="flex xl:overflow-x-auto xl:min-w-0 scrollbar-thin overflow-y-visible">
            <div className="flex justify-between w-full gap-3">
                <div
                    className="flex flex-wrap xl:flex-nowrap xl:flex-shrink-0 flex-grow xl:flex-grow-0 justify-end items-center gap-4 overflow-y-visible">
                    <Select isRelative={false} label="Fakultas" options={[]} showLabel/>
                    <Select isRelative={false} label="Jurusan" options={[]} showLabel/>
                    <Select isRelative={false} label="Program studi" options={[]} showLabel/>
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
        <TableMahasiswa data={data} columns={columns} pinnedColumns={pinnedColumns}/>
        <Pagination/>
    </>
}