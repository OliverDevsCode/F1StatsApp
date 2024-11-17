let season_select;
let drivers_list_str;
let drivers_list_ids;
function draw_Season_Screen(){
  cnv.hide()
  year = new Date().getFullYear()
  season_select = createSeasonDropDown(cnvOffset.x,cnvOffset.y,80,40);

  p5_elements.push(season_select);
  drawChampionshipResults()

  season_select.input(drawChampionshipResults)
  simulationInterface()
  
}

function drawChampionshipResults(){
  let current_year = new Date().getFullYear()
  year = season_select.value()
  if(year != new Date().getFullYear()){
    clearP5Elements()
    simulationInterface()
    season_select.show()
    hideSimulationInterface();
  }
  if (typeof showSimulationInterface === "function") {
    if((year == new Date().getFullYear())){
      showSimulationInterface();
      if(prob_slider!=undefined){
        prob_slider.hide()
        prob_slider_label.hide()
        table_label.hide()
      }
    }
}
  document.getElementById('table_div').style.display = "none";
  // console.log("Full year =",year)
  let current_season_race_ids = []
  for(let index = driverStandingsDB.length-1; index>0;){
    if(parseInt(racesDB.year(index))==year){
      if(racesDB.year(index)<year){
        break
      }
      current_season_race_ids.push(parseInt(racesDB.raceId(index)))
      index--
    }else{
      index --
    }
  }
  let season_raceIds = [];
  if(year == current_year){
    let latest_raceId = parseInt(driverStandingsDB.raceId(driverStandingsDB.length-1))
  
    for(let index = 0; index<current_season_race_ids.length;index++){
      if(current_season_race_ids[index]<=latest_raceId){
        season_raceIds.push(current_season_race_ids[index])
      }
    }
    // current_season_race_ids = season_raceIds
  }else{
    season_raceIds = current_season_race_ids
  }
  // console.log(season_raceIds)


  let current_drivers_IDs = []
  let pos = 0

  for(let index = driverStandingsDB.length-1;index>0;index--){
      if(driverStandingsDB.raceId(index)==season_raceIds[pos]){
        current_drivers_IDs.push(driverStandingsDB.driverId(index))
    }
    if(driverStandingsDB.raceId(index)<season_raceIds[-1]){
      break 
    }
    

  }
  drivers_list_ids = current_drivers_IDs;
  // console.log(JSON.stringify(current_drivers_IDs))

  //turn id's into first and last names;
  let current_drivers = [];
  for(let p =0 ;p<current_drivers_IDs.length;p++){
    driver = new Driver(parseInt(current_drivers_IDs[p]));
    driver.createHomePageStats(driversDB);
    current_drivers.push(driver.forename+" "+driver.surname)
  }
  drivers_list_str = current_drivers;

  //get driver points for each race
  let season_data = []
  let latest_raceId = parseInt(driverStandingsDB.length-1)
  let race_pos = 0
  let races_found = 0
  for(let index = latest_raceId; parseFloat(driverStandingsDB.raceId(index))>=season_raceIds[season_raceIds.length-1];){
    if(parseInt(driverStandingsDB.raceId(index)) == season_raceIds[race_pos]){
      races_found ++
      let race_data = [(season_raceIds.length)-races_found+1]
      let driver_pos = 0
      while(parseInt(driverStandingsDB.raceId(index))==season_raceIds[race_pos]){
        if(parseInt(driverStandingsDB.driverId(index))==parseInt(current_drivers_IDs[driver_pos])){
          race_data.push(parseInt(driverStandingsDB.points(index)))
           index -- 

        }else{
          race_data.push(0)
        }
        driver_pos++
       
      }
      if((race_data.length-1)<current_drivers_IDs.length){
        extension = (current_drivers_IDs.length-(race_data.length-1))
        for(let extend = 0;extend<extension;extend++){
          // console.log("padded a 0")
          race_data.push(0)
        }
      }
      season_data.push(race_data)
      race_pos ++
    }else{
      index -- 
    }

  }
  // console.log("races found",races_found)

  // console.log(season_data.reverse())
  ticks = []
  for(let p=1;p<=current_season_race_ids.length;p++){
    ticks.push(p)
  }

  google.charts.setOnLoadCallback(drawLineGraph(current_drivers,season_data,ticks,year));
  showGraph()
}

function simulationInterface(){
  let driverA;
  let driverB;
  let sample_size;
  //draw options for simulator
  let formatted_options = []
  for(let i=0; i<drivers_list_ids.length; i ++){
    let current_data = [drivers_list_str[i],drivers_list_ids[i]]
    formatted_options.push(current_data)
  }

  //dropdowns
  let startx = windowWidth*0.3
  let driverA_select = createDropDown(formatted_options,startx,cnvOffset.y,windowWidth*0.15)
  let driverB_select = createDropDown(formatted_options,startx+(windowWidth*0.15)+120,cnvOffset.y,windowWidth*0.15)
  let outscores = createP('Outscores');
  outscores.position(startx+(windowWidth*0.15)+10,cnvOffset.y-18)
  outscores.style("text-align", "center");
  outscores.style('font-family', 'Consolas');
  outscores.style('font-size', '18px');
  outscores.style('font-weight', 'bolder');
  p5_elements.push(driverA_select)
  p5_elements.push(driverB_select)
  p5_elements.push(outscores)
  //slider
  let sample_slider = createSlider(10000, 1000000, 10000)
  sample_slider.position(startx+(windowWidth*0.40)+20,cnvOffset.y)
  sample_slider.input(updateSliderText)
  sample_size = createP(`Sample Size ${sample_slider.value()}`)
  p5_elements.push(sample_slider)
  p5_elements.push(sample_size)
  updateSliderText()

  //button
  let simulate = createNewButton("Simulate",1,1)
  simulate.position(windowWidth-simulate.elt.offsetWidth-5*cnvOffset.x,cnvOffset.y)
  simulate.mouseClicked(simulatePressed)

  //text for prob slider (created in simulation_screen.js)
  prob_slider_label = createP('Probability');
  prob_slider_label.position((windowWidth*0.1)+30,cnvOffset.y+16)
  prob_slider_label.style("text-align", "center");
  prob_slider_label.style('font-family', 'Consolas');
  prob_slider_label.style('font-size', '12px');
  prob_slider_label.style('font-weight', 'bolder');
  prob_slider_label.hide()
  p5_elements.push(prob_slider_label)

  //text for finish positions table
  table_label = createP('Finish Positions')
  table_label.position(windowWidth*0.1,cnvOffset.y+windowHeight*0.7)
  table_label.style("text-align", "center");
  table_label.style('font-family', 'Consolas');
  table_label.style('font-size', '30px');
  table_label.style('font-weight', 'bolder');
  table_label.hide()
  p5_elements.push(table_label)

  function updateSliderText(){
  sample_size.remove()
  p5_elements.pop()
  sample_size = createP(`Sample Size ${sample_slider.value()}`)
  sample_size.position(startx+(windowWidth*0.40)+20,cnvOffset.y+15)
  p5_elements.push(sample_size)
  }

  function simulatePressed(){
    if(prob_slider != undefined){
      prob_slider.remove()
    }
    if(driverA_select.value()==driverB_select.value()){
      alert("Please select 2 different drivers")
    }else{
      let pos_A = '';
      for(let i = 0; i<driverA_select.value().length;i++){
        if(Number.isInteger(parseInt(driverA_select.value().at(i)))==true){
          pos_A += driverA_select.value().at(i)
        }
      }
      pos_A = parseInt(pos_A)-1
      let pos_B = '';
      for(let i = 0; i<driverB_select.value().length;i++){
        if(Number.isInteger(parseInt(driverB_select.value().at(i)))==true){
          pos_B += driverB_select.value().at(i)
        }
      }
      pos_B = parseInt(pos_B)-1

      let driverA_ID = formatted_options[pos_A][1]
      let driverB_ID = formatted_options[pos_B][1]
      draw_Simulation_Screen(driverA_ID,driverB_ID,sample_slider.value())
    }
  }  

  showSimulationInterface = function(){
    driverA_select.show()
    driverB_select.show()
    sample_size.show()
    sample_slider.show()
    simulate.show()
    outscores.show()
    if((prob_slider!=undefined)){
      prob_slider.show()
      prob_slider_label.show()
      table_label.show()
    }
    simulate.mouseClicked(simulatePressed)
  }

  hideSimulationInterface = function(){
    driverA_select.hide()
    driverB_select.hide()
    sample_size.hide()
    sample_slider.hide()
    simulate.hide()
    outscores.hide()
    if(prob_slider!=undefined){
      prob_slider.hide()
      prob_slider_label.hide()
      table_label.hide()
    }
  }
}