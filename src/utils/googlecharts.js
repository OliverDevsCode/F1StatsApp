google.charts.load('current', {packages: ['corechart', 'line']});

function hideGraph(){
  document.getElementById('chart_div').style.display = "none";
}

function showGraph(){
  document.getElementById('chart_div').style.display = "block";
}

function drawLineGraph(drivers_data,season_data,ticks_data,year) {

let drivers = drivers_data
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Race');
      for(let p =0; p<drivers.length;p++){
      data.addColumn('number', drivers[p]);
    }
      data.addRows(season_data);
 

      var options = {
        fontName: 'Consolas',     // Set the default font
        fontSize: 14,             // Set the default font size
        title: `${year} Season`,
        titleTextStyle: {
          fontSize: windowWidth*0.04,
          bold: true
          },
        
        hAxis: {
          title: 'Race',
          bold:true,
          ticks: ticks_data,
          textStyle: {
            bold: true,
          },
          titleTextStyle: {
          fontSize: windowWidth*0.03,
          bold: true
          },
          textPosition: 'out',
        },
        vAxis: {
          title: 'Points',
          bold:true,
          textStyle: {
            bold: true,
          },
          titleTextStyle: {
          fontSize: windowHeight*0.03,
          bold: true
          },
        },
        width: windowWidth,
        height: windowHeight*0.8,
        backgroundColor:'E1E0D7',
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }