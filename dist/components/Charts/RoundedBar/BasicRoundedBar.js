'use client';

import dynamic from 'next/dynamic';
// import ReactECharts from "echarts-for-react";

var ReactECharts = dynamic(function () {
  return import('echarts-for-react');
}, {
  ssr: false
});
var BasicRoundedBar = function BasicRoundedBar(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'Total' : _ref$title,
    datasets = _ref.datasets,
    labelSeries = _ref.labelSeries,
    _ref$containLabel = _ref.containLabel,
    containLabel = _ref$containLabel === void 0 ? true : _ref$containLabel,
    _ref$indexForValue = _ref.indexForValue,
    indexForValue = _ref$indexForValue === void 0 ? 'value' : _ref$indexForValue,
    _ref$indexForLabel = _ref.indexForLabel,
    indexForLabel = _ref$indexForLabel === void 0 ? 'name' : _ref$indexForLabel,
    _ref$showYAxisLabel = _ref.showYAxisLabel,
    showYAxisLabel = _ref$showYAxisLabel === void 0 ? true : _ref$showYAxisLabel,
    _ref$showXAxisLine = _ref.showXAxisLine,
    showXAxisLine = _ref$showXAxisLine === void 0 ? true : _ref$showXAxisLine,
    _ref$showYAxisLine = _ref.showYAxisLine,
    showYAxisLine = _ref$showYAxisLine === void 0 ? true : _ref$showYAxisLine,
    _ref$showXGridLines = _ref.showXGridLines,
    showXGridLines = _ref$showXGridLines === void 0 ? false : _ref$showXGridLines,
    _ref$showYGridLines = _ref.showYGridLines,
    showYGridLines = _ref$showYGridLines === void 0 ? false : _ref$showYGridLines,
    tooltipFormatter = _ref.tooltipFormatter,
    _ref$marginYAxis = _ref.marginYAxis,
    marginYAxis = _ref$marginYAxis === void 0 ? 15 : _ref$marginYAxis,
    _ref$barWidth = _ref.barWidth,
    barWidth = _ref$barWidth === void 0 ? 50 : _ref$barWidth,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 400 : _ref$height,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '100%' : _ref$width;
  var data = datasets.map(function (dataset /*, index*/) {
    return dataset[indexForValue];
  });
  var options = {
    tooltip: {
      trigger: 'axis',
      formatter: tooltipFormatter !== null && tooltipFormatter !== void 0 ? tooltipFormatter : function (t) {
        console.log("no tooltip implemented: ", t, datasets, indexForValue, indexForLabel);
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
      containLabel: containLabel
    },
    xAxis: {
      type: 'category',
      data: labelSeries,
      // X-axis labels
      boundaryGap: true,
      splitLine: {
        show: showXGridLines
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: showXAxisLine
      }
    },
    yAxis: {
      type: 'value',
      show: showYAxisLabel,
      axisLabel: {
        margin: marginYAxis
      },
      splitLine: {
        show: showYGridLines
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: showYAxisLine
      }
    },
    series: [{
      name: title,
      // Use name for the series
      type: 'bar',
      data: data,
      //[dataset[indexForValue]], // Use value for data
      itemStyle: {
        color: '#068CCDFF',
        // Set bar color
        borderRadius: [8, 8, 8, 8] // Rounded all corners
      },
      barWidth: barWidth
    }]
  };
  return /*#__PURE__*/React.createElement(ReactECharts, {
    option: options,
    style: {
      height: height,
      width: width
    } // Set chart dimensions
  });
};
export default BasicRoundedBar;