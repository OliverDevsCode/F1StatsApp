//declared p5js elements
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
    searchBar.position(windowWidth*0.5,cnvOffset.y+50)
    searchBar.size(windowWidth*0.38,windowHeight*0.1)

    p5_elements.push(searchBar)


    //draw championship podium
    drawDriverPodium()

    //draw latestResults
    drawLatestResults()
    

}

/**
   * Get draw driver championship details box.
   * @function
   * @param {driverDetails} - driver details
   * @param {x} - x pos
   * @param {y} - y pos
   * @param {w} - width
   * @param {h} - height
   * @param {r} - corner radius
   * 
   * 
   * @returns {element} driver details box drawn on screen.
   */

function createDriverBox(driver_x,x,y,w,h,r){
    push()
    stroke(getColor(driver_x[1]))
    strokeWeight(5)
    rect(x,y,w,h,r)
    pop()
    push()
    textFont('Consolas')
    textSize(22)
    text(driver_x[4],x+30,y+5,windowWidth,windowHeight)
    textAlign(BASELINE)
    textSize(20)
    fill(getColor(driver_x[1]))
    text("Standing "+ getSuffix(driver_x[1]),x+10,y+30,w,h)
    text("Points "+ driver_x[2],x+10,y+55,w,h)
    text("Wins "+ driver_x[3],x+10,y+80,w,h)
    pop()
}  

/**
   * Get suffix for championship box.
   * @function
   * @param {positiont} - driver position
   * @returns {string} suffix.
   */
function getSuffix(x){
    if(x == 1){
        return "1st"
    }
    if(x == 2){
        return "2nd"
    }
    if(x == 3){
        return "3rd"
    }

}

/**
   * Get colour for championship box.
   * @function
   * @param {positiont} - driver position
   * @returns {string} colour.
   */

function getColor(c){
    if(c==1){
        return '#FFD700'
    }
    if(c==2){
        return '#C0C0C0'
    }
    if(c==3){
        return '#CD7F32'
    }
}

function drawDriverPodium(){
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
    driver2_stats.push(driver2.forename + " "+ driver2.surname)

    driver3 = new Driver(driver3_stats[0])
    driver3.createHomePageStats(driversDB)
    driver3_stats.push(driver3.forename + " "+ driver3.surname)


    // development testing REMOVE when done (START)
    // console.log(driver1_stats)
    // console.log(driver2_stats)
    // console.log(drisver3_stats)
    // development testing REMOVE when done (END)

    //P1
    createDriverBox(driver1_stats,windowWidth*0.55,windowHeight*0.3,230,120,windowHeight/25)

    //P2
    createDriverBox(driver2_stats,windowWidth*0.38,windowHeight*0.55,230,120,windowHeight/25)

    //P3
    createDriverBox(driver3_stats,windowWidth*0.72,windowHeight*0.55,230,120,windowHeight/25)
}

function drawLatestResults(){
    let latest_results = [] //format (position,name)
    let index = (resultsDB.length)-1
    let latest_raceID = resultsDB.raceId(index);
    while(resultsDB.raceId(index)==latest_raceID){
        driver_name = []
        driver = new Driver(resultsDB.driverId(index))
        driver.createHomePageStats(driversDB)
        driver_name.push(driver.forename + " "+ driver.surname)
        latest_results.push([resultsDB.positionText(index),driver_name])
        index --
    }

    push()
    textAlign(CENTER)
    textFont('Consolas')
    textSize(22)
    text("Latest Results",(windowWidth*0.01)+125,(windowHeight*0.1)-10)
    pop()
    push()
    strokeWeight(5)
    rect(windowWidth*0.01,windowHeight*0.1,250,windowHeight*0.7,20)
    pop()

    for(let p=0;p<latest_results.length;p++){
        push()
        textAlign(LEFT)
        textFont('Consolas')
        textSize(18)
        text(latest_results[latest_results.length-p-1][0] + "." +latest_results[latest_results.length-p-1][1],(windowWidth*0.01)+15,(windowHeight*0.14)+25*p)
        pop()
    }
    

}