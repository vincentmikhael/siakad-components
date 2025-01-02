"use client"

import {useState} from "react";
import {
    Button, DateInput, FormSkeleton, IconButton,
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

export default function EntriPkn() {
    const [openModal, setOpenModal] = useState(false);
    const [loadingDataForm, setLoadingDataForm] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [errors, setErrors] = useState();
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);

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

    const resetForm = () => {
        setFormData({
            fakultas: "",
            jurusan: "",
            prodi: "",
            kode_mk: "",
            semester: "",
            tahun_akademik: "",
            jenis_ujian: "",
            hari_tgl: "",
            jam: "",
        })
        setErrors({})
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const openAddModal = async () => {
        setEditMode(false);
        setEditId(null);
        setOpenModal(true);
        // resetForm();
        try {
            // setLoadingInitForm(true);
            const response = await AxiosInstance.get("/prodi/form/init");
            if (response.status === 200) {
                // setFormInit(response.data.data);
            }
        } catch (err) {
            setErrors(err.errors);
        } finally {
            // setLoadingInitForm(false);
        }
    };

    const openEditModal = async (id) => {
        setEditMode(true);
        setEditId(id)
        setOpenModal(true);
    };

    const closeModal = () => setOpenModal(false);


    const columns = [
        {name: "no", className: "min-w-14"},
        {name: "nim", className: "min-w-[100px] text-center"},
        {name: "nama", className: "min-w-[316px]"},
        {name: "judul pkn", className: "max-w-[120px] text-center"},
        {name: "pembimbing 1", className: "min-w-[180px] text-center"},
        {name: "pembimbing 2", className: "min-w-[120px] text-center"},
        {name: "tanggal lulus", className: "max-w-[120px] text-center"},
    ];
    const data = [
        {
            nim: "2118110",
            nama: "Lorem ipsum",
            judul: "Lorem ipsum sit dolor amet, que toro sue",
            jam: "lorem",
            tanggal: "lorem",
            ujian: "10 Dec 2024",
        },
        {
            nim: "2118110",
            nama: "Lorem ipsum",
            judul: "Lorem ipsum sit dolor amet, que toro sue",
            jam: "lorem",
            tanggal: "lorem",
            ujian: "10 Dec 2024",
        },
    ]
    return (
        <>
            <div className="flex my-5 flex-col lg:flex-row justify-between items-end gap-4">
                <div className="w-full lg:w-fit gap-4 flex sm:flex-row flex-col">
                    <Select value={[]} options={[]} label="Fakultas" showLabel
                            size="xs"
                            className="xl:w-[92px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Jurusan"
                            showLabel
                            size="xs"
                            className="xl:w-[124px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Program studi"
                            showLabel
                            size="xs"
                            className="xl:w-[124px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Semester" placeholder="Pilih semester"
                            showLabel
                            size="xs"
                            className="xl:w-[96px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Tahun akademik" placeholder="Pilih tahun akademik"
                            showLabel
                            size="xs"
                            className="xl:w-[140px] w-full"
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
                        onClick={openAddModal}
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
                                    <Text size="xs" className="text-center">{e?.nim}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="uppercase">{e?.nama}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.judul}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.jam}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.tanggal}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.ujian}</Text>
                                </TableBodyCell>
               
                            </TableBodyRow>
                        );
                    })}
                </TableBody>
            </Table>
            <Pagination/>
            {/*Modal*/}
            <Modal
                size="lg"
                open={openModal}
                onClose={closeModal}
                title={"Tambah data PKN"}
                dismissable
                autoClose
            >
                <Modal.Body>
                    {
                        loadingDataForm ? (
                            <FormSkeleton count={8}/>
                        ) : (
                            <div className="grid grid-cols-12 gap-4">
                                <div className={`col-span-12 md:col-span-6 ${editId ? 'hidden' : ''}`}>
                                    <Select label="Fakultas"
                                            showLabel placeholder="pilih fakultas" labelKey="nama"
                                            valueKey="id"/>
                                </div>
                                <div className={`col-span-12 md:col-span-6 ${editId ? 'hidden' : ''}`}>
                                    <Select label="Jurusan" showLabel
                                            placeholder="pilih jurusan" labelKey="nama"
                                            valueKey="id"/>
                                </div>
                                <div className={`col-span-12 md:col-span-4 ${editId ? 'hidden' : ''}`}>
                                    <Select label="Program studi" showLabel
                                            placeholder="pilih program studi" labelKey="nama"
                                            valueKey="id"/>
                                </div>
                                <div className={`col-span-12 md:col-span-4 ${editId ? 'hidden' : ''}`}>
                                    <Select label="Semester" showLabel
                                            placeholder="pilih semester" labelKey="nama"
                                            valueKey="id"/>
                                </div>
                                <div className={`col-span-12 md:col-span-4 ${editId ? 'hidden' : ''}`}>
                                    <Select label="Tahun akademik" showLabel
                                            placeholder="pilih tahun akademik" labelKey="nama"
                                            valueKey="id"/>
                                </div>
                                <div className={`col-span-12 md:col-span-6 ${editId ? 'hidden' : ''}`}>
                                    <Select label="Mahasiswa" showLabel
                                            placeholder="pilih mahasiswa" labelKey="nama"
                                            valueKey="id"/>
                                </div>
                                <div className={`col-span-12 md:col-span-6 ${editId ? 'hidden' : ''}`}>
                                    <Select label="Nim" showLabel
                                            placeholder="nim" labelKey="nama"
                                            valueKey="id"/>
                                </div>
                                <div className={`col-span-12 ${editId ? 'hidden' : ''}`}>
                                    <Textarea label="Judul PKN" showLabel placeholder="Judul"/>
                                </div>
                                <div className={`col-span-12 md:col-span-6 ${editId ? 'hidden' : ''}`}>
                                    <Select label="Pembimbing 1" showLabel
                                            placeholder="pilih pembimbing 1" labelKey="nama"
                                            valueKey="id"/>
                                </div>
                                <div className={`col-span-12 md:col-span-6 ${editId ? 'hidden' : ''}`}>
                                    <Select label="Pembimbing 2" showLabel
                                            placeholder="pilih pembimbing 2" labelKey="nama"
                                            valueKey="id"/>
                                </div>
                                <div className={`col-span-12 md:col-span-6 ${editId ? 'hidden' : ''}`}>
                                    <DateInput label="Tanggal lulus" showLabel/>
                                </div>
                            </div>
                        )
                    }
                </Modal.Body>
                <Modal.Footer>
                    <div className="gap-4 flex flex-row">
                        <Button variant="primary" size="md" filled>
                            {loadingSubmit ? <Spinner size={16}/> : editMode ? "Perbarui" : "Tambah"}
                        </Button>
                        <Button variant="white" size="md" filled onClick={closeModal}>
                            Batal
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
