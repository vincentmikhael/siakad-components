import { Badge, Button,  Select, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableHeadRow, Text } from "@/components";
import { ArrowCounterClockwise, FilePdf, Plus } from "@phosphor-icons/react/dist/ssr";

export default function ReportKrs(){
    const data = [
        {id: 1, name: 'John Doe', email: 'lorem ipsum',},
        {id: 2, name: 'Jane Smith', email: 'tes',},
        {id: 3, name: 'Sam Green', email: '123',},

    ]
    const columns = [
        {name: ''},
        {name: 'kode mk', pinned: false},
        {name: 'nama mata kuliah', pinned: false},
        {name: 'sks', pinned: false},
        {name: 'status wali', pinned: false},
    ]
    return (
        <>
        <div class="grid xl:grid-cols-8 mt-10 lg:grid-cols-4 md:grid-cols-2 gap-4 mb-5">
            <div>
  
                        <Select
                            label="Fakultas"
                            size="xs"
                            labelKey="nama"
                            valueKey="id"
                            showLabel
                            className={"w-full"}
                            options={[]}
                        />

            </div>
            <div>
  
                        <Select
                            label="Program studi"
                            size="xs"
                            labelKey="nama"
                            valueKey="id"
                            showLabel
                            className={"w-full"}
                            options={[]}
                        />

            </div>
            <div>
  
                        <Select
                            label="Konsentrasi"
                            size="xs"
                            labelKey="nama"
                            valueKey="id"
                            showLabel
                            className={"w-full"}
                            options={[]}
                        />

            </div>
            <div>
  
                        <Select
                            label="Angkatan"
                            size="xs"
                            labelKey="nama"
                            valueKey="id"
                            showLabel
                            className={"w-full"}
                            options={[]}
                        />

            </div>
            <div>
  
                        <Select
                            label="Mahasiswa"
                            size="xs"
                            labelKey="nama"
                            valueKey="id"
                            showLabel
                            className={"w-full"}
                            options={[]}
                        />

            </div>
            <div>
  
                        <Select
                            label="Semester"
                            size="xs"
                            labelKey="nama"
                            valueKey="id"
                            showLabel
                            className={"w-full"}
                            options={[]}
                        />

            </div>
            <div>
  
                        <Select
                            label="Tahun akademik"
                            size="xs"
                            labelKey="nama"
                            valueKey="id"
                            showLabel
                            className={"w-full"}
                            options={[]}
                        />

            </div>
            <div className="mt-7">
                <Button leftIcon={<ArrowCounterClockwise/>} variant="white">Refresh</Button>
            </div>

        </div>

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
                                <TableBodyCell><Text size="xs">{e.id}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.name}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.email}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.email}</Text></TableBodyCell>
                                <TableBodyCell><Badge filled variant="success">Sah</Badge></TableBodyCell>
      
                            </TableBodyRow>
                        )
                    })}
                </TableBody>

            </Table>

            <div className="flex gap-4 mt-5">
            <Button filled leftIcon={<FilePdf/>}>Download report</Button>
            </div>
            
        </>
    )
}