'use client'
import {
    Button, Input, Select,
} from "@/components";
import {MagnifyingGlass, Plus} from "@phosphor-icons/react/dist/ssr";
import {useState} from "react";
import {TableEntriPengajarKelas} from "./components";

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

export default function Index({listPengajarKelas}) {
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const openModal = () => setOpenAddModal(true);
    return <>
        <div className="flex flex-wrap xl:flex-nowrap xl:overflow-x-auto justify-end items-center gap-4">
            <Select label="Fakultas" options={[]} showLabel/>
            <Select label="Program Studi" options={[]} showLabel/>
            <Select label="Konsentrasi" options={[]} showLabel/>
            <Select label="Semester" options={[]} showLabel/>
            <Select label="Tahun Akademik" options={[]} showLabel/>
            <Input
                size="xs"
                className="min-w-[156px] self-end"
                placeholder={"Cari data disini"}
                leftIcon={<MagnifyingGlass weight="bold"/>}
            />
            <Button
                className="self-end text-nowrap"
                onClick={openModal}
                leftIcon={<Plus weight="bold"/>}
                size="sm"
                filled
            >
                Tambah data
            </Button>
        </div>
        <TableEntriPengajarKelas data={listPengajarKelas} columns={columns} pinnedColumns={pinnedColumns}/>
    </>
}