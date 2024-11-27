"use client"

import {
    IconButton,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow,
    Text
} from "@/components";
import {PencilSimpleLine, Trash} from "@phosphor-icons/react";

const KonfigurasiUser = () => {
    const columns = [
        {name: "no"},
        {name: "nama halaman", className: "min-w-[240px]"},
        {name: "status", className: "min-w-[148px] text-center"},
        {name: "time start", className: "min-w-[200px]"},
        {name: "time end", className: "min-w-[200px]"},
        {name: "nm_files", className: "w-full text-center"},
        {name: "action", className: "min-w-[132px] text-center"},
    ];
    const data = [
        {
            nama_halaman: "Entri Data Mata Kuliah",
            status: "Enabled",
            time_start: "3/19/2024 1:56:04 AM",
            time_end: "3/19/2034 1:56:04 AM",
            nm_files: "entrimatakuliah.aspx",
        }
    ]
    return (
        <Table
            loading={false}
            columns={columns}
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
                {data?.map((e, index) => {
                    return (
                        <TableBodyRow key={index}>
                            <TableBodyCell>
                                <Text size="xs">{index + 1}</Text>
                            </TableBodyCell>
                            <TableBodyCell>
                                <Text size="xs">{e?.nama_halaman}</Text>
                            </TableBodyCell>
                            <TableBodyCell>
                                <Text size="xs" className="text-center">{e?.status}</Text>
                            </TableBodyCell>
                            <TableBodyCell>
                                <Text size="xs">{e?.time_start}</Text>
                            </TableBodyCell>
                            <TableBodyCell>
                                <Text size="xs">{e?.time_end}</Text>
                            </TableBodyCell>
                            <TableBodyCell>
                                <Text size="xs" className="text-center">{e?.nm_files}</Text>
                            </TableBodyCell>

                            <TableBodyCell>
                                <div className="flex flex-row gap-3 justify-center">
                                    <IconButton size="sm" variant="warning" onClick={() => {
                                    }}>
                                        <PencilSimpleLine/>
                                    </IconButton>
                                    <IconButton size="sm" variant="danger"
                                                onClick={() => {
                                                }}>
                                        <Trash/>
                                    </IconButton>
                                </div>
                            </TableBodyCell>
                        </TableBodyRow>
                    );
                })}
            </TableBody>
        </Table>
    )
}

export default KonfigurasiUser