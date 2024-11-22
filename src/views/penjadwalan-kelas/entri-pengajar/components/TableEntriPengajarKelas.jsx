import {
    Checkbox, IconButton,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow, Text, Utils
} from "@/components";
import {PencilSimpleLine, Trash} from "@phosphor-icons/react";

export default function TableEntriPengajarKelas({data, columns, pinnedColumns, onParameterChange, listPengajarKelas}) {
    return <Table
        loading={false}
        columns={columns}
        data={data}
        pinned={pinnedColumns}
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
            {data.map((e, index) => {
                return <TableBodyRow key={index}><>{columns.map((col, indexCol) => {
                    switch (col.colName) {
                        case "id":
                            return <TableBodyCell key={indexCol}>
                                <Checkbox defaultValue={e[col.colName]} size="xs">{index + 1}</Checkbox>
                            </TableBodyCell>
                        case "actions":
                            return <TableBodyCell key={indexCol}>
                                <div className="flex flex-row gap-3">
                                    <IconButton size="sm" variant="warning">
                                        <PencilSimpleLine/>
                                    </IconButton>
                                    <IconButton size="sm" variant="danger">
                                        <Trash/>
                                    </IconButton>
                                </div>
                            </TableBodyCell>
                        case "posisi.nama":
                        case "posisi.awal":
                        case "posisi.akhir":
                            return <TableBodyCell key={indexCol}><Text size="xs">
                                {Utils.resolveNestedValue(e, col.colName) || '-'}
                            </Text></TableBodyCell>
                        default :
                            return <TableBodyCell key={indexCol}><Text size="xs">{e[col.colName]}</Text></TableBodyCell>
                    }
                })}</></TableBodyRow>
            })}
        </TableBody>
    </Table>
}