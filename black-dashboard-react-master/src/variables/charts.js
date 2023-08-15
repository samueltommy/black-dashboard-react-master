/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.


*/


// ##############################
// // // Chart variables
// #############################

// chartExample1 and chartExample2 options
let chart1_2_options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
  },
  responsive: true,
  scales: {
    yAxes: {
      barPercentage: 1.6,
      stacked: false,
      gridLines: {
        drawBorder: false,
        color: "rgba(29,140,248,0.0)",
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: "#9a9a9a",
      },
    },
    xAxes: {
      barPercentage: 1.6,
      stacked: true,
      gridLines: {
        drawBorder: false,
        color: "rgba(29,140,248,0.1)",
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#9a9a9a",
      },
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let chartExample1 = {
  data1: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: [
        "NAD",
        "Sumut",
        "Sumsel",
        "Sumbar",
        "Bengkulu",
        "Riau",
        "Kep. Riau",
        "Jambi",
        "Lampung",
        "Babel",
        "Kalbar",
        "Kaltim",
        "Kalsel",
        "Kalteng",
        "Kaltara",
        "Banten",
        "DKI Jakarta",
        "Jabar",
        "Jateng",
        "DIY",
        "Jatim",
        "Bali",
        "NTB",
        "NTT",
        "Gorontalo",
        "Sulbar",
        "Sulteng",
        "Sulut",
        "Sulteng",
        "Sulsel",
        "Maluku Utara",
        "Maluku",
        "Papua Barat",
        "Papua",
        "Papua Tengah",
        "Papua Pegunungan",
        "Papua Selatan",
        "Papua Barat Daya",
      ],
      datasets: [
        {
          label: "Normal",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100, 55,35,41,100,77,53,90,54,23,75,34,64,100,55,95,70,30,50,10,100,60,50,40,20,70,115,],
        },
        {
          label: "Tidak Normal",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#f8d458",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#f8d458",
          pointBorderColor: "rgba(0,255,255,0)",
          pointHoverBackgroundColor: "#f8d458",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [50, 100, 80, 130, 35, 10, 105, 60, 95, 60, 130, 10, 75,95,21,140,70,53,98,53,45,75,64,44,10,69,5,70,40,55,15,90,63,70,40,20,70,70,],
        },
      ],
    };
  },
  options: chart1_2_options,
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let chartExample2 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 120, 80],
        },
      ],
    };
  },
  options: chart1_2_options,
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let chartExample3 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

    return {
      labels: ["Laki-Laki", "Perempuan"],
      datasets: [
        {
          label: "Jenis Kelamin",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: "#d048b6",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [60, 40],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: {
        gridLines: {
          drawBorder: false,
          color: "rgba(225,78,202,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 120,
          padding: 20,
          fontColor: "#9e9e9e",
        },
      },
      xAxes: {
        gridLines: {
          drawBorder: false,
          color: "rgba(225,78,202,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e",
        },
      },
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample4 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors

    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [90, 27, 60, 12, 80],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },

    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e",
        },
      },
      xAxes: {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(0,242,195,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e",
        },
      },
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const tbCo0 = {
  data: (canvas) => {

    return {
      labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21,22,23,24],
      datasets: [
        {
          label: "Body Height",
          fill: false,
          backgroundColor: "rgba(0, 0, 0, 1)",
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderColor: "rgba(255, 255, 255, 0)",
          pointHoverBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
        },
        {
          label: "Median",
          fill: "false",
          backgroundColor: "rgba(0, 0, 0, 1)",
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [49.9,54.7,58.4,61.4,63.9,65.9,67.6,69.2,70.6,72,73.3,74.5,75.7,76.9,78,79.1,80.2,81.2,82.3,83.2,84.2,85.1,86,86.9,87.8],
        },
        {
          label: "KMS -1",
          fill: "false",
          backgroundColor: "rgba(0, 255, 0, 1)",
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [48,52.8,56.4,59.4,61.8,63.8,65.5,67,68.4,69.7,71,72.2,73.4,74.5,75.6,76.6,77.6,78.6,79.6,80.5,81.4,82.3,83.1,83.9,84.8],
        },
        {
          label: "KMS +1",
          fill: "-1",
          backgroundColor: "rgba(0, 255, 0, 1)", 
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [51.8,56.7,60.4,63.5,66,68,69.8,71.3,72.8,74.2,75.6,76.9,78.1,79.3,80.5,81.7,82.8,83.9,85,86,87,88,89,89.9,90.9],
        },
        {
          label: "KMS -2",
          fill: "false",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [46.1,50.8,54.4,57.3,59.7,61.7,63.3,64.8,66.2,67.5,68.7,69.9,71,72.1,73.1,74.1,75,76,76.9,77.7,78.6,79.4,80.2,81,81.7],
        },
        {
          label: "KMS +2",
          fill: "-1",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [53,58.6,62.4,65.5,68,70.1,71.9,73.5,75,76.5,77.9,79.2,80.5,81.8,83,84.2,85.4,86.5,87.7,88.8,89.8,90.9,91.9,92.9,93.9],
        },
        {
          label: "KMS -3",
          fill: "false",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [44.2,48.9,52.4,55.3,57.6,59.6,61.2,62.7,64,65.2,66.4,67.6,68.6,69.6,70.6,71.6,72.5,73.3,74.2,75,75.8,76.5,77.2,78,78.7],
        },
        {
          label: "KMS +3",
          fill: "-1",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [55.6,60.6,64.4,67.6,70.1,72.2,74,75.7,77.2,78.7,80.1,81.5,82.9,84.2,85.5,86.7,88,89.2,90.4,91.5,92.6,93.8,94.9,95.9,97],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#000000",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [{
        stacked: true,
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(0,242,195,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################

const bbCo0 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    return {
      labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21,22,23,24],
      datasets: [
        {
          label: "Median",
          fill: "false",
          backgroundColor: "rgba(0, 0, 0, 1)",
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [3.3,4.5,5.6,6.4,7,7.5,7.9,8.3,8.6,8.9,9.2,9.4,9.6,9.9,10.1,10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.8,12,12.2],
        },
        {
          label: "KMS -1",
          fill: "false",
          backgroundColor: "rgba(0, 255, 0, 1)",
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [2.9,3.9,4.9,5.7,6.2,6.7,7.1,7.4,7.7,8,8.2,8.4,8.6,8.8,9,9.2,9.4,9.6,9.8,10,10.1,10.3,10.5,10.7,10.8],
        },
        {
          label: "KMS +1",
          fill: "-1",
          backgroundColor: "rgba(0, 255, 0, 1)", 
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [3.9,5.1,6.3,7.2,7.8,8.4,8.8,9.2,9.6,9.9,10.2,10.5,10.8,11,11.3,11.5,11.7,12,12.2,12.5,12.7,12.9,13.2,13.4,13.6],
        },
        {
          label: "KMS -2",
          fill: "false",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [2.5,3.4,4.3,5,5.6,6,6.4,6.7,6.9,7.1,7.4,7.6,7.7,7.9,8.1,8.3,8.4,8.6,8.8,8.9,9.1,9.2,9.4,9.5,9.7],
        },
        {
          label: "KMS +2",
          fill: "-1",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [4.4,5.8,7.1,8,8.7,9.3,9.8,10.3,10.7,11,11.4,11.7,12,12.3,12.6,12.8,13.1,13.4,13.7,13.9,14.2,14.5,14.7,15,15.3],
        },
        {
          label: "KMS -3",
          fill: "false",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [2.1,2.9,3.8,4.4,4.9,5.3,5.7,5.9,6.2,6.4,6.6,6.8,6.9,7.1,7.2,7.4,7.5,7.7,7.8,8,8.1,8.2,8.4,8.5,8.6],
        },
        {
          label: "KMS +3",
          fill: "-1",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [5,6.6,8,9,9.7,10.4,10.9,11.4,11.9,12.3,12.7,13,13.3,13.7,14,14.3,14.6,14.9,15.3,15.6,15.9,16.2,16.5,16.8,17.1],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#000000",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [{
        stacked: true,
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(0,242,195,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################

const tbCo24 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    return {
      labels: [24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
      datasets: [
        {
          label: "Median",
          fill: "false",
          backgroundColor: "rgba(0, 0, 0, 1)",
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [87.1,88,88.8,89.6,90.4,91.2,91.9,92.7,93.4,94.1,94.8,95.4,96.1,96.7,97.4,98,98.6,99.2,99.9,100.4,101,101.6,102.2,102.8,103.3,103.9,104.4,105,105.6,106.1,106.7,107.2,107.8,108.3,108.9,109.4,110],
        },
        {
          label: "KMS -1",
          fill: "false",
          backgroundColor: "rgba(0, 255, 0, 1)",
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [84.1,84.9,85.6,86.4,87.1,87.8,88.5,89.2,89.9,90.5,91.1,91.8,92.4,93,93.6,94.2,94.7,95.3,95.9,96.4,97,97.5,98.1,98.6,99.1,99.7,100.2,100.7,101.2,101.7,102.3,102.8,103.3,103.8,104.3,104.8,105.3],
        },
        {
          label: "KMS +1",
          fill: "-1",
          backgroundColor: "rgba(0, 255, 0, 1)", 
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [90.2,91.1,92,92.9,93.7,94.5,95.3,96.1,96.9,97.6,98.4,99.1,99.8,100.5,101.2,101.8,102.5,103.2,103.8,104.5,105.1,105.7,106.3,106.9,107.5,108.1,108.7,109.3,109.9,110.5,111.1,111.7,112.3,112.8,113.4,114,114.6],
        },
        {
          label: "KMS -2",
          fill: "false",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [81,81.7,82.5,83.1,83.8,84.5,85.1,85.7,86.4,86.9,87.5,88.1,88.7,89.2,89.8,90.3,90.9,91.4,91.9,92.4,93,93.5,94,94.4,94.9,95.4,95.9,96.4,96.9,97.4,97.8,98.3,98.8,99.3,99.7,100.2,100.7],
        },
        {
          label: "KMS +2",
          fill: "-1",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [93.2,94.2,95.2,96.1,97,97.9,98.7,99.6,100.4,101.2,102,102.7,103.5,104.2,105,105.7,106.4,107.1,107.8,108.5,109.1,109.8,110.4,111.1,111.7,112.4,113,113.6,114.2,114.9,115.5,116.1,116.7,117.4,118,118.6,119.2],
        },
        {
          label: "KMS -3",
          fill: "false",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [78,78.6,79.3,79.9,80.5,81.1,81.7,82.3,82.8,83.4,83.9,84.4,85,85.5,86,86.5,87,87.5,88,88.4,88.9,89.4,89.8,90.3,90.7,91.2,91.6,92.1,92.5,93,93.4,93.9,94.3,94.7,95.2,95.6,96.1],
        },
        {
          label: "KMS +3",
          fill: "-1",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [96.3,97.3,98.3,99.3,100.3,101.2,102.1,103,103.9,104.8,105.6,106.4,107.2,108,108.8,109.5,110.3,111,111.7,112.5,113.2,113.9,114.6,115.2,115.9,116.6,117.3,117.9,118.6,119.2,119.9,120.6,121.2,121.9,122.6,123.2,123.9],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#000000",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [{
        stacked: true,
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(0,242,195,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################

const bbCo24 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    return {
      labels: [24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
      datasets: [
        {
          label: "Median",
          fill: "false",
          backgroundColor: "rgba(0, 0, 0, 1)",
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [12.2,12.4,12.5,12.7,12.9,13.1,13.3,13.5,13.7,13.8,14,14.2,14.3,14.5,14.7,14.8,15,15.2,15.3,15.5,15.7,15.8,16,16.2,16.3,16.5,16.7,16.8,17,17.2,17.3,17.5,17.7,17.8,18,18.2,18.3],
        },
        {
          label: "KMS -1",
          fill: "false",
          backgroundColor: "rgba(0, 255, 0, 1)",
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [10.8,11,11.2,11.3,11.5,11.7,11.8,12,12.1,12.3,12.4,12.6,12.7,12.9,13,13.1,13.3,13.4,13.6,13.7,13.8,14,14.1,14.3,14.4,14.5,14.7,14.8,15,15.1,15.2,15.4,15.5,15.6,15.8,15.9,16],
        },
        {
          label: "KMS +1",
          fill: "-1",
          backgroundColor: "rgba(0, 255, 0, 1)", 
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [13.6,13.9,14.1,14.3,14.5,14.8,15,15.2,15.4,15.6,15.8,16,16.2,16.4,16.6,16.8,17,17.2,17.4,17.6,17.8,18,18.2,18.4,18.6,18.8,19,19.2,19.4,19.6,19.8,20,20.2,20.4,20.6,20.8,21],
        },
        {
          label: "KMS -2",
          fill: "false",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [9.7,9.8,10,10.1,10.2,10.4,10.5,10.7,10.8,10.9,11,11.2,11.3,11.4,11.5,11.6,11.8,11.9,12,12.1,12.2,12.4,12.5,12.6,12.7,12.8,12.9,13.1,13.2,13.3,13.4,13.5,13.6,13.7,13.8,14,14.1],
        },
        {
          label: "KMS +2",
          fill: "-1",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [15.3,15.5,15.8,16.1,16.3,16.6,16.9,17.1,17.4,17.6,17.8,18.1,18.3,18.6,18.8,19,19.3,19.5,19.7,20,20.2,20.5,20.7,20.9,21.2,21.4,21.7,21.9,22.2,22.4,22.7,22.9,23.2,23.4,23.7,23.9,24.2],
        },
        {
          label: "KMS -3",
          fill: "false",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [8.6,8.8,8.9,9,9.1,9.2,9.4,9.5,9.6,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.8,10.9,11,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.8,11.9,12,12.1,12.2,12.3,12.4],
        },
        {
          label: "KMS +3",
          fill: "-1",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [17.1,17.5,17.8,18.1,18.4,18.7,19,19.3,19.6,19.9,20.2,20.4,20.7,21,21.3,21.6,21.9,22.1,22.4,22.7,23,23.3,23.6,23.9,24.2,24.5,24.8,25.1,25.4,25.7,26,26.3,26.6,26.9,27.2,27.6,27.9],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#000000",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [{
        stacked: true,
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(0,242,195,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
    },
  },
};

const bbtbCo0 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    return {
      labels: [45,45.5,46,46.5,47,47.5,48,48.5,49,49.5,50,50.5,51,51.5,52,52.5,53,53.5,54,54.5,55,55.5,56,56.5,57,57.5,58,58.5,59,59.5,60,60.5,61,61.5,62,62.5,63,63.5,64,64.5,65,65.5,66,66.5,67,67.5,68,68.5,69,69.5,70,70.5,71,71.5,72,72.5,73,73.5,74,74.5,75,75.5,76,76.5,77,77.5,78,78.5,79,79.5,80,80.5,81,81.5,82,82.5,83,83.5,84,84.5,85,85.5,86,86.5,87,87.5,88,88.5,89,89.5,90,90.5,91,91.5,92,92.5,93,93.5,94,94.5,95,95.5,96,96.5,97,97.5,98,98.5,99,99.5,100,100.5,101,101.5,102,102.5,103,103.5,104],
      datasets: [
        {
          label: "Median",
          fill: "false",
          backgroundColor: "rgba(0, 0, 0, 1)",
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [2.4,2.5,2.6,2.7,2.8,2.9,2.9,3,3.1,3.2,3.3,3.4,3.5,3.6,3.8,3.9,4,4.1,4.3,4.4,4.5,4.7,4.8,5,5.1,5.3,5.4,5.6,5.7,5.9,6,6.1,6.3,6.4,6.5,6.7,6.8,6.9,7,7.1,7.3,7.4,7.5,7.6,7.7,7.9,8,8.1,8.2,8.3,8.4,8.5,8.6,8.8,8.9,9,9.1,9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.4,10.5,10.6,10.7,10.8,10.9,11,11.2,11.3,11.4,11.5,11.6,11.7,11.9,12,12.1,12.2,12.4,12.5,12.6,12.7,12.8,13,13.1,13.2,13.3,13.4,13.5,13.7,13.8,13.9,14,14.1,14.3,14.4,14.5,14.6,14.8,14.9,15,15.2,15.3,15.4,15.6,15.7,15.9,16,16.2,16.3],
        },
        {
          label: "KMS -1",
          fill: "false",
          backgroundColor: "rgba(0, 255, 0, 1)",
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [2.2,2.3,2.4,2.5,2.5,2.6,2.7,2.8,2.9,3,3,3.1,3.2,3.3,3.5,3.6,3.7,3.8,3.9,4,4.2,4.3,4.4,4.6,4.7,4.9,5,5.1,5.3,5.4,5.5,5.6,5.8,5.9,6,6.1,6.2,6.4,6.5,6.6,6.7,6.8,6.9,7,7.1,7.2,7.3,7.5,7.6,7.7,7.8,7.9,8,8.1,8.2,8.3,8.4,8.5,8.6,8.7,8.8,8.8,8.9,9,9.1,9.2,9.3,9.4,9.5,9.5,9.6,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.8,11,11.1,11.2,11.3,11.4,11.5,11.6,11.8,11.9,12,12.1,12.2,12.3,12.4,12.5,12.6,12.7,12.8,12.9,13.1,13.2,13.3,13.4,13.5,13.6,13.7,13.9,14,14.1,14.2,14.4,14.5,14.6,14.8,14.9,15],
        },
        {
          label: "KMS +1",
          fill: "-1",
          backgroundColor: "rgba(0, 255, 0, 1)", 
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [2.7,2.8,2.9,3,3,3.1,3.2,3.3,3.4,3.5,3.6,3.8,3.9,4,4.1,4.2,4.4,4.5,4.7,4.8,5,5.1,5.3,5.4,5.6,5.7,5.9,6.1,6.2,6.4,6.5,6.7,6.8,7,7.1,7.2,7.4,7.5,7.6,7.8,7.9,8,8.2,8.3,8.4,8.5,8.7,8.8,8.9,9,9.2,9.3,9.4,9.5,9.6,9.8,9.9,10,10.1,10.2,10.3,10.4,10.6,10.7,10.8,10.9,11,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.8,11.9,12,12.1,12.2,12.4,12.5,12.6,12.8,12.9,13,13.2,13.3,13.4,13.5,13.7,13.8,13.9,14.1,14.2,14.3,14.4,14.6,14.7,14.8,14.9,15.1,15.2,15.3,15.5,15.6,15.7,15.9,16,16.2,16.3,16.5,16.6,16.8,16.9,17.1,17.3,17.4,17.6,17.8],
        },
        {
          label: "KMS -2",
          fill: "false",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [2,2.1,2.2,2.3,2.3,2.4,2.5,2.6,2.6,2.7,2.8,2.9,3,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,4,4.1,4.2,4.3,4.5,4.6,4.7,4.8,5,5.1,5.2,5.3,5.4,5.6,5.7,5.8,5.9,6,6.1,6.2,6.3,6.4,6.5,6.6,6.7,6.8,6.9,7,7.1,7.2,7.3,7.4,7.5,7.6,7.6,7.7,7.8,7.9,8,8.1,8.2,8.3,8.3,8.4,8.5,8.6,8.7,8.7,8.8,8.9,9,9.1,9.1,9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9,10,10.1,10.2,10.4,10.5,10.6,10.7,10.8,10.9,11,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.8,11.9,12,12.1,12.2,12.3,12.4,12.5,12.6,12.7,12.8,12.9,13,13.2,13.3,13.4,13.5,13.6,13.7,13.9],
        },
        {
          label: "KMS +2",
          fill: "-1",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [3,3.1,3.1,3.2,3.3,3.4,3.6,3.7,3.8,3.9,4,4.1,4.2,4.4,4.5,4.6,4.8,4.9,5.1,5.3,5.4,5.6,5.8,5.9,6.1,6.3,6.4,6.6,6.8,7,7.1,7.3,7.4,7.6,7.7,7.9,8,8.2,8.3,8.5,8.6,8.7,8.9,9,9.2,9.3,9.4,9.6,9.7,9.8,10,10.1,10.2,10.4,10.5,10.6,10.8,10.9,11,11.2,11.3,11.4,11.5,11.6,11.7,11.9,12,12.1,12.2,12.3,12.4,12.5,12.6,12.7,12.8,13,13.1,13.2,13.3,13.5,13.6,13.7,13.9,14,14.2,14.3,14.5,14.6,14.7,14.9,15,15.1,15.3,15.4,15.6,15.7,15.8,16,16.1,16.3,16.4,16.5,16.7,16.8,17,17.1,17.3,17.5,17.6,17.8,18,18.1,18.3,18.5,18.7,18.8,19,19.2,19.4
          ],
        },
        {
          label: "KMS -3",
          fill: "false",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [1.9,1.9,2,2.1,2.1,2.2,2.3,2.3,2.4,2.5,2.6,2.7,2.7,2.8,2.9,3,3.1,3.2,3.3,3.4,3.6,3.7,3.8,3.9,4,4.1,4.3,4.4,4.5,4.6,4.7,4.8,4.9,5,5.1,5.2,5.3,5.4,5.5,5.6,5.7,5.8,5.9,6,6.1,6.2,6.3,6.4,6.5,6.6,6.6,6.7,6.8,6.9,7,7.1,7.2,7.2,7.3,7.4,7.5,7.6,7.6,7.7,7.8,7.9,7.9,8,8.1,8.2,8.2,8.3,8.4,8.5,8.5,8.6,8.7,8.8,8.9,9,9.1,9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.7,10.8,10.9,11,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.8,11.9,12,12.1,12.2,12.3,12.4,12.5,12.6,12.7,12.8],
        },
        {
          label: "KMS +3",
          fill: "-1",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [3.3,3.4,3.5,3.6,3.7,3.8,3.9,4,4.2,4.3,4.4,4.5,4.7,4.8,5,5.1,5.3,5.4,5.6,5.8,6,6.1,6.3,6.5,6.7,6.9,7.1,7.2,7.4,7.6,7.8,8,8.1,8.3,8.5,8.6,8.8,8.9,9.1,9.3,9.4,9.6,9.7,9.9,10,10.2,10.3,10.5,10.6,10.8,10.9,11.1,11.2,11.3,11.5,11.6,11.8,11.9,12.1,12.2,12.3,12.5,12.6,12.7,12.8,13,13.1,13.2,13.3,13.4,13.6,13.7,13.8,13.9,14,14.2,14.3,14.4,14.6,14.7,14.9,15,15.2,15.3,15.5,15.6,15.8,15.9,16.1,16.2,16.4,16.5,16.7,16.8,17,17.1,17.3,17.4,17.6,17.7,17.9,18,18.2,18.4,18.5,18.7,18.9,19.1,19.2,19.4,19.6,19.8,20,20.2,20.4,20.6,20.8,21,21.2],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#000000",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [{
        stacked: true,
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(0,242,195,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
    },
  },
};

const bbtbCo24 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    return {
      labels: [65,65.5,66,66.5,67,67.5,68,68.5,69,69.5,70,70.5,71,71.5,72,72.5,73,73.5,74,74.5,75,75.5,76,76.5,77,77.5,78,78.5,79,79.5,80,80.5,81,81.5,82,82.5,83,83.5,84,84.5,85,85.5,86,86.5,87,87.5,88,88.5,89,89.5,90,90.5,91,91.5,92,92.5,93,93.5,94,94.5,95,95.5,96,96.5,97,97.5,98,98.5,99,99.5,100,100.5,101,101.5,102,102.5,103,103.5,104,104.5,105,105.5,106,106.5,107,107.5,108,108.5,109,109.5,110,110.5,111,111.5,112,112.5,113,113.5,114,114.5,115,115.5,116,116.5,117,117.5,118,118.5,119,119.5,120],
      datasets: [
        {
          label: "Median",
          fill: "false",
          backgroundColor: "rgba(0, 0, 0, 1)",
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [7.4,7.6,7.7,7.8,7.9,8,8.1,8.2,8.4,8.5,8.6,8.7,8.8,8.9,9,9.1,9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.8,10.9,11,11.1,11.2,11.3,11.4,11.5,11.7,11.8,11.9,12,12.2,12.3,12.4,12.5,12.6,12.8,12.9,13,13.1,13.2,13.4,13.5,13.6,13.7,13.8,13.9,14.1,14.2,14.3,14.4,14.6,14.7,14.8,14.9,15.1,15.2,15.4,15.5,15.6,15.8,15.9,16.1,16.2,16.4,16.5,16.7,16.8,17,17.2,17.3,17.5,17.7,17.8,18,18.2,18.3,18.5,18.7,18.9,19.1,19.2,19.4,19.6,19.8,20,20.2,20.4,20.6,20.8,21,21.2,21.4,21.6,21.8,22,22.2,22.4],
        },
        {
          label: "KMS -1",
          fill: "false",
          backgroundColor: "rgba(0, 255, 0, 1)",
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [6.9,7,7.1,7.2,7.3,7.4,7.5,7.6,7.7,7.8,7.9,8,8.1,8.2,8.3,8.4,8.5,8.6,8.7,8.8,8.9,9,9.1,9.2,9.2,9.3,9.4,9.5,9.6,9.7,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.5,10.7,10.8,10.9,11,11.1,11.2,11.3,11.5,11.6,11.7,11.8,11.9,12,12.1,12.2,12.3,12.4,12.6,12.7,12.8,12.9,13,13.1,13.2,13.3,13.4,13.6,13.7,13.8,13.9,14,14.2,14.3,14.4,14.5,14.7,14.8,14.9,15.1,15.2,15.4,15.5,15.6,15.8,15.9,16.1,16.2,16.4,16.5,16.7,16.8,17,17.1,17.3,17.5,17.6,17.8,18,18.1,18.3,18.5,18.6,18.8,19,19.2,19.3,19.5,19.7,19.9,20,20.2,20.4],
        },
        {
          label: "KMS +1",
          fill: "-1",
          backgroundColor: "rgba(0, 255, 0, 1)", 
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [8.1,8.2,8.3,8.5,8.6,8.7,8.8,9,9.1,9.2,9.3,9.5,9.6,9.7,9.8,9.9,10,10.2,10.3,10.4,10.5,10.6,10.7,10.8,10.9,11,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.8,11.9,12.1,12.2,12.3,12.4,12.5,12.7,12.8,12.9,13.1,13.2,13.3,13.5,13.6,13.7,13.9,14,14.1,14.2,14.4,14.5,14.6,14.7,14.9,15,15.1,15.3,15.4,15.5,15.7,15.8,15.9,16.1,16.2,16.4,16.5,16.7,16.9,17,17.2,17.3,17.5,17.7,17.8,18,18.2,18.4,18.5,18.7,18.9,19.1,19.3,19.5,19.7,19.8,20,20.2,20.4,20.7,20.9,21.1,21.3,21.5,21.7,21.9,22.1,22.4,22.6,22.8,23,23.3,23.5,23.7,23.9,24.1,24.4,24.6],
        },
        {
          label: "KMS -2",
          fill: "false",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [6.3,6.4,6.5,6.6,6.7,6.8,6.9,7,7.1,7.2,7.3,7.4,7.5,7.6,7.7,7.8,7.9,7.9,8,8.1,8.2,8.3,8.4,8.5,8.5,8.6,8.7,8.8,8.8,8.9,9,9.1,9.2,9.3,9.3,9.4,9.5,9.6,9.7,9.9,10,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.8,10.9,11,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.8,11.9,12,12.1,12.2,12.3,12.4,12.5,12.6,12.8,12.9,13,13.1,13.2,13.3,13.4,13.6,13.7,13.8,13.9,14,14.2,14.3,14.4,14.5,14.7,14.8,14.9,15.1,15.2,15.3,15.5,15.6,15.8,15.9,16,16.2,16.3,16.5,16.6,16.8,16.9,17.1,17.2,17.4,17.5,17.7,17.9,18,18.2,18.3,18.5,18.6],
        },
        {
          label: "KMS +2",
          fill: "-1",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [8.8,8.9,9.1,9.2,9.4,9.5,9.6,9.8,9.9,10,10.2,10.3,10.4,10.6,10.7,10.8,11,11.1,11.2,11.3,11.4,11.6,11.7,11.8,11.9,12,12.1,12.2,12.3,12.4,12.6,12.7,12.8,12.9,13,13.1,13.3,13.4,13.5,13.7,13.8,13.9,14.1,14.2,14.4,14.5,14.7,14.8,14.9,15.1,15.2,15.3,15.5,15.6,15.8,15.9,16,16.2,16.3,16.5,16.6,16.7,16.9,17,17.2,17.4,17.5,17.7,17.9,18,18.2,18.4,18.5,18.7,18.9,19.1,19.3,19.5,19.7,19.9,20.1,20.3,20.5,20.7,20.9,21.1,21.3,21.5,21.8,22,22.2,22.4,22.7,22.9,23.1,23.4,23.6,23.9,24.1,24.4,24.6,24.9,25.1,25.4,25.6,25.9,26.1,26.4,26.6,26.9,27.2],
        },
        {
          label: "KMS -3",
          fill: "false",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [5.9,6,6.1,6.1,6.2,6.3,6.4,6.5,6.6,6.7,6.8,6.9,6.9,7,7.1,7.2,7.3,7.4,7.4,7.5,7.6,7.7,7.7,7.8,7.9,8,8,8.1,8.2,8.3,8.3,8.4,8.5,8.6,8.7,8.7,8.8,8.9,9,9.1,9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.8,10.9,11,11.1,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.8,11.9,12,12.1,12.2,12.3,12.4,12.5,12.6,12.8,12.9,13,13.1,13.2,13.3,13.4,13.5,13.7,13.8,13.9,14,14.1,14.3,14.4,14.5,14.6,14.8,14.9,15,15.2,15.3,15.4,15.6,15.7,15.8,16,16.1,16.2,16.4,16.5,16.7,16.8,16.9,17.1],
        },
        {
          label: "KMS +3",
          fill: "-1",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [9.6,9.8,9.9,10.1,10.2,10.4,10.5,10.7,10.8,11,11.1,11.3,11.4,11.6,11.7,11.8,12,12.1,12.2,12.4,12.5,12.6,12.8,12.9,13,13.1,13.3,13.4,13.5,13.6,13.7,13.8,14,14.1,14.2,14.4,14.5,14.6,14.8,14.9,15.1,15.2,15.4,15.5,15.7,15.8,16,16.1,16.3,16.4,16.6,16.7,16.9,17,17.2,17.3,17.5,17.6,17.8,17.9,18.1,18.3,18.4,18.6,18.8,18.9,19.1,19.3,19.5,19.7,19.9,20.1,20.3,20.5,20.7,20.9,21.1,21.3,21.6,21.8,22,22.2,22.5,22.7,22.9,23.2,23.4,23.7,23.9,24.2,24.4,24.7,25,25.2,25.5,25.8,26,26.3,26.6,26.9,27.2,27.5,27.8,28,28.3,28.6,28.9,29.2,29.5,29.8,30.1],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#000000",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [{
        stacked: true,
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(0,242,195,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const tbCe0 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    return {
      labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21,22,23,24],
      datasets: [
        {
          label: "Median",
          fill: "false",
          backgroundColor: "rgba(0, 0, 0, 1)",
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [49.1,53.7,57.1,59.8,62.1,64,65.7,67.3,68.7,70.1,71.5,72.8,74,75.2,76.4,77.5,78.6,79.7,80.7,81.7,82.7,83.7,84.6,85.5,86.4],
        },
        {
          label: "KMS -1",
          fill: "false",
          backgroundColor: "rgba(0, 255, 0, 1)",
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [47.3,51.7,55,57.7,59.9,61.8,63.5,65,66.4,67.7,69,70.3,71.4,72.6,73.7,74.8,75.8,76.8,77.8,78.8,79.7,80.6,81.5,82.3,83.2],
        },
        {
          label: "KMS +1",
          fill: "-1",
          backgroundColor: "rgba(0, 255, 0, 1)", 
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [51,55.6,59.1,61.9,64.3,66.2,68,69.6,71.1,72.6,73.9,75.3,76.6,77.8,79.1,80.2,81.4,82.5,83.6,84.7,85.7,86.7,87.7,88.7,89.6],
        },
        {
          label: "KMS -2",
          fill: "false",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [45.4,49.8,53,55.6,57.8,59.6,61.2,62.7,64,65.3,66.5,67.7,68.9,70,71,72,73,74,74.9,75.8,76.7,77.5,78.4,79.2,80],
        },
        {
          label: "KMS +2",
          fill: "-1",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [52.9,57.6,61.1,64,66.4,68.5,70.3,71.9,73.5,75,76.4,77.8,79.2,80.5,81.7,83,84.2,85.4,86.5,87.6,88.7,89.8,90.8,91.9,92.9],
        },
        {
          label: "KMS -3",
          fill: "false",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [43.6,47.8,51,53.5,55.6,57.4,58.9,60.3,61.7,62.9,64.1,65.2,66.3,67.3,68.3,69.3,70.2,71.1,72,72.8,73.7,74.5,75.2,76,76.7],
        },
        {
          label: "KMS +3",
          fill: "-1",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [54.7,59.5,63.2,66.1,68.6,70.7,72.5,74.2,75.8,77.4,78.9,80.3,81.7,83.1,84.4,85.7,87,88.2,89.4,90.6,91.7,92.9,94,95,96.1],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#000000",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [{
        stacked: true,
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(0,242,195,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################

const tbCe24 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    return {
      labels: [24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
      datasets: [
        {
          label: "Median",
          fill: "false",
          backgroundColor: "rgba(0, 0, 0, 1)",
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [85.7,86.6,87.4,88.3,89.1,89.9,90.7,91.4,92.2,92.9,93.6,94.4,95.1,95.7,96.4,97.1,97.7,98.4,99,99.7,100.3,100.9,101.5,102.1,102.7,103.3,103.9,104.5,105,105.6,106.2,106.7,107.3,107.8,108.4,108.9,109.4],
        },
        {
          label: "KMS -1",
          fill: "false",
          backgroundColor: "rgba(0, 255, 0, 1)",
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [82.5,83.3,84.1,84.9,85.7,86.4,87.1,87.9,88.6,89.3,89.9,90.6,91.2,91.9,92.5,93.1,93.8,94.4,95,95.6,96.2,96.7,97.3,97.9,98.4,99,99.5,100.1,100.6,101.1,101.6,102.2,102.7,103.2,103.7,104.2,104.7],
        },
        {
          label: "KMS +1",
          fill: "-1",
          backgroundColor: "rgba(0, 255, 0, 1)", 
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [88.9,89.9,90.8,91.7,92.5,93.4,94.2,95,95.8,96.6,97.4,98.1,98.9,99.6,100.3,101,101.7,102.4,103.1,103.8,104.5,105.1,105.8,106.4,107,107.7,108.3,108.9,109.5,110.1,110.7,111.3,111.9,112.5,113,113.6,114.2],
        },
        {
          label: "KMS -2",
          fill: "false",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [79.3,80,80.8,81.5,82.2,82.9,83.6,84.3,84.9,85.6,86.2,86.8,87.4,88,88.6,89.2,89.8,90.4,90.9,91.5,92,92.5,93.1,93.6,94.1,94.6,95.1,95.6,96.1,96.6,97.1,97.6,98.1,98.5,99,99.5,99.9],
        },
        {
          label: "KMS +2",
          fill: "-1",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [92.2,93.1,94.1,95,96,96.9,97.7,98.6,99.4,100.3,101.1,101.9,102.7,103.4,104.2,105,105.7,106.4,107.2,107.9,108.6,109.3,110,110.7,111.3,112,112.7,113.3,114,114.6,115.2,115.9,116.5,117.1,117.7,118.3,118.9],
        },
        {
          label: "KMS -3",
          fill: "false",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [76,76.8,77.5,78.1,78.8,79.5,80.1,80.7,81.3,81.9,82.5,83.1,83.6,84.2,84.7,85.3,85.8,86.3,86.8,87.4,87.9,88.4,88.9,89.3,89.8,90.3,90.7,91.2,91.7,92.1,92.6,93,93.4,93.9,94.3,94.7,95.2],
        },
        {
          label: "KMS +3",
          fill: "-1",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [95.4,96.4,97.4,98.4,99.4,100.3,101.3,102.2,103.1,103.9,104.8,105.6,106.5,107.3,108.1,108.9,109.7,110.5,111.2,112,112.7,113.5,114.2,114.9,115.7,116.4,117.1,117.7,118.4,119.1,119.8,120.4,121.1,121.8,122.4,123.1,123.7],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#000000",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [{
        stacked: true,
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(0,242,195,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################

const bbCe0 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    return {
      labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
      datasets: [
        {
          label: "Median",
          fill: "false",
          backgroundColor: "rgba(0, 0, 0, 1)",
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [3.2,4.2,5.1,5.8,6.4,6.9,7.3,7.6,7.9,8.2,8.5,8.7,8.9,9.2,9.4,9.6,9.8,10,10.2,10.4,10.6,10.9,11.1,11.3,11.5],
        },
        {
          label: "KMS -1",
          fill: "false",
          backgroundColor: "rgba(0, 255, 0, 1)",
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [2.8,3.6,4.5,5.2,5.7,6.1,6.5,6.8,7,7.3,7.5,7.7,7.9,8.1,8.3,8.5,8.7,8.9,9.1,9.2,9.4,9.6,9.8,10,10.2],
        },
        {
          label: "KMS +1",
          fill: "-1",
          backgroundColor: "rgba(0, 255, 0, 1)", 
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [3.7,4.8,5.8,6.6,7.3,7.8,8.2,8.6,9,9.3,9.6,9.9,10.1,10.4,10.6,10.9,11.1,11.4,11.6,11.8,12.1,12.3,12.5,12.8,13],
        },
        {
          label: "KMS -2",
          fill: "false",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [2.4,3.2,3.9,4.5,5,5.4,5.7,6,6.3,6.5,6.7,6.9,7,7.2,7.4,7.6,7.7,7.9,8.1,8.2,8.4,8.6,8.7,8.9,9],
        },
        {
          label: "KMS +2",
          fill: "-1",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [4.2,5.5,6.6,7.5,8.2,8.8,9.3,9.8,10.2,10.5,10.9,11.2,11.5,11.8,12.1,12.4,12.6,12.9,13.2,13.5,13.7,14,14.3,14.6,14.8],
        },
        {
          label: "KMS -3",
          fill: "false",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [2,2.7,3.4,4,4.4,4.8,5.1,5.3,5.6,5.8,5.9,6.1,6.3,6.4,6.6,6.7,6.9,7,7.2,7.3,7.5,7.6,7.8,7.9,8.1],
        },
        {
          label: "KMS +3",
          fill: "-1",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [4.8,6.2,7.5,8.5,9.3,10,10.6,11.1,11.6,12,12.4,12.8,13.1,13.5,13.8,14.1,14.5,14.8,15.1,15.4,15.7,16,16.4,16.7,17],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#000000",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [{
        stacked: true,
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(0,242,195,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################

const bbCe24 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    return {
      labels: [24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
      datasets: [
        {
          label: "Median",
          fill: "false",
          backgroundColor: "rgba(0, 0, 0, 1)",
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [11.5,11.7,11.9,12.1,12.3,12.5,12.7,12.9,13.1,13.3,13.5,13.7,13.9,14,14.2,14.4,14.6,14.8,15,15.2,15.3,15.5,15.7,15.9,16.1,16.3,16.4,16.6,16.8,17,17.2,17.3,17.5,17.7,17.9,18,18.2],
        },
        {
          label: "KMS -1",
          fill: "false",
          backgroundColor: "rgba(0, 255, 0, 1)",
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [10.2,10.3,10.5,10.7,10.9,11.1,11.2,11.4,11.6,11.7,11.9,12,12.2,12.4,12.5,12.7,12.8,13,13.1,13.3,13.4,13.6,13.7,13.9,14,14.2,14.3,14.5,14.6,14.8,14.9,15.1,15.2,15.3,15.5,15.6,15.8],
        },
        {
          label: "KMS +1",
          fill: "-1",
          backgroundColor: "rgba(0, 255, 0, 1)", 
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [13,13.3,13.5,13.7,14,14.2,14.4,14.7,14.9,15.1,15.4,15.6,15.8,16,16.3,16.5,16.7,16.9,17.2,17.4,17.6,17.8,18.1,18.3,18.5,18.8,19,19.2,19.4,19.7,19.9,20.1,20.3,20.6,20.8,21,21.2],
        },
        {
          label: "KMS -2",
          fill: "false",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [9,9.2,9.4,9.5,9.7,9.8,10,10.1,10.3,10.4,10.5,10.7,10.8,10.9,11.1,11.2,11.3,11.5,11.6,11.7,11.8,12,12.1,12.2,12.3,12.4,12.6,12.7,12.8,12.9,13,13.2,13.3,13.4,13.5,13.6,13.7],
        },
        {
          label: "KMS +2",
          fill: "-1",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [14.8,15.1,15.4,15.7,16,16.2,16.5,16.8,17.1,17.3,17.6,17.9,18.1,18.4,18.7,19,19.2,19.5,19.8,20.1,20.4,20.7,20.9,21.2,21.5,21.8,22.1,22.4,22.6,22.9,23.2,23.5,23.8,24.1,24.4,24.6,24.9],
        },
        {
          label: "KMS -3",
          fill: "false",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [8.1,8.2,8.4,8.5,8.6,8.8,8.9,9,9.1,9.3,9.4,9.5,9.6,9.7,9.8,9.9,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.8,10.9,11,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.8,11.9,12,12.1],
        },
        {
          label: "KMS +3",
          fill: "-1",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [17,17.3,17.7,18,18.3,18.7,19,19.3,19.6,20,20.3,20.6,20.9,21.3,21.6,22,22.3,22.7,23,23.4,23.7,24.1,24.5,24.8,25.2,25.5,25.9,26.3,26.6,27,27.4,27.7,28.1,28.5,28.8,29.2,29.5],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#000000",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [{
        stacked: true,
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(0,242,195,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
    },
  },
};

const bbtbCe0 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    return {
      labels: [45,45.5,46,46.5,47,47.5,48,48.5,49,49.5,50,50.5,51,51.5,52,52.5,53,53.5,54,54.5,55,55.5,56,56.5,57,57.5,58,58.5,59,59.5,60,60.5,61,61.5,62,62.5,63,63.5,64,64.5,65,65.5,66,66.5,67,67.5,68,68.5,69,69.5,70,70.5,71,71.5,72,72.5,73,73.5,74,74.5,75,75.5,76,76.5,77,77.5,78,78.5,79,79.5,80,80.5,81,81.5,82,82.5,83,83.5,84,84.5,85,85.5,86,86.5,87,87.5,88,88.5,89,89.5,90,90.5,91,91.5,92,92.5,93,93.5,94,94.5,95,95.5,96,96.5,97,97.5,98,98.5,99,99.5,100,100.5,101,101.5,102,102.5,103,103.5,104,104.5,105,105.5,106,106.5,107,107.5,108,108.5,109,109.5,110],
      datasets: [
        {
          label: "Median",
          fill: "false",
          backgroundColor: "rgba(0, 0, 0, 1)",
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [2.5,2.5,2.6,2.7,2.8,2.9,3,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4,4.2,4.3,4.4,4.5,4.7,4.8,5,5.1,5.2,5.4,5.5,5.6,5.7,5.9,6,6.1,6.3,6.4,6.5,6.6,6.7,6.9,7,7.1,7.2,7.3,7.4,7.5,7.6,7.7,7.9,8,8.1,8.2,8.3,8.4,8.5,8.6,8.7,8.8,8.9,9,9.1,9.1,9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.9,11,11.1,11.2,11.3,11.5,11.6,11.7,11.8,12,12.1,12.2,12.3,12.5,12.6,12.7,12.8,13,13.1,13.2,13.3,13.5,13.6,13.7,13.8,14,14.1,14.2,14.4,14.5,14.6,14.8,14.9,15,15.2,15.3,15.5,15.6,15.8,15.9,16.1,16.2,16.4,16.5,16.7,16.9,17.1,17.2,17.4,17.6,17.8,18,18.1,18.3],
        },
        {
          label: "KMS -1",
          fill: "false",
          backgroundColor: "rgba(0, 255, 0, 1)",
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [2.3,2.3,2.4,2.5,2.6,2.6,2.7,2.8,2.9,3,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4,4.2,4.3,4.4,4.5,4.6,4.8,4.9,5,5.1,5.3,5.4,5.5,5.6,5.7,5.8,5.9,6,6.2,6.3,6.4,6.5,6.6,6.7,6.8,6.9,7,7.1,7.2,7.3,7.4,7.5,7.6,7.7,7.7,7.8,7.9,8,8.1,8.2,8.3,8.4,8.5,8.5,8.6,8.7,8.8,8.9,9,9.1,9.1,9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.9,11,11.1,11.2,11.3,11.4,11.5,11.7,11.8,11.9,12,12.1,12.2,12.3,12.4,12.6,12.7,12.8,12.9,13,13.1,13.3,13.4,13.5,13.6,13.7,13.9,14,14.1,14.3,14.4,14.5,14.7,14.8,15,15.1,15.3,15.4,15.6,15.7,15.9,16,16.2,16.4,16.5,16.7],
        },
        {
          label: "KMS +1",
          fill: "-1",
          backgroundColor: "rgba(0, 255, 0, 1)", 
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [2.7,2.8,2.9,3,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4,4.2,4.3,4.4,4.6,4.7,4.8,5,5.1,5.3,5.4,5.6,5.7,5.9,6,6.2,6.3,6.4,6.6,6.7,6.9,7,7.1,7.3,7.4,7.5,7.6,7.8,7.9,8,8.1,8.3,8.4,8.5,8.6,8.7,8.8,9,9.1,9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.8,10.9,11,11.2,11.3,11.4,11.5,11.6,11.8,11.9,12,12.1,12.3,12.4,12.6,12.7,12.8,13,13.1,13.2,13.4,13.5,13.7,13.8,13.9,14.1,14.2,14.3,14.5,14.6,14.7,14.9,15,15.2,15.3,15.4,15.6,15.7,15.9,16,16.2,16.3,16.5,16.6,16.8,17,17.1,17.3,17.5,17.6,17.8,18,18.2,18.4,18.5,18.7,18.9,19.1,19.3,19.5,19.7,20,20.2],
        },
        {
          label: "KMS -2",
          fill: "false",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [2.1,2.1,2.2,2.3,2.4,2.4,2.5,2.6,2.6,2.7,2.8,2.9,3,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4,4.1,4.3,4.4,4.5,4.6,4.7,4.8,4.9,5,5.1,5.2,5.3,5.4,5.5,5.6,5.7,5.8,5.9,6,6.1,6.2,6.3,6.4,6.5,6.6,6.7,6.8,6.9,6.9,7,7.1,7.2,7.3,7.4,7.4,7.5,7.6,7.7,7.8,7.8,7.9,8,8.1,8.2,8.2,8.3,8.4,8.5,8.6,8.7,8.8,8.8,8.9,9,9.1,9.2,9.3,9.4,9.5,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.8,10.9,11,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.8,12,12.1,12.2,12.3,12.4,12.5,12.6,12.7,12.8,13,13.1,13.2,13.3,13.5,13.6,13.7,13.8,14,14.1,14.3,14.4,14.5,14.7,14.8,15,15.1,15.3],
        },
        {
          label: "KMS +2",
          fill: "-1",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [3,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4,4.2,4.3,4.4,4.6,4.7,4.9,5,5.2,5.3,5.5,5.7,5.8,6,6.1,6.3,6.5,6.6,6.8,6.9,7.1,7.3,7.4,7.6,7.7,7.8,8,8.1,8.3,8.4,8.6,8.7,8.8,9,9.1,9.2,9.4,9.5,9.6,9.7,9.9,10,10.1,10.2,10.3,10.5,10.6,10.7,10.8,10.9,11,11.1,11.2,11.4,11.5,11.6,11.7,11.8,11.9,12,12.1,12.3,12.4,12.5,12.6,12.8,12.9,13.1,13.2,13.3,13.5,13.6,13.8,13.9,14.1,14.2,14.4,14.5,14.7,14.8,15,15.1,15.3,15.5,15.6,15.8,15.9,16.1,16.2,16.4,16.5,16.7,16.8,17,17.1,17.3,17.5,17.6,17.8,18,18.1,18.3,18.5,18.7,18.9,19,19.2,19.4,19.6,19.8,20,20.2,20.5,20.7,20.9,21.1,21.3,21.6,21.8,22,22.3],
        },
        {
          label: "KMS -3",
          fill: "false",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [1.9,2,2,2.1,2.2,2.2,2.3,2.4,2.4,2.5,2.6,2.7,2.8,2.8,2.9,3,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4,4.1,4.2,4.3,4.4,4.5,4.6,4.7,4.8,4.9,5,5.1,5.2,5.3,5.4,5.5,5.5,5.6,5.7,5.8,5.9,6,6.1,6.1,6.2,6.3,6.4,6.5,6.5,6.6,6.7,6.8,6.9,6.9,7,7.1,7.1,7.2,7.3,7.4,7.4,7.5,7.6,7.7,7.7,7.8,7.9,8,8.1,8.1,8.2,8.3,8.4,8.5,8.6,8.7,8.8,8.9,9,9.1,9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9,10,10.1,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.8,10.9,11,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.8,11.9,12,12.1,12.3,12.4,12.5,12.6,12.7,12.8,13,13.1,13.2,13.3,13.5,13.6,13.7,13.9,14],
        },
        {
          label: "KMS +3",
          fill: "-1",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [3.3,3.4,3.5,3.6,3.7,3.8,4,4.1,4.2,4.3,4.5,4.6,4.8,4.9,5.1,5.2,5.4,5.5,5.7,5.9,6.1,6.3,6.4,6.6,6.8,7,7.1,7.3,7.5,7.7,7.8,8,8.2,8.4,8.5,8.7,8.8,9,9.1,9.3,9.5,9.6,9.8,9.9,10,10.2,10.3,10.5,10.6,10.7,10.9,11,11.1,11.3,11.4,11.5,11.7,11.8,11.9,12,12.2,12.3,12.4,12.5,12.6,12.8,12.9,13,13.1,13.3,13.4,13.5,13.7,13.8,13.9,14.1,14.2,14.4,14.5,14.7,14.9,15,15.2,15.4,15.5,15.7,15.9,16,16.2,16.4,16.5,16.7,16.9,17,17.2,17.4,17.5,17.7,17.9,18,18.2,18.4,18.6,18.7,18.9,19.1,19.3,19.5,19.6,19.8,20,20.2,20.4,20.6,20.8,21,21.3,21.5,21.7,21.9,22.2,22.4,22.6,22.9,23.1,23.4,23.6,23.9,24.2,24.4,24.7],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#000000",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [{
        stacked: true,
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(0,242,195,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
    },
  },
};

const bbtbCe24 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    return {
      labels: [65,65.5,66,66.5,67,67.5,68,68.5,69,69.5,70,70.5,71,71.5,72,72.5,73,73.5,74,74.5,75,75.5,76,76.5,77,77.5,78,78.5,79,79.5,80,80.5,81,81.5,82,82.5,83,83.5,84,84.5,85,85.5,86,86.5,87,87.5,88,88.5,89,89.5,90,90.5,91,91.5,92,92.5,93,93.5,94,94.5,95,95.5,96,96.5,97,97.5,98,98.5,99,99.5,100,100.5,101,101.5,102,102.5,103,103.5,104,104.5,105,105.5,106,106.5,107,107.5,108,108.5,109,109.5,110,110.5,111,111.5,112,112.5,113,113.5,114,114.5,115,115.5,116,116.5,117,117.5,118,118.5,119,119.5,120],
      datasets: [
        {
          label: "Median",
          fill: "false",
          backgroundColor: "rgba(0, 0, 0, 1)",
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [7.2,7.4,7.5,7.6,7.7,7.8,7.9,8,8.1,8.2,8.3,8.4,8.5,8.6,8.7,8.8,8.9,9,9.1,9.2,9.3,9.4,9.5,9.6,9.6,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.6,10.7,10.8,10.9,11,11.1,11.3,11.4,11.5,11.6,11.8,11.9,12,12.1,12.3,12.4,12.5,12.6,12.8,12.9,13,13.1,13.3,13.4,13.5,13.6,13.8,13.9,14,14.1,14.3,14.4,14.5,14.7,14.8,14.9,15.1,15.2,15.4,15.5,15.7,15.8,16,16.1,16.3,16.4,16.6,16.8,16.9,17.1,17.3,17.5,17.7,17.8,18,18.2,18.4,18.6,18.8,19,19.2,19.4,19.6,19.8,20,20.2,20.5,20.7,20.9,21.1,21.3,21.5,21.7,22,22.2,22.4,22.6,22.8],
        },
        {
          label: "KMS -1",
          fill: "false",
          backgroundColor: "rgba(0, 255, 0, 1)",
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [6.6,6.7,6.8,6.9,7,7.1,7.2,7.3,7.4,7.5,7.6,7.7,7.8,7.9,8,8.1,8.1,8.2,8.3,8.4,8.5,8.6,8.7,8.7,8.8,8.9,9,9.1,9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.6,10.7,10.8,10.9,11,11.1,11.2,11.4,11.5,11.6,11.7,11.8,11.9,12,12.1,12.3,12.4,12.5,12.6,12.7,12.8,12.9,13.1,13.2,13.3,13.4,13.5,13.7,13.8,13.9,14.1,14.2,14.3,14.5,14.6,14.7,14.9,15,15.2,15.3,15.5,15.6,15.8,15.9,16.1,16.3,16.4,16.6,16.8,17,17.1,17.3,17.5,17.7,17.9,18,18.2,18.4,18.6,18.8,19,19.2,19.4,19.6,19.8,19.9,20.1,20.3,20.5,20.7],
        },
        {
          label: "KMS +1",
          fill: "-1",
          backgroundColor: "rgba(0, 255, 0, 1)", 
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [7.9,8.1,8.2,8.3,8.4,8.5,8.7,8.8,8.9,9,9.1,9.2,9.3,9.4,9.5,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.8,10.9,11,11.1,11.2,11.3,11.4,11.6,11.7,11.8,11.9,12.1,12.2,12.3,12.5,12.6,12.7,12.9,13,13.2,13.3,13.4,13.6,13.7,13.8,14,14.1,14.3,14.4,14.5,14.7,14.8,14.9,15.1,15.2,15.4,15.5,15.6,15.8,15.9,16.1,16.2,16.4,16.5,16.7,16.9,17,17.2,17.4,17.5,17.7,17.9,18.1,18.2,18.4,18.6,18.8,19,19.2,19.4,19.6,19.8,20,20.3,20.5,20.7,20.9,21.2,21.4,21.6,21.8,22.1,22.3,22.6,22.8,23,23.3,23.5,23.8,24,24.2,24.5,24.7,25,25.2],
        },
        {
          label: "KMS -2",
          fill: "false",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [6.1,6.2,6.3,6.4,6.4,6.5,6.6,6.7,6.8,6.9,7,7.1,7.1,7.2,7.3,7.4,7.5,7.6,7.6,7.7,7.8,7.9,8,8,8.1,8.2,8.3,8.4,8.4,8.5,8.6,8.7,8.8,8.9,9,9.1,9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.9,11,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.8,11.9,12,12.1,12.2,12.3,12.4,12.5,12.7,12.8,12.9,13,13.1,13.3,13.4,13.5,13.6,13.8,13.9,14,14.2,14.3,14.5,14.6,14.7,14.9,15,15.2,15.4,15.5,15.7,15.8,16,16.2,16.3,16.5,16.7,16.8,17,17.2,17.3,17.5,17.7,17.8,18,18.2,18.4,18.5,18.7,18.9],
        },
        {
          label: "KMS +2",
          fill: "-1",
          backgroundColor: "rgba(255, 255, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [8.7,8.9,9,9.1,9.3,9.4,9.5,9.7,9.8,9.9,10,10.1,10.3,10.4,10.5,10.6,10.7,10.8,11,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.8,12,12.1,12.2,12.3,12.4,12.6,12.7,12.8,13,13.1,13.3,13.4,13.5,13.7,13.8,14,14.2,14.3,14.5,14.6,14.8,14.9,15.1,15.2,15.4,15.5,15.7,15.8,16,16.1,16.3,16.4,16.6,16.7,16.9,17,17.2,17.4,17.5,17.7,17.9,18,18.2,18.4,18.6,18.7,18.9,19.1,19.3,19.5,19.7,19.9,20.1,20.3,20.5,20.8,21,21.2,21.4,21.7,21.9,22.1,22.4,22.6,22.9,23.1,23.4,23.6,23.9,24.2,24.4,24.7,25,25.2,25.5,25.8,26.1,26.3,26.6,26.9,27.2,27.4,27.7,28],
        },
        {
          label: "KMS -3",
          fill: "false",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [5.6,5.7,5.8,5.8,5.9,6,6.1,6.2,6.3,6.3,6.4,6.5,6.6,6.7,6.7,6.8,6.9,7,7,7.1,7.2,7.2,7.3,7.4,7.5,7.5,7.6,7.7,7.8,7.8,7.9,8,8.1,8.2,8.3,8.4,8.5,8.5,8.6,8.7,8.8,8.9,9,9.1,9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.8,10.8,10.9,11,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.9,12,12.1,12.2,12.3,12.4,12.5,12.6,12.8,12.9,13,13.1,13.3,13.4,13.5,13.7,13.8,13.9,14.1,14.2,14.4,14.5,14.7,14.8,15,15.1,15.3,15.4,15.6,15.7,15.9,16,16.2,16.3,16.5,16.6,16.8,16.9,17.1,17.3],
        },
        {
          label: "KMS +3",
          fill: "-1",
          backgroundColor: "rgba(255, 0, 0, 1)", // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255, 0, 0, 1)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 1,
          pointHoverRadius: 1,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          data: [9.7,9.8,10,10.1,10.2,10.4,10.5,10.7,10.8,10.9,11.1,11.2,11.3,11.5,11.6,11.7,11.8,12,12.1,12.2,12.3,12.5,12.6,12.7,12.8,12.9,13.1,13.2,13.3,13.4,13.6,13.7,13.9,14,14.1,14.3,14.5,14.6,14.8,14.9,15.1,15.3,15.4,15.6,15.8,15.9,16.1,16.3,16.4,16.6,16.8,16.9,17.1,17.3,17.4,17.6,17.8,17.9,18.1,18.3,18.5,18.6,18.8,19,19.2,19.3,19.5,19.7,19.9,20.1,20.3,20.5,20.7,20.9,21.1,21.4,21.6,21.8,22,22.3,22.5,22.7,23,23.2,23.5,23.7,24,24.3,24.5,24.8,25.1,25.4,25.7,26,26.2,26.5,26.8,27.1,27.4,27.8,28.1,28.4,28.7,29,29.3,29.6,29.9,30.3,30.6,30.9,31.2],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#000000",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [{
        stacked: true,
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(0,242,195,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e",
        },
      }],
    },
  },
};

export {
  chartExample1, // in src/views/Dashboard.js
  chartExample2, // in src/views/Dashboard.js
  chartExample3, // in src/views/Dashboard.js
  chartExample4, // in src/views/Dashboard.js
  tbCo0,
  tbCo24,
  bbCo0,
  bbCo24,
  bbtbCo0,
  bbtbCo24,
  tbCe0,
  tbCe24,
  bbCe0,
  bbCe24,
  bbtbCe0,
  bbtbCe24,
};
