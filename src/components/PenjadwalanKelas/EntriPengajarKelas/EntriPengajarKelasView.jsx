'use client'
import {
    Button,
    Checkbox,
    IconButton, Input, Select,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow,
    Text, Utils
} from "@/components";
import {PencilSimpleLine, Trash} from "@phosphor-icons/react";
import {MagnifyingGlass, Plus} from "@phosphor-icons/react/dist/ssr";
import {useState} from "react";

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

const EntriPengajarKelasTable = ({data, columns, pinnedColumns, onParameterChange, listPengajarKelas}) => {
    return <Table
        loading={false}
        columns={columns}
        data={data}
        pinned={pinnedColumns}
    >
        <TableHead>
            <TableHeadRow>
                {columns.map((e, index) => {
                    return (
                        <TableHeadCell
                            className={e.minWidth}
                            key={index}
                        >
                            {e.name}
                        </TableHeadCell>
                    );
                })}
            </TableHeadRow>
        </TableHead>

        <TableBody>
            {data.map((e, index) => {
                return <TableBodyRow key={index}><>{columns.map((col, indexCol) => {
                    switch (col.colName) {
                        case "id":
                            return <TableBodyCell key={indexCol}>
                                <Checkbox defaultValue={e[col.colName]} size="xs">{index + 1}</Checkbox>
                            </TableBodyCell>
                        case "actions":
                            return <TableBodyCell key={indexCol}>
                                <div className="flex flex-row gap-3">
                                    <IconButton size="sm" variant="warning">
                                        <PencilSimpleLine/>
                                    </IconButton>
                                    <IconButton size="sm" variant="danger">
                                        <Trash/>
                                    </IconButton>
                                </div>
                            </TableBodyCell>
                        case "posisi.nama":
                        case "posisi.awal":
                        case "posisi.akhir":
                            return <TableBodyCell key={indexCol}><Text size="xs">
                                {Utils.resolveNestedValue(e, col.colName) || '-'}
                            </Text></TableBodyCell>
                        default :
                            return <TableBodyCell key={indexCol}><Text size="xs">{e[col.colName]}</Text></TableBodyCell>
                    }
                })}</></TableBodyRow>
            })}
        </TableBody>
    </Table>
}

export default function EntriPengajarKelasView({listPengajarKelas}) {
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const openModal = () => setOpenAddModal(true);
    return <>
        <div className="flex justify-end items-center gap-4">
            <Select label="Fakultas" showLabel/>
            <Select label="Program Studi" showLabel/>
            <Select label="Konsentrasi" showLabel/>
            <Select label="Semester" showLabel/>
            <Select label="Tahun Akademik" showLabel/>
            <Input
                size="xs"
                className="max-w-[156px] self-end"
                placeholder={"Cari data disini"}
                leftIcon={<MagnifyingGlass weight="bold"/>}
            />
            <Button
                className="self-end"
                onClick={openModal}
                leftIcon={<Plus weight="bold"/>}
                size="sm"
                filled
            >
                Tambah data
            </Button>
        </div>
        <EntriPengajarKelasTable data={listPengajarKelas} columns={columns} pinnedColumns={pinnedColumns}/>
    </>
}