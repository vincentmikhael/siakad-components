import {
    Text,
    Table,
    TableBodyRow,
    TableBodyCell,
    TableHead,
    TableHeadCell,
    TableHeadRow,
    TableBody,
    Select,
    Label,
    Input,
    Button,
  } from "@/components";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react/dist/ssr";

export default function Peminatan(){
    const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com', prodi: 'Test', a: 'halo',b: 'halo',c: 'halo' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', prodi: 'Test', a: 'halo',b: 'halo',c: 'halo' },
        { id: 3, name: 'Sam Green', email: 'sam@example.com', prodi: 'Test', a: 'halo',b: 'halo',c: 'halo' },

      ]
      const columns = [
        { name: 'KODE',pinned: true },
        { name: 'NAMA KONSENTRASI',pinned: true },
        { name: 'FAKULTAS',pinned: false},
        { name: 'NAMA PRODI',pinned: false},
        { name: 'LOREM',pinned: false },
        { name: 'IPSUM',pinned: false},
        { name: 'SIT DOLOR',pinned: false},
      ]
    return (
        <div>
            <div className="flex justify-between items-end">
                <div className="flex gap-3">
                    <div className="">
                        <Label>Fakultas</Label>
                        <Select
                            className={"w-40 mt-3"}
                            options={[{value: "1", label: "Menu Item 1"}]}

                        />
                    </div>
                    <div>
                        <Label>Prodi</Label>
                        <Select
                            className={"w-40 mt-3"}
                            options={[{value: "1", label: "Menu Item 1"}]}

                        />
                    </div>
                </div>
                <div className="flex gap-3">
                    <div>
                        <Input placeholder="Cari data disini" leftIcon={<MagnifyingGlass/>}/>
                    </div>
                    <div>
                        
                        <Button size="md" filled leftIcon={<Plus/>} >Tambah Data</Button>
                    </div>
                </div>
                
            </div>
            
                <Table columns={columns} data={data}>
                <TableHead>
                    <TableHeadRow>
                        {columns.map((e,index)=>{
                            return (
                            <TableHeadCell pinned={e.pinned ?? false} key={index}>{e.name}</TableHeadCell>
                            )
                        })}
                    </TableHeadRow>
                    
                </TableHead>

                <TableBody>
                    
                        {data.map((e,index)=>{
                        return (
                            <TableBodyRow key={index}>
                                <TableBodyCell><Text style={{fontSize: '13px'}}>{e.id}</Text></TableBodyCell>
                                <TableBodyCell><Text style={{fontSize: '13px'}} >{e.name}</Text></TableBodyCell>
                                <TableBodyCell><Text style={{fontSize: '13px'}}>{e.email}</Text></TableBodyCell>
                                <TableBodyCell><Text style={{fontSize: '13px'}}>{e.prodi}</Text></TableBodyCell>
                                <TableBodyCell><Text style={{fontSize: '13px'}}>{e.a}</Text></TableBodyCell>
                                <TableBodyCell><Text style={{fontSize: '13px'}}>{e.b}</Text></TableBodyCell>
                                <TableBodyCell><Text style={{fontSize: '13px'}}>{e.c}</Text></TableBodyCell>
                            </TableBodyRow>
                        )
                        })}
                </TableBody>
                
                </Table>
        </div>
    )
}