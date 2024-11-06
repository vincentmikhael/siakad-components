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
  } from "@/components";
import { MagnifyingGlass, PencilSimpleLine, Plus, Trash } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function Konsentrasi(){
    const [modalAdd,setModalAdd] = useState(false)
    const data = [
        { 
            id: 1, 
            name: 'John Doe', 
            email: 'john@example.com', 
            prodi: 'INFORMATIKA', 
            wd1: {
                id: "1073",
                nama: "Dr. Irrine Budi Sulistiawati, ST, MT",
                kd_nip: " ",
                nip: "197706152005012002",
            },b: 'lorem',c: 'lorem' },
        {   id: 2, 
            name: 'Jane Smith', 
            email: 'jane@example.com', 
            prodi: 'INFORMATIKA', 
            wd1: {
                id: "1073",
                nama: "Dr. Irrine Budi Sulistiawati, ST, MT",
                kd_nip: " ",
                nip: "197706152005012002",
            },
            b: 'lorem',c: 'lorem' },
        {   id: 3, 
            name: 'Sam Green', 
            email: 'sam@example.com', 
            prodi: 'INFORMATIKA', 
            wd1: {
                id: "1073",
                nama: "Dr. Irrine Budi Sulistiawati, ST, MT",
                kd_nip: " ",
                nip: "197706152005012002",
            },
            b: 'lorem',
            c: 'lorem' },

      ]
      const columns = [
        { name: 'KODE'},
        { name: 'NAMA KONSENTRASI'},
        { name: 'FAKULTAS'},
        { name: 'NAMA PRODI'},
        { name: 'KETUA KONSENTRASI' },
        { name: 'SEKRETARIS KONSENTRASI'},
        { name: 'ACTIONS'},
      ]
      const pinnedColumns = [0, 1];
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
                                <TableBodyCell><Text size="xs">{e.prodi}</Text></TableBodyCell>
                                <TableBodyCell>
                                    <div className="flex flex-col gap-1">
                                        <Text size="xs">{e.wd1.nama}</Text>
                                        <Text size="xs" color="text-gray-50">
                                            {e.wd1?.kd_nip} {e.wd1.nip}
                                        </Text>
                                    </div>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <div className="flex flex-col gap-1">
                                        <Text size="xs">{e.wd1.nama}</Text>
                                        <Text size="xs" color="text-gray-50">
                                            {e.wd1?.kd_nip} {e.wd1.nip}
                                        </Text>
                                    </div>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <div className="flex flex-row gap-3">
                                        <IconButton size="sm" variant="warning">
                                            <PencilSimpleLine/>
                                        </IconButton>
                                        <IconButton size="sm" variant="danger">
                                            <Trash/>
                                        </IconButton>
                                    </div>
                                </TableBodyCell>
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