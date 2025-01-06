"use client"

import {useState} from "react";
import {
    Badge,
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

export default function EntriPraYudisium() {
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
        {name: "no"},
        {name: "nim"},
        {name: "nama"},
        {name: "IPK"},
        {name: "user entry"},
        {name: "pra yudisium"},
        {name: "actions"},
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
                            className="xl:w-[92px] w-full"
                            onChange={() => {
                            }}/>

                    <Select value={[]} options={[]} label="Program studi"
                            showLabel
                            size="xs"
                            className="xl:w-[96px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Konsentrasi" placeholder="Pilih konsentrasi"
                            showLabel
                            size="xs"
                            className="xl:w-[96px] w-full"
                            onChange={() => {
                            }}/>
                            <Select value={[]} options={[]} label="Periode" placeholder="Pilih periode"
                            showLabel
                            size="xs"
                            className="xl:w-[96px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Tahun wisuda" placeholder="Pilih tahun wisuda"
                            showLabel
                            size="xs"
                            className="xl:w-[96px] w-full"
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
                                        <Badge filled variant="default">{e?.tanggal}</Badge>
                                </TableBodyCell>
                                <TableBodyCell>
                                <div className="flex flex-row gap-3">
                                        <IconButton size="sm" variant="warning">
                                            <PencilSimpleLine/>
                                        </IconButton>
                                        <IconButton size="sm" variant="danger">
                                            <Trash />
                                        </IconButton>
                                    </div>
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
                title={"Tambah data pra yudisium"}
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
                                    <Select label="Angkatan"
                                            showLabel placeholder="pilih angkatan" labelKey="nama"
                                            valueKey="id"/>
                                </div>
                                <div className={`col-span-12 md:col-span-6 ${editId ? 'hidden' : ''}`}>
                                    <Select label="Mahasiswa" showLabel
                                            placeholder="Pilih mahasiswa" labelKey="nama"
                                            valueKey="id"/>
                                </div>
                                <div className={`col-span-12 md:col-span-6 ${editId ? 'hidden' : ''}`}>
                                    <Input label="SKS ditempuh" placeholder="Tulis SKS yang ditempuh" showLabel/>
                                </div>
                                <div className={`col-span-12 md:col-span-6 ${editId ? 'hidden' : ''}`}>
                                     <Input label="IPK" placeholder="Tulis IPK" showLabel/>
                                </div>
                                <div className={`col-span-12 md:col-span-6 ${editId ? 'hidden' : ''}`}>
                                     <Input label="Jumlah nilai E" placeholder="Tulis jumlah nilai E" showLabel/>
                                     <Text size="sm" opacity={50} className={"mt-2"}>= 0 (Tidak ada nilai E)</Text>
                                </div>
                                <div className={`col-span-12 md:col-span-6 ${editId ? 'hidden' : ''}`}>
                                     <Input label="Prosentase nilai D (%)" placeholder="Tulis prosentase nilai D" showLabel/>
                                     <Text size="sm" opacity={50} className={"mt-2"}>{"> 20%"}</Text>
                                </div>

                                <div className="col-span-12">
                                    <Textarea label="Judul skripsi" showLabel placeholder="Tulis judul skripsi"/>
                                    <Text size="sm" opacity={50} className={"mt-2"}>(Wajib ada judul. Jika kosong, entri dahulu pada menu Entri Skripsi/TA Mahasiswa di Aplikasi Data Utama)</Text>
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
