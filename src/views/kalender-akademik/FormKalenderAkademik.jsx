"use client"
import {Plus} from "@phosphor-icons/react";
import {Button, DateInput, FileUpload, FormSkeleton, Input, Modal, Select, Spinner, Textarea} from "@/components";
import AxiosInstance from "@libs/AxiosInstance";
import {useState} from "react";

const FormKalenderAkademik = () => {
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
    const openAddModal = async () => {
        setOpenModal(true);
        // resetForm();
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

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const closeModal = () => setOpenModal(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadingSubmit(true)
        // try {
        //     const response = await AxiosInstance.post("/prodi", formData);
        //
        //     if (response.status === 200) {
        //         fetchData()
        //         setOpenModal(false);
        //         showToast("Data berhasil itambahkan", "Anda telah berhasil menambahkan" data`, "success")
        //         resetForm()
        //     }
        // } catch (err) {
        //     console.log(err)
        //     if (err.status === 422) {
        //         setErrors(err.response.data.errors)
        //     } else {
        //         showToast("Data gagal ditambahkan", "Data baru gagal untuk ditambahkan", "danger")
        //     }
        // } finally {
        //     setLoadingSubmit(false)
        // }
    }
    return (
        <>
            <Button
                onClick={openAddModal}
                leftIcon={<Plus weight="bold"/>}
                size="sm"
                filled
                className="w-full sm:w-fit"
            >
                Tambah data
            </Button>
            <Modal
                size="lg"
                open={openModal}
                onClose={closeModal}
                title="Tambah kalender akademik"
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
                            {loadingSubmit ? <Spinner size={16}/> : "Tambah"}
                        </Button>
                        <Button variant="white" size="md" filled onClick={closeModal}>
                            Batal
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>)
}
export default FormKalenderAkademik