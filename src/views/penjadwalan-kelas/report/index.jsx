'use client'
import {TabItem, Tabs} from "@/components";
import {TabJadwalDosenMengajar, TabJadwalKuliahPerHari, TabJadwalKuliahPerSemester} from "./components";

const tabs = [
    {title: 'Jadwal dosen mengajar', component: TabJadwalDosenMengajar},
    {title: 'Jadwal kuliah per hari', component: TabJadwalKuliahPerHari},
    {title: 'Jadwal kuliah per semester', component: TabJadwalKuliahPerSemester},
]
export default function Index({}) {
    return <Tabs>{
        tabs.map((value, index) => (<TabItem key={index} title={value.title}>
            {<value.component/>}
        </TabItem>))
    }</Tabs>
}