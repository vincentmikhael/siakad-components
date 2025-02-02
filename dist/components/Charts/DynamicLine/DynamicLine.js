'use client';

// Ensure this runs on the client side
import dynamic from 'next/dynamic';
// import ReactECharts from 'echarts-for-react';

var ReactECharts = dynamic(function () {
  return import('echarts-for-react');
}, {
  ssr: false
});
var DynamicLine = function DynamicLine(_ref) {
  var datasets = _ref.datasets,
    labelSeries = _ref.labelSeries,
    _ref$containLabel = _ref.containLabel,
    containLabel = _ref$containLabel === void 0 ? true : _ref$containLabel,
    _ref$showLegend = _ref.showLegend,
    showLegend = _ref$showLegend === void 0 ? true : _ref$showLegend,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 400 : _ref$height,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '100%' : _ref$width;
  var options = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      show: showLegend,
      data: datasets.map(function (dataset) {
        return dataset.name;
      })
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '3%',
      containLabel: containLabel
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: labelSeries // X-axis labels
    },
    yAxis: {
      type: 'value'
    },
    series: datasets.map(function (dataset) {
      return {
        name: dataset.name,
        type: 'line',
        smooth: true,
        // Smooth curves
        symbol: "none",
        data: dataset.data,
        // Data points
        itemStyle: {
          color: dataset.color // Line color
        },
        lineStyle: {
          width: 2,
          // Line thickness
          color: dataset.color
        }
        // markLine: {
        //     symbol: ["none", "none"],
        //     label: {show: !1},
        //     data: [{xAxis: 1}, {xAxis: 3}, {xAxis: 5}, {xAxis: 7}]
        // },
      };
    })
  };
  return /*#__PURE__*/React.createElement(ReactECharts, {
    option: options,
    style: {
      height: height,
      width: width
    } // Set chart dimensions
  });
};
export default DynamicLine;