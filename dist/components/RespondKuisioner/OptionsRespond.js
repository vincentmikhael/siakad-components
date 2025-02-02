'use client';

import dynamic from 'next/dynamic';
import { ChartData } from "./..";
var ChartRoundedDoughnut = dynamic(function () {
  return import("../Charts/RoundedDoughnut").then(function (m) {
    return m.RoundedDoughnut;
  });
}, {
  ssr: false // Disable server-side rendering for this component
});
var color = ['#068CCD',
//primary 100
'#FF4144',
//danger 90
'#FF8D41',
//warning 90
'#42BC54',
//success 90
'#5180FF',
//info 70
'#1E97D2',
//primary 90
'#FF5457',
//danger 80
'#F89D58',
//warning 80
'#4BC264',
//success 80
'#3C70FF',
//info 80
'#017CB7',
//primary 110
'#CC3436',
//danger 100
'#CC7135',
//warning 100
'#349644',
//success 100
'#2256E6' //info 100
];
export default function CardDataMahasiswa(_ref) {
  var className = _ref.className,
    data = _ref.data;
  var totalValue = data.reduce(function (acc, item) {
    return acc + item.value;
  }, 0);
  var formattedData = data.map(function (item, index) {
    return {
      percentage: (item.value / totalValue * 100).toFixed(2),
      color: color[index % color.length],
      label: item.label
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-12 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[200px] h-[200px]"
  }, /*#__PURE__*/React.createElement(ChartRoundedDoughnut, {
    data: data,
    title: '',
    height: 200,
    width: 200
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row gap-12 flex-wrap"
  }, data && /*#__PURE__*/React.createElement(ChartData, {
    data: formattedData
  })));
}