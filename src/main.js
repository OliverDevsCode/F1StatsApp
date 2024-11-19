let displaymode;
let screen_history = [];
let cnv;
let cnvOffset
function preload(){
  loadDatabase()
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight*0.9);
  cnvOffset = cnv.elt.getBoundingClientRect()
  background('#E1E0D7');
  createDatabaseClasses()
  createBackButton();
  displaymode = 1;
}



//Once drawn set display to mode 0 so it isn't called every second.
function draw() {
  if(displaymode>0 && displaymode!=7){
    if(screen_history.includes(displaymode)==false){
    //push mode
     screen_history.push(displaymode)
    }
     
  }
  
 
  
  //back button
  backButton.mousePressed(go_back)

  //home screen
  if(displaymode==1){
    //prep canvas
    cnv.show()
    hideGraph()
    clearP5Elements();
    clear();
    background('#E1E0D7');

    //draw new screen
    draw_Home_Screen();
    console.log("Home Screen Drawn")
    displaymode = -1
    
    searchBar.input(startSearch)
    
  }

  //compare screen
  if(displaymode==2){

    //prep canvas
    clearP5Elements();
    cnv.show()
    hideGraph()
    clear();
    background('#E1E0D7');

    const start = Date.now()//search timer

    //draw new screen
    draw_Compare_Screen();
    
    const millis = Date.now() - start;//search timer
    console.log(`Search took ${millis}ms`)//search timer

    console.log("Compare Screen Drawn")
    displaymode = -2
  }

  //season screen
  if(displaymode==3){

    //prep canvas
    clearP5Elements();
    clear();
    background('#E1E0D7');

    const start = Date.now()//search timer

    //draw new screen
    draw_Season_Screen();
    
    const millis = Date.now() - start;//search timer
    console.log(`Season took ${millis}ms`)//search timer

    console.log("Season Screen Drawn")
    displaymode = -3
  }


  //search screen
  if(displaymode==4){

    //prep canvas
    clearP5Elements()
    cnv.show()
    hideGraph()
    clear()
    background('#E1E0D7');

    //get data and draw

    const start = Date.now()//search timer

    console.log("Search Screen Drawn")
    draw_Search_Screen(searchBar.value())

    const millis = Date.now() - start;//search timer
    console.log(`Search took ${millis}ms`)//search timer

    displaymode = -4
    
    //draw driver profile
    driverSelect.mousePressed(change_mode_to_driver_profile)
    //draw constructor profile
    constructorSelect.mousePressed(change_mode_to_constructor_profile)

  }

  if(displaymode == 5){
    //prep canvas
    clearP5Elements()
    cnv.show()
    hideGraph()
    clear()
    background('#E1E0D7')

    const start = Date.now()//profile timer
    //draw profile
    draw_Driver_Profile()
    const millis = Date.now() - start;//profile timer
    console.log(`Profile took ${millis}ms`)//profile timer

    console.log("Driver Profile Drawn")
    displaymode = -5

  }

  if(displaymode == 6){
    //prep canvas
    clearP5Elements()
    cnv.show()
    hideGraph()
    clear()
    background('#E1E0D7')
    draw_Constructor_Profile()

    console.log("Constructor Profile Drawn")
    displaymode = -6
  }

  if(displaymode == 7){
    //prep canvas
    clearP5Elements()
    cnv.hide()
    clear()
    background('#E1E0D7')
    backButton.show()
    showSimulationInterface();
    console.log("Simulation Drawn")
    displaymode = -7
  }

}  

function keyPressed(){
  if(keyCode == ENTER){
    if(displaymode == -4){
    if(driverSelect.value()!=undefined){
      change_mode_to_driver_profile()
    }
    if(constructorSelect.value()!=undefined){
      change_mode_to_constructor_profile()
    }
    }
  }
}