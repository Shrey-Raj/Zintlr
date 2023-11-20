import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const chartData = {
    series: [{
      data: [25, 60, 44]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 200
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
          width: '10%', 
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Most Active', 'Moderately Active', 'Least Active'],
        title: {
          text: 'Number of Consumers (in thousands)'
        }
      },
      yaxis: {
        // title: {
        //   text: 'Activity Level'
        // }
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return val + '%'; // Format tooltip value
          }
        },
        title: {
          formatter: function () {
            return 'Activity Level'; // Set tooltip title
          }
        }
      }
    },
  };

  return (
    <div id="chart" className="mt-3">
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={300} />
    </div>
  );
};

export default ApexChart;
