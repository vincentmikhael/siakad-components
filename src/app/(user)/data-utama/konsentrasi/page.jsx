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

export default function Konsentrasi(){
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
                    <div className="grow">
                        <Select
                            label="Fakultas"
                            size="xs"
                            showLabel
                            className={"w-full md:w-40"}
                            options={[{value: "1", label: "Menu Item 1"}]}
                        />
                    </div>
                    <div className="grow">
                        <Select
                            label="Prodi"
                            size="xs"
                            showLabel
                            className={"w-full md:w-40"}
                            options={[{value: "1", label: "Menu Item 1"}]}
                        />
                    </div>
                </div>
                <div className="flex gap-3 mt-4 md:mt-0">
                    <div className="grow w-full">
                        <Input size="xs" placeholder="Cari data disini" className="md:w-40" leftIcon={<MagnifyingGlass weight="bold"/>}/> 
                    </div>

                    <div className="grow w-full">
                        <Button onClick={()=>setModalAdd(true)} className="w-full" filled leftIcon={<Plus weight="bold"/>} >Tambah Data</Button>
                    </div>
                                  
                        
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
                                <TableBodyCell><Text size="xs">{e.id}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs" >{e.name}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.email}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.prodi}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.a}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.b}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.c}</Text></TableBodyCell>
                            </TableBodyRow>
                        )
                        })}
                </TableBody>
                
                </Table>

                <Pagination/>

                <Modal size="lg" open={modalAdd} onClose={()=>setModalAdd(false)} title="Tambah data konsentrasi">
                    <Modal.Body>
                    <div style={{width: '100%'}}>
                        <div>
                        <Input showLabel label="Nama konsentrasi" placeholder="Tulis nama konsentrasi"/>
                        </div>
                        
                        <div className="grid mt-2 grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Input showLabel label="Nama ketua konsentrasi" placeholder="Tulis nama ketua konsentrasi"/>
                            </div>
                            <div>
                                <Input showLabel label="NIP ketua konsentrasi" placeholder="Tulis NIP"/>
                            </div>
                            <div>
                                <Input showLabel label="Nama sekertaris konsentrasi" placeholder="Tulis nama sekertaris konsentrasi"/>
                            </div>
                            <div>
                                <Input showLabel label="NIP sekertaris prodi" placeholder="Tulis NIP sekertaris prodi"/>
                            </div>
                            <div>
                                <Select showLabel label="Fakultas" options={[{value: "1", label: "Menu Item 1"}]}>
                                    
                                </Select>
                            </div>
                            <div>
                                <Select showLabel label="Prodi" options={[{value: "1", label: "Menu Item 1"}]}>
                                    
                                </Select>
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