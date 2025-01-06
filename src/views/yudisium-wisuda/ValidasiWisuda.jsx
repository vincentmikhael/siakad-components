"use client"

import {useState} from "react";
import {
    Badge,
    Button, Checkbox, DateInput, FormSkeleton, IconButton,
    Input, Modal, Pagination,
    Select, Spinner,
    Table,
    TableBody, TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow, Text,
    Textarea
} from "@/components";
import {MagnifyingGlass, PencilSimpleLine, Plus, Trash} from "@phosphor-icons/react";
import AxiosInstance from "@libs/AxiosInstance";
import { Check } from "@phosphor-icons/react/dist/ssr";

export default function ValidasiWisuda() {


    const [formData, setFormData] = useState({
        fakultas: "",
        jurusan: "",
        prodi: "",
        kode_mk: "",
        semester: "",
        tahun_akademik: "",
        jenis_ujian: "",
        hari_tgl: "",
        jam: "",
    });



    const columns = [
        {name: ""},
        {name: "nim"},
        {name: "nama"},
        {name: "status"},
        {name: "validasi"},
        {name: "keterangan"},
    ];
    const data = [
        {
            nim: "2118110",
            nama: "Lorem ipsum",
            judul: "3.2",
            jam: "lorem",
            tanggal: "lorem",
            ujian: "10 Dec 2024",
        },
        {
            nim: "2118110",
            nama: "Lorem ipsum",
            judul: "3.2",
            jam: "lorem",
            tanggal: "lorem",
            ujian: "10 Dec 2024",
        },
    ]
    return (
        <>
            <div className="flex my-1 flex-col lg:flex-row justify-between items-end gap-4">
                <div className="w-full lg:w-fit gap-4 flex sm:flex-row flex-col">
                    <Select value={[]} options={[]} label="Fakultas" showLabel
                            size="xs"
                            className="xl:w-[120px] w-full"
                            onChange={() => {
                            }}/>

                    <Select value={[]} options={[]} label="Program studi"
                            showLabel
                            size="xs"
                            className="xl:w-[120px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Konsentrasi" placeholder="Pilih konsentrasi"
                            showLabel
                            size="xs"
                            className="xl:w-[120px] w-full"
                            onChange={() => {
                            }}/>
                            <Select value={[]} options={[]} label="Periode" placeholder="Pilih periode"
                            showLabel
                            size="xs"
                            className="xl:w-[120px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Tahun wisuda" placeholder="Pilih tahun wisuda"
                            showLabel
                            size="xs"
                            className="xl:w-[120px] w-full"
                            onChange={() => {
                            }}/>
                </div>
                <div className="flex gap-4 w-full lg:w-fit">
                    <Button
                        leftIcon={<Check weight="bold"/>}
                        size="sm"
                        filled
                        className="w-full lg:w-fit"
                    >
                        Validasi wisuda
                    </Button>
                </div>
            </div>
            <Table
                loading={false}
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
                    {data?.map((e, index) => {
                        return (
                            <TableBodyRow key={index}>
                                <TableBodyCell>
                                    <Checkbox/>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="">{e?.nim}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="uppercase">{e?.nama}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Badge filled variant="primary">{e?.tanggal}</Badge>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Badge filled variant="default">{e?.tanggal}</Badge>
                                </TableBodyCell>
                                <TableBodyCell>
                                     <Text size="xs" className="">{e?.jam}</Text>
                                </TableBodyCell>
    
               
                            </TableBodyRow>
                        );
                    })}
                </TableBody>
            </Table>
            <Pagination/>
     
        </>
    );
}
