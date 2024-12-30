'use client'
import dynamic from 'next/dynamic';
import {Button, Card, Hr, Text} from "@/components";
import {CaretRight} from "@phosphor-icons/react/dist/ssr";
import {CardDataLegends} from "./index";

const ChartRoundedDoughnut = dynamic(() => import('@/components/Charts/RoundedDoughnut')
        .then(m => {
            // console.log(m);
            return m.RoundedDoughnut
        })
    , {
        ssr: false, // Disable server-side rendering for this component
    });

const DEFAULT = [
    {status: 'Aktif', quantity: 10006, percent_growth: 12.32, date_retrieved: '02/11/2024', color: '#2660ff'},
    {status: 'PKN', quantity: 2009, percent_growth: 12.32, date_retrieved: '02/11/2024', color: '#ff8d41'},
    {status: 'Cuti', quantity: 8006, percent_growth: 12.32, date_retrieved: '02/11/2024', color: '#ff4144'},
]
export default function CardDataMahasiswa({
                                              className,
                                              mahasiswaStatusCountList = DEFAULT,
                                              academic,
                                              selected = 1,
                                              indexName = 'name'
                                          }) {
    const data = mahasiswaStatusCountList.map((item) => ({value: item.quantity, name: item.status}));
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
                <ChartRoundedDoughnut data={data} title={''} height={200}/>
            </div>
            <div className="w-full xl:w-2/3 flex gap-3">
                {mahasiswaStatusCountList && <CardDataLegends className="w-1/3"
                                                              defaultList={mahasiswaStatusCountList}
                                                              namePrefix={'Mahasiswa'}
                />}
            </div>
        </div>
    </Card>
}