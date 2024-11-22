'use client'
import {Button, Card, Hr, Text} from "@/components";
import {CaretRight} from "@phosphor-icons/react/dist/ssr";
import {CardDataLegends} from "./index";

const DEFAULT = [
    {status: 'aktif', quantity: 10006, percent_growth: 12.32, date_retrieved: '02/11/2024', color: '#2660ff'},
    {status: 'penelitian', quantity: 2009, percent_growth: 12.32, date_retrieved: '02/11/2024', color: '#ff8d41'},
    {status: 'study', quantity: 8006, percent_growth: 12.32, date_retrieved: '02/11/2024', color: '#ff4144'},
]
export default function CardDataDosen({
                                          className, dosenStatusCountList = DEFAULT
                                      }) {
    return <Card className={className}>
        <div className="flex flex-row gap-3 w-full justify-between items-start">
            <div>
                <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                    Data dosen
                </Text>
                <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                    Terhitung dari daftar total 1.024
                </Text>
            </div>
            <Button className="text-gray-50" size="sm" variant="outlined"
                    rightIcon={<CaretRight weight="bold" size={16}/>}>Detail</Button>
        </div>
        <Hr className="mb-8"/>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3"></div>
            <div className="w-full lg:w-2/3 flex gap-3">
                {dosenStatusCountList && <CardDataLegends className="w-1/3"
                    defaultList={dosenStatusCountList} namePrefix={'Dosen'}
                />}
            </div>
        </div>
    </Card>
}