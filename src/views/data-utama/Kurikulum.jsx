"use client"

import {useEffect, useState} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
    BottomDrawer,
    Button, FormSkeleton, Hr, IconButton,
    Input, Modal, NotFoundRow, Pagination, Select, Spinner,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow, Text
} from "@/components";
import {MagnifyingGlass, Plus, PencilSimpleLine, Trash, FadersHorizontal} from "@phosphor-icons/react";
import AxiosInstance from "@libs/AxiosInstance";
import {useToast} from "@context/ToastContext";
import usePagination from "@hooks/usePagination";
import useFormValidation from "@hooks/useFormValidation";
import generateYears from "@utils/generateYears";

const fetchKurikulum = async (prodi, tahun, konsentrasi) => {
    try {
        const response = await AxiosInstance.get(`/kurikulum/${prodi}/${tahun}?konsentrasi=${konsentrasi}`);
        return response.data.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return null;
        }
        throw error;
    }
};

const fetchFormInit = async (prodi, tahun) => {
    try {
        const response = await AxiosInstance.get(`/kurikulum/form/init?prodi=${prodi}&th_kur=${tahun}`);
        return response.data.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return null;
        }
        throw error;
    }
}

const semesterOption = Array.from({length: 8}, (_, i) => ({
    value: `${i + 1}`,
    label: `Semester ${i + 1}`
}))

const Kurikulum = ({listInit}) => {
    const showToast = useToast();
    const years = generateYears();
    //drawer
    const [openDrawer, setOpenDrawer] = useState(false);
    //
    //filter state
    const [filters, setFilters] = useState({
        selectedFakultas: null,
        selectedProdi: null,
        selectedKonsentrasi: null,
        selectedTahun: null,
    });
    const [filterOptions, setFilterOptions] = useState({
        listProdi: null,
        listKonsentrasi: null,
        listTahun: null,
    })

    const [tempFilters, setTempFilters] = useState({...filters});
    //
    const [searchKeyword, setSearchKeyword] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [loadingDataForm, setLoadingDataForm] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [errors, setErrors] = useState();
    const [editMode, setEditMode] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    //
    const queryClient = useQueryClient();
    const staleTime = 1000 * 60 * 5;
    //set initial data for filter
    const setInitFilter = () => {
        const fakultas = listInit[0];
        const prodi = fakultas.prodi || [];
        const konsentrasi = prodi[0]?.konsentrasi || [];

        const initialFilters = {
            selectedFakultas: fakultas.id,
            selectedProdi: prodi[0]?.id,
            selectedKonsentrasi: konsentrasi[0]?.id,
            selectedTahun: years[0]
        };

        setFilterOptions((prevState) => ({
            ...prevState,
            listProdi: prodi,
            listKonsentrasi: konsentrasi,
            listTahun: years,
        }))

        setFilters(initialFilters);
        setTempFilters(initialFilters);
    }

    useEffect(() => {
        if (listInit.length > 0) {
            setInitFilter()
        }
    }, [listInit]);

    const {data: dataKurikulum, isLoading, isError, error} = useQuery({
        queryKey: ["kurikulum", filters.selectedProdi, filters.selectedTahun, filters.selectedKonsentrasi],
        queryFn: () => fetchKurikulum(filters.selectedProdi, filters.selectedTahun, filters.selectedKonsentrasi),
        staleTime
    });

    const {data: formInit, isLoading: loadingInitForm} = useQuery({
        queryKey: ["kurikulum", "form-init", filters.selectedProdi, filters.selectedTahun],
        enabled: !!(openModal && filters.selectedProdi && filters.selectedTahun),
        queryFn: () => fetchFormInit(filters.selectedProdi, filters.selectedTahun),
        staleTime
    })

    //show error while fetching kurikulum
    useEffect(() => {
        if (isError && error?.status !== 404) {
            showToast(
                "Failed to fetch data",
                "Failed to get data kurikulum",
                "danger"
            );
        }
    }, [isError])

    //filterdata searching
    const filteredData = dataKurikulum?.filter(
        (item) =>
            item.mata_kuliah?.nama?.toLowerCase().includes(searchKeyword) ||
            item.mata_kuliah?.nama_en?.toLowerCase().includes(searchKeyword) ||
            item.mata_kuliah?.id?.toLowerCase().includes(searchKeyword)
    );

    const handleSearch = (e) => {
        setSearchKeyword(e.target.value.toLowerCase());
    };
    //
    const {paginatedData, currentPage, totalPages, handlePageChange} = usePagination(filteredData, 10)

    const [formData, setFormData] = useState({
        kd_mk: "",
        th_kur: filters.selectedTahun,
        prodi: filters.selectedProdi,
        konsentrasi: filters.selectedKonsentrasi,
        semester: "",
        sifat: ""
    });
    //disable button submit
    const requiredFields = ["kd_mk", "semester", "sifat"];
    const isFormIncomplete = useFormValidation(formData, requiredFields);
    //
    const resetForm = () => {
        setFormData({
            kd_mk: "",
            th_kur: filters.selectedTahun,
            prodi: filters.selectedProdi,
            konsentrasi: filters.selectedKonsentrasi,
            semester: "",
            sifat: ""
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

    const columns = [
        {name: "no", className: "min-w-14"},
        {name: "kode mk", className: "min-w-[100px] text-center"},
        {name: "nama mata kuliah", className: "min-w-[260px]"},
        {name: "semester kurikulum", className: "min-w-[174px] text-center"},
        {name: "sifat", className: "min-w-[120px] text-center"},
        {name: "sks", className: "min-w-[60px] text-center"},
        {name: "user entri", className: "min-w-[170px] text-center"},
        {name: "actions", className: "min-w-[124px]  text-center"},
    ];

    const pinnedColumns = [0, 1, 2]

    //base filter
    const handleFiltersChange = (e) => {
        const {name, value} = e?.target
        const updateState = openDrawer ? setTempFilters : setFilters

        if (name === "fakultas") {
            const fakultas = listInit.find((d) => d.id === value);
            const prodi = fakultas?.prodi || [];
            const konsentrasi = prodi[0]?.konsentrasi || [];

            setFilterOptions((prevState) => ({
                ...prevState,
                listProdi: prodi,
                listKonsentrasi: konsentrasi,
            }))

            updateState((prevState) => ({
                ...prevState,
                selectedFakultas: value,
                selectedProdi: prodi[0]?.id,
                selectedKonsentrasi: konsentrasi[0]?.id,
            }))
        } else if (name === "prodi") {
            const prodi = filterOptions.listProdi.find((p) => p.id === value);
            const konsentrasi = prodi?.konsentrasi || [];

            setFilterOptions((prevState) => ({
                ...prevState,
                listKonsentrasi: konsentrasi,
            }))

            updateState((prevState) => ({
                ...prevState,
                selectedProdi: value,
                selectedKonsentrasi: konsentrasi[0]?.id,
            }))
        } else if (name === "konsentrasi") {
            updateState((prevState) => ({
                ...prevState,
                selectedKonsentrasi: value,
            }))
        } else if (name === "tahun") {
            updateState((prevState) => ({
                ...prevState,
                selectedTahun: value,
            }))
        }
        //reset ke halaman awal
        handlePageChange(1)
    };

    //filter drawer
    const handleApplyFilter = () => {
        setFilters({...tempFilters});
        setOpenDrawer(false);
    };

    // clear filter
    const handleClearFilter = () => {
        setInitFilter()
        setOpenDrawer(false);
    };

    //modal
    const openAddModal = () => {
        setEditMode(false);
        setOpenModal(true);
        resetForm();
    };

    const openEditModal = async (id) => {
        setEditMode(true);
        setOpenModal(true);
        resetForm();
        setLoadingDataForm(true);
        try {
            const detailResponse = await AxiosInstance.get(`/kurikulum/${filters.selectedProdi}/${filters.selectedTahun}?konsentrasi=${filters.selectedKonsentrasi}&kd_mk=${id}`);
            if (detailResponse.status === 200) {
                const data = detailResponse.data.data
                setFormData({
                    kd_mk: data.mata_kuliah.id,
                    th_kur: filters.selectedTahun,
                    prodi: filters.selectedProdi,
                    konsentrasi: filters.selectedKonsentrasi,
                    semester: data.mata_kuliah.semester,
                    sifat: data.sifat.id,
                });
            }
        } catch (err) {
            console.error("Error fetching data:", err);
            setErrors(err.errors);
        } finally {
            setLoadingDataForm(false);
        }
    };

    const openDeleteModal = (data) => {
        const {id: kd_mk, semester} = data
        setFormData((prevState) => ({
            ...prevState,
            kd_mk,
            th_kur: filters.selectedTahun,
            prodi: filters.selectedProdi,
            konsentrasi: filters.selectedKonsentrasi,
            semester,
        }))
        setDeleteModal(true);
    }

    const closeDeleteModal = () => setDeleteModal(false);

    const closeModal = () => setOpenModal(false);

    const useDataMutation = ({method, url, successTitle, successMessage, errorTitle, errorMessage}) => {
        return useMutation({
            mutationFn: async (data) => {
                setLoadingSubmit(true)
                const response = await AxiosInstance[method](url, data);
                if (response.status !== 200) throw new Error(errorTitle);
                return response.data.data;
            },
            onSuccess: async () => {
                await queryClient.invalidateQueries(["kurikulum", filters.selectedProdi, filters.selectedTahun]);
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
        url: "/kurikulum",
        successTitle: "Data berhasil ditambahkan",
        successMessage: "Anda telah berhasil menambahkan data baru",
        errorTitle: "Data gagal ditambahkan",
        errorMessage: "Data gagal untuk ditambahkan"
    });

    // mutasi untuk mengedit data
    const editMutation = useDataMutation({
        method: "put",
        url: `/kurikulum/${formData.kd_mk}/${formData.prodi}/${formData.konsentrasi}/${formData.th_kur}`,
        successTitle: "Data berhasil diperbarui",
        successMessage: "Anda telah berhasil memperbarui data",
        errorTitle: "Data gagal diperbarui",
        errorMessage: "Data gagal untuk diperbarui"
    });

    const deleteMutation = useMutation({
        mutationFn: async () => {
            setLoadingSubmit(true)
            const response = await AxiosInstance.delete(`/kurikulum/${formData.kd_mk}/${formData.prodi}/${formData.konsentrasi}/${formData.th_kur}/${formData.semester}`)
            if (response.status !== 200) throw new Error("Gagal menghapus data");
            return formData.kd_mk;
        },
        onSuccess: async () => {
            setDeleteModal(false);
            showToast("Data berhasil dihapus", "Data telah dihapus dari kurikulum", "success");
            await queryClient.invalidateQueries(["kurikulum", filters.selectedProdi, filters.selectedTahun]);
        },
        onError: (err) => {
            showToast("Data gagal dihapus", err.response?.data?.errors?.message || "Data gagal untuk dihapus", "danger");
        },
        onSettled: () => {
            setLoadingSubmit(false)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            const {kd_mk, th_kur, konsentrasi, prodi, ...dataEdit} = formData;
            editMutation.mutate(dataEdit);
        } else {
            addMutation.mutate(formData);
        }
    }

    const handleDelete = () => {
        deleteMutation.mutate();
    }

    return (
        <>
            <div className="flex flex-col justify-between gap-4">
                <div className="md:grid grid-cols-2 hidden gap-4">
                    <Select
                        value={filters.selectedFakultas}
                        options={listInit}
                        name="fakultas"
                        label="Fakultas"
                        placeholder="Pilih fakultas"
                        labelKey="nama"
                        valueKey="id"
                        showLabel
                        size="xs"
                        onChange={handleFiltersChange}/>
                    <Select
                        value={filters.selectedProdi}
                        options={filterOptions.listProdi}
                        name="prodi"
                        label="Prodi"
                        placeholder="Pilih program studi"
                        labelKey="nama"
                        valueKey="id"
                        showLabel
                        size="xs"
                        onChange={handleFiltersChange}/>
                    <Select
                        value={filters.selectedKonsentrasi}
                        options={filterOptions.listKonsentrasi}
                        name="konsentrasi"
                        label="Konsentrasi"
                        placeholder="Pilih konsentrasi"
                        labelKey="nama"
                        valueKey="id"
                        showLabel
                        size="xs"
                        onChange={handleFiltersChange}/>
                    <Select
                        value={filters.selectedTahun}
                        options={filterOptions.listTahun}
                        name="tahun"
                        label="Tahun kurikulum"
                        placeholder="Pilih tahun kurikulum"
                        showLabel
                        size="xs"
                        onChange={handleFiltersChange}/>
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
                            <Select value={tempFilters.selectedFakultas}
                                    options={listInit}
                                    name="fakultas"
                                    label="Fakultas"
                                    placeholder="Pilih fakultas"
                                    labelKey="nama"
                                    valueKey="id"
                                    showLabel
                                    size="lg"
                                    onChange={handleFiltersChange}
                                    menuClass="max-h-28"/>
                            <Select value={tempFilters.selectedProdi}
                                    options={filterOptions.listProdi}
                                    name="prodi"
                                    label="Prodi"
                                    placeholder="Pilih program studi"
                                    labelKey="nama"
                                    valueKey="id"
                                    showLabel
                                    size="lg"
                                    onChange={handleFiltersChange}
                                    menuClass="max-h-28"/>
                            <Select value={tempFilters.selectedKonsentrasi}
                                    options={filterOptions.listKonsentrasi}
                                    name="konsentrasi"
                                    label="Konsentrasi"
                                    placeholder="Pilih konsentrasi"
                                    labelKey="nama"
                                    valueKey="id"
                                    showLabel
                                    size="lg"
                                    onChange={handleFiltersChange}
                                    menuClass="max-h-28"/>
                            <Select value={tempFilters.selectedTahun}
                                    options={filterOptions.listTahun}
                                    name="tahun"
                                    label="Tahun kurikulum"
                                    placeholder="Pilih tahun kurikulum"
                                    showLabel
                                    size="lg"
                                    onChange={handleFiltersChange}
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
                    {paginatedData?.length > 0 ? (
                        paginatedData?.map((kurikulum, index) => (
                            <TableBodyRow key={index}>
                                <TableBodyCell>
                                    <Text size="xs">
                                        {index + 1 + (currentPage - 1) * 10}
                                    </Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{kurikulum?.mata_kuliah?.id}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="uppercase">{kurikulum?.mata_kuliah?.nama}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{kurikulum?.mata_kuliah?.semester}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{kurikulum?.sifat?.nama}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{kurikulum?.mata_kuliah?.sks_total}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{kurikulum?.user_entri}</Text>
                                </TableBodyCell>

                                <TableBodyCell>
                                    <div className="flex flex-row gap-3 justify-center">
                                        <IconButton size="sm" variant="warning"
                                                    onClick={() => openEditModal(kurikulum.mata_kuliah?.id)}>
                                            <PencilSimpleLine/>
                                        </IconButton>
                                        <IconButton size="sm" variant="danger"
                                                    onClick={() => openDeleteModal(kurikulum.mata_kuliah)}>
                                            <Trash/>
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
            {/*Modal*/}
            <Modal
                size="lg"
                open={openModal}
                onClose={closeModal}
                title={editMode ? "Perbarui data kurikulum" : "Tambah data kurikulum"}
                dismissable
                autoClose
            >
                <Modal.Body>
                    {
                        loadingDataForm || loadingInitForm ? (
                            <FormSkeleton count={3} cols={3}/>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
                                <Select
                                    value={formData.kd_mk}
                                    options={formInit?.mata_kuliah}
                                    labelKey="nama"
                                    valueKey="id"
                                    label="Kode mata kuliah"
                                    placeholder="Pilih kode mata kuliah"
                                    showLabel
                                    size="lg"
                                    onChange={handleChange}
                                    showHint
                                    name="kd_mk"
                                    disabled={editMode}
                                    error={errors?.kd_mk}/>
                                <Select
                                    value={formData.sifat}
                                    options={formInit?.sifat}
                                    label="Sifat"
                                    labelKey="nama"
                                    valueKey="id"
                                    placeholder="Pilih sifat"
                                    showLabel
                                    size="lg"
                                    onChange={handleChange}
                                    showHint
                                    name="sifat"
                                    error={errors?.sifat}/>
                                <Select
                                    value={formData.semester}
                                    options={semesterOption}
                                    label="Semester Kurikulum"
                                    placeholder="Pilih semester kurikulum"
                                    showLabel
                                    size="lg"
                                    onChange={handleChange}
                                    showHint
                                    name="semester"
                                    error={errors?.semester}/>
                            </div>
                        )}
                </Modal.Body>
                <Modal.Footer>
                    <div className="gap-4 flex flex-row">
                        <Button variant="primary" size="md" filled disabled={isFormIncomplete} onClick={handleSubmit}>
                            {loadingSubmit ? <Spinner size={16}/> : editMode ? "Perbarui" : "Tambah"}
                        </Button>
                        <Button variant="white" size="md" filled onClick={closeModal}>
                            Batal
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
            {/*Delete Modal*/}
            <Modal
                open={deleteModal}
                onClose={closeDeleteModal}
                title="Hapus data kurikulum"
                description="Apakah Anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dibatalkan."
                dismissable
                outsideClose
                autoClose
            >
                <Modal.Footer>
                    <div className="gap-4 flex flex-row">
                        <Button variant="danger" size="md" filled onClick={handleDelete}>
                            {loadingSubmit ? <Spinner size={16}/> :
                                "Hapus"}
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
export default Kurikulum