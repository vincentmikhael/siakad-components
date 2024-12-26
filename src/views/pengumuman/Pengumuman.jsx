"use client"

import {useEffect, useState} from "react";
import AxiosInstance from "@/libs/AxiosInstance";
import {
    Badge,
    BottomDrawer,
    Button, DateInput, FileUpload, FormSkeleton, IconButton,
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

const Pengumuman = () => {
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
        perihal: "",
        no_pengumuman: "",
        tanggal: "",
        url: "",
        keterangan: "",
        status: "",
    });
    const [file, setFile] = useState("");

    const resetForm = () => {
        setFormData({
            perihal: "",
            no_pengumuman: "",
            tanggal: "",
            url: "",
            keterangan: "",
            status: "",
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

    // const fetchData = async () => {
    //     setLoadingData(true)
    //     try {
    //         const response = await AxiosInstance.get(`/prodi/${selectedFakultas}`)
    //         if (response.status === 200) {
    //             setDataProdi(response.data.data);
    //             setFilteredData(response.data.data);
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     } finally {
    //         setLoadingData(false)
    //     }
    // }
    //
    // useEffect(() => {
    //     fetchData();
    // }, []);

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
        {name: "kode id", className: "min-w-[85px] text-center"},
        {name: "perihal", className: "min-w-[240px]"},
        {name: "nomor", className: "min-w-[144px] text-center"},
        {name: "tanggal", className: "min-w-[144px] text-center"},
        {name: "lampiran", className: "min-w-[185px] text-center"},
        {name: "keterangan", className: "min-w-[144px] text-center"},
        {name: "status", className: "min-w-[129px] text-center"},
        {name: "actions", className: "text-center"},
    ];

    const data = [
        {
            kode_id: "001",
            perihal: "Pengumuman mahasiswa baru tahun  2024 / 2025",
            nomor: "570/UN173/DI/2020",
            tanggal: "06 Mei 2024",
            lampiran: "",
            keterangan: "Mahasiswa",
            status: 0,
        },
        {
            kode_id: "002",
            perihal: "Pengumuman mahasiswa baru tahun  2024 / 2025",
            nomor: "570/UN173/DI/2020",
            tanggal: "06 Mei 2024",
            lampiran: "",
            keterangan: "Mahasiswa",
            status: 1,
        }
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadingSubmit(true)
        console.log(formData)
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
        <section>
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <div className="w-full lg:w-fit hidden lg:flex gap-4">
                    <DateInput showLabel label="Tanggal" placeholder="Pilih tanggal"
                               className="xl:w-[140px] w-full" size="xs" position="bottom-left"/>
                    <Select value={[]} options={[]} label="Keterangan" placeholder="Pilih keterangan"
                            showLabel
                            size="xs"
                            className="xl:w-[156px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Status" placeholder="Pilih status"
                            showLabel
                            size="xs"
                            className="xl:w-[156px] w-full"
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
                            <DateInput showLabel label="Tanggal" placeholder="Pilih tanggal"
                                       size="lg" position="top-right"/>
                            <Select value={[]} options={[]} label="Keterangan" placeholder="Pilih keterangan"
                                    showLabel
                                    size="lg"
                                    labelKey="nama"
                                    valueKey="id"
                                    onChange={() => {
                                    }}
                                    menuClass="max-h-28"/>
                            <Select value={[]} options={[]} label="Status" placeholder="Pilih status"
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
                        data?.map((item, index) => (
                                <TableBodyRow key={index}>
                                    <TableBodyCell>
                                        <Text size="xs">{index + 1}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">{item?.kode_id}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs">{item?.perihal}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">{item?.nomor}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">{item?.tanggal}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">{item?.lampiran}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">{item?.keterangan}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <div className="flex justify-center items-center">
                                            {
                                                item?.status === 0 ? (
                                                    <Badge filled variant="default" size="sm">Belum terbit</Badge>
                                                ) : (
                                                    <Badge filled variant="success" size="sm">Terbit</Badge>
                                                )
                                            }
                                        </div>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <div className="flex flex-row gap-3 justify-center">
                                            <IconButton size="sm" variant="warning"
                                                        onClick={() => openEditModal(item?.kode_id)}>
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
                title={editMode ? "Perbarui pengumuman" : "Tambah pengumuman"}
                dismissable
                autoClose
            >
                <Modal.Body>
                    {
                        loadingDataForm ? (
                            <FormSkeleton count={8}/>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="sm:col-span-2">
                                    <Input
                                        placeholder="Tulis perihal"
                                        size="lg"
                                        label="Perihal"
                                        showLabel
                                        name="perihal"
                                        onChange={handleChange}
                                        showHint
                                        error={errors?.perihal}
                                        value={formData.perihal}
                                    />
                                </div>
                                <Input
                                    placeholder="Tulis nomor pengumuman"
                                    size="lg"
                                    label="Nomor pengumuman"
                                    showLabel
                                    name="no_pengumuman"
                                    onChange={handleChange}
                                    showHint
                                    error={errors?.no_pengumuman}
                                    value={formData.no_pengumuman}
                                />
                                <DateInput showLabel label="Tanggal pengumuman"
                                           placeholder="Pilih tanggal pengumuman" value={formData.tanggal}
                                           onChange={handleChange} showHint error={errors?.tanggal}/>
                                <div className="sm:col-span-2">
                                    <FileUpload name="url"
                                                onChange={handleChange}
                                                allowDeleted type="pdf" label="Upload lampiran pengumuman"
                                                showLabel
                                                multiple
                                                showHint/>
                                </div>
                                <Select showLabel label="Keterangan" options={formInit?.keterangan} labelKey="nama"
                                        valueKey="id"
                                        size="lg" placeholder="Pilih keterangan" name="keterangan"
                                        onChange={handleChange}
                                        showHint
                                        error={errors?.keterangan} value={formData.keterangan}/>
                                <Select showLabel label="Status" options={formInit?.status} labelKey="nama"
                                        valueKey="id"
                                        size="lg" placeholder="Pilih status" name="status" onChange={handleChange}
                                        showHint
                                        error={errors?.status} value={formData.status}/>
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
    );
}
export default Pengumuman