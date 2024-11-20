"use client"

import {useState} from "react";
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

const Kurikulum = () => {
    const [activeModal, setActiveModal] = useState(null);

    const handleOpenModal = (modal) => setActiveModal(modal);

    const handleCloseModal = () => setActiveModal(null);

    const columns = [
        {name: "no", className: "min-w-14"},
        {name: "kode mk", className: "min-w-[100px] text-center"},
        {name: "nama mata kuliah", className: "min-w-[260px]"},
        {name: "semester kurikulum", className: "min-w-[174px] text-center"},
        {name: "sifat", className: "min-w-[120px] text-center"},
        {name: "sks", className: "min-w-[60px] text-center"},
        {name: "tahun kurikulum", className: "min-w-[150px] text-center"},
        {name: "user entri", className: "min-w-[170px] text-center"},
        {name: "actions", className: "min-w-[124px]  text-center"},
    ];
    const pinnedColumns = [0, 1, 2]
    const data = [
        {
            kode: '001',
            mk: "pendidikan agama islam",
            semester: 1,
            sifat: 'Wajib',
            sks: 2,
            tahun: 2019,
            user: 'SIM'
        }
    ]
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between items-end gap-4">
                <div className="w-full lg:w-fit gap-4 flex sm:flex-row flex-col">
                    <Select value={[]} options={[]} label="Sifat" placeholder="Pilih sifat" showLabel
                            size="xs"
                            className="xl:w-[148px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Semester kurikulum" placeholder="Pilih semester kurikulum"
                            showLabel
                            size="xs"
                            className="xl:w-[180px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Tahun kurikulum" placeholder="Pilih tahun kurikulum"
                            showLabel
                            size="xs"
                            className="xl:w-[180px] w-full"
                            onChange={() => {
                            }}/>
                </div>
                <div className="flex gap-4 w-full lg:w-fit">
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
                                    <Text size="xs" className="text-center">{e?.semester}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.sifat}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.sks}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.tahun}</Text>
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
export default Kurikulum