"use client"
import {
    Text,
    Table,
    TableBodyRow,
    TableBodyCell,
    TableHead,
    TableHeadCell,
    TableHeadRow,
    TableBody,
    Select,
    Input,
    Button,
    Modal,
    IconButton,
    Spinner,
} from "@/components";
import {useToast} from "@/context/ToastContext";
import AxiosInstance from "@/libs/AxiosInstance";
import {MagnifyingGlass, PencilSimpleLine, Plus, Trash} from "@phosphor-icons/react/dist/ssr";
import { QueryClient, QueryClientProvider, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {useEffect, useState} from "react";

export default function Konsentrasi({dataInit}){
        const queryClient = new QueryClient()
            return (
                <QueryClientProvider client={queryClient}>
                    <KonsentrasiExport dataInit={dataInit}/>
                </QueryClientProvider>
            )
}

function KonsentrasiExport({dataInit}) {
    const showToast = useToast();
    const [modalAdd, setModalAdd] = useState(false)
    const [fakultas, setFakultas] = useState(dataInit.fakultas)
    const [dataProdi, setDataProdi] = useState(dataInit.prodi)
    const [prodi, setProdi] = useState([])
    const [selectedFakultas, setSelectedFakultas] = useState("")
    const [selectedProdi, setSelectedProdi] = useState("")
    const [allDataTable, setAllDataTable] = useState([])
    const [dataTable, setDataTable] = useState([])
    const [deleteId, setDeleteId] = useState(false)
    const [editId, setEditId] = useState(false)
    const queryClient = useQueryClient()
    //for formdata
    const [prodiInput, setProdiInput] = useState([])
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    //buat fetch data di tabel
    const query = useQuery({ 
        queryKey: ['konsentrasi'], 
        queryFn: fetchKonsentrasi,
     })

    //buat tambah data
    const createMutation = useMutation({
        mutationFn: async (data)=>{
            const res = await AxiosInstance.post('/konsentrasi', data)
            return res
        },
        onSuccess: (res) => {
            console.log('data berhasil ditambahkan',res)
            if (res.status == 200) {
                        setSelectedFakultas(formData.prodi.substring(0, 2))
                        setModalAdd(false)
                        setSelectedProdi(formData.prodi)
                        showToast(`Data berhasil ditambahkan`, `Anda telah berhasil menambahkan data`, "success")
            }
            queryClient.invalidateQueries({ queryKey: ['konsentrasi'] })
        },
        onError: (err) =>{
            if (err.status == 422) {
                        setErrors(err.response.data.errors)
            }
        }
      })

      //buat edit data
      const editMutation = useMutation({
        mutationFn: async (data) =>{
            const res = await AxiosInstance.put(`/konsentrasi/${editId}`, data)
            return res
        },
        onSuccess: (res) => {
            if (res.status == 200) {
                resetForm()
                query.refetch()
                setEditId(false)
                setModalAdd(false)

            }
            queryClient.invalidateQueries({ queryKey: ['konsentrasi'] })
        },
        onError: (err) => {
            if (err.status == 422) {
                setErrors(err.response.data.errors)

            }
        }
      })

      //buat edit status
      const editStatusMutation = useMutation({
        mutationFn: async (data) =>{
            const res = await AxiosInstance.put(`/konsentrasi/status/${data.id}`, {
                status: data.stat
            })
            return res
        },
        onSuccess: (res) => {
            queryClient.invalidateQueries({ queryKey: ['konsentrasi'] })
        },
        onError: (err) => {
        }
      })
    
    
    async function fetchKonsentrasi() {
            const res = await AxiosInstance.get(`/konsentrasi/${selectedProdi}`)
            if (res.status == 200) {
                return res.data.data
            }
    }

    useEffect(() => {
        let setData = dataProdi.filter((prodi) => prodi.id.startsWith(selectedFakultas))
        setProdi(setData)
        if (setData.length > 0) {
            setSelectedProdi(formData.prodi ?? setData[0].id)
        }

        return () => {
            resetForm()
        }
    }, [selectedFakultas])

    useEffect(() => {
        queryClient.invalidateQueries({ queryKey: ['konsentrasi'] })
    }, [selectedProdi])


    useEffect(() => {
        if (dataInit.fakultas.length > 0) {
            setSelectedFakultas(dataInit.fakultas[0].id)
        }
    }, [])

    const handleChange = (e) => (item) => {
        console.log(item)
        if (e == 'fakultas') {
            setSelectedFakultas(item.target.value)
        } else if (e == 'prodi') {
            setSelectedProdi(item.target.value)
        } else if (e == 'fakultasInput') {
            setProdiInput(dataProdi.filter((prodi) => prodi.id.startsWith(item.target.value)))
        }
    }

    const columns = [
        {name: 'KODE'},
        {name: 'ALIAS'},
        {name: 'NAMA'},
        {name: 'NAMA INGGRIS'},
        {name: 'STATUS'},
        {name: 'ACTIONS'},
    ]

    const handleForm = (field) => (e) => {
        let value = e?.target?.value ?? e.id

        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    }

    const handleSearch = e => {
        let keyword = e.target.value
        setDataTable(allDataTable.filter(item =>
            item.nama.toLowerCase().includes(keyword.toLowerCase()) ||
            item.nama_en.toLowerCase().includes(keyword.toLowerCase()) ||
            item.alias.toLowerCase().includes(keyword.toLowerCase())
        ))
    }

    const editInit = (id) => {
        resetForm()
        setModalAdd(true)
        setEditId(id)
        const data = query.data.find(item => item.id === id);
        setProdiInput(dataProdi.filter((prodi) => prodi.id.startsWith(data.id.substring(0, 2))))
        setFormData({
            nama: data.nama,
            nama_en: data.nama_en,
            alias: data.alias,
            prodi: data.id.substring(0, 4),
            fakultas: data.id.substring(0, 2)
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        createMutation.mutate(formData)
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        editMutation.mutate({
            nama: formData.nama,
            nama_en: formData.nama_en,
            alias: formData.alias,
        })
    }

    const changeStatus = async (id, stat) => {
        editStatusMutation.mutate({
            id,stat
        })
    }

    const resetForm = () => {
        setFormData({})
        setErrors({})
        setProdiInput({})
    }

    return (
        <>
            <div className="md:flex justify-between items-end">
                <div className="md:flex gap-3">
                    <div className="grow">
                        <Select
                            label="Fakultas"
                            size="xs"
                            value={selectedFakultas}
                            labelKey="nama"
                            valueKey="id"
                            showLabel
                            onChange={handleChange('fakultas')}
                            className={"w-full md:w-40"}
                            options={fakultas}
                        />
                    </div>
                    <div className="grow">
                        <Select
                            label="Prodi"
                            size="xs"
                            labelKey="nama"
                            valueKey="id"
                            value={selectedProdi}
                            onChange={handleChange('prodi')}
                            showLabel
                            className={"w-full md:w-40"}
                            options={prodi}
                        />
                    </div>
                </div>
                <div className="flex gap-3 mt-4 md:mt-0">
                    <div className="grow w-full">
                        <Input size="xs" onChange={handleSearch} placeholder="Cari data disini" className="md:w-40"
                               leftIcon={<MagnifyingGlass weight="bold"/>}/>
                    </div>

                    <div className="grow w-full">
                        <Button onClick={() => {
                            resetForm()
                            setEditId(false)
                            setModalAdd(true)
                        }} className="w-full" filled leftIcon={<Plus weight="bold"/>}>Tambah Data</Button>
                    </div>


                </div>

            </div>

            <Table loading={query.isPending} columns={columns} data={query.data}>
                <TableHead>
                    <TableHeadRow>
                        {columns.map((e, index) => {
                            return (
                                <TableHeadCell pinned={e.pinned ?? false} key={index}>{e.name}</TableHeadCell>
                            )
                        })}
                    </TableHeadRow>

                </TableHead>

                <TableBody>

                    {query.data?.map((e, index) => {
                        return (
                            <TableBodyRow key={index}>
                                <TableBodyCell><Text size="xs">{e.id}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.alias}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.nama}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.nama_en}</Text></TableBodyCell>
                                <TableBodyCell>{e.status == 1 ?
                                    <Button variant="success" onClick={() => changeStatus(e.id, 0)}>Aktif</Button>
                                    :
                                    <Button variant="danger" onClick={() => changeStatus(e.id, 1)}>Tidak aktif</Button>
                                }</TableBodyCell>
                                <TableBodyCell>
                                    <div className="flex flex-row gap-3">
                                        <IconButton onClick={() => editInit(e.id)} size="sm" variant="warning">
                                            <PencilSimpleLine/>
                                        </IconButton>
                                        {/* <IconButton onClick={()=>setDeleteId(e.id)} size="sm" variant="danger">
                                            <Trash />
                                        </IconButton> */}
                                    </div>
                                </TableBodyCell>
                            </TableBodyRow>
                        )
                    })}
                </TableBody>

            </Table>

            <Modal size="lg" open={modalAdd} onClose={() => {
                setModalAdd(false)
                setEditId(false)
            }} title={editId ? 'Edit data konsentrasi' : 'Tambah data konsentrasi'}>
                <Modal.Body>
                    <div style={{width: '100%'}}>
                        <form className="grid mt-2 grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Input size="lg" error={errors?.nama} showHint value={formData.nama}
                                       onChange={handleForm('nama')} showLabel label="Nama konsentrasi"
                                       placeholder="Tulis nama konsentrasi"/>

                            </div>
                            <div>
                                <Input size="lg" error={errors?.nama_en} showHint value={formData.nama_en}
                                       onChange={handleForm('nama_en')} showLabel label="Nama dalam inggris"
                                       placeholder="Tulis nama dalam bahasa inggris"/>

                            </div>
                            <div>
                                <Input size="lg" error={errors?.alias} showHint value={formData.alias}
                                       onChange={handleForm('alias')} showLabel label="Nama alias"
                                       placeholder="Tulis nama alias"/>

                            </div>
                            <div className={editId ? 'hidden' : ''}></div>
                            <div className={editId ? 'hidden' : ''}>
                                <Select
                                    label="Fakultas"
                                    size="lg"
                                    value={formData.fakultas}
                                    showLabel
                                    labelKey="nama"
                                    valueKey="id"
                                    onChange={handleChange('fakultasInput')}
                                    options={fakultas}
                                />

                            </div>
                            <div className={editId ? 'hidden' : ''}>
                                <Select
                                    label="Prodi"
                                    size="lg"
                                    value={formData.prodi}
                                    labelKey="nama"
                                    valueKey="id"
                                    showLabel
                                    error={errors?.prodi}
                                    showHint
                                    onChange={handleForm('prodi')}
                                    options={prodiInput}
                                />
                            </div>
                        </form>


                    </div>
                </Modal.Body>

                <Modal.Footer>

                    {

                        (editId ?
                            <Button onClick={handleEdit} className={'mt-8'} filled>{editMutation.isPending ?
                                <Spinner size={12}/> : 'Perbarui'}</Button>
                            :
                            <Button onClick={handleSubmit} className={'mt-8'} filled>{createMutation.isPending ?
                                <Spinner size={12}/> : 'Tambah'}</Button>)
                    }
                    <Button onClick={() => setModalAdd(false)} className={'mt-8 ml-4'} variant="white">Batal</Button>
                </Modal.Footer>


            </Modal>

        </>
    )
}