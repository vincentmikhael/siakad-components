"use client"

import {useEffect, useState} from "react";
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import AxiosInstance from "@/libs/AxiosInstance";
import {
    BottomDrawer,
    Button, FormSkeleton, Hr, IconButton,
    Input, Modal, NotFoundRow, Pagination, SearchInput, Select, Spinner,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow, Text, Toggle
} from "@/components";
import {useToast} from "@/context/ToastContext";
import {MagnifyingGlass, Plus, PencilSimpleLine, FadersHorizontal} from "@phosphor-icons/react";
import usePagination from "@hooks/usePagination";
import useFormValidation from "@hooks/useFormValidation";

const fetchProdi = async (selectedFakultas) => {
    try {
        const response = await AxiosInstance.get(`/prodi/${selectedFakultas}`);
        return response.data.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return null;
        }
        throw error;
    }
};

const fetchFormInit = async () => {
    try {
        const response = await AxiosInstance.get("/prodi/form/init");
        return response.data.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return null;
        }
        throw error;
    }
}

const Prodi = ({listInit}) => {
    const showToast = useToast();
    //filter & drawer
    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedFakultas, setSelectedFakultas] = useState(listInit[0]?.id);
    const [filterFakultas, setFilterFakultas] = useState(listInit[0]?.id);
    //
    const setInitFilter = () => {
        const firstItemFakultas = listInit[0]?.id;
        setSelectedFakultas(firstItemFakultas);
        setFilterFakultas(firstItemFakultas);
    }
    useEffect(() => {
        if (listInit.length > 0) {
            setInitFilter()
        }
    }, [listInit]);

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
        enabled: openModal,
        queryFn: fetchFormInit,
        staleTime
    })

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

    const useDataMutation = ({method, url, successTitle, successMessage, errorTitle, errorMessage}) => {
        return useMutation({
            mutationFn: async (data) => {
                setLoadingSubmit(true)
                const response = await AxiosInstance[method](url, data);
                if (response.status !== 200) throw new Error(errorTitle);
                return response.data.data;
            },
            onSuccess: async () => {
                await queryClient.invalidateQueries(["prodi", selectedFakultas]);
                setOpenModal(false);
                showToast(successTitle, successMessage, "success");
            },
            onError: (err) => {
                if (err.response.data.errors.message) {
                    showToast(errorTitle, err.response.data.errors.message, "danger");
                } else if (err.response.data.errors) {
                    setErrors(err.response.data.errors)
                } else {
                    showToast(errorTitle, errorMessage, "danger");
                }
            },
            onSettled: () => {
                setLoadingSubmit(false)
            },
        })
    }
    // mutasi untuk menambah data
    const addMutation = useDataMutation({
        method: "post",
        url: "/prodi",
        successTitle: "Data berhasil ditambahkan",
        successMessage: "Anda telah berhasil menambahkan data baru",
        errorTitle: "Data gagal ditambahkan",
        errorMessage: "Data gagal untuk ditambahkan"
    });

    // mutasi untuk mengedit data
    const editMutation = useDataMutation({
        method: "put",
        url: `/prodi/${editId}`,
        successTitle: "Data berhasil diperbarui",
        successMessage: "Anda telah berhasil memperbarui data",
        errorTitle: "Data gagal diperbarui",
        errorMessage: "Data gagal untuk diperbarui"
    });

    const editStatus = useDataMutation({
        method: "put",
        url: `/prodi/status/${editId}`,
        successTitle: "Status berhasil diperbarui",
        successMessage: "Anda telah berhasil memperbarui status",
        errorTitle: "Status gagal diperbarui",
        errorMessage: "status gagal untuk diperbarui"
    });

    const filteredData = dataProdi?.filter(
        (item) =>
            item.nama.toLowerCase().includes(searchKeyword) ||
            item.nama_en.toLowerCase().includes(searchKeyword)
    );

    const {paginatedData, currentPage, totalPages, handlePageChange} = usePagination(filteredData, 10)
    //disable button submit
    const requiredFields = ["nama", "nama_en", "singkatan", "jenjang", "ukt", "uang_gedung", "kd_nim"];
    const isFormIncomplete = useFormValidation(formData, requiredFields);
    //
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
        setInitFilter()
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
        {name: "kode", className: "min-w-[84px]"},
        {name: "nama prodi", className: "min-w-[160px]"},
        {name: "ketua prodi", className: "min-w-[200px]"},
        {name: "sekretaris prodi", className: "min-w-[200px]"},
        {name: "status", className: "min-w-[80px] text-center"},
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

    const handleChangeStatus = (id, isChecked) => {
        const newStatus = isChecked ? 1 : 0;
        setEditId(id);
        editStatus.mutate({status: newStatus});
    };
    return (
        <>
            <div className="flex flex-col justify-between gap-4">
                <div className="md:flex hidden gap-4">
                    <Select value={selectedFakultas} options={listInit} label="Fakultas" showLabel size="xs"
                            labelKey="nama"
                            valueKey="id"
                            onChange={handleFakultasChange}/>
                </div>
                <Hr className="hidden md:block"/>
                <div className="flex flex-col md:flex-row gap-6 sm:gap-4 justify-between">
                    <Input
                        size="xs"
                        className="w-full md:w-2/5"
                        placeholder="Cari data disini"
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
                            className="w-fit md:hidden"
                            variant="white"
                        >
                            Filter
                        </Button>
                        <BottomDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} onApply={handleApplyFilter}
                                      onClear={handleClearFilter}>
                            <Select value={filterFakultas} options={listInit} label="Fakultas" showLabel size="lg"
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
                    {paginatedData?.length > 0 ? (
                        paginatedData?.map((prodi, index) => (
                            <TableBodyRow key={index}>
                                <TableBodyCell>
                                    <Text size="xs">
                                        {index + 1 + (currentPage - 1) * 10}
                                    </Text>
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
                                    <div className="flex justify-center">
                                        <Toggle checked={prodi?.status === "1"}
                                                onChange={(isChecked) => handleChangeStatus(prodi?.id, isChecked)}/>
                                    </div>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <div className="flex flex-row gap-3 justify-center">
                                        <IconButton size="sm" variant="warning"
                                                    onClick={() => openEditModal(prodi?.id)}>
                                            <PencilSimpleLine/>
                                        </IconButton>
                                    </div>
                                </TableBodyCell>
                            </TableBodyRow>
                        ))
                    ) : (
                        <NotFoundRow colSpan={columns.length}/>
                    )}
                </TableBody>
            </Table>
            <Pagination currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}/>
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
                        loadingDataForm || loadingInitForm ? (
                            <FormSkeleton count={12} cols={2}/>
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
                                                 onChange={handleChange}
                                                 showHint
                                                 error={errors?.kaprodi} value={formData.kaprodi}/>
                                </div>
                                <div className="sm:col-span-2">
                                    <SearchInput options={formInit?.dosen} label="Nama sekretaris prodi"
                                                 placeholder="Tulis NIP sekretaris prodi" showLabel size="lg"
                                                 name="sekprodi"
                                                 labelKey="nama_lengkap" valueKey="id" keywordKey="nip"
                                                 onChange={handleChange}
                                                 showHint
                                                 error={errors?.sekprodi} value={formData.sekprodi}/>
                                </div>
                            </div>
                        )
                    }
                </Modal.Body>
                <Modal.Footer>
                    <div className="gap-4 flex flex-row">
                        <Button variant="primary" size="md" filled onClick={handleSubmit} disabled={isFormIncomplete}>
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