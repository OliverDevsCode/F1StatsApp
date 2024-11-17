google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.load('current', {'packages': ['table']});

function hideGraph(){
  document.getElementById('chart_div').style.display = "none";
  document.getElementById('table_div').style.display = "none";
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

function drawSimulationLineGraph(drivers_data,season_data,simulation_data,ticks_data,year) {

      let drivers = drivers_data
            var data = new google.visualization.DataTable();
            data.addColumn('number', 'Race');
            for(let p =0; p<drivers.length;p++){
            data.addColumn('number', drivers[p]);
          }
            data.addRows(season_data);

            var predicted_data = new google.visualization.DataTable();
            predicted_data.addColumn('number','Races')
            predicted_data.addColumn('number',`${drivers_data[0]} Predicted`)
            predicted_data.addColumn('number',`${drivers_data[1]} Predicted`)

            predicted_data.addRows(simulation_data)
       
      
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
              series: {
                0: { color: 'blue' },
                1: { color: 'red' },
                2: { color: 'blue', lineDashStyle: [4, 4], lineWidth: 2 },  // Dotted line for driverA
                3: { color: 'red', lineDashStyle: [4, 4], lineWidth: 2 }    // Dotted line for driverB

              },
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
            var merged_chart = google.visualization.data.join(
              data,predicted_data,'full',[[0, 0]], [1, 2], [1, 2])
      
            chart.draw(merged_chart, options);
    }

function drawTable(season_data){
      var data = new google.visualization.DataTable();
      
      // Adding columns with appropriate headers
      data.addColumn('string', 'Driver');   // First column header is 'Race'
      for(let p =0; p<season_data[0].length-1;p++){
      data.addColumn('string', `Race ${p+1}`);
    }
      data.addRows(season_data);

      var cssClassNames = {
        headerRow: 'headerRow',
        tableRow: 'tableRow',
        oddTableRow: 'odd-tableRow',
        selectedTableRow: 'selected-table-row',
      }
      
      var options = {
        width:windowWidth-30,
        allowHtml:true,
        cssClassNames: cssClassNames,
        frozenColumns:1,
      };
  
      // Creating the table visualization
      var table = new google.visualization.Table(document.getElementById('table_div'));

      var formatter = new google.visualization.ColorFormat();
      formatter.addRange(10,21,'blue')
      formatter.addRange(4,9,'#008000')
      formatter.addRange(3,4,'#CD7F32')
      formatter.addRange(2,3,'silver')
      formatter.addRange(1,2,'gold')
      for(let i =1; i<= season_data[0].length-1;i++){
        formatter.format(data,i)
      }

      
    
      // Drawing the table with options
      table.draw(data,options)
    }