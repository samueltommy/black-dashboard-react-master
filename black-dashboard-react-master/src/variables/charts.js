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
const chartExample5 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke1 = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradientStroke1.addColorStop(0, "rgba(255, 0, 0, 0.7)"); // Start color (red with 50% opacity)
    gradientStroke1.addColorStop(1, "rgba(0, 0, 0, 0.1)"); // End color (black with 50% opacity)

    let gradientStroke2 = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradientStroke2.addColorStop(0, "rgba(255, 255, 0, 0.5)"); // Start color (red with 50% opacity)
    gradientStroke2.addColorStop(1, "rgba(0, 0, 0, 0.1)"); // End color (black with 50% opacity)

    let gradientStroke3 = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradientStroke3.addColorStop(0, "rgba(0, 255, 0, 0.3)"); // Start color (red with 50% opacity)
    gradientStroke3.addColorStop(1, "rgba(0, 0, 0, 0.1)"); // End color (black with 50% opacity)

    return {
      labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
      datasets: [
        {
          label: "KMS -1",
          fill: "end",
          backgroundColor: gradientStroke3,
          borderColor: "rgba(0, 255, 0, 0.5)",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 0.5)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 0.5)",
          pointBorderWidth: 10,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          data: [2.9,3.9,4.9,5.7,6.2,6.7,7.1,7.4,7.7,8,8.2,8.4,8.6,8.8,9,9.2,9.4,9.6,9.8,10,10.1,10.3,10.5,10.7,10.8,11,11.2,11.3,11.5,11.7,11.8,12,12.1,12.3,12.4,12.6,12.7,12.9,13,13.1,13.3,13.4,13.6,13.7,13.8,14,14.1,14.3,14.4,14.5,14.7,14.8,15,15.1,15.2,15.4,15.5,15.6,15.8,15.9,16],
        },
        {
          label: "KMS +1",
          fill: "start",
          backgroundColor: gradientStroke3, 
          borderColor: "rgba(0, 255, 0, 0.5)",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 0.5)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 0.5)",
          pointBorderWidth: 10,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          data: [3.9,5.1,6.3,7.2,7.8,8.4,8.8,9.2,9.6,9.9,10.2,10.5,10.8,11,11.3,11.5,11.7,12,12.2,12.5,12.7,12.9,13.2,13.4,13.6,13.9,14.1,14.3,14.5,14.8,15,15.2,15.4,15.6,15.8,16,16.2,16.4,16.6,16.8,17,17.2,17.4,17.6,17.8,18,18.2,18.4,18.6,18.8,19,19.2,19.4,19.6,19.8,20,20.2,20.4,20.6,20.8,21],
        },
        {
          label: "KMS -2",
          fill: "end",
          backgroundColor: gradientStroke2, // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 0.5)",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 0.5)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 0.5)",
          pointBorderWidth: 10,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          data: [2.5,3.4,4.3,5,5.6,6,6.4,6.7,6.9,7.1,7.4,7.6,7.7,,8.1,8.3,8.4,8.6,8.8,8.9,9.1,9.2,9.4,9.5,9.7,9.8,10,10.1,10.2,10.4,10.5,10.7,10.8,10.9,11,11.2,11.3,11.4,11.5,11.6,11.8,11.9,12,12.1,12.2,12.4,12.5,12.6,12.7,12.8,12.9,13.1,13.2,13.3,13.4,13.5,13.6,13.7,13.8,14,14.1],
        },
        {
          label: "KMS +2",
          fill: "start",
          backgroundColor: gradientStroke2, // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 0.5)",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 0.5)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 0.5)",
          pointBorderWidth: 10,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          data: [4.4,5.8,7.1,8,8.7,9.3,9.8,10.3,10.7,11,11.4,11.7,12,12.3,12.6,12.8,13.1,13.4,13.7,13.9,14.2,14.5,14.7,15,15.3,15.5,15.8,16.1,16.3,16.6,16.9,17.1,17.4,17.6,17.8,18.1,18.3,18.6,18.8,19,19.3,19.5,19.7,20,20.2,20.5,20.7,20.9,21.2,21.4,21.7,21.9,22.2,22.4,22.7,22.9,23.2,23.4,23.7,23.9,24.2],
        },
        {
          label: "KMS -3",
          fill: "end",
          backgroundColor: gradientStroke1, // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 0.5)",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 10,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          data: [2.1,2.9,3.8,4.4,4.9,5.3,5.7,5.9,6.2,6.4,6.6,6.8,6.9,7.1,7.2,7.4,7.5,7.7,7.8,8,8.1,8.2,8.4,8.5,8.6,8.8,8.9,9,9.1,9.2,9.4,9.5,9.6,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.8,10.9,11,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.8,11.9,12,12.1,12.2,12.3,12.4],
        },
        {
          label: "KMS +3",
          fill: "start",
          backgroundColor: gradientStroke1, // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 10,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          data: [5,6.6,8,9,9.7,10.4,10.9,11.4,11.9,12.3,12.7,13,13.3,13.7,14,14.3,14.6,14.9,15.3,15.6,15.9,16.2,16.5,16.8,17.1,17.5,17.8,18.1,18.4,18.7,19,19.3,19.6,19.9,20.2,20.4,20.7,21,21.3,21.6,21.9,22.1,22.4,22.7,23,23.3,23.6,23.9,24.2,24.5,24.8,25.1,25.4,25.7,26,26.3,26.6,26.9,27.2,27.6,27.9],
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
const chartExample6 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke1 = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradientStroke1.addColorStop(0, "rgba(255, 0, 0, 0.7)"); // Start color (red with 50% opacity)
    gradientStroke1.addColorStop(1, "rgba(0, 0, 0, 0.1)"); // End color (black with 50% opacity)

    let gradientStroke2 = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradientStroke2.addColorStop(0, "rgba(255, 255, 0, 0.5)"); // Start color (red with 50% opacity)
    gradientStroke2.addColorStop(1, "rgba(0, 0, 0, 0.1)"); // End color (black with 50% opacity)

    let gradientStroke3 = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradientStroke3.addColorStop(0, "rgba(0, 255, 0, 0.3)"); // Start color (red with 50% opacity)
    gradientStroke3.addColorStop(1, "rgba(0, 0, 0, 0.1)"); // End color (black with 50% opacity)

    return {
      labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
      datasets: [
        {
          label: "KMS -1",
          fill: "end",
          backgroundColor: gradientStroke3, // Red color with 50% opacity
          borderColor: "rgba(0, 255, 0, 0.3)",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 0.3)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 0.3)",
          pointBorderWidth: 10,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          data: [2.9,3.9,4.9,5.7,6.2,6.7,7.1,7.4,7.7,8,8.2,8.4,8.6,8.8,9,9.2,9.4,9.6,9.8,10,10.1,10.3,10.5,10.7,10.8,11,11.2,11.3,11.5,11.7,11.8,12,12.1,12.3,12.4,12.6,12.7,12.9,13,13.1,13.3,13.4,13.6,13.7,13.8,14,14.1,14.3,14.4,14.5,14.7,14.8,15,15.1,15.2,15.4,15.5,15.6,15.8,15.9,16],
        },
        {
          label: "KMS +1",
          fill: "start",
          backgroundColor: gradientStroke3, // Red color with 50% opacity
          borderColor: "rgba(0, 255, 0, 0.3)",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(0, 255, 0, 0.3)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(0, 255, 0, 0.3)",
          pointBorderWidth: 10,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          data: [3.9,5.1,6.3,7.2,7.8,8.4,8.8,9.2,9.6,9.9,10.2,10.5,10.8,11,11.3,11.5,11.7,12,12.2,12.5,12.7,12.9,13.2,13.4,13.6,13.9,14.1,14.3,14.5,14.8,15,15.2,15.4,15.6,15.8,16,16.2,16.4,16.6,16.8,17,17.2,17.4,17.6,17.8,18,18.2,18.4,18.6,18.8,19,19.2,19.4,19.6,19.8,20,20.2,20.4,20.6,20.8,21],
        },
        {
          label: "KMS -2",
          fill: "end",
          backgroundColor: gradientStroke2, // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 0.5)",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 0.5)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 0.5)",
          pointBorderWidth: 10,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          data: [2.5,3.4,4.3,5,5.6,6,6.4,6.7,6.9,7.1,7.4,7.6,7.7,,8.1,8.3,8.4,8.6,8.8,8.9,9.1,9.2,9.4,9.5,9.7,9.8,10,10.1,10.2,10.4,10.5,10.7,10.8,10.9,11,11.2,11.3,11.4,11.5,11.6,11.8,11.9,12,12.1,12.2,12.4,12.5,12.6,12.7,12.8,12.9,13.1,13.2,13.3,13.4,13.5,13.6,13.7,13.8,14,14.1],
        },
        {
          label: "KMS +2",
          fill: "start",
          backgroundColor: gradientStroke2, // Red color with 50% opacity
          borderColor: "rgba(255, 255, 0, 0.5)",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 255, 0, 0.5)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 255, 0, 0.5)",
          pointBorderWidth: 10,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          data: [4.4,5.8,7.1,8,8.7,9.3,9.8,10.3,10.7,11,11.4,11.7,12,12.3,12.6,12.8,13.1,13.4,13.7,13.9,14.2,14.5,14.7,15,15.3,15.5,15.8,16.1,16.3,16.6,16.9,17.1,17.4,17.6,17.8,18.1,18.3,18.6,18.8,19,19.3,19.5,19.7,20,20.2,20.5,20.7,20.9,21.2,21.4,21.7,21.9,22.2,22.4,22.7,22.9,23.2,23.4,23.7,23.9,24.2],
        },
        {
          label: "KMS -3",
          fill: "end",
          backgroundColor: gradientStroke1, // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 0.5)",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 10,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          data: [2.1,2.9,3.8,4.4,4.9,5.3,5.7,5.9,6.2,6.4,6.6,6.8,6.9,7.1,7.2,7.4,7.5,7.7,7.8,8,8.1,8.2,8.4,8.5,8.6,8.8,8.9,9,9.1,9.2,9.4,9.5,9.6,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.8,10.9,11,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.8,11.9,12,12.1,12.2,12.3,12.4],
        },
        {
          label: "KMS +3",
          fill: "start",
          backgroundColor: gradientStroke1, // Red color with 50% opacity
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
          pointBorderWidth: 10,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          data: [5,6.6,8,9,9.7,10.4,10.9,11.4,11.9,12.3,12.7,13,13.3,13.7,14,14.3,14.6,14.9,15.3,15.6,15.9,16.2,16.5,16.8,17.1,17.5,17.8,18.1,18.4,18.7,19,19.3,19.6,19.9,20.2,20.4,20.7,21,21.3,21.6,21.9,22.1,22.4,22.7,23,23.3,23.6,23.9,24.2,24.5,24.8,25.1,25.4,25.7,26,26.3,26.6,26.9,27.2,27.6,27.9],
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

module.exports = {
  chartExample1, // in src/views/Dashboard.js
  chartExample2, // in src/views/Dashboard.js
  chartExample3, // in src/views/Dashboard.js
  chartExample4, // in src/views/Dashboard.js
  chartExample5,
  chartExample6,
};
