'use client'; // Ensure the component runs on the client side
import dynamic from 'next/dynamic';
// import ReactECharts from 'echarts-for-react';

const ReactECharts = dynamic(()=> import('echarts-for-react'),{
    ssr: false,
})

const RoundedDoughnut = ({data, colors, title = 'Rounded Doughnut Chart', height = 300, width = '100%'}) => {
    const options = {
        title: {
            text: title,
            left: 'center',
            top: 'center',
            textStyle: {
                fontSize: 16,
                fontWeight: 'bold',
            },
        },
        tooltip: {
            trigger: 'item',
        },
        series: [
            {
                type: 'pie',
                radius: ["40%", "70%"],//['60%', '80%'], // Inner and outer radius
                // center: window.innerWidth < 530 ? ["65%", "55%"] : ["50%", "55%"],
                avoidLabelOverlap: false,
                label: {
                    show: false, // Hide labels
                },
                labelLine: {
                    show: false, // Hide label lines
                },
                data: data.map((value, index) => ({
                    value,
                    itemStyle: {
                        borderRadius: 8,//10, // Rounded corners
                        borderColor: '#fff',
                        borderWidth: 2,
                        color: colors[index], // Custom colors
                    },
                })),
            },
        ],
        grid: {
            left: '0',
            right: '0',
            bottom: '0',
            top: '0',
            containLabel: false,
        },
    };

    return (
        <ReactECharts
            option={options}
            style={{height, width}} // Set chart dimensions
        />
    );
};

export default RoundedDoughnut;