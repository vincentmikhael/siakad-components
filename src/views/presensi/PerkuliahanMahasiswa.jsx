import { Button, IconButton, Select, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableHeadRow, Text } from "@/components";
import { Download, DownloadSimple, Eye, FilePdf, FileXls, MicrosoftExcelLogo, PencilSimpleLine, Trash } from "@phosphor-icons/react/dist/ssr";

export default function PerkuliahanMahasiswa(){
    const data = [
        {id: 1, name: 'John Doe', email: 'lorem ipsum',},
        {id: 2, name: 'Jane Smith', email: 'tes',},
        {id: 3, name: 'Sam Green', email: '123',},

    ]
    const columns = [
        {name: 'NIM', pinned: true},
        {name: 'nama', pinned: true},
        {name: 'nilai akhir', pinned: false},
        {name: 'grade', pinned: false},
        {name: 'user entry', pinned: false},
    ]
    return (
        <>
        <div class="grid my-5 xl:grid-cols-8 lg:grid-cols-5 md:grid-cols-2 gap-4">
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
                            label="Jurusan"
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
            <div>
  
  <Select
      label="Mata kuliah"
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
                            label="Pengajar"
                            size="xs"
                            labelKey="nama"
                            valueKey="id"
                            showLabel
                            className={"w-full"}
                            options={[]}
                        />

            </div>
        </div>

        <div
            className="flex items-center justify-center bg-fade text-gray-50 min-h-[250px] lg:min-h-[500px] mb-3">Template
        </div>
        <div className="flex gap-3">
            <Button leftIcon={<FilePdf/>} variant='danger' filled>Export PDF</Button>
        </div>
            
        </>
    )
}