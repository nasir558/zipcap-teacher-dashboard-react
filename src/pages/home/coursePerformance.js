import React, { useState } from "react";
import Chart from "react-apexcharts";

const CoursePerformance = () => {
  const [chartState, setChartState] = useState({
    options: {
      chart: {
        id: "line",
        zoom: {
          enabled: false
        }
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
        colors: ["#FF5773", "#FF9066"]
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: ["#FF5773", "#FF9066"],
        width: 2,
        dashArray: 0,
      },
      legend: {
        show: false
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
      }
    ],
    xaxis: {
      type: "category",
    },
  });
  return (
    <div className="CoursePerformance mt-8">
      <h3 className="titleDashboard mb-28px text-lg font-semibold">
        Course Performance
      </h3>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="flex-initial">
          <div className="flex flex-row items-center space-x-4">
            <span className="w-93px h-18px red2Bg"></span>
            <p className="text-base leading-6 greyText">Free courses</p>
          </div>
        </div>
        <div className="flex-initial">
          <div className="flex flex-row items-center space-x-4">
            <span className="w-93px h-18px orange2Bg"></span>
            <p className="text-base leading-6 greyText">Paid courses</p>
          </div>
        </div>
      </div>
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
  );
};

export default CoursePerformance;
