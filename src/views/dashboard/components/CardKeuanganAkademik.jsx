'use client'
import {Button, Card, Text} from "@/components";

export default function CardKeuanganAkademik({className, academic, selected = 1, indexName = 'name'}) {
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
    </Card>
}