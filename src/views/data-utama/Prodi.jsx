"use client"

import {useState} from "react";
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import AxiosInstance from "@/libs/AxiosInstance";
import {
    BottomDrawer,
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
import {MagnifyingGlass, Plus, PencilSimpleLine, Trash, FadersHorizontal} from "@phosphor-icons/react";

const fetchProdi = async (selectedFakultas) => {
    const response = await AxiosInstance.get(`/prodi/${selectedFakultas}`);
    if (response.status !== 200) throw new Error("Failed to fetch data");
    return response.data.data;
};

const fetchFormInit = async () => {
    const response = await AxiosInstance.get("/prodi/form/init");
    if (response.status !== 200) throw new Error("Failed to fetch data");
    return response.data.data;
}

const Prodi = ({listFakultas}) => {
    const firstData = listFakultas[0]
    const [selectedFakultas, setSelectedFakultas] = useState(firstData?.id);
    const showToast = useToast();
    //drawer
    const [openDrawer, setOpenDrawer] = useState(false);
    const [filterFakultas, setFilterFakultas] = useState(firstData?.id);
    //
    const queryClient = useQueryClient();
    const staleTime = 1000 * 60 * 5;
    const {data: dataProdi, isLoading} = useQuery({
        queryKey: ["prodi", selectedFakultas],
        queryFn: () => fetchProdi(selectedFakultas),
        staleTime
    });

    const {data: formInit, isLoading: loadingInitForm} = useQuery({
        queryKey: ["prodi", "form-init"],
        queryFn: fetchFormInit,
        staleTime
    })

    const [searchKeyword, setSearchKeyword] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [loadingDataForm, setLoadingDataForm] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
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

    // mutasi untuk menambah data
    const addMutation = useMutation({
        mutationFn: async (newProdi) => {
            setLoadingSubmit(true)
            const response = await AxiosInstance.post("/prodi", newProdi);
            if (response.status !== 200) throw new Error("Gagal menambah data");
            return response.data.data;
        },
        onSuccess: (newProdi) => {
            setOpenModal(false);
            queryClient.setQueryData(["prodi", selectedFakultas], (oldData) => {
                return [...oldData, newProdi];
            });
            showToast("Data berhasil ditambahkan", "Anda telah berhasil menambahkan data", "success");
        },
        onError: (err) => {
            if (err.response.data.errors) {
                setErrors(err.response.data.errors)
            } else {
                showToast("Data gagal ditambahkan", "Data baru gagal untuk ditambahkan", "danger");
            }
        },
        onSettled: () => {
            setLoadingSubmit(false)
        },
    });

    // mutasi untuk mengedit data
    const editMutation = useMutation({
        mutationFn: async (updatedProdi) => {
            setLoadingSubmit(true)
            const response = await AxiosInstance.put(`/prodi/${editId}`, updatedProdi);
            if (response.status !== 200) throw new Error("Gagal memperbarui data");
            return response.data.data;
        },
        onSuccess: (updatedProdi) => {
            setOpenModal(false);
            queryClient.setQueryData(["prodi", selectedFakultas], (oldData) => {
                return oldData.map((prodi) =>
                    prodi.id === updatedProdi.id ? updatedProdi : prodi
                );
            });
            showToast("Data berhasil diperbarui", "Anda telah berhasil memperbarui data", "success");
        },
        onError: (err) => {
            if (err.response.data.errors) {
                setErrors(err.response.data.errors)
            } else {
                showToast("Data gagal diperbarui", "Data gagal untuk diperbarui", "danger");
            }
        },
        onSettled: () => {
            setLoadingSubmit(false)
        },
    });

    const filteredData = dataProdi?.filter(
        (item) =>
            item.nama.toLowerCase().includes(searchKeyword) ||
            item.nama_en.toLowerCase().includes(searchKeyword)
    );

    const handleFakultasChange = (e) => {
        setSelectedFakultas(e.target.value)
    };

    //filter drawer
    const handleApplyFilter = () => {
        setSelectedFakultas(filterFakultas);
        setOpenDrawer(false);
    };

    // clear filter
    const handleClearFilter = () => {
        setFilterFakultas(firstData?.id);
        setSelectedFakultas(firstData?.id);
        setOpenDrawer(false);
    };

    const openAddModal = async () => {
        setEditMode(false);
        setEditId(null);
        setOpenModal(true);
        resetForm();
    };

    const openEditModal = async (id) => {
        setEditMode(true);
        setEditId(id)
        setOpenModal(true);
        resetForm();
        setLoadingDataForm(true);
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
            }
        } catch (err) {
            console.error("Error fetching data:", err);
            setErrors(err.errors);
        } finally {
            setLoadingDataForm(false);
        }
    };

    const closeModal = () => setOpenModal(false);

    const columns = [
        {name: "no"},
        {name: "kode", className: "w-[84px]"},
        {name: "nama prodi", className: "w-[160px]"},
        {name: "ketua prodi", className: "w-[200px]"},
        {name: "sekretaris prodi", className: "w-[200px]"},
        {name: "actions", className: "text-center"},
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            const {fakultas, ...dataWithoutFakultas} = formData;
            editMutation.mutate(dataWithoutFakultas);
        } else {
            addMutation.mutate(formData);
        }
    };

    const handleSearch = (e) => {
        setSearchKeyword(e.target.value.toLowerCase());
    };

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <div className="w-full lg:w-fit hidden lg:flex gap-4">
                    <Select value={selectedFakultas} options={listFakultas} label="Fakultas" showLabel size="xs"
                            className="lg:w-52 w-full"
                            labelKey="nama"
                            valueKey="id"
                            onChange={handleFakultasChange}/>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-4 w-full lg:w-fit">
                    <Input
                        size="xs"
                        className="w-full lg:w-[156px]"
                        placeholder={"Cari data disini"}
                        onChange={handleSearch}
                        value={searchKeyword}
                        leftIcon={<MagnifyingGlass weight="bold"/>}
                    />
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
                        <BottomDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} onApply={handleApplyFilter}
                                      onClear={handleClearFilter}>
                            <Select value={filterFakultas} options={listFakultas} label="Fakultas" showLabel size="lg"
                                    labelKey="nama"
                                    valueKey="id"
                                    onChange={(e) => setFilterFakultas(e.target.value)}
                                    menuClass="max-h-28"/>
                        </BottomDrawer>
                        <Button
                            onClick={openAddModal}
                            leftIcon={<Plus weight="bold"/>}
                            size="sm"
                            filled
                            className="w-fit"
                        >
                            Tambah data
                        </Button>
                    </div>
                </div>
            </div>
            <Table
                loading={isLoading}
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
                                        <div className="flex flex-row gap-3 justify-center">
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
                title={editMode ? "Perbarui data prodi" : "Tambah data prodi"}
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
                                <Select showLabel label="Jenjang" options={formInit?.jenjang} labelKey="nama"
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
                                    <SearchInput options={formInit?.dosen} label="Nama ketua prodi"
                                                 placeholder="Tulis NIP ketua prodi" showLabel size="lg" name="kaprodi"
                                                 labelKey="nama_lengkap" valueKey="id" keywordKey="nip"
                                                 onChange={handleChange} loading={loadingInitForm}
                                                 showHint
                                                 error={errors?.kaprodi} value={formData.kaprodi}/>
                                </div>
                                <div className="sm:col-span-2">
                                    <SearchInput options={formInit?.dosen} label="Nama sekretaris prodi"
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