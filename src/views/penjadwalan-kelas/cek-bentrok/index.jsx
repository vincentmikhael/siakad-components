'use client'
import {TabItem, Tabs} from "@/components";
import {TabDosenBentrokMataKuliah, TabDosenBentrokRuangan, TabMahasiswa, TabRuangan} from "./components";

const tabs = [
    {title: 'Dosen bentrok mata kuliah', component: TabDosenBentrokMataKuliah},
    {title: 'Dosen bentrok ruangan', component: TabDosenBentrokRuangan},
    {title: 'Mahasiswa', component: TabMahasiswa},
    {title: 'Ruangan', component: TabRuangan},
]
export default function Index({}) {
    return <>
        <Tabs>{
            tabs.map((value, index) => (<TabItem key={index} title={value.title}>
                {<value.component />}
            </TabItem>))
        }</Tabs>
    </>
}