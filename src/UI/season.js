let season_select;
function draw_Season_Screen(){
  cnv.hide()
  year = new Date().getFullYear()
  season_select = createSeasonDropDown(cnvOffset.x,cnvOffset.y,80,40);
  p5_elements.push(season_select);
  drawChampionshipResults()
  
  season_select.input(drawChampionshipResults)

  
}

function drawChampionshipResults(){
  let current_year = new Date().getFullYear()
  year = season_select.value()
  console.log("Full year =",year)
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
  // console.log(JSON.stringify(current_drivers_IDs))

  //turn id's into first and last names;
  let current_drivers = [];
  for(let p =0 ;p<current_drivers_IDs.length;p++){
    driver = new Driver(parseInt(current_drivers_IDs[p]));
    driver.createHomePageStats(driversDB);
    current_drivers.push(driver.forename+" "+driver.surname)
  }
  // console.log(current_drivers)

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
          console.log("padded a 0")
          race_data.push(0)
        }
      }
      season_data.push(race_data)
      race_pos ++
    }else{
      index -- 
    }

  }
  console.log("races found",races_found)

  console.log(season_data.reverse())
  ticks = []
  for(let p=1;p<=current_season_race_ids.length;p++){
    ticks.push(p)
  }

  google.charts.setOnLoadCallback(drawLineGraph(current_drivers,season_data,ticks,year));
  showGraph()
}