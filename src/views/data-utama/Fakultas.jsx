"use client";

import {
    Button,
    Input,
    Modal,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadRow,
    TableHeadCell,
    Text,
    IconButton,
    Hr,
    FileUpload,
    Label, NotFoundRow,
} from "@/components";
import {useEffect, useState} from "react";
import {MagnifyingGlass, Plus} from "@phosphor-icons/react/dist/ssr";
import {PencilSimpleLine, Trash} from "@phosphor-icons/react";
import AxiosInstance from "@/libs/AxiosInstance";


const Fakultas = () => {
    const [dataFakultas, setDataFakultas] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [openAddModal, setOpenAddModal] = useState(false);
    const [signatureModal, setSignatureModal] = useState(false);
    const [signatures, setSignatures] = useState(null);
    const openModal = () => setOpenAddModal(true);
    const [file1, setFile1] = useState(null);
    const [loadingData, setLoadingData] = useState(false);
    const fetchData = async () => {
        setLoadingData(true)
        try {
            const response = await AxiosInstance.get(`/fakultas`)
            if (response.status === 200) {
                setDataFakultas(response.data.data);
                setFilteredData(response.data.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingData(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    const openSignatureModal = (sign) => {
        setSignatures(sign)
        setSignatureModal(true);
    }
    const closeSignatureModal = () => {
        setSignatures(null)
        setSignatureModal(false);
    }
    const closeModal = () => setOpenAddModal(false);
    const columns = [
        {name: "no", className: "min-w-14"},
        {name: "nama fakultas", className: "min-w-[280px]"},
        {name: "sk fakultas", className: "min-w-[168px]"},
        {name: "dekan", className: "min-w-[220px]"},
        {name: "pd 1", className: "min-w-[220px]"},
        {name: "pd 2", className: "min-w-[220px]"},
        {name: "pd 3", className: "min-w-[220px]"},
        {name: "actions", className: "min-w-[132px]"},
    ];
    const pinnedColumns = [0, 1]

    const handleSearch = e => {
        const keyword = e.target.value.toLowerCase();
        setSearchKeyword(keyword);

        if (!keyword) {
            setFilteredData(dataFakultas);
            return;
        }
        console.log(keyword)

        const filtered = dataFakultas.filter(
            (item) =>
                item.nama.toLowerCase().includes(keyword) || item.sk.toLowerCase().includes(keyword)
        );

        setFilteredData(filtered);
    };

    return (
        <>
            <div className="flex justify-end items-center gap-4">
                <Input
                    size="xs"
                    className="w-full md:w-[156px]"
                    placeholder={"Cari data disini"}
                    onChange={handleSearch}
                    value={searchKeyword}
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
            <Table
                loading={loadingData}
                columns={columns}
                pinned={pinnedColumns}
            >
                <TableHead>
                    <TableHeadRow>
                        {columns.map((e, index) => {
                            return (
                                <TableHeadCell
                                    className={e.className}
                                    key={index}
                                >
                                    {e.name}
                                </TableHeadCell>
                            );
                        })}
                    </TableHeadRow>
                </TableHead>

                <TableBody>
                    {filteredData?.length === 0 ? (
                        <NotFoundRow colSpan={5}/>
                    ) : (
                        filteredData?.map((e, index) => (
                                <TableBodyRow key={index}>
                                    <TableBodyCell>
                                        <Text size="xs">{index + 1}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs">{e.nama}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Text size="xs">{e.sk}</Text>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex flex-col gap-1">
                                                <Text size="xs">{e.dekan?.nama}</Text>
                                                <Text size="xs" color="text-gray-50">
                                                    {e.dekan?.kd_nip} {e.dekan?.nip}
                                                </Text>
                                            </div>
                                            {/*<div onClick={() => openSignatureModal(e.ttd_dekan)} className="flex gap-3">*/}
                                            {/*    <Image src={"/images/icon-jpg.png"} alt={'jpg icon'} width={24}*/}
                                            {/*           height={24}/>*/}
                                            {/*    <div className="flex flex-col">*/}
                                            {/*        <Text color="text-primary-100" weight={600}>*/}
                                            {/*            {e.ttd_dekan}*/}
                                            {/*        </Text>*/}
                                            {/*        <Text color="text-gray-50" weight={500}>*/}
                                            {/*            120 KB*/}
                                            {/*        </Text>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <div className="flex flex-col gap-1">
                                            <Text size="xs">{e.wd1?.nama}</Text>
                                            <Text size="xs" color="text-gray-50">
                                                {e.wd1?.kd_nip} {e.wd1?.nip}
                                            </Text>
                                        </div>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <div className="flex flex-col gap-1">
                                            <Text size="xs">{e.wd2?.nama}</Text>
                                            <Text size="xs" color="text-gray-50">
                                                {e.wd2?.kd_nip} {e.wd2?.nip}
                                            </Text>
                                        </div>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <div className="flex flex-col gap-1">
                                            <Text size="xs">{e.wd3?.nama}</Text>
                                            <Text size="xs" color="text-gray-50">
                                                {e.wd3?.kd_nip} {e.wd3?.nip}
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
                        ))}
                </TableBody>
            </Table>
            <Modal
                size="lg"
                open={openAddModal}
                onClose={closeModal}
                title="Tambah data Fakultas"
                dismissable
                autoClose
            >
                <Modal.Body>
                    <div className="grid grid-cols-2 gap-6 flex-grow">
                        <Input
                            placeholder="Tulis Nama fakultas"
                            size="lg"
                            label="Nama fakultas"
                            showLabel
                        />
                        <Input
                            placeholder="Tulis SK fakultas"
                            size="lg"
                            label="SK fakultas"
                            showLabel
                        />
                        <Hr className="col-span-2"/>
                        <Input
                            placeholder="Tulis Nama PD 1"
                            size="lg"
                            label="Nama PD 1"
                            showLabel
                        />
                        <Input
                            placeholder="Tulis NIP PD 1"
                            size="lg"
                            label="NIP PD 1"
                            showLabel
                        />
                        <div className="col-span-2 flex flex-col gap-1.5">
                            <Label>Upload tanda tangan</Label>
                            <FileUpload file={file1} setFile={setFile1} allowDeleted={false}/>
                        </div>
                        <Hr className="col-span-2"/>
                        <Input
                            placeholder="Tulis Nama PD 2"
                            size="lg"
                            label="Nama PD 2"
                            showLabel
                        />
                        <Input
                            placeholder="Tulis NIP PD 2"
                            size="lg"
                            label="NIP PD 2"
                            showLabel
                        />
                        <div className="col-span-2 flex flex-col gap-1.5">
                            <Label>Upload tanda tangan</Label>
                            <FileUpload/>
                        </div>
                        <Hr className="col-span-2"/>
                        <Input
                            placeholder="Tulis Nama PD 3"
                            size="lg"
                            label="Nama PD 3"
                            showLabel
                        />
                        <Input
                            placeholder="Tulis NIP PD 3"
                            size="lg"
                            label="NIP PD 3"
                            showLabel
                        />
                        <div className="col-span-2 flex flex-col gap-1.5">
                            <Label>Upload tanda tangan</Label>
                            <FileUpload/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="gap-4 flex flex-row">
                        <Button variant="primary" size="md" disabled filled>
                            Tambah
                        </Button>
                        <Button variant="white" size="md" filled>
                            Batal
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>

            <Modal size={"md"} open={signatureModal} onClose={closeSignatureModal} title="Tanda tangan" dismissable
                   outsideClose>
                <Modal.Body>
                    <div className="flex flex-col gap-4">
                        {/*<img src={signatures} alt="Tanda Tangan Dekan"/>*/}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Fakultas