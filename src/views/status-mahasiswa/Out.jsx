"use client"

import {useEffect, useState} from "react";
import AxiosInstance from "@/libs/AxiosInstance";
import {
    Badge, BottomDrawer,
    Button, FormSkeleton, IconButton,
    Input, Modal, NotFoundRow, Select, Spinner,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow, Text, Textarea
} from "@/components";
import {useToast} from "@/context/ToastContext";
import {MagnifyingGlass, Plus, PencilSimpleLine, Trash, FadersHorizontal} from "@phosphor-icons/react";

const Out = () => {
    const showToast = useToast();
    //drawer
    const [openDrawer, setOpenDrawer] = useState(false);
    //
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
        fakultas: "",
        prodi: "",
        konsentrasi: "",
        angkatan: "",
        mahasiswa: "",
        cuti: "",
        tahun_cuti: "",
        keterangan: "",
    });

    const resetForm = () => {
        setFormData({
            fakultas: "",
            prodi: "",
            konsentrasi: "",
            angkatan: "",
            mahasiswa: "",
            cuti: "",
            tahun_cuti: "",
            keterangan: "",
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
        {name: "nim", className: "w-[76px] text-center"},
        {name: "nama", className: "min-w-[188px]"},
        {name: "semester", className: "min-w-[114px] text-center"},
        {name: "tahun akademik", className: "min-w-[141px] text-center"},
        {name: "keterangan", className: "min-w-[180px]"},
        {name: "user entry", className: "min-w-[180px] text-center"},
        {name: "validasi", className: "min-w-[148px] text-center"},
        {name: "actions", className: "text-center"},
    ];

    const data = [
        {
            nim: "1718120",
            nama: "Ahmad rahadian",
            semester: "Genap",
            tahun_akademik: "2023/2024",
            keterangan: "Contoh Keterangan",
            user_entry: "Sekjur-informatika",
            validasi: 0
        },
        {
            nim: "1718120",
            nama: "Ahmad rahadian",
            semester: "Genap",
            tahun_akademik: "2023/2024",
            keterangan: "Contoh Keterangan",
            user_entry: "Sekjur-informatika",
            validasi: 1
        }
    ]
    const pinnedColumns = [0, 1, 2]

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
                <div className="w-full lg:w-fit hidden lg:flex gap-4">
                    <Select value={[]} options={[]} label="Fakultas" placeholder="Pilih fakultas" showLabel
                            size="xs"
                            className="xl:w-[80px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Program studi" placeholder="Pilih program studi"
                            showLabel
                            size="xs"
                            className="xl:w-[128px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Konsentrasi" placeholder="Pilih konsentrasi"
                            showLabel
                            size="xs"
                            className="xl:w-[108px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Semester" placeholder="Pilih semester"
                            showLabel
                            size="xs"
                            className="xl:w-[60px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Tahun akademik" placeholder="Pilih tahun akademik"
                            showLabel
                            size="xs"
                            className="xl:w-[128px] w-full"
                            onChange={() => {
                            }}/>
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
                        <BottomDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} onApply={() => {
                        }} onClear={() => {
                        }}>
                            <Select value={[]} options={[]} label="Fakultas" placeholder="Pilih fakultas" showLabel
                                    size="lg"
                                    labelKey="nama"
                                    valueKey="id"
                                    onChange={() => {
                                    }}
                                    menuClass="max-h-28"/>
                            <Select value={[]} options={[]} label="Program studi" placeholder="Pilih program studi"
                                    showLabel
                                    size="lg"
                                    labelKey="nama"
                                    valueKey="id"
                                    onChange={() => {
                                    }}
                                    menuClass="max-h-28"/>
                            <Select value={[]} options={[]} label="Konsentrasi" placeholder="Pilih konsentrasi"
                                    showLabel
                                    size="lg"
                                    labelKey="nama"
                                    valueKey="id"
                                    onChange={() => {
                                    }}
                                    menuClass="max-h-28"/>
                            <Select value={[]} options={[]} label="Semester" placeholder="Pilih semester"
                                    showLabel
                                    size="lg"
                                    labelKey="nama"
                                    valueKey="id"
                                    onChange={() => {
                                    }}
                                    menuClass="max-h-28"/>
                            <Select value={[]} options={[]} label="Tahun akademik" placeholder="Pilih tahun akademik"
                                    showLabel
                                    size="lg"
                                    labelKey="nama"
                                    valueKey="id"
                                    onChange={() => {
                                    }}
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
                loading={loadingData}
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
                    {data?.length === 0 ? (
                        <NotFoundRow colSpan={columns.length}/>
                    ) : (
                        data?.map((prodi, index) => (
                                <TableBodyRow key={index}>
                                    <TableBodyCell>
                                        <Text size="xs">{index + 1}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">{prodi?.nim}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs">{prodi?.nama}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">{prodi?.semester}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">{prodi?.tahun_akademik}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs">{prodi?.keterangan}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">{prodi?.user_entry}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <div className="flex justify-center items-center">
                                            {
                                                prodi?.validasi === 0 ? (
                                                    <Badge filled variant="default" size="sm">Belum tervalidasi</Badge>
                                                ) : (
                                                    <Badge filled variant="success" size="sm">Tervalidasi</Badge>
                                                )
                                            }
                                        </div>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <div className="flex flex-row gap-3 justify-center">
                                            <IconButton size="sm" variant="warning"
                                                        onClick={() => openEditModal(index)}>
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
                title={editMode ? "Perbarui data mahasiswa cuti" : "Tambah data mahasiswa cuti"}
                dismissable
                autoClose
            >
                <Modal.Body>
                    {
                        loadingDataForm ? (
                            <FormSkeleton count={8}/>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Select showLabel label="Fakultas" options={formInit?.fakultas} labelKey="nama"
                                        valueKey="id"
                                        size="lg" placeholder="Pilih fakultas" name="fakultas" onChange={handleChange}
                                        showHint
                                        error={errors?.fakultas} value={formData.fakultas}/>
                                <Select showLabel label="Program Studi" options={formInit?.prodi} labelKey="nama"
                                        valueKey="id"
                                        size="lg" placeholder="Pilih program studi" name="prodi" onChange={handleChange}
                                        showHint
                                        error={errors?.prodi} value={formData.prodi}/>
                                <Select showLabel label="Konsentrasi" options={formInit?.konsentrasi} labelKey="nama"
                                        valueKey="id"
                                        size="lg" placeholder="Pilih konsentrasi" name="konsentrasi"
                                        onChange={handleChange}
                                        showHint
                                        error={errors?.konsentrasi} value={formData.konsentrasi}/>
                                <Select showLabel label="Angkatan" options={formInit?.angkatan} labelKey="nama"
                                        valueKey="id"
                                        size="lg" placeholder="Pilih angkatan" name="angkatan"
                                        onChange={handleChange}
                                        showHint
                                        error={errors?.angkatan} value={formData.angkatan}/>
                                <Select showLabel label="Mahasiswa" options={formInit?.mahasiswa} labelKey="nama"
                                        valueKey="id"
                                        size="lg" placeholder="Pilih mahasiswa" name="mahasiswa"
                                        onChange={handleChange}
                                        showHint
                                        error={errors?.mahasiswa} value={formData.mahasiswa}/>
                                <Select showLabel label="Cuti" options={formInit?.cuti} labelKey="nama"
                                        valueKey="id"
                                        size="lg" placeholder="Pilih cuti" name="cuti"
                                        onChange={handleChange}
                                        showHint
                                        error={errors?.cuti} value={formData.cuti}/>
                                <Select showLabel label="Tahun Cuti" options={formInit?.tahun_cuti} labelKey="nama"
                                        valueKey="id"
                                        size="lg" placeholder="Pilih tahun cuti" name="tahun_cuti"
                                        onChange={handleChange}
                                        showHint
                                        error={errors?.tahun_cuti} value={formData.tahun_cuti}/>
                                <div className="sm:col-span-2">
                                    <Textarea showLabel label="Keterangan" placeholder="Tulis keterangan"
                                              error={errors?.keterangan} value={formData.keterangan} showHint/>
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
export default Out