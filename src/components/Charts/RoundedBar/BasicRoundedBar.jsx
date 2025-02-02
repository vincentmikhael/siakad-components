'use client'
import dynamic from 'next/dynamic';
// import ReactECharts from "echarts-for-react";

const ReactECharts = dynamic(()=> import('echarts-for-react'),{
    ssr: false,
})

const BasicRoundedBar = ({
                             title = 'Total',
                             datasets, labelSeries, containLabel = true,
                             indexForValue = 'value', indexForLabel = 'name',
                             showYAxisLabel = true,
                             showXAxisLine = true, showYAxisLine = true,
                             showXGridLines = false, showYGridLines = false,
                             // showLegend = true,
                             tooltipFormatter,
                             marginYAxis = 15,
                             barWidth = 50,
                             height = 400, width = '100%',
                         }) => {

    const data = datasets.map((dataset/*, index*/) => (dataset[indexForValue]))
    const options = {
        tooltip: {
            trigger: 'axis',
            formatter: tooltipFormatter ?? function (t) {
                console.log("no tooltip implemented: ", t, datasets, indexForValue, indexForLabel)
            }
        },
        // legend: {
        //     show: showLegend,
        //     data: datasets.map((dataset) => dataset[indexForLabel]), // Extract legend labels
        // },
        grid: {
            left: '0',
            right: '0',
            bottom: '25px',
            top: '3%',
            containLabel,
        },
        xAxis: {
            type: 'category',
            data: labelSeries, // X-axis labels
            boundaryGap: true,
            splitLine: {show: showXGridLines},
            axisTick: {show: false},
            axisLine: {show: showXAxisLine},
        },
        yAxis: {
            type: 'value',
            show: showYAxisLabel,
            axisLabel: {margin: marginYAxis},
            splitLine: {show: showYGridLines},
            axisTick: {show: false},
            axisLine: {show: showYAxisLine},
        },
        series: [{
            name: title, // Use name for the series
            type: 'bar',
            data,//[dataset[indexForValue]], // Use value for data
            itemStyle: {
                color: '#068CCDFF', // Set bar color
                borderRadius: [8, 8, 8, 8], // Rounded all corners
            },
            barWidth,
        }],
    };

    return (
        <ReactECharts
            option={options}
            style={{height, width}} // Set chart dimensions
        />
    );
};

export default BasicRoundedBar;