'use client'
import {Button, Input, Pagination, Select} from "@/components";
import {ModalEntriJadwalKuliah, TableEntriJadwalKuliah} from "./components";
import {MagnifyingGlass, Plus} from "@phosphor-icons/react/dist/ssr";
import {useState} from "react";

const data = [
    {
        id: 1,
        hari: 'Senin',
        jam: {urutan: 10, awal: '15.10', akhir: '15.50'},
        ruang: 'III.3.1',
        nama: 'F. Yudi Limpraptono, Dr. S',
        user_entry: 'Putry',
    },
    {
        id: 1,
        hari: 'Senin',
        jam: {urutan: 10, awal: '15.10', akhir: '15.50'},
        ruang: 'III.3.1',
        nama: 'F. Yudi Limpraptono, Dr. S',
        user_entry: 'Putry',
    },
    {
        id: 1,
        hari: 'Senin',
        jam: {urutan: 10, awal: '15.10', akhir: '15.50'},
        ruang: 'III.3.1',
        nama: 'F. Yudi Limpraptono, Dr. S',
        user_entry: 'Putry',
    },
    {
        id: 1,
        hari: 'Senin',
        jam: {urutan: 10, awal: '15.10', akhir: '15.50'},
        ruang: 'III.3.1',
        nama: 'F. Yudi Limpraptono, Dr. S',
        user_entry: 'Putry',
    },
    {
        id: 1,
        hari: 'Senin',
        jam: {urutan: 10, awal: '15.10', akhir: '15.50'},
        ruang: 'III.3.1',
        nama: 'F. Yudi Limpraptono, Dr. S',
        user_entry: 'Putry',
    },
    {
        id: 1,
        hari: 'Senin',
        jam: {urutan: 10, awal: '15.10', akhir: '15.50'},
        ruang: 'III.3.1',
        nama: 'F. Yudi Limpraptono, Dr. S',
        user_entry: 'Putry',
    },
    {
        id: 1,
        hari: 'Senin',
        jam: {urutan: 10, awal: '15.10', akhir: '15.50'},
        ruang: 'III.3.1',
        nama: 'F. Yudi Limpraptono, Dr. S',
        user_entry: 'Putry',
    },
    {
        id: 1,
        hari: 'Senin',
        jam: {urutan: 10, awal: '15.10', akhir: '15.50'},
        ruang: 'III.3.1',
        nama: 'F. Yudi Limpraptono, Dr. S',
        user_entry: 'Putry',
    },
    {
        id: 1,
        hari: 'Senin',
        jam: {urutan: 10, awal: '15.10', akhir: '15.50'},
        ruang: 'III.3.1',
        nama: 'F. Yudi Limpraptono, Dr. S',
        user_entry: 'Putry',
    },
    {
        id: 1,
        hari: 'Senin',
        jam: {urutan: 10, awal: '15.10', akhir: '15.50'},
        ruang: 'III.3.1',
        nama: 'F. Yudi Limpraptono, Dr. S',
        user_entry: 'Putry',
    },
]
const columns = [
    {name: "", minWidth: "min-w-[56px]", colName: "id"},
    {name: "hari", minWidth: "min-w-[108px]", colName: "hari"},
    {name: "jam ke", minWidth: "min-w-[180px]", colName: "jam"},
    {name: "ruang", minWidth: "min-w-[120px]", colName: "ruang"},
    {name: "nama pengajar", minWidth: "min-w-[204px]", colName: "nama"},
    {name: "user entry", minWidth: "min-w-[128px]", colName: "user_entry"},
    {name: "actions", minWidth: "min-w-[124px]", colName: "actions"},
];
const pinnedColumns = [0];
export default function Index({}) {
    const [openAddModal, setOpenAddModal] = useState(false);
    const openModalAdd = () => setOpenAddModal(true);
    const closeModalAdd = () => setOpenAddModal(false);
    return <>
        <div className="flex xl:overflow-x-auto xl:min-w-0 scrollbar-thin overflow-y-visible">
            <div
                className="flex flex-wrap xl:flex-nowrap xl:flex-shrink-0 flex-grow justify-end items-center gap-4 overflow-y-visible">
                <Select isRelative={false} label="Fakultas" options={[]} showLabel/>
                <Select isRelative={false} label="Program studi" options={[]} showLabel/>
                <Select isRelative={false} label="Konsentrasi" options={[]} showLabel/>
                <Select isRelative={false} label="Semester" options={[]} showLabel/>
                <Select isRelative={false} label="Tahun akademik" options={[]} showLabel/>
                <Input
                    size="xs"
                    className="min-w-[156px] self-end"
                    placeholder={"Cari data disini"}
                    leftIcon={<MagnifyingGlass weight="bold"/>}
                />
                <div className="flex items-end sticky right-0 xl:h-full bg-white">
                    <Button
                        className="self-end text-nowrap"
                        onClick={openModalAdd}
                        leftIcon={<Plus weight="bold"/>}
                        size="sm"
                        filled
                    >
                        Tambah data
                    </Button>
                </div>
            </div>
        </div>
        <TableEntriJadwalKuliah data={data} columns={columns} pinnedColumns={pinnedColumns}/>
        <Pagination/>
        <ModalEntriJadwalKuliah open={openAddModal} onClose={closeModalAdd}/>
    </>
}