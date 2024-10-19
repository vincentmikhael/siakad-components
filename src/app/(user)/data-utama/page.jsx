"use client";

import { Breadcrumb, BreadcrumbItem, Button, Card, FileUpload, Hr, Input,Label,Modal,Select,Stepper,StepperContainer,Table, Text } from "@/components";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

const DataUtama = () => {
    const [modalAdd,setModalAdd] = useState(false)
    const [modalEdit,setModalEdit] = useState(false)
    const [valueAdd,setValueAdd] = useState({
        lorem1: "",
        lorem2: "",
        lorem3: "",
        lorem4: ""
    })

    const columns = [
        { header: 'ID', accessor: 'id' },
        { header: 'Name', accessor: 'name' },
        { header: 'Email', accessor: 'email' },
      ]

      const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Sam Green', email: 'sam@example.com' },
      ]

      const options = [
        {label: 'Lorem',value: 'Lorem'},
        {label: 'Lorem',value: 'Lorem'},
        {label: 'Lorem',value: 'Lorem'},
      ]

      const handleChange = (e) => {
        const { name, value } = e.target;
        setValueAdd({
          ...valueAdd,
          [name]: value, // Mengupdate state sesuai dengan input yang diubah
        });
      };

      const handleTambah = (e) => {
        e.preventDefault()
        alert('ok')
      }

  return (
    <div>
        <Breadcrumb>
            <BreadcrumbItem home href='/dashboard'>Dashboard</BreadcrumbItem>
            <BreadcrumbItem>Data utama</BreadcrumbItem>
        </Breadcrumb>
        <Card className={'mt-12'}>

        <StepperContainer>
            <Stepper title="Halo 1">
                <Text>Lorem ipsum 1</Text>
            </Stepper>

            <Stepper title="Halo 2">
            <Text>Lorem ipsum 2</Text>
            </Stepper>
            <Stepper title="Halo 3">
            <Text>Lorem ipsum 3</Text>
            </Stepper>

            <Stepper title="Halo 4">
            <Text>Lorem ipsum 4</Text>
            </Stepper>
        </StepperContainer>

            <h5 className="text-xl mt-5 font-medium text-gray-100">
                  Data utama
            </h5>
            <p className="text-base font-normal text-gray-50">
                  Lorem Ipsum
            </p>

            <Hr className="my-6"/>
            <div className="lg:flex justify-between items-end">
                <div className="hidden lg:block">
                    <Label className={'mb-2'}>Fakultas</Label>
                    <Select options={options} placeholder="Pilih fakultas"/>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <Input className={'w-36 lg:w-44'} placeholder={'Cari data disini'} leftIcon={<MagnifyingGlass/>}/>
                    <Button onClick={()=>setModalAdd(true)} leftIcon={<Plus/>} size="md">Tambah data</Button>
                </div>
            </div>

            <Table columns={columns} data={data} onEdit={()=>setModalEdit(true)} onDelete={()=>alert('ok')}/>


        </Card>
        <Modal open={modalAdd} onClose={()=>setModalAdd(false)} title="Tambah data tes">
            <form onSubmit={handleTambah} className="w-full">
                <div className={'grid grid-cols-2 gap-4 mb-3'}>
                <div>
                    <Label className={'mb-1'}>Nama</Label>
                    <Input name="lorem1"
                        type="text"
                        value={valueAdd.name}
                        onChange={handleChange}
                        placeholder={"Tulis nama"}
                    />
                </div>
                <div>
                    <Label className={'mb-1'}>Nama</Label>
                    <Input name="lorem2"
                        type="text"
                        value={valueAdd.name}
                        onChange={handleChange}
                        placeholder={"Tulis nama"}
                    />
                </div>
                <div>
                    <Label className={'mb-1'}>Nama</Label>
                    <Input name="lorem3"
                        type="text"
                        value={valueAdd.name}
                        onChange={handleChange}
                        placeholder={"Tulis nama"}
                    />
                </div>
                <div>
                    <Label className={'mb-1'}>Nama</Label>
                    <Input name="lorem4"
                        type="text"
                        value={valueAdd.name}
                        onChange={handleChange}
                        placeholder={"Tulis nama"}
                    />
                </div>
                </div>
                <Label className={'mb-1'}>Upload foto</Label>
                <FileUpload/>
                <div className="mt-5">
                    <Button type="submit" className={'mr-3'}>Tambah</Button>
                    <Button onClick={()=>setModalAdd(false)} variant="white">Batal</Button>
                </div>

            </form>
        </Modal>

        <Modal open={modalEdit} onClose={()=>setModalEdit(false)} title="Edit data tes">
            <form onSubmit={handleTambah} className={'w-full grid grid-cols-2 gap-4'}>

                <div>
                    <Label>Nama</Label>
                    <Input name="lorem1"
                        type="text"
                        value={valueAdd.name}
                        onChange={handleChange}
                        placeholder={"Tulis nama"}
                    />
                </div>
                <div>
                    <Label>Nama</Label>
                    <Input name="lorem2"
                        type="text"
                        value={valueAdd.name}
                        onChange={handleChange}
                        placeholder={"Tulis nama"}
                    />
                </div>
                <div>
                    <Label>Nama</Label>
                    <Input name="lorem3"
                        type="text"
                        value={valueAdd.name}
                        onChange={handleChange}
                        placeholder={"Tulis nama"}
                    />
                </div>
                <div>
                    <Label>Nama</Label>
                    <Input name="lorem4"
                        type="text"
                        value={valueAdd.name}
                        onChange={handleChange}
                        placeholder={"Tulis nama"}
                    />
                </div>

                <div>
                    <Button type="submit" className={'mr-3'}>Tambah</Button>
                    <Button onClick={()=>setModalAdd(false)} variant="white">Batal</Button>
                </div>

            </form>
        </Modal>


    </div>
  );
};

export default dataUtama;
