export const graphOptions = {
  colors: ["var(--accent-green)", "#E91E63", "#9C27B0"],
  chart: {
    type: "line",
    zoom: {
      enabled: true,
    },
    foreColor: "var(--secondary-100)",
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    curve: "straight",
    width: 2,
  },

  grid: {
    row: {
      colors: ["transparent"], // takes an array which will be repeated on columns
      //   opacity: 0.5,
    },
    borderColor: "var(--primary-400)",
  },
//   fill: {
//     gradient: {
//       enabled: true,
//       opacityFrom: 0.25,
//       opacityTo: 0,
//     },
//   },
  //
  xaxis: {
    type: "category",
    // tickAmount: 10,
    // labels: {
    //     rotate: 0,
    //     rotateAlways : false
    // }
  },
};
