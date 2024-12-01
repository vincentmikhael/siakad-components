import {Checkbox, Input, Label, Pagination} from "@/components";
import {TableRuangan} from "./index";
import {MagnifyingGlass} from "@phosphor-icons/react/dist/ssr";

const data = [
    {kode_mk: '001', lokasi_kampus: 'Kampus 1', nama_gedung: 'Gedung Sipil', hari: 'Selasa', jam: 1, ruang: 2,},
    {kode_mk: '001', lokasi_kampus: 'Kampus 1', nama_gedung: 'Gedung Sipil', hari: 'Selasa', jam: 1, ruang: 2,},
    {kode_mk: '001', lokasi_kampus: 'Kampus 1', nama_gedung: 'Gedung Sipil', hari: 'Selasa', jam: 1, ruang: 2,},
    {kode_mk: '001', lokasi_kampus: 'Kampus 1', nama_gedung: 'Gedung Sipil', hari: 'Selasa', jam: 1, ruang: 2,},
    {kode_mk: '001', lokasi_kampus: 'Kampus 1', nama_gedung: 'Gedung Sipil', hari: 'Selasa', jam: 1, ruang: 2,},
    {kode_mk: '001', lokasi_kampus: 'Kampus 1', nama_gedung: 'Gedung Sipil', hari: 'Selasa', jam: 1, ruang: 2,},
    {kode_mk: '001', lokasi_kampus: 'Kampus 1', nama_gedung: 'Gedung Sipil', hari: 'Selasa', jam: 1, ruang: 2,},
    {kode_mk: '001', lokasi_kampus: 'Kampus 1', nama_gedung: 'Gedung Sipil', hari: 'Selasa', jam: 1, ruang: 2,},
    {kode_mk: '001', lokasi_kampus: 'Kampus 1', nama_gedung: 'Gedung Sipil', hari: 'Selasa', jam: 1, ruang: 2,},
    {kode_mk: '001', lokasi_kampus: 'Kampus 1', nama_gedung: 'Gedung Sipil', hari: 'Selasa', jam: 1, ruang: 2,},
];
const columns = [
    {name: "", minWidth: "min-w-[56px]", colName: "id"},
    {name: "kode", minWidth: "min-w-[76px]", colName: "kode_mk"},
    {name: "lokasi kampus", minWidth: "min-w-[218px]", colName: "lokasi_kampus"},
    {name: "nama gedung", minWidth: "min-w-[218px]", colName: "nama_gedung"},
    {name: "hari", minWidth: "min-w-[84px]", colName: "hari"},
    {name: "jam", minWidth: "min-w-[80px]", colName: "jam"},
    {name: "ruang", minWidth: "min-w-[80px]", colName: "ruang"},
    {name: "", minWidth: "min-w-[108px]", colName: "actions"},
];
const pinnedColumns = [0];
export default function TabRuangan() {
    return <>
        <div className="flex xl:overflow-x-auto xl:min-w-0 scrollbar-thin overflow-y-visible">
            <div className="flex justify-between w-full gap-3">
                <div className="flex flex-col gap-3">
                    <Label>Lokasi kampus</Label>
                    <div className="flex justify-between w-full gap-3">
                        <Checkbox><Label>Kampus 1</Label></Checkbox>
                        <Checkbox><Label>Kampus 2</Label></Checkbox>
                    </div>
                </div>
                <Input
                    size="xs"
                    className="min-w-[156px] self-end"
                    placeholder={"Cari data disini"}
                    leftIcon={<MagnifyingGlass weight="bold"/>}
                />
            </div>
        </div>
        <TableRuangan data={data} columns={columns} pinnedColumns={pinnedColumns}/>
        <Pagination/>
    </>
}