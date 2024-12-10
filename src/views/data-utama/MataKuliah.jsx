"use client"
import { Button, IconButton, Input, Modal, Select, Spinner, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableHeadRow, Text } from "@/components";
import { useToast } from "@/context/ToastContext";
import AxiosInstance from "@/libs/AxiosInstance";
import getYears from "@/utils/getYears";
import { MagnifyingGlass, PencilSimpleLine, Plus, Trash } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";

export default function MataKuliah() {
    const showToast = useToast();
    const [loading, setLoading] = useState(true)
    const [loadingSubmit, setLoadingSubmit] = useState(false)
    const [modalAdd, setModalAdd] = useState(false)
    const [dataSelect, setDataSelect] = useState([])
    const [selectedFakultas, setSelectedFakultas] = useState([])
    const [selectProdi, setSelectProdi] = useState([])
    const [selectedProdi, setSelectedProdi] = useState("")
    const [selectKonsentrasi, setSelectKonsentrasi] = useState([])
    const [selectedKonsentrasi, setSelectedKonsentrasi] = useState("")
    const [tahun, setTahun] = useState(getYears())
    const [selectedTahun, setSelectedTahun] = useState(new Date().getFullYear().toString())
    const [dataTable, setDataTable] = useState([])
    const [allData, setAllData] = useState([])
    const [deleteId, setDeleteId] = useState(false)

    //for formdata
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [editId, setEditId] = useState(false)
    const [tahunEdit, setTahunEdit] = useState('')
    const [selectInputProdi, setSelectInputProdi] = useState([])
    const [selectInputKonsentrasi, setSelectInputKonsentrasi] = useState([])
    const [selectInputTahun, setSelectInputTahun] = useState([])
    const [jenisMatkul,setJenisMatkul] = useState([])
    const [dataForm, setDataForm] = useState([])

    const fetchInit = async () => {
        try {
            const res = await AxiosInstance.get('/mata-kuliah/list/init')
            if (res.status == 200) {
                let dataFakultas = res.data.data.fakultas
                setDataSelect(dataFakultas)
                setSelectedFakultas(dataFakultas[0].id)
                setSelectProdi(dataFakultas[0].prodi)
                setSelectedProdi(dataFakultas[0].prodi[0].id)
                setSelectKonsentrasi(dataFakultas[0].prodi[0].konsentrasi)
                setSelectedKonsentrasi(dataFakultas[0].prodi[0].konsentrasi[0].id)
            }

            const resForm = await AxiosInstance.get('/mata-kuliah/form/init')
            console.log(resForm)
            if (resForm.status == 200) {
                setDataForm(resForm.data.data.fakultas)
                setJenisMatkul(resForm.data.data.jenis)
            }
        } catch (err) {

        }
    }

    const fetchMatkul = async () => {
        try {
            const res = await AxiosInstance.get(`/mata-kuliah/${selectedProdi ?? null}/${selectedKonsentrasi ?? null}/${selectedTahun}`)
            setDataTable(res.data.data)
            setAllData(res.data.data)
        } catch (err) {
            setDataTable([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchInit()
    }, [])

    useEffect(() => {
        fetchMatkul()
    }, [selectedProdi, selectedTahun, selectedKonsentrasi])

    const handleListChange = e => item => {
        if (e == 'fakultas') {
            let data = dataSelect.find(d => d.id == item.target.value)['prodi']
            setSelectProdi(data)
            setSelectedProdi(data[0].id)
            setSelectKonsentrasi(data[0].konsentrasi)
            setSelectedKonsentrasi(data[0].konsentrasi[0].id)
        } else if (e == 'prodi') {
            let data = selectProdi.find(d => d.id == item.target.value)['konsentrasi']
            setSelectedProdi(item.target.value)
            setSelectKonsentrasi(data)
            setSelectedKonsentrasi(data[0].id)
        } else if (e == 'konsentrasi') {
            setSelectedKonsentrasi(item.target.value)
        } else if (e == 'tahun') {
            setSelectedTahun(item.target.value)
        }
    }

    const handleForm = (field) => (e) => {
        let value = e?.target?.value ?? e.id

        if(field != 'fakultas'){
            setFormData((prev) => ({
                ...prev,
                [field]: value,
            }));
        }
        

        if (field == 'fakultas') {
            let data = dataForm.find(d => d.id == value)['prodi']
            setSelectInputProdi(data)
            setSelectInputKonsentrasi(data[0]?.konsentrasi)
            setFormData((prev) => ({
                ...prev,
                ['prodi']: data[0].id,
                ['konsentrasi']: data[0]?.konsentrasi?.[0]?.id
            }));
        } else if (field == 'prodi') {
            let data = selectInputProdi.find(d => d.id == value)['konsentrasi']
            console.log(data)
            setSelectInputKonsentrasi(data)
            setFormData((prev) => ({
                ...prev,
                ['konsentrasi']: data[0]?.konsentrasi?.[0]?.id
            }));
        }
        
    }

    const editInit = async (id) => {
        try{
            const res = await AxiosInstance.get(`/mata-kuliah/${id}/${selectedTahun}`)
            if(res.status = 200){
                let data = res.data.data
                resetForm()
                setModalAdd(true)
                setEditId(id)
                setTahunEdit(data.th_kur)
                setFormData({
                    nama: data.nama,
                    nama_en: data.nama_en,
                    jenis: data.jenis.id,
                    sks_kuliah: data.sks_kuliah,
                    sks_praktik: data.sks_praktik,
                    sks_seminar: data.sks_seminar,
                })
            }
            
            
        }catch(err){

        }
        
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setLoadingSubmit(true)
        try {
            let formdata = {
                ...formData,
                sks_total: parseInt(formData.sks_kuliah) + parseInt(formData.sks_praktik) + parseInt(formData.sks_seminar)
            }
            const res = editId ? await AxiosInstance.put(`/mata-kuliah/${editId}/${tahunEdit}`, formdata) : await AxiosInstance.post('/mata-kuliah', formdata)

            if (res.status == 200) {
                if(!editId){
                    if(selectedProdi == formData.prodi && selectedKonsentrasi == (formData.konsentrasi == null ? 'all' : '') && selectedTahun == formData.th_kur){
                        fetchMatkul()
                    }
                    setSelectedFakultas(formData.prodi.substring(0, 2))

                    let data = dataSelect.find(d => d.id == formData.prodi.substring(0, 2))['prodi']
                    setSelectProdi(data)
                    setSelectedProdi(formData.prodi)
    
                    let kons = data.find(d => d.id == formData.prodi)['konsentrasi']
                    setSelectKonsentrasi(kons)
                    setSelectedKonsentrasi(formData.konsentrasi == null ? 'all' : formData.konsentrasi)
                    setSelectedTahun(formData.th_kur)
                    
                }
                
                setModalAdd(false)
                showToast(`Data berhasil ${editId ? 'diubah' : 'ditambahkan'}`, `Anda telah berhasil ${editId ? 'mengubah' : 'menambahkan'} data`, "success")
                resetForm()
  
            }
        } catch (err) {
            if (err.status == 422) {
                setErrors(err.response.data.errors)
            }
        } finally {
            setLoadingSubmit(false)
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        try{
            const res = await AxiosInstance.delete(`/mata-kuliah/${deleteId}/${selectedTahun}`)
            setDeleteId(false)
            setTahunEdit('')
            showToast(`Data berhasil dihapus`, `Anda telah berhasil menghapus data`, "success")
            fetchMatkul()
        }catch(err){
        }
        
    }

    const handleSearch = e => {
        let keyword = e.target.value
        setDataTable(allData.filter(item =>
            item.nama.toLowerCase().includes(keyword.toLowerCase())
        ))
    }

    const columns = [
        { name: 'kode mk', pinned: true },
        { name: 'nama mk', pinned: true },
        { name: 'nama mk (EN)', pinned: true },
        { name: 'sks' },
        { name: 'jenis mk', pinned: false },
        { name: 'actions', pinned: false },
    ]

    const resetForm = () => {
        setFormData({})
        setErrors({})
        setEditId(false)
        setTahunEdit('')
    }

    return (
        <div>

            <div className="md:flex justify-between gap-3">
                <div className="grow">
                    <Select
                        label="Fakultas"
                        size="xs"
                        showLabel
                        value={selectedFakultas}
                        className={"w-full"}
                        options={dataSelect}
                        onChange={handleListChange('fakultas')}
                        labelKey="nama"
                        valueKey="id"
                    />
                </div>
                <div className="grow">
                    <Select
                        label="Prodi"
                        size="xs"
                        showLabel
                        value={selectedProdi}
                        className={"w-full"}
                        options={selectProdi}
                        onChange={handleListChange('prodi')}
                        labelKey="nama"
                        valueKey="id"
                    />
                </div>
                <div className="grow">
                    <Select
                        label="Konsentrasi"
                        size="xs"
                        showLabel
                        value={selectedKonsentrasi}
                        className={"w-full"}
                        options={selectKonsentrasi}
                        onChange={handleListChange('konsentrasi')}
                        labelKey="nama"
                        valueKey="id"
                    />
                </div>
                <div className="grow">
                    <Select
                        label="Tahun kurikulum"
                        size="xs"
                        showLabel
                        value={selectedTahun}
                        options={tahun}
                        onChange={handleListChange('tahun')}
                        labelKey="nama"
                        valueKey="id"
                        className={"w-full"}
                    />
                </div>
            </div>

            <div className="flex gap-3 mt-4 mt-5">
                <div className="grow w-full">
                    <Input size="xs" onChange={handleSearch} placeholder="Cari data disini" className="w-full" leftIcon={<MagnifyingGlass weight="bold" />} />
                </div>

                <div className="grow w-full">
                    <Button onClick={() => {
                        resetForm()
                        setEditId(false)
                        setModalAdd(true)
                    }} className="w-full" filled leftIcon={<Plus weight="bold" />} >Tambah Data</Button>
                </div>


            </div>

            <Table loading={loading} columns={columns} data={dataTable}>
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

                    {dataTable.map((e, index) => {
                        return (
                            <TableBodyRow key={index}>
                                <TableBodyCell><Text size="xs">{e.id}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs" >{e.nama}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.nama_en}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.sks_total}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.jenis.nama}</Text></TableBodyCell>
                                <TableBodyCell className="flex flex-row gap-3">
                                    <IconButton onClick={() => editInit(e.id)} size="sm" variant="warning">
                                        <PencilSimpleLine />
                                    </IconButton>
                                    <IconButton onClick={()=>setDeleteId(e.id)} size="sm" variant="danger">
                                        <Trash />
                                    </IconButton>
                                </TableBodyCell>
                            </TableBodyRow>
                        )
                    })}
                </TableBody>

            </Table>

            <Modal open={deleteId} onClose={() => setDeleteId(false)} title="Hapus data konsentrasi">
                    <Modal.Body>
                        <Text>Apakah Anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dibatalkan.</Text>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete} className={'mt-8'} filled>Hapus</Button>
                    <Button onClick={() => setDeleteId(false)} className={'mt-8 ml-4'} variant="white" >Batal</Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" open={modalAdd} onClose={() => setModalAdd(false)} title={editId ? 'Edit data mata kuliah' : 'Tambah data mata kuliah'}>
                <Modal.Body>
                    <div style={{ width: '100%' }}>
                        <div className="grid grid-cols-12 gap-4">
                            <div className={`col-span-12 md:col-span-6 ${editId ? 'hidden' : ''}`}>
                                <Select value={formData.fakultas} onChange={handleForm('fakultas')} label="Fakultas" showLabel placeholder="pilih fakultas" options={dataForm} labelKey="nama" valueKey="id" />
                            </div>
                            <div className={`col-span-12 md:col-span-6 ${editId ? 'hidden' : ''}`}>
                                <Select error={errors?.prodi} showHint value={formData.prodi} onChange={handleForm('prodi')} label="Program studi" showLabel placeholder="pilih program studi" options={selectInputProdi} labelKey="nama"
                                valueKey="id" />
                            </div>
                            <div className={`col-span-12  md:col-span-6 ${editId ? 'hidden' : ''}`}>
                                <Select error={errors?.konsentrasi} showHint value={formData.konsentrasi} onChange={handleForm('konsentrasi')} label="Konsentrasi" showLabel placeholder="Pilih konsentrasi" options={selectInputKonsentrasi} labelKey="nama"
                                valueKey="id" />
                            </div>
                            <div className={`col-span-12  md:col-span-6 ${editId ? 'hidden' : ''}`}>
                                <Select error={errors?.th_kur} showHint value={formData.th_kur} onChange={handleForm('th_kur')} label="Tahun kurikulum" showLabel placeholder="Pilih tahun kurikulum" options={tahun} labelKey="nama"
                                valueKey="id" />
                            </div>
                            <div className={`col-span-12  md:col-span-6`}>
                                <Input error={errors?.nama} showHint value={formData.nama} onChange={handleForm('nama')} label="Nama mata kuliah (Indonesia)" showLabel placeholder="Tulis nama mata kuliah" />
                            </div>
                            <div className={`col-span-12  md:col-span-6`}>
                                <Input error={errors?.nama_en} showHint value={formData.nama_en} onChange={handleForm('nama_en')} label="Nama mata kuliah (Inggris)" showLabel placeholder="Tulis nama mata kuliah" />
                            </div>
                            <div className={`col-span-12  md:col-span-6 ${editId ? 'hidden' : ''}`}>
                                <Input error={errors?.kode} showHint value={formData.kode} onChange={handleForm('kode')} label="Kode mata kuliah" showLabel placeholder="Tulis kode mata kuliah" />
                            </div>
                            <div className={`col-span-12 ${editId ? 'md:col-span12' : 'md:col-span-6'}`}>
                                <Select error={errors?.jenis} showHint value={formData.jenis} onChange={handleForm('jenis')} label="Jenis mata kuliah" showLabel placeholder="Pilih jenis mata kuliah" options={jenisMatkul} valueKey="id" labelKey="nama" />
                            </div>

                            <div className={`col-span-12  md:col-span-4`}>
                                <Input error={errors?.sks_kuliah} showHint value={formData.sks_kuliah} onChange={handleForm('sks_kuliah')} type="number" label="SKS kuliah" showLabel placeholder="Tulis SKS kuliah" />
                            </div>
                            <div className={`col-span-12  md:col-span-4`}>
                                <Input error={errors?.sks_praktik} showHint value={formData.sks_praktik} onChange={handleForm('sks_praktik')} type="number" label="SKS praktik" showLabel placeholder="Tulis SKS praktik" />
                            </div>
                            <div className={`col-span-12  md:col-span-4`}>
                                <Input error={errors?.sks_seminar} showHint value={formData.sks_seminar} onChange={handleForm('sks_seminar')} type="number" label="SKS seminar" showLabel placeholder="Tulis SKS seminar" />
                            </div>

                        </div>

                    </div>
                </Modal.Body>

                <Modal.Footer>
                    {

                        (editId ?
                            <Button onClick={handleSubmit} className={'mt-8'} filled >{loadingSubmit ? <Spinner size={12} /> : 'Perbarui'}</Button>
                            :
                            <Button onClick={handleSubmit} className={'mt-8'} filled >{loadingSubmit ? <Spinner size={12} /> : 'Tambah'}</Button>)
                    }
                    <Button onClick={() => setModalAdd(false)} className={'mt-8 ml-4'} variant="white" >Batal</Button>
                </Modal.Footer>

            </Modal>
        </div>
    )
}