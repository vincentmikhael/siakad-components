'use client'
import {Button, Card, Hr, Text} from "@/components";
import {Calendar} from "@phosphor-icons/react/dist/ssr";
import {
    CardDataDosen,
    CardDataMahasiswa,
    CardKelulusan, CardKeuanganAkademik,
    CardMahasiswaKritis,
    CardMasaStudy, CardPenerimaanMahasiswaBaru,
    CardTotalDosen, CardTotalKaryawan, CardTotalMahasiswa, DashboardDate
} from "./components";

export default function Index({academic, selected = 1}) {
    return <main>
        <div className="flex flex-col lg:flex-row gap-3 w-full justify-between mb-8">
            <div className="">
                <Text size="4xl" weight={600} color="text-white">Dashboard master</Text>
                <DashboardDate/>
            </div>
            <div className="">
                <Text className="text-right mb-3" size="base" weight={600} color="text-white">Masa Akademik</Text>
                <Button leftIcon={<Calendar className="text-primary-100"/>} variant="white" fullWidth={true}
                        filled>{`${academic[selected].start} - ${academic[selected].end}`}</Button>
            </div>
        </div>
        <div className="flex justify-center flex-wrap -mx-2 gap-y-4">
            <div className="w-full lg:w-1/2 px-2">
                <CardPenerimaanMahasiswaBaru className="min-h-[216px]"/>
            </div>
            <div className="w-full lg:w-1/4 px-2">
                <CardMasaStudy className="min-h-[216px]" academic={academic} selected={selected}/>
            </div>
            <div className="w-full lg:w-1/4 px-2">
                <CardMahasiswaKritis className="min-h-[216px]" academic={academic} selected={selected}/>
            </div>
            <div className="w-full lg:w-1/4 px-2 flex flex-wrap gap-y-4">
                <div className="w-full">
                    <CardTotalDosen/>
                </div>
                <div className="w-full">
                    <CardTotalMahasiswa/>
                </div>
                <div className="w-full">
                    <CardTotalKaryawan/>
                </div>
            </div>
            <div className="w-full lg:w-1/4 h-full px-2">
                <CardKelulusan className="h-full min-h-[216px]" academic={academic} selected={selected}/>
            </div>
            <div className="w-full lg:w-1/2 h-full px-2">
                <CardKeuanganAkademik className="h-full min-h-[216px]" academic={academic} selected={selected}/>
            </div>
            <div className="w-full lg:w-1/2 px-2">
                <CardDataMahasiswa className={"min-h-[216px]"} academic={academic} selected={selected}/>
            </div>
            <div className="w-full lg:w-1/2 px-2">
                <CardDataDosen className={"min-h-[216px]"}/>
            </div>
        </div>
    </main>
}