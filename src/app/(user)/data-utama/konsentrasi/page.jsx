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
    Label,
    Input,
    Button,
    Pagination,
    Modal,
  } from "@/components";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function Peminatan(){
    const [modalAdd,setModalAdd] = useState(false)
    const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com', prodi: 'Test', a: 'halo',b: 'halo',c: 'halo' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', prodi: 'Test', a: 'halo',b: 'halo',c: 'halo' },
        { id: 3, name: 'Sam Green', email: 'sam@example.com', prodi: 'Test', a: 'halo',b: 'halo',c: 'halo' },

      ]
      const columns = [
        { name: 'KODE',pinned: true },
        { name: 'NAMA KONSENTRASI',pinned: true },
        { name: 'FAKULTAS',pinned: false},
        { name: 'NAMA PRODI',pinned: false},
        { name: 'LOREM',pinned: false },
        { name: 'IPSUM',pinned: false},
        { name: 'SIT DOLOR',pinned: false},
      ]
    return (
        <div>
            <div className="md:flex justify-between items-end">
                <div className="flex gap-3">
                    <div className="">
                        <Label>Fakultas</Label>
                        <Select
                            className={"w-40 mt-3"}
                            options={[{value: "1", label: "Menu Item 1"}]}

                        />
                    </div>
                    <div>
                        <Label>Prodi</Label>
                        <Select
                            className={"w-40 mt-3"}
                            options={[{value: "1", label: "Menu Item 1"}]}

                        />
                    </div>
                </div>
                <div className="flex gap-3 items-stretch mt-4 md:mt-0">
        
                        <Input placeholder="Cari data disini" className="w-40" leftIcon={<MagnifyingGlass/>}/>
             
                        
                        <Button onClick={()=>setModalAdd(true)} size="md" filled leftIcon={<Plus/>} >Tambah Data</Button>
           
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
                                <TableBodyCell><Text style={{fontSize: '13px'}}>{e.prodi}</Text></TableBodyCell>
                                <TableBodyCell><Text style={{fontSize: '13px'}}>{e.a}</Text></TableBodyCell>
                                <TableBodyCell><Text style={{fontSize: '13px'}}>{e.b}</Text></TableBodyCell>
                                <TableBodyCell><Text style={{fontSize: '13px'}}>{e.c}</Text></TableBodyCell>
                            </TableBodyRow>
                        )
                        })}
                </TableBody>
                
                </Table>

                <Pagination/>

                <Modal open={modalAdd} onClose={()=>setModalAdd(false)} title="Tambah data konsentrasi">
                    <div style={{width: '100%'}}>
                        <div>
                        <Label>Nama konsentrasi</Label>
                        <Input placeholder="Tulis nama konsentrasi"/>
                        </div>
                        
                        <div className="grid mt-2 grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label>Nama ketua konsentrasi</Label>
                                <Input placeholder="Tulis nama ketua konsentrasi"/>
                            </div>
                            <div>
                                <Label>NIP ketua konsentrasi</Label>
                                <Input placeholder="Tulis nama konsentrasi"/>
                            </div>
                            <div>
                                <Label>Nama sekertaris konsentrasi</Label>
                                <Input placeholder="Tulis nama sekertaris konsentrasi"/>
                            </div>
                            <div>
                                <Label>NIP sekertaris prodi</Label>
                                <Input placeholder="Tulis NIP sekertaris prodi"/>
                            </div>
                            <div>
                                <Label>Fakultas</Label>
                                <Select options={[{value: "1", label: "Menu Item 1"}]}>
                                    
                                </Select>
                            </div>
                            <div>
                                <Label>Prodi</Label>
                                <Select options={[{value: "1", label: "Menu Item 1"}]}>
                                    
                                </Select>
                            </div>
                        </div>

                        <Button className={'mt-8'} filled disabled>Tambah</Button>
                        <Button onClick={()=>setModalAdd(false)} className={'mt-8 ml-4'} variant="white" >Batal</Button>
                    </div>
                    
                    
                </Modal>
        </div>
    )
}