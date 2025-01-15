"use client";

import {
    Button,
    Input,
    Modal,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadRow,
    TableHeadCell,
    Text,
    IconButton,
    Hr,
    FileUpload,
    NotFoundRow, SearchInput, Spinner, FormSkeleton, Pagination
} from "@/components";
import {useState} from "react";
import {MagnifyingGlass, Plus} from "@phosphor-icons/react/dist/ssr";
import {PencilSimpleLine} from "@phosphor-icons/react";
import AxiosInstance from "@/libs/AxiosInstance";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import useFormValidation from "@hooks/useFormValidation";
import {useToast} from "@context/ToastContext";
import ModalSignature from "@views/data-utama/components/ModalSignature";
import usePagination from "@hooks/usePagination";

const fetchFakultas = async () => {
    try {
        const response = await AxiosInstance.get(`/fakultas`);
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
        const response = await AxiosInstance.get("/fakultas/form/init");
        return response.data.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return null;
        }
        throw error;
    }
}

const Fakultas = () => {
    const showToast = useToast();
    const [searchKeyword, setSearchKeyword] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [loadingDataForm, setLoadingDataForm] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [errors, setErrors] = useState();
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const maxWidth = 800;
    const maxHeight = 800;
    const [formData, setFormData] = useState({
        nama: "",
        nm_fk_en: "",
        singkatan: "",
        sk: "",
        dekan: "",
        ttd_dekan: "",
        wd1: "",
        ttd_wd1: "",
        wd2: "",
        ttd_wd2: "",
        wd3: "",
        ttd_wd3: "",
    })

    const queryClient = useQueryClient();
    const staleTime = 1000 * 60 * 5;
    const {data: dataFakultas, isLoading} = useQuery({
        queryKey: ["fakultas"],
        queryFn: fetchFakultas,
        staleTime
    });

    const {data: dataPegawai, isLoading: loadingInitForm} = useQuery({
        queryKey: ["fakultas", "form-init"],
        enabled: openModal,
        queryFn: fetchFormInit,
        staleTime
    })

    const resetForm = () => {
        setFormData({
            nama: "",
            nm_fk_en: "",
            singkatan: "",
            sk: "",
            dekan: "",
            ttd_dekan: "",
            wd1: "",
            ttd_wd1: "",
            wd2: "",
            ttd_wd2: "",
            wd3: "",
            ttd_wd3: "",
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

    const filteredData = dataFakultas?.filter(
        (item) =>
            item.nama.toLowerCase().includes(searchKeyword) ||
            item.sk.toLowerCase().includes(searchKeyword)
    );

    const {paginatedData, currentPage, totalPages, handlePageChange} = usePagination(filteredData, 10)

    const useDataMutation = ({method, url, successTitle, successMessage, errorTitle, errorMessage}) => {
        return useMutation({
            mutationFn: async (data) => {
                setLoadingSubmit(true)
                const response = await AxiosInstance[method](url, data);
                if (response.status !== 200) throw new Error(errorTitle);
                return response.data.data;
            },
            onSuccess: async () => {
                await queryClient.invalidateQueries(["fakultas"]);
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
        url: "/fakultas",
        successTitle: "Data berhasil ditambahkan",
        successMessage: "Anda telah berhasil menambahkan data baru",
        errorTitle: "Data gagal ditambahkan",
        errorMessage: "Data gagal untuk ditambahkan"
    });

    // mutasi untuk mengedit data
    const editMutation = useDataMutation({
        method: "put",
        url: `/fakultas/${editId}`,
        successTitle: "Data berhasil diperbarui",
        successMessage: "Anda telah berhasil memperbarui data",
        errorTitle: "Data gagal diperbarui",
        errorMessage: "Data gagal untuk diperbarui"
    });

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
            const detailResponse = await AxiosInstance.get(`/fakultas?id=${id}`);
            if (detailResponse.status === 200) {
                const data = detailResponse.data.data
                setFormData({
                    nama: data.nama,
                    nm_fk_en: data.nm_fk_en,
                    singkatan: data.singkatan,
                    sk: data.sk,
                    dekan: data.dekan?.id,
                    ttd_dekan: data.ttd_dekan,
                    wd1: data.wd1?.id,
                    ttd_wd1: data.ttd_wd1,
                    wd2: data.wd2?.id,
                    ttd_wd2: data.ttd_wd2,
                    wd3: data.wd3?.id,
                    ttd_wd3: data.ttd_wd3,
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
        {name: "no", className: "min-w-14"},
        {name: "nama fakultas", className: "min-w-[280px]"},
        {name: "sk fakultas", className: "min-w-[168px]"},
        {name: "dekan", className: "min-w-[220px]"},
        {name: "wd 1", className: "min-w-[220px]"},
        {name: "wd 2", className: "min-w-[220px]"},
        {name: "wd 3", className: "min-w-[220px]"},
        {name: "actions", className: "min-w-[132px] text-center"},
    ];
    const pinnedColumns = [0, 1]

    const requiredFields = ["nama", "singkatan", "sk"];
    const isFormIncomplete = useFormValidation(formData, requiredFields);

    const handleSearch = (e) => {
        setSearchKeyword(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            editMutation.mutate(formData);
        } else {
            addMutation.mutate(formData);
        }
    }
    return (
        <>
            <div className="flex flex-col md:flex-row gap-6 sm:gap-4 justify-between">
                <Input
                    size="xs"
                    className="w-full md:w-2/5"
                    placeholder="Cari data disini"
                    onChange={handleSearch}
                    value={searchKeyword}
                    leftIcon={<MagnifyingGlass weight="bold"/>}
                />
                <Button
                    onClick={openAddModal}
                    leftIcon={<Plus weight="bold"/>}
                    size="sm"
                    filled
                >
                    Tambah data
                </Button>
            </div>
            <Table
                loading={isLoading}
                columns={columns}
                pinned={pinnedColumns}
            >
                <TableHead>
                    <TableHeadRow>
                        {columns.map((column, index) => {
                            return (
                                <TableHeadCell
                                    className={column.className}
                                    key={index}
                                >
                                    {column.name}
                                </TableHeadCell>
                            );
                        })}
                    </TableHeadRow>
                </TableHead>

                <TableBody>
                    {paginatedData?.length > 0 ? (
                        paginatedData?.map((fakultas, index) => (
                            <TableBodyRow key={index}>
                                <TableBodyCell>
                                    <Text size="xs">{index + 1}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs">{fakultas?.nama}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs">{fakultas?.sk}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    {fakultas.dekan ? (
                                        <div className="flex flex-col gap-4">
                                            <div className="flex flex-col gap-1">
                                                <Text size="xs">{fakultas.dekan?.nama}</Text>
                                                <Text size="xs" color="text-gray-50">
                                                    {fakultas.dekan?.kd_nip} {fakultas.dekan?.nip}
                                                </Text>
                                            </div>
                                            <ModalSignature fileName={fakultas?.ttd_dekan}/>
                                        </div>
                                    ) : (
                                        <Text size="xs">-</Text>
                                    )}
                                </TableBodyCell>
                                <TableBodyCell>
                                    {fakultas.wd1 ? (
                                        <div className="flex flex-col gap-4">
                                            <div className="flex flex-col gap-1">
                                                <Text size="xs">{fakultas.wd1?.nama}</Text>
                                                <Text size="xs" color="text-gray-50">
                                                    {fakultas.wd1?.kd_nip} {fakultas.wd1?.nip}
                                                </Text>
                                            </div>
                                            <ModalSignature fileName={fakultas?.ttd_wd1}/>
                                        </div>
                                    ) : (
                                        <Text size="xs">-</Text>
                                    )}
                                </TableBodyCell>
                                <TableBodyCell>
                                    {fakultas.wd2 ? (
                                        <div className="flex flex-col gap-4">
                                            <div className="flex flex-col gap-1">
                                                <Text size="xs">{fakultas.wd2?.nama}</Text>
                                                <Text size="xs" color="text-gray-50">
                                                    {fakultas.wd2?.kd_nip} {fakultas.wd2?.nip}
                                                </Text>
                                            </div>
                                            <ModalSignature fileName={fakultas?.ttd_wd2}/>
                                        </div>
                                    ) : (
                                        <Text size="xs">-</Text>
                                    )}
                                </TableBodyCell>
                                <TableBodyCell>
                                    {fakultas.wd3 ? (
                                        <div className="flex flex-col gap-4">
                                            <div className="flex flex-col gap-1">
                                                <Text size="xs">{fakultas.wd3?.nama}</Text>
                                                <Text size="xs" color="text-gray-50">
                                                    {fakultas.wd3?.kd_nip} {fakultas.wd3?.nip}
                                                </Text>
                                            </div>
                                            <ModalSignature fileName={fakultas?.ttd_wd3}/>
                                        </div>
                                    ) : (
                                        <Text size="xs">-</Text>
                                    )}
                                </TableBodyCell>
                                <TableBodyCell>
                                    <div className="flex flex-row gap-3 justify-center">
                                        <IconButton size="sm" variant="warning"
                                                    onClick={() => openEditModal(fakultas?.id)}>
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
            <Modal
                size="lg"
                open={openModal}
                onClose={closeModal}
                title={editMode ? "Perbarui data fakultas" : "Tambah data fakultas"}
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
                                    placeholder="Tulis nama fakultas"
                                    size="lg"
                                    label="Nama fakultas"
                                    showLabel
                                    name="nama"
                                    onChange={handleChange}
                                    showHint
                                    error={errors?.nama}
                                    value={formData.nama}
                                />
                                <Input
                                    placeholder="Tulis nama fakultas (EN)"
                                    size="lg"
                                    label="Nama fakultas (EN)"
                                    showLabel
                                    name="nm_fk_en"
                                    onChange={handleChange}
                                    showHint
                                    error={errors?.nm_fk_en}
                                    value={formData.nm_fk_en}
                                />
                                <Input
                                    placeholder="Tulis singkatan fakultas"
                                    size="lg"
                                    label="Singkatan fakultas"
                                    showLabel
                                    name="singkatan"
                                    onChange={handleChange}
                                    showHint
                                    error={errors?.singkatan}
                                    value={formData.singkatan}
                                />
                                <Input
                                    placeholder="Tulis SK fakultas"
                                    size="lg"
                                    label="SK fakultas"
                                    showLabel
                                    name="sk"
                                    onChange={handleChange}
                                    showHint
                                    error={errors?.sk}
                                    value={formData.sk}
                                />
                                <Hr className="sm:col-span-2"/>
                                <div className="sm:col-span-2 flex flex-col gap-6">
                                    <SearchInput options={dataPegawai} label="Nama dekan"
                                                 placeholder="Tulis NIP atau nama" showLabel size="lg" name="dekan"
                                                 labelKey="nama_lengkap" valueKey="id" keywordKey="nip"
                                                 customLabel={(option) => `${option.nip} - ${option.nama_lengkap}`}
                                                 secondKeywordKey="nama_lengkap"
                                                 onChange={handleChange}
                                                 showHint
                                                 error={errors?.dekan} value={formData.dekan}/>
                                    <FileUpload name="ttd_dekan"
                                                onChange={handleChange}
                                                allowDeleted label="Upload tanda tangan"
                                                showLabel
                                                showHint
                                                maxWidth={maxWidth}
                                                maxHeight={maxHeight}
                                                error={errors?.ttd_dekan}
                                                value={formData.ttd_dekan}/>
                                    <Hr/>
                                    <SearchInput options={dataPegawai} label="Nama WD 1"
                                                 placeholder="Tulis NIP atau nama" showLabel size="lg" name="wd1"
                                                 labelKey="nama_lengkap" valueKey="id" keywordKey="nip"
                                                 customLabel={(option) => `${option.nip} - ${option.nama_lengkap}`}
                                                 secondKeywordKey="nama_lengkap"
                                                 onChange={handleChange}
                                                 showHint
                                                 error={errors?.wd1} value={formData.wd1}/>
                                    <FileUpload name="ttd_wd1"
                                                onChange={handleChange}
                                                allowDeleted type="image" label="Upload tanda tangan"
                                                showLabel
                                                showHint
                                                maxWidth={maxWidth}
                                                maxHeight={maxHeight}
                                                error={errors?.ttd_wd1}
                                                value={formData.ttd_wd1}/>
                                    <Hr/>
                                    <SearchInput options={dataPegawai} label="Nama WD 2"
                                                 placeholder="Tulis NIP atau nama" showLabel size="lg" name="wd2"
                                                 labelKey="nama_lengkap" valueKey="id" keywordKey="nip"
                                                 customLabel={(option) => `${option.nip} - ${option.nama_lengkap}`}
                                                 secondKeywordKey="nama_lengkap"
                                                 onChange={handleChange}
                                                 showHint
                                                 error={errors?.wd2} value={formData.wd2}/>
                                    <FileUpload name="ttd_wd2"
                                                onChange={handleChange}
                                                allowDeleted type="image" label="Upload tanda tangan"
                                                showLabel
                                                showHint
                                                maxWidth={maxWidth}
                                                maxHeight={maxHeight}
                                                error={errors?.ttd_wd2}
                                                value={formData.ttd_wd2}/>
                                    <Hr/>
                                    <SearchInput options={dataPegawai} label="Nama WD 3"
                                                 placeholder="Tulis NIP atau nama" showLabel size="lg" name="wd3"
                                                 labelKey="nama_lengkap" valueKey="id" keywordKey="nip"
                                                 customLabel={(option) => `${option.nip} - ${option.nama_lengkap}`}
                                                 secondKeywordKey="nama_lengkap"
                                                 onChange={handleChange}
                                                 showHint
                                                 error={errors?.wd3} value={formData.wd3}/>
                                    <FileUpload name="ttd_wd3"
                                                onChange={handleChange}
                                                allowDeleted type="image" label="Upload tanda tangan"
                                                showLabel
                                                showHint
                                                maxWidth={maxWidth}
                                                maxHeight={maxHeight}
                                                error={errors?.ttd_wd3}
                                                value={formData.ttd_wd3}/>
                                </div>
                            </div>
                        )}
                </Modal.Body>
                <Modal.Footer>
                    <div className="gap-4 flex flex-row">
                        <Button variant="primary" size="md" filled onClick={handleSubmit}
                                disabled={isFormIncomplete || loadingSubmit}>
                            {loadingSubmit ? <>
                                {editMode ? "Memperbarui" : "Menyimpan"}
                                <Spinner size={16}/>
                            </> : editMode ? "Perbarui" : "Tambah"}
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

export default Fakultas