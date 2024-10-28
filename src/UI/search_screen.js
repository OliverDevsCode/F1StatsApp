let driverInput;
let constructorInput;
let driverSelect;
let constructorSelect;
let constructor_matches = [] //index position of the matches
let driver_matches = [] //index position of the matches

function draw_Search_Screen(user_input){
    backButton.show()

    constructor_matches = [] //clear
    driver_matches = [] //clear

    findResults(constructor_matches,driver_matches,user_input)
    
    drawSearchResults(constructor_matches,driver_matches)
}


 /**
   * Get matches for user search.
   * @function
   * @param {array} - constructor matches array
   * @param {array} - driver matches array
   * @param {user_input} - user input from searh bar
   * @returns {array} 2 arrays - constructor matches and driver matches.
   */
function findResults(constructor_matches,driver_matches,user_input){
    //sanitise user input
    user_input = user_input.toLowerCase()

    //find constructor matches
    for(let index =0; index<constructorsDB.length;index++){
        if(user_input == (constructorsDB.name(index)).toLowerCase() || user_input == (constructorsDB.nationality(index)).toLowerCase() ){
            constructor_matches.push(index)
        }
        
    }
    //seperate so close match comes up first in display
    for(let index =0; index<constructorsDB.length;index++){
        if((user_input).includes((constructorsDB.name(index)).toLowerCase())==true || (user_input).includes((constructorsDB.nationality(index)).toLowerCase())==true){
            if(constructor_matches.includes(index)==false){
                constructor_matches.push(index)
            }
        }
        
    }
    // console.log(`Constructor Index list =`,constructor_matches) tesing


    //find driver matches
    for(let index = 0; index<driversDB.length;index++){

        if(user_input == ((driversDB.forename(index))).toLowerCase() || user_input == ((driversDB.surname(index))).toLowerCase() || user_input == ((driversDB.number(index))).toLowerCase() || (user_input).includes((driversDB.nationality(index)).toLowerCase())==true){
            driver_matches.push(index)
        }
        
    }
    //seperate so close match comes up first in display
    for(let index = 0; index<driversDB.length;index++){

        if((user_input).includes((driversDB.forename(index)).toLowerCase())==true || (user_input).includes((driversDB.surname(index)).toLowerCase())==true || (user_input).includes((driversDB.number(index)).toLowerCase())==true || (user_input).includes((driversDB.nationality(index)).toLowerCase())==true){
            if(driver_matches.includes(index)==false){
                driver_matches.push(index)
            }
        }
        
    }
    // console.log(`Driver Index list =`,driver_matches) testing


}

/**
   * Get matches for user search.
   * @function
   * @param {array} - constructor matches array
   * @param {array} - driver matches array
   * @returns {screen} = drawn screen with p5js elements
   */

function drawSearchResults(constructor_matches,driver_matches){
    //search bar shown
    searchBar.show();
    searchBar.position((windowWidth*0.5)-(windowWidth*0.2), cnvOffset.y + 20);
    searchBar.style('font-style', 'bold');

    //left side (driver matches)
    
    textStyle(ITALIC)
    driverInput = createInput()
    p5_elements.push(driverInput)
    driverInput.attribute('placeholder','number')
    driverInput.style('font-style', 'italic');
    driverInput.style('font-family','Consolas')
    driverInput.style('text-align','center')
    driverInput.style('border-radius', '10px');

    driverSelect = createButton('Enter')
    p5_elements.push(driverSelect)
    driverSelect.style('font-style', 'italic');
    driverSelect.style('font-family','Consolas')
    driverSelect.style('text-align','center')
    driverSelect.style('border-radius', '10px');

    driverInput.size(80,40)
    driverInput.position((windowWidth*0.06)+180-driverInput.width/2,(windowHeight*0.19)+cnvOffset.y)
    driverSelect.position((windowWidth*0.06)+270-driverInput.width/2,(windowHeight*0.19)+cnvOffset.y+10)

    //draw drivers;
    if((windowHeight*0.30)+(30*driver_matches.length)>cnv.height){
        // console.log("TOO MANY") testing
        resizeCanvas(windowWidth,((windowHeight*0.19)+cnvOffset.y)+(30*driver_matches.length))
    }

    push()
    textStyle(BOLD)
    textFont('Consolas')
    textSize(30)
    textAlign(LEFT)
    text("Drivers",windowWidth*0.06,(windowHeight*0.2)+25)
    pop()
    push()
    
    for(let i = 0;i<driver_matches.length;i++){
        let driver_name = driversDB.forename(driver_matches[i]) +" "+ driversDB.surname(driver_matches[i])
        push()
        textFont('Consolas')
        textSize(25)
        text(i+1 + ":"+driver_name,windowWidth*0.06,(windowHeight*0.30)+(30*i))
        pop()

    }

    //right side constructors
    textStyle(ITALIC)
    constructorInput = createInput()
    p5_elements.push(constructorInput)
    constructorInput.attribute('placeholder','number')
    constructorInput.style('font-style', 'italic');
    constructorInput.style('font-family','Consolas')
    constructorInput.style('text-align','center')
    constructorInput.style('border-radius', '10px');

    constructorSelect = createButton('Enter')
    p5_elements.push(constructorSelect)
    constructorSelect.style('font-style', 'italic');
    constructorSelect.style('font-family','Consolas')
    constructorSelect.style('text-align','center')
    constructorSelect.style('border-radius', '10px');

    constructorInput.size(80,40)
    constructorInput.position((windowWidth*0.85)-constructorInput.width/2,(windowHeight*0.19)+cnvOffset.y)
    constructorSelect.position((windowWidth*0.85)+90-constructorInput.width/2,(windowHeight*0.19)+cnvOffset.y+10)

    //draw constructors;
    if((windowHeight*0.30)+(30*constructor_matches.length)>cnv.height){
        // console.log("TOO MANY") testing
        resizeCanvas(windowWidth,((windowHeight*0.19)+cnvOffset.y)+(30*constructor_matches.length))
    }

    push()
    textStyle(BOLD)
    textFont('Consolas')
    textSize(30)
    textAlign(LEFT)
    text("Constructors",(windowWidth*0.85)-260,(windowHeight*0.2)+25)
    pop()
    push()
    
    for(let i = 0;i<constructor_matches.length;i++){
        let constructor_name = constructorsDB.name(constructor_matches[i])
        push()
        textFont('Consolas')
        textSize(25)
        text(i+1 + ":"+constructor_name,(windowWidth*0.85)-260,(windowHeight*0.30)+(30*i))
        pop()

    }

}