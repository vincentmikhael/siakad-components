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

const User = () => {
    const columns = [
        {name: "no"},
        {name: "user id", className: "min-w-[132px]"},
        {name: "nama", className: "w-full"},
        {name: "role id", className: "min-w-[148px]"},
        {name: "info role", className: "min-w-[148px] text-center"},
        {name: "status", className: "min-w-[148px] text-center"},
        {name: "actions", className: "min-w-[132px]  text-center"},
    ];
    const data = [
        {
            user_id: "user1",
            nama: "Example Name",
            role_id: "Rektor",
            info_role: "All",
            status: "1"
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
                                <Text size="xs">{e?.user_id}</Text>
                            </TableBodyCell>
                            <TableBodyCell>
                                <Text size="xs">{e?.nama}</Text>
                            </TableBodyCell>
                            <TableBodyCell>
                                <Text size="xs">{e?.role_id}</Text>
                            </TableBodyCell>
                            <TableBodyCell>
                                <Text size="xs" className="text-center">{e?.info_role}</Text>
                            </TableBodyCell>
                            <TableBodyCell>
                                <Text size="xs" className="text-center">{e?.status}</Text>
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

export default User