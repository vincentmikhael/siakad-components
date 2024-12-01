import {TableDefaultDetail} from "./index";

export default function TableMahasiswa({data, columns, pinnedColumns}) {
    return <TableDefaultDetail data={data} columns={columns} pinnedColumns={pinnedColumns}/>
}