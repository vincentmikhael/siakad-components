'use client'
import {Card, IconButton, Text, TextWithRef, Utils} from "@/components";
import {CaretRight} from "@phosphor-icons/react/dist/ssr";
import React, {useEffect, useRef, useState} from "react";

export default function CardTotalKaryawan({className, countKaryawanActive = 209}) {
    const countUpRef = useRef(null);
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (countUpRef.current) {
            Utils.initCountUpAnimation(
                countUpRef.current, // The target element
                setCount,          // Update the count state
                countKaryawanActive,              // Final count value
                2000,              // Animation duration in ms
                10                 // Timeout interval in ms
            );
        }
    }, [countKaryawanActive]);
    return <Card className={className}>
        <div className="flex flex-row gap-3 w-full justify-between items-start">
            <div>
                <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                    Total karyawan
                </Text>
                <Text className="mb-8" color="text-gray-50" weight="400" size="base">
                    Terhitung dari daftar total {Utils.thousandth(224)}
                </Text>
            </div>
            <IconButton><CaretRight weight="bold" size={16}/></IconButton>
        </div>
        <div className="flex gap-3 items-center">
            <TextWithRef ref={countUpRef} size="4xl" weight={800} color="text-black">{Utils.thousandth(count)}</TextWithRef>
            <Text className="" tag="span" color="text-gray-50" weight="400" size="base">
                Karyawan aktif
            </Text>
        </div>
    </Card>
}