"use client"

import {useState} from "react";
import {
    Button, DateInput, FormSkeleton, IconButton,
    Input, Modal, Pagination,
    Select, Spinner,
    Table,
    TableBody, TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow, Text
} from "@/components";
import {MagnifyingGlass, PencilSimpleLine, Plus, Trash} from "@phosphor-icons/react";
import AxiosInstance from "@libs/AxiosInstance";

const PenjadwalanUjian = () => {
    const [openModal, setOpenModal] = useState(false);
    const [loadingDataForm, setLoadingDataForm] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [errors, setErrors] = useState();
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);

    const [formData, setFormData] = useState({
        fakultas: "",
        jurusan: "",
        prodi: "",
        kode_mk: "",
        semester: "",
        tahun_akademik: "",
        jenis_ujian: "",
        hari_tgl: "",
        jam: "",
    });

    const resetForm = () => {
        setFormData({
            fakultas: "",
            jurusan: "",
            prodi: "",
            kode_mk: "",
            semester: "",
            tahun_akademik: "",
            jenis_ujian: "",
            hari_tgl: "",
            jam: "",
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
        // resetForm();
        try {
            // setLoadingInitForm(true);
            const response = await AxiosInstance.get("/prodi/form/init");
            if (response.status === 200) {
                // setFormInit(response.data.data);
            }
        } catch (err) {
            setErrors(err.errors);
        } finally {
            // setLoadingInitForm(false);
        }
    };

    const openEditModal = async (id) => {
        setEditMode(true);
        setEditId(id)
        setOpenModal(true);
        // resetForm();
        // setLoadingDataForm(true);
        // setLoadingInitForm(true);
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

    // const handleSearch = e => {
    //     const keyword = e.target.value.toLowerCase();
    //     setSearchKeyword(keyword);
    //
    //     if (!keyword) {
    //         setFilteredData(dataProdi);
    //         return;
    //     }
    //
    //     const filtered = dataProdi.filter(
    //         (item) =>
    //             item.nama.toLowerCase().includes(keyword) || item.nama_en.toLowerCase().includes(keyword)
    //     );
    //
    //     setFilteredData(filtered);
    // };

    const columns = [
        {name: "no", className: "min-w-14"},
        {name: "kode mk", className: "min-w-[100px] text-center"},
        {name: "nama mata kuliah", className: "min-w-[316px]"},
        {name: "hari", className: "max-w-[120px] text-center"},
        {name: "jam ke", className: "min-w-[180px] text-center"},
        {name: "tanggal", className: "min-w-[120px] text-center"},
        {name: "ujian", className: "max-w-[120px] text-center"},
        {name: "user entri", className: "min-w-[128px] text-center"},
        {name: "actions", className: "min-w-[124px]  text-center"},
    ];
    const data = [
        {
            kode: "001",
            mk: "technopreneurship",
            hari: "Senin",
            jam: "KE - 10 (15.10 - 15.50)",
            tanggal: "4/29/2024",
            ujian: "UTS",
            user: "Putry"
        }, {
            kode: "001",
            mk: "technopreneurship",
            hari: "Selasa",
            jam: "KE - 10 (15.10 - 15.50)",
            tanggal: "4/29/2024",
            ujian: "UTS",
            user: "Putry"
        }
    ]


    const handleSubmit = async (e) => {
        // e.preventDefault();
        // setLoadingSubmit(true)
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
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between items-end gap-4 pt-6">
                <div className="w-full lg:w-fit gap-4 flex sm:flex-row flex-col">
                    <Select value={[]} options={[]} label="Fakultas" placeholder="Pilih fakultas" showLabel
                            size="xs"
                            className="xl:w-[92px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Program studi" placeholder="Pilih program studi"
                            showLabel
                            size="xs"
                            className="xl:w-[124px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Konsentrasi" placeholder="Pilih konsentrasi"
                            showLabel
                            size="xs"
                            className="xl:w-[124px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Semester" placeholder="Pilih semester"
                            showLabel
                            size="xs"
                            className="xl:w-[96px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Tahun akademik" placeholder="Pilih tahun akademik"
                            showLabel
                            size="xs"
                            className="xl:w-[140px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Jenis ujian" placeholder="Pilih jenis ujian"
                            showLabel
                            size="xs"
                            className="xl:w-[140px] w-full"
                            onChange={() => {
                            }}/>
                </div>
                <div className="flex gap-4 w-full lg:w-fit">
                    <Input
                        size="xs"
                        className="w-full lg:w-[156px]"
                        placeholder={"Cari data disini"}
                        leftIcon={<MagnifyingGlass weight="bold"/>}
                    />
                    <Button
                        onClick={openAddModal}
                        leftIcon={<Plus weight="bold"/>}
                        size="sm"
                        filled
                        className="w-full lg:w-fit"
                    >
                        Tambah data
                    </Button>
                </div>
            </div>
            <Table
                loading={false}
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
                    {data?.map((e, index) => {
                        return (
                            <TableBodyRow key={index}>
                                <TableBodyCell>
                                    <Text size="xs">{index + 1}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.kode}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="uppercase">{e?.mk}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.hari}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.jam}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.tanggal}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.ujian}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs" className="text-center">{e?.user}</Text>
                                </TableBodyCell>

                                <TableBodyCell>
                                    <div className="flex flex-row gap-3 justify-center">
                                        <IconButton size="sm" variant="warning" onClick={() => openEditModal(e?.id)}>
                                            <PencilSimpleLine/>
                                        </IconButton>
                                        <IconButton size="sm" variant="danger"
                                                    onClick={() => {
                                                    }}>
                                            <Trash/>
                                        </IconButton>
                                    </div>
                                </TableBodyCell>
                            </TableBodyRow>
                        );
                    })}
                </TableBody>
            </Table>
            <Pagination/>
            {/*Modal*/}
            <Modal
                size="lg"
                open={openModal}
                onClose={closeModal}
                title={editMode ? "Perbarui jadwal ujian" : "Tambah jadwal ujian"}
                dismissable
                autoClose
            >
                <Modal.Body>
                    {
                        loadingDataForm ? (
                            <FormSkeleton count={8}/>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Select showLabel label="Fakultas" options={[]} labelKey="nama"
                                        valueKey="id"
                                        size="lg" placeholder="Pilih fakultas" name="fakultas" onChange={handleChange}
                                        showHint
                                        error={errors?.fakultas} value={formData.fakultas}/>
                                <Select showLabel label="Jurusan" options={[]} labelKey="nama"
                                        valueKey="id"
                                        size="lg" placeholder="Pilih jurusan" name="jurusan" onChange={handleChange}
                                        showHint
                                        error={errors?.jurusan} value={formData.jurusan}/>
                                <Select showLabel
                                        label="Program studi"
                                        options={[]}
                                        labelKey="nama"
                                        valueKey="id"
                                        size="lg"
                                        placeholder="Pilih program studi"
                                        name="prodi"
                                        onChange={handleChange}
                                        showHint
                                        error={errors?.prodi}
                                        value={formData.prodi}/>
                                <Select showLabel label="Mata kuliah" options={[]} labelKey="nama"
                                        valueKey="id"
                                        size="lg" placeholder="Pilih mata kuliah" name="kode_mk" onChange={handleChange}
                                        showHint
                                        error={errors?.kode_mk} value={formData.kode_mk}/>
                                <Select showLabel
                                        label="Semester"
                                        options={[]}
                                        labelKey="nama"
                                        valueKey="id"
                                        size="lg"
                                        placeholder="Pilih semester"
                                        name="semester"
                                        onChange={handleChange}
                                        showHint
                                        error={errors?.semester}
                                        value={formData.semester}/>
                                <Select showLabel label="Tahun akademik" options={[]} labelKey="nama"
                                        valueKey="id"
                                        size="lg" placeholder="Pilih tahun akademik" name="tahun_akademik"
                                        onChange={handleChange}
                                        showHint
                                        error={errors?.tahun_akademik} value={formData.tahun_akademik}/>
                                <Select showLabel
                                        label="Jenis ujian"
                                        options={[]}
                                        labelKey="nama"
                                        valueKey="id"
                                        size="lg"
                                        placeholder="Pilih jenis ujian"
                                        name="jenis_ujian"
                                        onChange={handleChange}
                                        showHint
                                        error={errors?.jenis_ujian}
                                        value={formData.jenis_ujian}/>
                                <Select showLabel label="Jam ke" options={[]} labelKey="nama"
                                        valueKey="id"
                                        size="lg" placeholder="Pilih jam ujian" name="jam" onChange={handleChange}
                                        showHint
                                        error={errors?.jam} value={formData.jam}/>
                                <div className="sm:col-span-2">
                                    <DateInput size="lg" label="Hari dan tanggal" placeholder="Pilih hari dan tanggal"
                                               showLabel showHint error={errors?.hari_tgl}/>
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

export default PenjadwalanUjian