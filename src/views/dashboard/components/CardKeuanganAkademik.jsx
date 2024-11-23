'use client'
import {Button, Card, ChartDynamicLine, Text, TextWithRef, Utils} from "@/components";
import {useEffect, useRef, useState} from "react";
import dummyData from './dummy.json'
// import fs from 'fs';
// import path from 'path';

const DEFAULT = [
    {
        name: 'Pendapatan',
        color: '#42bc54',
        data: [1000, 1200, 1400, 1600, 1800, 2000, 2200], // Example values
    },
    {
        name: 'Piutang mahasiswa',
        color: '#ff4144',
        data: [800, 900, 1100, 1300, 1500, 1700, 1900], // Example values
    },
];
// Generate x-axis labels (dates between startDate and endDate)
const generateDates = (start, end) => {
    const dates = [];
    let current = new Date(start);
    const endDate = new Date(end);

    while (current <= endDate) {
        dates.push(current.toISOString().split('T')[0]); // Format: YYYY-MM-DD
        current.setDate(current.getDate() + 1); // Increment by 1 day
    }

    return dates;
};


export default function CardKeuanganAkademik({
                                                 className,
                                                 monetaryIncomeList = DEFAULT[0],
                                                 monetaryDebtList = DEFAULT[1],
                                                 labelCategorySeries,
                                                 totalPendapatan = 25000000000,
                                                 totalPiutang = 1000000000,
                                                 academic,
                                                 selected = 1,
                                                 indexName = 'name'
                                             }) {
    const countUpIncomeRef = useRef(null);
    const countUpDebtRef = useRef(null);
    const [countIncome, setCountIncome] = useState(0);
    const [countDebt, setCountDebt] = useState(0);

    // console.log(dummyData);
    // Dummy data implementation
    monetaryIncomeList.data = dummyData[0];
    monetaryDebtList.data = dummyData[1];

    const datasets = [monetaryIncomeList, monetaryDebtList]
    const startDate = '2024-09-01';
    const endDate = '2025-02-28';
    const dates = generateDates(startDate, endDate);

    useEffect(() => {
        const duration = 2000;
        const timeout = 10;
        if (countUpIncomeRef.current) {
            Utils.initCountUpAnimation(
                countUpIncomeRef.current,
                setCountIncome,
                totalPendapatan,
                duration,
                timeout,
            );
        }
        if (countUpDebtRef.current) {
            Utils.initCountUpAnimation(
                countUpDebtRef.current,
                setCountDebt,
                totalPiutang,
                duration,
                timeout,
            );
        }
    }, [totalPendapatan, totalPiutang]);
    return <Card className={className}>
        <div className="flex flex-col lg:flex-row w-full justify-between mb-8">
            <div>
                <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                    Keuangan akademik
                </Text>
                <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                    {academic[selected][indexName]}
                </Text>
            </div>
            <Button className="self-end lg:self-start" variant="primary" filled>Download report</Button>
        </div>
        <div className="flex w-full mb-4">
            <ChartDynamicLine datasets={datasets} labelSeries={dates} showLegend={false}/>
        </div>
        <div className="flex flex-wrap gap-4">
            <div>
                <TextWithRef ref={countUpIncomeRef} className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                    {`Rp.${Utils.thousandth(countIncome)}`}
                </TextWithRef>
                <div className="flex flex-wrap items-center gap-3">
                    <div className="w-3 h-3 bg-success-90 rounded-full"></div>
                    <Text className="" color="text-gray-50" weight="400" size="sm"> Total pendapatan</Text>
                </div>
            </div>
            <div>
                <TextWithRef ref={countUpDebtRef} className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                    {`Rp.${Utils.thousandth(countDebt)}`}
                </TextWithRef>
                <div className="flex flex-wrap items-center gap-3">
                    <div className="w-3 h-3 bg-danger-90 rounded-full"></div>
                    <Text className="" color="text-gray-50" weight="400" size="sm"> Total piutang mahasiswa</Text>
                </div>
            </div>
        </div>
    </Card>
}