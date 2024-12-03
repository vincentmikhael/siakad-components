"use client"

import {
    Badge,
    Button,
    CardHeader, Checkbox, FormSkeleton, Hr,
    IconButton, Input, Modal, SearchInput, Select, Spinner, Table,
    TableBody, TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow,
    Text
} from "@/components";
import {useRouter} from "next/navigation";
import {CaretLeft, PencilSimpleLine, Plus, Trash} from "@phosphor-icons/react";
import React, {useState} from "react";
import AxiosInstance from "@libs/AxiosInstance";

const DetailNilaiMahasiswaPindahan = () => {
    const router = useRouter();
    const [openModal, setOpenModal] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [errors, setErrors] = useState();
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (id) => {
        setSelectedItems((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const isChecked = (id) => selectedItems.includes(id);

    const [nilaiArr, setNilaiArr] = useState([{
        kode_mk: "",
        semester: "",
        tahun_akademik: "",
        grade: ""
    }])

    const resetForm = () => {
        setNilaiArr([{
            kode_mk: "",
            semester: "",
            tahun_akademik: "",
            grade: ""
        }])
        setErrors({})
    }

    const addNilaiRow = () => {
        setNilaiArr((prevNilaiArr) => {
            const updatedNilaiArr = [
                ...prevNilaiArr,
                {
                    kode_mk: "",
                    semester: "",
                    tahun_akademik: "",
                    grade: ""
                },
            ];
            return updatedNilaiArr;
        });
    }

    const openAddModal = async () => {
        // setEditMode(false);
        // setEditId(null);
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

    const closeModal = () => {
        resetForm()
        setOpenModal(false)
    }

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    const columns = [
        {name: ""},
        {name: "kode mata kuliah", className: "min-w-[152px] text-center"},
        {name: "nama mata kuliah", className: "min-w-[354px]"},
        {name: "semester / th.akademik", className: "min-w-[240px] text-center"},
        {name: "grade", className: "text-center"},
        {name: "validasi", className: "text-center"},
        {name: "user entri", className: "min-w-[120px] text-center"},
        {name: "actions", className: "min-w-[132px] text-center"},
    ];

    const data = [
        {
            id: 1,
            kode_mk: 'MS1101',
            nama_mk: "Pendidikan agama islam",
            semester: 'genap - 2023/2024',
            grade: "A",
            validasi: 1,
            user_entri: "IIS",
        },
        {
            id: 2,
            kode_mk: 'MS1101',
            nama_mk: "Pendidikan agama islam",
            semester: 'genap - 2023/2024',
            grade: "A",
            validasi: 0,
            user_entri: "IIS",
        }
    ]
    return (
        <>
            <CardHeader className="flex-row justify-between items-start">
                <div className="flex gap-6">
                    <IconButton size="md" variant="white" onClick={() => router.back()}>
                        <CaretLeft weight="bold"/>
                    </IconButton>
                    <div className="flex flex-col gap-1.5">
                        <Text size="xl" color="text-gray-100" weight={600}>
                            Ahmad rahadian
                        </Text>
                        <Text size="sm" color="text-gray-60" weight={500}>
                            2118103
                        </Text>
                    </div>
                </div>
                {
                    selectedItems.length > 0 ? (
                        <div className="flex gap-4 w-full lg:w-fit">
                            <Button
                                leftIcon={<PencilSimpleLine weight="bold"/>}
                                size="sm"
                                filled
                                variant="warning"
                                className="w-full lg:w-fit"
                            >
                                Edit all
                            </Button>
                            <Button
                                leftIcon={<Trash weight="bold"/>}
                                size="sm"
                                filled
                                variant="danger"
                                className="w-full lg:w-fit"
                            >
                                Delete all
                            </Button>
                        </div>
                    ) : (
                        <Button
                            onClick={openAddModal}
                            leftIcon={<Plus weight="bold"/>}
                            size="sm"
                            filled
                            className="w-full lg:w-fit"
                        >
                            Tambah mata kuliah
                        </Button>
                    )
                }
            </CardHeader>
            <div className="mt-6">
                <Table
                    loading={false}
                    columns={columns}
                    data={[]}
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
                                <TableBodyRow key={index} selected={isChecked(e?.id)}>
                                    <TableBodyCell>
                                        <Checkbox checked={isChecked(e?.id)}
                                                  onClick={() => handleCheckboxChange(e?.id)}/>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">{e?.kode_mk}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="uppercase">{e?.nama_mk}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center uppercase">{e?.semester}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">{e?.grade}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <div className="flex justify-center items-center">
                                            <Badge size="sm" variant={e?.validasi === 1 ? "success" : "default"}
                                                   filled>{e?.validasi === 1 ? "Valid" : "Invalid"}</Badge>
                                        </div>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs" className="text-center">{e?.user_entri}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell className="flex flex-row gap-3 justify-center">
                                        <IconButton size="sm" variant="warning">
                                            <PencilSimpleLine/>
                                        </IconButton>
                                        <IconButton size="sm" variant="danger">
                                            <Trash/>
                                        </IconButton>
                                    </TableBodyCell>
                                </TableBodyRow>
                            );
                        })}
                    </TableBody>
                </Table>
                {/*Modal*/}
                <Modal
                    size="lg"
                    open={openModal}
                    onClose={closeModal}
                    title={editMode ? "Perbarui nilai mahasiswa" : "Tambah nilai mahasiswa"}
                    dismissable
                >
                    <Modal.Body>
                        <div className="flex flex-col gap-1.5">
                            <Text size="xl" color="text-gray-100" weight={600}>
                                Ahmad rahadian
                            </Text>
                            <Text size="sm" color="text-gray-60" weight={500}>
                                2118103
                            </Text>
                        </div>
                        <Hr/>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                            {nilaiArr?.map((nilai, index) => (
                                <React.Fragment key={index}>
                                    <Select showLabel label="Mata kuliah" options={[]} labelKey="kode_mk"
                                            valueKey="id"
                                            size="lg" placeholder="Pilih mata kuliah" name="kode_mk"
                                            onChange={handleChange}
                                            showHint
                                            error={errors?.kode_mk} value={nilai.kode_mk}/>
                                    <Select showLabel label="Semester" options={[]} labelKey="nama"
                                            valueKey="id"
                                            size="lg" placeholder="Pilih semester" name="semester"
                                            onChange={handleChange}
                                            showHint
                                            error={errors?.semester} value={nilai.semester}/>
                                    <Select showLabel label="Tahun akademik" options={[]} labelKey="nama"
                                            valueKey="id"
                                            size="lg" placeholder="Pilih tahun akademik" name="jenjang"
                                            onChange={handleChange}
                                            showHint
                                            error={errors?.tahun_akademik} value={nilai.tahun_akademik}/>
                                    <Input
                                        placeholder="Masukkan nilai"
                                        size="lg"
                                        label="Grade"
                                        showLabel
                                        name="grade"
                                        onChange={handleChange}
                                        showHint
                                        error={errors?.grade}
                                        value={nilai.grade}
                                    />
                                </React.Fragment>
                            ))
                            }
                        </div>
                        <div className="flex justify-end">
                            <Button
                                onClick={addNilaiRow}
                                leftIcon={<Plus weight="bold"/>}
                                size="sm"
                                filled
                                type="button"
                                className="w-full lg:w-fit"
                                variant="white"
                            >
                                Tambah mata kuliah
                            </Button>
                        </div>
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
            </div>
        </>
    )
}

export default DetailNilaiMahasiswaPindahan;