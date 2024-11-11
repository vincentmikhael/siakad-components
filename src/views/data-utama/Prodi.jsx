"use client"

import {useEffect, useState} from "react";
import AxiosInstance from "@/libs/AxiosInstance";
import {
    Button, FileUpload, Hr, IconButton,
    Input, Label, Modal, Select,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow, Text
} from "@/components";
import {MagnifyingGlass, Plus, PencilSimpleLine, Trash} from "@phosphor-icons/react";
import {log} from "next/dist/server/typescript/utils";

const Prodi = ({listFakultas}) => {
    const [selectedFakultas, setSelectedFakultas] = useState(listFakultas[0]?.value);
    const [dataProdi, setDataProdi] = useState(null);
    const [openAddModal, setOpenAddModal] = useState(false);
    const openModal = () => setOpenAddModal(true);
    const [loadingData, setLoadingData] = useState(false);
    const fetchData = async () => {
        setLoadingData(true)
        try {
            const response = await AxiosInstance.get(`/prodi/${selectedFakultas}`)
            if (response.status === 200) {
                setDataProdi(response.data.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingData(false)
        }
    }

    useEffect(() => {
        fetchData();
        console.log(dataProdi)
    }, [selectedFakultas]);

    const handleFakultasChange = (e) => {
        setSelectedFakultas(e.value)
    };
    const closeModal = () => setOpenAddModal(false);
    const columns = [
        {name: "no"},
        {name: "kode"},
        {name: "nama prodi"},
        {name: "ketua prodi"},
        {name: "sekretaris prodi"},
        {name: "actions"},
    ];

    return (
        <>
            <div className="flex flex-col xl:flex-row justify-between items-end">
                <Select value={selectedFakultas} options={listFakultas} label="Fakultas" showLabel size="xs"
                        className="md:w-52 w-full"
                        onChange={handleFakultasChange}/>
                <div className="flex gap-4">
                    <Input
                        size="xs"
                        className="max-w-[156px]"
                        placeholder={"Cari data disini"}
                        leftIcon={<MagnifyingGlass weight="bold"/>}
                    />
                    <Button
                        onClick={openModal}
                        leftIcon={<Plus weight="bold"/>}
                        size="sm"
                        filled
                    >
                        Tambah data
                    </Button>
                </div>
            </div>
            <Table
                loading={false}
                columns={columns}
                data={dataProdi}
            >
                <TableHead>
                    <TableHeadRow>
                        {columns.map((e, index) => {
                            return (
                                <TableHeadCell
                                    className={e.minWidth}
                                    key={index}
                                >
                                    {e.name}
                                </TableHeadCell>
                            );
                        })}
                    </TableHeadRow>
                </TableHead>

                <TableBody>
                    {dataProdi?.map((e, index) => {
                        return (
                            <TableBodyRow key={index}>
                                <TableBodyCell>
                                    <Text size="xs">{index + 1}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Text size="xs">{e.id}</Text>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            <Text size="xs">{e.nama}</Text>
                                        </div>
                                    </div>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <div className="flex flex-col gap-1">
                                        <Text size="xs">{e.kaprodi?.nama}</Text>
                                        <Text size="xs" color="text-gray-50">
                                            {e.kaprodi?.kdNip} {e.kaprodi?.nip}
                                        </Text>
                                    </div>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <div className="flex flex-col gap-1">
                                        <Text size="xs">{e.sekprodi?.nama}</Text>
                                        <Text size="xs" color="text-gray-50">
                                            {e.sekprodi?.kdNip} {e.sekprodi?.nip}
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
                        );
                    })}
                </TableBody>
            </Table>
            {/*<Modal*/}
            {/*    size="lg"*/}
            {/*    open={openAddModal}*/}
            {/*    onClose={closeModal}*/}
            {/*    title="Tambah data Fakultas"*/}
            {/*    dismissable*/}
            {/*    autoClose*/}
            {/*>*/}
            {/*    <Modal.Body>*/}
            {/*        <div className="grid grid-cols-2 gap-6 flex-grow">*/}
            {/*            <Input*/}
            {/*                placeholder="Tulis Nama fakultas"*/}
            {/*                size="lg"*/}
            {/*                label="Nama fakultas"*/}
            {/*                showLabel*/}
            {/*            />*/}
            {/*            <Input*/}
            {/*                placeholder="Tulis SK fakultas"*/}
            {/*                size="lg"*/}
            {/*                label="SK fakultas"*/}
            {/*                showLabel*/}
            {/*            />*/}
            {/*            <Hr className="col-span-2"/>*/}
            {/*            <Input*/}
            {/*                placeholder="Tulis Nama PD 1"*/}
            {/*                size="lg"*/}
            {/*                label="Nama PD 1"*/}
            {/*                showLabel*/}
            {/*            />*/}
            {/*            <Input*/}
            {/*                placeholder="Tulis NIP PD 1"*/}
            {/*                size="lg"*/}
            {/*                label="NIP PD 1"*/}
            {/*                showLabel*/}
            {/*            />*/}
            {/*            <div className="col-span-2 flex flex-col gap-1.5">*/}
            {/*                <Label>Upload tanda tangan</Label>*/}
            {/*                <FileUpload file={file1} setFile={setFile1} allowDeleted={false}/>*/}
            {/*            </div>*/}
            {/*            <Hr className="col-span-2"/>*/}
            {/*            <Input*/}
            {/*                placeholder="Tulis Nama PD 2"*/}
            {/*                size="lg"*/}
            {/*                label="Nama PD 2"*/}
            {/*                showLabel*/}
            {/*            />*/}
            {/*            <Input*/}
            {/*                placeholder="Tulis NIP PD 2"*/}
            {/*                size="lg"*/}
            {/*                label="NIP PD 2"*/}
            {/*                showLabel*/}
            {/*            />*/}
            {/*            <div className="col-span-2 flex flex-col gap-1.5">*/}
            {/*                <Label>Upload tanda tangan</Label>*/}
            {/*                <FileUpload/>*/}
            {/*            </div>*/}
            {/*            <Hr className="col-span-2"/>*/}
            {/*            <Input*/}
            {/*                placeholder="Tulis Nama PD 3"*/}
            {/*                size="lg"*/}
            {/*                label="Nama PD 3"*/}
            {/*                showLabel*/}
            {/*            />*/}
            {/*            <Input*/}
            {/*                placeholder="Tulis NIP PD 3"*/}
            {/*                size="lg"*/}
            {/*                label="NIP PD 3"*/}
            {/*                showLabel*/}
            {/*            />*/}
            {/*            <div className="col-span-2 flex flex-col gap-1.5">*/}
            {/*                <Label>Upload tanda tangan</Label>*/}
            {/*                <FileUpload/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </Modal.Body>*/}
            {/*    <Modal.Footer>*/}
            {/*        <div className="gap-4 flex flex-row">*/}
            {/*            <Button variant="primary" size="md" disabled filled>*/}
            {/*                Tambah*/}
            {/*            </Button>*/}
            {/*            <Button variant="white" size="md" filled>*/}
            {/*                Batal*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*    </Modal.Footer>*/}
            {/*</Modal>*/}
        </>
    );
}
export default Prodi