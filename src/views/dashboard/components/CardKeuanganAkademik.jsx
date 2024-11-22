'use client'
import {Button, Card, Text, TextWithRef, Utils} from "@/components";
import {useEffect, useRef, useState} from "react";

export default function CardKeuanganAkademik({
                                                 className,
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
        <div className="flex flex-col lg:flex-row gap-3 w-full justify-between">
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