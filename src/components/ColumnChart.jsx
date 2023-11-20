import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = ({height , series , barColors}) => {
  const chartData = {
    series: series,
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["1", "2", "3", "4", "5"],
      },
      yaxis: {
        title: {
          text: "in thousands",
        },
      },
      fill: {
        colors:barColors,
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (val) => `$ ${val} thousands`,
        },
      },
    },
  };

  return (
    <div id="chart" >
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={height}
      />
    </div>
  );
};

export default ApexChart;
