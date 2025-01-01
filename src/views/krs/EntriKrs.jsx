import { Badge, Button, Select, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableHeadRow, Text } from "@/components";
import { ArrowCounterClockwise,Plus,TrashSimple } from "@phosphor-icons/react/dist/ssr";

export default function EntriKrs(){
    const data = [
        {id: 1, name: 'John Doe', email: 'lorem ipsum',},
        {id: 2, name: 'Jane Smith', email: 'tes',},
        {id: 3, name: 'Sam Green', email: '123',},

    ]
    const columns = [
        {name: ''},
        {name: 'kode mk', pinned: true},
        {name: 'nama mata kuliah', pinned: true},
        {name: 'sks', pinned: false},
        {name: 'prasyarat', pinned: false},
        {name: 'co-prasyarat', pinned: false},
        {name: 'syarat sks', pinned: false},
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
                                <TableBodyCell><Text size="xs">{e.email}</Text></TableBodyCell>
      
                            </TableBodyRow>
                        )
                    })}
                </TableBody>

            </Table>

            <div className="flex justify-between my-5">
                <div className="flex gap-4">
                    <Button filled leftIcon={<Plus/>}>Tambah mata kuliah</Button>
                    <Button leftIcon={<ArrowCounterClockwise/>} variant="white">Reset</Button>
                </div>
                <Text size="sm">Batas waktu berakhir : <span className="text-danger-90">02 September 2024</span></Text>
            </div>
           
            <Table columns={columns} data={data}>
                <TableHead>
                    <TableHeadRow>
                        <TableHeadCell>KODE MK</TableHeadCell>
                        <TableHeadCell>NAMA MATA KULIAH</TableHeadCell>
                        <TableHeadCell>SKS</TableHeadCell>
                        <TableHeadCell>STATUS WALI</TableHeadCell>
                    </TableHeadRow>

                </TableHead>

                <TableBody>

                    {data.map((e, index) => {
                        return (
                            <TableBodyRow key={index}>
                                <TableBodyCell><Text size="xs">{e.id}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.name}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.email}</Text></TableBodyCell>
                                <TableBodyCell><Badge filled variant="success">Sah</Badge></TableBodyCell>
      
                            </TableBodyRow>
                        )
                    })}
                </TableBody>

            </Table>

            <div className="flex mt-5 items-center gap-5">
                <Button leftIcon={<TrashSimple/>} filled variant="danger">Delete</Button>
                <Text size="md" weight={600}>Total SKS : 9 SKS, dari : 0 SKS</Text>
            </div>
            
        </>
    )
}