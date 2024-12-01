import {
    Button,
    Checkbox,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableHeadRow, Text
} from "@/components";

export {default as TabDosenBentrokMataKuliah} from './TabDosenBentrokMataKuliah';
export {default as TabDosenBentrokRuangan} from './TabDosenBentrokRuangan';
export {default as TabMahasiswa} from './TabMahasiswa';
export {default as TabRuangan} from './TabRuangan';
export {default as TableDosenBentrokMataKuliah} from './TableDosenBentrokMataKuliah';
export {default as TableDosenBentrokRuangan} from './TableDosenBentrokRuangan';
export {default as TableMahasiswa} from './TableMahasiswa';
export {default as TableRuangan} from './TableRuangan';

export function TableDefaultDetail({data, columns, pinnedColumns}){
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
                                    <Button size="sm" variant="info">Detail</Button>
                                </div>
                            </TableBodyCell>
                        // case "date":
                        //     return <TableBodyCell key={indexCol}><Text size="xs">
                        //         {Utils.resolveNestedValue(e, col.colName) || '-'}
                        //     </Text></TableBodyCell>
                        default :
                            return <TableBodyCell key={indexCol}><Text size="xs">{e[col.colName]}</Text></TableBodyCell>
                    }
                })}</>
                </TableBodyRow>
            })}
        </TableBody>
    </Table>
}