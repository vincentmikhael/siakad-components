'use client'
import {Card, Hr, IconButton, Text, Utils} from "@/components";
import {CaretRight} from "@phosphor-icons/react/dist/ssr";
import React from "react";

const DEFAULT = [
    {nama: 'Phoenix Baker', nim: '1718120', ipk: 0.6888},
    {nama: 'Lana Steiner', nim: '1718120', ipk: 1.6232323},
    {nama: 'Demi Wilkinson', nim: '1718120', ipk: 0.777777},
    {nama: 'Candice Wu', nim: '1718120', ipk: 1.28125},
    {nama: 'Bunga', nim: '1718120', ipk: 1.25},
    {nama: 'Jono Joni Jontor', nim: '1718120', ipk: 1.232323},
];
export default function CardMahasiswaKritis({
                                                className,
                                                criticalList = DEFAULT,
                                                academic,
                                                selected = 1,
                                                indexName = 'name'
                                            }) {
    return <Card className={className}>
        <div className="flex flex-row gap-3 w-full justify-between items-start">
            <div>
                <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                    Mahasiswa kritis
                </Text>
                <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                    {academic[selected][indexName]}
                </Text>
            </div>
            <IconButton><CaretRight weight="bold" size={16}/></IconButton>
        </div>
        <Hr className="mb-8"/>
        <div className="overflow-y-auto flex flex-col gap-8 mb-8">
            {criticalList.map((item, index) => (
                <div className="inline-flex items-center gap-3 justify-between" key={index}>
                    <div className="inline-flex items-center">
                        <div className="w-8 h-8 bg-gray-30 rounded-full"></div>
                        <div className="block ml-3">
                            <Text weight="600" size="sm" color="text-gray-100">{item.nama}</Text>
                            <Text weight="500" size="sm" color="text-gray-60">{item.nim}</Text>
                        </div>
                    </div>
                    <Text className="" weight="600" size="base"
                          color="text-danger-90">{item.ipk ? Utils.fixFloatingPoint(item.ipk) : '-'}</Text>
                </div>
            ))}
        </div>
    </Card>
}