"use client"
import { Badge, Button, FileUpload, FormSkeleton, Input, Modal, Select, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableHeadRow, Text } from "@/components";
import { DownloadSimple, MagnifyingGlass, MicrosoftExcelLogo } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function SkBimbingan(){
    const [openModal, setOpenModal] = useState(false);
    const [loadingDataForm, setLoadingDataForm] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const data = [
        {id: 1, name: 'John Doe', email: 'lorem ipsum',},
        {id: 2, name: 'Jane Smith', email: 'tes',},
        {id: 3, name: 'Sam Green', email: '123',},

    ]
    const columns = [
        {name: 'Daftar SK bimbingan', pinned: false},
        {name: '', pinned: false},

    ]
    return (
        <>
            <div className="mt-8"></div>
            <Table columns={columns} data={data}>
                <TableHead>
                    <TableHeadRow>
                        {columns.map((e, index) => {
                            return (
                                <TableHeadCell pinned={e.pinned ?? false} key={index}>{e.name}</TableHeadCell>
                            )
                        })}
                    </TableHeadRow>

                </TableHead>

                <TableBody>

                    {data.map((e, index) => {
                        return (
                            <TableBodyRow key={index}>
                                <TableBodyCell><Text size="xs">SK bimbingan 1</Text></TableBodyCell>
                                <TableBodyCell><Badge variant="default" filled>Belum diunggah</Badge></TableBodyCell>
                            </TableBodyRow>
                        )
                    })}
                </TableBody>

            </Table>

            <div className="flex gap-4 mt-5">
                <Button onClick={()=>setOpenModal(true)} filled>Unggah berkas</Button>
            </div>

            <Modal
                size="lg"
                open={openModal}
                onClose={()=>setOpenModal(false)}
                title={"Upload SK bimbingan Skripsi"}
                dismissable
                autoClose
            >
                <Modal.Body>
                    {
                        loadingDataForm ? (
                            <FormSkeleton count={8}/>
                        ) : (
                            <div className="grid grid-cols-12 gap-4">
                                <div className={`col-span-12`}>
                                    <FileUpload label="Upload SK bimbingan 1" showLabel/>
                                </div>
                                <div className={`col-span-12`}>
                                    <FileUpload label="Upload SK bimbingan 2" showLabel/>
                                </div>
                                <div className={`col-span-12`}>
                                    <FileUpload label="Upload SK bimbingan 3" showLabel/>
                                </div>
                                <div className={`col-span-12`}>
                                    <FileUpload label="Upload SK bimbingan 4" showLabel/>
                                </div>
                            </div>
                        )
                    }
                </Modal.Body>
                <Modal.Footer>
                    <div className="gap-4 flex flex-row">
                        <Button variant="primary" size="md" filled>
                            {"Unggah berkas"}
                        </Button>
                        <Button variant="white" size="md" filled onClick={()=>setOpenModal(false)}>
                            Batal
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}