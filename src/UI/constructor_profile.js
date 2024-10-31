function  draw_Constructor_Profile(){
    backButton.show()

    //get raceID of driver at selected
    let constructor_name = constructor_matches[constructorInput.value()-1]
    let constructorID = constructorsDB.constructorId(constructor_name)

    let gap = windowWidth/50 //used for spacing
    
    if(((windowWidth/20)+8*gap*1.5)+2*(windowHeight/5)>cnv.height){
        // console.log("TOO MANY") testing
        resizeCanvas(windowWidth,((windowWidth/20)+8*gap*1.5)+2*(windowHeight/5))
    }
    
    
    //creating driver object
    let constructorA = new Constructor(constructorID)
    constructorA.createProfileStats(constructorsDB,resultsDB,sprintResultsDB);
    push()
    textAlign(LEFT)
    textFont('Consolas')
    textStyle(BOLD)
    textSize(windowWidth/20)
    text(constructorA.name,windowWidth/45,windowWidth/20)
    pop()

    //text stats starts
    push()
    textAlign(LEFT)
    textFont('Consolas')
    textStyle(NORMAL)
    textSize(windowWidth/50)
    
    text("Wins:"+ constructorA.wins+ "("+((constructorA.wins)/(constructorA.num_of_races)*100).toPrecision(4)+"%)",windowWidth/45,(windowWidth/20)+gap*1.5)
    text("Poles:"+ constructorA.poles+ "("+((constructorA.poles)/(constructorA.num_of_races)*100).toPrecision(4)+"%)",windowWidth/45,(windowWidth/20)+2*gap*1.5)
    text("Podiums:"+ constructorA.podiums+ "("+((constructorA.podiums)/(constructorA.num_of_races)*100).toPrecision(4)+"%)",windowWidth/45,(windowWidth/20)+3*gap*1.5)
    text("Fastest Laps:"+ constructorA.fastest_laps+ "("+((constructorA.poles)/(constructorA.num_of_races)*100).toPrecision(4)+"%)",windowWidth/45,(windowWidth/20)+4*gap*1.5)
    text("DNFs:"+ constructorA.dnfs+ "("+((constructorA.dnfs)/(constructorA.num_of_races)*100).toPrecision(4)+"%)",windowWidth/45,(windowWidth/20)+5*gap*1.5)
    text("Races:"+ constructorA.num_of_races,windowWidth/45,(windowWidth/20)+6*gap*1.5)
    textSize(windowWidth/55)
    text("Poles to Win Conversion Rate:"+ ((constructorA.poles_to_wins)/(constructorA.poles)*100).toPrecision(4) + "%",windowWidth/45,(windowWidth/20)+7*gap*1.5)
    textSize(windowWidth/50)
    text("Career Points: "+ constructorA.career_points,windowWidth/45,(windowWidth/20)+8*gap*1.5)

    pop()//text stat ends

    //pie charts

    console.log("constructorA.car_entries",constructorA.car_entries)

    drawPie("Points Finishes",windowWidth/9,((windowWidth/20)+8*gap*1.5)+(windowHeight/5),windowHeight/5,windowHeight/5,constructorA.points_scoring_races,constructorA.num_of_races) // points finish graph

    drawPie("DNFs",windowWidth/9+1.5*((windowHeight/5)),((windowWidth/20)+8*gap*1.5)+(windowHeight/5),windowHeight/5,windowHeight/5,(constructorA.num_of_races)-(constructorA.dnfs),constructorA.num_of_races) // dnf graph

    //distribution graph

    drawFinishGraph(constructorA.list_of_finishes,windowWidth*0.65,windowHeight*0.05,windowWidth*0.4,windowHeight*0.5)

}

function change_mode_to_constructor_profile(){
    displaymode = 6
}