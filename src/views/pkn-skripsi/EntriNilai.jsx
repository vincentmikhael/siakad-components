import { Button, Input, Select, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableHeadRow, Text } from "@/components";
import { DownloadSimple, MagnifyingGlass, MicrosoftExcelLogo } from "@phosphor-icons/react/dist/ssr";

export default function EntriNilai(){
    const data = [
        {id: 1, name: 'John Doe', email: 'lorem ipsum',},
        {id: 2, name: 'Jane Smith', email: 'tes',},
        {id: 3, name: 'Sam Green', email: '123',},

    ]
    const columns = [
        {name: 'NIM', pinned: true},
        {name: 'nama', pinned: true},
        {name: 'uts', pinned: false},
        {name: 'uas', pinned: false},
        {name: 'user entry', pinned: false},
        {name: 'nilai akhir', pinned: false},
        {name: 'grade', pinned: false},
        {name: 'user entry', pinned: false},
    ]
    return (
        <>
            <div className="flex my-5 flex-col lg:flex-row justify-between items-end gap-4">
                <div className="w-full lg:w-fit gap-4 flex sm:flex-row flex-col">
                    <Select value={[]} options={[]} label="Fakultas" showLabel
                            size="xs"
                            className="xl:w-[92px] w-full"
                            />
                    <Select value={[]} options={[]} label="Jurusan"
                            showLabel
                            size="xs"
                            className="xl:w-[124px] w-full"
                            />
                    <Select value={[]} options={[]} label="Program studi"
                            showLabel
                            size="xs"
                            className="xl:w-[124px] w-full"
                           />
                    <Select value={[]} options={[]} label="Semester" placeholder="Pilih semester"
                            showLabel
                            size="xs"
                            className="xl:w-[96px] w-full"
                           />
                    <Select value={[]} options={[]} label="Tahun akademik" placeholder="Pilih tahun akademik"
                            showLabel
                            size="xs"
                            className="xl:w-[140px] w-full"
                       />
                       <Select value={[]} options={[]} label="Mata kuliah" placeholder="Pilih mata kuliah"
                            showLabel
                            size="xs"
                            className="xl:w-[140px] w-full"
                       />
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
                                <TableBodyCell><Text size="xs">{e.email}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.email}</Text></TableBodyCell>
                                <TableBodyCell><Text size="xs">{e.email}</Text></TableBodyCell>
                            </TableBodyRow>
                        )
                    })}
                </TableBody>

            </Table>

            <div className="flex gap-4 mt-5">
            <Button filled leftIcon={<DownloadSimple/>}>Download template nilai</Button>
            <Button filled leftIcon={<MicrosoftExcelLogo/>} variant="success">Import data nilai</Button>
            </div>
        </>
    )
}