"use client"
import {
    Button,
    DateInput,
    Input,
    Label,
    Modal,
    Pagination,
    Select,
    Stepper,
    StepperContainer,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow,
    Text
} from "@/components";
import Radio from "@components/Radio";
import {Envelope, MagnifyingGlass, Phone, Plus} from "@phosphor-icons/react/dist/ssr";
import {useState} from "react";

export default function Dosen() {
    const [modalAdd, setModalAdd] = useState(false)
    const [currentStep, setCurrentStep] = useState(0);
    const [stepperLength, setStepperLength] = useState(0)
    const data = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            email1: 'john@example.com',
            email2: 'john@example.com',
            email3: 'john@example.com',
            email4: 'john@ example.com',
            email5: 'john@example.com',
            email6: 'john@example.com'
        },
        {
            id: 2,
            name: 'John Doe',
            email: 'john@example.com',
            email1: 'john@example.com',
            email2: 'john@example.com',
            email3: 'john@example.com',
            email4: 'john@ example.com',
            email5: 'john@example.com',
            email6: 'john@example.com'
        },
        {
            id: 3,
            name: 'John Doe',
            email: 'john@example.com',
            email1: 'john@example.com',
            email2: 'john@example.com',
            email3: 'john@example.com',
            email4: 'john@ example.com',
            email5: 'john@example.com',
            email6: 'john@example.com'
        },
        {
            id: 4,
            name: 'John Doe',
            email: 'john@example.com',
            email1: 'john@example.com',
            email2: 'john@example.com',
            email3: 'john@example.com',
            email4: 'john@ example.com',
            email5: 'john@example.com',
            email6: 'john@example.com'
        },
        {
            id: 5,
            name: 'John Doe',
            email: 'john@example.com',
            email1: 'john@example.com',
            email2: 'john@example.com',
            email3: 'john@example.com',
            email4: 'john@ example.com',
            email5: 'john@example.com',
            email6: 'john@example.com'
        },
        {
            id: 6,
            name: 'John Doe',
            email: 'john@example.com',
            email1: 'john@example.com',
            email2: 'john@example.com',
            email3: 'john@example.com',
            email4: 'john@ example.com',
            email5: 'john@example.com',
            email6: 'john@example.com'
        },
    ]
    const columns = [
        {name: 'tes', minWidth: 'min-w-1'},
        {name: 'tes', minWidth: 'lg:min-w-52'},
        {name: 'tes', minWidth: 'min-w-20'},
        {name: 'tes', minWidth: 'min-w-4'},
        {name: 'tes', minWidth: 'min-w-32'},
        {name: 'tes', minWidth: ''},
        {name: 'tes', minWidth: ''},
        {name: 'tes', minWidth: ''},
        {name: 'tes', minWidth: 'min-w-32'},
    ]

    const pinnedColumns = [0, 1];

    const nextStep = () => {
        if (currentStep < stepperLength - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleStepperLength = (data) => {
        setStepperLength(data);
    };

    return (
        <div>
            <div className="flex justify-end items-center gap-3">
                <div className="grow md:flex-none w-full md:w-auto">
                    <Input size="xs" placeholder="Cari data disini" className="md:w-40"
                           leftIcon={<MagnifyingGlass weight="bold"/>}/>
                </div>
                <div className="grow md:flex-none w-full md:w-auto">
                    <Button onClick={() => setModalAdd(true)} className={'w-full'} filled
                            leftIcon={<Plus weight="bold"/>}>Tambah Data</Button>
                </div>
            </div>

            <Table loading={false} columns={columns} data={data} pinned={pinnedColumns}>
                <TableHead>
                    <TableHeadRow>
                        {columns.map((e, index) => {
                            return (
                                <TableHeadCell className={e.minWidth} key={index}>{e.name}</TableHeadCell>
                            )
                        })}
                    </TableHeadRow>

                </TableHead>

                <TableBody>

                    {data.map((e, index) => {
                        return (
                            <TableBodyRow key={index}>
                                <TableBodyCell><Text size="xs">{e.id}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.name}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.email}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.email2}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.email3}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.email4}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.email5}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.email6}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.email1}</Text></TableBodyCell>
                            </TableBodyRow>
                        )
                    })}
                </TableBody>

            </Table>

            <Pagination/>

            <Modal size="lg" open={modalAdd} onClose={() => setModalAdd(false)} title="Tambah data dosen">
                <Modal.Body>
                    <div className="w-full">

                        <StepperContainer activeStepper={currentStep} getStepperLength={handleStepperLength}>
                            <Stepper title={"Biografi pegawai"}>

                                <Label className={'mb-1.5'}>Jenis pegawai</Label>
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-6">
                                        <div>
                                            <Select options={[{value: "1", label: "Menu Item 1"}]}/>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <div>
                                            <Select options={[{value: "1", label: "Menu Item 1"}]}/>
                                        </div>
                                    </div>

                                </div>

                                <Label className={'mt-4 mb-1.5'}>Penempatan / Bagian / Kampus</Label>
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Select options={[{value: "1", label: "Menu Item 1"}]}/>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Select options={[{value: "1", label: "Menu Item 1"}]}/>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Select options={[{value: "1", label: "Menu Item 1"}]}/>
                                        </div>
                                    </div>
                                </div>

                                <Label className={'mt-4 mb-1.5'}>No. induk pegawai</Label>
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Select options={[{value: "1", label: "Menu Item 1"}]}/>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-8">
                                        <div>
                                            <Input placeholder="input NIP pegawai"/>
                                        </div>
                                    </div>
                                </div>

                                <Label className={'mt-4 mb-1.5'}>Nama lengkap dan gelar</Label>
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-3">
                                        <div>
                                            <Input placeholder="Tulis gelar depan"/>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <div>
                                            <Input placeholder="Masukkan nama lengkap"/>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-3">
                                        <div>
                                            <Input placeholder="Tulis gelar belakang"/>
                                        </div>
                                    </div>
                                </div>

                                <Label className={'mt-4 mb-1.5'}>Tempat tanggal lahir</Label>
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-6">
                                        <div>
                                            <Input leftIcon={<MagnifyingGlass/>} placeholder="Tempat tanggal lahir"/>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <div>
                                            <DateInput/>
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
                                            <Select options={[{value: "1", label: "Menu Item 1"}]}/>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <div>
                                            <Select options={[{value: "1", label: "Menu Item 1"}]}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid mt-4 grid-cols-12 gap-4">
                                    <div className="col-span-12">
                                        <div>
                                            <Select showLabel label="Pendidikan terakhir"
                                                    options={[{value: "1", label: "Menu Item 1"}]}/>
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
                                            <Select options={[{value: "1", label: "Menu Item 1"}]}/>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <div>
                                            <Select options={[{value: "1", label: "Menu Item 1"}]}/>
                                        </div>
                                    </div>
                                </div>
                            </Stepper>
                        </StepperContainer>

                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <div className="flex mt-5 w-full gap-3">
                        <Button
                            onClick={nextStep}
                            className={'py-2'}
                        >
                            {currentStep === stepperLength - 1 ? 'Tambah' : 'Selanjutnya'}
                        </Button>

                        <Button
                            className={'py-2'}
                            onClick={prevStep}
                            // disabled={currentStep === 0}
                            variant="white"
                        >
                            Batal
                        </Button>

                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}