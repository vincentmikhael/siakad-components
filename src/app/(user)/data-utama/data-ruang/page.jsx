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
      const pinnedColumns = [0, 1];
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

                <div className="flex justify-end items-center gap-3 mt-4 md:mt-0">
                    <div className="grow md:flex-none w-full md:w-auto">
                        <Input size="xs" placeholder="Cari data disini" className="md:w-40" leftIcon={<MagnifyingGlass weight="bold"/>}/>
                    </div>
                    <div className="grow md:flex-none w-full md:w-auto">
                        <Button onClick={()=>setModalAdd(true)} className={'w-full'} filled leftIcon={<Plus weight="bold"/>} >Tambah Data</Button>
                    </div>  
                </div>
            </div>

            <Table loading={false} columns={columns} data={data} pinned={pinnedColumns}>
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
                                <TableBodyCell><Text size="xs">{e.id}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs" >{e.name}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.email}</Text></TableBodyCell>
                            </TableBodyRow>
                        )
                        })}
                </TableBody>
                
                </Table>

                <Modal size="lg" open={modalAdd} onClose={()=>setModalAdd(false)} title="Tambah data ruang">
                    <Modal.Body>
                        <div style={{width: '100%'}}>
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-4">
                                            <Select label="Lokasi kampus" showLabel placeholder="pilih lokasi kampus" options={[{value: "1", label: "Menu Item 1"}]} />
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                            <Input label="Nama gedung" showLabel placeholder="Tulis nama gedung" />
                                    </div>
                                    <div className="col-span-12  md:col-span-4">
                                            <Select label="Lantai" showLabel placeholder="Pilih lantai" options={[{value: "1", label: "Menu Item 1"}]} />
                                    </div>
                                    <div className="col-span-12  md:col-span-6">
                                            <Input label="Jumlah kapasitas" showLabel placeholder="Tulis jumlah kapasitas" />
                                    </div>
                                    <div className="col-span-12  md:col-span-6">
                                            <Select label="Program studi" showLabel placeholder="Pilih program studi" options={[{value: "1", label: "Menu Item 1"}]} />
                                    </div>
                                    
                                </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button className={'mt-8'} filled disabled>Tambah</Button>
                        <Button onClick={()=>setModalAdd(false)} className={'mt-8 ml-4'} variant="white" >Batal</Button>
                    </Modal.Footer>
                    
                    
                    
                </Modal>

        </div>
    )
}

export default DataRuang