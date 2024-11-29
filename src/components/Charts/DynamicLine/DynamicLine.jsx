'use client'; // Ensure this runs on the client side
import dynamic from 'next/dynamic';
// import ReactECharts from 'echarts-for-react';

const ReactECharts = dynamic(()=> import('echarts-for-react'),{
    ssr: false,
})

const DynamicLine = ({
                         datasets, labelSeries, containLabel = true,
                         showLegend = true, height = 400, width = '100%',
                     }) => {
    const options = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            show: showLegend,
            data: datasets.map((dataset) => dataset.name),
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '3%',
            containLabel,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: labelSeries, // X-axis labels
        },
        yAxis: {
            type: 'value',
        },
        series: datasets.map((dataset) => ({
            name: dataset.name,
            type: 'line',
            smooth: true, // Smooth curves
            symbol: "none",
            data: dataset.data, // Data points
            itemStyle: {
                color: dataset.color, // Line color
            },
            lineStyle: {
                width: 2, // Line thickness
                color: dataset.color,
            },
            // markLine: {
            //     symbol: ["none", "none"],
            //     label: {show: !1},
            //     data: [{xAxis: 1}, {xAxis: 3}, {xAxis: 5}, {xAxis: 7}]
            // },
        })),
    };

    return (
        <ReactECharts
            option={options}
            style={{height, width}} // Set chart dimensions
        />
    );
};

export default DynamicLine;