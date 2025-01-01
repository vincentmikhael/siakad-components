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

const Tagihan = () => {
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
        {name: "nim", className: "min-w-[76px] text-center"},
        {name: "nama", className: "min-w-48"},
        {name: "program studi", className: "min-w-48"},
        {name: "nominal", className: "min-w-48"},
        {name: "perihal", className: "w-48"},
        {name: "lampiran", className: "min-w-[200px] text-center"},
        {name: "status", className: "min-w-[144px] text-center"},
    ];

    const data = [
        {
            nim: "1718120",
            nama: "Ahmad rahadian",
            prodi: "Teknik Informatika",
            nominal: "Rp. 3.000.000",
            perihal: "Uang gedung",
            status: 0,
        }, {
            nim: "1718120",
            nama: "Ahmad rahadian",
            prodi: "Teknik Informatika",
            nominal: "Rp. 3.000.000",
            perihal: "Uang gedung",
            status: 1,
        },
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadingSubmit(true)
        console.log(formData)
    }

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <div className="w-full lg:w-fit hidden lg:flex gap-4">
                    <Select value={[]} options={[]} label="Fakultas" placeholder="Pilih fakultas"
                            showLabel
                            size="xs"
                            className="xl:w-[80px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Program studi" placeholder="Pilih program studi"
                            showLabel
                            size="xs"
                            className="xl:w-[192px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Konsentrasi" placeholder="Pilih konsentrasi"
                            showLabel
                            size="xs"
                            className="xl:w-[192px] w-full"
                            onChange={() => {
                            }}/>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-4 w-full lg:w-fit">
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
                        <Select value={[]} options={[]} label="Fakultas" placeholder="Pilih fakultas"
                                showLabel
                                size="lg"
                                labelKey="nama"
                                valueKey="id"
                                onChange={() => {
                                }}
                                menuClass="max-h-28"/>
                        <Select value={[]} options={[]} label="Prodi" placeholder="Pilih program studi"
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
                    </BottomDrawer>
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
                                        <Text size="xs" className="text-center">{item?.nim}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs">{item?.nama}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs">{item?.prodi}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs">{item?.nominal}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs">{item?.perihal}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs">{item?.lampiran}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <div className="flex justify-center items-center">
                                            {
                                                item?.status === 0 ? (
                                                    <Badge filled variant="danger" size="sm">Belum Lunas</Badge>
                                                ) : (
                                                    <Badge filled variant="success" size="sm">Lunas</Badge>
                                                )
                                            }
                                        </div>
                                    </TableBodyCell>
                                </TableBodyRow>
                            )
                        ))}
                </TableBody>
            </Table>
        </>
    );
}
export default Tagihan