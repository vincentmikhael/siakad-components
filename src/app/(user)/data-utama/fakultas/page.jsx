"use client";

import { Button, Input, Modal, Label, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadRow, TableHeadCell, Text, IconButton } from "@/components";
import { useState } from "react";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react/dist/ssr";
import { PencilSimpleLine, Trash } from "@phosphor-icons/react";

const Fakultas = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const openModal = () => setOpenAddModal(true);
  const closeModal = () => setOpenAddModal(false);
  const columns = [
    { name: "no", pinned: true },
    { name: "nama fakultas", pinned: true },
    { name: "sk fakultas", pinned: false },
    { name: "dekan", pinned: false },
    { name: "pd 1", pinned: false },
    { name: "pd 2", pinned: false },
    { name: "pd 3", pinned: false },
    { name: "actions", pinned: false },
  ];

  const data = [
    {
      id: "01",
      nama: "FAKULTAS TEKNOLOGI INDUSTRI",
      singkatan: "FTI",
      sk: "ITN-650/IX.FTI-1/2007",
      dekan: {
        id: "1094",
        nama: "Dr. Eng. I Komang Somawirata, ST., MT.",
        kd_nip: "P.",
        nip: "1030000361",
      },
      ttd_dekan: "ttd_dekan.jpg",
      wd1: {
        id: "1073",
        nama: "Dr. Irrine Budi Sulistiawati, ST, MT",
        kd_nip: " ",
        nip: "197706152005012002",
      },
      ttd_wd1: "ttd_wd1.jpg",
      wd2: {
        id: "1057",
        nama: "Suryo Adi Wibowo, ST., MT.",
        kd_nip: "P.",
        nip: "1031000438",
      },
      ttd_wd2: "ttd_wd2.jpg",
      wd3: {
        id: "1093",
        nama: "Drs. Sumanto, MSi",
        kd_nip: "P.",
        nip: "1030000363",
      },
      ttd_wd3: "ttd_wd3.jpg",
      nm_fk_en: "Faculty of Industrial Engineering",
    },
  ];

  return (
    <>
      <div className="flex justify-end items-center gap-4">
        <Input
          size="xs"
          className="max-w-[156px]"
          placeholder={"Cari data disini"}
          leftIcon={<MagnifyingGlass weight="bold" />}
        />
        <Button
          onClick={openModal}
          leftIcon={<Plus weight="bold" />}
          size="sm"
          filled
        >
          Tambah data
        </Button>
      </div>
      <Table loading={false} columns={columns} data={data} className="overflow-x-auto">
        <TableHead>
          <TableHeadRow>
            {columns.map((e, index) => {
              return (
                <TableHeadCell pinned={e.pinned ?? false} key={index}>
                  {e.name}
                </TableHeadCell>
              );
            })}
          </TableHeadRow>
        </TableHead>

        <TableBody>
          {data.map((e, index) => {
            return (
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
                  <Text size="xs">{e.dekan.nama}</Text>
                </TableBodyCell>
                <TableBodyCell>
                  <Text size="xs">{e.wd1.nama}</Text>
                </TableBodyCell>
                <TableBodyCell>
                  <Text size="xs">{e.wd2.nama}</Text>
                </TableBodyCell>
                <TableBodyCell>
                  <Text size="xs">{e.wd3.nama}</Text>
                </TableBodyCell>
                <TableBodyCell className="flex flex-row">
                  <IconButton size="sm" variant="warning">
                    <PencilSimpleLine />
                  </IconButton>
                  <IconButton size="sm" variant="danger">
                    <Trash />
                  </IconButton>
                </TableBodyCell>
              </TableBodyRow>
            );
          })}
        </TableBody>
      </Table>
      <Modal
        open={openAddModal}
        onClose={closeModal}
        title="Tambah data Fakultas"
        dismissable
        outsideClose
        autoClose
      >
        <div className="grid grid-cols-2 gap-6 flex-grow">
          <div>
            <Label className={"mb-1.5"}>Nama fakultas</Label>
            <Input placeholder="Tulis nama fakultas" size="lg" />
          </div>
          <div>
            <Label className={"mb-1.5"}>SK fakultas</Label>
            <Input placeholder="Tulis SK fakultas" size="lg" />
          </div>
        </div>
        {/* <div className="gap-4 flex flex-row">
          <Button variant="primary" size="md" disabled>
            Tambah
          </Button>
          <Button variant="white" size="md">
            Batal
          </Button>
        </div> */}
      </Modal>
    </>
  );
};

export default Fakultas;
