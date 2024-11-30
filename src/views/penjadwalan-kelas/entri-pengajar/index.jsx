'use client'
import {
    Button, Input, Pagination, Select,
} from "@/components";
import {MagnifyingGlass, Plus} from "@phosphor-icons/react/dist/ssr";
import {useState} from "react";
import {ModalEntriPengajarKelas, TableEntriPengajarKelas} from "./components";
const data = [
    {
        id: 1011,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '001',
        nama: 'Mudjiono, Drs. MT'
    },
    {
        id: 1012,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '020',
        nama: 'Mudjiono, Drs. MT'
    },
    {
        id: 1013,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '005',
        nama: 'Mudjiono, Drs. MT'
    },
    {
        id: 1014,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '007',
        nama: 'Mudjiono, Drs. MT'
    },
    {
        id: 1015,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '011',
        nama: 'Mudjiono, Drs. MT'
    },
    {
        id: 1016,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '008',
        nama: 'Mudjiono, Drs. MT'
    },
    {
        id: 1017,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '021',
        nama: 'Mudjiono, Drs. MT'
    },
    {
        id: 1018,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '017',
        nama: 'Mudjiono, Drs. MT'
    },
    {
        id: 1019,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '006',
        nama: 'Mudjiono, Drs. MT'
    },
    {
        id: 1020,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '004',
        nama: 'Mudjiono, Drs. MT'
    },

]
const columns = [
    {name: "", minWidth: "min-w-[56px]", colName: "id"},
    {name: "posisi", minWidth: "min-w-[140px]", colName: "posisi.nama"},
    {name: "awal", minWidth: "min-w-[120px]", colName: "posisi.awal"},
    {name: "akhir", minWidth: "min-w-[120px]", colName: "posisi.akhir"},
    {name: "kode dosen", minWidth: "min-w-[128px]", colName: "kode_dosen"},
    {name: "nama dosen", minWidth: "min-w-[232px]", colName: "nama"},
    {name: "actions", minWidth: "min-w-[124px]", colName: "actions"},
];
const pinnedColumns = [0];

export default function Index({/*listPengajarKelas*/}) {
    const  listPengajarKelas = data;
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const openModalAdd = () => setOpenAddModal(true);
    const closeModalAdd = () => setOpenAddModal(false);
    return <>
        <div className="flex xl:overflow-x-auto xl:min-w-0 scrollbar-thin overflow-y-visible">
            <div className="flex flex-wrap xl:flex-nowrap xl:flex-shrink-0 flex-grow justify-end items-center gap-4 overflow-y-visible">
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
        <TableEntriPengajarKelas data={listPengajarKelas} columns={columns} pinnedColumns={pinnedColumns}/>
        <Pagination/>
        <ModalEntriPengajarKelas open={openAddModal} onClose={closeModalAdd}/>
    </>
}