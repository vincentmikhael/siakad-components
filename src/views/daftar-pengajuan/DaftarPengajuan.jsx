"use client"

import React, {useState} from "react";
import {
    Badge,
    BottomDrawer,
    Button, Checkbox, IconButton, NotFoundRow, Select,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow, Text
} from "@/components";
import {
    FadersHorizontal, FilePdf, Check
} from "@phosphor-icons/react";

const DaftarPengajuan = () => {
    //drawer
    const [openDrawer, setOpenDrawer] = useState(false);
    //
    const [loadingData, setLoadingData] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const handleCheckboxChange = (id) => {
        setSelectedItems((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const isChecked = (id) => selectedItems.includes(id);

    const columns = [
        {name: "", className: "min-w-14"},
        {name: "nim", className: "min-w-[76px] text-center"},
        {name: "nama", className: "min-w-[380px]"},
        {name: "program studi", className: "min-w-48"},
        {name: "user entry", className: "min-w-44 text-center"},
        {name: "perihal", className: "min-w-44"},
        {name: "status", className: "min-w-[164px] text-center"},
    ];

    const data = [
        {
            id: 1,
            nim: "1718120",
            nama: "Ahmad rahadian",
            prodi: "Teknik Informatika",
            user_entry: "Sekjur-Informatika",
            perihal: "Pergantian data",
            status: 0,
        },
        {
            id: 2,
            nim: "1718120",
            nama: "Ahmad rahadian",
            prodi: "Teknik Informatika",
            user_entry: "Sekjur-Informatika",
            perihal: "Pergantian data",
            status: 1,
        }
    ]
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <div className="w-full lg:w-fit hidden lg:flex gap-4">
                    <Select value={[]} options={[]} label="Fakultas" placeholder="Pilih fakultas"
                            showLabel
                            size="xs"
                            className="xl:w-[80px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Program studi" placeholder="Pilih program studi"
                            showLabel
                            size="xs"
                            className="xl:w-[180px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Konsentrasi" placeholder="Pilih konsentrasi"
                            showLabel
                            size="xs"
                            className="xl:w-[180px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Semester" placeholder="Pilih semester"
                            showLabel
                            size="xs"
                            className="xl:w-[80px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Tahun ajaran" placeholder="Pilih tahun ajaran"
                            showLabel
                            size="xs"
                            className="xl:w-[128px] w-full"
                            onChange={() => {
                            }}/>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-4 w-full lg:w-fit">
                    <div className="flex flex-row justify-between">
                        <Button
                            onClick={() => setOpenDrawer(true)}
                            leftIcon={<FadersHorizontal weight="bold"/>}
                            size="sm"
                            filled
                            className="w-fit lg:hidden"
                            variant="white"
                        >
                            Filter
                        </Button>
                        <BottomDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} onApply={() => {
                        }} onClear={() => {
                        }}>
                            <Select value={[]} options={[]} label="Fakultas" placeholder="Pilih fakultas"
                                    showLabel
                                    size="lg"
                                    labelKey="nama"
                                    valueKey="id"
                                    onChange={() => {
                                    }}
                                    menuClass="max-h-28"/>
                            <Select value={[]} options={[]} label="Program studi" placeholder="Pilih program studi"
                                    showLabel
                                    size="lg"
                                    labelKey="nama"
                                    valueKey="id"
                                    onChange={() => {
                                    }}
                                    menuClass="max-h-28"/>
                            <Select value={[]} options={[]} label="Konsentrasi" placeholder="Pilih konsentrasi"
                                    showLabel
                                    size="lg"
                                    labelKey="nama"
                                    valueKey="id"
                                    onChange={() => {
                                    }}
                                    menuClass="max-h-28"/>
                            <Select value={[]} options={[]} label="Semester" placeholder="Pilih semester"
                                    showLabel
                                    size="lg"
                                    labelKey="nama"
                                    valueKey="id"
                                    onChange={() => {
                                    }}
                                    menuClass="max-h-28"/>
                            <Select value={[]} options={[]} label="Tahun ajaran" placeholder="Pilih tahun ajaran"
                                    showLabel
                                    size="lg"
                                    labelKey="nama"
                                    valueKey="id"
                                    onChange={() => {
                                    }}
                                    menuClass="max-h-28"/>
                        </BottomDrawer>
                        <Button
                            onClick={() => {
                            }}
                            leftIcon={<Check weight="bold"/>}
                            size="md"
                            filled
                            className="w-fit"
                            disabled={selectedItems.length < 1}
                        >
                            Validasi data
                        </Button>
                    </div>
                </div>
            </div>
            <Table
                loading={loadingData}
                columns={columns}
            >
                <TableHead>
                    <TableHeadRow>
                        {columns.map((e, index) => {
                            return (
                                <TableHeadCell
                                    className={e.className}
                                    key={index}
                                >
                                    {e.name}
                                </TableHeadCell>
                            );
                        })}
                    </TableHeadRow>
                </TableHead>

                <TableBody>
                    {data?.length === 0 ? (
                        <NotFoundRow colSpan={columns.length}/>
                    ) : (
                        data?.map((item, index) => (
                                <TableBodyRow key={index} selected={isChecked(item?.id)}>
                                    <TableBodyCell>
                                        <Checkbox checked={isChecked(item?.id)}
                                                  onClick={() => handleCheckboxChange(item?.id)}/>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">{item?.nim}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs">{item?.nama}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs">{item?.prodi}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">{item?.user_entry}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs">{item?.perihal}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <div className="flex justify-center items-center">
                                            {
                                                item?.status === 0 ? (
                                                    <Badge filled variant="danger" size="sm">Belum tervalidasi</Badge>
                                                ) : (
                                                    <Badge filled variant="success" size="sm">Tervalidasi</Badge>
                                                )
                                            }
                                        </div>
                                    </TableBodyCell>
                                </TableBodyRow>
                            )
                        ))}
                </TableBody>
            </Table>
        </>
    );
}
export default DaftarPengajuan