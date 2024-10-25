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
    drawDriverPodium()
    

}

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
    createDriverBox(driver1_stats,windowWidth*0.5,windowHeight*0.22,230,120,windowHeight/25)

    //P2
    createDriverBox(driver2_stats,windowWidth*0.35,windowHeight*0.55,230,120,windowHeight/25)

    //P3
    createDriverBox(driver3_stats,windowWidth*0.7,windowHeight*0.55,230,120,windowHeight/25)
}

function drawLatestResults(){
    latest_results = [] //format (position,driverId)
}