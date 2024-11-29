"use client"
import { Button, Input, Modal, Select, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableHeadRow, Text } from "@/components";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function MataKuliah(){
    const [modalAdd,setModalAdd] = useState(false)
    const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com',},
        { id: 2, name: 'Jane Smith', email: 'jane@example.com',},
        { id: 3, name: 'Sam Green', email: 'sam@example.com',},

      ]
      const columns = [
        { name: 'kode mk',pinned: true },
        { name: 'nama mk',pinned: true },
        { name: 'jenis mk',pinned: false},
        { name: 'tahun kurikulum',pinned: false},
        { name: 'user entri',pinned: false},
        { name: 'actions',pinned: false},
      ]
    return (
        <div>
            <div className="md:flex justify-between items-end">
                <div className="flex gap-3">
                    <div className="grow">
                        <Select
                            label="Jenis mata kuliah"
                            size="xs"
                            showLabel
                            className={"w-full md:w-40"}
                            options={[{value: "1", label: "Menu Item 1"}]}
                        />
                    </div>
                    <div className="grow">
                        <Select
                            label="Tahun kurikulum"
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
                                <TableBodyCell><Text size="xs">{e.email}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.email}</Text></TableBodyCell>
                                <TableBodyCell></TableBodyCell>
                            </TableBodyRow>
                        )
                        })}
                </TableBody>
                
                </Table>

            <Modal size="lg" open={modalAdd} onClose={()=>setModalAdd(false)} title="Tambah data mata kuliah">
                <Modal.Body>
                     <div style={{width: '100%'}}>
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-6">
                                            <Select label="Fakultas" showLabel placeholder="pilih fakultas" options={[{value: "1", label: "Menu Item 1"}]} />
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                            <Input label="Program studi" showLabel placeholder="Pilih program studi" />
                                    </div>
                                    <div className="col-span-12  md:col-span-6">
                                            <Select label="Konsentrasi" showLabel placeholder="Pilih konsentrasi" options={[{value: "1", label: "Menu Item 1"}]} />
                                    </div>
                                    <div className="col-span-12  md:col-span-6">
                                            <Select label="Tahun kurikulum" showLabel placeholder="Pilih tahun kurikulum" options={[{value: "1", label: "Menu Item 1"}]} />
                                    </div>
                                    <div className="col-span-12  md:col-span-6">
                                            <Input label="Nama mata kuliah (Indonesia)" showLabel placeholder="Tulis nama mata kuliah" />
                                    </div>
                                    <div className="col-span-12  md:col-span-6">
                                            <Input label="Nama mata kuliah (Inggris)" showLabel placeholder="Tulis nama mata kuliah" />
                                    </div>
                                    <div className="col-span-12  md:col-span-4">
                                            <Input label="Kode mata kuliah" showLabel placeholder="Tulis kode mata kuliah" />
                                    </div>
                                    <div className="col-span-12  md:col-span-4">
                                            <Select label="Jenis mata kuliah" showLabel placeholder="Pilih jenis mata kuliah" options={[{value: "1", label: "Menu Item 1"}]} />
                                    </div>
                                    <div className="col-span-12  md:col-span-4">
                                            <Select label="Jumlah SKS" showLabel placeholder="Pilih jumlah sks" options={[{value: "1", label: "Menu Item 1"}]} />
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