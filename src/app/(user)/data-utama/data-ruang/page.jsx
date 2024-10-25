"use client"
import { Button, Checkbox, Input, Label, Modal, Select, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableHeadRow, Text } from "@/components"
import { MagnifyingGlass, Plus } from "@phosphor-icons/react/dist/ssr"
import { useState } from "react"

const DataRuang = () =>{
    const [modalAdd,setModalAdd] = useState(false)
    const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com',},
        { id: 2, name: 'Jane Smith', email: 'jane@example.com',},
        { id: 3, name: 'Sam Green', email: 'sam@example.com',},

      ]
      const columns = [
        { name: 'TES',pinned: true },
        { name: 'TES',pinned: true },
        { name: 'TES',pinned: false},
      ]
    return (
        <div>
            <div className="md:flex justify-between items-end">
                <div>
                    <Label>Lokasi</Label>
                    <div className="flex gap-4 mt-2">
                        <Checkbox>Kampus 1</Checkbox>
                        <Checkbox>Kampus 2</Checkbox>
                    </div>
                </div>
                <div className="flex gap-3 items-stretch mt-4 md:mt-0">
        
                        <Input placeholder="Cari data disini" className="w-40" leftIcon={<MagnifyingGlass/>}/>
             
                        
                        <Button onClick={()=>setModalAdd(true)} size="md" filled leftIcon={<Plus/>} ><span className="hidden md:block">Tambah Data</span></Button>
           
                </div>
            </div>

            <Table loading={false} columns={columns} data={data}>
                <TableHead>
                    <TableHeadRow>
                        {columns.map((e,index)=>{
                            return (
                            <TableHeadCell pinned={e.pinned ?? false} key={index}>{e.name}</TableHeadCell>
                            )
                        })}
                    </TableHeadRow>
                    
                </TableHead>

                <TableBody>
                    
                        {data.map((e,index)=>{
                        return (
                            <TableBodyRow key={index}>
                                <TableBodyCell><Text style={{fontSize: '13px'}}>{e.id}</Text></TableBodyCell>
                                <TableBodyCell><Text style={{fontSize: '13px'}} >{e.name}</Text></TableBodyCell>
                                <TableBodyCell><Text style={{fontSize: '13px'}}>{e.email}</Text></TableBodyCell>
                            </TableBodyRow>
                        )
                        })}
                </TableBody>
                
                </Table>

                <Modal size="lg" open={modalAdd} onClose={()=>setModalAdd(false)} title="Tambah data konsentrasi">
                    <div style={{width: '100%'}}>
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-4">
                                            <Label>Lokasi kampus</Label>
                                            <Select placeholder="pilih lokasi kampus" options={[{value: "1", label: "Menu Item 1"}]} />
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                            <Label>Nama gedung</Label>
                                            <Input placeholder="Tulis nama gedung" />
                                    </div>
                                    <div className="col-span-12  md:col-span-4">
                                            <Label>Lantai</Label>
                                            <Select placeholder="Pilih lantai" options={[{value: "1", label: "Menu Item 1"}]} />
                                    </div>
                                    <div className="col-span-12  md:col-span-6">
                                            <Label>Jumlah Kapasitas</Label>
                                            <Input placeholder="Tulis jumlah kapasitas" />
                                    </div>
                                    <div className="col-span-12  md:col-span-6">
                                            <Label>Program studi</Label>
                                            <Select placeholder="Pilih program studi" options={[{value: "1", label: "Menu Item 1"}]} />
                                    </div>
                                    
                                </div>

                        <Button className={'mt-8'} filled disabled>Tambah</Button>
                        <Button onClick={()=>setModalAdd(false)} className={'mt-8 ml-4'} variant="white" >Batal</Button>
                    </div>
                    
                    
                </Modal>

        </div>
    )
}

export default DataRuang