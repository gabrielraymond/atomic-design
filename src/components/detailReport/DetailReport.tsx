import React, { useState } from "react";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
import moment from "moment";

const DetailReport = ({ isShow }: { isShow: boolean }) => {
  const series = [
    {
      data: [
        {
          x: "Analysis",
          y: [
            new Date("2024-03-07 10:13:56").getTime(),
            new Date("2024-03-14 10:26:11").getTime(),
          ],
          fillColor: "#008FFB",
        },
        {
          x: "Analysis2",
          y: [
            new Date("2024-03-17 13:26:11").getTime(),
            new Date("2024-03-20 10:26:11").getTime(),
          ],
          fillColor: "#775DD0",
        },
        
        {
          x: "Design",
          y: [
            new Date("2024-03-14 10:26:11").getTime(),
            new Date("2024-03-17 13:26:11").getTime(),
          ],
          fillColor: "#00E396",
        },
        
        {
          x: "Testing",
          y: [
            new Date("2024-03-20 13:26:11").getTime(),
            new Date("2024-03-27 10:26:11").getTime(),
          ],
          fillColor: "#FEB019",
        },
        {
          x: "Deployment",
          y: [
            new Date("2024-03-27 13:26:11").getTime(),
            new Date("2024-03-29 10:26:11").getTime(),
          ],
          fillColor: "#FF4560",
        },
        // {
        //   x: "Design",
        //   y: [
        //     new Date("2019-03-04").getTime(),
        //     new Date("2019-03-08").getTime(),
        //   ],
        //   fillColor: "#00E396",
        // },
        // {
        //   x: "Coding",
        //   y: [
        //     new Date("2019-03-07").getTime(),
        //     new Date("2019-03-10").getTime(),
        //   ],
        //   fillColor: "#775DD0",
        // },
        // {
        //   x: "Testing",
        //   y: [
        //     new Date("2019-03-08").getTime(),
        //     new Date("2019-03-12").getTime(),
        //   ],
        //   fillColor: "#FEB019",
        // },
        // {
        //   x: "Deployment",
        //   y: [
        //     new Date("2019-03-12").getTime(),
        //     new Date("2019-03-17").getTime(),
        //   ],
        //   fillColor: "#FF4560",
        // },
        // {
        //   x: "Lol",
        //   y: [
        //     new Date("2019-03-17").getTime(),
        //     new Date("2019-03-19").getTime(),
        //   ],
        //   fillColor: "#FF4560",
        // },
      ],
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 350,
      type: "rangeBar",
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        dataLabels: {
          hideOverflowingLabels: false,
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any, opts: any) {
        var label: any = opts.w.globals.labels[opts.dataPointIndex];
        var a = moment(val[0]);
        var b = moment(val[1]);
        var diff = b.diff(a, "days");
        return label + ": " + diff + (diff > 1 ? " days" : " day");
      },
      style: {
        colors: ["#f3f4f5", "#fff"],
      },
    },
    xaxis: {
      type: "datetime",
      position: "top",
      labels: {
        datetimeUTC: false, // Ensure your data is in local time
        formatter: function (val) {
          // Custom formatter to display time as per your requirement
          return `${moment(val).format("DD/MM/YYYY")}  ${new Date(
            val
          ).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}`;
        },
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      row: {
        colors: ["#f3f4f5", "#fff"],
        opacity: 1,
      },
    },
  };

  // const options: ApexCharts.ApexOptions = {
  //   chart: {
  //     toolbar: { show: true },
  //     height: "50%",
  //     type: "rangeBar",
  //     width: "50%",
  //     zoom: {
  //       enabled: true,
  //     },
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: true,
  //       distributed: true,
  //       dataLabels: {
  //         hideOverflowingLabels: true,
  //       },
  //     },
  //   },

  //   dataLabels: {
  //     enabled: true,
  //     // formatter: function (val: any, opts: any) {
  //     //   var label = opts.w.globals.labels[opts.dataPointIndex];
  //     //   var a = moment(val[0]);
  //     //   var b = moment(val[1]);
  //     //   var d = b.diff(a, "days");
  //     //   var diff = b.diff(a, "hours");
  //     //   var m = b.diff(a, "minutes");
  //     //   return `<></> +label + ":" + d + "d" + diff + "Hours"`;
  //     // },
  //     textAnchor: "end",
  //     formatter: function (val: any, opts: any) {
  //       // Calculate the duration in days, hours, minutes, and seconds
  //       var a: any = moment(val[0]);
  //       var b: any = moment(val[1]);
  //       var label = opts.w.globals.labels[opts.dataPointIndex];
  //       const duration = b - a; // Assuming val is in milliseconds
  //       const days = Math.floor(duration / (1000 * 60 * 60 * 24));
  //       const hours = Math.floor(
  //         (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //       );
  //       const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

  //       // Construct the label string
  //       // return `${label} ,${days} days ${
  //       //   hours !== 0 ? hours.toString().padStart(2) + "h" : ""
  //       // } ${minutes !== 0 ? minutes.toString().padStart(2) + "m" : ""} `;
  //       // return <div className="custom-data-label">${val}lol</div>
  //     },
  //     style: {
  //       colors: ["#f3f4f5", "#fff"],
  //     },
  //   },
  //   xaxis: {
  //     type: "datetime",
  //     position: "top",
  //     labels: {
  //       datetimeUTC: false, // Ensure your data is in local time
  //       formatter: function (val) {
  //         // Custom formatter to display time as per your requirement
  //         return new Date(val).toLocaleTimeString([], {
  //           hour: "2-digit",
  //           minute: "2-digit",
  //         });
  //       },
  //     },
  //   },
  //   yaxis: {
  //     show: false,
  //   },

  //   grid: {
  //     row: {
  //       colors: ["#fff"],
  //       opacity: 1,
  //     },
  //     xaxis: {
  //       lines: {
  //         show: true,
  //       },
  //     },
  //     yaxis: {
  //       lines: {
  //         show: false,
  //       },
  //     },
  //   },
  // };

  return (
    <div
      className={`bg-white h-[100vh] w-3/4 absolute right-0 top-0 transition-all py-6 px-4  ${
        isShow ? "translate-x-0" : "translate-x-full"
      } `}
    >
      <h1 className=" font-bold text-xl mb-2">SLA Detail</h1>

      <div className="flex gap-8 mb-4">
        <div>
          <h2 className="font-bold text-sm mb-1">Nama Vendor/Debitur</h2>
          <h3 className="font-semibold text-base mb-1">Asoka Jaya</h3>
          <p className=" text-gray-500 text-base mb-1">
            981/2AB/21039 - Extend
          </p>
        </div>
        <div>
          <h2 className="font-bold text-sm mb-1">Category</h2>
          <h3 className="font-semibold text-base mb-1">Sewa Ruko</h3>
        </div>
        <div>
          <h2 className="font-bold text-sm mb-1">Requester</h2>
          <h3 className="font-semibold text-base mb-1">Ben Sherman</h3>
          <p className=" text-gray-500 text-base mb-1">
            Digital Transformation - Lhoksuemawe
          </p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-600"></div>

      <div className="w-full h-4/6 bg-slate-100 my-1">
        <div className="w-full">
          <div id="chart">
            <ReactApexChart
              options={options}
              series={series}
              type="rangeBar"
              height={500}
            />
          </div>
          <div id="html-dist"></div>
        </div>
      </div>

      <div className=" bg-gray-100 rounded-lg p-4">
        <div className="grid grid-rows-3 grid-flow-col gap-x-6">
          <div className="py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-white p-1">
                <div className="w-full h-full  rounded-full bg-blue-700"></div>
              </div>
              <p>
                Johnathan <span className="">(Requester)</span>
              </p>
            </div>
            <div>2h 21m</div>
          </div>
          <div className="py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-white p-1">
                <div className="w-full h-full  rounded-full bg-blue-700"></div>
              </div>
              <p>
                Johnathan <span className="">(Requester)</span>
              </p>
            </div>
            <div>2h 21m</div>
          </div>
          <div className="py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-white p-1">
                <div className="w-full h-full  rounded-full bg-blue-700"></div>
              </div>
              <p>
                Johnathan <span className="">(Requester)</span>
              </p>
            </div>
            <div>2h 21m</div>
          </div>
          <div className="py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-white p-1">
                <div className="w-full h-full  rounded-full bg-blue-700"></div>
              </div>
              <p>
                Johnathan <span className="">(Requester)</span>
              </p>
            </div>
            <div>2h 21m</div>
          </div>
          <div className="py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-white p-1">
                <div className="w-full h-full  rounded-full bg-blue-700"></div>
              </div>
              <p>
                Johnathan <span className="">(Requester)</span>
              </p>
            </div>
            <div>2h 21m</div>
          </div>
          <div className="py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-white p-1">
                <div className="w-full h-full  rounded-full bg-blue-700"></div>
              </div>
              <p>
                Johnathan <span className="">(Requester)</span>
              </p>
            </div>
            <div>2h 21m</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailReport;
