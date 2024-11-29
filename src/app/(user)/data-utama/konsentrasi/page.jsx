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
    Pagination,
    Modal,
    IconButton,
    Alert,
    Spinner,
} from "@/components";
import AxiosInstance from "@/libs/AxiosInstance";
import { MagnifyingGlass, PencilSimpleLine, Plus, Trash } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";

export default function Konsentrasi() {
    const [loading,setLoading] = useState(true)
    const [loadingSubmit,setLoadingSubmit] = useState(false)
    const [modalAdd, setModalAdd] = useState(false)
    const [fakultas, setFakultas] = useState([])
    const [dataProdi,setDataProdi] = useState([])
    const [prodi, setProdi] = useState([])
    const [selectedFakultas, setSelectedFakultas] = useState("")
    const [selectedProdi, setSelectedProdi] = useState("")
    const [allDataTable,setAllDataTable] = useState([])
    const [dataTable,setDataTable] = useState([])
    const [deleteId, setDeleteId] = useState(false)
    const [editId, setEditId] = useState(false)

    //for formdata
    const [prodiInput, setProdiInput] = useState([])
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    async function fetchInit() {
        try {
            const res = await AxiosInstance.get('/konsentrasi/list/init')
            if (res.status == 200) {
                setDataProdi(res.data.data.prodi)
                setFakultas(res.data.data.fakultas)
                if(res.data.data.fakultas.length > 0){
                    setSelectedFakultas(res.data.data.fakultas[0].id)
                } 
            }
        } catch (err) {
            console.log(err)
        }
    }

    async function fetchKonsentrasi(){
        try{
            const res = await AxiosInstance.get(`/konsentrasi/${selectedProdi}`)
            if(res.status == 200){
                setDataTable(res.data.data)
                setAllDataTable(res.data.data)
                setLoading(false)
            }
        }catch(err){
            console.log(err)
        }
    }
    
    useEffect(()=>{
        let setData = dataProdi.filter((prodi) => prodi.id.startsWith(selectedFakultas))
        setProdi(setData)
        if(setData.length > 0){
            setSelectedProdi(formData.prodi ?? setData[0].id)
        }
        console.log('jalan 1',formData)
        return () =>{
            resetForm()
        }
    },[selectedFakultas])

    useEffect(()=>{
        fetchKonsentrasi()
    },[selectedProdi])


    useEffect(() => {
        fetchInit()
    }, [])

    const handleChange = (e) => (item) =>{
        console.log(item)
        if(e == 'fakultas'){
            setSelectedFakultas(item.id)
        }else if(e == 'prodi'){
            setSelectedProdi(item.id)
        }else if(e == 'fakultasInput'){
            // setFormData((prevData) => ({
            //     ...prevData,
            //     [item.name]: item.id,
            //   }));

              setProdiInput(dataProdi.filter((prodi) => prodi.id.startsWith(item.id)))
        }
    }

    const columns = [
        { name: 'KODE' },
        { name: 'ALIAS' },
        { name: 'NAMA' },
        { name: 'NAMA INGGRIS' },
        { name: 'STATUS'},
        { name: 'ACTIONS' },
    ]

    const handleForm = (field) => (e) =>{
        let value = e?.target?.value ?? e.id
 
        setFormData((prev) => ({
          ...prev,
          [field]: value,
        }));
    }

    const handleSearch = e =>{
        let keyword = e.target.value
        setDataTable(allDataTable.filter(item =>
            item.nama.toLowerCase().includes(keyword.toLowerCase()) ||
            item.nama_en.toLowerCase().includes(keyword.toLowerCase()) ||
            item.alias.toLowerCase().includes(keyword.toLowerCase())
        ))
    }

    const editInit = (id) =>{
        resetForm()
        setModalAdd(true)
        setEditId(id)
        const data = dataTable.find(item => item.id === id);
        setFormData({
            nama: data.nama,
            nama_en: data.nama_en,
            alias: data.alias
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoadingSubmit(true)
        try{
            const res = await AxiosInstance.post('/konsentrasi',{
                nama: formData.nama,
                nama_en: formData.nama_en,
                alias: formData.alias,
                prodi: formData.prodi
              })
              if(res.status == 200){
                     setSelectedFakultas(formData.prodi.substring(0, 2))
                     fetchKonsentrasi()
                     setModalAdd(false)
                     setSelectedProdi(formData.prodi)
                     console.log('jalan 2')
               }
        }catch(err){
            if(err.status == 422){
                    setErrors(err.response.data.errors)
            }
            
        }finally{
            console.log('aoaii')
            setLoadingSubmit(false)
        }
        
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        setLoadingSubmit(true)
        try{
            const res = await AxiosInstance.put(`/konsentrasi/${editId}`,{
                nama: formData.nama,
                nama_en: formData.nama_en,
                alias: formData.alias,
              })
              if(res.status == 200){
                     resetForm()
                     fetchKonsentrasi()
                     setEditId(false)
                     setModalAdd(false)
                     
               }
        }catch(err){
            if(err.status == 422){
                    setErrors(err.response.data.errors)
                    
            }
            
        }
        setLoadingSubmit(false)
    }

    // const handleDelete = async (e) => {
    //     e.preventDefault();
    //     const res = await AxiosInstance.put(`/konsentrasi/status/${deleteId}`,{
    //         status: 0
    //     })
    //     console.log(res)
    // }

    const changeStatus = async (id,stat) =>{
        try{
            const res = await AxiosInstance.put(`/konsentrasi/status/${id}`,{
                status: stat
            })
            fetchKonsentrasi()
        }catch(err){
            console.log(err)
        }
    }

    const resetForm = ()=>{
        setFormData({})
        setErrors({})
        setProdiInput({})
    }
    
    return (
        <div>
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
                        <Input size="xs" onChange={handleSearch} placeholder="Cari data disini" className="md:w-40" leftIcon={<MagnifyingGlass weight="bold" />} />
                    </div>

                    <div className="grow w-full">
                        <Button onClick={() => {
                            resetForm()
                            setEditId(false)
                            setModalAdd(true)
                        }} className="w-full" filled leftIcon={<Plus weight="bold" />} >Tambah Data</Button>
                    </div>


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
                                <TableBodyCell><Text size="xs" >{e.alias}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs" >{e.nama}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.nama_en}</Text></TableBodyCell>
                                <TableBodyCell>{e.status == 1 ?
                                <Button variant="success" onClick={()=>changeStatus(e.id,0)}>Aktif</Button>
                                :
                                <Button variant="danger" onClick={()=>changeStatus(e.id,1)}>Tidak aktif</Button>
                                }</TableBodyCell>
                                <TableBodyCell>
                                    <div className="flex flex-row gap-3">
                                        <IconButton onClick={()=>editInit(e.id)} size="sm" variant="warning">
                                            <PencilSimpleLine />
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

            {/* <Modal open={deleteId} onClose={() => setDeleteId(false)} title="Hapus data konsentrasi">
                    <Modal.Body>
                        <Text>Apakah Anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dibatalkan.</Text>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete} className={'mt-8'} filled disabled={!validateForm}>Hapus</Button>
                    <Button onClick={() => setDeleteId(false)} className={'mt-8 ml-4'} variant="white" >Batal</Button>
                </Modal.Footer>
            </Modal> */}

            <Modal size="lg" open={modalAdd} onClose={() => {
                setModalAdd(false) 
                setEditId(false)}} title={ editId ? 'Edit data konsentrasi' : 'Tambah data konsentrasi'}>
                <Modal.Body>
                    <div style={{ width: '100%' }}>

                        <form className="grid mt-2 grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Input error={errors.nama && <Text size="xs" style={{ color: 'red' }}>{errors.nama}</Text>} showHint value={formData.nama} onChange={handleForm('nama')} showLabel label="Nama konsentrasi" placeholder="Tulis nama konsentrasi" />
                                
                            </div>
                            <div>
                                <Input error={errors.nama_en && <Text size="xs" style={{ color: 'red' }}>{errors.nama_en}</Text>} showHint value={formData.nama_en} onChange={handleForm('nama_en')} showLabel label="Nama dalam inggris" placeholder="Tulis nama dalam bahasa inggris" />
                                
                            </div>
                            <div>
                                <Input error={errors.alias && <Text size="xs" style={{ color: 'red' }}>{errors.alias}</Text>} showHint value={formData.alias} onChange={handleForm('alias')} showLabel label="Nama alias" placeholder="Tulis nama alias" />
                                
                            </div>
                            <div className={editId ? 'hidden' : ''}></div>
                            <div className={editId ? 'hidden' : ''}>
                            <Select
                                label="Fakultas"
                                size="xs"
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
                                size="xs"
                                value={formData.prodi}
                                labelKey="nama"
                                valueKey="id"
                                showLabel
                                error={errors.prodi && <Text size="xs" style={{ color: 'red' }}>{errors.prodi}</Text>}
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
                            <Button onClick={handleEdit} className={'mt-8'} filled >{loadingSubmit ? <Spinner size={12}/> : 'Perbarui'}</Button>
                            :
                            <Button onClick={handleSubmit} className={'mt-8'} filled >{loadingSubmit ? <Spinner size={12}/> : 'Tambah'}</Button>)
                    }
                    <Button onClick={() => setModalAdd(false)} className={'mt-8 ml-4'} variant="white" >Batal</Button>
                </Modal.Footer>



            </Modal>
        </div>
    )
}