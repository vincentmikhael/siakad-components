"use client"

import {useEffect, useState} from "react";
import AxiosInstance from "@/libs/AxiosInstance";
import {
    Button, FormSkeleton, IconButton,
    Input, Modal, NotFoundRow, SearchInput, Select, Spinner,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow, Text
} from "@/components";
import {useToast} from "@/context/ToastContext";
import {MagnifyingGlass, Plus, PencilSimpleLine, Trash} from "@phosphor-icons/react";

const Prodi = ({listFakultas}) => {
    const firstData = listFakultas[0]
    const [selectedFakultas, setSelectedFakultas] = useState(firstData?.id);
    const showToast = useToast();
    const [dataProdi, setDataProdi] = useState(null);
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
        nama: "",
        nama_en: "",
        singkatan: "",
        jenjang: "",
        fakultas: selectedFakultas,
        kd_nim: "",
        kd_mk: "",
        uang_gedung: "",
        ukt: "",
        kaprodi: "",
        sekprodi: ""
    });

    const resetForm = () => {
        setFormData({
            nama: "",
            nama_en: "",
            singkatan: "",
            jenjang: "",
            fakultas: selectedFakultas,
            kd_nim: "",
            kd_mk: "",
            uang_gedung: "",
            ukt: "",
            kaprodi: "",
            sekprodi: ""
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

    const fetchData = async () => {
        setLoadingData(true)
        try {
            const response = await AxiosInstance.get(`/prodi/${selectedFakultas}`)
            if (response.status === 200) {
                setDataProdi(response.data.data);
                setFilteredData(response.data.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingData(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [selectedFakultas]);

    const handleFakultasChange = (e) => {
        setSelectedFakultas(e.target.value)
    };

    const openAddModal = async () => {
        setEditMode(false);
        setEditId(null);
        setOpenModal(true);
        resetForm();
        try {
            setLoadingInitForm(true);
            const response = await AxiosInstance.get("/prodi/form/init");
            if (response.status === 200) {
                setFormInit(response.data.data);
            }
        } catch (err) {
            setErrors(err.errors);
        } finally {
            setLoadingInitForm(false);
        }
    };

    const openEditModal = async (id) => {
        setEditMode(true);
        setEditId(id)
        setOpenModal(true);
        resetForm();
        setLoadingDataForm(true);
        setLoadingInitForm(true);
        try {
            const detailResponse = await AxiosInstance.get(`/prodi/${selectedFakultas}?id=${id}`);
            if (detailResponse.status === 200) {
                const data = detailResponse.data.data
                setFormData({
                    nama: data.nama,
                    nama_en: data.nama_en,
                    singkatan: data.singkatan,
                    jenjang: data.jenjang.id,
                    fakultas: selectedFakultas,
                    kd_nim: data.kode_nim,
                    kd_mk: data.kode_mk,
                    uang_gedung: data.uang_gedung,
                    ukt: data.ukt,
                    kaprodi: data.kaprodi?.id,
                    sekprodi: data.sekprodi?.id
                })
                console.log(data)
            }
            const response = await AxiosInstance.get("/prodi/form/init");
            if (response.status === 200) {
                setFormInit(response.data.data);
            }
        } catch (err) {
            console.error("Error fetching data:", err);
            setErrors(err.errors);
        } finally {
            setLoadingDataForm(false);
            setLoadingInitForm(false);
        }
    };

    const closeModal = () => setOpenModal(false);

    const columns = [
        {name: "no"},
        {name: "kode", className: "w-[84px]"},
        {name: "nama prodi", className: "w-[160px]"},
        {name: "ketua prodi", className: "w-[200px]"},
        {name: "sekretaris prodi", className: "w-[200px]"},
        {name: "actions"},
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadingSubmit(true)
        try {
            const response = editMode
                ? await AxiosInstance.put(`/prodi/${editId}`, (({
                                                                    fakultas,
                                                                    ...dataWithoutFakultas
                                                                }) => dataWithoutFakultas)(formData))
                : await AxiosInstance.post("/prodi", formData);

            if (response.status === 200) {
                fetchData()
                setOpenModal(false);
                showToast(`Data berhasil ${editMode ? "diperbarui" : "ditambahkan"}`, `Anda telah berhasil ${editMode ? "memperbarui" : "menambahkan"} data`, "success")
                resetForm()
            }
        } catch (err) {
            console.log(err)
            if (err.status === 422) {
                setErrors(err.response.data.errors)
            } else {
                showToast("Data gagal ditambahkan", "Data baru gagal untuk ditambahkan", "danger")
                showToast(`Data gagal ${editMode ? "diperbarui" : "ditambahkan"}`, `Data baru gagal untuk ${editMode ? "diperbarui" : "ditambahkan"}`, "danger")
            }
        } finally {
            setLoadingSubmit(false)
        }
    }
    const handleSearch = e => {
        const keyword = e.target.value.toLowerCase();
        setSearchKeyword(keyword);

        if (!keyword) {
            setFilteredData(dataProdi);
            return;
        }

        const filtered = dataProdi.filter(
            (item) =>
                item.nama.toLowerCase().includes(keyword) || item.nama_en.toLowerCase().includes(keyword)
        );

        setFilteredData(filtered);
    };

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <div className="w-full md:w-fit">
                    <Select value={selectedFakultas} options={listFakultas} label="Fakultas" showLabel size="xs"
                            className="md:w-52 w-full"
                            labelKey="nama"
                            valueKey="id"
                            onChange={handleFakultasChange}/>
                </div>
                <div className="flex gap-4 w-full md:w-fit">
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
                    {filteredData?.length === 0 ? (
                        <NotFoundRow colSpan={columns.length}/>
                    ) : (
                        filteredData?.map((prodi, index) => (
                                <TableBodyRow key={index}>
                                    <TableBodyCell>
                                        <Text size="xs">{index + 1}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs">{prodi?.id}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex flex-col gap-1">
                                                <Text size="xs">{prodi?.nama}</Text>
                                            </div>
                                        </div>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <div className="flex flex-col gap-1">
                                            <Text size="xs">{prodi?.kaprodi?.nama}</Text>
                                            <Text size="xs" color="text-gray-50">
                                                {prodi?.kaprodi?.kdNip} {prodi?.kaprodi?.nip}
                                            </Text>
                                        </div>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <div className="flex flex-col gap-1">
                                            <Text size="xs">{prodi?.sekprodi?.nama}</Text>
                                            <Text size="xs" color="text-gray-50">
                                                {prodi?.sekprodi?.kdNip} {prodi?.sekprodi?.nip}
                                            </Text>
                                        </div>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <div className="flex flex-row gap-3">
                                            <IconButton size="sm" variant="warning"
                                                        onClick={() => openEditModal(prodi?.id)}>
                                                <PencilSimpleLine/>
                                            </IconButton>
                                            <IconButton size="sm" variant="danger">
                                                <Trash/>
                                            </IconButton>
                                        </div>
                                    </TableBodyCell>
                                </TableBodyRow>
                            )
                        ))}
                </TableBody>
            </Table>
            {/*Modal Add*/}
            <Modal
                size="lg"
                open={openModal}
                onClose={closeModal}
                title={editMode ? "Perbarui data prodi" : "Tambah data Prodi"}
                dismissable
                autoClose
            >
                <Modal.Body>
                    {
                        loadingDataForm ? (

                            <FormSkeleton count={8}/>
                        ) : (

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Input
                                    placeholder="Tulis nama prodi"
                                    size="lg"
                                    label="Nama prodi"
                                    showLabel
                                    name="nama"
                                    onChange={handleChange}
                                    showHint
                                    error={errors?.nama}
                                    value={formData.nama}
                                />
                                <Input
                                    placeholder="Tulis nama prodi (EN)"
                                    size="lg"
                                    label="Nama prodi (EN)"
                                    showLabel
                                    name="nama_en"
                                    onChange={handleChange}
                                    showHint
                                    error={errors?.nama_en}
                                    value={formData.nama_en}
                                />
                                <Input
                                    placeholder="Tulis singkatan prodi"
                                    size="lg"
                                    label="Singkatan prodi"
                                    showLabel
                                    name="singkatan"
                                    onChange={handleChange}
                                    showHint
                                    error={errors?.singkatan}
                                    value={formData.singkatan}
                                />
                                <Select showLabel label="Jenjang" options={formInit.jenjang} labelKey="nama"
                                        valueKey="id"
                                        size="lg" placeholder="Pilih jenjang" name="jenjang" onChange={handleChange}
                                        showHint
                                        error={errors?.jenjang} value={formData.jenjang}/>
                                <Input
                                    placeholder="Tulis jumlah UKT"
                                    size="lg"
                                    label="Jumlah UKT"
                                    showLabel
                                    name="ukt"
                                    onChange={handleChange}
                                    showHint
                                    error={errors?.ukt}
                                    value={formData.ukt}
                                />
                                <Input
                                    placeholder="Tulis uang gedung"
                                    size="lg"
                                    label="Jumlah uang gedung"
                                    showLabel
                                    name="uang_gedung"
                                    onChange={handleChange}
                                    showHint
                                    error={errors?.uang_gedung}
                                    value={formData.uang_gedung}
                                />
                                <Input
                                    placeholder="Tulis kode mata kuliah"
                                    size="lg"
                                    label="Kode mata kuliah"
                                    showLabel
                                    name="kd_mk"
                                    onChange={handleChange}
                                    showHint
                                    error={errors?.kd_mk}
                                    value={formData.kd_mk}
                                />
                                <Input
                                    placeholder="Tulis kode NIM"
                                    size="lg"
                                    label="Kode NIM"
                                    showLabel
                                    name="kd_nim"
                                    onChange={handleChange}
                                    showHint
                                    error={errors?.kd_nim}
                                    value={formData.kd_nim}
                                />
                                <div className="sm:col-span-2">
                                    <SearchInput options={formInit.dosen} label="Nama ketua prodi"
                                                 placeholder="Tulis NIP ketua prodi" showLabel size="lg" name="kaprodi"
                                                 labelKey="nama_lengkap" valueKey="id" keywordKey="nip"
                                                 onChange={handleChange} loading={loadingInitForm}
                                                 showHint
                                                 error={errors?.kaprodi} value={formData.kaprodi}/>
                                </div>
                                <div className="sm:col-span-2">
                                    <SearchInput options={formInit.dosen} label="Nama sekretaris prodi"
                                                 placeholder="Tulis NIP sekretaris prodi" showLabel size="lg"
                                                 name="sekprodi"
                                                 labelKey="nama_lengkap" valueKey="id" keywordKey="nip"
                                                 onChange={handleChange} loading={loadingInitForm}
                                                 showHint
                                                 error={errors?.sekprodi} value={formData.sekprodi}/>
                                </div>
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
        </>
    );
}
export default Prodi