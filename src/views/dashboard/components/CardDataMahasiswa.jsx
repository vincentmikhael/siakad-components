'use client'
import {Button, Card, ChartRoundedDoughnut, Hr, Text} from "@/components";
import {CaretRight} from "@phosphor-icons/react/dist/ssr";
import {CardDataLegends} from "./index";

const DEFAULT = [
    {status: 'aktif', quantity: 10006, percent_growth: 12.32, date_retrieved: '02/11/2024', color: '#2660ff'},
    {status: 'PKN', quantity: 2009, percent_growth: 12.32, date_retrieved: '02/11/2024', color: '#ff8d41'},
    {status: 'cuti', quantity: 8006, percent_growth: 12.32, date_retrieved: '02/11/2024', color: '#ff4144'},
]
export default function CardDataMahasiswa({
                                              className,
                                              mahasiswaStatusCountList = DEFAULT,
                                              academic,
                                              selected = 1,
                                              indexName = 'name'
                                          }) {
    const data = mahasiswaStatusCountList.map((item)=> (item.quantity));
    const colors = mahasiswaStatusCountList.map((item)=> (item.color));
    return <Card className={className}>
        <div className="flex flex-row gap-3 w-full justify-between items-start">
            <div>
                <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                    Data mahasiswa
                </Text>
                <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                    {academic[selected][indexName]}
                </Text>
            </div>
            <Button className="text-gray-50" size="sm" variant="outlined"
                    rightIcon={<CaretRight weight="bold" size={16}/>}>Detail</Button>
        </div>
        <Hr className=""/>
        <div className="flex flex-wrap items-center">
            <div className="w-full xl:w-1/3">
                <ChartRoundedDoughnut data={data} colors={colors} title={''} height={200}/>
            </div>
            <div className="w-full xl:w-2/3 flex gap-3">
                {mahasiswaStatusCountList && <CardDataLegends className="w-1/3"
                    defaultList={mahasiswaStatusCountList} namePrefix={'Mahasiswa'}
                />}
            </div>
        </div>
    </Card>
}