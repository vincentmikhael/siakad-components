'use client'
import dynamic from 'next/dynamic';
import {ChartData} from "@/components";

const ChartRoundedDoughnut = dynamic(() => import('@/components/Charts/RoundedDoughnut')
        .then(m => {
            return m.RoundedDoughnut
        })
    , {
        ssr: false, // Disable server-side rendering for this component
    });

const color = [
    '#068CCD', //primary 100
    '#FF4144', //danger 90
    '#FF8D41', //warning 90
    '#42BC54', //success 90
    '#5180FF', //info 70
    '#1E97D2', //primary 90
    '#FF5457', //danger 80
    '#F89D58', //warning 80
    '#4BC264', //success 80
    '#3C70FF', //info 80
    '#017CB7', //primary 110
    '#CC3436', //danger 100
    '#CC7135', //warning 100
    '#349644', //success 100
    '#2256E6', //info 100
]
export default function CardDataMahasiswa({
                                              className,
                                              data
                                          }) {
    const totalValue = data.reduce((acc, item) => acc + item.value, 0);
    const formattedData = data.map((item, index) => ({
        percentage: ((item.value / totalValue) * 100).toFixed(2),
        color: color[index % color.length],
        label: item.label
    }));

    return <div className="flex flex-col sm:flex-row gap-12 items-center">
        <div className="w-[200px] h-[200px]">
            <ChartRoundedDoughnut data={data} title={''} height={200} width={200}/>
        </div>
        <div className="flex flex-row gap-12 flex-wrap">
            {data && <ChartData
                data={formattedData}
            />}
        </div>
    </div>
}