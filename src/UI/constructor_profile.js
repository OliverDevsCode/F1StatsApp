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
    
    
    //creating constructor object
    let constructorA = new Constructor(constructorID)
    constructorA.createProfileStats(constructorsDB,resultsDB,sprintResultsDB);
    drawConstructorStats(constructorA,gap)

    //adjust distribution graph
    sliderStart = createSlider(1,(constructorA.list_of_finishes).length,1)
    sliderStart.position(windowWidth*0.65+cnvOffset.x, windowHeight*0.65+cnvOffset.y)
    let startValue = sliderStart.value()
    p5_elements.push(sliderStart)

    sliderEnd = createSlider(1,(constructorA.list_of_finishes).length,(constructorA.list_of_finishes).length)
    sliderEnd.position(windowWidth*0.65+cnvOffset.x, windowHeight*0.7+cnvOffset.y)
    let endValue = sliderEnd.value()
    p5_elements.push(sliderEnd);

    sliderChanged()
    sliderStart.input(sliderChanged);
    sliderEnd.input(sliderChanged);

    function sliderChanged(){
        startValue = sliderStart.value()
        endValue = sliderEnd.value()
    //prevent start slider being greater than end slider
        if (startValue >= endValue) {
            sliderEnd.value(startValue+1);
        }else{
            clear()
            drawConstructorStats(constructorA,gap)
            let race_selection = (constructorA.list_of_finishes).slice(startValue-1,endValue-1)
            drawFinishGraph(race_selection,windowWidth*0.65,windowHeight*0.05,windowWidth*0.35,windowHeight*0.5)//changed width - windowWidth from *0.4 to *0.35
            text(`Start: ${startValue}`, windowWidth*0.60, windowHeight*0.60+cnvOffset.y/2);
            text(`End: ${endValue}`, windowWidth*0.60, windowHeight*0.65+cnvOffset.y/2);
        }
        //display postion
        


        }
   

}

function drawConstructorStats(constructorA,gap){
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

    
}

function change_mode_to_constructor_profile(){
    let userinput = constructorInput.value()
    if(userinput.length>0){
        displaymode = 6
    }
}