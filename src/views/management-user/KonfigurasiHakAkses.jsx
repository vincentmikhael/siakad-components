"use client"

import {
    Button, Checkbox, DateInput, FormSkeleton,
    IconButton, Input, Modal, Select, Spinner,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow,
    Text
} from "@/components";
import {MagnifyingGlass, PencilSimpleLine, Plus, Trash} from "@phosphor-icons/react";
import {useEffect, useState} from "react";
import {useToast} from "@context/ToastContext";

const KonfigurasiHakAkses = () => {
    const showToast = useToast();
    const [dataUser, setDataUser] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [loadingInitForm, setLoadingInitForm] = useState(false);
    const [loadingDataForm, setLoadingDataForm] = useState(false);
    const [loadingData, setLoadingData] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [formInit, setFormInit] = useState({});
    const [errors, setErrors] = useState();
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const [formData, setFormData] = useState({
        role_id: "",
        nama_aplikasi: "",
        nama_halaman: "",
        start_date: "",
        end_date: "",
        status: 0,
    });

    const resetForm = () => {
        setFormData({
            role_id: "",
            nama_aplikasi: "",
            nama_halaman: "",
            start_date: "",
            end_date: "",
            status: 0,
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

    const handleCheckboxChange = (e) => {
        const {name, checked} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: checked ? 1 : 0,
        }));
    };

    const fetchData = async () => {
        // setLoadingData(true)
        // try {
        //     const response = await AxiosInstance.get(`/prodi/${selectedFakultas}`)
        //     if (response.status === 200) {
        //         setDataUser(response.data.data);
        //         setFilteredData(response.data.data);
        //     }
        // } catch (error) {
        //     console.error(error);
        // } finally {
        //     setLoadingData(false)
        // }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const openAddModal = async () => {
        setEditMode(false);
        setEditId(null);
        setOpenModal(true);
        resetForm();
        // try {
        //     setLoadingInitForm(true);
        //     const response = await AxiosInstance.get("/prodi/form/init");
        //     if (response.status === 200) {
        //         setFormInit(response.data.data);
        //     }
        // } catch (err) {
        //     setErrors(err.errors);
        // } finally {
        //     setLoadingInitForm(false);
        // }
    };

    const openEditModal = async (id) => {
        setEditMode(true);
        setEditId(id)
        setOpenModal(true);
        resetForm();
        setLoadingDataForm(true);
        setLoadingInitForm(true);
        // try {
        //     const detailResponse = await AxiosInstance.get(`/prodi/${selectedFakultas}?id=${id}`);
        //     if (detailResponse.status === 200) {
        //         const data = detailResponse.data.data
        //         setFormData({
        //             nama: data.nama,
        //             nama_en: data.nama_en,
        //             singkatan: data.singkatan,
        //             jenjang: data.jenjang.id,
        //             fakultas: selectedFakultas,
        //             kd_nim: data.kode_nim,
        //             kd_mk: data.kode_mk,
        //             uang_gedung: data.uang_gedung,
        //             ukt: data.ukt,
        //             kaprodi: data.kaprodi?.id,
        //             sekprodi: data.sekprodi?.id
        //         })
        //         console.log(data)
        //     }
        //     const response = await AxiosInstance.get("/prodi/form/init");
        //     if (response.status === 200) {
        //         setFormInit(response.data.data);
        //     }
        // } catch (err) {
        //     console.error("Error fetching data:", err);
        //     setErrors(err.errors);
        // } finally {
        //     setLoadingDataForm(false);
        //     setLoadingInitForm(false);
        // }
    };

    const closeModal = () => setOpenModal(false);

    const columns = [
        {name: "no"},
        {name: "nama halaman", className: "min-w-[240px]"},
        {name: "status", className: "min-w-[148px] text-center"},
        {name: "time start", className: "min-w-[200px]"},
        {name: "time end", className: "min-w-[200px]"},
        {name: "nm_files", className: "w-full text-center"},
        {name: "action", className: "min-w-[132px] text-center"},
    ];
    const data = [
        {
            nama_halaman: "Entri Data Mata Kuliah",
            status: "Enabled",
            time_start: "3/19/2024 1:56:04 AM",
            time_end: "3/19/2034 1:56:04 AM",
            nm_files: "entrimatakuliah.aspx",
        }
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setLoadingSubmit(true)
        // try {
        //     const response = editMode
        //         ? await AxiosInstance.put(`/prodi/${editId}`, (({
        //                                                             fakultas,
        //                                                             ...dataWithoutFakultas
        //                                                         }) => dataWithoutFakultas)(formData))
        //         : await AxiosInstance.post("/prodi", formData);
        //
        //     if (response.status === 200) {
        //         fetchData()
        //         setOpenModal(false);
        //         showToast(`Data berhasil ${editMode ? "diperbarui" : "ditambahkan"}`, `Anda telah berhasil ${editMode ? "memperbarui" : "menambahkan"} data`, "success")
        //         resetForm()
        //     }
        // } catch (err) {
        //     console.log(err)
        //     if (err.status === 422) {
        //         setErrors(err.response.data.errors)
        //     } else {
        //         showToast("Data gagal ditambahkan", "Data baru gagal untuk ditambahkan", "danger")
        //         showToast(`Data gagal ${editMode ? "diperbarui" : "ditambahkan"}`, `Data baru gagal untuk ${editMode ? "diperbarui" : "ditambahkan"}`, "danger")
        //     }
        // } finally {
        //     setLoadingSubmit(false)
        // }
    }
    const handleSearch = e => {
        const keyword = e.target.value.toLowerCase();
        setSearchKeyword(keyword);

        if (!keyword) {
            setFilteredData(dataUser);
            return;
        }

        const filtered = dataUser.filter(
            (item) =>
                item.nama.toLowerCase().includes(keyword) || item.nama_en.toLowerCase().includes(keyword)
        );

        setFilteredData(filtered);
    };
    return (
        <section>
            <div className="flex sm:absolute right-0 top-0 gap-4 w-full md:w-fit">
                <Input
                    size="xs"
                    className="w-full md:w-[156px]"
                    placeholder={"Cari data disini"}
                    onChange={handleSearch}
                    value={searchKeyword}
                    leftIcon={<MagnifyingGlass weight="bold"/>}
                />
                <Button
                    onClick={openAddModal}
                    leftIcon={<Plus weight="bold"/>}
                    size="sm"
                    filled
                    className="w-full md:w-fit"
                >
                    Tambah data
                </Button>
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
                                    <Text size="xs">{e?.nama_halaman}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.status}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs">{e?.time_start}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs">{e?.time_end}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.nm_files}</Text>
                                </TableBodyCell>

                                <TableBodyCell>
                                    <div className="flex flex-row gap-3 justify-center">
                                        <IconButton size="sm" variant="warning" onClick={() => {
                                        }}>
                                            <PencilSimpleLine/>
                                        </IconButton>
                                        <IconButton size="sm" variant="danger"
                                                    onClick={() => {
                                                    }}>
                                            <Trash/>
                                        </IconButton>
                                    </div>
                                </TableBodyCell>
                            </TableBodyRow>
                        );
                    })}
                </TableBody>
            </Table>


            <Modal
                size="lg"
                open={openModal}
                onClose={closeModal}
                title={editMode ? "Perbarui hak akses" : "Tambah hak akses"}
                dismissable
                autoClose
            >
                <Modal.Body>
                    {
                        loadingDataForm ? (
                            <FormSkeleton count={6}/>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-6 gap-6">
                                <div className="col-span-2">
                                    <Select showLabel label="Role ID" options={formInit?.jenjang} labelKey="nama"
                                            valueKey="id"
                                            size="lg" placeholder="Pilih role" name="role_id" onChange={handleChange}
                                            showHint
                                            error={errors?.role_id} value={formData.role_id}/>
                                </div>
                                <div className="col-span-2">
                                    <Select showLabel label="Nama Aplikasi" options={formInit?.jenjang} labelKey="nama"
                                            valueKey="id"
                                            size="lg" placeholder="Pilih nama aplikasi" name="nama_aplikasi"
                                            onChange={handleChange}
                                            showHint
                                            error={errors?.nama_aplikasi} value={formData.nama_aplikasi}/>
                                </div>
                                <div className="col-span-2">
                                    <Select showLabel label="Nama halaman" options={formInit?.jenjang} labelKey="nama"
                                            valueKey="id"
                                            size="lg" placeholder="Pilih nama halaman" name="nama_halaman"
                                            onChange={handleChange}
                                            showHint
                                            error={errors?.nama_halaman} value={formData.nama_halaman}/>
                                </div>
                                <div className="col-span-3">
                                    <DateInput label="Start akses" size="lg" showLabel placeholder="Date"
                                               name="start_date"
                                               onChange={handleChange} value={formData.start_date}/>
                                </div>
                                <div className="col-span-3">
                                    <DateInput label="End akses" size="lg" showLabel placeholder="Date" name="end_date"
                                               onChange={handleChange} value={formData.end_date}/>
                                </div>
                                <Checkbox label="Status" showLabel name="status"
                                          checked={formData.status === 1}
                                          onChange={handleCheckboxChange}>
                                    Active</Checkbox>
                            </div>
                        )
                    }
                </Modal.Body>
                <Modal.Footer>
                    <div className="gap-4 flex flex-row">
                        <Button variant="primary" size="md" filled onClick={handleSubmit}>
                            {loadingSubmit ? <Spinner size={16}/> : editMode ? "Perbarui" : "Tambah"}
                        </Button>
                        <Button variant="white" size="md" filled onClick={closeModal}>
                            Batal
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </section>
    )
}

export default KonfigurasiHakAkses