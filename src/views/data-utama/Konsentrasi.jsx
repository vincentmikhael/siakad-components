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
import {MagnifyingGlass, Plus, PencilSimpleLine, FadersHorizontal} from "@phosphor-icons/react";
import AxiosInstance from "@libs/AxiosInstance";
import {useToast} from "@context/ToastContext";
import usePagination from "@hooks/usePagination";
import useFormValidation from "@hooks/useFormValidation";
import generateYears from "@utils/generateYears";

const fetchKonsentrasi = async (selectedProdi) => {
    try {
        if(selectedProdi){
            const response = await AxiosInstance.get(`/konsentrasi/${selectedProdi}`);
            return response.data.data;
        }
        return []
        
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return null;
        }
        throw error;
    }
};

// const fetchFormInit = async (prodi, tahun) => {
//     try {
//         const response = await AxiosInstance.get(`/kurikulum/form/init?prodi=${prodi}&th_kur=${tahun}`);
//         return response.data.data;
//     } catch (error) {
//         if (error.response && error.response.status === 404) {
//             return null;
//         }
//         throw error;
//     }
// }

const semesterOption = Array.from({length: 8}, (_, i) => ({
    value: `${i + 1}`,
    label: `Semester ${i + 1}`
}))

export default function Konsentrasi({listInit}) {

    const showToast = useToast();
    const years = generateYears();
    //drawer
    const [openDrawer, setOpenDrawer] = useState(false);
    //
    //filter state
    const [filters, setFilters] = useState({
        selectedFakultas: null,
        selectedProdi: null,
    });
    const [filterOptions, setFilterOptions] = useState({
        listProdi: null,
        listProdiInput: null,
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
        const fakultas = listInit.fakultas[0];
        const prodi = listInit.prodi.filter((prodi) => prodi.id.startsWith(fakultas.id));
 
        const initialFilters = {
            selectedFakultas: fakultas.id,
            selectedProdi: prodi[0]?.id,
        };

        setFilterOptions((prevState) => ({
            ...prevState,
            listProdi: prodi,
        }))

        setFilters(initialFilters);
        setTempFilters(initialFilters);
    }

    useEffect(() => {
        if (listInit.fakultas.length > 0) {
            setInitFilter()
        }
    }, [listInit]);

    const {data: dataKonsentrasi, isLoading, isError, error} = useQuery({
        queryKey: ["konsentrasi", filters.selectedProdi],
        queryFn: () => fetchKonsentrasi(filters.selectedProdi),
        staleTime
    });

    // const {data: formInit, isLoading: loadingInitForm} = useQuery({
    //     queryKey: ["kurikulum", "form-init", filters.selectedProdi, filters.selectedTahun],
    //     enabled: !!(openModal && filters.selectedProdi && filters.selectedTahun),
    //     queryFn: () => fetchFormInit(filters.selectedProdi, filters.selectedTahun),
    //     staleTime
    // })

    //show error while fetching kurikulum
    useEffect(() => {
        if (isError && error?.status !== 404) {
            showToast(
                "Failed to fetch data",
                "Failed to get data konsentrasi",
                "danger"
            );
        }
    }, [isError])

    //filterdata searching
    const filteredData = dataKonsentrasi?.filter(
        (item) =>
            item.nama?.toLowerCase().includes(searchKeyword) ||
            item.alias?.toLowerCase().includes(searchKeyword) ||
            item.nama_en?.toLowerCase().includes(searchKeyword)
    );

    const handleSearch = (e) => {
        setSearchKeyword(e.target.value.toLowerCase());
    };
    //
    const {paginatedData, currentPage, totalPages, handlePageChange} = usePagination(filteredData, 10)

    const [formData, setFormData] = useState({
        nama: "",
        nama_en: "",
        alias: "",
        prodi: ""
    });
    //disable button submit
    const requiredFields = ["nama", "nama_en", "alias"];
    const isFormIncomplete = useFormValidation(formData, requiredFields);
    //
    const resetForm = () => {
        setFormData({
            nama: "",
            nama_en: "",
            alias: "",
            prodi: ""
        })
        setErrors({})
    }

    

    const columns = [
        {name: "no", className: "min-w-14"},
        {name: "alias", className: "min-w-[100px] text-center"},
        {name: "nama", className: "min-w-[260px]"},
        {name: "nama_en", className: "min-w-[174px]"},
        {name: "status", className: "min-w-[120px] text-center"},
        {name: "action", className: "min-w-[120px] text-center"},
    ];

    const pinnedColumns = [0, 1, 2]

    //base filter
    const handleFiltersChange = (e) => {
        const {name, value} = e?.target
        const updateState = openDrawer ? setTempFilters : setFilters

        if (name === "fakultas") {
            const fakultas = listInit.fakultas.find((d) => d.id === value);
            const prodi = listInit.prodi.filter((prodi) => prodi.id.startsWith(value));

            setFilterOptions((prevState) => ({
                ...prevState,
                listProdi: prodi,
            }))

            updateState((prevState) => ({
                ...prevState,
                selectedFakultas: value,
                selectedProdi: prodi[0]?.id,
            }))
        } else if (name === "prodi") {
            updateState((prevState) => ({
                ...prevState,
                selectedProdi: value,
            }))
        }
        //reset ke halaman awal
        handlePageChange(1)
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if(name == 'fakultas'){
            const updateState = openDrawer ? setTempFilters : setFilters
            const prodi = listInit.prodi.filter((prodi) => prodi.id.startsWith(value))

            setFilterOptions((prevState) => ({
                ...prevState,
                listProdi: prodi,
                listProdiInput: prodi,
            }))

            updateState((prevState) => ({
                ...prevState,
                selectedFakultas: value,
                selectedProdi: prodi[0]?.id,
            }))

            setFormData((prevData) => ({
                ...prevData,
                prodi: prodi[0]?.id,
            }));
        }
        if(name == 'prodi'){
            const updateState = openDrawer ? setTempFilters : setFilters
            updateState((prevState) => ({
                ...prevState,
                selectedProdi: value,
            }))
        }
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
        setFilterOptions((prevState) => ({
            ...prevState,
            listProdiInput: listInit.prodi.filter((prodi) => prodi.id.startsWith(filters.selectedFakultas)),
        }))
        setFormData((prevData) => ({
            ...prevData,
            fakultas: filters.selectedFakultas,
            prodi: filters.selectedProdi,
        }));
    };

    const openEditModal = async (id) => {
        setEditMode(true);
        setOpenModal(true);
        resetForm();
        const data = filteredData.find(item => item.id === id);
        setFormData(data)
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
                await queryClient.invalidateQueries(["konsentrasi", filters.selectedProdi, filters.selectedTahun]);
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
        url: "/konsentrasi",
        successTitle: "Data berhasil ditambahkan",
        successMessage: "Anda telah berhasil menambahkan data baru",
        errorTitle: "Data gagal ditambahkan",
        errorMessage: "Data gagal untuk ditambahkan"
    });

    // mutasi untuk mengedit data
    const editMutation = useDataMutation({
        method: "put",
        url: `/konsentrasi/${formData.id}`,
        successTitle: "Data berhasil diperbarui",
        successMessage: "Anda telah berhasil memperbarui data",
        errorTitle: "Data gagal diperbarui",
        errorMessage: "Data gagal untuk diperbarui"
    });

    // const deleteMutation = useMutation({
    //     mutationFn: async () => {
    //         setLoadingSubmit(true)
    //         const response = await AxiosInstance.delete(`/kurikulum/${formData.kd_mk}/${formData.prodi}/${formData.konsentrasi}/${formData.th_kur}/${formData.semester}`)
    //         if (response.status !== 200) throw new Error("Gagal menghapus data");
    //         return formData.kd_mk;
    //     },
    //     onSuccess: async () => {
    //         setDeleteModal(false);
    //         showToast("Data berhasil dihapus", "Data telah dihapus dari kurikulum", "success");
    //         await queryClient.invalidateQueries(["kurikulum", filters.selectedProdi, filters.selectedTahun]);
    //     },
    //     onError: (err) => {
    //         showToast("Data gagal dihapus", err.response?.data?.errors?.message || "Data gagal untuk dihapus", "danger");
    //     },
    //     onSettled: () => {
    //         setLoadingSubmit(false)
    //     }
    // })

    const editStatusMutation = useMutation({
        mutationFn: async (data) => {
            const res = await AxiosInstance.put(`/konsentrasi/status/${data.id}`, {
                status: data.stat
            })
            return res
        },
        onSuccess: async () => {
            setDeleteModal(false);
            showToast("Berhasil!", "Status telah berhasil diubah", "success");
            await queryClient.invalidateQueries(["konsentrasi", filters.selectedProdi, filters.selectedTahun]);
        },
        onError: (err) => {
            showToast("Data gagal diubah", err.response?.data?.errors?.message || "Data gagal untuk diubah", "danger");
        },
    })

    const changeStatus = async (id, stat) => {
        editStatusMutation.mutate({
            id,stat
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            editMutation.mutate({
                nama: formData.nama,
                nama_en: formData.nama_en,
                alias: formData.alias
            });
        } else {
            addMutation.mutate({
                nama: formData.nama,
                nama_en: formData.nama_en,
                prodi: formData.prodi,
                alias: formData.alias
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
                        paginatedData?.map((data, index) => (
                            <TableBodyRow key={index}>
                                <TableBodyCell>
                                    <Text size="xs">
                                        {index + 1 + (currentPage - 1) * 10}
                                    </Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{data?.alias}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="uppercase">{data?.nama}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="uppercase">{data?.nama_en}</Text>
                                </TableBodyCell>
                                <TableBodyCell className={'text-center'}>{data.status == 1 ?
                                    <Button variant="success" onClick={() => changeStatus(data.id, 0)}>Aktif</Button>
                                    :
                                    <Button variant="danger" onClick={() => changeStatus(data.id, 1)}>Tidak aktif</Button>
                                }</TableBodyCell>

                                <TableBodyCell>
                                    <div className="flex flex-row gap-3 justify-center">
                                        <IconButton size="sm" variant="warning"
                                                    onClick={() => openEditModal(data.id)}>
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
            {/*Modal*/}
            <Modal
                size="lg"
                open={openModal}
                onClose={closeModal}
                title={editMode ? "Perbarui data konsentrasi" : "Tambah data konsentrasi"}
                dismissable
                autoClose
            >
                <Modal.Body>
                    {
                        loadingDataForm ? (
                            <FormSkeleton count={3} cols={3}/>
                        ) : (
                            
                            <div className="grid mt-2 grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Input size="lg" name="nama" error={errors?.nama} showHint value={formData.nama}
                                       onChange={handleChange} showLabel label="Nama konsentrasi"
                                       placeholder="Tulis nama konsentrasi"/>

                            </div>
                            <div>
                                <Input size="lg" name="nama_en" error={errors?.nama_en} showHint value={formData.nama_en}
                                       onChange={handleChange} showLabel label="Nama dalam inggris"
                                       placeholder="Tulis nama dalam bahasa inggris"/>

                            </div>
                            <div>
                                <Input size="lg" name="alias" error={errors?.alias} showHint value={formData.alias}
                                       onChange={handleChange} showLabel label="Nama alias"
                                       placeholder="Tulis nama alias"/>

                            </div>
                            <div className={editMode ? 'hidden' : ''}></div>
                            <div className={editMode ? 'hidden' : ''}>
                                <Select
                                    label="Fakultas"
                                    size="lg"
                                    value={formData.fakultas}
                                    showLabel
                                    labelKey="nama"
                                    valueKey="id"
                                    name="fakultas"
                                    onChange={handleChange}
                                    options={listInit.fakultas}
                                />

                            </div>
                            <div className={editMode ? 'hidden' : ''}>
                                <Select
                                    label="Prodi"
                                    size="lg"
                                    value={formData.prodi}
                                    labelKey="nama"
                                    valueKey="id"
                                    showLabel
                                    error={errors?.prodi}
                                    showHint
                                    onChange={handleChange}
                                    options={filterOptions.listProdiInput}
                                />
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
            {/* <Modal
                open={deleteModal}
                onClose={closeDeleteModal}
                title="Hapus data konsentrasi"
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
            </Modal> */}
        </>
    );
}
