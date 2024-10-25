let searchBar;
function draw_Home_Screen(){
    searchBar = createInput() // may need to be outside function so its a global and cam be accessed anywhere
    push()
    searchBar.attribute('placeholder','Search - Driver/Constructor')
    searchBar.style('font-size', (windowWidth)*0.065);
    searchBar.style('font-style', 'italic');
    searchBar.style('font-family','Consolas')
    searchBar.style('border-radius', '20px');
    searchBar.style('border', '5px solid black');  // 5px border thickness
    pop()
    searchBar.position(windowWidth*0.5,windowHeight*0.2)
    searchBar.size(windowWidth*0.4,windowHeight*0.1)

    //draw championship podium
    let driver1_stats = []; //format DriverID,Position,Points,Wins
    let driver2_stats = [];
    let driver3_stats= [];

    for(let p=0; p < driverStandingsDB.length && p<25 ;p++){
        let position = driverStandingsDB.length - p
        if(driverStandingsDB.position(position)==1){
            driver1_stats.push(parseInt(driverStandingsDB.driverId(position)),driverStandingsDB.position(position),driverStandingsDB.points(position),driverStandingsDB.wins(position))
        }
        if(driverStandingsDB.position(position)==2){
            driver2_stats.push(parseInt(driverStandingsDB.driverId(position)),driverStandingsDB.position(position),driverStandingsDB.points(position),driverStandingsDB.wins(position))
        }
        if(driverStandingsDB.position(position)==3){
            driver3_stats.push(parseInt(driverStandingsDB.driverId(position)),driverStandingsDB.position(position),driverStandingsDB.points(position),driverStandingsDB.wins(position))
        }
    }

    driver1 = new Driver(driver1_stats[0])
    driver1.createHomePageStats(driversDB)
    driver1_stats.push(driver1.forename + " "+ driver1.surname)

    driver2 = new Driver(driver2_stats[0])
    driver2.createHomePageStats(driversDB)
    driver2_stats.push(driver2.forename)


    // development testing REMOVE when done (START)
    console.log(driver1_stats)
    console.log(driver2_stats)
    console.log(driver3_stats)
    // development testing REMOVE when done (END)




}