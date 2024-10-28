"use client"
import { Button, DateInput, Input, Label, Modal, Pagination, Select, Stepper, StepperContainer, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableHeadRow, Text } from "@/components";
import Radio from "@/components/Radio";
import { Envelope, MagnifyingGlass, Phone, Plus } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function Dosen(){
    const [modalAdd,setModalAdd] = useState(false)
    const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com',},
        { id: 2, name: 'Jane Smith', email: 'jane@example.com',},
        { id: 3, name: 'Sam Green', email: 'sam@example.com',},

      ]
      const columns = [
        { name: 'tes',pinned: true },
        { name: 'tes',pinned: true },
        { name: 'tes',pinned: false},
      ]
    return (
        <div>
            <div className="flex justify-end items-center gap-3">
                <div className="grow md:flex-none w-full md:w-auto">
                    <Input size="xs" placeholder="Cari data disini" className="md:w-40" leftIcon={<MagnifyingGlass weight="bold"/>}/>
                </div>
                <div className="grow md:flex-none w-full md:w-auto">
                    <Button onClick={()=>setModalAdd(true)} className={'w-full'} filled leftIcon={<Plus weight="bold"/>} >Tambah Data</Button>
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
                            </TableBodyRow>
                        )
                        })}
                </TableBody>
                
                </Table>

                <Pagination/>

                <Modal size="lg" open={modalAdd} onClose={()=>setModalAdd(false)} title="Tambah data konsentrasi">
                    
                    <div style={{width: '100%'}}>
                        <StepperContainer>
                            <Stepper title={"Biografi pegawai"} isActive={true}>

                                <Label className={'mb-1.5'}>Jenis pegawai</Label>
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-6">
                                        <div>
                                            <Select options={[{value: "1", label: "Menu Item 1"}]} />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <div>
                                            <Select options={[{value: "1", label: "Menu Item 1"}]} />
                                        </div>
                                    </div>
                                    
                                </div>

                                <Label className={'mt-4 mb-1.5'}>Penempatan / Bagian / Kampus</Label>
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Select options={[{value: "1", label: "Menu Item 1"}]} />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Select options={[{value: "1", label: "Menu Item 1"}]} />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Select options={[{value: "1", label: "Menu Item 1"}]} />
                                        </div>
                                    </div>
                                </div>

                                <Label className={'mt-4 mb-1.5'}>No. induk pegawai</Label>
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Select options={[{value: "1", label: "Menu Item 1"}]} />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-8">
                                        <div>
                                            <Input placeholder="input NIP pegawai" />
                                        </div>
                                    </div>
                                </div>

                                <Label className={'mt-4 mb-1.5'}>Nama lengkap dan gelar</Label>
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-3">
                                        <div>
                                        <Input placeholder="Tulis gelar depan" />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <div>
                                            <Input placeholder="Masukkan nama lengkap" />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-3">
                                        <div>
                                        <Input placeholder="Tulis gelar belakang" />
                                        </div>
                                    </div>
                                </div>

                                <Label className={'mt-4 mb-1.5'}>Tempat tanggal lahir</Label>
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-6">
                                        <div>
                                        <Input leftIcon={<MagnifyingGlass/>} placeholder="Tempat tanggal lahir" />
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <div>
                                            <DateInput placeholder="Tanggal lahir"/>
                                        </div>
                                    </div>
                                </div>

                                <Label className={'mt-4 mb-1.5'}>Jenis kelamin</Label>
                                <div className="flex gap-8">
                                    <Radio>Laki - laki</Radio>
                                    <Radio>Perempuan</Radio>
                                </div>

                            </Stepper>
                            <Stepper title={"Informasi detail"}>
                                <Label className={'mt-4 mb-1.5'}>Agama dan status pernikahan</Label>
                                    <div className="grid grid-cols-12 gap-4">
                                        <div className="col-span-12 md:col-span-6">
                                            <div>
                                                <Select options={[{value: "1", label: "Menu Item 1"}]} />
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6">
                                            <div>
                                                <Select options={[{value: "1", label: "Menu Item 1"}]} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid mt-4 grid-cols-12 gap-4">
                                        <div className="col-span-12">
                                            <div>
                                                <Select showLabel label="Pendidikan terakhir" options={[{value: "1", label: "Menu Item 1"}]} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid mt-4 grid-cols-12 gap-4">
                                        <div className="col-span-12">
                                            <div>
                                                <Input label="Alamat kantor" showLabel placeholder="Tulis alamat kantor"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid mt-4 grid-cols-12 gap-4">
                                        <div className="col-span-12">
                                            <div>
                                                <Input label="Alamat rumah" showLabel placeholder="Tulis alamat rumah"/>
                                            </div>
                                        </div>
                                    </div>

                                    <Label className={'mt-4 mb-1.5'}>Kontak nomor dan email</Label>
                                    <div className="grid grid-cols-12 gap-4">
                                        <div className="col-span-12 md:col-span-6">
                                            <div>
                                                <Input rightIcon={<Phone/>} placeholder="Tulis nomor handphone"/>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6">
                                            <div>
                                                <Input rightIcon={<Envelope/>} placeholder="Tulis email"/>
                                            </div>
                                        </div>
                                    </div>

                                    <Label className={'mt-4 mb-1.5'}>Hak akses / status pegawai</Label>
                                    <div className="grid grid-cols-12 gap-4">
                                        <div className="col-span-12 md:col-span-6">
                                            <div>
                                            <Select options={[{value: "1", label: "Menu Item 1"}]} />
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6">
                                            <div>
                                            <Select options={[{value: "1", label: "Menu Item 1"}]} />
                                            </div>
                                        </div>
                                    </div>

                            </Stepper>
                        </StepperContainer>
                    </div>
                    
                    
                </Modal>
        </div>
    )
}