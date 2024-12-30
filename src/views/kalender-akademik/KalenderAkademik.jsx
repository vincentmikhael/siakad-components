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
    TableHeadRow, Text, Textarea
} from "@/components";
import {useToast} from "@/context/ToastContext";
import {MagnifyingGlass, Plus, PencilSimpleLine, Trash, FadersHorizontal} from "@phosphor-icons/react";

const KalenderAkademik = () => {
    const showToast = useToast();
    //drawer
    const [openDrawer, setOpenDrawer] = useState(false);
    //
    const [dataProdi, setDataProdi] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [loadingInitForm, setLoadingInitForm] = useState(false);
    const [loadingDataForm, setLoadingDataForm] = useState(false);
    const [loadingData, setLoadingData] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [formInit, setFormInit] = useState({});
    const [errors, setErrors] = useState();
    const [formData, setFormData] = useState({
        kegiatan: "",
        semester_ganjil: "",
        semester_genap: "",
        semester_antara: "",
        keterangan: "",
    });
    const [file, setFile] = useState("");

    const resetForm = () => {
        setFormData({
            kegiatan: "",
            semester_ganjil: "",
            semester_genap: "",
            semester_antara: "",
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

    const openEditModal = async (id) => {
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
        {name: "no", className: "text-center"},
        {name: "kegiatan", className: "min-w-[267px] text-center"},
        {name: "semester ganjil 2023/2024", className: "max-w-[212px]"},
        {name: "semester genap 2023/2024", className: "max-w-[212px] text-center"},
        {name: "semester antara", className: "max-w-[212px] text-center"},
        {name: "keterangan", className: "max-w-[182px] text-center"},
        {name: "actions", className: "text-center"},
    ];

    const data = [
        {
            kegiatan: "Pengenalan Kehidupan Kampus MABA 2023",
            semester_ganjil: "11 - 15 Sept 2023",
            semester_genap: "1 - 9 Feb 2024",
            semester_antara: "27 Mei 2024",
            keterangan: "Institut",
        },
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadingSubmit(true)
        console.log(formData)
        // try {
        //     const response = await AxiosInstance.put(`/prodi/${editId}`, (({
        //                                                             fakultas,
        //                                                             ...dataWithoutFakultas
        //                                                         }) => dataWithoutFakultas)(formData))
        //
        //     if (response.status === 200) {
        //         fetchData()
        //         setOpenModal(false);
        //         showToast("Data berhasil diperbarui", "Anda telah berhasil memperbarui" data`, "success")
        //         resetForm()
        //     }
        // } catch (err) {
        //     console.log(err)
        //     if (err.status === 422) {
        //         setErrors(err.response.data.errors)
        //     } else {
        //         showToast("Data gagal ditambahkan", "Data baru gagal untuk ditambahkan", "danger")
        //         showToast("Data gagal diperbarui", "Data baru gagal untuk diperbarui", "danger")
        //     }
        // } finally {
        //     setLoadingSubmit(false)
        // }
    }

    return (
        <section>
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
                                        <Text size="xs" className="text-center">{index + 1}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs">{item?.kegiatan}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">{item?.semester_ganjil}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">{item?.semester_genap}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">{item?.semester_antara}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">{item?.keterangan}</Text>
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
                title="Perbarui kalender akademik"
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
                                        placeholder="Tulis kegiatan"
                                        size="lg"
                                        label="Kegiatan"
                                        showLabel
                                        name="kegiatan"
                                        onChange={handleChange}
                                        showHint
                                        error={errors?.kegiatan}
                                        value={formData.kegiatan}
                                    />
                                </div>
                                <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <DateInput showLabel label="Tanggal semester ganjil"
                                               size="lg"
                                               placeholder="Pilih tanggal semester ganjil"
                                               value={formData.semester_ganjil}
                                               onChange={handleChange} showHint error={errors?.semester_ganjil}/>
                                    <DateInput
                                        showLabel label="Tanggal semester genap"
                                        size="lg"
                                        placeholder="Pilih tanggal semester genap" value={formData.semester_genap}
                                        onChange={handleChange} showHint error={errors?.semester_genap}/>
                                    <DateInput showLabel
                                               label="Tanggal semester antara"
                                               size="lg"
                                               placeholder="Pilih tanggal semester antara"
                                               value={formData.semester_antara}
                                               onChange={handleChange}
                                               showHint
                                               error={errors?.semester_antara}/>
                                </div>
                                <div className="sm:col-span-2">
                                    <Textarea showLabel label="Keterangan" name="keterangan" onChange={handleChange}
                                              placeholder="Tulis keterangan" value={formData.keterangan}
                                              error={errors?.keterangan}/>
                                </div>
                            </div>
                        )
                    }
                </Modal.Body>
                <Modal.Footer>
                    <div className="gap-4 flex flex-row">
                        <Button variant="primary" size="md" filled onClick={handleSubmit}>
                            {loadingSubmit ? <Spinner size={16}/> : "Perbarui"}
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
export default KalenderAkademik