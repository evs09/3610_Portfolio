//Data Source: https://data.cityofnewyork.us/Education/2021-2022-Average-Class-Size-Pilot/tfa9-aubf

// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["PS/IS 268", "PS 083 DONALD HERTZ", "PS 089 BRONX", "PS 019 MARINO JEANTET", "PS/MS 194", "PS/IS 218 RAFAEL HERNANDEZ DUAL LANGUAGE MAGNET SCHOOL", "PS/MS 280 MOSHOLU PARKWAY", "PS 179 KENSINGTON", "PS X037 - MULTIPLE INTELLIGENCE SCHOOL", "PS/MS 029 MELROSE SCHOOL"],
      datasets: [
        {
          label: "Average Class Size (2021-2022)",
          backgroundColor: ["#8e5ea2", "#667AB8", "#3e95cd", "#3DA8B6","#3cba9f", "#92BFAC", "#e8c3b9","#D68E85", "#C45850", "#E585AD"],
          data: [28.3,27.8,26.7,26.5,26.1,26,25.8,25.6,25.2,25.1]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Average Class Size (Evelyn Velez) '
      }
    }
});

//Source: https://data.cityofnewyork.us/dataset/Golf-Courses/uwmn-v7un

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Brooklyn", "Manhattan", "Queens", "Staten Island", "The Bronx"],
      datasets: [{
        label: "Number of Golf Courses",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2,0,4,3,5]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Golf Courses Under NYC Parks Jurisdiction (Evelyn Velez)'
      }
    }
});
