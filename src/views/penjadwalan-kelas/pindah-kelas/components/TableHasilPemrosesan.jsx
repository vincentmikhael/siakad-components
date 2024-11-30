import {
    Checkbox,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow, Text
} from "@/components";

export default function TableHasilPemrosesan({data, columns, pinnedColumns}){
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
                        default :
                            return <TableBodyCell key={indexCol}><Text size="xs">{e[col.colName]}</Text></TableBodyCell>
                    }
                })}</>
                </TableBodyRow>
            })}
        </TableBody>
    </Table>
}