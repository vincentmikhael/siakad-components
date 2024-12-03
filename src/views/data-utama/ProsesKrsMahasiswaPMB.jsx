"use client"

import React, {useState} from "react";
import {
    Badge,
    Button, Checkbox,
    Modal, Select,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow, Text
} from "@/components";

const ProsesKrsMahasiswaPMB = () => {
    const [activeModal, setActiveModal] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (id) => {
        setSelectedItems((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const isChecked = (id) => selectedItems.includes(id);

    const handleOpenModal = (modal) => setActiveModal(modal);

    const handleCloseModal = () => setActiveModal(null);

    const columns = [
        {name: "", className: "min-w-14"},
        {name: "nim", className: "min-w-[76px]"},
        {name: "nama", className: "min-w-[208px]"},
        {name: "sks registrasi", className: "min-w-[132px] text-center"},
        {name: "program studi", className: "min-w-[148px]"},
        {name: "fakultas", className: "text-center"},
        {name: "status", className: "text-center"},
    ];
    const data = [
        {
            id: 1,
            nim: '2118103',
            nama: "Ahmad rahadian",
            sks: 20,
            prodi: 'Teknik Informatika',
            fakultas: 'FTI',
            status: 1,
        }
    ]
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between items-end gap-4">
                <div className="w-full lg:w-fit gap-4 flex sm:flex-row flex-col">
                    <Select value={[]} options={[]} label="Tahun akademik" placeholder="Pilih tahun akademik" showLabel
                            size="xs"
                            className="xl:w-[140px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Semester" placeholder="Pilih semester"
                            showLabel
                            size="xs"
                            className="xl:w-[140px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Program studi" placeholder="Pilih program studi"
                            showLabel
                            size="xs"
                            className="xl:w-[140px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Konsentrasi" placeholder="Pilih konsentrasi"
                            showLabel
                            size="xs"
                            className="xl:w-[140px] w-full"
                            onChange={() => {
                            }}/>
                </div>
                <div className="flex gap-4 w-full lg:w-fit">
                    <Button
                        onClick={() => handleOpenModal("add")}
                        size="sm"
                        filled
                        variant="white"
                        className="w-full lg:w-fit"
                    >
                        Validasi yang terpilih
                    </Button><Button
                    onClick={() => handleOpenModal("add")}
                    size="sm"
                    filled
                    className="w-full lg:w-fit"
                >
                    Validasi all
                </Button>
                </div>
            </div>
            <Table
                loading={false}
                columns={columns}
                data={[]}
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
                            <TableBodyRow key={index} selected={isChecked(e?.id)}>
                                <TableBodyCell>
                                    <Checkbox checked={isChecked(e?.id)}
                                              onClick={() => handleCheckboxChange(e?.id)}/>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="">{e?.nim}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="uppercase">{e?.nama}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.sks}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.prodi}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.fakultas}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <div className="flex justify-center items-center">
                                        <Badge size="sm" variant={e?.status === 1 ? "success" : "default"}
                                               filled>{e?.status === 1 ? "Sudah tervalidasi" : "Belum diproses"}</Badge>
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
                title="Tambah data kurikulum"
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
                    </div>
                    <div className="grid grid-cols-3 gap-6 flex-grow">
                        <Select value={[]} options={[]} label="Kode mata kuliah" placeholder="Pilih kode mata kuliah"
                                showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                        <Select value={[]} options={[]} label="Sifat" placeholder="Pilih sifat" showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                        <Select value={[]} options={[]} label="Semester Kurikulum"
                                placeholder="Pilih semester kurikulum"
                                showLabel
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
                title="Perbarui data kurikulum"
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
                    </div>
                    <div className="grid grid-cols-3 gap-6 flex-grow">
                        <Select value={[]} options={[]} label="Kode mata kuliah" placeholder="Pilih kode mata kuliah"
                                showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                        <Select value={[]} options={[]} label="Sifat" placeholder="Pilih sifat" showLabel
                                size="lg"
                                onChange={() => {
                                }}/>
                        <Select value={[]} options={[]} label="Semester Kurikulum"
                                placeholder="Pilih semester kurikulum"
                                showLabel
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
                title="Hapus data kurikulum"
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
export default ProsesKrsMahasiswaPMB