'use client'; // Ensure the component runs on the client side
import dynamic from 'next/dynamic';

const ReactECharts = dynamic(() => import('echarts-for-react'), {
    ssr: false,
})

const RoundedDoughnut = ({data, title = 'Rounded Doughnut Chart', height = 300, width = '100%'}) => {
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
                padAngle: 4,
                color: [
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
                ],
                itemStyle: {
                    borderRadius: 6
                },
                label: {
                    show: false, // Hide labels
                },
                labelLine: {
                    show: false, // Hide label lines
                },
                data: data.map((item) => ({
                    value: item.value,
                    name: item.name,
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