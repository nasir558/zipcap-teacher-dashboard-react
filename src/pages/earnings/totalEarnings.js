import React, { useState } from "react";
import Chart from "react-apexcharts";
import EarningCounts from "../home/counts";
import TotlaRevenue from "../../assets/images/earning-icon-red-bg.png";
import TotalStudents from "../../assets/images/education-icon-orange-bg.png";
import CurentBalance from "../../assets/images/current-balance-icon.png";

function TotalEarnings() {
  const [chartState, setChartState] = useState({
    options: {
      chart: {
        id: "line",
        zoom: {
          enabled: false,
        },
      },
      grid: {
        show: true,
        borderColor: '#F0F0F0',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: true
            }
        },   
        yaxis: {
            lines: {
                show: true
            }
        },    
    },
      markers: {
        size: 5,
        strokeColors: ["#FF5773", "#FF9066"],
        colors: ["#FF5773", "#FF9066"],
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: ["#FF5773", "#FF9066"],
        width: 2,
        dashArray: 0,
      },
      legend: {
        show: false,
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        marker: {
          show: false,
        },
      },
      xaxis: {
        title: {
          text: 'Months',
          style: {
            fontSize: '14px',
            fontFamily: 'inherit',
            fontWeight: '400',
            colors: "#666666"
          },
        },
        categories: [
          "January",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "July",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: 'Number of enrollments',
          style: {
            fontSize: '14px',
            fontFamily: 'inherit',
            fontWeight: '400',
            colors: "#666666"
          },
        },
        min: 0,
        max: 12
      },
    },

    series: [
      {
        name: "Free Courses",
        data: [
          {
            x: "January",
            y: 2,
          },
          {
            x: "Feb",
            y: 3,
          },
          {
            x: "Mar",
            y: 7,
          },
          {
            x: "Apr",
            y: 9,
          },
          {
            x: "May",
            y: 3,
          },

          {
            x: "Apr",
            y: 8,
          },
        ],
      },
      {
        name: "Paid Courses",
        data: [
          {
            x: "January",
            y: 1,
          },
          {
            x: "Feb",
            y: 5,
          },
          {
            x: "Mar",
            y: 7,
          },
          {
            x: "Apr",
            y: 8,
          },
          {
            x: "May",
            y: 10,
          },
          {
            x: "Apr",
            y: 0,
          },
        ],
      },
    ],
    xaxis: {
      type: "category",
    },
  });
  const dataCounts = [
    {
      icon: TotlaRevenue,
      title: "Total revenue",
      number: "$13450",
      textColorClass: "redText"
    },
    {
      icon: TotalStudents,
      title: "Total Students",
      number: "2750",
      textColorClass: "orangeText"
    },
    {
      icon: CurentBalance,
      title: "Current Balance",
      number: "$2650",
      textColorClass: "yellowText"
    },
  ];
  return (
    <div>
      <h3 className="titleDashboard mb-28px text-lg font-semibold">Earnings</h3>
      <div className="mainBoxShadow rounded-lg bg-white mt-8 p-2 lg:p-4 xl:p-8">
        <EarningCounts data={dataCounts} />
        <div className="block w-full mt-5 lineChart">
          <Chart
            options={chartState.options}
            series={chartState.series}
            type="line"
            width="100%"
            height="357"
          />
        </div>
      </div>
    </div>
  );
}

export default TotalEarnings;
