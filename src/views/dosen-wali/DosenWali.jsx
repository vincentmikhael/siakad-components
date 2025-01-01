"use client"

import {useState} from "react";
import {
    Badge,
    BottomDrawer,
    Button, IconButton, NotFoundRow, Select,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow, Text
} from "@/components";
import {
    PencilSimpleLine,
    Trash,
    FadersHorizontal,
    ArrowsClockwise, FilePdf
} from "@phosphor-icons/react";

const DosenWali = () => {
    //drawer
    const [openDrawer, setOpenDrawer] = useState(false);
    //
    const [loadingData, setLoadingData] = useState(false);


    const data = [
        {
            nama_sk: "SK Dosen Wali Semester Genap TA 2021-2022",
        },
        {
            nama_sk: "SK Dosen Wali Semester Genap TA 2021-2022",
        },
        {
            nama_sk: "SK Dosen Wali Semester Genap TA 2021-2022",
        },
        {
            nama_sk: "SK Dosen Wali Semester Genap TA 2021-2022",
        },
    ]

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <div className="w-full lg:w-fit hidden lg:flex gap-4">
                    <Select value={[]} options={[]} label="Semester" placeholder="Pilih semester"
                            showLabel
                            size="xs"
                            className="xl:w-[120px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Tahun akademik" placeholder="Pilih tahun akademik"
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
                            <Select value={[]} options={[]} label="Semester" placeholder="Pilih semester"
                                    showLabel
                                    size="lg"
                                    labelKey="nama"
                                    valueKey="id"
                                    onChange={() => {
                                    }}
                                    menuClass="max-h-28"/>
                            <Select value={[]} options={[]} label="Tahun akademik" placeholder="Pilih tahun akademik"
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
                            leftIcon={<ArrowsClockwise weight="bold"/>}
                            size="md"
                            filled
                            className="w-fit"
                        >
                            Sync ke feeder
                        </Button>
                    </div>
                </div>
            </div>
            <Table
                loading={loadingData}
                containerClass="rounded-none border-0 border-b"
                className="rounded-none divide-y-fade"
            >
                <TableHead className="rounded-none">
                    <TableHeadRow>
                        <TableHeadCell
                            className="normal-case h-12 min-w-[340px] max-w-[340px]"
                        >
                            Daftar SK dosen wali
                        </TableHeadCell>
                        <TableHeadCell className="min-w-8"/>
                        <TableHeadCell className="min-w-48 w-full"/>
                    </TableHeadRow>
                </TableHead>

                <TableBody>
                    {data?.length === 0 ? (
                        <NotFoundRow colSpan={1}/>
                    ) : (
                        data?.map((item, index) => (
                                <TableBodyRow key={index} className="odd:bg-white even:bg-[#FCFCFC]">
                                    <TableBodyCell className="h-[76px]">
                                        <Text size="xs">{item.nama_sk}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">:</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Button leftIcon={<FilePdf weight="bold"/>} filled variant="danger" size="md">
                                            Download SK
                                        </Button>
                                    </TableBodyCell>
                                </TableBodyRow>
                            )
                        ))}
                </TableBody>
            </Table>
        </>
    );
}
export default DosenWali