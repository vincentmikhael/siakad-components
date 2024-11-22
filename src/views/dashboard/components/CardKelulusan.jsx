'use client'
import {Card, Hr, IconButton, ProgressBar, Text, Utils} from "@/components";
import {CaretRight} from "@phosphor-icons/react/dist/ssr";
import React from "react";

const DEFAULT = [
    {
        "id": "0101",
        "singkatan": "MS",
        "nama": "Teknik Mesin S-1",
        "nama_en": "Mechanical Engineering",
        "jenjang": "S-1",
        "kaprodi": null,
        "sekprodi": null,
        "status": "1"
    },
    {
        "id": "0102",
        "singkatan": "EL",
        "nama": "Teknik Elektro S-1",
        "nama_en": "Electrical  Engineering",
        "jenjang": "S-1",
        "kaprodi": null,
        "sekprodi": null,
        "status": "1"
    },
    // {
    //     "id": "0103",
    //     "singkatan": "TI",
    //     "nama": "Teknik Industri S-1",
    //     "nama_en": "Industrial Engineering",
    //     "jenjang": "S-1",
    //     "kaprodi": null,
    //     "sekprodi": null,
    //     "status": "1"
    // },
    // {
    //     "id": "0104",
    //     "singkatan": "TK",
    //     "nama": "Teknik Kimia S-1",
    //     "nama_en": "Chemical Engineering",
    //     "jenjang": "S-1",
    //     "kaprodi": null,
    //     "sekprodi": null,
    //     "status": "1"
    // },
    {
        "id": "0105",
        "singkatan": "MD",
        "nama": "Teknik Mesin D-III",
        "nama_en": "Mechanical Engineering",
        "jenjang": "D-III",
        "kaprodi": null,
        "sekprodi": null,
        "status": "1"
    },
    // {
    //     "id": "0106",
    //     "singkatan": "ED",
    //     "nama": "Teknik Listrik D-III",
    //     "nama_en": "Electrical  Engineering",
    //     "jenjang": "D-III",
    //     "kaprodi": null,
    //     "sekprodi": null,
    //     "status": "1"
    // },
    {
        "id": "0107",
        "singkatan": "TD",
        "nama": "Teknik Industri D-III",
        "nama_en": "Industrial Engineering",
        "jenjang": "D-III",
        "kaprodi": null,
        "sekprodi": null,
        "status": "1"
    },
    // {
    //     "id": "0108",
    //     "singkatan": "IT",
    //     "nama": "Teknik Informatika S-1",
    //     "nama_en": "Informatics Engineering",
    //     "jenjang": "S-1",
    //     "kaprodi": null,
    //     "sekprodi": null,
    //     "status": "1"
    // },
    // {
    //     "id": "0109",
    //     "singkatan": "MB",
    //     "nama": "Bisnis Digital S-1",
    //     "nama_en": "-",
    //     "jenjang": "S-1",
    //     "kaprodi": null,
    //     "sekprodi": null,
    //     "status": "1"
    // },
    {
        "id": "0110",
        "singkatan": "TI",
        "nama": "Teknik Informatika S1",
        "nama_en": "Informatics Eng",
        "jenjang": "S1",
        "kaprodi": null,
        "sekprodi": null,
        "status": "1"
    },
    // {
    //     "id": "0201",
    //     "singkatan": "SI",
    //     "nama": "Teknik Sipil S-1",
    //     "nama_en": "Civil Engineering",
    //     "jenjang": "S-1",
    //     "kaprodi": null,
    //     "sekprodi": null,
    //     "status": "1"
    // },
    // {
    //     "id": "0202",
    //     "singkatan": "AR",
    //     "nama": "Arsitektur S-1",
    //     "nama_en": "Architecture Departement",
    //     "jenjang": "S-1",
    //     "kaprodi": null,
    //     "sekprodi": null,
    //     "status": "1"
    // },
    // {
    //     "id": "0203",
    //     "singkatan": "PA",
    //     "nama": "Teknik Pengairan S-1",
    //     "nama_en": "Water Resources Engineering",
    //     "jenjang": "S-1",
    //     "kaprodi": null,
    //     "sekprodi": null,
    //     "status": "1"
    // },
    // {
    //     "id": "0204",
    //     "singkatan": "PL",
    //     "nama": "Perencanaan Wilayah dan Kota S-1",
    //     "nama_en": "Urban and Regional Planning",
    //     "jenjang": "S-1",
    //     "kaprodi": null,
    //     "sekprodi": null,
    //     "status": "1"
    // },
    // {
    //     "id": "0205",
    //     "singkatan": "GD",
    //     "nama": "Teknik Geodesi S-1",
    //     "nama_en": "Geodesy Engineering",
    //     "jenjang": "S-1",
    //     "kaprodi": null,
    //     "sekprodi": null,
    //     "status": "1"
    // },
    {
        "id": "0206",
        "singkatan": "TL",
        "nama": "Teknik Lingkungan S-1",
        "nama_en": "Environmental Engineering",
        "jenjang": "S-1",
        "kaprodi": null,
        "sekprodi": null,
        "status": "1"
    },
    // {
    //     "id": "0207",
    //     "singkatan": "SD",
    //     "nama": "Teknik Sipil D-III",
    //     "nama_en": "Geodesy Engineering",
    //     "jenjang": "D-III",
    //     "kaprodi": null,
    //     "sekprodi": null,
    //     "status": "1"
    // },
    // {
    //     "id": "0208",
    //     "singkatan": "GE",
    //     "nama": "Teknik Geodesi D-III",
    //     "nama_en": "Geodesy Engineering",
    //     "jenjang": "D-III",
    //     "kaprodi": null,
    //     "sekprodi": null,
    //     "status": "1"
    // },
    // {
    //     "id": "0209",
    //     "singkatan": "TI",
    //     "nama": "Teknik Informatika S1",
    //     "nama_en": "Informatics Eng",
    //     "jenjang": "S1",
    //     "kaprodi": null,
    //     "sekprodi": null,
    //     "status": "1"
    // }
]
const kelulusanStats = [
    {quantity: 130}, {quantity: 120}, {quantity: 100}, {quantity: 80}, {quantity: 74}, {quantity: 43},
];
export default function CardKelulusan({
                                          className,
                                          kelulusanList = DEFAULT,
                                          academic,
                                          selected = 1,
                                          indexName = 'name'
                                      }) {
    let maksKelulusanListed = 0;
    kelulusanList = kelulusanList.map((kelulusan, index) => {
        const item = {...kelulusanStats[index], ...kelulusan};
        if (item.quantity > maksKelulusanListed)
            maksKelulusanListed = item.quantity
        return item;
    })
    return <Card className={className}>
        <div className="flex flex-row gap-3 w-full justify-between items-start">
            <div>
                <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                    Kelulusan
                </Text>
                <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                    {academic[selected][indexName]}
                </Text>
            </div>
            <IconButton><CaretRight weight="bold" size={16}/></IconButton>
        </div>
        <Hr className="mb-8"/>
        <div className="flex flex-col gap-8">
            {kelulusanList && kelulusanList.map((kelulusan, index) => {
                return <div className="flex flex-col items-center gap-1 justify-between" key={index}>
                    <div className="flex flex-row justify-between w-full">
                        <Text weight="500" size="sm" color="text-gray-60">{kelulusan.nama}</Text>
                        <Text weight="600" size="sm"
                              color="text-gray-100">{`${kelulusan.quantity}`}<Text weight="500"
                                                                                   className="ml-1"
                                                                                   size="sm" tag="span"
                                                                                   color="text-gray-60">{`Mahasiswa`}</Text></Text>
                    </div>
                    <ProgressBar fullWidth  width={500} height={25} withBackground={false}
                        progress={maksKelulusanListed === 0 ? 0 : (kelulusan.quantity / maksKelulusanListed * 100)}/>
                </div>
            })}
        </div>
    </Card>
}