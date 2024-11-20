"use client"

import {useEffect, useState} from "react";
import {
    Button, IconButton,
    Input, Modal, Select,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow, Text
} from "@/components";
import {MagnifyingGlass, Plus, PencilSimpleLine, Trash} from "@phosphor-icons/react";

const PrasyaratMK = () => {
    const [activeModal, setActiveModal] = useState(null);

    const handleOpenModal = (modal) => setActiveModal(modal);

    const handleCloseModal = () => setActiveModal(null);
    const columns = [
        {name: "no", className: "min-w-14"},
        {name: "kode mk", className: "min-w-[100px] text-center"},
        {name: "nama mata kuliah", className: "min-w-[268px]"},
        {name: "sks", className: "min-w-[60px] text-center"},
        {name: "kode mk praktikum", className: "min-w-[168px] text-center"},
        {name: "nama mata praktikum", className: "min-w-[268px]"},
        {name: "jenis syarat", className: "min-w-[202px] text-center"},
        {name: "user entri", className: "min-w-[170px] text-center"},
        {name: "actions", className: "min-w-[124px]  text-center"},
    ];
    const pinnedColumns = [0, 1, 2]
    const data = [
        {
            kode: '001',
            mk: "pendidikan agama islam",
            sks: 3,
            kode_prak: '001',
            prak: 'pendidikan agama islam',
            jenis_syarat: 'Matakuliah pra syarat',
            user: 'Rommy',
        }
    ]
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <div className="w-full md:w-fit gap-4 flex sm:flex-row flex-col">
                    <Select value={[]} options={[]} label="Jenis syarat" placeholder="Pilih jenis syarat" showLabel
                            size="xs"
                            className="xl:w-[180px] w-full"
                            onChange={() => {
                            }}/>
                </div>
                <div className="flex gap-4 w-full md:w-fit">
                    <Input
                        size="xs"
                        className="w-full lg:w-[156px]"
                        placeholder={"Cari data disini"}
                        leftIcon={<MagnifyingGlass weight="bold"/>}
                    />
                    <Button
                        onClick={() => handleOpenModal("add")}
                        leftIcon={<Plus weight="bold"/>}
                        size="sm"
                        filled
                        className="w-full lg:w-fit"
                    >
                        Tambah data
                    </Button>
                </div>
            </div>
            <Table
                loading={false}
                columns={columns}
                data={[]}
                pinned={pinnedColumns}
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
                                    <Text size="xs">{index + 1}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.kode}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="uppercase">{e?.mk}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.sks}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.kode_prak}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="uppercase">{e?.prak}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.jenis_syarat}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.user}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <div className="flex flex-row gap-3 justify-center">
                                        <IconButton size="sm" variant="warning" onClick={() => handleOpenModal("edit")}>
                                            <PencilSimpleLine/>
                                        </IconButton>
                                        <IconButton size="sm" variant="danger"
                                                    onClick={() => handleOpenModal("delete")}>
                                            <Trash/>
                                        </IconButton>
                                    </div>
                                </TableBodyCell>
                            </TableBodyRow>
                        );
                    })}
                </TableBody>
            </Table>

            {/*Add Modal*/}
            <Modal
                size="lg"
                open={activeModal === "add"}
                onClose={handleCloseModal}
                title="Tambah data prasyarat mata kuliah"
                dismissable
                autoClose
            >
                <Modal.Body>
                    <div className="grid grid-cols-2 gap-6 flex-grow">
                        <Select value={[]} options={[]} label="Fakultas" placeholder="Pilih fakultas" showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                        <Select value={[]} options={[]} label="Program studi" placeholder="Pilih program studi"
                                showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                        <Select value={[]} options={[]} label="Konsentrasi" placeholder="Pilih konsentrasi" showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                        <Select value={[]} options={[]} label="Tahun Kurikulum" placeholder="Pilih tahun kurikulum"
                                showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                        <Select value={[]} options={[]} label="Kode Mata kuliah" placeholder="Pilih kode mata kuliah"
                                showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                        <Select value={[]} options={[]} label="Jenis syarat" placeholder="Pilih jenis syarat"
                                showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                        <Select value={[]} options={[]} label="Mata kuliah" placeholder="Pilih mata kuliah"
                                showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                        <Select value={[]} options={[]} label="SKS" placeholder="Pilih SKS" showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="gap-4 flex flex-row">
                        <Button variant="primary" size="md" disabled filled>
                            Tambah
                        </Button>
                        <Button variant="white" size="md" filled>
                            Batal
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
            {/*Edit Modal*/}
            <Modal
                size="lg"
                open={activeModal === "edit"}
                onClose={handleCloseModal}
                title="Perbarui data prasyarat mata kuliah"
                dismissable
                autoClose
            >
                <Modal.Body>
                    <div className="grid grid-cols-2 gap-6 flex-grow">
                        <Select value={[]} options={[]} label="Fakultas" placeholder="Pilih fakultas" showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                        <Select value={[]} options={[]} label="Program studi" placeholder="Pilih program studi"
                                showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                        <Select value={[]} options={[]} label="Konsentrasi" placeholder="Pilih konsentrasi" showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                        <Select value={[]} options={[]} label="Tahun Kurikulum" placeholder="Pilih tahun kurikulum"
                                showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                        <Select value={[]} options={[]} label="Kode Mata kuliah" placeholder="Pilih kode mata kuliah"
                                showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                        <Select value={[]} options={[]} label="Jenis syarat" placeholder="Pilih jenis syarat"
                                showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                        <Select value={[]} options={[]} label="Mata kuliah" placeholder="Pilih mata kuliah"
                                showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                        <Select value={[]} options={[]} label="SKS" placeholder="Pilih SKS" showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="gap-4 flex flex-row">
                        <Button variant="primary" size="md" disabled filled>
                            Perbarui
                        </Button>
                        <Button variant="white" size="md" filled>
                            Batal
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
            {/*Delete Modal*/}
            <Modal
                open={activeModal === "delete"}
                onClose={handleCloseModal}
                title="Hapus data prasyarat mata kuliah"
                description="Apakah Anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dibatalkan."
                dismissable
                outsideClose
                autoClose
            >
                <Modal.Footer>
                    <div className="gap-4 flex flex-row">
                        <Button variant="danger" size="md" filled>
                            Hapus
                        </Button>
                        <Button variant="white" size="md" filled>
                            Batal
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default PrasyaratMK