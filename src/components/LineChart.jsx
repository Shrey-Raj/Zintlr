import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const chartData = {
    series: [
      {
        name: "Desktops",
        data: [1, 2, 0,1,0]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        width: 2,  // Adjust the line thickness
        colors: ['#00AB84'] 
      },
      title: {
        // text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri'],
      }
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={100} />
    </div>
  );
};

export default ApexChart;
