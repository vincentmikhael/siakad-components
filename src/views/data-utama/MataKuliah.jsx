"use client"

import {useEffect, useState} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
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
    TableHeadRow, Text
} from "@/components";
import {MagnifyingGlass, Plus, PencilSimpleLine, Trash, FadersHorizontal} from "@phosphor-icons/react";
import AxiosInstance from "@libs/AxiosInstance";
import {useToast} from "@context/ToastContext";
import usePagination from "@hooks/usePagination";
import useFormValidation from "@hooks/useFormValidation";
import generateYears from "@utils/generateYears";

const fetchMatkul = async (prodi, tahun, konsentrasi) => {
    if (!prodi || !tahun || !konsentrasi) {
        return null;
    }

    try {
        const response = await AxiosInstance.get(`/mata-kuliah/${prodi ?? null}/${konsentrasi ?? null}/${tahun}`);
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
        const response = await AxiosInstance.get(`/mata-kuliah/form/init`);
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

const MataKuliah = ({listInit}) => {
    const showToast = useToast();
    const years = generateYears();
    //drawer
    const [openDrawer, setOpenDrawer] = useState(false);
    //
    //filter state
    const fakultas = listInit.fakultas[0];
    const prodi = fakultas?.prodi || [];
    const konsentrasi = prodi[0]?.konsentrasi || [];

    const [filters, setFilters] = useState({
        selectedFakultas: fakultas?.id,
        selectedProdi: prodi[0]?.id,
        selectedKonsentrasi: konsentrasi[0]?.id,
        selectedTahun: years[0]
    });
    const [filterOptions, setFilterOptions] = useState({
        listProdi: prodi,
        listKonsentrasi: konsentrasi,
        listTahun: years,
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
        if (listInit.fakultas.length > 0) {
            setInitFilter()
        }
    }, [listInit]);

    const {data: dataMatkul, isLoading, isError, error} = useQuery({
        queryKey: ["matkul", filters.selectedProdi, filters.selectedTahun, filters.selectedKonsentrasi],
        queryFn: () => fetchMatkul(filters.selectedProdi, filters.selectedTahun, filters.selectedKonsentrasi),
        staleTime
    });

    const {data: formInit, isLoading: loadingInitForm} = useQuery({
        queryKey: ["matkul", "form-init",],
        enabled: !!(openModal && filters.selectedProdi && filters.selectedTahun),
        queryFn: () => fetchFormInit(),
        staleTime
    })

    //show error while fetching mata kuliah
    useEffect(() => {
        if (isError && error?.status !== 404) {
            showToast(
                "Failed to fetch data",
                "Failed to get data mata kuliah",
                "danger"
            );
        }
    }, [isError])

    //filterdata searching
    const filteredData = dataMatkul?.filter(
        (item) =>
            item.nama?.toLowerCase().includes(searchKeyword) ||
            item.nama_en?.toLowerCase().includes(searchKeyword) ||
            item.id?.toLowerCase().includes(searchKeyword)
    );

    const handleSearch = (e) => {
        setSearchKeyword(e.target.value.toLowerCase());
    };
    //
    const {paginatedData, currentPage, totalPages, handlePageChange} = usePagination(filteredData, 10)

    const [formData, setFormData] = useState({
        th_kur: filters.selectedTahun,
        prodi: filters.selectedProdi,
        konsentrasi: filters.selectedKonsentrasi,
        nama : "",
        nama_en : "",
        jenis: "",
        sks_kuliah: "",
        sks_praktik: "",
        sks_seminar: "",
        sks_total: "",
        kode: ""
    });
    //disable button submit
    const requiredFields = ["nama", "kode", "nama_en","jenis","sks_kuliah","sks_praktik","sks_seminar"];
    const requiredEditFields = ["nama","nama_en"];
    const isFormIncomplete = useFormValidation(formData, editMode ? requiredEditFields : requiredFields);
    //
    const resetForm = () => {
        setFormData({
            th_kur: filters.selectedTahun,
            prodi: filters.selectedProdi,
            konsentrasi: filters.selectedKonsentrasi,
            nama : "",
            nama_en : "",
            jenis: "",
            sks_kuliah: "",
            sks_praktik: "",
            sks_seminar: "",
            sks_total: "",
            kode: ""
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
        {name: "nama mk", className: "min-w-[260px]"},
        {name: "nama mk (inggris)", className: "min-w-[260px]"},
        {name: "jenis mk", className: "min-w-[260px]"},
        {name: "sks", className: "min-w-[260px] text-center"},
        {name: "actions", className: "min-w-[124px]  text-center"},
    ];

    const pinnedColumns = [0,1,2]

    //base filter
    const handleFiltersChange = (e) => {
        const {name, value} = e?.target
        const updateState = openDrawer ? setTempFilters : setFilters

        if (name === "fakultas") {
            const fakultas = listInit.fakultas.find((d) => d.id === value);
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
            const detailResponse = await AxiosInstance.get(`/mata-kuliah/${id}/${filters.selectedTahun}`);
            if (detailResponse.status === 200) {
                const data = detailResponse.data.data

                setFormData({
                    nama: data.nama,
                    nama_en: data.nama_en,
                    jenis: data.jenis.id,
                    sks_kuliah: data.sks_kuliah,
                    sks_praktik: data.sks_praktik,
                    sks_seminar: data.sks_seminar,
                    id: data.id,
                    th_kur: data.th_kur,
                    sks_total: data.sks_total
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
        setFormData((prevState) => ({
            ...prevState,
            id: data,
            th_kur: filters.selectedTahun
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
                await queryClient.invalidateQueries(["matkul", filters.selectedProdi, filters.selectedTahun]);
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
        url: "/mata-kuliah",
        successTitle: "Data berhasil ditambahkan",
        successMessage: "Anda telah berhasil menambahkan data baru",
        errorTitle: "Data gagal ditambahkan",
        errorMessage: "Data gagal untuk ditambahkan"
    });

    // mutasi untuk mengedit data
    const editMutation = useDataMutation({
        method: "put",
        url: `/mata-kuliah/${formData.id}/${formData.th_kur}`,
        successTitle: "Data berhasil diperbarui",
        successMessage: "Anda telah berhasil memperbarui data",
        errorTitle: "Data gagal diperbarui",
        errorMessage: "Data gagal untuk diperbarui"
    });

    const deleteMutation = useMutation({
        mutationFn: async () => {
            setLoadingSubmit(true)
            const response = await AxiosInstance.delete(`/mata-kuliah/${formData.id}/${formData.th_kur}`)
            if (response.status !== 200) throw new Error("Gagal menghapus data");
            return formData.kd_mk;
        },
        onSuccess: async () => {
            setDeleteModal(false);
            showToast("Data berhasil dihapus", "Data telah dihapus dari mata kuliah", "success");
            await queryClient.invalidateQueries(["matkul", filters.selectedProdi, filters.selectedTahun]);
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
        // return
        if (editMode) {
            const {th_kur, id, ...dataEdit} = formData;
            editMutation.mutate(dataEdit);
        } else {
            addMutation.mutate({
                ...formData,
                sks_total: parseInt(formData.sks_kuliah) + parseInt(formData.sks_praktik) + parseInt(formData.sks_seminar),
                konsentrasi: formData.konsentrasi === 'all' ? null : String(formData.konsentrasi)
            });
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
                        options={listInit.fakultas}
                        name="fakultas"
                        label="Fakultas"
                        placeholder="Pilih fakultas"
                        labelKey="nama"
                        valueKey="id"
                        showLabel
                        size="xs"
                        onChange={handleFiltersChange}/>

                    <SearchInput
                        value={filters.selectedProdi} options={filterOptions.listProdi} label="Prodi" icon={false}
                        placeholder="Pilih program studi" showLabel size="xs" name="prodi"
                        labelKey="nama" valueKey="id" keywordKey="id"
                        secondKeywordKey="nama"
                        onChange={handleFiltersChange}
                        showHint
                        // disabled={editMode}
                        error={errors?.kd_mk}/>
                    {/*<Select*/}
                    {/*    value={filters.selectedProdi}*/}
                    {/*    options={filterOptions.listProdi}*/}
                    {/*    name="prodi"*/}
                    {/*    label="Prodi"*/}
                    {/*    placeholder="Pilih program studi"*/}
                    {/*    labelKey="nama"*/}
                    {/*    valueKey="id"*/}
                    {/*    showLabel*/}
                    {/*    size="xs"*/}
                    {/*    onChange={handleFiltersChange}/>*/}
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
                                    options={listInit.fakultas}
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
                        paginatedData?.map((matkul, index) => (
                            <TableBodyRow key={index}>
                                <TableBodyCell>
                                    <Text size="xs">
                                        {index + 1 + (currentPage - 1) * 10}
                                    </Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{matkul?.id}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs">{matkul?.nama}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs">{matkul?.nama_en}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs">{matkul?.jenis.nama}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{matkul?.sks_total}</Text>
                                </TableBodyCell>

                                <TableBodyCell>
                                    <div className="flex flex-row gap-3 justify-center">
                                        <IconButton size="sm" variant="warning"
                                                    onClick={() => openEditModal(matkul.id)}>
                                            <PencilSimpleLine/>
                                        </IconButton>
                                        <IconButton size="sm" variant="danger"
                                                    onClick={() => openDeleteModal(matkul.id)}>
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
                title={editMode ? "Perbarui data mata kuliah" : "Tambah data mata kuliah"}
                dismissable
                autoClose
            >
                <Modal.Body>
                    {
                        loadingDataForm || loadingInitForm ? (
                            <FormSkeleton count={3} cols={3}/>
                        ) : (
                            <div className="grid grid-cols-12 gap-4">

                                    <div className={`col-span-12  md:col-span-6`}>
                                <Input error={errors?.nama} showHint value={formData.nama} name="nama" onChange={handleChange}
                                       label="Nama mata kuliah (Indonesia)" showLabel
                                       placeholder="Tulis nama mata kuliah"/>
                            </div>
                            <div className={`col-span-12  md:col-span-6`}>
                                <Input error={errors?.nama_en} showHint value={formData.nama_en}
                                       onChange={handleChange} name="nama_en" label="Nama mata kuliah (Inggris)" showLabel
                                       placeholder="Tulis nama mata kuliah"/>
                            </div>
                            <div className={`col-span-12  md:col-span-6 ${editMode ? 'hidden' : ''}`}>
                                <Input error={errors?.kode} showHint value={formData.kode} name="kode" onChange={handleChange}
                                       label="Kode mata kuliah" showLabel placeholder="Tulis kode mata kuliah"/>
                            </div>
                            <div className={`col-span-12 md:col-span-6 ${editMode ? 'hidden' : ''}`}>
                                <Select error={errors?.jenis} showHint value={formData.jenis}
                                        onChange={handleChange} name="jenis" label="Jenis mata kuliah" showLabel
                                        placeholder="Pilih jenis mata kuliah" options={formInit?.jenis} valueKey="id"
                                        labelKey="nama"/>
                            </div>

                            <div className={`col-span-12  md:col-span-4`}>
                                <Input error={errors?.sks_kuliah} showHint value={formData.sks_kuliah}
                                       onChange={handleChange} name="sks_kuliah" type="number" label="SKS kuliah" showLabel
                                       placeholder="Tulis SKS kuliah"/>
                            </div>
                            <div className={`col-span-12  md:col-span-4`}>
                                <Input error={errors?.sks_praktik} showHint value={formData.sks_praktik}
                                       onChange={handleChange} name="sks_praktik" type="number" label="SKS praktik" showLabel
                                       placeholder="Tulis SKS praktik"/>
                            </div>
                            <div className={`col-span-12  md:col-span-4`}>
                                <Input error={errors?.sks_seminar} showHint value={formData.sks_seminar}
                                       onChange={handleChange} name="sks_seminar" type="number" label="SKS seminar" showLabel
                                       placeholder="Tulis SKS seminar"/>
                            </div>
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
                title="Hapus data mata kuliah"
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
export default MataKuliah