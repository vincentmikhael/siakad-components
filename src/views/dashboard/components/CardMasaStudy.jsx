'use client'
import {Card, Hr, IconButton, Text, Utils, ProgressBarRadianHalf, ProgressBar} from "@/components";
import React from "react";
import {CaretRight} from "@phosphor-icons/react/dist/ssr";

const DEFAULT = [
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
    {
        "id": "0103",
        "singkatan": "TI",
        "nama": "Teknik Industri S-1",
        "nama_en": "Industrial Engineering",
        "jenjang": "S-1",
        "kaprodi": null,
        "sekprodi": null,
        "status": "1"
    },
    {
        "id": "0104",
        "singkatan": "TK",
        "nama": "Teknik Kimia S-1",
        "nama_en": "Chemical Engineering",
        "jenjang": "S-1",
        "kaprodi": null,
        "sekprodi": null,
        "status": "1"
    },
    {
        "id": "0106",
        "singkatan": "ED",
        "nama": "Teknik Listrik D-III",
        "nama_en": "Electrical  Engineering",
        "jenjang": "D-III",
        "kaprodi": null,
        "sekprodi": null,
        "status": "1"
    },
];
const masaStudyStats = [
    {years: 4.0}, {years: 4.2}, {years: 4.2}, {years: 4.2},
];

export default function CardMasaStudy({
                                          className,
                                          masaStudyList = DEFAULT,
                                          academic,
                                          selected = 1,
                                          indexName = 'name'
                                      }) {
    // let maksTahunListed = 0
    masaStudyList = masaStudyList.map((masaStudy, index) => {
        // const item = {...masaStudyStats[index], ...masaStudy};
        // if (item.years > maksTahunListed)
        //     maksTahunListed = item.years;
        return {...masaStudyStats[index], ...masaStudy};
    })
    const maksTahun = 8
    const meanTahun = 3.8
    const projectionBar = (maksTahun === 0 ? 0 : (meanTahun / maksTahun) * 100)
    return <Card className={className}>
        <div className="flex flex-row gap-3 w-full justify-between items-start">
            <div>
                <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                    Rerata Masa study
                </Text>
                <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                    {academic[selected][indexName]}
                </Text>
            </div>
            <IconButton><CaretRight weight="bold" size={16}/></IconButton>
        </div>
        <Hr className=""/>
        <div className="flex relative justify-center mb-8">
            <ProgressBarRadianHalf width={300} progress={projectionBar}/>
            <div className="flex flex-col absolute bottom-0 justify-center text-center">
                <Text className="text-center" weight="600" size="xl"
                      color="text-gray-100">{`${meanTahun}`}<Text weight="500"
                                                                  className="ml-1"
                                                                  size="sm" tag="span"
                                                                  color="text-gray-60">{`Tahun`}</Text></Text>
                <Text weight="500" size="sm" color="text-gray-80">{`Maksimal ${maksTahun} tahun`}</Text>
            </div>
        </div>
        <div className="flex flex-col gap-8">
            {masaStudyList && masaStudyList.map((masaStudy, index) => {
                return <div className="flex flex-col items-center gap-1 justify-between" key={index}>
                    <div className="flex flex-row justify-between w-full">
                        <Text weight="500" size="sm" color="text-gray-60">{masaStudy.nama}</Text>
                        <Text weight="600" size="sm" color="text-gray-100">
                            {`${Utils.fixFloatingPoint(masaStudy.years, 1)} tahun`}
                        </Text>
                    </div>
                    <ProgressBar fullWidth width={500} height={25}
                        progress={maksTahun === 0 ? 0 : (masaStudy.years / maksTahun * 100)}/>
                </div>
            })}
        </div>
    </Card>
}