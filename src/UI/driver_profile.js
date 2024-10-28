function  draw_Driver_Profile(){
    backButton.show()

    //get raceID of driver at selected
    let driver_name = driver_matches[driverInput.value()-1]
    let driverID = driversDB.driverId(driver_name)

    let gap = windowWidth/50 //used for spacing
    
    if(((windowWidth/20)+8*gap*1.5)+2*(windowHeight/5)>cnv.height){
        // console.log("TOO MANY") testing
        resizeCanvas(windowWidth,((windowWidth/20)+8*gap*1.5)+2*(windowHeight/5))
    }
    
    
    //creating driver object
    let driverA = new Driver(driverID)
    driverA.createProfileStats(driversDB,resultsDB,sprintResultsDB);
    push()
    textAlign(LEFT)
    textFont('Consolas')
    textStyle(BOLD)
    textSize(windowWidth/20)
    text(driverA.forename +" "+ driverA.surname,windowWidth/45,windowWidth/20)
    pop()

    //text stats starts
    push()
    textAlign(LEFT)
    textFont('Consolas')
    textStyle(NORMAL)
    textSize(windowWidth/50)
    
    text("Wins:"+ driverA.wins+ " ("+((driverA.wins)/(driverA.num_of_races)*100).toPrecision(4)+"%)",windowWidth/45,(windowWidth/20)+gap*1.5)
    text("Poles:"+ driverA.poles+ " ("+((driverA.poles)/(driverA.num_of_races)*100).toPrecision(4)+"%)",windowWidth/45,(windowWidth/20)+2*gap*1.5)
    text("Podiums:"+ driverA.podiums+ " ("+((driverA.podiums)/(driverA.num_of_races)*100).toPrecision(4)+"%)",windowWidth/45,(windowWidth/20)+3*gap*1.5)
    text("Fastest Laps:"+ driverA.fastest_laps+ " ("+((driverA.poles)/(driverA.num_of_races)*100).toPrecision(4)+"%)",windowWidth/45,(windowWidth/20)+4*gap*1.5)
    text("DNFs:"+ driverA.dnfs+ " ("+((driverA.dnfs)/(driverA.num_of_races)*100).toPrecision(4)+"%)",windowWidth/45,(windowWidth/20)+5*gap*1.5)
    text("Races:"+ driverA.num_of_races,windowWidth/45,(windowWidth/20)+6*gap*1.5)
    textSize(windowWidth/55)
    text("Poles to Win Conversion Rate:"+ ((driverA.poles_to_wins)/(driverA.poles)*100).toPrecision(4) + "%",windowWidth/45,(windowWidth/20)+7*gap*1.5)
    textSize(windowWidth/50)
    text("Career Points: "+ driverA.career_points,windowWidth/45,(windowWidth/20)+8*gap*1.5)
    pop()//text stat ends

    
    //pie charts

    drawPie("Points Finishes",windowWidth/9,((windowWidth/20)+8*gap*1.5)+(windowHeight/5),windowHeight/5,windowHeight/5,driverA.points_scoring_races,driverA.num_of_races) // points finish graph

    drawPie("DNFs",windowWidth/9+1.5*((windowHeight/5)),((windowWidth/20)+8*gap*1.5)+(windowHeight/5),windowHeight/5,windowHeight/5,driverA.num_of_races-driverA.dnfs,driverA.num_of_races) // dnf graph

    //distribution graph

    drawFinishGraph(driverA.list_of_finishes,windowWidth*0.65,windowHeight*0.05,windowWidth*0.4,windowHeight*0.5)

    

    

}

function change_mode_to_driver_profile(){
    displaymode = 5
}