'use client'
import {Button, Card, ChartBasicRoundedBar, Hr, Text, Utils} from "@/components";
import {Minus, TrendDown, TrendUp} from "@phosphor-icons/react";
import {useEffect, useState} from "react";

const DEFAULT = [
    {
        "id": "01",
        "nama": "FAKULTAS TEKNOLOGI INDUSTRI",
        "singkatan": "FTI",
        "sk": "ITN-650/IX.FTI-1/2007",
        "dekan": null,
        "ttd_dekan": null,
        "wd1": null,
        "ttd_wd1": null,
        "wd2": null,
        "ttd_wd2": null,
        "wd3": null,
        "ttd_wd3": null,
        "nm_fk_en": "Faculty of Industrial Engineering"
    },
    {
        "id": "02",
        "nama": "FAKULTAS TEKNIK SIPIL & PERENCANAAN",
        "singkatan": "FTSP",
        "sk": "ITN-07.229/WD1-II/FTSP/2007",
        "dekan": null,
        "ttd_dekan": null,
        "wd1": null,
        "ttd_wd1": null,
        "wd2": null,
        "ttd_wd2": null,
        "wd3": null,
        "ttd_wd3": null,
        "nm_fk_en": "Faculty of Civil and Planning Engineering"
    },
    {
        "id": "11",
        "nama": "PROGRAM PASCASARJANA",
        "singkatan": "PPS",
        "sk": "- ",
        "dekan": null,
        "ttd_dekan": null,
        "wd1": null,
        "ttd_wd1": null,
        "wd2": null,
        "ttd_wd2": null,
        "wd3": null,
        "ttd_wd3": null,
        "nm_fk_en": "-"
    }
]
const facultiesStats = [
    {quantity: 10006, percent_growth: 12.32, date_retrieved: '02/11/2024'},
    {quantity: 8006, percent_growth: 12.32, date_retrieved: '02/11/2024'},
    {quantity: 7006, percent_growth: 12.32, date_retrieved: '02/11/2024'},
    {quantity: 2009, percent_growth: 12.32, date_retrieved: '02/11/2024'},
];
const DEFAULT_PRODI = [
    {
        "id": "0101",
        "singkatan": "MS",
        "nama": "Teknik Mesin S-1",
        "nama_en": "Mechanical Engineering",
        "jenjang": "S-1",
        "kaprodi": null,
        "sekprodi": null,
        "status": "1"
    },
    {
        "id": "0102",
        "singkatan": "EL",
        "nama": "Teknik Elektro S-1",
        "nama_en": "Electrical  Engineering",
        "jenjang": "S-1",
        "kaprodi": null,
        "sekprodi": null,
        "status": "1"
    },
    {
        "id": "0105",
        "singkatan": "MD",
        "nama": "Teknik Mesin D-III",
        "nama_en": "Mechanical Engineering",
        "jenjang": "D-III",
        "kaprodi": null,
        "sekprodi": null,
        "status": "1"
    },
    {
        "id": "0107",
        "singkatan": "TD",
        "nama": "Teknik Industri D-III",
        "nama_en": "Industrial Engineering",
        "jenjang": "D-III",
        "kaprodi": null,
        "sekprodi": null,
        "status": "1"
    },
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
        "id": "0206",
        "singkatan": "TL",
        "nama": "Teknik Lingkungan S-1",
        "nama_en": "Environmental Engineering",
        "jenjang": "S-1",
        "kaprodi": null,
        "sekprodi": null,
        "status": "1"
    },
]
const mahasiswaBaruProdiStats = [
    {quantity: 130}, {quantity: 120}, {quantity: 100}, {quantity: 80}, {quantity: 74}, {quantity: 43},
];
const barWidth = {
    desktop: 50, mobile: 30
};
const chartCanvasHeight = {
    desktop: 400, mobile: 200
};
export default function CardPenerimaanMahasiswaBaru({
                                                        className, faculties = DEFAULT,
                                                        prodiList = DEFAULT_PRODI,
                                                    }) {
    const [dynamicBarWidth, setDynamicBarWidth] = useState(barWidth.desktop);
    const [dynamicChartHeight, setDynamicChartHeight] = useState(chartCanvasHeight.desktop);
    faculties = faculties.map((faculty, index) => {
        return {...facultiesStats[index], ...faculty};
    })
    const labelSeries = [];
    prodiList = prodiList.map((prodi, index) => {
        labelSeries.push(prodi.singkatan);
        // return {...mahasiswaBaruProdiStats[index], ...prodi};
        return {
            name: prodi.nama,
            value: mahasiswaBaruProdiStats[index].quantity,
        }
    })
    const indexForLabel = 'name'
    const tooltipFormatter = function (t) {
        const target = t[0];
        const index = target.dataIndex;
        const total = target.data;
        const abbr = target.axisValueLabel;
        const name = prodiList[index][indexForLabel];
        // console.log({total, abbr, name}, t);
        return `
<!--            <div class="p-2 bg-white rounded-lg shadow-md text-gray-900">-->
                <div><b>[${abbr}]</b> ${name}</div>
                <div><strong>Total:</strong> ${total}</div>
<!--            </div>-->
        `;
    }
    useEffect(() => {
        const updateChartContentSize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 640) {// Mobile
                setDynamicBarWidth(barWidth.mobile);
                setDynamicChartHeight(chartCanvasHeight.mobile);
            } else if (screenWidth >= 1024) {// Tablet and Desktop
                setDynamicBarWidth(barWidth.desktop);
                setDynamicChartHeight(chartCanvasHeight.desktop);
            }
        };

        updateChartContentSize();
        window.addEventListener("resize", updateChartContentSize);

        return () => window.removeEventListener("resize", updateChartContentSize);
    }, []);
    return <Card className={className}>
        <div className="flex flex-col lg:flex-row gap-3 w-full justify-between">
            <div className="">
                <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                    Penerimaan mahasiswa baru
                </Text>
                <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                    Mahasiswa baru setiap fakultas & program studi
                </Text>
            </div>
            <Button className="self-end lg:self-start" variant="primary" filled>Download report</Button>
        </div>
        <Hr className="mb-8"/>
        <div className="overflow-x-auto flex">
            {faculties && faculties.map((faculty, index) => {
                const isPercentGrowthValid = !Number.isNaN(faculty.percent_growth)
                const percent_growth = ((isPercentGrowthValid && faculty.percent_growth) ? Math.abs(faculty.percent_growth) + '%' : '-');
                return <div className="min-w-[100%] lg:w-1/4 lg:min-w-[auto]" key={index}>
                    <Text className="mb-3" tag="p" color="text-gray-90" weight="600" size="sm">
                        {faculty.nama}
                    </Text>
                    <Text className="mb-2" tag="p" size="lg" weight={1000}
                          color="text-black"><b>{Utils.thousandth(faculty.quantity)}</b></Text>
                    <div className="flex flex-row mb-3 items-center gap-2">
                        {isPercentGrowthValid ? (faculty.percent_growth > 0 ? <><TrendUp className="text-success-100"/>
                            <Text tag="p" color="text-success-100" weight="600" size="sm">
                                {percent_growth}
                            </Text></> : (faculty.percent_growth < 0 ? <><TrendDown className="text-danger-100"/>
                            <Text tag="p" color="text-danger-100" weight="600" size="sm">
                                {percent_growth}
                            </Text></> : <><Minus className="text-info-100"/>
                            <Text tag="p" color="text-info-100" weight="600" size="sm">
                                {percent_growth}
                            </Text></>)) : '-'}
                    </div>
                    <Text className="mb-3" tag="p" color="text-gray-50" weight="600" size="xs">
                        {faculty.date_retrieved ?? '-'}
                    </Text>
                </div>
            })}
        </div>
        <div className="flex w-full">
            <ChartBasicRoundedBar datasets={prodiList} labelSeries={labelSeries} height={dynamicChartHeight}
                                  title={'Total mahasiswa baru per prodi'} tooltipFormatter={tooltipFormatter}
                                  showLegend={false} showYAxisLabel={false} showYGridLine={false} marginYAxis={0}
                                  showXAxisLine={false} showYAxisLine={false} containLabel={false}
                                  barWidth={dynamicBarWidth}
                                  indexForLabel={indexForLabel} indexForValue={'value'}/>
        </div>
    </Card>
}