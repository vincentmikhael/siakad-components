'use client'
import {Button, Hr, Pagination, Select, Text} from "@/components";
import {TableHasilPemrosesan, TablePindahKelas} from "./components"

const data = [
    {
        nim: 1718120,
        nama: 'Ahmad rahadian',
        user_entry: 'Putry',
        ip_entry: 'F. Yudi Limpraptono, Dr. S',
        ts_entry: 'F. Yudi Limpraptono, Dr. S',
    },
    {
        nim: 1718120,
        nama: 'Anggi lucyana',
        user_entry: 'Putry',
        ip_entry: 'F. Yudi Limpraptono, Dr. S',
        ts_entry: 'F. Yudi Limpraptono, Dr. S',
    },
    {
        nim: 1718120,
        nama: 'Aris karisma',
        user_entry: 'Putry',
        ip_entry: 'F. Yudi Limpraptono, Dr. S',
        ts_entry: 'F. Yudi Limpraptono, Dr. S',
    },
    {
        nim: 1718120,
        nama: 'Diah nafisah',
        user_entry: 'Putry',
        ip_entry: 'F. Yudi Limpraptono, Dr. S',
        ts_entry: 'F. Yudi Limpraptono, Dr. S',
    },
    {
        nim: 1718120,
        nama: 'Dwi rahayu ningsih',
        user_entry: 'Putry',
        ip_entry: 'F. Yudi Limpraptono, Dr. S',
        ts_entry: 'F. Yudi Limpraptono, Dr. S',
    },
    {
        nim: 1718120,
        nama: 'Fajar Mandasari',
        user_entry: 'Putry',
        ip_entry: 'F. Yudi Limpraptono, Dr. S',
        ts_entry: 'F. Yudi Limpraptono, Dr. S',
    },
    {
        nim: 1718120,
        nama: 'Nafilah',
        user_entry: 'Putry',
        ip_entry: 'F. Yudi Limpraptono, Dr. S',
        ts_entry: 'F. Yudi Limpraptono, Dr. S',
    },
    {
        nim: 1718120,
        nama: 'Kiki wahyuni',
        user_entry: 'Putry',
        ip_entry: 'F. Yudi Limpraptono, Dr. S',
        ts_entry: 'F. Yudi Limpraptono, Dr. S',
    },
    {
        nim: 1718120,
        nama: 'Yudi purnomo',
        user_entry: 'Putry',
        ip_entry: 'F. Yudi Limpraptono, Dr. S',
        ts_entry: 'F. Yudi Limpraptono, Dr. S',
    },
    {
        nim: 1718120,
        nama: 'Zaid fadhillah',
        user_entry: 'Putry',
        ip_entry: 'F. Yudi Limpraptono, Dr. S',
        ts_entry: 'F. Yudi Limpraptono, Dr. S',
    },
]
const dataHasilPemrosesan = [
    {nim: 'A', kuota: 48, terisi: 48},
    {nim: 'B', kuota: 48, terisi: 48},
    {nim: 'C', kuota: 48, terisi: 26},
]
const columns = [
    {name: "", minWidth: "min-w-[56px]", colName: "id"},
    {name: "nim", minWidth: "min-w-[76px]", colName: "nim"},
    {name: "nama", minWidth: "min-w-[220px]", colName: "nama"},
    {name: "user entry", minWidth: "min-w-[128px]", colName: "user_entry"},
    {name: "ip entry", minWidth: "min-w-[220px]", colName: "ip_entry"},
    {name: "ts entry", minWidth: "min-w-[220px]", colName: "ts_entry"},
];
const columnsHasilPemrosesan = [
    {name: "nim", minWidth: "min-w-[76px]", colName: "nim"},
    {name: "kuota", minWidth: "min-w-[128px]", colName: "kuota"},
    {name: "terisi", minWidth: "min-w-[128px]", colName: "terisi"},
]
const pinnedColumns = [0];
export default function Index({}) {
    // const [openAddModal, setOpenAddModal] = useState(false);
    // const openModalAdd = () => setOpenAddModal(true);
    // const closeModalAdd = () => setOpenAddModal(false);
    const onSubmit = () => {

    }
    return <>
        <div className="flex xl:overflow-x-auto xl:min-w-0 scrollbar-thin overflow-y-visible">
            <div
                className="flex flex-wrap xl:flex-nowrap xl:flex-shrink-0 flex-grow justify-end items-center gap-4 overflow-y-visible">
                <Select isRelative={false} label="Fakultas" options={[]} showLabel/>
                <Select isRelative={false} label="Program studi" options={[]} showLabel/>
                <Select isRelative={false} label="Konsentrasi" options={[]} showLabel/>
                <Select isRelative={false} label="Semester" options={[]} showLabel/>
                <Select isRelative={false} label="Tahun akademik" options={[]} showLabel/>
                <Select isRelative={false} label="Mata kuliah" options={[]} showLabel/>
                <Select isRelative={false} label="Kelas" options={[]} showLabel/>
            </div>
        </div>
        <TablePindahKelas data={data} columns={columns} pinnedColumns={pinnedColumns}/>
        {/*<ModalPindahKelas open={openAddModal} onClose={closeModalAdd}/>*/}
        <Pagination/>
        <Hr className="w-full"/>
        <div className="flex w-full flex-wrap xl:flex-nowrap gap-3">
            <div className="flex w-full xl:w-1/2 gap-3">
                <Text size="xl" color="text-gray-100" weight={600}>
                    Pindahkan ke kelas:
                </Text>
                <div className="w-full xl:w-[200px]">
                    <Select options={[]} placeholder="Pilih kelas"/>
                </div>
                <Button
                    type="button"
                    variant="primary"
                    size="md"
                    fullWidth={false}
                    filled
                    disabled={/*()!password || !passwordNew || !passwordConfirmation) ||*/ false /*pending*/}
                    onClick={onSubmit}
                >Simpan</Button>
            </div>
            <div className="flex flex-col w-full xl:w-1/2">
                <Text size="xl" color="text-gray-100" weight={600}>
                    Hasil pemrosesan
                </Text>
                <TableHasilPemrosesan data={dataHasilPemrosesan} columns={columnsHasilPemrosesan}/>
            </div>
        </div>
    </>
}