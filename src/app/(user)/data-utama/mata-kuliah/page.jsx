"use client"
import { Button, Input, Modal, Select } from "@/components";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function MataKuliah(){
    const [modalAdd,setModalAdd] = useState(false)
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

            <Modal size="lg" open={modalAdd} onClose={()=>setModalAdd(false)} title="Tambah data mata kuliah">
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
                        <Button className={'mt-8'} filled disabled>Tambah</Button>
                        <Button onClick={()=>setModalAdd(false)} className={'mt-8 ml-4'} variant="white" >Batal</Button>
                    </div>
                </Modal>
        </div>
    )
}