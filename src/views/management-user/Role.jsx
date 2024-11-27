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

const Role = () => {
    const columns = [
        {name: "no"},
        {name: "nama role", className: "min-w-[240px]"},
        {name: "scope", className: "min-w-[156px]"},
        {name: "status", className: "min-w-[148px] text-center"},
        {name: "keterangan", className: "w-full text-center"},
        {name: "actions", className: "min-w-[132px]  text-center"},
    ];
    const data = [
        {
            nama_role: "adm fakultas",
            scope: "Fakultas",
            status: "1",
            keterangan: "-",
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
                                <Text size="xs">{e?.nama_role}</Text>
                            </TableBodyCell>
                            <TableBodyCell>
                                <Text size="xs">{e?.scope}</Text>
                            </TableBodyCell>
                            <TableBodyCell>
                                <Text size="xs" className="text-center">{e?.status}</Text>
                            </TableBodyCell>
                            <TableBodyCell>
                                <Text size="xs" className="text-center">{e?.keterangan}</Text>
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

export default Role